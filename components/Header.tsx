'use client';

import Link from 'next/link';
import { Button } from './ui/Button';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Header() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'>
      <div className='flex h-16 max-w-screen items-center justify-between px-4 md:px-8'>
        <div className='flex items-center gap-2'>
          <Link href='/' className='font-bold text-xl tracking-tight'>
            Portfolio
          </Link>
        </div>
        <nav className='flex items-center gap-6'>
          <button
            onClick={() => scrollToSection('about')}
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
          >
            Contact
          </button>
          <Button size='sm' onClick={() => scrollToSection('contact')}>
            Hire Me
          </Button>
        </nav>
      </div>
    </header>
  );
}
