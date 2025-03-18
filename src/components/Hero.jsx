import React from 'react';
import backgroundImage from '../assets/background.avif'

const Hero = () => {
  return (
   <section className=' pt-5 h-screen bg-cover flex justify-center text-slate-200 text-center'  
     
   style={{backgroundImage: `url(${backgroundImage})`}}
   >
    <div className='bg-black bg-opacity-50 p-10 rounded-lg'>
      <h1 className='text-5xl font-bold'> Welcome to our landing page</h1>
      <p className='text-xl mt-4'>we provide best service to boost your bussiness</p>


    </div>



   </section>
  );
}

export default Hero;
