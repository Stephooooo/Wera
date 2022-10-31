import React from 'react'
 import { MdOutlineMail } from "react-icons/md";
 import {  MdLocalPhone } from "react-icons/md";
import {AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div>
    <div className='hidden md:block'>
    <div className=' bg-gradient-to-r from-gray-700 via-gray-900 to-black h-100 w-full'>
    <div className=' columns-4 flex space-x-28 '>
    
    
    <div className='pt-10 pb-10 ml-5'>
    <h1 className='text-[30px] text-white font-bold '> Wera </h1>
    </div>
    
    <div className='pt-10 pb-10 space-y-4'>
    <h1 className='font-bold text-white'> Services </h1>
    <h1 className='text-white'> Find Jobs </h1>
    <h1 className='text-white'> Employer Dashboard</h1>
    </div>

    <div className='pt-10 pb-10 space-y-4'>
    <h1 className='font-bold text-white'> Contact us</h1>
    <h1 className='text-white flex space-x- '> <span> <MdOutlineMail/> </span> info@wera.com</h1>
    <h1 className='text-white flex space-x-4 '> <span> < MdLocalPhone/> </span>+254702111766</h1>
    
    </div>

    <div className='pt-10 pb-10 space-y-4'>
    <h1 className='font-bold text-white '> Follow us</h1>
    <h1 className='text-white flex space-x-4 '> <span> <AiOutlineInstagram /> </span>Instagram </h1>
    <h1 className='text-white flex space-x-4 '> <span> <AiOutlineTwitter /> </span>Twitter</h1>
    </div>
    </div>

   

    
    </div>
    </div>

    </div>
  )
}

export default Footer