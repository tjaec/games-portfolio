import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar"
import ProjectGrid from "@/components/projects/ProjectGrid";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        name="Thomas Cameron"
        role="Computer Games Programmer"
        description="I build gameplay systems, tools and interactive experiences with C++, Unreal Engine and modern software development practices."
      />
      <section
        id="projects"
        className="mx-auto w-full max-w-6xl px-6 py-24"
      >
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Selected Work
          </p>

          <h2 className="text-4xl font-semibold tracking-light">
            Projects
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-foreground/70">
            A selection of projects showcasing my experience with gameplay programming, systems development and interactive technologies.
          </p>
        </div>

        <ProjectGrid />
      </section>
    </main>
  );
}
