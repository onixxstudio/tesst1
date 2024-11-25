import React from 'react'
import "../../home.css"
const Hsec2 = () => {
    return (
        <div data-color="cyan" className='bg-[black] text-white craft section w-full flex gap-10 justify-between items-start px-10 py-10 relative'>
            <div className='ltext w-[40%] sticky top-0 left-0'>
                <p className='text-3xl leading-[3rem] font-medium'>
                    We are not merely designers. we are visionaries who blend your expertise with our strategic insight to create designs that are distinct by nature, powerful by execution, and impactful by design
                </p>
                <h1 className='text-[5vh] mt-20 leading-[5rem] font-mono mb-10'>
                    WE Don’t Just Design We Transform
                </h1>
                <div className='butt w-fit px-10 py-5 border-[1px] border-[--cyan]'>
                    <div className='btn masker overflow-hidden'>
                        <span className='inline-block '>Our Solutions</span>
                    </div>
                </div>
            </div>

            {/* <!-- cards --> */}
            <div className='cards w-1/2 gap-6 z-[99]'>
                <div className="cardlist gap-10">

                    <div className="cardbox h-[60vh] w-[85%] pt-4  bg-[#FFC8B9] border-black border-2"></div>
                    <div className="cardbox h-[60vh] w-[85%] mt-20 bg-[#B5C9DB] border-black border-2"></div>
                    <div className="cardbox h-[60vh] w-[85%] mt-20 bg-[#BCD3C5] border-black border-2"></div>
                    <div className="cardbox h-[60vh] w-[85%] mt-20 border-green-300 border-2"></div>
                    {/* <div className="cardbox h-[40vh] w-[85%] mt-20 border-black border-2"></div> */}
                    {/* <div className="cardbox h-[40vh] w-[85%] mt-20 border-black border-2"></div> */}
                </div>
            </div>
        </div>
    )
}

export default Hsec2
