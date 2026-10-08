// import type { ReactNode } from "react";

import type { ReactNode } from "react";

export interface Project {
    title: string;
    slug: string;
    description: string;
    technologies: string[];
    category: string;
    image: string;
    media: ProjectMedia[];
    // overview: string;
    sections: ProjectSection[];
    github?: string;
}

export interface ProjectSection {
    title: string;
    content: ReactNode;
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
        // description: "A modular survival-game building system developed in Unreal Engine 5 and C++ as part of my final-year university project. The system explores how creative freedom and realistic construction mechanics could be combined without sacrificing usability. It allows players to place, rotate and connect building pieces within a survival game environment.",
        technologies: ["C++", "Unreal Engine 5"],
        category: "Gameplay Programming",
        image: "/projects/building-system.png",
        media: [
            {
                type: "image",
                src: "/projects/building-system.png",
                alt: "Building System Hero Image"
            },
            {
                type: "video",
                src: "/projects/building-system/building-system-overview.mp4",
                alt: "Building System Showcase Video"
            },
            {
                type: "video",
                src: "/projects/building-system/building-system-house.mp4",
                alt: "Building System House Video"
            },
            {
                type: "image",
                src: "/projects/building-system/house.png",
                alt: "Stone brick house"
            },
            {
                type: "image",
                src: "/projects/building-system/brick-building.png",
                alt: "Brick Building"
            },
            {
                type: "image",
                src: "/projects/building-system/brick-wall.png",
                alt: "Brick Wall"
            },
            // {
            //     type: "image",
            //     src: "/projects/building-system/cube.png",
            //     alt: "Cube of brick objects"
            // },
            {
                type: "image",
                src: "/projects/building-system/ghost-single.png",
                alt: "Single ghost object"
            },
            {
                type: "image",
                src: "/projects/building-system/ghost-wall.png",
                alt: "Wall of ghost objects"
            },
            {
                type: "image",
                src: "/projects/building-system/ghost-floor.png",
                alt: "Horizontal plane of ghost objects"
            },
            {
                type: "image",
                src: "/projects/building-system/ghost-cube.png",
                alt: "Cube of ghost objects"
            },
            {
                type: "image",
                src: "/projects/building-system/snap-corner.png",
                alt: "Corner snapping"
            },
            {
                type: "image",
                src: "/projects/building-system/snapping-points.png",
                alt: "Snapping points"
            },
        ],
        // overview: "A modular survival-game building system developed in Unreal Engine 5 and C++ as part of my final-year university project. The system explores how creative freedom and realistic construction mechanics could be combined without sacrificing usability. It allows players to place, rotate and connect building pieces within a survival game environment.",
        sections: [
            {
                title: "Key Features",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Line trace based building object placement
                            </li>

                            <li>
                                <strong>Ghost preview actors</strong> to aid in placement of objects
                            </li>

                            <li>
                                Multiple <strong>different placement types</strong>: Single, Drag, Box
                            </li>

                            <li>
                                <strong>Drag mode</strong> creates a vertical or horizontal plane of objects, useful for building walls and floors
                            </li>

                            <li>
                                <strong>Box mode</strong> creates a hollow cube of objects, useful for making quick rooms and buildings
                            </li>

                            <li>
                                Dynamic object snapping using <strong>snapping point components</strong> with toggles for corner, edge and face snapping for precise control
                            </li>

                            <li>
                                <strong>Object rotation</strong> allows for placement at multiple different angles
                            </li>
                        </ul>
                    </>
                )
                // content: [
                //     {
                //         type: "paragraph",
                //         content: "- Line trace based building object placement",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Ghost preview actors to aid in placement of objects",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Multiple different placement types: Single, Drag, Box",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Drag mode creates a vertical or horizontal plane of objects, useful for building walls and floors",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Box mode creates a hollow cube of objects, useful for making quick rooms and buildings",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Dynamic object snapping using snapping point components with toggles for corner, edge and face snapping for precise control",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Object rotation allows for placement at multiple different angles",
                //     },
                //     // {
                //     //     type: "paragraph",
                //     //     content: "// This allowed new building pieces and construction modes to be added without modifying the core building system, improving maintainability and scalability.",
                //     // },
                // ]
            },
            {
                title: "Drawbacks",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Objects represented by entire actors, causing frame rate issues with large construction operations
                            </li>

                            <li>
                                Snap points become extremely dense when object size is reduced, causing issues with precise control
                            </li>
                        </ul>
                    </>
                )
                // content: [
                //     {
                //         type: "paragraph",
                //         content: "- Objects represented by entire actors, causing frame rate issues with large construction operations",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Snap points become extremely dense when object size is reduced, causing issues with precise control",
                //     },
                // ]
            },
            {
                title: "Future Improvements",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Use instanced static meshes for objects to reduce actor overhead
                            </li>

                            <li>
                                Introduce more configurable snap layouts or rules to help with smaller objects
                            </li>
                        </ul>
                    </>
                )
                // content: [
                //     {
                //         type: "paragraph",
                //         content: "- Use instanced static meshes for objects to reduce actor overhead",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Introduce more configurable snap layouts or rules to help with smaller objects",
                //     },
                // ]
            },
            // {
            //     title: "Placement & Preview System",
            //     content: [
            //         {
            //             type: "paragraph",
            //             content: "Building placement is driven by a camera-based line trace which determines where the player is aiming. A ghost version of the selected object is displayed at the resulting position, allowing players to preview construction before committing to it.",
            //         },
            //         {
            //             type: "paragraph",
            //             content: "The preview object uses a dedicated material and disabled collision before placement. Once confirmed, the building realiser converts the preview into a physical object with its normal material and collision enabled.",
            //         },
            //     ]
            // },
            // {
            //     title: "Multiple Construction Modes",
            //     content: [
            //         {
            //             type: "paragraph",
            //             content: "The system supports two construction modes designed for different building workflows. Drag Mode provides precise individual placement as well as rapid construction across planes, while Box Mode allows larger three-dimensional structures to be created by defining their dimensions.",
            //         },
            //         {
            //             type: "paragraph",
            //             content: "Building modes are responsible for determining object transforms, while a separate Build Realiser handles spawning and deletion. This keeps responsibilities isolated and allows additional construction modes to be introduced without modifying the core spawning system.",
            //         },
            //     ]
            // },
            // {
            //     title: "Dynamic Object Snapping",
            //     content: [
            //         {
            //             type: "paragraph",
            //             content: "To support both precise construction and creative offset placement, each building object contains configurable snap points positioned around its corners, edges and faces.",
            //         },
            //         {
            //             type: "paragraph",
            //             content: "When a player moves an object near an existing structure, the snap manager searches for nearby points and scores potential matches based on distance, snap type and camera alignment. The highest-scoring valid point is then used to calculate the final transform of the preview object.",
            //         },
            //         {
            //             type: "image",
            //             content: "/projects/building-system-snapping-1.png",
            //             alt: "Survival Building System Snapping Screenshot",
            //         },                 
            //     ]
            // },
            // {
            //     title: "Perfomance Optimisation",
            //     content: [
            //         {
            //             type: "paragraph",
            //             content: "Large construction operations initially caused significant performance issues because ghost preview actors were being repeatedly spawned and destroyed during interaction.",
            //         },
            //         {
            //             type: "paragraph",
            //             content: "I changed the system to retain existing preview objects and only create or remove previews when the construction area changed. This significantly reduced unnecessary spawning and improved performance.",
            //         },
            //         {
            //             type: "paragraph",
            //             content: "Very large construction operations still exposed scalability limitations, highlighting the need for a more efficient representation such as instanced static meshes.",
            //         },
            //     ]
            // },
            // {
            //     title: "User Testing",
            //     content: [
            //         {
            //             type: "paragraph",
            //             content: "Testing suggested that the system was accessible to users with different levels of experience and supported creative construction. Participants successfully completed the test scenarios, although feedback highlighted issues with vertical/horizontal drag controls, snap precision and limited object variety.",
            //         },
            //     ]
            // },
            // {
            //     title: "Challenges & Lessons Learned",
            //     content: [
            //         {
            //             type: "paragraph",
            //             content: "Performance:",
            //         },
            //         {
            //             type: "paragraph",
            //             content: "Large construction operations can still cause frame-rate drops because each building piece is represented by a full actor.",
            //         },
            //         {
            //             type: "paragraph",
            //             content: "Snapping Precision:",
            //         },
            //         {
            //             type: "paragraph",
            //             content: "The fixed number of snap points means they become increasingly dense on smaller objects, making precise placement more difficult.",
            //         },
            //         {
            //             type: "paragraph",
            //             content: "Improvements:",
            //         },
            //         {
            //             type: "paragraph",
            //             content: "A future version would use instanced static meshes to reduce actor overhead and would introduce more configurable snap-point layouts for smaller objects.",
            //         },
            //     ]
            // },
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
                src: "/projects/turn-based-tactics/turn-based-tactics-gameplay.mp4",
                alt: "Turn Based Tactics Showcase Video"
            },
        ],
        // overview: "...",
        sections: [
            {
                title: "Features",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <strong>Grid-based</strong> game world for discrete movement
                            </li>
                            
                            <li>
                                All actions are based on an <strong>Action class</strong>, including moving and shooting, which can be switched between
                            </li>
                            
                            <li>
                                Movement uses <strong>A* Pathfinding</strong> to choose the best path to the selected grid tile
                            </li>
                            
                            <li>
                                <strong>Enemy AI</strong> use a <strong>utility-based decision system</strong> to evaluate best options including potential kills, weapon range and cover
                            </li>
                            
                            <li>
                                <strong>Mission and Objective System</strong> provides the player with primary and secondary objectives to complete for XP rewards
                            </li>
                            
                            <li>
                                Missions introduce mechanics gradually with <strong>tutorial pop-ups</strong> explaining new features
                            </li>
                        </ul>

                    </>
                )
                // content: [
                //     {
                //         type: "paragraph",
                //         content: "- **Grid-based** game world for discrete movement",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- All actions are based on an Action class, including moving and shooting, which can be switched between",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Movement uses **A* Pathfinding** to choose the best path to the selected grid tile",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- **Enemy AI** use a **utility-based decision system** to evaluate best options including potential kills, weapon range and cover",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- **Mission and Objective System** provides the player with primary and secondary objectives to complete for XP rewards",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Missions introduce mechanics gradually with **tutorial pop-ups** explaining new features",
                //     },
                // ]
            },
            {
                title: "Drawbacks",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Some issues with the cover system not always applying a reduction to hit percentage
                            </li>
                        </ul>
                    </>
                )
            },
            {
                title: "Future Improvements",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Additional actions, such as grenades
                            </li>

                            <li>
                                UI elements showing hit percentage and damage taken
                            </li>

                            <li>
                                More complex cover and flanking code to fix issues
                            </li>

                            <li>
                                Adding various height levels to the maps, switching the grid from 2d to 3d
                            </li>

                            <li>
                                Visual improvements to better show what is happening, such as particles, sounds effects, animations and additional UI elements
                            </li>
                        </ul>
                    </>
                )
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
                type: "video",
                src: "/projects/naval-vr/naval-vr-video.mp4",
                alt: "Naval VR Showcase Video"
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
        // overview: "...",
        sections: [
            {
                title: "Overall Features",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <strong>VR training simulation</strong> for a naval ship controlled by HOTAS and joystick
                            </li>

                            <li>
                                Includes the ability for the trainer to set the conditions of the environment and also set off error alerts for the trainee to correct
                            </li>
                        </ul>
                    </>
                )
            },
            {
                title: "My Contributions",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <strong>Line-trace based</strong> physics system, inspired by the previous car physics simulation I created
                            </li>

                            <li>
                                Turning modified to work with a ship on water and used multiple turning points to create a more realistic look
                            </li>
                            
                            <li>
                                Throttle split into two separate <strong>port and starboard throttles</strong>
                            </li>

                            <li>
                                Heeling implemented to make the ship tip over under turning
                            </li>

                            <li>
                                <strong>HOTAS and throttle</strong> connected to the project using the <strong>Rewired</strong> plugin to get it to work correctly
                            </li>
                        </ul>
                    </>
                )
            },
            {
                title: "Drawbacks",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Heeling only turns outwards as having it turn inward initially was causing some strange issues
                            </li>

                            <li>
                                Line trace physics are not as realistic as a proper water buoyancy simulation but are simpler than true simulation for maintaining frame rate in VR
                            </li>
                        </ul>
                    </>
                )
            },
            {
                title: "Future Improvements",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Ship drift that takes the ship slightly off course when turning
                            </li>

                            <li>
                                Proper heeling that turns inwards initially and then outwards after a short time
                            </li>
                        </ul>
                    </>
                )
            },
        ]
    },
    { // Localized Physics
        title: "Localized Physics System",
        slug: "localized-physics",
        description: "A system that allows characters and physics objects to remain in place while inside fast moving containers such as vehicles.",
        technologies: ["Unreal Engine", "C++", "Physics"],
        category: "Physics Localization",
        image: "/projects/localized-physics/localized-physics.png",
        media: [
            {
                type: "image",
                src: "/projects/localized-physics/localized-physics.png",
                alt: "Localized Physics Hero Image"
            },
            {
                type: "video",
                src: "/projects/localized-physics/localized-physics-overview-low.mp4",
                alt: "Localized Physics Overview Video"
            },
            {
                type: "video",
                src: "/projects/localized-physics/localized-physics-nesting-low.mp4",
                alt: "Localized Physics Nesting Video"
            },
            {
                type: "video",
                src: "/projects/localized-physics/localized-physics-planetary-low.mp4",
                alt: "Localized Physics Planetary Gravity Video"
            },
            {
                type: "image",
                src: "/projects/localized-physics/ship-inside.png",
                alt: "Localized Physics Inside Ship In Air"
            },
        ],
        // overview: "...",
        sections: [
            {
                title: "Features",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Uses <strong>Physics Containers</strong> to hold characters and physics actors
                            </li>

                            <li>
                                When in a Physics Container, actors are teleported to the same space in an identical <strong>Proxy Container</strong>
                            </li>

                            <li>
                                Visual parts of the actors, such as cameras and meshes are then sent back to a <strong>Puppet Actor</strong> that exists on the real container
                            </li>

                            <li>
                                When the physics container move or rotate, the objects inside stay perfectly still and can walk about freely
                            </li>

                            <li>
                                <strong>Custom Gravity</strong> allows characters and objects to reorient to rotated physics containers
                            </li>
                        </ul>
                    </>
                )
            },
            {
                title: "Future Improvements",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Multiplayer Replication
                            </li>
                        </ul>
                    </>
                )
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
        media: [
            {
                type: "image",
                src: "/projects/solar-system.png",
                alt: "Solar System Hero Image"
            },
            {
                type: "image",
                src: "/projects/solar-system/earth.png",
                alt: "Earth"
            },
            {
                type: "image",
                src: "/projects/solar-system/jupiter.png",
                alt: "Jupiter"
            },
            {
                type: "image",
                src: "/projects/solar-system/jupiter-top.png",
                alt: "Jupiter"
            },
            {
                type: "image",
                src: "/projects/solar-system/dwarf-planets.png",
                alt: "Dwarf Planets"
            },
        ],
        // overview: "...",
        sections: [
            {
                title: "Features",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Transformations and rotations completed using <strong>matrix multiplication</strong> on individual mesh vertices
                            </li>

                            <li>
                                <strong>Modular architecture</strong> allowing for infinitely customizable solar systems supporting iterative moons and sub-moons, which follow their parent body
                            </li>
                        </ul>
                    </>
                )
            },
            {
                title: "Future Improvements",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                More complex orbital physics such as elliptical orbits and inclination
                            </li>

                            <li>
                                More advanced camera control
                            </li>

                            <li>
                                Realtime time multiplier adjustment
                            </li>

                            <li>
                                Planet selection/focus and information
                            </li>

                            <li>
                                Visual improvements such as planetary rings, higher definition models and animated textures
                            </li>
                        </ul>
                    </>
                )
                // content: [
                //     {
                //         type: "paragraph",
                //         content: "- More complex orbital physics such as elliptical orbits and inclination",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- More advanced camera control",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Realtime time multiplier adjustment",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Planet selection/focus and information",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Visual improvements such as planetary rings, higher definition models and animated textures",
                //     },
                // ]
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
        media: [
            {
                type: "image",
                src: "/projects/car-physics-v2.png",
                alt: "Car Physics Hero Image"
            },
            {
                type: "image",
                src: "/projects/car-physics/car-physics-suspension.png",
                alt: "Car Physics Suspension"
            },
            {
                type: "image",
                src: "/projects/car-physics/car-physics-suspension-2.png",
                alt: "Car Physics Suspension"
            },
            {
                type: "video",
                src: "/projects/car-physics/car-physics-video.mp4",
                alt: "Car Physics Video"
            },
            {
                type: "video",
                src: "/projects/car-physics/car-physics-suspension-video.mp4",
                alt: "Car Physics Suspension Video"
            },
            {
                type: "video",
                src: "/projects/car-physics/car-physics-driving.mp4",
                alt: "Car Physics Driving Video"
            },
        ],
        // overview: "...",
        sections: [
            {
                title: "Features",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Uses <strong>line-trace based</strong> suspension, applying forces to balance the vehicle at the desired spring height
                            </li>

                            <li>
                                Simulates the direction of tyres and <strong>applies forces</strong> in the direction and against the perpendicular direction of them, creating braking and turning forces
                            </li>

                            <li>
                                Uses RPMs to simulate different gears and their acceleration
                            </li>
                        </ul>
                    </>
                )
                // content: [
                //     {
                //         type: "paragraph",
                //         content: "- Uses line-trace based suspension, applying forces to balance the vehicle at the desired spring height",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Simulates the direction of tyres and applies forces in the direction and against the perpendicular direction of them, creating braking and turning forces",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Uses RPMs to simulate different gears and their acceleration",
                //     },
                // ]
            },
            {
                title: "Drawbacks",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Very simple model and therefore doesn&apos;t feel very realistic
                            </li>

                            <li>
                                Some issues with the gears meaning that they don&apos;t work quite as intended
                            </li>
                        </ul>
                    </>
                )
                // content: [
                //     {
                //         type: "paragraph",
                //         content: "- Very simple model and therefore doesn't feel very realistic",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Some issues with the gears meaning that they don't work quite as intended",
                //     },
                // ]
            },
            {
                title: "Future Improvements",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Visual vehicle body including overall frame, wheels and tyres and suspension
                            </li>

                            <li>
                                Improved gear system and throttle response
                            </li>

                            <li>
                                Handbrake and more complex simulations such as brake locking and traction loss
                            </li>
                        </ul>
                    </>
                )
                // content: [
                //     {
                //         type: "paragraph",
                //         content: "- Visual vehicle body including overall frame, wheels and tyres and suspension",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Improved gear system and throttle response",
                //     },
                //     {
                //         type: "paragraph",
                //         content: "- Handbrake and more complex simulations such as brake locking and traction loss",
                //     },
                // ]
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
        media: [
            {
                type: "image",
                src: "/projects/portfolio-website-v3.png",
                alt: "Portfolio Website Hero Image"
            },
            {
                type: "image",
                src: "/projects/portfolio-website/project-grid.png",
                alt: "Portfolio Website Project Grid"
            },
            {
                type: "image",
                src: "/projects/portfolio-website/naval-project.png",
                alt: "Portfolio Website Naval VR Project"
            },
        ],
        // overview: "...",
        // github: "https://github.com/tjaec/games-portfolio",
        sections: [
            {
                title: "Features",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Modern website with <strong>responsive</strong> layout
                            </li>

                            <li>
                                Hero page includes a background <strong>Demo Reel</strong> of my projects
                            </li>

                            <li>
                                A <strong>Project Grid</strong> displays all of my projects in an easily readable fashion
                            </li>

                            <li>
                                Project pages include notes and an <strong>interactive carousel</strong> for images and videos with fullscreen capabilities
                            </li>

                            <li>
                                Light/Dark mode toggle
                            </li>
                        </ul>
                    </>
                )
            },
            {
                title: "Future Improvements",
                content: (
                    <>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Image & Video Optimization
                            </li>
                        </ul>
                    </>
                )
            },
        ]
    },
];