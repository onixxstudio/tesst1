import React from 'react'

const Form = () => {
  return (
    <div>
      <div className="workwithus relative overflow-hidden bg-[#00AF79] h-[90vh] w-full">
<div className="form w-full   translate-x-[4%] translate-y-[5%]">
    <div className="formin flex flex-col">
<div className="workwithustext w-fit justify-center text-[4.5rem] whitespace-nowrap font-sans ">
    <h1>WORK WITH US</h1>
</div>
        {/* <form onsubmit="sendEmail(); reset(); return false;"  */}
        {/* className="cform gap-6 mt-[2.2%]">  */}
        <div className="cforminput w-[70%] flex gap-10">
              <div className="flex flex-col gap-10">
                  <div className="">
                      <input className=" w-[90%] border-b-2 border-black bg-transparent text-black text-6xl uppercase" type="text" name="NAME" placeholder="Name" required id=""/>              
                    </div>
                    <div className="">
                        <input className=" w-[90%] border-b-2 border-black bg-transparent text-black text-6xl" type="tel" name="NAME" placeholder="(+1) Phone No" required id=""/>              
                    </div>
                </div>  

                <div className="flex flex-col gap-10">
                    <div className="">
                        <input className=" w-[90%] border-b-2 border-black bg-transparent text-black text-6xl lowercase" type="email" name="Phone no" placeholder="Email" required id=""/>              
                      </div>
                      <div className="">
                          <input className=" w-[90%] border-b-2 border-black bg-transparent text-black text-6xl uppercase" type="text" name="Subject" placeholder="Subject" required id=""/>              
                      </div>
                    </div> 
              
                </div>
        <div>
    </div>
         
           </div>
           
<div>
    <div className="flex flex-col gap-10 mt-10">

        <div className="flex flex-col">
        {/* rows="3" */}
            <textarea name=""  className="textareacon w-[60%] border-b-2 border-black bg-transparent text-black text-xl" required id="message" placeholder="Details or Message"></textarea>
        </div>
        <div className="border-2 translate-x-2/3 border-black w-40 h-14 items-center justify-center flex text-3xl font-semibold">
            <button className="" id="submit">Submit</button>
        </div>
    </div>
</div>



        {/* </form> */}
    </div>
</div>

    </div>
  )
}

export default Form
