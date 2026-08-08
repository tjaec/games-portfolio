type HeroProps = {
    name: string;
    role: string;
}


export default function Hero({ name, role }: HeroProps) {
  return (
    <section>
      <h1>Hello, I'm {name}</h1>
      <p>{role}</p>
    </section>
  );
}