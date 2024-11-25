import React from 'react'

const ACard = () => {
  return (
    <div className='bg-[#0D0E13] text-white h-[75vh] w-full flex justify-between p-16'>
      <div className='text-2xl font-bold'>Select partnerships and engagements.</div>
      <div className='Acards  w-[73%] flex gap-10 text-black'>
        <div className='h-[97%] w-[30%] relative bg-[#BCD3C5] items-center flex flex-col'>
            <div className='absolute top-[8%]'>Logo</div>
            <div className='flex justify-center translate-y-[90%]  w-[90%]'>
                <p>We're working with Instant Aid in supporting their mission as the first responders in conflict areas and natural disasters. Our work empowers their digital capabilities, positioning and collaborations with World Central Kitchen, the U.N. and other important initiatives for aid in Gaza and across the world.</p>
            </div>
        </div>

        <div className='h-[97%] w-[30%] relative bg-[#FFC8B9] items-center flex flex-col'>
            <div className='absolute top-[8%]'>Logo</div>
            <div className='flex justify-center translate-y-[90%]  w-[90%]'>
                <p>We're working with Instant Aid in supporting their mission as the first responders in conflict areas and natural disasters. Our work empowers their digital capabilities, positioning and collaborations with World Central Kitchen, the U.N. and other important initiatives for aid in Gaza and across the world.</p>
            </div>
        </div>

        <div className='h-[97%] w-[30%] relative bg-[#B5C9DB] items-center flex flex-col'>
            <div className='absolute top-[8%]'>Logo</div>
            <div className='flex justify-center translate-y-[90%]  w-[90%]'>
                <p>We're working with Instant Aid in supporting their mission as the first responders in conflict areas and natural disasters. Our work empowers their digital capabilities, positioning and collaborations with World Central Kitchen, the U.N. and other important initiatives for aid in Gaza and across the world.</p>
            </div>
        </div>


      </div>
    </div>
  )
}

export default ACard
