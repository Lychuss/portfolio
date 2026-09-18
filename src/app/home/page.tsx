"use client";

import { SiFacebook, SiUpwork, SiIndeed, SiFreelancer, SiGlassdoor } from '@icons-pack/react-simple-icons';
import Image from "next/image";
import usePageAnimation from '@/src/hooks/usePageAnimation';

import gsap from 'gsap';
import { useRef, useState } from 'react';
import Cards from '@/src/components/ui/cards';
import Service from '@/src/components/ui/service';
import Experience from '@/src/components/ui/experience';
import Contact from '@/src/components/ui/contact';

export default function Home(){
    usePageAnimation();

    const [projects, setProjects] = useState("all");
    const collabRef = useRef(null);
    const viewRef = useRef(null);

    const letsCollabClicked = () => {
        gsap.fromTo(collabRef.current, { scale: 0.95}, { scale: 1, duration: 1, ease: "back.out(2)"})
    }

    const viewWorkClicked = () => {
        gsap.fromTo(viewRef.current, { scale: 0.95}, { scale: 1, duration: 1, ease: "back.out(2)"})
    }

    return <main>
 
        <section id='mainPage' className="mainPage w-full flex flex-col">

            <div className="md:hidden flex flex-col p-3">
                <h1 className="webdev font-bold text-[2rem] items-center leading-18 tracking-tighter">WEB DEVELOPER</h1>
                <p className="quote font-semibold text-[0.9rem]">
                    I turn your ideas into modern, responsive, and functional websites designed to 
                    bring your vision to life and help you achieve your goals.
                </p>
                <a href='mailto:raphaelsanjuan6@gmail.com?subject=Chat%20message&body=Hello%20from%20the%20site'
                    className="letscollab rounded-full w-45 h-auto text-xs mt-4 py-2 bg-black text-white text-center font-semibold 
                        cursor-pointer"
                    onClick={letsCollabClicked}
                    children="Let's collaborate ↗"
                    ref={collabRef}/>
            </div>

            <div className='relative md:flex items-center justify-center'>
                <div className="name flex flex-col text-[6.5em] items-center leading-20 tracking-tighter md:text-[9em]
                md:leading-27 md:absolute md:top-[60px]">
                    <h1 className="font-bungee-outline">RAPHA</h1>
                    <h1 className="font-bungee-inline">MHARC</h1>
                </div>

                <div className='relative md:flex w-full h-auto'>
                    <div className="mypicture flex items-end z-10 w-full h-auto mx-auto md:w-[500px] md:mt-50">
                        <Image src={"/images/my-image.png"} alt="my-image" width={1000} height={1000}/>

                        <div className="absolute inset-0 md:hidden">
                            <SiFacebook className="facebook absolute left-[20%] top-[20%] 
                                rotate-300 active:scale-75 transition-all duration-300 ease-in-out"/>
                            <SiUpwork className="upwork absolute left-[5%] top-[40%] 
                                rotate-20 active:scale-75 transition-all duration-300 ease-in-out"/>
                            <SiIndeed className="glassdoor absolute right-[10%] top-[40%]  
                                rotate-10 active:scale-75 transition-all duration-300 ease-in-out"/>
                            <SiFreelancer className="freelancer absolute right-[25%] top-[20%] 
                                rotate-10 active:scale-75 transition-all duration-300 ease-in-out"/>
                        </div>
                    </div>
                    <div className="hidden absolute md:flex md:w-[250px] flex-col md:ml-10 top-[350px]">
                        <h1 className="webdev font-bold text-[2rem] items-center tracking-tighter md:text-[1.3rem]">WEB DEVELOPER</h1>
                        <p className="quote font-semibold text-[0.9rem] md:text-[0.6rem]">
                            I turn your ideas into modern, responsive, and functional websites designed to 
                            bring your vision to life and help you achieve your goals.
                        </p>
                        <a href='mailto:raphaelsanjuan6@gmail.com?subject=Chat%20message&body=Hello%20from%20the%20site'
                            className="letscollab rounded-full w-45 h-auto text-xs mt-4 py-2 bg-black text-white text-center font-semibold 
                                cursor-pointer"
                            onClick={letsCollabClicked}
                            children="Let's collaborate ↗"
                            ref={collabRef}/>
                    </div>
                    <div className="hidden absolute md:flex flex-col gap-5 bottom-[100px] right-[50px]">
                        <div className='facebook flex flex-row gap-2 border border-gray-200 shadow-md px-2 py-1 rounded-2xl'>
                            <SiFacebook className="active:scale-75 transition-all duration-300 ease-in-out"/>
                            <h1 className='font-bold'>Facebook</h1>
                        </div>
                        <div className='upwork flex flex-row gap-2 border border-gray-200 shadow-md px-2 py-1 rounded-2xl'>
                            <SiUpwork className="active:scale-75 transition-all duration-300 ease-in-out"/>
                            <h1 className='font-bold'>Upwork</h1>
                        </div>
                        <div className='freelancer flex flex-row gap-2 border border-gray-200 shadow-md px-2 py-1 rounded-2xl'>
                            <SiFreelancer className="active:scale-75 transition-all duration-300 ease-in-out"/>
                            <h1 className='font-bold'>Freelancer</h1>
                        </div>
                        <div className='glassdoor flex flex-row gap-2 border border-gray-200 shadow-md px-2 py-1 rounded-2xl'>
                            <SiGlassdoor className="active:scale-75 transition-all duration-300 ease-in-out"/>
                            <h1 className='font-bold'>glassdoor</h1>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section id='projectsPage' className="projectsPage flex flex-col w-full min-h-screen md:p-5">
            <h1 className="project text-3xl font-bold font-dm-sans text-center my-4">PROJECTS</h1>

            <div className="filters flex justify-between text-[0.6em] font-bold items-center p-5">
                <ul className="flex space-x-2">
                    <li className="border border-gray-300 shadow-md rounded-full px-2 active:scale-95 duration-300 transition-all"
                        onClick={() => setProjects("all")}>All</li>
                    <li className="border border-gray-300 shadow-md rounded-full px-2 active:scale-95 duration-300 transition-all"
                        onClick={() => setProjects("nondeployed")}>Non-Deployed</li>
                    <li className="border border-gray-300 shadow-md rounded-full px-2 active:scale-95 duration-300 transition-all"
                        onClick={() => setProjects("deployed")}>Deployed</li>
                </ul>
                <a  href='https://github.com/Lychuss'
                    className="viewwork border border-gray-300 shadow-md text-center rounded-full px-2"
                    onClick={viewWorkClicked}
                    children="View GitHub ↗"
                    ref={viewRef}/>
            </div>

            <Cards filter={projects}/>
        </section>

        <section id='servicePage' className="servicePage flex flex-col w-full min-h-screen p-3 mb-2 md:p-7">
            <Service />
        </section>

        <section id='experiencePage' className="experiencePage flex flex-col w-full min-h-screen p-3 bg-[rgba(10,9,9,0.8)] md:p-7">
            <Experience />
        </section>

        <section id='contactPage' className="contactPage flex flex-col w-full min-h-screen p-5 items-center justify-center md:p-7">
            <Contact />
        </section>
        
    </main>
}