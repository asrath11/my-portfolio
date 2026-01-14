'use client';

import { Button } from '@/components/ui/Button';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export function Hero() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section className='flex min-h-[calc(100vh-4rem)] max-w-screen flex-col items-center justify-center gap-8 px-4 py-8 text-center md:py-12 lg:py-24'>
      <div className='flex flex-col gap-6 max-w-4xl'>
        <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
          Hi, I&apos;m{' '}
          <span className='bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400'>
            Asrath
          </span>
        </h1>
        <p className='max-w-2xl mx-auto leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
          Backend-Focused Full Stack Developer building real-world backend systems
          and full-stack applications using Node.js, TypeScript, Express, MongoDB,
          PostgreSQL, and Socket.IO.
        </p>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center'>
          <Button size='lg' onClick={() => scrollToSection('projects')}>
            View Projects
          </Button>
          <Button
            size='lg'
            variant='outline'
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
