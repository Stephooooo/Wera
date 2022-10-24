import React from 'react'
import Buttons from '../common/buttons'

function FindJobs() {
  return (
    <div>
    <div className=' sm:columns-1 lg:columns-2 ml-5 mb-10'>

    <div>
    <h1 className=' font-bold text-[30px] sm:mt-20 lg:mt-40'> Welcome to Wera <br/> <span className=' text-[30px] font-normal'> Find the perfect opportunity, build your dream career </span></h1>
    </div>

    <div>
    <img className="object-scale-down " src='../img/findJobs.jpg' alt='#' /> 
    </div>

    </div>

    <button className="animate-bounce  text-black text-[30px] font-bold  mt-[40px] pl-[600px] " >
     Find Jobs
</button>
</div>
    


   
  )
}

export default FindJobs