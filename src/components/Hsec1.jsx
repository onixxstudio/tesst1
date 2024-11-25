"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'

import orangeplan from "../../public/orangeplan.png"
import moon from "../../public/moon.webp"
import blueplanet from "../../public/blueplanet.png"
import gra2 from "../../public/gra2.jpg"

import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import "@/App.css"
// import img from "../App.css"
import "./home.css"

gsap.registerPlugin(ScrollTrigger)
// gsap.registerPlugin(ScrollTrigger)



const Hsec1 = () => {
    
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: 'top top',
            end: "bottom bottom",
            scrub: 1,
            // pin:true,
            // markers: true
        }
    });
    useEffect(() => {

        gsap.set(".slidesm", { scale: 4 })

        tl.to(".vdodiv", {
            '--clip': "0%",
            duration: 3,
            delay: 0.1,
            // ease:Power2,

        }, 'a')


        tl.to('.slidesm', {
            scale: 1,
            duration: 3,
            // delay:0.2
            // ease:Power2
        }, 'a')

            .to('.lft', {
                xPercent: -5,
                stagger: .03,
                // ease:Power2,

            }, 'b')

            .to('.rft', {
                xPercent: 4,
                stagger: .03,
                // ease:Power2,

            }, 'b')



    })


    return (
        <>
            <div className='main w-full'>
                <div className='bg-[#222] text-white home section w-full h-[200vh] relative'>
                    <div className="w-full sticky top-0 left-0">

                        <div className='hsec1btext btmtext absolute bottom-[7%] text-center left-[3%] z-[4] w-56'>
                            <h1>We Build Websites,
                                Visual Communications,
                                Merchandise and More.
                            </h1>
                        </div>
                        {/* style={'--clip':"100%"}} */}
                        <div className='vdodiv overflow-hidden  flex items-center justify-center w-full h-screen z-[3] absolute top-0 left-0 bg-[#b9b2ab]'>
                            {/* <video className='absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' src=''/> */}
                            <div className=' justify-center flex items-center text-center '>
                                <h1 className="text-[34vw] font-semibold font-sans text-black ">ONIXX</h1>
                            </div>

                        </div>

                        <div className='marqueecontainer w-full h-screen relative overflow-hidden'>
                            <div className='heading absolute top-[7%] w-72 text-center left-1/2 -translate-x-1/2'>
                                <h1 className='hsec1ttext text-xl  font-sans'>
                                    Creativity Meet's Precision, <br />
                                    We Craft Design That Elevate.
                                </h1>
                            </div>
                            <div className='slidesm absolute scale-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] '>
                            {/* first row */}
                                <div className='row lft -translate-x-1/2 w-full py-2 flex items-center gap-4 whitespace-nowrap '>
                                   
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>innovation</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full'>
                                            {/* <img src="./public/moon.webp"  alt=""> */}
                                            <Image src={moon}/>
                                        </div>
                                    </div>
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>empowerment</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/blueplanet.png" alt=""> */}
                                            <Image src={blueplanet} alt='blueplanet'/>
                                        </div>
                                    </div>
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>excellence</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/sandplanet.png" alt=""> */}
                                            <Image alt='plan' src={orangeplan}/>
                                        </div>
                                        </div>

                                    {/* <!-- secont elem --> */}
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>innovation</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full'>
                                            {/* <img src="./public/moon.webp"  alt=""> */}
                                            <Image src={moon} />
                                        </div>
                                    </div>
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>empowerment</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/blueplanet.png" alt=""> */}
                                            <Image src={blueplanet} alt='blueplanet' />
                                        </div>
                                    </div>
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>excellence</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/sandplanet.png" alt=""> */}
                                            <Image alt='plan' src={orangeplan} />
                                        </div>
                                    </div>
                                    {/* <!-- third elem --> */}
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>innovation</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full'>
                                            {/* <img src="./public/moon.webp"  alt=""> */}
                                            <Image src={moon} />
                                        </div>
                                    </div>
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>empowerment</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/blueplanet.png" alt=""> */}
                                            <Image src={blueplanet} alt='blueplanet' />
                                        </div>
                                    </div>
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>excellence</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/sandplanet.png" alt=""> */}
                                            <Image alt='plan' src={orangeplan} />
                                        </div>
                                    </div>

                                </div>

                                <div className='row rft -translate-x-1/3 w-full py-2 flex items-center gap-4 whitespace-nowrap '>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>distinct</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full'>
                                            {/* <img src="./public/moon.webp"  alt=""> */}
                                            <Image src={moon} />
                                        </div>
                                                </div>

                                    
                                <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>by</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/blueplanet.png" alt=""> */}
                                            <Image src={blueplanet} alt='blueplanet' />
                                        </div>
                                    </div>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>design</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/sandplanet.png" alt=""> */}
                                            <Image alt='plan' src={orangeplan} />
                                        </div>
                                    </div>

                                    {/* <!-- secont elem --> */}
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>distinct</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full'>
                                            {/* <img src="./public/moon.webp"  alt=""> */}
                                            <Image src={moon} />
                                        </div>
                                    </div>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>by</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/blueplanet.png" alt=""> */}
                                            <Image src={blueplanet} alt='blueplanet' />
                                        </div>
                                    </div>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>design</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/sandplanet.png" alt=""> */}
                                            <Image alt='plan' src={orangeplan} />
                                        </div>
                                    </div>
                                    {/* <!-- third elem --> */}
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>distinct</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full'>
                                            {/* <img src="./public/moon.webp"  alt=""> */}
                                            <Image src={moon} />
                                        </div>
                                    </div>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>by</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/blueplanet.png" alt=""> */}
                                            <Image src={blueplanet} alt='blueplanet' />
                                        </div>
                                    </div>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>design</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/sandplanet.png" alt=""> */}
                                            <Image alt='plan' src={orangeplan} />
                                        </div>
                                    </div>

                                </div>

                                <div className='row lft -translate-x-2/3 w-full py-2 flex items-center gap-4 whitespace-nowrap '>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>driven</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full'>
                                            {/* <img src="./public/moon.webp"  alt=""> */}
                                            <Image src={moon} />
                                        </div>
                                    </div>


                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>by</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/blueplanet.png" alt=""> */}
                                            <Image src={blueplanet} alt='blueplanet' />
                                        </div>
                                    </div>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>insight</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/sandplanet.png" alt=""> */}
                                            <Image alt='plan' src={orangeplan} />
                                        </div>
                                    </div>

                                    {/* <!-- secont elem --> */}
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>driven</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full'>
                                            {/* <img src="./public/moon.webp"  alt=""> */}
                                            <Image src={moon} />
                                        </div>
                                    </div>


                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>by</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/blueplanet.png" alt=""> */}
                                            <Image src={blueplanet} alt='blueplanet' />
                                        </div>
                                    </div>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>insight</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/sandplanet.png" alt=""> */}
                                            <Image alt='plan' src={orangeplan} />
                                        </div>
                                    </div>

                                    {/* <!-- third elem --> */}
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>driven</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full'>
                                            {/* <img src="./public/moon.webp"  alt=""> */}
                                            <Image src={moon} />
                                        </div>
                                    </div>


                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>by</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/blueplanet.png" alt=""> */}
                                            <Image src={blueplanet} alt='blueplanet' />
                                        </div>
                                    </div>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>insight</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/sandplanet.png" alt=""> */}
                                            <Image alt='plan' src={orangeplan} />
                                        </div>
                                    </div>


                                </div>

                                <div className='row rft -translate-x-3/4 w-full py-2 flex items-center gap-4 whitespace-nowrap '>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>art</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full'>
                                            {/* <img src="./public/moon.webp"  alt=""> */}
                                            <Image src={moon} />
                                        </div>
                                    </div>


                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>of</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/blueplanet.png" alt=""> */}
                                            <Image src={blueplanet} alt='blueplanet' />
                                        </div>
                                    </div>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>design</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/sandplanet.png" alt=""> */}
                                            <Image alt='plan' src={orangeplan} />
                                        </div>
                                    </div>

                                    {/* <!-- secont elem --> */}
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>art</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full'>
                                            {/* <img src="./public/moon.webp"  alt=""> */}
                                            <Image src={moon} />
                                        </div>
                                    </div>


                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>of</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/blueplanet.png" alt=""> */}
                                            <Image src={blueplanet} alt='blueplanet' />
                                        </div>
                                    </div>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>design</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/sandplanet.png" alt=""> */}
                                            <Image alt='plan' src={orangeplan} />
                                        </div>
                                    </div>
                                    {/* <!-- third elem --> */}
                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>art</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full'>
                                            {/* <img src="./public/moon.webp"  alt=""> */}
                                            <Image src={moon} />
                                        </div>
                                    </div>


                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>of</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/blueplanet.png" alt=""> */}
                                            <Image src={blueplanet} alt='blueplanet' />
                                        </div>
                                    </div>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>design</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/sandplanet.png" alt=""> */}
                                            <Image alt='plan' src={orangeplan} />
                                        </div>
                                    </div>

{/* fourth */}


                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>art</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full'>
                                            {/* <img src="./public/moon.webp"  alt=""> */}
                                            <Image src={moon} />
                                        </div>
                                    </div>


                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>of</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/blueplanet.png" alt=""> */}
                                            <Image src={blueplanet} alt='blueplanet' />
                                        </div>
                                    </div>

                                    <div className='elem flex items-center gap-10'>
                                        <h1 className='text-5xl font-mono font-semibold'>design</h1>
                                        <div className='imgdiv w-[3.5rem] h-[3.5rem] rounded-full '>
                                            {/* <img src="./public/sandplanet.png" alt=""> */}
                                            <Image alt='plan' src={orangeplan} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>


    )
}

export default Hsec1
