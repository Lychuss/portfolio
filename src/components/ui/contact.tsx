import Button from "./button";

import { useRef } from "react";

import gsap from "gsap";

let contacts = [
    {
        name: "Raphael San Juan",
        bg: '/images/my-image-v2.png',
        link: "https://www.facebook.com/share/1L7XQwbEVv/"
    },
    {
        name: "Upwork",
        bg: '/icons/upwork.svg',
        link: "https://www.upwork.com/freelancers/~01c27f095e2c7b2972?mp_source=share"
    },
    {
        name: "Freelancer",
        bg: '/icons/freelancer.svg',
        link: "https://www.freelancer.com/u/Lychuss?sb=t"
    },
    {
        name: "Indeed",
        bg: '/icons/indeed.svg',
        link: "https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage--homepage-frontend"
    },
]

export default function Contact(){
    const contactRef = useRef(null);

    const handleContactMeClicked = () => {
        gsap.fromTo(contactRef.current, { scale: 0.95}, { scale: 1, duration: 1, ease: "back.out(2)"})
    }

    return <>
        <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex items-center py-[1em] px-[1em]">
                <div className="flex items-center gap-2 border border-gray-300 shadow-md rounded-full px-[0.5em] py-[0.2em]">
                    <div className="rounded-full w-[10px] h-[10px] bg-green-400" />
                        <h1 className="font-bold text-[1em]">
                            Available for New Project
                        </h1>
                </div>
            </div>
            <h1 className="text-4xl font-dm-sans font-bold text-center">
                HAVE A PROJECT IN MIND?
            </h1>
            <p className="text-center text-sm text-gray-400 font-semibold font-dm-sans">
                Together, we can create something clear and impactful.
                Let's collaborate to bring our ideas to life
                in a way that resonates with everyone.
            </p>

            <a 
                href="mailto:raphaelsanjuan6@gmail.com?subject=Chat%20message&body=Hello%20from%20the%20site"
                className="contactme rounded-full w-45 h-auto text-xs mt-4 py-2 bg-black text-white font-semibold cursor-pointer inline-flex items-center justify-center text-center"
                onClick={handleContactMeClicked} 
                ref={contactRef}
                >
                Contact Me ↗
            </a>

            <div className="w-full flex flex-wrap items-center justify-center">
                {contacts.map((contact, i) => (
                    <div className="flex items-center mr-2 mb-5" key={i}>
                        <a href={`${contact.link}`}>
                            <div className="flex items-center gap-2 border border-gray-300 shadow-md rounded-full px-[0.5em] py-[0.2em]
                                active:scale-85">
                                <div className={`rounded-full w-[15px] h-[15px] bg-cover bg-center`}  style={{ backgroundImage: `url(${contact.bg})`}}/>
                                <h1 className="font-bold text-[0.6em]">
                                    {contact.name}
                                </h1>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </>
}