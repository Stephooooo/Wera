import React from 'react'
import Navbar from '../common/navbar'
import Inputs from '../common/inputs'
import Buttons from '../common/buttons'
import Footer from '../common/footer'

function AboutUs() {
  return (
    <div>
    <Navbar/>
    <div className='md:columns-1 lg:columns-2 ml-20'>

    <div>
    <h1 className='font-semibold text-[30px] mt-20'> 1000+ Youth-Centered <br/> opportunities everyday</h1>
    </div>
    
    <div className='pt-10'> 
    <img src='../img/about_us_page.jpg' className='md:h-[300px] lg:h-[400px]'/>
    </div>
    </div>

    <div className='px-10'>
    <h1 className='font-semibold text-[20px] text-center mt-5'> About Wera </h1>
    <p className='font-normal text-[20px] text-center'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</div>

<div > 
<div className=' px-10 mt-10'>
<h1 className='font-semibold text-[20px] text-center'> Our Partners </h1>
<p className='font-normal text-[20px] text-center'> Wera hasworked with major brands in the country to connect them with over 1000+ able Youth</p>
</div>


<div className='flex space-x-16 px-10 mt-10'>
 <img src="../img/apprentice_logo.jpg" className='h-20 w-20'/> 
<img src='../img/absa.png' className='h-20 w-20'/>
<img src='../img/brrng.svg' className='h-20 w-20' />

<img src= "../img/google_logo.jpg"  className='h-20 w-20 md:hidden'/>
<img src='../img/dell.png' className='h-20 w-20 md:hidden' /> 

<img src='../img/mamarock.jpg'  className='h-20 w-20 md:hidden' />

<img src="../img/inkomoko.jpg"  className='h-20 w-20 md:hidden' />
<img src='../img/saf.jpg'  className='h-20 w-20 md:hidden'/>
<img src='../img/miniso.png' className='h-20 w-20 md:hidden' />
</div>

<div className=' md:columns-1 lg:columns-4 bg-black space-x-12 md:block lg:flex mt-10 px-10 py-10'>

<div >
<img src='../img/subscribe_icon.png' className='w-20 h-20 ' />
</div>

<div>
<h1 className='text-white font-semibold text-[25px]'> Subscribe to our newsletter</h1>
<h1 className='text-white font-normal text-[20px]'> To receive job updates and interesting blog posts</h1>
</div>

<div className='mt-5'> 
<Inputs
placeholder= "Enter Email Address"
/>
</div>

<div className='mt-5'>
<button className='bg-white text-black px-[80px] py-2 rounded-md font-bold text-center'> Subscribe </button>
</div>


</div>
<div className=' px-10 mt-10 text-center mb-10'>
<h1 className='font-semibold text-[20px] text-center mb-5'> Are you an Employer </h1>
<p className='font-normal text-[20px] text-center mb-5'> Visit our Employer Dashboard to get more information on how to advertise your position.</p>
<Buttons
children= "Employer Dashboard"
/>
</div>

<Footer/>





<div>


</div>


</div>
    
    
    </div>
  )
}

export default AboutUs