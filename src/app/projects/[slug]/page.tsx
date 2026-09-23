import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectSection from "@/components/projects/ProjectSection";
import TechnologyList  from "@/components/projects/TechnologyList";
import ProjectContent from "@/components/projects/ProjectContent";
import ProjectMedia from "@/components/projects/ProjectMedia";

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
        <main className="mx-auto w-full max-w-350 px-6 py-30">
            <Link
                href="/#projects"
                className="mb-12 inline-block text-sm font-medium text-foreground/60 transtition-colors hover:text-accent"
            >
                ← Back to Projects
            </Link>

            <ProjectHero project={project} />

            <div className="grid gap-12 lg:grid-cols-2">
                <div>
                    <div className="mt-1">
                        {/* <ProjectSection title="Overview">
                            <p>{project.overview}</p>
                        </ProjectSection> */}

                        {project.sections.map((section) => (
                            <ProjectSection
                                key={section.title}
                                title={section.title}
                            >
                                <ProjectContent content={section.content} />
                            </ProjectSection>
                        ))}

                        <ProjectSection title="Technologies">
                            <TechnologyList technologies={project.technologies} />
                        </ProjectSection>

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex rounded-full bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-80"
                            >
                                View on GitHub →
                            </a>
                        )}
                    </div>
                </div>

                <div className="lg:sticky lg:top-28 lg:self-start">
                    <ProjectMedia project={project} />
                </div>
            </div>
        </main>
    );
}