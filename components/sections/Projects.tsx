import Link from 'next/link';
import Image from 'next/image';
import { Card, CardDescription, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const projects = [
  {
    title: 'AI Interview Platform',
    description:
      "An AI-powered interview platform that dynamically generates interview questions based on a user's resume, captures responses, and provides insights. Features secure Google OAuth, AI question generation, and analytics dashboards.",
    tags: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'NextAuth.js',
      'OpenAI API',
    ],
    link: 'https://ai-interviewer-nine-lovat.vercel.app',
    github: 'https://github.com/asrath11/ai-interviewer',
    image: '/projects/ai-interview.png',
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A scalable real-time chat application built with Node.js, TypeScript, Express, MongoDB, and Socket.IO. Features secure JWT authentication, real-time messaging, presence indicators, typing statuses, and group chat support.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Socket.IO', 'TypeScript', 'React'],
    link: 'https://chat-application-mern-frontend.vercel.app/',
    github: 'https://github.com/asrath11/chat-application-mern',
    image: '/projects/chat-application.jpeg', // No image yet
  },
];

export function Projects() {
  return (
    <section
      id='projects'
      className='w-full py-12 px-4 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10'
    >
      <div className='mx-auto flex max-w-xl flex-col items-center gap-4 text-center mb-12'>
        <h2 className='text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl'>
          Featured Projects
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          Here are some of the projects I&apos;ve worked on recently.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 max-w-6xl mx-auto'>
        {projects.map((project, index) => (
          <Card
            key={index}
            className='flex flex-col overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg bg-card p-0'
          >
            {/* Image Section */}
            <div className='w-full bg-muted/50 overflow-hidden'>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={400}
                  height={225}
                  className='w-full h-full object-cover'
                />
              ) : (
                <div className='w-full h-full flex items-center justify-center text-muted-foreground'>
                  <div className='text-center'>
                    <div className='w-12 h-12 mx-auto mb-2 rounded-lg bg-muted flex items-center justify-center'>
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                        />
                      </svg>
                    </div>
                    <p className='text-sm'>Preview Coming Soon</p>
                  </div>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className='flex flex-col flex-1 p-6'>
              {/* Title and Description */}
              <div className='mb-4'>
                <CardTitle className='text-xl font-semibold mb-2 line-clamp-2'>
                  {project.title}
                </CardTitle>
                <CardDescription className='text-sm text-muted-foreground leading-relaxed line-clamp-3'>
                  {project.description}
                </CardDescription>
              </div>

              {/* Tags */}
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant='secondary'
                    className='text-xs px-2 py-1 bg-muted/50 hover:bg-muted'
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className='flex gap-3 mt-auto'>
                <Button asChild size='sm' className='flex-1'>
                  <Link
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Demo
                  </Link>
                </Button>
                <Button variant='outline' asChild size='sm' className='flex-1'>
                  <Link
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
