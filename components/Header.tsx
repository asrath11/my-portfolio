import Link from 'next/link';
import { Button } from './ui/Button';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'>
      <div className='flex h-16 max-w-screen items-center justify-between px-4 md:px-8'>
        <div className='flex items-center gap-2'>
          <Link href='/' className='font-bold text-xl tracking-tight'>
            Portfolio
          </Link>
        </div>
        <nav className='flex items-center gap-6'>
          <Link
            href='#about'
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
          >
            About
          </Link>
          <Link
            href='#projects'
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
          >
            Projects
          </Link>
          <Link
            href='#contact'
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
          >
            Contact
          </Link>
          <Button asChild size='sm'>
            <Link href='#contact'>Hire Me</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
