import React, { Children, useState } from "react";
import { Transition } from "@headlessui/react";
import Buttons from "./buttons";
import { Link} from "react-router-dom";


function Navbar( {isSignedIn, isNotSignedIn}) {
    const [isOpen, setIsOpen] = useState(false);

    return (

<div className="min-h-full">
  <nav className="bg-white shadow-md">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <h1 className='text-[30px] font-bold '> Wera </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              
              <Link href="#" className=" text-black px-3 py-2 rounded-md text-[15px] hover:font-bold" to= "/" >Home</Link>

              <Link href="#" className=" text-black px-3 py-2 rounded-md text-[15px] hover:font-bold " to= "/FindJobs">Find jobs</Link>

              <Link href="#" className="text-black px-3 py-2 rounded-md text-[15px] hover:font-bold" to="/AboutUs" > About us</Link>

              <Link href="#" className="text-black px-3 py-2 rounded-md text-[15px] hover:font-bold" to="/Employer" >Employer</Link>

            </div>
          </div>
        </div>
        {isNotSignedIn && (
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <Buttons 
            children= "Sign in"
            to= "/Signin"
            />

            <div className="relative ml-3">
              <div>
              <Buttons
              children= "Sign Out"
              to= "/Signup"
              />
              </div>
            </div>
          </div>
        </div>
        )}
        {isSignedIn && (
          <div className=" hidden md:block">
          <div className="flex items-center space-x-4">
            <img className="w-10 h-10 rounded-full" src="../img/me2.PNG" alt=""/ >
            <div className="font-medium text-black">
             <div className="text-[15px] ">Hi, Stephanie Wambui</div>
          
             <Link
                  href="#"
                  type="button"
                  className="  text-black hover:font-bold font-normal text-[15px] "
                  to= "/Signin"
                >
                  Sign out
                </Link>
            </div>
          </div>
          </div>
        )}

        <div className="-mr-2 flex md:hidden">
          
        <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      >
        <span className="sr-only">Open main menu</span>
        {!isOpen ? (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-8 space-x-2 sm:px-3">
                <Link
                href="#"
                  className="text-black hover:font-bold block ml-2 "
                  to= "/"
                >
                  Home
                </Link>

                <Link
                  href="#"
                  className="text-black hover:font-bold block"
                  to= "/FindJobs"
                >
                  Find Jobs
                </Link>


                <Link
                  href="#"
                  className="text-black hover:font-bold block"
                  to= "/AboutUs"
                >
                  About Us 
                </Link>

                <Link
                  href="#"
                  className="text-black hover:font-bold block"
                  to= "/Employer"
                >
                  Employer
                </Link>

                
              {isNotSignedIn &&(
                <div>
                <Link
                  href="#"
                  type="button"
                  className="rounded-md bg-black text-white px-2 py-1 hover:bg-slate-600"
                  to= "/Signin"
                  
                >
                  Sign in
                </Link>

                <Link
                  href="#"
                  type="button"
                  className="rounded-md bg-black text-white px-2 py-1 hover:bg-slate-600"
                  to= "/Signin"
                  
                >
                  Sign out
                </Link>
                </div>

                )}

                {isSignedIn && (
                  
                  <div className="flex items-center space-x-4">
            <img className="w-10 h-10 rounded-full" src="../img/me2.PNG" alt=""/ >
            <div className="font-medium text-black">
             <div> Hi, Stephanie Wambui</div>
             <Link
                  href="#"
                  type="button"
                  className=" bg-transparent text-black font-bold hover:bg-slate-600 border-transparent border-b-2 border-b-black"
                  to= "/Signin"
                >
                  Sign out
                </Link>
            </div>
          </div>
                


                )}
                
                
                </div>
               
                </div>
          
            
          )}
        </Transition>
      </nav>

      </div>
)
}

export default Navbar