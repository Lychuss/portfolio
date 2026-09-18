import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function homeAnimation(){
    const tl = gsap.timeline();

    tl.fromTo(".webdev", 
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
            filter: "blur(5px)",
            opacity: 0
        },
        {
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
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

function projectPage(){
    const tr = gsap.timeline({
        scrollTrigger: {
            trigger: ".projectsPage",
            start: "top 80%",
            end: "bottom 100%"
        }
    })

    tr.fromTo(".project", 
        {
            y: -20,
            opacity: 0,
            filter: "blur(10px)"
        },
        {
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
            duration: 1,
            ease: "power2.inOut"
        },0
    ).fromTo(".filters", 
        {
            y: 20,
            opacity: 0,
            filter: "blur(10px)"
        },
        {
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
            duration: 1,
            ease: "power2.inOut"
        },0
    ).fromTo(".card", 
        {
            y: -20,
            opacity: 0,
            filter: "blur(10px)"
        },
        {
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
            duration: 1,
            stagger: 0.7,
            ease: "power2.inOut"
        },1
    )
}

function servicePage(){
    const tr = gsap.timeline({
        scrollTrigger: {
            trigger: ".servicePage",
            start: "top 80%",
            end: "bottom 60%"
        }
    })

    tr.fromTo(".service",
        {
            y: -20,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.in"
        }
    ).fromTo(".service-card", 
        {
            x: -20,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.in"
        }
    )
}

function experiencePage(){
    const tr = gsap.timeline({
        scrollTrigger: {
            trigger: ".experiencePage",
            start: "top 80%",
            end: "bottom 60%"
        }
    })

    tr.fromTo(".experience", 
        {
            y: 10,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut"
        }
    ).fromTo(".tech", 
        {
            y: 10,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut"
        }
    )
    .fromTo(".techjobs",
        {
            y: 10,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power4.inOut",
            stagger: 0.2
        }
    ).fromTo(".nontech", 
        {
            y: 10,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut"
        }
    ).fromTo(".nontechjobs",
        {
            y: 10,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut",
            stagger: 0.2
        }
    )
}

function contactPage(){
    const tr = gsap.timeline({
        scrollTrigger: {
            trigger: ".contactPage",
            start: "top 60%",
            end: "bottom 80%"
        }
    })

    tr.fromTo(".contactPage", 
        {
            y: 100,
        },
        {
            y: 0,
            duration: 1,
            ease: "power2.inOut"
        }
    )
}

export default function usePageAnimation(){
    useGSAP(() => {
        homeAnimation();
        projectPage();
        servicePage();
        experiencePage();
        contactPage();
    }, [])
}