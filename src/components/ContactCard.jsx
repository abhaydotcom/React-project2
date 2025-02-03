import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdDelete, MdEditSquare } from 'react-icons/md'
import { db } from '../config/firebass'
import AddUpdate from './AddUpdate'
import useDisclouse from '../hooks/useDisclose'
import { useState } from 'react'
import { toast } from 'react-toastify'

function ContactCard({contacts}) {

    
    const [isOpen, setOpen] = useState(false);

    const onOpen = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
 

    const deleteContact=async(id)=>{
       try {
        
        await deleteDoc(doc(db,"contact",id))
        toast.success("Contact Deleted SucessFully")
       } catch (error) {
        console.log(error)
        
       }
    }

  return (
<div
  key={contacts.id}
  className="border w-full max-w-[930px] bg-gradient-to-r from-neutral-300 to-stone-400 font-bold my-4 text-black rounded-xl p-4 flex flex-col sm:flex-row items-center sm:justify-between"
>
    
  <FaRegUserCircle className="size-12 text-blue-900 sm:ml-3 sm:mr-2" />

 
  <div className="flex flex-col  w-[500px]  justify-end items-center sm:items-start text-center sm:text-left  ">
    <h2 className="text-lg sm:text-xl">{contacts.name}</h2>
    <p className="text-sm sm:text-base">{contacts.email}</p>
  </div>

 
  <div className="flex justify-end  lg:min-w-[400px] gap-2 sm:gap-4 mt-3 sm:mt-0">
    <MdEditSquare onClick={onOpen}  className="size-8 sm:size-10 cursor-pointer  text-blue-500 hover:text-blue-600 transition" />
    <MdDelete  onClick={()=>deleteContact(contacts.id)} className="size-8 sm:size-10 cursor-pointer text-red-500  hover:text-red-600 transition" />
  </div>

  <AddUpdate isUpdate contacts={contacts} isOpen={isOpen} onClose={onClose}/>
</div>
    
  )
}

export default ContactCard