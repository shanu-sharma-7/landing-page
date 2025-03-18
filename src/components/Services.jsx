import React from 'react';


const Services = () => {
  return (
   
    <div className='py-20 bg-gray-100 border-b-2  '>
<h2 className='text-center text-3xl font-bold'>Our Services</h2>
<div className='flex mt-10 gap-6 w-full justify-evenly'>

    <div  className='bg-slate-100 border-2 p-6 rounded-lg '>
<h3 className='text-lg font-bold'>Web development</h3>
<p className='text-gray-800 mt-2'>modern and responsive website </p>

        </div>

        <div  className='bg-slate-100 border-2 p-6 rounded-lg '>
<h3 className='text-lg font-bold'>SEO optimization</h3>
<p className='text-gray-800 mt-2'>rank higher in search engine </p>

        </div>

        <div  className='bg-slate-100 border-2 p-6 rounded-lg  '>
<h3 className='text-lg font-bold'>Marketing </h3>
<p className='text-gray-800 mt-2'>grow your audience efficiently </p>

        </div>

</div>

    </div>
    
  );
}

export default Services;
