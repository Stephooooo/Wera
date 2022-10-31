import React from 'react';
import JobCards from '../common/jobCards';
import Select from 'react-select';
import Navbar from '../common/navbar'

let County = [
  {label: "Nairobi", value: "Nairobi" },
  {label: "Mombasa", value: "Mombasa"},
  {label: "Kilifi", value: "Kilifi" },
  {label: "Nakuru", value: "Nakuru" },
  {label: "Kisumu", value: "Kisumu" },
  
];

let Industry = [
  {label: "Accountancy,banking andfinance", value: "Accountancy,banking andfinance"},
  {label: "Business,consulting and management", value: "Business,consulting and management" },
  {label: "Charity and Social work", value: "Charity and Social work" },
  {label: "Creative arts and design", value: "Creative arts and design" },
  {label: "Energy and utilities", value: "Energy and utilities" },
  {label: "Engineering and manufacturing", value: "Engineering and manufacturing"},
  {label: "Environment and agriculture", value: "Environment and agriculture"},
  {label: "Healthcare", value: "Healthcare" },
  {label: "Hospitality and events management", value: "Hospitality and events management"},
  {label: "Information technology", value: "Information technology"},
  {label: "Law, enforcement and security", value: "Law, enforcement and security"},
  {label: "Leisure,sport and tourism", value: "Leisure,sport and tourism"},
  {label: "Marketing, advertising and PR", value: "Marketing, advertising and PR"},
  {label: "Media and Internet", value: "Media and Internet"},
  {label: "Property and construction", value: "Property and construction"},
  {label: "Pubic services and admnistration", value: "Pubic services and admnistration"},
  {label: "Recruitment and HR", value: "Recruitment and HR"},
  {label: "Retail", value: "Retail"},
  {label: "Sales", value: "Sales"},
  {label: "Science and pharmaceuticals", value: "Science and pharmaceuticals"},
  {label: "Teacher training and education", value: "Teacher training and education"},
  {label: "Transport and Logistics", value: "Transport and Logistics"}
];

let Type= [
    {label: "Entry-level", value: "Entry-level"},
    {label: "Internship", value: "Internship"},
    {label: "Apprenticeship", value: "Apprenticeship"},
    {label: "Mid-Level", value: "Mid-Level"},
    {label: "Senior-level", value: "Senior-level"}

];

function FindJobs() {
  return(

    <div>
    <Navbar/>

<div className=' bg-gradient-to-t from-gray-700 via-gray-900 to-black px-2 py-2'>
<div className='mt-10 md:block lg:flex lg:ml-10 md:space-x-0 lg:space-x-2'> 
      <Select
        options={County}
        isMulti
        className='md:w-full lg:w-[300px] rounded-md mb-2'
        placeholder= "County"
      />
      
      <Select
        options={Industry}
        isMulti
        className='md:w-full lg:w-[300px]  rounded-md mb-2'
        placeholder= "Industry"
      />
      
      <Select
        options={Type}
        isMulti
        className='md:w-full lg:w-[300px]  rounded-md mb-2'
        placeholder= "Type"
      />

      <div >
      <button className='px-2 py-1.5 bg-black text-white rounded-md w-[200px]'> Search </button>
      </div>
      </div>
    </div>
 
    
    <div className=' md:ml-2 md:mr-2 lg:ml-10 lg:mr-10'> 
<JobCards
job="Software Developer"
company="Apprentice Cloud"
logo= "../img/apprentice_logo.jpg"
datePosted= "1 day ago"
type= "Internship"
industry= "Information Technology"
location= "Nairobi"
/>
<JobCards
job="Software Developer"
company="Apprentice Cloud"
logo= "../img/apprentice_logo.jpg"
datePosted= "1 day ago"
type= "Internship"
industry= "Information Technology"
location= "Nairobi"
/>
<JobCards
job="Software Developer"
company="Apprentice Cloud"
logo= "../img/apprentice_logo.jpg"
datePosted= "1 day ago"
type= "Internship"
industry= "Information Technology"
location= "Nairobi"
/>
<JobCards
job="Software Developer"
company="Apprentice Cloud"
logo= "../img/apprentice_logo.jpg"
datePosted= "1 day ago"
type= "Internship"
industry= "Information Technology"
location= "Nairobi"
/>
</div>
  

    </div>
    
  )
}

export default FindJobs
