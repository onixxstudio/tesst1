import React from 'react'
import '../about.css'
const ACard = () => {
  return (
    <>
    <div className='Amaindiv h-[75vh] bg-[#1E1E20] w-full px-10 flex pt-20'>
    <div className='w-[26%] text-[2vw] text-start h-full text-white'>
      <h3 className='Amaindivtext w-[80%]:'>Welcome Here are some detail about service</h3>
    </div>


    <div className='cards z-[10] w-[70%] h-full gap-14 flex'>
<div className='card1 overflow-hidden items-center pt-8 text-center flex flex-col h-[90%] gap-[23%] bg-[#F8D39C] w-[23.2rem]'>
  <h3 className=' text-[1.9vw] font-bold items-center'>Recognised as a top creative company </h3>
  <p className='text-center px-6'>Driftime® have been named a Top Creative Company by It's Nice That, recognising our efforts in building inspiring, supportive and brilliant workplaces. Additionally, Driftime® were crowned Remote Team of the Year by UK Company Culture Awards, and impact.</p>
</div>


<div className='card1  overflow-hidden items-center pt-8 text-center flex flex-col h-[90%] gap-[23%] bg-[#F4F3EE] w-[23.2rem]'>
  <h3 className='text-[1.9vw] font-bold items-center'>Recognised as a top creative company </h3>
  <p className='text-center px-6'>Driftime® have been named a Top Creative Company by It's Nice That, recognising our efforts in building inspiring, supportive and brilliant workplaces. Additionally, Driftime® were crowned Remote Team of the Year by UK Company Culture Awards, and impact.</p>
</div>

<div className='card1  overflow-hidden items-center pt-8 text-center flex flex-col h-[90%] gap-[23%] bg-[#E1D7CD] w-[23.2rem]'>
  <h3 className='text-[1.9vw] font-bold items-center'>Recognised as a top creative company </h3>
  <p className='text-center px-6 text-[85%]'>Driftime® have been named a Top Creative Company by It's Nice That, recognising our efforts in building inspiring, supportive and brilliant workplaces. Additionally, Driftime® were crowned Remote Team of the Year by UK Company Culture Awards, and impact.</p>
</div>

    </div>


    </div>
    
    
    </>
  )
}

export default ACard
