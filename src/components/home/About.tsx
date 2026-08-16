export default function About() {
    return (
        <section
            id="about"
            className="mx-auto w-full max-w-6xl px-6 py-24"
        >
            <div className="mb-12">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                    About Me
                </p>

                <h2 className="text-4xl font-semibold tracking-tight">
                    Programmer, Problem Solver, Game Developer.
                </h2>
            </div>

            <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/70">
                <p>
                    Placeholder content for the About section. We&apos;ll replace this with your actual background and experience tomorrow.
                </p>

                <p>
                    This section will give recruiters a quick overview of my background, interests and approach to software and game development.
                </p>
            </div>
        </section>
    );
}