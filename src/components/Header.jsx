import React from 'react'
// import Image from 'next/image'
// import Logoimg from "@/" 
import Image from 'next/image'
const Header = () => {
  return (
    <div className='h-14 overflow-hidden  pl-5 pr-12 bg-blue-400 text-black w-full flex items-center justify-between'> 
      <div className='h-fit w-36 mix-blend-multiply items-center justify-between flex '>
        <div className='  w-14 mix-blend-multiply rotate-[-4deg] hover:scale-150'>
          {/* <Image src='Logoimg' /> */}
          {/* <Image alt='Logo' src={Logoimg}/> */}
        </div>
        <div className='flex hover:cursor-pointer'>
          <a href='/'>OnixxStudio</a>
        </div>
      </div>
      <div className='font-mono text-xl hover:cursor-pointer'>
        <a href='/Contact'>Contact</a>
        <a href='/Hire'>Hire</a>
        <a href='/About'>About</a>
      </div>

    </div>
  )
}

export default Header
