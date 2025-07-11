import { BackgroundPaths, GhostButton } from './components';

export default async function LandingPage() {
  return (
    <BackgroundPaths title='Fullstack starter'>
      <div
        className='inline-block group relative bg-gradient-to-b from-black/10 
                      to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-2xl 
                      backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl 
                      transition-shadow duration-300'
      >
        <GhostButton />
      </div>
    </BackgroundPaths>
  );
}
