import React from 'react'
import Inputs from '../common/inputs'
import { Link} from "react-router-dom";


function SignUpJobSeeker() {
  return (
    <div>
    <div className='md:columns-1 lg:columns-2 '>
    <div> 
    <h1 className='text-[20px] font-bold ml-10 mt-10'>  Sign up to access more than 1000+ opportunities as you advance in your career! </h1>
    <img src='../img/signup_1.jpg' alt='#' className='pt-10 ' />
    </div>
    <div className='pl-20'>
    <h1 className='font-bold text-[25px] mb-10 pt-10'> Create a new Account </h1>

    <div className='inline-flex space-x-12 mb-5'> 

    
    <Link className='bg-transparent border-x-2 border-y-2 border-black rounded-md px-2 py-1' to="/SignUpJobSeeker" > Job Seeker </Link>
    <Link className='bg-transparent border-x-2 border-y-2 border-black rounded-md px-2 py-1' to="/SignUp" > Employer </Link>
    </div>

    <Inputs 
    label= "Full Name"
    required= {true}
    />

    <Inputs 
    label= "Email"
    placeholder= "you@example.com"
    required= {true}
    />

    <Inputs 
    label= "Set Password"
    type= "password"
    required= {true}
    />

    <Inputs 
    label= "Confirm password"
    type= "password"
    required= {true}
    />
    
    <div className='mt-10'>
<Link className='bg-black px-[135px] py-2 rounded-md text-white hover:outline-white mt-10 ' to="/" > Sign in </Link>
</div>
    </div>
    </div>
    </div>
  )
}

export default SignUpJobSeeker