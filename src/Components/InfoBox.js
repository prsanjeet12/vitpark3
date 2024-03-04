import React from 'react';
import im from './images/download1.jpeg';

const InfoBox = () => {
  return (
    <div className="info-box-container mt-[200px] bg-sky-50 w-full md:h-[300px] 
    gap-20 flex flex-col md:flex-row items-center justify-center">
      <div className="info-content w-full md:w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
     
        <div className="text-container md:w-3/5 lg:w-2/3 xl:w-3/4 2xl:w-1/2 text-center md:text-left mb-4 md:mb-0 order-1 md:order-2">
          <h2 className="text-[22px] lg:w-[600px] md:w-[500px] text-black font-bold mt-4 md:mt-0">Discover VITPARK: Innovators in Digital Transformation</h2>
          <p className="text-gray-500
           md:w-[500px] lg:w-[800px] mt-2 md:mt-4 text-[17px] leading-relaxed">Welcome to VITPARK, your premier partner in digital transformation. We specialize in advanced payment gateways, last-mile connectivity solutions, mobility services, and expert digital marketing strategies. At our state-of-the-art IT park, innovation and collaboration thrive, fostering a community of forward-thinking pioneers. Join us to explore limitless possibilities and unlock unparalleled expertise. Experience the future with VITPARK..</p>
          <button className="px-14 py-4 bg-[#ea2691] text-white mt-4">Learn more</button>
        
        </div>
       
      </div>
      <img src={im} alt="Info" className="order-2 md:order-1 
        w-full md:w-2/5 lg:w-1/4 xl:w-1/5 lg:mr-10 h-auto
         md:h-60 md:mr-8 mt-8 md:mt-0 " />
    </div>
  );
};

export default InfoBox;