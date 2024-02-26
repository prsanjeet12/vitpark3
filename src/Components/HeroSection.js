import React from "react";
import image1 from './images/macro_gas_gettyimages-724285883.jpg'
import '../index.css'; // Assuming you have your Tailwind CSS imported in index.css

const HeroSection = () => {
  return (
    <div className="relative h-[700px] mb-1  bg-gray-900">
      {/* Hero image */}
      <img
        className="object-cover w-full h-[700px]"
        src={image1}
        alt="Hero Image"
      />

      {/* Hero content */}
      <div className="absolute 
      inset-0 flex justify-start items-center text-left px-6 md:px-0">
        <div className="text-white md:ml-40 md:mb-0 ">
          <h1 className="text-3xl md:text-4xl font-thin  mb-6">
            THE STANDARD FOR
          </h1>
          <h2 className="text-4xl md:text-6xl font-popins font-bold mb-10">
            High Temperature <br className="hidden md:inline" /> Humidity Measurement
          </h2>
          <div className="flex justify-start">
            <button className="mr-8 md:mr-20 bg-[#2080d1] text-white px-14 py-5 rounded-md hover:bg-blue-700">
              Learn More
            </button>
            <button className="bg-[#2080d1] text-white px-12 py-4 rounded-md hover:bg-blue-700">
              Moisture Handbook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;