import { type NextMiddleware, NextResponse } from 'next/server';
import { ratelimit, auth } from './middlewares';

//#############################################################################
// Middleware Configuration                                                   #
//#############################################################################

/**
 * Configuration for the middleware matcher in a Next.js application.
 * - `next-router-prefetch`: Indicates whether the router is prefetching.
 * - `purpose`: Specifies the purpose of the request, e.g., prefetch.
 */
export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|image|sitemap.xml|favicon.ico|robots.txt).*)',
    },
    {
      source: '/:path*',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};

//#############################################################################
// Middleware execution order control settings                                #
//#############################################################################

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

/**
 * Chains multiple middleware functions together, ensuring they are executed
 * in the specified order. This function recursively invokes each middleware
 * in the chain and passes control to the next middleware until all are executed.
 *
 * @param functions - An array of middleware factories to be executed in order.
 * @param index - The current index of the middleware being executed (default is 0).
 * @returns A NextMiddleware function to handle the request/response.
 */
export function chain(functions: MiddlewareFactory[], index = 0): NextMiddleware {
  if (!functions[index]) return () => NextResponse.next();
  const next = chain(functions, index + 1);
  return functions[index](next);
}

export default chain([
  ratelimit,
  auth,
  // ...Add middleware here (executed in order from top to bottom)
]);
