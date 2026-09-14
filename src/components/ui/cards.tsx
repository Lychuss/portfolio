import Image from "next/image";

let arrProjects = [
    {
        name: "Yes Park - E-Commerce Cafe with Xendit Gateway",
        image: "/images/yes-park-cafe.png",
        tech: ["Full-Stack", "Deployed", "Responsive", "Next JS", "Express", "Tailwind", "PostgreSQL"]
    },
    {
        name: "Clean Quest - Image Based Game for Cleanliness",
        image: "/images/clean-quest.png",
        tech: ["Full-Stack", "Deployed", "Mobile-Web", "Next JS", "Express", "Tailwind", "PostgreSQL", "Prisma", "Ollama"]
    }
]

export default function Cards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 py-10">
            {arrProjects.map((project, i) => (
                <div
                    key={i}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md 
                        transition-shadow duration-300">
                    <div className="relative w-full aspect-[4/3] bg-gray-900 overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-4">
                            {project.name}
                        </h3>
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