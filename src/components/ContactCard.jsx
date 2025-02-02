import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdDelete, MdEditSquare } from 'react-icons/md'

function ContactCard({contacts}) {
  return (
  <div key={contacts.id} className=" border   sm: w-screen lg:w-[930px] bg-cyan-400 font-bold my-10 text-black rounded-xl p-1 flex  justify-between items-center "   >
    <FaRegUserCircle className="ml-3 mt-1 size-[40px] text-blue-900 " />
    <div className=" lg:-ml-90 " >
    
      <h2 className=" ml-4 text-[20px]">Name: {contacts.name} </h2>
      <p  className="ml-4  text-[16px] "  >Email :  {contacts.email}</p>

     
    </div>
         <div className=" flex lg:gap-4 gap-1 ">
         <MdEditSquare className=" lg:size-9 size-7  "  />

         <MdDelete className="size-7 lg:size-9     " />

           </div>
  </div>
  )
}

export default ContactCard