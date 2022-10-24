import React from 'react'

function Inputs({placeholder,label, type, size}) {
  return (
    <div>

<label className='"block text-[20px] font-medium text-black"'> {label}
  </label>
  <input 
   className="mt-1 px-3 py-2 w-80 bg-white border shadow-sm border-slate-400  placeholder-slate-400 focus:outline-none focus:black focus:black block rounded-md sm:text-[15px] focus:ring-1 mb-5"  
   type= {type}
   placeholder={placeholder}
   required={Boolean}
   size={size}
   />
   
    </div>
  )
}

export default Inputs