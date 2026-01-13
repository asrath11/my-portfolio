import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className='flex min-h-[calc(100vh-4rem)] max-w-screen flex-col items-center justify-center gap-8 px-4 py-8 text-center md:py-12 md:text-left lg:py-24 lg:flex-row lg:justify-between lg:gap-16'>
      <div className='flex flex-col gap-4 lg:w-1/2'>
        <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
          Hi, I&apos;m <br className='hidden lg:inline' />
          <span className='bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400 pr-4'>
            Asrath
          </span>
        </h1>
        <p className='max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
          Backend-Focused Full Stack Developer building real-world backend systems
          and full-stack applications using Node.js, TypeScript, Express, MongoDB,
          PostgreSQL, and Socket.IO.
        </p>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start'>
          <Button size='lg' asChild>
            <Link href='#projects'>View Projects</Link>
          </Button>
          <Button size='lg' variant='outline' asChild>
            <Link href='#contact'>Contact Me</Link>
          </Button>
        </div>
      </div>
      <div className='relative flex aspect-square w-full max-w-[500px] items-center justify-center lg:w-1/2'>
        {/* Professional avatar image */}
        <div className='absolute inset-0 -z-10 bg-linear-to-tr from-blue-500/20 to-indigo-500/20 blur-3xl' />
        <div className='h-full w-full rounded-2xl bg-linear-to-br from-neutral-200 to-neutral-100 p-1 dark:from-neutral-800 dark:to-neutral-900'>
          <div className='flex h-full w-full items-center justify-center rounded-[14px] bg-background overflow-hidden'></div>
        </div>
      </div>
    </section>
  );
}
