export default function About() {
    return (
        <section
            id="about"
            className="mx-auto w-full max-w-350 px-6 py-24"
        >
            <div className="mb-6">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                    About Me
                </p>

                <h2 className="text-4xl font-semibold tracking-tight">
                    {/* Programmer, Problem Solver, Game Developer. */}
                    Thomas Cameron
                </h2>
            </div>

            <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/70">
                <p>
                    Hello I am Thomas Cameron, a recently graduated computer games programmer from the University of Portsmouth. I specialise in creating gameplay mechanics and physics simulations in both Unreal Engine and Unity. I have hands on experience working as part of a team, as well as with an external client to deliver a virtual reality simulation, teaching me how to work well in a professional environment.
                </p>

                {/* <p>
                    I am always eager to push my technical boundaries and build systems that make virtual systems feel like a reality.
                </p> */}
            </div>
        </section>
    );
}