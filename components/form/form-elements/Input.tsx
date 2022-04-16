import React from 'react'

interface InputProps{
  placeholder: string;
  inputId:string;
  inputType:"email" | "text" | "password"
}

export default function Input({placeholder, inputId, inputType}:InputProps) {
  return (
   <div className="flex justify-center">
  <div>
    <div className="form-floating mb-3 xl:w-96">
      <input type={inputType} className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id={inputId} placeholder={placeholder} />
      <label htmlFor={inputId} className="text-gray-700">{placeholder}</label>
    </div>
    
  </div>
</div>
  )
}
