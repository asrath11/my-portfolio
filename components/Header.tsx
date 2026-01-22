'use client';

import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {
  const { scrollToSection } = useSmoothScroll();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleScroll = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-8 mx-auto">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-bold text-xl tracking-tight"
          >
            Portfolio
          </Link>

          {/* Desktop nav */}
          <div className='flex items-center gap-6'>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => handleScroll('about')} className="text-md font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
                About
              </button>
              <button onClick={() => handleScroll('projects')} className="text-md font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
                Projects
              </button>
              <button onClick={() => handleScroll('contact')} className="text-md font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
                Contact
              </button>
            </nav>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-accent cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
              {/* Mobile toggle */}
              <button
                onClick={() => setOpen(prev => !prev)}
                className="md:hidden cursor-pointer"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

            </div>
          </div>


        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 md:hidden border-b border-border/40 bg-background">
          <nav className="flex flex-col p-4">
            <button
              onClick={() => handleScroll('about')}
              className="w-full py-4 text-left text-lg font-medium text-foreground/80 transition-all hover:text-foreground hover:pl-2 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleScroll('projects')}
              className="w-full py-4 text-left text-lg font-medium text-foreground/80 transition-all hover:text-foreground hover:pl-2 cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="w-full py-4 text-left text-lg font-medium text-foreground/80 transition-all hover:text-foreground hover:pl-2 cursor-pointer"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
