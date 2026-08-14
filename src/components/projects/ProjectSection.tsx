interface ProjectSectionProps {
    title: string;
    children: React.ReactNode;
}

export default function ProjectSection({
    title,
    children,
}: ProjectSectionProps) {
    return (
        <section className="mb-16">
            <h2 className="mb-6 text-3xl font-semibold">
                {title}
            </h2>

            <div className="max-w-3xl text-lg leading-relaxed text-foreground/70">
                {children}
            </div>
        </section>
    );
}