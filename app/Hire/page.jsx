import React from 'react'
import Image from 'next/image'
// hire image is here 
import hireimg from "../../public/Hire.png"
// import transition from '@/components/transition'

const page = () => {
  
  return (
<>
        {/* <Hire/> */}
<div className='h-screen w-full bg-[#ECECEC]'>
<div className='h-[60%]  flex  justify-center items-end'>
  <div className=' w-fit'>
  <Image  alt='image' src={hireimg} />
  </div>
</div>


<div className='h-[40%] bg-[#68D793] text-black w-full flex justify-center'>
<div className='h-[70%] w-full flex justify-center'>
<div className='font-mono  mt-6'>
  <h1 className='footercodetext text-[5.2vh] whitespace-nowrap'>
  Coders At Work
  </h1>
<h2 className='footerinfotext text-center text-[3vh] mt-3 border-dashed border-y-2 border-black flex-nowrap cursor-copy'>mailto: info@onixxstudio.com </h2>
  </div>

</div>
</div>
</div>

</>  
)
}

export default page
