import React from 'react';

const ContactForm = () => {
  return (
    <div className='py-20 bg-gray-100 text-center'>
        <h2 className='text-3xl font-bold'> Contact us</h2>
        <form className='max-w-lg mx-auto mt-6'>
            <input type="text"  placeholder='your name' className='w-full p-2 mb-4 border rounded-xl'/>
            <input type="email" placeholder='your email' className='w-full p-2 mb-4 border rounded-xl'/>
          <textarea placeholder='your message' className='w-full p-2 mb-4 border rounded-xl'></textarea>
<button className='bg-gray-500 text-white py-2 px-10 rounded text-xl'>Submit</button>
        </form>



    </div>
  );
}

export default ContactForm

