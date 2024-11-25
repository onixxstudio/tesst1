import React from 'react'
import Hline from './Hline'

const ser1 = () => {
  return (
    <>
    <div className='w-full h-[99vh]  text-white'>
      <Hline/>
        <div className='ser1main overflow-hidden bg-black pt-20 h-[100%] w-full flex justify-between'>
          {/* <Hline/> */}
        <div className='ser1maintext w-[50%] ml-[5%] text-[4vh]'>
            Brand Experience

        </div>

        <div className='ser1main2 w-[47%] h-fit gap-10 '>
          <div className='ser1main2texts w-[90%] gap-8 flex flex-col'>
            <div className=''>
          <p  className='ser1main2para text-[2.9vh]'>Branding isn’t just something you learn about in Marketing 101––branding is everywhere, even if you don’t notice. A brand is the set of emotions and values that the general public associates with a particular organization, company, or even individual identity. Branding is the science––nay, art––of conveying to your audience just what emotions and values you or your project stand for. It communicates to them how they should feel about you, and how associating with your brand presents them to others.
</p>
            </div>
            <div className='ser1main2points text-[3.3vh] flex-col flex gap-8 font-extrabold'>

            <h3 className='border-b-[2px] border-dashed w-fit' >Brand identity and positioning</h3>
            <h3 className='border-b-[2px] border-dashed w-fit'>Naming & verbal identity</h3>
            <h3 className='border-b-[2px] border-dashed w-fit'>Research & brand strategy </h3>
            <h3 className='border-b-[2px] border-dashed w-fit'>Visual identity</h3>
            <h3 className='border-b-[2px] border-dashed w-fit'>Motion design</h3>
<div className='movetoser1mainp'>
            <div className='movetoser1main h-[5rem] bg-yellow-50 opacity-0 w-[5rem] rounded-full'></div>
</div>
            </div>
          </div>
        </div>
        </div>
    </div>
    <Hline/>
    </>
  )
}

export default ser1
