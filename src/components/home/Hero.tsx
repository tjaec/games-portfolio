type HeroProps = {
    name: string;
    role: string;
}


export default function Hero({ name, role }: HeroProps) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center text-foreground">
      <h1 className="text-3xl font-bold tracking-tight">
        Hello, I'm <span className="text-accent">{name}</span>
      </h1>

      <p className="mt-4 text-2xl text-foreground/70">
        {role}
      </p>
    </section>
  );
}