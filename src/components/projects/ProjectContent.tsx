import Image from "next/image";
import type { ProjectContent as ProjectContentType } from "@/data/projects";

interface ProjectContentProps {
    content: ProjectContentType[];
}

export default function ProjectContent({
    content,
}: ProjectContentProps) {
    return (
        <div className="space-y-8">
            {content.map((block, index) => {
                if (block.type === "paragraph") {
                    return (
                        <p key={index}>
                            {block.content}
                        </p>
                    );
                }

                if (block.type === "image") {
                    return (
                        <div
                            key={index}
                            className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border"
                        >
                            <Image
                                src={block.content}
                                alt={block.alt ?? ""}
                                fill
                                className="object-cover"
                            />
                        </div>
                    );
                }

                return null;
            })}
        </div>
    );
}