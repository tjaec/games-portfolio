"use client";

// import { useEffect, useState } from "react";

export default function ThemeToggle() {
    // const [isDark,setIsDark]=useState(false);

    // useEffect(() => {
    //     const savedTheme = localStorage.getItem("theme");

    //     if(savedTheme === "dark") {
    //         setIsDark(true);
    //     }
    // }, []);

    function toggleTheme() {

        const isDark = document.documentElement.classList.toggle("dark");

        localStorage.setItem("theme", isDark ? "dark" : "light");

    }

    //     const newIsDark = !isDark;

    //     setIsDark(newIsDark);

    //     if(newIsDark) {
    //         document.documentElement.classList.add("dark");
    //         localStorage.setItem("theme", "dark");
    //     } else {
    //         document.documentElement.classList.remove("dark");
    //         localStorage.setItem("theme", "light");
    //     }
    // }

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle colour theme"
            className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
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