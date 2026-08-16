import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
                >
                    TC
                </Link>

                <div className="flex items-center gap-8">
                    <div className="hidden items-center gap-8 md:flex">
                        <Link
                            href="/#projects"
                            className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
                        >
                            Projects
                        </Link>
                        
                        <Link
                            href="/#about"
                            className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
                        >
                            About
                        </Link>
                        
                        <Link
                            href="/#contact"
                            className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
                        >
                            Contact
                        </Link>
                    </div>

                    <MobileMenu />

                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}