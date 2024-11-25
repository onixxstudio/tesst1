"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap, { Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
// import ima1 from '../../public/moon.web'
import baloon from '../../public/baloon.png'
import "./home.css"
import News from './News/News'
import Hsec4 from './Hsec4'
import Reel from '@/about/Reel/page'
import Works from '../components/Work/works'
import Lenis from 'lenis'
gsap.registerPlugin(ScrollTrigger)
const Hsec3 = () => {


    const image1 = useRef(null)
    const image3 = useRef(null)
    const heading = useRef(null)
    // let tl=gsap.timeline();
    useEffect(() => {
        gsap.to('.slide', {
            scrollTrigger: {
                trigger: '.real',
                start: 'top top',
                end: 'bottom bottom',
                // markers:true,
                scrub: 1,

            },
            xPercent: -200,
            // ease:Power4,

        })
    })
    useEffect(() => {
        //image 1
        gsap.fromTo(image1.current, { y: 100 }, { y: -130, scrollTrigger: { trigger: image1.current, scrub: true, }, })

        //image 3
        gsap.fromTo(image3.current, { y: -50 }, { y: 100, scrollTrigger: { trigger: image3.current, scrub: true, }, })

        //heading scroll trigger opening
        gsap.fromTo(heading.current,
            { rotation: 6, opacity: 0, y: () => heading.current.clientHeight * .5 },
            { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut', scrollTrigger: { trigger: heading.current, start: 'center bottom' } })
    }, [])

    const handleMouseEnter = (event) => {
        //play video
        const video = event.target.children[1]
        if (video ? video.classList.contains('video') : false)
            video.play()

        //animation
        const text = event.target.children[2].children[0]
        if (text) {
            gsap.killTweensOf(text)
            gsap.fromTo(text, { rotation: 10, opacity: 0, y: () => text.clientHeight * .5 }, { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut' })
        }
    }

    const handleMouseLeave = (event) => {
        //pause video
        const video = event.target.children[1]
        if (video ? video.classList.contains('video') : false)
            video.pause()

        //animation
        const text = event.target.children[2].children[0]
        if (text) {
            gsap.killTweensOf(text)
            gsap.fromTo(text, { rotation: 0, opacity: 1, y: 0 }, { rotation: -10, y: -text.clientHeight, opacity: 0, duration: .5, ease: 'power4.easeOut' })
        }
    }

    return (
        <div data-color="salmon" className='real section w-full '>
            <div className='cont h-[400vh]  relative '>
                <div className='slides overflow-hidden sticky top-0 left-0 flex gap-2 w-full h-[100vh]'>

                    <div className='slide w-[100vw]  overflow-hidden flex items-center justify-center h-screen shrink-0'>
                        <Image src={baloon} className='slidesec1baloon opacity-0 absolute '/>
                        <div className='text z-[10]'>
                            <h1 className='text-[10vw] '>Real talk,</h1>
                            <h1 className='text-[10vw] '>Real impact</h1>

                        </div>

                        <div className='slide1bsection text-xl bg-[#1e1e1e] text-white opacity-0 rounded-full w-[80%] flex gap-[50%] text-center items-center justify-center  absolute bottom-[5%] h-[10vh]'>
                            
                            <h3 className='justify-center rounded-full relative'>Scroll</h3>
                            <div className='h-[3rem] w-[3rem] border-2 border-[wheat] rounded-full  border-dashed '></div>
                        </div>

                        <div className='slidesec1imag w-[20%] overflow-hidden h-[20%] absolute top-1/2 rounded-full -translate-y-1/2 right-0 bg-violet-950'></div>

                    </div>

                    <div className='slide relative overflow-hidden flex-col flex items-center justify-center w-[99vw] h-screen flex-shrink-0 '>

                        <div className='hslide2sec relativeflex items-center justify-center text-center h-screen '>
                            <div className='marquetexthsec2main relative top-[20%]  h-fit'>
                                <h2 className='marquetexthsec2 font-semibold whitespace-nowrap text-center'>Hello we are onixx studio design agency</h2>

                            </div>
                            <div className='hslide2secingsec bg-red-400 h-[78vh] w-[25%] left-[42.5%] top-[10%] absolute'>a</div>

                        </div>
                        <div className=' h-[40vh] flex w-[95vw] absolute bottom-0 right-[1%]' >
                            <div className=' w-1/2 relative'>
                                <div className=' h-[90%] gap-[10%] flex-col flex'>
                                    <h2 className='hsec3parag text-[1.1vw] w-[48%] left-[15%] absolute'>Ready for lift-off? Ping, tweet, message or poke — and we will get back as soon as possible.</h2>
                                    <div className='hsec3connect mt-[25%] left-[15%] absolute gap-[3%] h-[10vh]'>
                                        <h3 className='border-b-2 border-black border-dashed'>info@onixxstudio.com</h3>
                                        <h3 className='border-b-2 border-black border-dashed mt-[7%]'>+1 (636)289 289</h3>

                                    </div>
                                </div>
                            </div>
                            <div className=' w-1/2 relative'>
                                <div className='hsec3addre h-[70%] top-[60%] w-1/2 right-0 absolute'>
                                    <h3 className='hsec3addretext top-100%  '>Onixx studios barrie, Canada</h3>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <div className='slide w-full overflow-hidden text-black h-screen flex-shrink-0 flex justify-center relative items-center'>


                        <div className='img1 absolute z-[3] left-[15%] top-2/3 -translate-y-1/3 h-[13rem] w-[13rem] bg-red-950 rounded-full '>

                        </div>
                        <div className='img1 absolute z-[3] left-1/2 top-0 -translate-y-1/3 -translate-x-1/2 h-[17rem] w-[17rem] bg-red-950 rounded-full overflow-hidden '></div>

                        <div className='w-[60%] text-center  relative'>
                            <h3 className='absolute top-0 left-0  w-1/3 text-left font-semibold leading-6 -translate-y-1/2 text-[1.3rem] -translate-x-1/3'>Professional's </h3>
                            <h1 className='font-semibold text-[12rem] leading-none'>Work</h1>
                            <h3 className='text-[3vh] leading-tight z-[4]'>We create tailored solutions that are distinct by nature, powerful by execution, and impactful by design.</h3>

                        </div>
                        <div className='imag w-[20rem] overflow-hidden h-[20rem] absolute top-1/2 rounded-full -translate-y-1/2 right-0 bg-violet-950'></div>

                    </div> */}
                    <div className='slide w-full h-screen flex-shrink-0 '>
                        <Hsec4 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hsec3
