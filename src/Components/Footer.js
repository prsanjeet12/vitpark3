import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#252525] text-white'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-start lg:items-start w-full max-w-screen-xl mx-auto py-8 px-4 lg:px-0'>
        <ul className="flex flex-col  items-center lg:items-start">
          <h1 className='mb-8 text-[22px] text-[#ea2691] font-bold'>INFORMATION</h1>
          {/* ea2691 */}
          <div className='text-[17px]'>
            <li className='mb-1 hover:text-[#ea2691]'>About Machine Applications</li>
            <li className='mb-1 hover:text-[#ea2691]'>Corporation</li>
            <li className='mb-1 hover:text-[#ea2691]'>Service and Support</li>
            <li className='mb-1 hover:text-[#ea2691]'>Moisture Handbook</li>
            <li className='mb-1 hover:text-[#ea2691]'>Applications</li>
            <li className='mb-1 hover:text-[#ea2691]'>Contact Machine Applications</li>
            <li className='mb-1 hover:text-[#ea2691]'>Corporation</li>
            <li className='mb-1 hover:text-[#ea2691]'>Distributor List</li>
            <li className='mb-1 hover:text-[#ea2691]'>Sitemap</li>
            <li className='mb-1 hover:text-[#ea2691]'>Blog</li>
          </div>
        </ul>
        <ul className="flex flex-col items-center lg:items-start">
          <h1 className='mb-8 text-[22px] text-[#ea2691] font-bold'>OUR PRODUCTS</h1>
          <div className='text-[17px]'>
            <li className='mb-1 hover:text-[#ea2691]'>MAC125 Moisture Analyzer</li>
            <li className='mb-1 hover:text-[#ea2691]'>MAC155 Moisture Analyzer</li>
            <li className='mb-1 hover:text-[#ea2691]'>MAC 116 Steam Analyzer</li>
            <li className='mb-1 hover:text-[#ea2691]'>Steam Flow Meters</li>
            <li className='mb-1 hover:text-[#ea2691]'>Steam Flow Rate Transmitters</li>
          </div>
        </ul>
        <ul className="flex flex-col items-center lg:items-start">
          <h1 className='mb-8 text-[22px] text-[#ea2691] font-bold'>GET IN TOUCH</h1>
          <div>
            <li className='text-[17px] mb-4'>A Division of Machine Applications Corporation 3410 Tiffin Ave. - Sandusky, Ohio 44870</li>
            <div className='flex gap-9'>
              <li className='text-[17px]'>Ph: 419.621.2322</li>
              <li className='text-[17px]'>Fx: 419.621.2321</li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Footer;