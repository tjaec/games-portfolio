import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
        >
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

                {/* <Link
                    href={`/projects/${project.slug}`}
                    className="mt-6 inline-flex font-medium text-accent transition-colors hover:text-foreground"
                >
                    View Project →
                </Link> */}

                <div className="mt-6 font-medium text-accent transition-colors hover:text-foreground">
                    View Project →
                </div>
            </div>
        </Link>
    );
}