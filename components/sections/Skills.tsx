import { Badge } from '@/components/ui/Badge';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'PostgreSQL',
  'Express.js',
  'MongoDB',
  'Git and Github',
];

export function Skills() {
  return (
    <section
      id='skills'
      className='max-w-screen py-12 px-4 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10'
    >
      <div className='mx-auto flex max-w-2xl flex-col items-center gap-4 text-center'>
        <h2 className='text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl'>
          Skills
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          Technologies I work with efficiently.
        </p>
        <div className='flex w-full flex-wrap justify-center gap-2 mt-8'>
          {skills.map((skill) => (
            <Badge key={skill} variant='secondary' className='text-md py-2 px-4'>
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
