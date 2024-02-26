import React from 'react';

const UpperHeader = () => {
  return (
    <div className='w-full
     h-10 bg-[#282828] flex flex-col 
    
    sm:flex-row justify-between items-center text-white font-sans'>
      <div className='text-center lg:ml-80 mb-2 sm:mb-0 sm:ml-4'>
        <span className='lg:ml-20'>Call US : 0123456789</span>
        <span className='lg:ml-10 '>email: info@vitpark.com</span>
      </div>
      <div className='hidden sm:flex lg:mr-80 text-center sm:text-right'>
        <span className='mx-4 sm:mx-8'>Blog</span>
        <span>About us</span>
      </div>
    </div>
  );
};

export default UpperHeader;
