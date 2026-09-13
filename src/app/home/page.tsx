"use client";

import { SiFacebook, SiUpwork, SiGlassdoor, SiFreelancer } from '@icons-pack/react-simple-icons';
import Button from "@/src/components/ui/button";
import Image from "next/image";
import usePageAnimation from '@/src/hooks/usePageAnimation';

import gsap from 'gsap';
import { useRef } from 'react';

export default function Home(){
    usePageAnimation();

    const buttonRef = useRef(null);

    const letsCollabClicked = () => {
        gsap.fromTo(buttonRef.current, { scale: 0.95}, { scale: 1, duration: 1, ease: "back.out(2)"})
    }

    const mediaClicked = () => {

    }

    return <main>

        <section className="mainPage w-full min-h-screen">

            <div className="relative p-4">
                <h1 className="webdev font-bold text-[2rem] items-center leading-18 tracking-tighter">WEB DEVELOPER</h1>
                <p className="quote font-semibold text-[0.9rem]">
                    I turn your ideas into modern, responsive, and functional websites designed to 
                    bring your vision to life and help you achieve your goals.
                </p>
                <Button 
                    className="letscollab border rounded-full w-[150px] h-auto text-xs mt-4 py-2 bg-black text-white font-semibold 
                        cursor-pointer"
                    onClick={letsCollabClicked}
                    children="Let's collaborate ↗"
                    ref={buttonRef}/>
            </div>

            <div className="name relative text-center self-end text-[5.5rem] items-center top-[25px] leading-18 tracking-tighter">
                <h1 className="font-bungee-outline">RAPHA</h1>
                <h1 className="font-bungee-inline">MHARC</h1>
            </div>

            <Image src={"/images/my-image.png"} alt="my-image" width={1000} height={1000} className="mypicture relative bottom-[50px] z-10 w-full h-auto"/>

            <SiFacebook className="facebook relative bottom-[200px] left-[60px] rotate-300 active:scale-95 transition-all duration-300 ease-in-out"/>
            <SiUpwork className="upwork relative bottom-[160px] left-[20px] rotate-20 active:scale-95 transition-all duration-300 ease-in-out"/>
            <SiGlassdoor className="glassdoor relative bottom-[250px] left-[230px] rotate-10 active:scale-95 transition-all duration-300 ease-in-out"/>
            <SiFreelancer className="freelancer relative bottom-[220px] left-[280px] rotate-10 active:scale-95 transition-all duration-300 ease-in-out"
                onClick={mediaClicked}/>

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