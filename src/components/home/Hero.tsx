type HeroProps = {
    name: string;
    role: string;
    description: string;
};


export default function Hero({ name, role, description }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div className="relative z-10 w-full px-[6vw] md:px-[10vw] lg:px-[16vw]">
        <p className="mb-4 font-mono text-sm font-medium uppercase tracking-widest text-accent">
          {role}
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-foreground-dark sm:text-6xl md:text-7xl">
          {name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground-dark/70 sm:text-xl">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a 
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View my work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-border-dark px-6 py-3 font-medium text-foreground-dark transition-colors hover:border-accent hover:text-accent">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}