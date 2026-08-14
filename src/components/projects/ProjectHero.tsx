import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectHeroProps {
    project: Project;
}

export default function ProjectHero({
    project,
}: ProjectHeroProps) {
    return (
        <header>
            <section className="mb-12">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                    {project.category}
                </p>

                <h1 className="text-5xl font-semibold tracking-tight">
                    {project.title}
                </h1>

                <p className="mt-6 max-w-3xl text-xl leading-relaxed text-foreground/70">
                    {project.description}
                </p>
            </section>

            <div className="relative mb-16 aspect-video overflow-hidden rounded-2xl border border-border">
                <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </header>
    );
}