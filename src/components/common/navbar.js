import React, { Children, useState } from "react";
import { Transition } from "@headlessui/react";
import Buttons from "./buttons";


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
              
              <a href="#" className=" text-black px-3 py-2 rounded-md text-[20px] hover:font-bold " >Home</a>

              <a href="#" className=" text-black px-3 py-2 rounded-md text-[20px] hover:font-bold " >Find jobs</a>

              <a href="#" className="text-black px-3 py-2 rounded-md text-[20px] hover:font-bold"> About us</a>

              <a href="#" className="text-black px-3 py-2 rounded-md text-[20px] hover:font-bold">Employer</a>

            </div>
          </div>
        </div>
        {isNotSignedIn && (
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <Buttons 
            children= "Sign in"
            />

            <div className="relative ml-3">
              <div>
              <Buttons
              children= "Sign Out"
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
             <div >Hi, Stephanie Wambui</div>
          
             <a
                  href="#"
                  type="button"
                  className=" bg-transparent text-black font-bold hover:bg-slate-600 border-transparent border-b-2 border-b-black"
                >
                  Sign out
                </a>
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
                <a
                href="#"
                  className="text-black hover:font-bold block ml-2 "
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-black hover:font-bold block"
                >
                  Find Jobs
                </a>


                <a
                  href="#"
                  className="text-black hover:font-bold block"
                >
                  About Us 
                </a>

                <a
                  href="#"
                  className="text-black hover:font-bold block"
                >
                  Employer
                </a>

                
              {isNotSignedIn &&(
                <div>
                <a
                  href="#"
                  type="button"
                  className="rounded-md bg-black text-white px-2 py-1 hover:bg-slate-600"
                  
                >
                  Sign in
                </a>

                <a
                  href="#"
                  type="button"
                  className="rounded-md bg-black text-white px-2 py-1 hover:bg-slate-600"
                  
                >
                  Sign out
                </a>
                </div>

                )}

                {isSignedIn && (
                  
                  <div className="flex items-center space-x-4">
            <img className="w-10 h-10 rounded-full" src="../img/me2.PNG" alt=""/ >
            <div className="font-medium text-black">
             <div> Hi, Stephanie Wambui</div>
             <a
                  href="#"
                  type="button"
                  className=" bg-transparent text-black font-bold hover:bg-slate-600 border-transparent border-b-2 border-b-black"
                >
                  Sign out
                </a>
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