type HeroProps = {
    name: string;
    role: string;
    description: string;
};


export default function Hero({ name, role, description }: HeroProps) {
  return (
    <section className="flex min-h-screen items-center px-6 pt-20">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-4 font-mono text-sm font-medium uppercase tracking-widest text-accent">
          {role}
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70 sm:text-xl">
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
            className="rounded-full border border-border px-6 py-3 font-medium text-foreground transition-colors hover:border-accent hover:text-accent">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}