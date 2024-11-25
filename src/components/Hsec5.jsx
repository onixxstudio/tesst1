import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap, { Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
// import "../App.css"
import "./home.css"
// import Footer from '../Components/Footer/Footer'
const Hsec5 = () => {

useEffect(()=>{
    gsap.to('.capsule:nth-child(2)',{
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
    <div  className='capsules bg-black text-white w-full bg flex items-start mt-52 justify-between h-screen px-32'>

    <div className='left leftcapsulesec w-1/4 flex h-full flex-col justify-between py-10'>
    <h1 className='text-[5vh]'>Let's Shape The Future</h1>
    <div className='heading'>
        <h1 className='text-[8vh] '>Exlpore Our Insights</h1>
        
        <div className='w-fit mt-10 px-10 py-5 border-[1px] border-[--cyan]'>
            <div className='masker overflow-hidden'>
                <span className='inline-block '>Our Solutions</span>
            </div>
        </div>
        
    </div>
    </div>

    <div className='right rightcapsulesec flex items-center gap-20'>

        {/* <!-- here is capsule --> */}
<div className='capsule -rotate-[16deg] flex flex-col items-center p-10 rounded-full border-[1px] border-white'>
<div className='capsulecircle w-72 h-72 bg-red-400 flex overflow-hidden justify-center rounded-full '>
    {/* <img src="./public/back.png" alt=""> */}
</div>
<div className='text text-center mt-10'>
<h3 className='text-3xl '>Ready</h3>
                          <h3 className='text-3xl'>To</h3>
<h3 className='text-3xl '>Elevate</h3>
</div>
<button className='bg-purple-400 text-white py-3 px-4 rounded-full mt-10 mb-32'>Contact Us</button>
</div>

<div className='capsule translate-y-60 -rotate-[16deg]  flex flex-col items-center py-10 px-9 rounded-full border-[1px] border-white'>
   <button className='bg-purple-400 text-white py-3 px-4 rounded-full mt-10 mb-32'>Contact Us</button>
<h3 className='text-3xl '>What Set's</h3>
<h3 className='text-3xl '>Us</h3>
<h3 className='text-3xl '>Apart</h3>
<div className='text text-center mt-10'>
</div>
<div className='w-72 h-72 bg-[#17d6bd] flex overflow-hidden justify-center rounded-full '>
    {/* <img src="./public/onixxlogowhite.png" alt=""> */}
    
</div>
</div>

    </div>
</div>
    {/* <Footer/> */}
    <div className='h-40vh bg-red-300 w-full'>
        aa
    </div>
</>
    
  )
}

export default Hsec5
