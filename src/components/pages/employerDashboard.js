import React from 'react'
import Navbar from '../common/navbar'


function EmployerDashboard() {
  return (
    <div>
    <Navbar/>
    <div className='md:columns-1 lg:columns-2'> 

    <div className='mt-20'> 
    <h1 className='font-bold text-[30px] '> Welcome back, Apprentice Cloud Limited </h1>
    </div>

    <div className='mt-20'>
<button className='bg-black text-white px-[80px] py-2 rounded-md font-bold text-center'> Subscribe </button>
    </div>
    
    </div>
    
    </div>
    
  )
}

export default EmployerDashboard