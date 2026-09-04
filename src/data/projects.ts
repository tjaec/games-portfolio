import type { ReactNode } from "react";

export interface Project {
    title: string;
    slug: string;
    description: string;
    technologies: string[];
    category: string;
    image: string;
    media: ProjectMedia[];
    overview: string;
    sections: ProjectSection[];
    github?: string;
}

export interface ProjectSection {
    title: string;
    content: ReactNode;//ProjectContent[];
}

export interface ProjectContent {
    type: "paragraph" | "image";
    content: string;
    alt?: string;
}

export interface ProjectMedia {
    type: "image" | "video";
    src: string;
    alt?: string;
}

export const projects: Project[] = [
    { // Survival Building
        title: "Survival Building System",
        slug: "survival-building",
        description: "A modular survival building system developed in Unreal Engine using C++.",
        technologies: ["C++", "Unreal Engine 5"],
        category: "Gameplay Programming",
        image: "/projects/building-system.png",
        media: [],
        overview: "A modular survival-game building system developed in Unreal Engine 5 and C++ as part of my final-year university project. The system explores how creative freedom and realistic construction mechanics could be combined without sacrificing usability. It allows players to place, rotate and connect building pieces within a survival game environment.",
        sections: [
            {
                title: "Key Features",
                content: [
                    {
                        type: "paragraph",
                        content: "",
                    },
                    {
                        type: "paragraph",
                        content: "This allowed new building pieces and construction modes to be added without modifying the core building system, improving maintainability and scalability.",
                    },
                ]
            },
            {
                title: "Placement & Preview System",
                content: [
                    {
                        type: "paragraph",
                        content: "Building placement is driven by a camera-based line trace which determines where the player is aiming. A ghost version of the selected object is displayed at the resulting position, allowing players to preview construction before committing to it.",
                    },
                    {
                        type: "paragraph",
                        content: "The preview object uses a dedicated material and disabled collision before placement. Once confirmed, the building realiser converts the preview into a physical object with its normal material and collision enabled.",
                    },
                ]
            },
            {
                title: "Multiple Construction Modes",
                content: [
                    {
                        type: "paragraph",
                        content: "The system supports two construction modes designed for different building workflows. Drag Mode provides precise individual placement as well as rapid construction across planes, while Box Mode allows larger three-dimensional structures to be created by defining their dimensions.",
                    },
                    {
                        type: "paragraph",
                        content: "Building modes are responsible for determining object transforms, while a separate Build Realiser handles spawning and deletion. This keeps responsibilities isolated and allows additional construction modes to be introduced without modifying the core spawning system.",
                    },
                ]
            },
            {
                title: "Dynamic Object Snapping",
                content: [
                    {
                        type: "paragraph",
                        content: "To support both precise construction and creative offset placement, each building object contains configurable snap points positioned around its corners, edges and faces.",
                    },
                    {
                        type: "paragraph",
                        content: "When a player moves an object near an existing structure, the snap manager searches for nearby points and scores potential matches based on distance, snap type and camera alignment. The highest-scoring valid point is then used to calculate the final transform of the preview object.",
                    },
                    {
                        type: "image",
                        content: "/projects/building-system-snapping-1.png",
                        alt: "Survival Building System Snapping Screenshot",
                    },                 
                ]
            },
            {
                title: "Perfomance Optimisation",
                content: [
                    {
                        type: "paragraph",
                        content: "Large construction operations initially caused significant performance issues because ghost preview actors were being repeatedly spawned and destroyed during interaction.",
                    },
                    {
                        type: "paragraph",
                        content: "I changed the system to retain existing preview objects and only create or remove previews when the construction area changed. This significantly reduced unnecessary spawning and improved performance.",
                    },
                    {
                        type: "paragraph",
                        content: "Very large construction operations still exposed scalability limitations, highlighting the need for a more efficient representation such as instanced static meshes.",
                    },
                ]
            },
            {
                title: "User Testing",
                content: [
                    {
                        type: "paragraph",
                        content: "Testing suggested that the system was accessible to users with different levels of experience and supported creative construction. Participants successfully completed the test scenarios, although feedback highlighted issues with vertical/horizontal drag controls, snap precision and limited object variety.",
                    },
                ]
            },
            {
                title: "Challenges & Lessons Learned",
                content: [
                    {
                        type: "paragraph",
                        content: "Performance:",
                    },
                    {
                        type: "paragraph",
                        content: "Large construction operations can still cause frame-rate drops because each building piece is represented by a full actor.",
                    },
                    {
                        type: "paragraph",
                        content: "Snapping Precision:",
                    },
                    {
                        type: "paragraph",
                        content: "The fixed number of snap points means they become increasingly dense on smaller objects, making precise placement more difficult.",
                    },
                    {
                        type: "paragraph",
                        content: "Improvements:",
                    },
                    {
                        type: "paragraph",
                        content: "A future version would use instanced static meshes to reduce actor overhead and would introduce more configurable snap-point layouts for smaller objects.",
                    },
                ]
            },
        ]
    },
    { // TBT Game
        title: "Turn-Based Tactics Game",
        slug: "turn-based-tactics",
        description: "A turn-based tactics game developed in Unreal Engine using c++.",
        technologies: ["C++", "Unreal Engine 5"],
        category: "Gameplay Programming",
        image: "/projects/tbt-game.png",
        media: [
            {
                type: "image",
                src: "/projects/turn-based-tactics/turn-based-tactics-objectives.png",
                alt: "Turn Based Tactics Objectives UI"
            },
            {
                type: "video",
                src: "/projects/turn-based-tactics/turn-based-tactics-video.mp4",
                alt: "Turn Based Tactics Showcase Video"
            },
        ],
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
                title: "Grid-Based Game World",
                content: [
                    {
                        type: "paragraph",
                        content: "The game world is represented as a discrete graph rather than relying directly on continuous world-space movement. Each tile stores information about its position, neighbouring tiles, occupants and traversal cost. This provides a predictable representation of the game state that can be queried by both player and AI systems.",
                    },
                ]
            },
            {
                title: "A* Pathfinding",
                content: [
                    {
                        type: "paragraph",
                        content: "I implemented A* pathfinding over the game's weighted grid graph. Movement costs are assigned to grid connections, allowing paths to account for different traversal costs while naturally supporting character movement ranges. The grid-based approach also makes movement deterministic, which is important for a tactics game where players need to understand and plan around the possible actions of both teams.",
                    },
                ]
            },
            {
                title: "Utility-Based Enemy AI",
                content: [
                    {
                        type: "paragraph",
                        content: "Enemy behaviour is driven by a utility-based decision system. At the beginning of each turn, the AI evaluates possible actions and assigns each a score based on factors such as potential kills, weapon effectiveness, range and cover. The AI then selects the highest-scoring action, allowing behaviour to emerge from the current game state rather than relying on a fixed sequence of behaviours.",
                    },
                ]
            },
            {
                title: "Challenges & Lessons Learned",
                content: [
                    {
                        type: "paragraph",
                        content: "The utility system proved flexible but difficult to tune. Small changes to weapon ranges, cover penalties and scoring weights could significantly change AI behaviour. The final implementation evaluates actions within the current turn rather than planning several turns ahead, leaving clear opportunities for future improvement.",
                    },
                ]
            },
            {
                title: "Project Evolution",
                content: [
                    {
                        type: "paragraph",
                        content: "The original prototype focused on the core tactical systems. I later continued development of the project, expanding it into a sequence of scenarios designed to progressively introduce mechanics and provide a more complete player experience.",
                    },
                ]
            },
            {
                title: "Mission & Objective System",
                content: [
                    {
                        type: "paragraph",
                        content: "I expanded the game with primary and optional objectives, allowing missions to provide both a core completion condition and additional challenges. A mission-complete screen communicates completed objectives and associated rewards.",
                    },
                ]
            },
            {
                title: "Player Onboarding",
                content: [
                    {
                        type: "paragraph",
                        content: "The project was expanded with a gradual introduction of mechanics, replacing the original debug-driven presentation with dedicated UI and scenario-based progression.",
                    },
                ]
            },
        ]
    },
    { // Naval VR
        title: "Naval VR Simulator",
        slug: "naval-vr",
        description: "A virtual reality naval simulator developed as part of a university group project for a real client..",
        technologies: ["Unity", "C#", "VR", "Physics"],
        category: "Virtual Reality",
        image: "/projects/naval-vr.png",
        media: [
            {
                type: "image",
                src: "/projects/naval-vr.png",
                alt: "Ship Exterior Hero"
            },
            {
                type: "image",
                src: "/projects/naval-vr/naval-vr-interior-1.png",
                alt: "Ship Interior Angled"
            },
            {
                type: "image",
                src: "/projects/naval-vr/naval-vr-interior-2.png",
                alt: "Ship Interior Front"
            },
            {
                type: "image",
                src: "/projects/naval-vr/naval-vr-early-physics.png",
                alt: "Early Ship Physics"
            },
            {
                type: "image",
                src: "/projects/naval-vr/naval-vr-interior-heeling.png",
                alt: "Ship Interior Heeling"
            },
            {
                type: "image",
                src: "/projects/naval-vr/naval-vr-development-heeling.png",
                alt: "Ship Heeling Development"
            },
            {
                type: "image",
                src: "/projects/naval-vr/naval-vr-exterior-sun.png",
                alt: "Ship Exterior Sun"
            },
            {
                type: "image",
                src: "/projects/naval-vr/naval-vr-exterior-night.png",
                alt: "Ship Exterior at Night"
            },
        ],
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
    { // Solar System
        title: "Solar System Orrery",
        slug: "solar-system",
        description: "A simulated orrery of the solar system made using complex maths techniques.",
        technologies: ["Unity", "C#", "Maths"],
        category: "Mathematical Simulation",
        image: "/projects/solar-system.png",
        media: [],
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
    { // Car Physics
        title: "Car Physics Simulation",
        slug: "car-physics",
        description: "A physics simulation of a wheeled vehicle made using C++ in Unreal Engine.",
        technologies: ["Unreal Engine", "C++", "Physics"],
        category: "Physics Simulation",
        image: "/projects/car-physics-v2.png",
        media: [],
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
    { // Website
        title: "Portfolio Website",
        slug: "portfolio-website",
        description: "The website that you are looking at right now.",
        technologies: ["Next.js", "TypeScript", "Vercel"],
        category: "Website Creation",
        image: "/projects/portfolio-website-v3.png",
        media: [],
        overview: "...",
        // github: "https://github.com/tjaec/games-portfolio",
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