import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center px-6">
            <div className="text-center">
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                    404
                </p>

                <h1 className="text-5xl font-semibold tracking-tight">
                    Page not found
                </h1>

                <p className="mx-auto mt-6 max-w-md text-lg text-foreground/70">
                    The page you&apos;re looking for doesn&apos;t exist or may have been moved.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-block rounded-full bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-80"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}