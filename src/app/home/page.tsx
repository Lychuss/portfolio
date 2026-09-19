"use client";

import usePageAnimation from '@/src/hooks/usePageAnimation';

import gsap from 'gsap';
import { useRef, useState } from 'react';
import Cards from '@/src/components/ui/cards';
import Service from '@/src/components/ui/service';
import Experience from '@/src/components/ui/experience';
import Contact from '@/src/components/ui/contact';
import Main from '@/src/components/ui/main';
import Navbar from '@/src/layouts/navbar';

export default function Home(){
    const containerRef = useRef<HTMLDivElement>(null);

    usePageAnimation(containerRef);

    return <div ref={containerRef} className='xl:p-10'>
        <Navbar />
        <section id='mainPage' className="mainPage w-full flex flex-col">
            <Main />
        </section>

        <section id='projectsPage' className="projectsPage flex flex-col w-full min-h-screen md:p-5">
            <Cards />
        </section>

        <section id='servicePage' className="servicePage flex flex-col w-full min-h-screen p-3 mb-2 md:p-7">
            <Service />
        </section>

        <section id='experiencePage' className="experiencePage flex flex-col w-full min-h-screen items-center justify-center
             p-3 bg-[rgba(10,9,9,0.8)] md:p-7">
            <Experience />
        </section>

        <section id='contactPage' className="flex flex-col w-full min-h-screen bg-black">
            <Contact />
        </section>
        
    </div>
}