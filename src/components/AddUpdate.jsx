import React from 'react'
import Modal from './modal';
import {Field, Form,Formik} from 'formik'

function AddUpdate( {isOpen,onClose} ) {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
       <Formik>
        <Form>
            <div className=' gap-2 flex flex-col' >
                <label htmlFor='name' >Name</label>
                <Field  name="name" className="h-10 border" />
            </div>

            <div className=' gap-2 mt-2 flex flex-col' >
                <label htmlFor='name' >Email</label>
                <Field  name="email" type="email" className="h-10 border" />
            </div>
            <button className='border mt-3 p-1 bg-blue-500 font-serif hover:bg-blue-400 ' >Add Contact</button>
        </Form>
       </Formik>
      </Modal>
    </div>
  );
}

export default AddUpdate