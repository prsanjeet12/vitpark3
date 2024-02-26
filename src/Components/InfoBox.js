import React from 'react';
import im from './images/download1.jpeg';

const InfoBox = () => {
  return (
    <div className="info-box-container mt-10 bg-sky-50 w-full md:h-[300px] flex flex-col md:flex-row items-center justify-center">
      <div className="info-content w-full md:w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
     
        <div className="text-container md:w-3/5 lg:w-2/3 xl:w-3/4 2xl:w-1/2 text-center md:text-left mb-4 md:mb-0 order-1 md:order-2">
          <h2 className="text-[22px] text-[#2080d1] font-bold mt-4 md:mt-0">Our Newest Moisture Analyzer, the MAC116</h2>
          <p className="text-gray-500 mt-2 md:mt-4 text-[17px] leading-relaxed">Specifically designed for use on continuous conveyor ovens that are used to cook meat and poultry, the MAC116 is successfully operating in a large number of cooking installations in many countries throughout the world.</p>
          <button className="px-14 py-4 bg-[#2080d1] text-white mt-4">Learn more</button>
        
        </div>
        <img src={im} alt="Info" className="order-2 md:order-1 w-full md:w-2/5 lg:w-1/3 xl:w-1/4 h-auto md:h-60 md:mr-8 mt-8 md:mt-0" />
      </div>
    </div>
  );
};

export default InfoBox;