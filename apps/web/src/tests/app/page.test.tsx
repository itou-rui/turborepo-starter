import type { ReactElement } from 'react';
import '@testing-library/dom';
import LandingPage from '../../app/(lp)/page';
import { render, screen, act, waitFor } from '../testUtils';

describe('LandingPage', () => {
  it('renders the LandingPage correctly', async function () {
    await act(async () => {
      render(await LandingPage());
    });
  });
});
