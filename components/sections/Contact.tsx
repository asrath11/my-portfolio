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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4'>
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input placeholder='John Doe' {...form.register('name')} />
              <FieldError errors={[errors.name]} />
            </Field>

            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input placeholder='john@example.com' {...form.register('email')} />
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
              {isSubmitting && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

            {status === 'success' && (
              <p className='text-green-600 text-center text-sm mt-2'>
                Message sent successfully! I'll get back to you soon.
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
    </section>
  );
}
