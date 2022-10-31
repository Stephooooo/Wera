import React from 'react'

function Buttons({children, onClick, type, to}) {
  return (
    <div>
    <button className=' bg-black text-white px-2 py-1 rounded-md' 
    onClick={onClick}
    to={to}
    type={type}
    > {children} </button> 
    </div>
  )
}

export default Buttons



