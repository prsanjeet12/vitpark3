import React from 'react';
import iamge from './images/download.jpeg'

const BelowVitPark = () => {
  return (
    <div className='relative h-auto lg:h-80 w-full'>
      <div className='ml-4 lg:ml-40  w-full lg:w-[600px] text-[18px] font-arial'>
        <h1 className='text-center text-[#2080d1] font-bold text-[22px] mt-5 mb-9'>Your Gateway to Digital Innovation</h1>
        <span className='text-center w-[200px]'>At VITPARK, we are dedicated to driving digital transformation
             and empowering businesses to thrive in the digital age. With our
              comprehensive suite of services and expertise in digital
               infrastructure, we provide end-to-end support to help businesses
                unlock endless possibilities for success.</span>
                <div></div>
                <button className=" mt-9 bg-[#2080d1] text-white px-14 py-5 rounded-md hover:bg-blue-700">
              Learn More
            </button>
      </div>
      {/* Conditionally rendering the blue box for small and medium devices */}
      <div className='lg:hidden w-full flex justify-center'>
        <img src={iamge} alt="" />
        {/* <div className='h-80 w-80 bg-blue-200 mt-4'>
        {/* <img src={iamge} alt="" /> */}
        {/* </div> */} 
      </div>
      {/* Conditionally rendering the blue box for large devices */}
      <div className='hidden lg:block absolute top-1 right-0
       lg:right-80 h-80 w-80 '>
      <img src={iamge} alt="" className=' h-80 w-80' />
      </div>
    </div>
  );
};

export default BelowVitPark;
