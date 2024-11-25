import React from 'react'
import Ser1 from './compo/ser1'
import Hline from './compo/Hline'
import ACard from '../about/Sections/ACard'
import Services from './compo/Services'
import './solutions.css'

const page = () => {
  return (
        <>
      <div className='h-screen bg-black text-white relative'>
      
      <div className='h-full text-center items-center flex justify-center '>
        <div className=''>
            <h3 className='stroke text-[23vw] font-bold'>Services</h3>
            <p className='text-[2.4vh] text-center w-full'>
                We help startups and businesses build complete products – from brand strategy and identity to websites and branded e-commerce platforms.

            </p>
            <div className='servicescircle1 h-[5rem] border-2 border-dashed rounded-full absolute bottom-[10%] right-[7%] opacity-0 w-[5rem]'></div>
        </div>
        
      </div>
    </div>

    <Ser1/>
{/* <div className='bg-[#000000] h-[40vh] text-white'>
  dia
  hello his is abote section
</div> */}
    <Services/>
    <ACard/>

    {/* <div className='h-screen bg-gray-700'>a</div> */}
        </>
  )
}

export default page
