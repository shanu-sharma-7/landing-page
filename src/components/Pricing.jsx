import React from 'react';

const Pricing = () => {
  return (
    <div className='py-20 bg-gray-100'>
        <h2 className='text-center text-3xl font-bold'> Prices Plans</h2>
<div className='flex justify-center mt-10  '>


<div  className='shadow-lg p-6 rounded-lg w-full flex justify-evenly bg-gray-100 '>
   <div>
   <h3 className='text-xl font-bold'>Basic</h3>
<p className='text-gray-600'>$49/month</p>
<ul className='mt-4'>

    <li className='text-gray-500'>feature 1</li>
    <li className='text-gray-500'>feature 2</li> 
     
</ul>
   </div>

   <div>
   <h3 className='text-xl font-bold'>Pro</h3>
<p className='text-gray-600'>$99/month</p>
<ul className='mt-4'>

    <li className='text-gray-500'>feature 1</li>
    <li className='text-gray-500'>feature 2</li>
    <li className='text-gray-500'>feature 3</li> 
      
</ul>
   </div>


   <div>
   <h3 className='text-xl font-bold'>Enterprices</h3>
<p className='text-gray-600'>$19/month</p>
<ul className='mt-4'>

    <li className='text-gray-500'>feature 1</li>
    <li className='text-gray-500'>feature 2</li>  
    <li className='text-gray-500'>feature 3</li> 
    <li className='text-gray-500'>feature 4</li>   
</ul>
   </div>

</div>

</div>

    </div>
  );
}

export default Pricing;
