"use client";

// import { useEffect, useState } from "react";

export default function ThemeToggle() {

    function toggleTheme() {

        const isDark = document.documentElement.classList.toggle("dark");

        localStorage.setItem("theme", isDark ? "dark" : "light");

    }

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle colour theme"
            className="rounded-full border border-header-border px-4 py-2 text-sm text-header-foreground/70 transition-colors hover:border-accent hover:text-accent"
        >
            <span className="dark:hidden" aria-hidden="true">
                ☾
            </span>

            <span className="hidden dark:inline" aria-hidden="true">
                ☀
            </span>
        </button>
    );
}