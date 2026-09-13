"use client";
import Image from "next/image";

export default function Home(){
    return <main>

        <section className="mainPage w-full min-h-screen">

            <div className="relative text-center self-end text-[5rem] items-center top-[170px] leading-18">
                <h1 className="font-bungee-outline">RAPHA</h1>
                <h1 className="font-bungee-inline">MHARC</h1>
            </div>

            <Image src={"/images/my-image.png"} alt="my-image" width={1000} height={1000} className="absolute z-50 top-[365px] w-[1000px] h-auto"/>
        </section>

        <section className="projectsPage">

        </section>

        <section className="servicePage">
            
        </section>

        <section className="educationPage">

        </section>

        <section className="contactPage">

        </section>
        
    </main>
}