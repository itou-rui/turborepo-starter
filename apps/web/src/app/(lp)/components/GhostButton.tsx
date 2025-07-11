'use client';

import { Button } from '@workspace/ui/components/button';

export const GhostButton = () => {
  return (
    <Button
      variant='ghost'
      className='rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                 bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                 text-black dark:text-white transition-all duration-300 
                 group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                 hover:shadow-md dark:hover:shadow-neutral-800/50'
    >
      <span className='opacity-90 group-hover:opacity-100 transition-opacity'>Discover Excellence</span>
      <span
        className='ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                   transition-all duration-300'
      >
        →
      </span>
    </Button>
  );
};
