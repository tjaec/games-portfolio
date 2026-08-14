import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({
    params,
}: ProjectPageProps) {
    const { slug } = await params;

    const project = projects.find(
        (project) => project.slug === slug
    );

    if(!project) {
        notFound();
    }

    return (
        <main className="mx-auto w-full max-w-5xl px-6 py-16">
            <Link
                href="/#projects"
                className="mb-12 inline-block text-sm font-medium text-foreground/60 transtition-colors hover:text-accent"
            >
                ← Back to Projects
            </Link>

            <header className="mb-12">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                    {project.category}
                </p>

                <h1 className="text-5xl font-semibold tracking-tight">
                    {project.title}
                </h1>

                <p className="mt-6 max-w-3xl text-xl leading-relaxed text-foreground/70">
                    {project.description}
                </p>
            </header>

            <div className="relative mb-16 aspect-video overflow-hidden rounded-2x1 border border-border">
                <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <section className="mb-16">
                <h2 className="mb-6 text-3xl font-semibold">
                    Overview
                </h2>

                <p className="max-w-3xl text-lg leading-relaxed text-foreground/70">
                    {project.overview}
                </p>
            </section>

            <section className="mb-16">
                <h2 className="mb-6 text-3xl font-semibold">
                    Technologies
                </h2>

                <div className="flex flex-wrap gap-3">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-full border border-border px-4 py-2 text-sm"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </section>

            {project.github && (
                <section>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-full bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-80"
                    >
                        View on GitHub →
                    </a>
                </section>
            )}
        </main>
    );
}