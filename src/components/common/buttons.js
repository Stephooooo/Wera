import React from 'react'

function Buttons({children, onClick, type}) {
  return (
    <div>
    <button className=' bg-black text-white px-2 py-1 rounded-md' 
    onClick={onClick}
    type={type}
    > {children} </button> 
    </div>
  )
}

export default Buttons



