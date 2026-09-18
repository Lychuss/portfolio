let tech = [
    {
        name: "Freelance",
        role: "School Projects / Commissions",
        date: "Sept 2024 - Jan 2025"
    },
    {
        name: "Barangay Anti-Drug Abuse Council",
        role: "Administrive Assistants (Work Immersion Intern)",
        date: "April 2024 - May 2024"
    },
    {
        name: "Personal Projects",
        role: "Web Developer",
        date: "May 2024 - Now"
    }
]

let nonTech = [
    {
        name: "Gabriella's Catering",
        role: "Sound System / Waiter",
        date: "Nov 2025 - Now"
    }
]

export default function Experience(){
    return <>
    <h1 className="experience font-bold text-3xl font-dm-sans text-white mb-5">EXPERIENCE</h1>
    <div>
        <h1 className="tech text-3xl text-white font-bold border-b">TECH</h1>
        {tech.map((job, i) => (
            <div className="techjobs flex flex-col items-center justify-between w-full border-b space-y-3 py-4 
                md:flex-row " key={i}>
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-white">{job.name}</h1>
                    <h1 className="text-gray-400 text-center">{job.role}</h1>
                </div>
                <p className="text-gray-400">{job.date}</p>
            </div>
        ))}
        <h1 className="nontech text-3xl text-white font-bold mt-10 border-b">NON-TECH</h1>
            {nonTech.map((job, i) => (
                <div className="nontechjobs flex flex-col items-center justify-between w-full border-b space-y-3 py-4 md:flex-row" key={i}>
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-white">{job.name}</h1>
                        <h1 className="text-gray-400">{job.role}</h1>
                    </div>
                    <p className="text-gray-400">{job.date}</p>
                </div>
            ))}
    </div>
    </>
}