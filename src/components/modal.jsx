import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { createPortal } from "react-dom";
function Modal({isOpen,onClose,children}) {
  return createPortal (
    <>
    {isOpen && (
      <div className="absolute top-0 z-40 grid h-[90%] w-screen place-items-center backdrop-blur lg:w-[1050px] lg:ml-[23%] lg:h-[900px]  ">
        <div className="relative z-50 m-auto min-h-[250px] min-w-[80%] bg-white p-4 lg:h-[310px] ">
          <div className="flex justify-end">
            <AiOutlineClose onClick={onClose} className="self-end text-2xl" />
          </div>
          {children}
        </div>
          
      </div>
    )}
  </>,
   document.getElementById("modal-root")
  )
}

export default Modal