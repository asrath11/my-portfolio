import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Layout, Server, Wrench } from 'lucide-react';

const skillGroups = [
  {
    name: 'Backend',
    icon: <Server className='h-8 w-8 mb-2' />,
    skills: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'MongoDB',
      'PostgreSQL',
      'JWT',
      'REST APIs',
      'Socket.IO',
    ],
  },
  {
    name: 'Frontend',
    icon: <Layout className='h-8 w-8 mb-2' />,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Tools',
    icon: <Wrench className='h-8 w-8 mb-2' />,
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render'],
  },
];

export function Skills() {
  return (
    <section id='skills' className='w-full py-12 px-4 md:py-24 lg:py-32'>
      <div className='mx-auto max-w-5xl text-center'>
        <h2 className='text-3xl font-bold sm:text-4xl md:text-5xl mb-4'>
          Technical Skills
        </h2>
        <p className='text-muted-foreground sm:text-lg max-w-2xl mx-auto mb-12'>
          A comprehensive toolkit for building scalable and performant modern web
          applications.
        </p>

        <div className='grid gap-6 md:grid-cols-3'>
          {skillGroups.map((group) => (
            <Card
              key={group.name}
              className='relative overflow-hidden border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
            >
              <div className='absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

              <CardHeader className='flex flex-col items-center pb-2'>
                <div className='p-3 rounded-full bg-primary/10 text-primary mb-3'>
                  {group.icon}
                </div>
                <CardTitle className='text-xl'>{group.name}</CardTitle>
              </CardHeader>

              <CardContent className='pt-2'>
                <div className='flex flex-wrap gap-2 justify-center'>
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant='secondary'
                      className='text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default'
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
