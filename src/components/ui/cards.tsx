import Image from "next/image";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { useRef, useState} from "react";

let arrProjects = [
    {
        name: "Yes Park - E-Commerce Cafe with Xendit Gateway",
        image: "/images/yes-park-cafe.png",
        tech: ["Full-Stack", "In Progress", "Responsive", "React", "Express", "Tailwind", "PostgreSQL"],
        link: "https://yes-park-cafe-frontend.vercel.app/home",
        progress: "deployed",
        github: "https://github.com/Lychuss/yes-park-cafe"
    },
    {
        name: "Clean Quest - Image Based Game for Cleanliness",
        image: "/images/clean-quest.png",
        tech: ["Full-Stack", "In Progress", "Mobile-Web", "React", "Node", "Typescript", "Tailwind", "PostgreSQL", "Prisma", "Ollama"],
        link: "https://cleanquest-frontend.vercel.app/home",
        progress: "deployed",
        github: "https://github.com/Lychuss/clean-quest"
    },
    {
        name: "Erwings - Landing Page with Modern Animation",
        image: "/images/erwings.png",
        tech: ["Frontend", "In Progress", "Responsive", "React", "Tailwind", "GSAP", "Typescript"],
        link: "https://erwings-frontend.vercel.app/",
        progress: "deployed",
        github: "https://github.com/Lychuss/erwings-frontend-"
    },
    {
        name: "YES4TRADING - Trading Website that handles Purchase and Trade",
        image: "/images/yes4trading.jpg",
        tech: ["Full-Stack", "Finished", "React", "Tailwind", "Node", "JavaScript"],
        link: "https://github.com/Lychuss/yes4trading/tree/main",
        progress: "nondeployed",
        github: "https://github.com/Lychuss/yes4trading/tree/main"
    }
]

export default function Cards() {
    const [projects, setProjects] = useState("all");
    const viewRef = useRef(null);

    const viewWorkClicked = () => {
        gsap.fromTo(viewRef.current, { scale: 0.95}, { scale: 1, duration: 1, ease: "back.out(2)"})
    }

    let arrFiltered = arrProjects.filter(project => project.progress === projects);

    if(arrFiltered.length === 0){
        arrFiltered = arrProjects;
    }

    return (<>
            <h1 className="project text-3xl font-bold font-dm-sans text-center my-4 lg:text-5xl xl:text-6xl xl:mt-20">PROJECTS</h1>
    
                <div className="filters flex justify-between text-[0.6em] font-bold items-center p-5">
                    <ul className="flex space-x-2 xl:text-sm xl:gap-5">
                        <li className="border border-gray-300 shadow-md rounded-full px-2 active:scale-95 duration-300 transition-all cursor-pointer
                            hover:scale-110"
                            onClick={() => setProjects("all")}>All</li>
                        <li className="border border-gray-300 shadow-md rounded-full px-2 active:scale-95 duration-300 transition-all cursor-pointer
                            hover:scale-110"
                            onClick={() => setProjects("nondeployed")}>Non-Deployed</li>
                        <li className="border border-gray-300 shadow-md rounded-full px-2 active:scale-95 duration-300 transition-all cursor-pointer
                            hover:scale-110"
                            onClick={() => setProjects("deployed")}>Deployed</li>
                    </ul>
                    <a  href='https://github.com/Lychuss'
                        className="viewwork border border-gray-300 shadow-md text-center rounded-full px-2 xl:text-sm hover:scale-110 transition-all 
                            duration-300"
                        onClick={viewWorkClicked}
                        children="View GitHub ↗"
                        ref={viewRef}/>
                </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 py-10 xl:gap-25 xl:max-w-6xl">
            {arrFiltered.map((project, i) => (
                                <div
                    key={i}
                    className="card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md
                        transition-shadow duration-300 cursor-pointer">
                    <div className="relative w-full aspect-[4/3] bg-gray-900 overflow-hidden">
                        <a  href={project.link}>
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </a>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-4 xl:text-2xl">
                            {project.name}
                        </h3>
                        <div className="flex flex-row justify-between w-full items-center xl:mb-4">
                            <div className="flex items-center justify-center space-x-2 border border-gray-200
                                shadow-md w-[105px] rounded-full px-1 text-xs mb-3 xl:text-sm xl:space-x-2 xl:w-[120px]">
                                <div className={`rounded-full w-[10px] h-[10px] ${
                                    project.progress === "deployed" ? "bg-green-700" : "bg-red-500"
                                }`}></div>
                                <h1>Deployed</h1>
                            </div>
                            <a href={project.github}>
                                <SiGithub className="xl:w-7 h-auto"/>
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-2 xl:gap-4">
                            {project.tech.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-200 shadow-md rounded-full
                                        xl:text-[1em] xl:font-semibold">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
   </> );
}