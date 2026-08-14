import type { Project } from "@/data/projects";
import Image from "next/image";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:border-accent"> 
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-6">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                    {project.category}
                </p>

                <h3 className="mb-3 text-2xl font-semibold">
                    {project.title}
                </h3>

                <p className="mb-6 text-foreground/70">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-full border border-border px-3 py-1 text-sm text-foreground/70"    
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}