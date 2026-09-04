export default function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto w-full max-w-350 px-6 py-24"
        >
            <div className="rounded-3xl border border-border bg-foreground/3 p-8 md:p-12">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                    Contact
                </p>

                <h2 className="text-4xl font-semibold tracking-tight">
                    Let&apos;s work together.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
                    Placeholder content. This will become the main contact call-to-action for recruiters, studios and potential collaborators.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="mailto:thomasjcameron24@gmail.com"
                        className="rounded-full bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-80"
                    >
                        Email Me
                    </a>
                </div>
            </div>
        </section>
    );
}