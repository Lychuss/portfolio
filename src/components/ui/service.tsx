import { useState } from "react"

let services = [
    {
        name: "WEB-RESPONSIVE",
        description: "Creating responsive website to automatically adjusts its layout, text, and images to fit any screen size."
    },
    {
        name: "LANDING PAGE",
        description: "Crafting high-converting landing pages that capture attention and turn visitors into customers instantly."
    },
    {
        name: "E-COMMERCE",
        description: "Building seamless online stores designed to boost sales and deliver smooth shopping experiences."
    },
    {
        name: "REST API",
        description: "Developing fast, secure REST APIs that connect your systems and power modern applications."
    },
    {
        name: "DATABASE DESIGN",
        description: "Structuring reliable, scalable databases that keep your data organized, secure, and easily accessible."
    },
    {
        name: "DEBUGGING",
        description: "Hunting down and fixing bugs to keep your application running smooth and error-free."
    },
    {
        name: "SERVER-SIDE",
        description: "Engineering robust server-side logic that powers your application's performance behind the scenes."
    },
]

export default function Service(){
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return <>
    <h1 className="service font-bold text-3xl font-dm-sans xl:text-6xl p-3">SERVICE</h1>
    <div>
        {services.map((service, i) => (
                <div className="service-card relative h-[150px] xl:h-[200px]" key={i} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                    <div className={`absolute inset-0 z-10 w-full ${ openIndex === i ? "opacity-0" : "opacity-100"} transition-all transform duration-700`}>
                        <div className="flex flex-col border-b py-3 h-[150px] justify-end p-3 xl:h-[200px]">
                            <div className="flex flex-row justify-between text-3xl xl:text-6xl xl:h-[100px]">
                                <h1 className="font-bold">{service.name}</h1>
                                <p>↗</p>
                            </div>
                        </div>
                    </div>
                    <div className={`absolute inset-0 w-full ${ openIndex === i ? "opacity-100 text-white" : "opacity-0 text-black"} transition-all transform duration-700`}>
                            <div className="flex flex-col h-[150px] justify-end bg-gray-900 p-3 rounded-lg xl:h-[200px] xl:justify-center">
                                <div className="flex flex-row justify-between py-3 items-center ">
                                    <div className="flex flex-col gap-2 xl:gap-4">
                                        <h1 className="text-3xl font-bold mb-2 xl:text-5xl">{service.name}</h1>
                                        <p className="text-sm xl:text-lg">{service.description}</p>
                                    </div>
                                    <p className="text-3xl xl:text-5xl">x</p>
                                </div>
                            </div>
                    </div>
                </div>
        ))}

    </div>
</>
}