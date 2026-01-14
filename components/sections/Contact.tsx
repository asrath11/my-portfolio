'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Form } from '@/components/ui/form';
import { Field, FieldLabel, FieldError } from '@/components/ui/field';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { isSubmitting, errors } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <section id='contact' className='w-full py-12 px-4 md:py-24 lg:py-32'>
      <div className='mx-auto flex max-w-2xl flex-col items-center gap-4 text-center mb-12'>
        <h2 className='text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl'>
          Get in Touch
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          Ready to start your next project with me? Send me a message and I will
          get back to you as soon as possible.
        </p>
      </div>
      <div className='mx-auto max-w-6xl w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Left side - Contact Form */}
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4'>
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input placeholder='John Doe' {...form.register('name')} />
                  <FieldError errors={[errors.name]} />
                </Field>

                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    placeholder='john@example.com'
                    {...form.register('email')}
                  />
                  <FieldError errors={[errors.email]} />
                </Field>

                <Field>
                  <FieldLabel>Message</FieldLabel>
                  <Textarea
                    placeholder='Project details...'
                    {...form.register('message')}
                  />
                  <FieldError errors={[errors.message]} />
                </Field>

                <Button className='w-full' size='lg' disabled={isSubmitting}>
                  {isSubmitting && (
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {status === 'success' && (
                  <p className='text-green-600 text-center text-sm mt-2'>
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className='text-red-500 text-center text-sm mt-2'>
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </Form>
          </div>

          {/* Right side - Social Links */}
          <div className='flex flex-col gap-8'>
            <div className='text-center lg:text-left'>
              <h3 className='text-2xl font-semibold mb-4'>Connect With Me</h3>
              <p className='text-muted-foreground mb-6'>
                You can also reach out to me through these platforms:
              </p>

              <div className='space-y-4'>
                <a
                  href='https://linkedin.com/in/pj-asrath'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors group'
                >
                  <div className='w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center group-hover:bg-blue-700 transition-colors'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-semibold'>LinkedIn</h4>
                    <p className='text-sm text-muted-foreground'>
                      Connect professionally
                    </p>
                  </div>
                </a>

                <a
                  href='https://github.com/asrath11'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors group'
                >
                  <div className='w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center group-hover:bg-gray-900 transition-colors'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-semibold'>GitHub</h4>
                    <p className='text-sm text-muted-foreground'>
                      Check out my projects
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
