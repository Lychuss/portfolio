import { SiFacebook, SiUpwork, SiIndeed, SiFreelancer } from '@icons-pack/react-simple-icons';
import Image from "next/image";
import { useRef } from 'react';
import gsap from 'gsap';

export default function Main(){
    
    const collabRef = useRef(null);
    
    const letsCollabClicked = () => {
        gsap.fromTo(collabRef.current, { scale: 0.95}, { scale: 1, duration: 1, ease: "back.out(2)"})
    }

    return <>
    <div className="md:hidden flex flex-col p-3">
                    <h1 className="webdev font-bold text-[2rem] items-center leading-18 tracking-tighter mt-5">WEB DEVELOPER</h1>
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
                    md:leading-27 md:absolute md:top-[100px] lg:flex-row lg:text-[9em] lg:gap-5 lg:top-[150px] xl:text-[11rem] xl:gap-20 xl:top-[160px]
                    xl:tracking-wide">
                        <h1 className="font-montserrat font-bold text-white [-webkit-text-stroke:4px_#222] [paint-order:stroke_fill]">RAPHA</h1>
                        <h1 className="font-montserrat font-bold">MHARC</h1>
                    </div>
    
                    <div className='relative md:flex w-full h-auto'>
                        <div className="mypicture flex items-end z-10 w-full h-auto mx-auto md:w-[500px] md:mt-60 lg:mt-55 lg:w-[800px] xl:mt-50 xl:w-[700px]">
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
                        <div className="hidden absolute md:flex md:w-[250px] flex-col md:ml-10 top-[350px] lg:top-[400px] xl:w-[330px] xl:top-[400px] xl:gap-3">
                            <h1 className="webdev font-bold text-[2rem] items-center tracking-tighter md:text-[1.3rem] lg:text-[2rem]
                                xl:text-[2rem]">WEB DEVELOPER</h1>
                            <p className="quote font-semibold text-[0.9rem] md:text-[0.6rem] lg:text-[0.8rem]">
                                I turn your ideas into modern and responsive websites designed to 
                                bring your vision to life.
                            </p>
                            <a href='mailto:raphaelsanjuan6@gmail.com?subject=Chat%20message&body=Hello%20from%20the%20site'
                                className="letscollab rounded-full font-bold w-45 h-auto text-xs mt-4 py-2 bg-black text-white text-center 
                                    cursor-pointer hover:scale-110 lg:text-sm xl:text-sm xl:w-50"
                                onClick={letsCollabClicked}
                                children="Let's collaborate ↗"
                                ref={collabRef}/>
                        </div>
                        <div className="mediaicon hidden absolute flex-col gap-5 bottom-[100px] right-[50px] md:flex lg:bottom-[200px] xl:gap-10 xl:bottom-[100px]">

                            <a href='https://www.facebook.com/share/1L7XQwbEVv/' 
                                className='facebook flex flex-row gap-2 border border-gray-200 shadow-md px-2 py-1 rounded-2xl 
                                    active:scale-75 hover:scale-110 transition-all duration-300 ease-in-out'>
                                <SiFacebook />
                                <h1 className='font-bold'>Facebook</h1>
                            
                            </a>

                            <a href='https://www.upwork.com/freelancers/~01c27f095e2c7b2972?mp_source=share' 
                                className='upwork flex flex-row gap-2 border border-gray-200 shadow-md px-2 py-1 rounded-2xl active:scale-75 
                                    transition-all duration-300 ease-in-out hover:scale-110'>
                                <SiUpwork />
                                <h1 className='font-bold'>Upwork</h1>
                            </a>

                            <a href='https://www.freelancer.com/u/Lychuss?sb=t'
                                className='freelancer flex flex-row gap-2 border border-gray-200 shadow-md px-2 py-1 rounded-2xl 
                                    active:scale-75 transition-all duration-300 ease-in-out hover:scale-110'>
                                <SiFreelancer />
                                <h1 className='font-bold'>Freelancer</h1>
                            </a>

                            <a href='https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage--homepage-frontend'
                                className='glassdoor flex flex-row gap-2 border border-gray-200 shadow-md px-2 py-1 rounded-2xl 
                                    active:scale-75 transition-all duration-300 ease-in-out hover:scale-110'>
                                <SiIndeed />
                                <h1 className='font-bold'>Indeed</h1>
                            </a>

                        </div>
                    </div>
                </div>
    
    </>
}