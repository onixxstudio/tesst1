import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap, { Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import "./home.css"
const Hsec4 = () => {
    //     useEffect(()={



    //     document.querySelectorAll(".listelem")
    // .forEach(function(el){
    //     el.addEventListener("mousemove",function(dets){

    //         gsap.to(this.querySelector('.picture'),{opacity:1,x:gsap.utils.mapRange(0, window.innerWidth, -200 , 200, dets.clientX), ease:Power4, duration:.5})
    //     })
    //     el.addEventListener("mouseleave",function(dets){
    //         gsap.to(this.querySelector('.picture'),{opacity:0, ease:Power4, duration:.5})
    //     })

    // })

    // })



    return (
        <div data-color="white" className='team'>
            <h1 className='oursolutext text-center mt-[8%] font-semibold text-6xl '>Our Solutions</h1>
            {/* <!-- team member names details --> */}
            <div className='solutionlist w-full h-fit mt-10 px-10 flex flex-col justify-center items-center text-center'>


                <div className='listelem relative border-b-2 border-white w-full py-[2rem] '>
                    <div className='relative flex justify-between items-center z-[3]'>
                        <div className='left flex gap-20'>
                            <h3 className='number text-3xl'>01</h3>
                            <h1 className='text-3xl'>Web Design & Development</h1>
                        </div>
                        {/* <h3 className='text-3xl'></h3> */}
                    </div>
                    <div className='picture opacity-0 absolute z-[4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[11rem] h-[11rem] overflow-hidden rounded-full bg-red-300'></div>
                    <div className='bluelayer bottom-0 left-0 absolute z-[2] w-full h-[0%] bg-blue-600'></div>
                </div>

                <div className='listelem relative border-b-2 border-white w-full py-[2rem] '>
                    <div className='relative flex justify-between items-center z-[3]'>
                        <div className='left flex gap-20'>
                            <h3 className='number text-3xl'>02</h3>
                            <h1 className='text-3xl'>Brand Identity & Visualisation</h1>
                        </div>
                        {/* <h3 className='text-3xl'></h3> */}
                    </div>
                    <div className='picture opacity-0 absolute z-[4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[11rem] h-[11rem] overflow-hidden rounded-full bg-red-300'></div>
                    <div className='bluelayer bottom-0 left-0 absolute z-[2] w-full h-[0%] bg-blue-600'></div>
                </div>

                <div className='listelem relative border-b-2 border-white w-full py-[2rem] '>
                    <div className='relative flex justify-between items-center z-[3]'>
                        <div className='left flex gap-20'>
                            <h3 className='number text-3xl'>03</h3>
                            <h1 className='text-3xl'>Video Production & Editing</h1>
                        </div>
                        <h3 className='text-3xl'></h3>
                    </div>
                    <div className='picture opacity-0 absolute z-[4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[11rem] h-[11rem] overflow-hidden rounded-full bg-red-300'></div>
                    <div className='bluelayer bottom-0 left-0 absolute z-[2] w-full h-[0%] bg-blue-600'></div>
                </div>

                <div className='listelem relative border-b-2 border-white w-full py-[2rem] '>
                    <div className='relative flex justify-between items-center z-[3]'>
                        <div className='left flex gap-20'>
                            <h3 className='number text-3xl'>04</h3>
                            <h1 className='text-3xl'>Digital Advertising & Marketing</h1>
                        </div>
                        <h3 className='text-3xl'></h3>
                    </div>
                    <div className='picture opacity-0 absolute z-[4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[11rem] h-[11rem] overflow-hidden rounded-full bg-red-300'></div>
                    <div className='bluelayer bottom-0 left-0 absolute z-[2] w-full h-[0%] bg-blue-600'></div>
                </div>

                <div className='listelem relative border-b-2 border-white w-[100vw] py-[2rem] '>
                    <div className='relative flex justify-between items-center z-[3]'>
                        <div className='left flex gap-20'>
                            <h3 className='number text-3xl'>05</h3>
                            <h1 className='text-3xl'>Graphic Design & Content Creation</h1>
                        </div>
                        <h3 className='text-3xl'></h3>
                    </div>
                    <div className='picture opacity-0 absolute z-[4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[11rem] h-[11rem] overflow-hidden rounded-full bg-red-300'></div>
                    <div className='bluelayer bottom-0 left-0 absolute z-[2] w-full h-[0%] bg-blue-600'></div>
                </div>

                {/* <div className='listelem relative border-b-2 border-white w-full py-[2rem] '>
        <div className='relative flex justify-between items-center z-[3]'>
        <div className='left flex gap-20'>
        <h3 className='text-3xl'>01</h3>
        <h1 className='text-3xl'>Tanuj Joliya</h1>
        </div>
        <h3 className='text-3xl'>Website Devloper</h3>
        </div>
        <div className='picture opacity-0 absolute z-[4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[11rem] h-[11rem] overflow-hidden rounded-full bg-red-300'></div>
        <div className='bluelayer bottom-0 left-0 absolute z-[2] w-full h-[0%] bg-blue-600'></div>
    </div>

    <div className='listelem relative border-b-2 border-white w-full py-[2rem] '>
        <div className='relative flex justify-between items-center z-[3]'>
        <div className='left flex gap-20'>
        <h3 className='text-3xl'>01</h3>
        <h1 className='text-3xl'>Tanuj Joliya</h1>
        </div>
        <h3 className='text-3xl'>Website Devloper</h3>
        </div>
        <div className='picture opacity-0 absolute z-[4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[11rem] h-[11rem] overflow-hidden rounded-full bg-red-300'></div>
        <div className='bluelayer bottom-0 left-0 absolute z-[2] w-full h-[0%] bg-blue-600'></div>
    </div> */}

                <div className='solutionbuttom mt-16 w-fit px-10 text-center flex justify-center py-5 -translate-y-[-80%] border-[1px] border-[--cyan]'>
                    <div className='masker overflow-hidden'>
                        <span className='inline-block '> Our Solutions</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hsec4
