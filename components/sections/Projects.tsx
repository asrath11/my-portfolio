import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const projects = [
  {
    title: 'Project One',
    description:
      'A full-stack web application built with Next.js and PostgreSQL. Features real-time updates and a modern UI.',
    tags: ['Next.js', 'React', 'PostgreSQL', 'Tailwind CSS'],
    link: '#',
    github: '#',
  },
  {
    title: 'Project Two',
    description:
      'An e-commerce platform with Stripe integration and a custom CMS for managing products.',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    title: 'Project Three',
    description:
      'A productivity tool that helps teams manage tasks and collaborate effectively.',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    link: '#',
    github: '#',
  },
];

export function Projects() {
  return (
    <section id='projects' className='max-w-screen py-12 px-4 md:py-24 lg:py-32'>
      <div className='mx-auto flex max-w-xl flex-col items-center gap-4 text-center mb-12'>
        <h2 className='text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl'>
          Featured Projects
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          Here are some of the projects I've worked on recently.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, index) => (
          <Card
            key={index}
            className='flex flex-col justify-between overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg'
          >
            <CardHeader>
              <div className='aspect-video w-full rounded-md bg-muted/50 mb-4' />{' '}
              {/* Placeholder for project image */}
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                {project.tags.map((tag) => (
                  <Badge key={tag} variant='outline'>
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className='flex gap-4'>
              <Button asChild className='w-full'>
                <Link href={project.link}>Live Demo</Link>
              </Button>
              <Button variant='outline' asChild className='w-full'>
                <Link href={project.github}>GitHub</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
