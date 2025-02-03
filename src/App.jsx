import Navbar from "./components/navbar" 
import { useState,useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import {collection,getDoc, getDocs, onSnapshot} from 'firebase/firestore';
import { db } from "./config/firebass"; 
import { ToastContainer, toast } from 'react-toastify';
import ContactCard from "./components/ContactCard";
import AddUpdate from "./components/AddUpdate";
import useDisclouse from "./hooks/useDisclose";
 

function App() {

  const [contact,setContact]=useState([]);
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect( ()=>{
      const getContact=async()=>{
        try {

          const contactRef=   collection (db,"contact");
      
          onSnapshot(contactRef,(snapshot)=>{
            const contactList= snapshot.docs.map((doc)=>{
              return{
                id:doc.id,
                ...doc.data()
              }
            })
            setContact(contactList);
            return contactList
            
          })

        
        } catch (error) {
          console.log(error)
        }
      }
        getContact();
  } ,[] )

  const filterContact=(e)=>{
    const value=e.target.value;

    const contactRef=collection (db,"contact");
      
    onSnapshot(contactRef,(snapshot)=>{
      const contactList= snapshot.docs.map((doc)=>{
        return{
          id:doc.id,
          ...doc.data(),
        };
      });

      const filteredContact = contactList.filter((contact)=>
        contact.name.toLowerCase().includes(value.toLowerCase())
      )
      setContact(filteredContact);
      return filteredContact
      

  })
}

  return (
    <div className=" mx-auto   lg:w-[1000px] sm:w-[500px] px-4:">
     <Navbar/>

      <div className=" flex gap-2">

      <div className="relative  flex flex-grow items-center">
            <FiSearch className="absolute ml-1 text-3xl text-white" />
            <input
             onChange={filterContact}
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

<AddUpdate   onClose={onClose} isOpen={isOpen}  /> 
<ToastContainer className="lg:position=bottom-center" />
</div>

  )
}

export default App
