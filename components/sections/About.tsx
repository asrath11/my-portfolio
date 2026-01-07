export function About() {
  return (
    <section id='about' className='max-w-screen py-12 px-4 md:py-24 lg:py-32'>
      <div className='mx-auto flex max-w-2xl flex-col items-center gap-4 text-center'>
        <h2 className='text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl'>
          About Me
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          I started my coding journey 5 years ago... [Add more personal details
          here]. I specialize in building scalable web applications using modern
          technologies. When I'm not coding, you can find me... [Hobbies].
        </p>
      </div>
    </section>
  );
}
