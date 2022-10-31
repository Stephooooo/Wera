import React from 'react'
import Footer from '../common/footer'
import Navbar from '../common/navbar'
import { Link} from "react-router-dom";


function Employer() {
  return (
    <div>
    <Navbar/>
    <div className='text-center '>
    <h1 className='font-bold text-[20px] px-10 mt-10'> Connect with ambitious, hard-working  and eligible Youth </h1>
    <img src='../img/employer1.jpg' className=' md:w-full lg:px-60 mt-5 md:h-[200px] lg:h-[400px]'/>
    
    </div>
    <div>
    <h1 className='font-bold text-[20px] text-center mb-5 mt-10'> Our Advertising plan  </h1>

    <div className='md:columns-1 lg:columns-4 bg-black space-x-12 md:block lg:flex mt-10 px-10 mb-10 '>
    <div>
    <img src='../img/hiring.png' className=' w-40 h-40 ' />
    </div>
 
    <div>
    <h1 className='text-white font-bold text-[20px] mt-10 ' > Post a Job for only Ksh 2000</h1>
   </div>

   <div>
    <ul className='list-disc text-white space-y-4 mt-10'>
    <li> Value for money</li>
    <li> Connect to 1000+ Youth</li>
    <li> Easy Job posting process</li>
    </ul>
    </div>

 
    <div className='mt-10' >
<Link className='bg-white text-black px-[80px] py-2 rounded-md font-bold text-center ' to= '/Employerdashboard' > Get Started </Link>
    </div>
    
    </div>
    </div>

    <Footer/>
    </div>
  )
}

export default Employer