import React from 'react'
import Reel from './Reel/page'
import Acard from './Sections/ACard'
import Hline from './Sections/Hline'
import Hcapsule from './Sections/Hcapsule'
import Asec2 from './Sections/Asec2'
import './about.css'
import baloon from "../../public/baloon.png"
import Image from 'next/image'
const page = () => {
  return (
    <>
      <div className='Aboutmain  h-screen w-full'>
        <div className='w-[100%] h-[100%] relative'>
          <div className='Asec1 bg-white h-[50%] relative'>
            <div className='Asec1text leading-[9.4vw] left-[5%] w-fit top-[27%] absolute'>
              <h3 className='Asec1text1 text-[9vw] font-bold'>Who</h3>
              <h3 className='Asec1text2  font-bold text-[10vw]'>We are?</h3>
            </div>
          </div>
          <div className='Asec2 h-[40%] flex flex-col items-end italic absolute right-[5%]'>
            <div className='Asec2text text-[5.5vw]'>
              <h3 className='font-[500]'>The Only Creative </h3>
              <h3 className='font-[500]'>Design Agency </h3>
            </div>
          </div>
          <div className='h-[40vh] flex justify-center'>
<Image src={baloon} className='baloonimage w-[60%] h-[50vh] opacity-0 items-center ' />
          </div>
        </div>
      </div>

      <Asec2/>


      {/* reel */}
      {/* <Reel/> */}

      <Hline/>

      <Acard />

      {/* <Hline/> */}

      <Hcapsule/>






    </>

  )
}

export default page
