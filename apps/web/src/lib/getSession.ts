'use server';

import { cookies, headers } from 'next/headers';
import type { DiscordAuthProfile } from '@workspace/types/api';
import { NodeErrorMessage, ErrorMessage } from '@workspace/constants';
import { FETCH_ERROR_MESSAGES, fetcher, FetcherError } from './fetcher';
import { logger } from './logger';
import { ApiError } from './errors';

export async function getSession<T = DiscordAuthProfile>(): Promise<T | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('connect.sid');
  if (!token) return null;

  const headerStore = await headers();
  const userAgent = headerStore.get('user-agent');
  const path = `/api/auth/discord/me`;
  const logDetails = { method: 'GET', url: path, agent: userAgent };

  try {
    const response = await fetcher.get<T>(path, {
      headers: {
        Cookie: `connect.sid=${token.value}`,
      },
      next: { revalidate: 5 },
    });

    if (response.ok) {
      const sessionUser = response.data;
      logger('info', 'GetSession', { status: response.status, ...logDetails, context: { sessionUser } });
      return sessionUser;
    }

    throw new ApiError(response);
  } catch (e: unknown) {
    const logError = (level: 'warn' | 'error', message: string, error: unknown, status = 500) => {
      logger(level, 'GetSession', { status, message, ...logDetails, context: { error } });
    };

    switch (true) {
      case e instanceof ApiError: {
        const level = e.status > 500 ? 'error' : 'warn';
        logError(level, ErrorMessage[e.code].log, e, e.status);
        break;
      }
      case e instanceof FetcherError: {
        logError('error', FETCH_ERROR_MESSAGES[e.code].log, e);
        break;
      }
      case e instanceof Error: {
        logError('error', NodeErrorMessage.NodeError.log, e);
        break;
      }
      default: {
        logError('error', NodeErrorMessage.UnknownError.log, e);
        break;
      }
    }

    throw e;
  }
}
