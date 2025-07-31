'use client';

import type { ReactNode } from 'react';
import { Button } from '@workspace/ui/components/button';

interface SocialLoginButtonProps {
  children: ReactNode;
  provider: 'discord' | 'google';
}

const SocialLoginButton = ({ children, provider }: SocialLoginButtonProps) => {
  const handleClick = () => console.log(`Login with ${provider}`);
  return (
    <Button variant='outline' className='w-full' onClick={handleClick}>
      {children}
      Login with {provider.charAt(0).toUpperCase() + provider.slice(1).toLowerCase()}
    </Button>
  );
};
