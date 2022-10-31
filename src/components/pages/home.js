import React from 'react'
import Buttons from '../common/buttons'
import Navbar from '../common/navbar'
import { Link} from "react-router-dom";
import Footer from '../common/footer';


function FindJobs() {
  return (
    <div>
    <Navbar 
    isSignedIn= {true}
    />
    <div className=' md:columns-1 lg:columns-2 ml-5 mb-10'>

    <div >
    <h1 className=' font-bold text-[40px] mt-20'> Welcome to Wera <br/> <span className=' text-[30px]  font-normal'> Find the perfect opportunity, launch your dream career </span></h1>
    <br/>
    
   <Link className='bg-black w-[200px] text-white px-[80px] py-2 rounded-md' to='/FindJobs'> Find Jobs </Link>
 
    </div>

    <div className='pt-10' >
    <img src='../img/home1.gif' />
    </div>

    </div>
<Footer/>
    
</div>
    


   
  )
}

export default FindJobs