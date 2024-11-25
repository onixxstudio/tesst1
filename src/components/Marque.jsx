import React from 'react'
import react from "../../public/react.webp"
import shopify from "../../public/shopify.png"
import node from "../../public/node.png"
import vue from "../../public/vue.png"
import wordpress from "../../public/wordpress.png"
import Image from 'next/image'
// import Footer from '../Components/Footer/Footer'



const Marque = () => {
  return (
    <div>
      <div className="h-[25vh]  bg-[#000000]">
    <h1>Technologies</h1> 
    <div className=" gap-[10%] items-center justify-center pl-4 flex w-full h-full">
<div className=" w-[10%] " >
    <Image alt='' src={react}/>
    {/* <img src="./public/react.webp" alt=""> */}
</div>
<div className=" w-[8%] " >
<Image alt='' src={shopify}/>
    {/* <img src="./public/shopify.png" alt=""> */}
</div>
<div className=" w-[10%] " >
<Image alt='' src={node}/>
    {/* <img src="./public/node.png" alt=""> */}
</div>

<div className=" w-[10%] " >
<Image alt='' src={vue}/>
    {/* <img src="./public/vue.png" alt=""> */}
</div>

<div className=" w-[10%] " >
<Image alt='' src={wordpress}/>
    {/* <img src="./public/wordpress.png" alt=""> */}
</div>


    </div>
</div>

{/* <Footer/> */}
    </div>
  )
}

export default Marque
