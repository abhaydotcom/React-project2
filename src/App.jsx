import Navbar from "./components/navbar" 
import { useState,useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import {collection,getDoc, getDocs} from 'firebase/firestore';
import { db } from "./config/firebass"; 
 
import ContactCard from "./components/ContactCard";
import Modal from "./components/modal";
import AddUpdate from "./components/AddUpdate";

function App() {

  const [contact,setContact]=useState([]);
  const [isOpen,setOpen]=useState()

  const onOpen=()=>{
    setOpen(true);

  }

  const onClose=()=>{
    setOpen(false)
  }

  useEffect( ()=>{
      const getContact=async()=>{
        try {

          const contactRef=   collection (db,"contact");
          const contactData= await getDocs(contactRef)
          const contactList= contactData.docs.map((doc)=>{
            return{
              id:doc.id,
              ...doc.data()
            }
          })
          setContact(contactList);
          
        } catch (error) {
          console.log(error)
        }
      }
        getContact();
  } ,[] )

  return (
    <div className=" mx-auto   lg:w-[1000px] sm:w-[500px] px-4:">
     <Navbar/>

      <div className=" flex gap-2">

      <div className="relative  flex flex-grow items-center">
            <FiSearch className="absolute ml-1 text-3xl text-white" />
            <input
             
              type="text"
              className=" h-10  flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
            />
          </div>
          <AiFillPlusCircle
           onClick={onOpen}
            className="cursor-pointer text-5xl text-white"
          />
 
      </div>

        <div>
        {
          contact.map((contacts)=>(
              <ContactCard  key={contacts.id} contacts={contacts} />
          ))
        } 

</div>

<AddUpdate  onClose={onClose} isOpen={isOpen}  /> 
</div>

  )
}

export default App
