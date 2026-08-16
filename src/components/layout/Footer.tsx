export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
                <p>
                    © {new Date().getFullYear()} Thomas Cameron
                </p>

                <div className="flex gap-6">
                    <a
                        href="#"
                        className="transition-colors hover:text-accent"
                    >
                        GitHub
                    </a>

                    <a
                        href="#"
                        className="transition-colors hover:text-accent"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="#"
                        className="transition-colors hover:text-accent"
                    >
                        CV
                    </a>
                </div>
            </div>
        </footer>
    );
}