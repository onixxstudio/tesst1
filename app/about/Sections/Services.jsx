import React from 'react'

const Services = () => {
  return (
    <div  className='w-[100%] flex gap-10 justify-between items-start px-10 py-10 relative'>
    <div className='ml-[2.7%] ltext w-[40%] sticky top-0 left-0'>
    <p className='text-3xl leading-[3rem] font-medium'>
    We incorporate the vast and diverse set of experiences that our staff bring from every corner of the industry towards developing unique and impactful digital solutions that fit your industry.
    </p>
    <h1 className='text-[5rem] mt-20 leading-[6.5rem] font-mono mb-10'>what we <h3>do</h3> </h1>
    <div className='butt w-fit px-10 py-5 border-[1px] border-[--cyan]'>
        <div className='btn masker overflow-hidden'>
            <span className='inline-block '>Our Solutions</span>
        </div>
    </div>
    </div>

 
    <div className='cards w-1/2 gap-6'>
        <div className="cardlist gap-10 ">

            <div className="cardbox h-[40vh] w-[90%] pt-4  border-black border-2"></div>
            <div className="cardbox h-[40vh] w-[90%] mt-20 border-black border-2"></div>
            <div className="cardbox h-[40vh] w-[90%] mt-20 border-black border-2"></div>
            <div className="cardbox h-[40vh] w-[90%] mt-20 border-black border-2"></div>
            <div className="cardbox h-[40vh] w-[90%] mt-20 border-black border-2"></div>
        </div>
    </div> 
</div>
  )
}

export default Services
