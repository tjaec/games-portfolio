"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="md:hidden">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="text-foreground transition-colors hover:text-accent"
            >
                {isOpen ? "✕" : "☰"}
            </button>

            {isOpen && (
                // <div className="absolute left-0 top-full w-full border-4 border-red-500 bg-white/20 px-6 py-6 backdrop-blur-[20px]">
                <div className="absolute left-0 top-full w-full border-b border-border bg-background/80 px-6 py-6 backdrop-blur-md">
                    {/* <div className="flex flex-col gap-6"> */}
                    <div className="mx-auto flex max-w-6xl flex-col gap-6">
                        <Link
                            href="/#projects"
                            onClick={closeMenu}
                            className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
                        >
                            Projects
                        </Link>

                        <Link
                            href="/#about"
                            onClick={closeMenu}
                            className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
                        >
                            About
                        </Link>

                        <Link
                            href="/#contact"
                            onClick={closeMenu}
                            className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}