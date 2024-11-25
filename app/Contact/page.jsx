import Image from 'next/image'
import React from 'react'
import "./contact.css"
// import baloon1 from "../../../public/baloon1.png"
import baloon from "../../public/baloon.png"
import downarrow from "../../public/downarrow.png"
import cloud from "../../public/cloud.png"
import Form from "@/components/Form"
import Marque from '@/components/Marque'
// import Marque from "./marque.jsx"
// import Header from '../Components/Header/Header'
// import transition from '@/components/transition'

const contact = () => {
  return (
    <div className='bg-white text-black'>
      
{/* <!-- <div class="h-12 bg-red-300 w-full">header</div> --> */}
<div className="main cursor overflow-hidden w-full">
    {/* <Header/> */}
    <div className="fcontact overflow-hidden h-screen relative w-full flex items-center text-center">
    
        <div className="flex items-center w-full h-fit justify-center">
            {/* <!-- <div class="">hello</div> --> */}
            <div className="flex flex-col text-center">
                    <Image  className="baloon1 w-56 absolute translate-x-1/2 translate-y-[-20%] right-[50%] top-[50%]" alt='baloon1' src={baloon}/>
                {/* <img src="./public/baloon1.png" class="w-40 absolute translate-y-[-35%]" alt=""> */}
                <h1 className="font-[montserrat] font-extrabold context flex justify-center text-[17vw]">CONTACT</h1>
            {/* <Image class="w-44 absolute translate-x-[5%] translate-y-[5vh]" src={baloon1}/> */}
                    <Image alt='' src={cloud} className='cloudimg w-60 absolute  right-[25%]'/>
                    {/* <img src="./public/cloud.png" class="w-60 absolute translate-x-1/2" alt=""> */}

                    {/* <img src="./public/baloon.png" class="w-44 absolute translate-x-[5%] translate-y-2/3" alt=""> */}
                
                {/* </h1> */}
                
                <p className="z-[3]">Let us craft your dreams into reality. We listen to you and welcome your ideas. Come visit us and you will see that all are true</p>
                <div className="h-[5.5rem] rounded-full w-[5.5rem] flex items-center justify-center translate-y-2/3 translate-x-[-20%] border-2 border-dashed border-black hover:animate-pulse">
                    {/* <img class="mix-blend-difference z-[10] w-7 h-7" src="./public/downarrow.png" alt=""> */}
                    <Image alt='arrow' src={downarrow} className='mix-blend-difference z-[10] w-7 h-7'/>
                </div>
            </div>
        </div>

</div>



<Form/>


<Marque/>

</div>
</div>

    // </div>
  )
}

export default contact
