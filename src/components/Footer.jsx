// import React from 'react'
import "@/App.css"
import Image from 'next/image'
import Link from 'next/link'
import Footerlogo from "../../public/onixxlogo.jpg"
const Footer = () => {
  return (
      <>
      {/* <div>hello</div> */}
    <div className=' footer h-[36vh] bg-black flex overflow-hidden text-white items-end justify-evenly'>
      <div className='h-[70%]  w-[20%]'>
        {/* <img src="../../../Public/onixxlogo.png" alt="hi" /> */}
        <Image alt='footer logo' src={Footerlogo} className='w-20 rounded-lg'/>
          <h1 className='socialconnect mt-3 flex'> Let's connect with our socials</h1>
        <div className='flex gap-3 mt-3 '>
          <section className='bg-violet-500 h-8 w-8 rounded-md'></section>
          <section className='bg-violet-500 h-8 w-8 rounded-md'></section>
          <section className='bg-violet-500 h-8 w-8 rounded-md'></section>
          <section className='bg-violet-500 h-8 w-8 rounded-md'></section>

        </div>
      </div>
      <div className='h-[70%]  w-[20%]'>

        <h1 className='text-xl'>Explore</h1>
        <div className="Navlinks grid gap-1 mt-4 text-center w-14 justify-center">
            <Link href='/About'> About</Link>
            <Link href='/Hire'> Hire</Link>
            <Link href='/Contact'> Contact</Link>
        </div>
            

      </div>

      
      <div className='div2footer h-full w-[19%] '>
        <div className='sendreqcircle flex hover:cursor-pointer justify-center items-center mt-5 h-[15rem] w-[15rem] border-2 border-violet-600 hover:'>
          <h1 className='sendreqcircletext text-2xl font-mono font-extrabold hover:border-y-2 border-dotted'>Send Request</h1>
        </div>
      </div>
      </div>
  <hr />
      <div className='sec2footer overflow-hidden bg-black text-white h-[37vh] flex justify-center items-center'> 
             {/* <hr  className='inline h-full w-full'/> */}
        <hr className='h-2 bg-yellow-50 relative top-6'/>
          <h1 className='h1footer font-extrabold text-[22vw]'>ONIXX</h1>
      </div>
      </>
  )
}

export default Footer










// import React from 'react'
// import "../../App.css"
// // import Hire from "./Components/Hire"
// // import { RouterProvider } from 'react-router-dom'
// // import { a,a } from 'react-router-dom'
// const Footer = () => {


//   return (
//     <>
//     <div id='footer' className=' bg-[#0C0C0C] text-white h-[70vh] w-[100%]'>

//  <div className='footer-1sec h-[35vh] w-full flex'>
//   <div className='h-full w-[33.5%] '>
//     <div className='h-full w-full  ml-16 pt-9 left-'>
//     <div className='footerimage h-20 w-20 flex align bg-yellow-200 rounded-2xl'>
//         <img className='mix-blend-darken' src="../../Public/onixxlogo.png" alt="" />
//     </div>
//     <div className='followfotter'>

//         <h3 className=' pt-2'>Let's connect on our socials</h3>
//     <div className="follow flex gap-4 pt-4">
//       <section className='h-8 bg-[#A78BFA] w-8 rounded-lg'></section>
//       <section className='h-8 bg-[#A78BFA] w-8 rounded-lg'></section>
//       <section className='h-8 bg-[#A78BFA] w-8 rounded-lg'></section>
//     </div>
//     </div>
//     </div>

//   </div>


//   <div className=' h-full w-[33.5%] '>
// <div className='explorefooternav pt-12 w-24 text-center'>
//   <h2 className='text-xl '>Explore</h2>
//   <div className='pt-2 text-center '>
//     <ul className='pt-2 hover:text-violet-400 '>
//     <a to='/Contact'>Contact</a>
//     </ul>
// <ul className='pt-2 hover:text-violet-400'>
//     <a to='/Hire'>Hire Us</a>
// </ul>
// <ul className='pt-2 hover:text-violet-400'>
//     <a>About Us</a>
// </ul>
//   </div>
// </div>

//   </div>
  
//   <div className='footercontact h-full w-[21.5%]  '>
//     <div className='footer-button h-[20%] bg-[#A78BFA] mt-24 w-[60%] ml-16 rounded-full hover:scale-125 text-[#000000] font-extrabold'>
//     <button>

//       <a to='/Contact'> <h1 className='text-3xl flex ml-6 pt-1'>Contact Us</h1> </a>
//     </button>
      
//     </div>
//   </div>
// </div >


// <div className='flex align-middle justify-center'><hr className='h-0.2 w-[94%]'/></div>
// <div className='footer-sec-2 h-[35vh]'>
// <div className='footer-sec-2-part2 footer-h1 align-middle justify-center text-[22vw] h-full font-extrabold'>
//      <h1 className='onixxtext hover:text-[#A78BFA]'>ONIXX</h1>
//      </div>
// </div> 

//     </div>
    
//     </>

//   )
// }

// export default Footer
