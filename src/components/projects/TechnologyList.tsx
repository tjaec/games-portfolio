interface TechnologyListProps {
    technologies: string[];
}

export default function TechnologyList({
    technologies,
}: TechnologyListProps) {
    return (
        <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
                <span
                    key={technology}
                    className="rounded-full border border-border px-4 py-2 text-sm"
                >
                    {technology}
                </span>
            ))}
        </div>
    );
}