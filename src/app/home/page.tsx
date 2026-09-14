"use client";

import { SiFacebook, SiUpwork, SiGlassdoor, SiFreelancer } from '@icons-pack/react-simple-icons';
import Button from "@/src/components/ui/button";
import Image from "next/image";
import usePageAnimation from '@/src/hooks/usePageAnimation';

import gsap from 'gsap';
import { useRef } from 'react';
import Cards from '@/src/components/ui/cards';

export default function Home(){
    usePageAnimation();

    const collabRef = useRef(null);
    const viewRef = useRef(null);

    const letsCollabClicked = () => {
        gsap.fromTo(collabRef.current, { scale: 0.95}, { scale: 1, duration: 1, ease: "back.out(2)"})
    }

    const mediaClicked = () => {

    }

    const viewWorkClicked = () => {
        gsap.fromTo(viewRef.current, { scale: 0.95}, { scale: 1, duration: 1, ease: "back.out(2)"})
    }

    return <main>
 
        <section className="mainPage w-full flex flex-col">

            <div className="flex flex-col p-3">
                <h1 className="webdev font-bold text-[2rem] items-center leading-18 tracking-tighter">WEB DEVELOPER</h1>
                <p className="quote font-semibold text-[0.9rem]">
                    I turn your ideas into modern, responsive, and functional websites designed to 
                    bring your vision to life and help you achieve your goals.
                </p>
                <Button 
                    className="letscollab border rounded-full w-45 h-auto text-xs mt-4 py-2 bg-black text-white font-semibold 
                        cursor-pointer"
                    onClick={letsCollabClicked}
                    children="Let's collaborate ↗"
                    ref={collabRef}/>
            </div>

            <div className="name flex flex-col text-center text-[6.6rem] items-center leading-20 tracking-tighter">
                <h1 className="font-bungee-outline">RAPHA</h1>
                <h1 className="font-bungee-inline">MHARC</h1>
            </div>

            <div className="mypicture relative z-10 w-full h-auto">
                <Image src={"/images/my-image.png"} alt="my-image" width={1000} height={1000}/>

                <div className="absolute inset-0">
                    <SiFacebook className="facebook absolute left-[20%] top-[20%] rotate-300 active:scale-75 transition-all duration-300 ease-in-out"/>
                    <SiUpwork className="upwork absolute left-[5%] top-[40%] rotate-20 active:scale-75 transition-all duration-300 ease-in-out"/>
                    <SiGlassdoor className="glassdoor absolute right-[10%] top-[40%]  rotate-10 active:scale-75 transition-all duration-300 ease-in-out"/>
                    <SiFreelancer className="freelancer absolute right-[25%] top-[20%] rotate-10 active:scale-75 transition-all duration-300 ease-in-out"
                        onClick={mediaClicked}/>
                </div>
            </div>

        </section>

        <section className="projectsPage flex flex-col w-full min-h-screen">
            <h1 className="project text-[2em] font-bold font-dm-sans text-center my-5">PERSONAL PROJECTS</h1>

            <div className="flex justify-between text-[0.6em] font-bold items-center p-5">
                <ul className="flex space-x-2">
                    <li className="border border-gray-300 shadow-md rounded-full px-2 active:scale-95 duration-300 transition-all">All</li>
                    <li className="border border-gray-300 shadow-md rounded-full px-2 active:scale-95 duration-300 transition-all">Personal Project</li>
                    <li className="border border-gray-300 shadow-md rounded-full px-2 active:scale-95 duration-300 transition-all">Deployed</li>
                </ul>
                <Button 
                    className="viewwork border border-gray-300 shadow-md rounded-full px-2"
                    onClick={viewWorkClicked}
                    children="View GitHub ↗"
                    ref={viewRef}/>
            </div>

            <Cards />
        </section>

        <section className="servicePage">
            
        </section>

        <section className="educationPage">

        </section>

        <section className="contactPage">

        </section>
        
    </main>
}