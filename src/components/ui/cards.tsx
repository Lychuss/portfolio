import Image from "next/image";

let arrProjects = [
    {
        name: "Yes Park - E-Commerce Cafe with Xendit Gateway",
        image: "/images/yes-park-cafe.png",
        tech: ["Full-Stack", "Deployed", "Responsive", "React", "Express", "Tailwind", "PostgreSQL"],
        link: "https://yes-park-cafe-frontend.vercel.app/home",
        inProgress: true,
        github: "https://github.com/Lychuss/yes-park-cafe"
    },
    {
        name: "Clean Quest - Image Based Game for Cleanliness",
        image: "/images/clean-quest.png",
        tech: ["Full-Stack", "Deployed", "Mobile-Web", "React", "Express", "Tailwind", "PostgreSQL", "Prisma", "Ollama"],
        link: "https://cleanquest-frontend.vercel.app/home",
        inProgress: true,
        github: "https://github.com/Lychuss/clean-quest"
    },
    {
        name: "Erwings - Landing Page with Modern Animation",
        image: "/images/erwings.png",
        tech: ["Frontend", "Deployed", "Responsive", "React", "Tailwind", "GSAP"],
        link: "https://erwings-frontend.vercel.app/",
        inProgress: false,
        github: "https://github.com/Lychuss/erwings-frontend-"
    }
]

export default function Cards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 py-10">
            {arrProjects.map((project, i) => (
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
                        <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-4">
                            {project.name}
                        </h3>
                        <div className="flex items-center justify-center space-x-2 border border-gray-200
                            shadow-md w-[105px] rounded-full px-1 text-xs mb-3">
                            <div className={`rounded-full w-[10px] h-[10px] ${
                                project.inProgress ? "bg-green-700" : "bg-red-500"
                            }`}></div>
                            <h1>In Progress</h1>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}