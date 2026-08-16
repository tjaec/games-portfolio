export interface Project {
    title: string;
    slug: string;
    description: string;
    technologies: string[];
    category: string;
    image: string;
    overview: string;
    sections: ProjectSection[];
    github?: string;
}

export interface ProjectSection {
    title: string;
    content: ProjectContent[];
}

export interface ProjectContent {
    type: "paragraph" | "image";
    content: string;
    alt?: string;
}

export const projects: Project[] = [
    {
        title: "Survival Building System",
        slug: "survival-building",
        description: "A modular survival building system developed in Unreal Engine using C++.",
        technologies: ["C++", "Unreal Engine 5"],
        category: "Gameplay Systems",
        image: "/projects/building-system.png",
        overview: "A modular building system developed as part of my final-year university project. The system allows players to place, rotate and connect building pieces within a survival game environment.",
        sections: [
            {
                title: "Technical Implementation",
                content: [
                    {
                        type: "paragraph",
                        content: "Technical implementation details will be added tomorrow.",
                    },
                    {
                        type: "image",
                        content: "/projects/building-system-snapping-1.png",
                        alt: "Survival Building System Snapping Screenshot",
                    },
                ]
            },
            {
                title: "Challenges & Solutions",
                content: [
                    {
                        type: "paragraph",
                        content: "Challenges and solutions will be documented tomorrow.",
                    },
                ]
            },
        ]
    },
    {
        title: "Turn-Based Tactics Game",
        slug: "turn-based-tactics",
        description: "A turn-based tactics game developed in Unreal Engine using c++.",
        technologies: ["C++", "Unreal Engine 5"],
        category: "Gameplay Programming",
        image: "/projects/tbt-game.png",
        overview: "...",
        sections: [
            {
                title: "Technical Implementation",
                content: [
                    {
                        type: "paragraph",
                        content: "Technical implementation details will be added tomorrow.",
                    },
                ]
            },
            {
                title: "Challenges & Solutions",
                content: [
                    {
                        type: "paragraph",
                        content: "Challenges and solutions will be documented tomorrow.",
                    },
                ]
            },
        ]
    },
    {
        title: "Naval VR Simulator",
        slug: "naval-vr",
        description: "A virtual reality naval simulator developed as part of a university group project for a real client..",
        technologies: ["Unity", "C#", "VR"],
        category: "Virtual Reality",
        image: "/projects/naval-vr.png",
        overview: "...",
        sections: [
            {
                title: "Technical Implementation",
                content: [
                    {
                        type: "paragraph",
                        content: "Technical implementation details will be added tomorrow.",
                    },
                ]
            },
            {
                title: "Challenges & Solutions",
                content: [
                    {
                        type: "paragraph",
                        content: "Challenges and solutions will be documented tomorrow.",
                    },
                ]
            },
        ]
    },
    {
        title: "Portfolio Website",
        slug: "portfolio-website",
        description: "The website that you are looking at right now.",
        technologies: ["Next.js", "TypeScript"],
        category: "Website Creation",
        image: "/projects/portfolio-website.png",
        overview: "...",
        github: "https://github.com/tjaec/games-portfolio",
        sections: [
            {
                title: "Technical Implementation",
                content: [
                    {
                        type: "paragraph",
                        content: "Technical implementation details will be added tomorrow.",
                    },
                ]
            },
            {
                title: "Challenges & Solutions",
                content: [
                    {
                        type: "paragraph",
                        content: "Challenges and solutions will be documented tomorrow.",
                    },
                ]
            },
            {
                title: "Test Section",
                content: [
                    {
                        type: "paragraph",
                        content: "This section was generated automatically.",
                    },
                ]
            },
        ]
    },
];