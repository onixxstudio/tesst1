"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap, { Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
// import "../App.css"
import '../about.css'
// import "./home.css"
// import Footer from '../Components/Footer/Footer'
const Hcapsule = () => {

useEffect(()=>{
    gsap.to('.circlerightsec',{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub:1,
            // markers:true
        },
        y:0,
        // ease:Power4
    })
})

  return (
    <>
    <div  className='capsules bg-black text-white w-full bg flex items-start justify-between h-screen px-32'>

    <div className='capsuleleft  leftcapsulesec w-1/4 flex h-full flex-col justify-between py-10'>
    <h1 className='text-2xl'>
        
    </h1>
    <div className='capsuleleftheading'>
        <h1 className='text-6xl '>Our Values</h1>
        
        <div className='hcirclebutton w-fit mt-10 px-10 py-5 border-[1px] border-[--cyan]'>
            <div className='masker overflow-hidden'>
                <span className='inline-block '>Our Solutions</span>
            </div>
        </div>
        
    </div>
    </div>

    <div className='capsule capsuleright h-full border-violet-600 relative left-[9%] w-2/3 rightcapsulesec flex items-center gap-4'>

        {/* <!-- here is capsule --> */}
<div className='circleleftsec text-black text-center flex flex-col gap-8 items-end p-4 h-full w-1/2 border-white'>
<div className='circleleft1 bg-white items-center flex-col flex w-[90%] h-[50%] rounded-full'>
    <div className=' w-[87%] h-[70%] flex flex-col gap-[25%] translate-y-[30%]'>

    <h3 className='cheading text-xl'>Punctuality</h3>
    <p className='circletextpara'>
    we never missed a deadline and are not planning to. Of course, creative projects take time, but we also know that our best work happens under the pressure of deadlines</p>
    </div>
</div>
<div className='circleleft2 bg-white h-[50%] w-[90%] items-center flex-col flex rounded-full'>
<div className=' w-[87%] h-[70%] flex flex-col gap-[25%] translate-y-[30%]'>

<h3 className='text-xl'>Originality</h3>
<p className='circletextpara'>
Our promise to you (and to ourselves) is to never produce Lahmajun websites. Each one of our products are unique from one another, but all carry Concept in their DNA.</p>
</div>
</div>
</div>

<div className='circlerightsec text-black text-center translate-y-60 h-[100%] w-1/2 flex gap-8  flex-col items-start p-4 border-white'>
<div className='circleright1 bg-white items-center flex-col flex w-[90%] h-[50%] rounded-full'>
    <div className=' w-[87%] h-[70%] flex flex-col gap-[25%] translate-y-[30%]'>

    <h3 className='text-xl'>Transparency</h3>
    <p className='circletextpara'>
   
we believe in being upfront with our clients about costs, expectations, deadlines and everything else. That’s what successful relationships are built on!</p>
    </div>
</div>
<div className='circleright2 bg-white h-[50%] w-[90%] items-center flex-col flex rounded-full'>
<div className=' w-[87%] h-[70%] flex flex-col gap-[25%] translate-y-[30%]'>

<h3 className='text-xl'>Punctuality</h3>
<p className='circletextpara'>
we never missed a deadline and are not planning to. Of course, creative projects take time, but we also know that our best work happens under the pressure of deadlines</p>
</div>
</div>

</div>

    </div>
</div>
    {/* <Footer/> */}
</>
    
  )
}

export default Hcapsule
