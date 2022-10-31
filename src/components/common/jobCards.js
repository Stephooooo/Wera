import React from 'react'

function JobCards ({job,company,logo,type,datePosted,industry,location}) {
  return (
    <div>
    <div className=" md:w-full lg:w-[1200px] mt-10 mb-10 ">
  <div className=" border-b shadow-md bg-white rounded-b md:h-30 lg:h-20  ">
    <div className=" md:space-x-2 lg:space-x-28 flex">

    <div >
    <img className=" h-20 w-20 object-fill " src= {logo} alt="#"/>
    </div>
    <div className=' px-3 py-5 md:space-x-2 lg:space-x-28 flex columns-6 '> 
    <div>
    <h1 className='font-bold md: text-sm'> {job}</h1>
    <h1 className='font- font-semibold md: text-sm'> {company} </h1> 
    </div>

    <div>
    <h1 className='font-bold md: text-sm'> {industry}</h1>
    </div>

    <div>
    <h1 className='border-b-x border-b-y bg-slate-900 text-white rounded-md px-1 py-1 md: text-sm hidden md:block'> {type} </h1>
    </div>

    <div>
    <h1 className='font-bold md: text-sm'> {location}</h1>
    </div>


    <div>
    <h1 className='md: text-sm hidden md:block'> {datePosted} </h1>
    </div>
    </div>
    </div>
      
    </div>
    </div>
      
    </div>
  )
}

export default JobCards 