import React from 'react';

const UpperFooter = () => {
  return (
    <div className='w-full bg-[#ea2691] md:h-[140px] h-auto py-5 md:py-0'>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left">
        <span className='text-[22px]
        
        text-white font-popins mb-4 md:mt-10 md:ml-20 ml-10 lg:mr-60'>
          Learn More about Moisture Control with our Moisture Handbook
        </span>
        <button className='px-6 md:px-10 
        py-3 md:w-60 md:py-3 md:mt-10 md:mr-5
         bg-[#ea2691] text-white text-[17px] border-white border-[1px]'>
          Know more
        </button>
      </div>
    </div>
  );
}

export default UpperFooter;
