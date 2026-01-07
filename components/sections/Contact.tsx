import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

export function Contact() {
  return (
    <section
      id='contact'
      className='max-w-screen py-12 px-4 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10'
    >
      <div className='mx-auto flex max-w-2xl flex-col items-center gap-4 text-center'>
        <h2 className='text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl'>
          Get in Touch
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          Ready to start your next project with me? Send me a message and I will
          get back to you as soon as possible.
        </p>
      </div>
      <div className='mx-auto mt-12 w-full max-w-2xl'>
        <form className='grid gap-4'>
          <div className='grid gap-2'>
            <label
              htmlFor='name'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Name
            </label>
            <Input id='name' placeholder='John Doe' />
          </div>
          <div className='grid gap-2'>
            <label
              htmlFor='email'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Email
            </label>
            <Input id='email' placeholder='john@example.com' type='email' />
          </div>
          <div className='grid gap-2'>
            <label
              htmlFor='message'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Message
            </label>
            <Textarea id='message' placeholder='Project details...' />
          </div>
          <Button className='w-full' size='lg'>
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
