'use client'
import React from 'react'
import work from "./work/page"
import Hsec4 from '@/components/Hsec4'
import Hsec3 from '@/components/Hsec3'
import Hsec2 from '@/components/Hsec2'
import News from '@/components/News/News'
import Hsec1 from '@/components/Hsec1'
import Works from '../src/components/Work/works'
import Lenis from 'lenis'
import Hsec5 from '@/components/Hsec5'
const page = () => {
  
  return (
    <div>
      {/* <Works /> */}
      <Hsec1/>
      <Hsec2/>
      <Hsec3 />
      <News/>
      {/* <Hsec4/> */}
      <Hsec5/>
      {/* <div className='bg-gray-500 h-screen'>a</div> */}

    </div>
  )
}

export default page
