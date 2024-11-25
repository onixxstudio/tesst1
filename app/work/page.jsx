'use client'
import Lenis from 'lenis'
import React, { useEffect } from 'react'

const page = () => {
    // useEffect(()=>{
    //     const lenis =new lenis();
    //     lenis.on("scroll")
    // })
    return (
        <div className='bg-black text-white h-screen'>
            <div className='h-screen bg-green-300'></div>
            <div className='bg-violet-400 h-screen'></div>
        </div>
    )
}

export default page
