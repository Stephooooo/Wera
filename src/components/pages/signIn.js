import React from 'react'
import { BsGoogle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Inputs from "../common/inputs";

function Signin() {
  return (
    <div>
    <div className='md:columns-1 lg:columns-2 '>
    <div> 
    <h1 className='text-[35px] font-bold ml-20 mt-10'> Wera <br/> <span className='text-[20px] font-normal'> Find Your Dream Job </span></h1>
    <img src='../img/sign_in_page_1.jpg' alt='#' className='pt-10 h-full w-100' />
    </div>
    <div className='pl-20'>
    <h1 className='font-bold text-[25px] mb-10 pt-10'> Sign In to your Account </h1>

    <Inputs 
    label= "Email"
    placeholder= "you@example.com"
    required= {true}
    />

    <Inputs 
    label= "Password"
    type= "password"
    required= {true}
    />
<div className='mt-10'>
<Link className='bg-black px-[135px] py-3 rounded-md text-white hover:outline-white ' to= "/"> Sign in </Link>
</div>
<h1 className='text-black font-bold text-[20px] mt-5 ml-40'> or</h1>

<button className='bg-black px-[80px] py-2 rounded-md text-white hover:outline-white mt-5 inline-flex items-center'> <span> <BsGoogle className='fill-current w-4 h-8 mr-2' viewBox="0 0 20 20" />  </span> Sign in with Google 
</button>

<h1 className='text-black text-[20px] mt-10 '> Don't have an account? <span> <Link className='bg-transparent outline-none border-b-2 border-black' to= "/Signup"> Sign up</Link></span></h1>


    </div>
    </div>
    </div>
  )
}

export default Signin