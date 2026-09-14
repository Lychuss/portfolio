import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

function homeAnimation(){
    const tr = gsap.timeline();

    tr.fromTo(".webdev", 
        {
            y: -40,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1.,
            ease: "power4.inOut"
        },1
    ).fromTo(".quote", 
        {
            y: -40,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1.,
            ease: "power4.inOut"
        },1
    ).fromTo(".letscollab", 
        {
            y: -40,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.inOut"
        },1
    ).fromTo(".navbar", 
        {
            y: -40,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1.,
            ease: "power4.inOut"
        },0
    ).fromTo(".burger", 
        {
            y: -40,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1.,
            ease: "power4.inOut"
        },0
    ).fromTo(".name", 
        {
            scale: 0.2,
            opacity: 0
        },
        {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power4.inOut"
        },1
    ).fromTo(".mypicture", 
        {
            y: 280,
            filter: "blur(5px)"
        },
        {
            y: 0,
            filter: "blur(0px)",
            duration: 1.6,
            ease: "power4.in"
        },1
    ).fromTo(".facebook", 
        {
            opacity: 0,
            filter: "blur(10px)"
        },
        {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.1,
        },1
    ).fromTo(".glassdoor", 
        {
            opacity: 0,
            filter: "blur(10px)"
        },
        {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.3,
        },1
    ).fromTo(".freelancer", 
        {
            opacity: 0,
            filter: "blur(10px)"
        },
        {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.4,
        },1
    ).fromTo(".upwork", 
        {
            opacity: 0,
            filter: "blur(10px)"
        },
        {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.7,
        },1
    )
    
}

export default function usePageAnimation(){
    useGSAP(() => {
        homeAnimation();
    }, [])
}