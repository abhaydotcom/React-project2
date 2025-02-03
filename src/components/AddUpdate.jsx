import React from 'react'
import Modal from './modal';
import {Field, Form,Formik} from 'formik'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebass';
import { useState } from 'react';
import { toast } from 'react-toastify';

function AddUpdate( {isOpen,onClose ,isUpdate,contacts } ) {

   

    const setContact= async (contact)=>{
        try {
            const contactRef =collection(db,"contact")
        await addDoc(contactRef,contact);
        toast.success("Contact Added")
        onClose();
        } catch (error) {
            console.log(error)
        }
    }

    const updateContact= async (contact,id)=>{
        try {
            const contactRef =doc(db,"contact",id)

        await updateDoc(contactRef,contact);
        toast.success("Contact Upadted  ")
        onClose();
     
        } catch (error) {
            toast.error(error)
        }
    }



  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
       <Formik  
       initialValues={ isUpdate ?{
        name:contacts.name,
        email:contacts.email,
       }:
      { name:"",
       email: "",
      }
    }
        onSubmit={(val)=>{
            isUpdate ?
            updateContact(val,contacts.id)
            :
            setContact(val)
            isOpen=false;
        }} > 
        <Form>
            <div className=' gap-2 flex flex-col' >
                <label htmlFor='name' >Name</label>
                <Field  name="name" className="h-10 border" />
            </div>

            <div className=' gap-2 mt-2 flex flex-col' >
                <label htmlFor='name' >Email</label>
                <Field  name="email" type="email" className="h-10 border" />
            </div>
            <button  className='border mt-3 p-1 bg-blue-500 font-serif hover:bg-blue-400 ' > {isUpdate ? "Update" : "Add" } Contact</button>
        </Form>
       </Formik>
      </Modal>
    </div>
  );
}

export default AddUpdate