"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectMediaProps {
    project: Project;
}

export default function ProjectMedia({ project }: ProjectMediaProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const currentMedia = project.media[currentIndex];

    const previousMedia = () => {
        setCurrentIndex((current) =>
            current === 0 ? project.media.length - 1 : current - 1
        );
    };

    const nextMedia = () => {
        setCurrentIndex((current) =>
            current === project.media.length - 1 ? 0 : current + 1
        );
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
    };

    useEffect(() => {
        if(!isFullscreen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeFullscreen();
            }

            if (event.key === "ArrowLeft") {
                previousMedia();
            }

            if (event.key === "ArrowRight") {
                nextMedia();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isFullscreen]);

    if (!currentMedia) {
        return null;
    }

    return (
        <>
            <div className="space-y-4">
                <div
                    className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-surface"
                    onClick={() => setIsFullscreen(true)}
                >
                    {currentMedia.type === "image" ? (
                        <Image
                            src={currentMedia.src}
                            alt={currentMedia.alt ?? project.title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <video
                            src={currentMedia.src}
                            controls
                            playsInline
                            className="h-full w-full object-cover"
                            onClick={(event) => event.stopPropagation()}
                        />
                    )}

                    {project.media.length > 1 && (
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                previousMedia();
                            }}
                            aria-label="Previous media"
                            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm text-white opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 hover:bg-black/70"
                        >
                            ←
                        </button>
                    )}

                    {project.media.length > 1 && (
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                nextMedia();
                            }}
                            aria-label="Next media"
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm text-white opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 hover:bg-black/70"
                        >
                            →
                        </button>
                    )}
                </div>

                {project.media.length > 1 && (
                    // <div className="flex items-center gap-4">
                    //     <button
                    //         type="button"
                    //         onClick={previousMedia}
                    //         aria-label="Previous media"
                    //         className="shrink-0 rounded-full border border-border px-4 py-2 transition-colors hover:border-accent hover:text-accent"
                    //     >
                    //         ←
                    //     </button>

                    <div className="project-thumbnails-scroll flex min-w-0 flex-1 gap-3 overflow-x-auto pb-2">
                        {project.media.map((media, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Show media ${index + 1}`}
                                className={
                                    index === currentIndex
                                        ? "relative aspect-video w-24 shrink-0 overflow-hidden rounded-lg border-2 border-accent opacity-100 transition-all duration-200"
                                        : "relative aspect-video w-24 shrink-0 overflow-hidden rounded-lg border-2 border-border opacity-60 transition-all duration-200 hover:opacity-100"
                                }
                            >
                                {media.type === "image" ? (
                                    <Image
                                        src={media.src}
                                        alt={media.alt ?? ""}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <>
                                        <video
                                            src={media.src}
                                            muted
                                            playsInline
                                            preload="metadata"
                                            className="h-full w-full object-cover"
                                        />

                                        <span className="absolute inset-0 flex items-center justify-center bg-black/30 text-white">
                                            ▶
                                        </span>
                                    </>
                                )}
                            </button>
                        ))}
                    </div>

                        // <button
                        //     type="button"
                        //     onClick={nextMedia}
                        //     aria-label="Next media"
                        //     className="shrink-0 rounded-full border border-border px-4 py-2 transition-colors hover:border-accent hover:text-accent"
                        // >
                        //     →
                        // </button>
                    // </div>
                )}
            </div>

            {isFullscreen && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-8"
                    onClick={closeFullscreen}
                >
                    <div
                        className="relative flex h-[80vh] w-[80vw] flex-col"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="relative min-h-0 flex-1">
                            {currentMedia.type === "image" ? (
                                <Image
                                    src={currentMedia.src}
                                    alt={currentMedia.alt ?? project.title}
                                    fill
                                    className="object-cover"
                                    // sizes="90vw"
                                />
                            ) : (
                                <video
                                    src={currentMedia.src}
                                    controls
                                    autoPlay
                                    playsInline
                                    className="h-full w-full object-contain"
                                />
                            )}

                            {project.media.length > 1 && (
                                <button
                                    type="button"
                                    onClick={previousMedia}
                                    aria-label="Previous media"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-5 py-3 text-3xl text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                                >
                                    &lt;
                                </button>
                            )}

                            {project.media.length > 1 && (
                                <button
                                    type="button"
                                    onClick={nextMedia}
                                    aria-label="Next media"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-5 py-3 text-3xl text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                                >
                                    &gt;
                                </button>
                            )}

                            <button
                                type="button"
                                onClick={closeFullscreen}
                                aria-label="Close fullscreen viewer"
                                className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-2xl text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                            >
                                ×
                            </button>
                        </div>

                        {project.media.length > 1 && (
                            <div className="mt-4 flex shrink-0 justify-center">
                                <div className="flex max-w-full gap-3 overflow-x-auto pb-1">
                                    {project.media.map((media, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => setCurrentIndex(index)}
                                            aria-label={`Show media ${index + 1}`}
                                            className={
                                                index === currentIndex
                                                    ? "relative aspect-video w-44 shrink-0 overflow-hidden rounded-lg border-2 border-accent opacity-100 transtition-all duration-200"
                                                    : "relative aspect-video w-44 shrink-0 overflow-hidden rounded-lg border-2 border-border opacity-60 transtition-all duration-200 hover:opacity-100"
                                            }
                                        >
                                            {media.type === "image" ? (
                                                <Image
                                                    src={media.src}
                                                    alt={media.alt ?? ""}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <>
                                                    <video
                                                        src={media.src}
                                                        muted
                                                        playsInline
                                                        preload="metadata"
                                                        className="h-full w-full object-cover"
                                                    />

                                                    <span className="absolute inset-0 flex items-center justify-center bg-black/30 text-lg text-white">
                                                        ▶
                                                    </span>
                                                </>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}