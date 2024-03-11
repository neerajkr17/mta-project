import React from 'react'

const Modal = ({onClose}) => {

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
    <div className='mt-10 flex  flex-col gap-5 bg-indigo-600 rouunded-xl px-20 py-10 items-center mx-4'>
        <h1 className='text-3xl font-bold'>Account Created Successfully</h1>
        <button  onClick={onClose} className='mt-4 bg-slate-400 text-black px-4 py-2 rounded-md'>OK </button>
    </div>
    </div>
  )
}

export default Modal
