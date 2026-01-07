export default function Footer() {
  return (
    <footer className='border-t py-6 md:py-0'>
      <div className='container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8'>
        <p className='text-sm text-muted-foreground'>
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
        <div className='flex items-center gap-4'>
          <a
            href='https://github.com'
            target='_blank'
            rel='noreferrer'
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
          >
            GitHub
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noreferrer'
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
          >
            Twitter
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noreferrer'
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
