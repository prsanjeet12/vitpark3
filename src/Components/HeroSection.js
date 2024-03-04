import React from "react";
import image1 from './images/hero.jpg'
import '../index.css'; // Assuming you have your Tailwind CSS imported in index.css

const HeroSection = () => {
  return (
    <div className="relative h-[400px] mb-1  bg-gray-900">
      {/* Hero image */}
      <img
        className="object-cover w-full h-[600px]"
        src={image1}
        alt="Hero Image"
      />

      {/* Hero content */}
      <div className="absolute lg:mt-40
      inset-0 flex justify-start items-center text-left px-6 md:px-0">
        <div className="text-white md:ml-40  md:mb-0 ">
          <h1 className="text-3xl md:text-4xl font-thin  mb-6">
           Welcome to VITPARK
          </h1>
          <h2 className="lg:text-5xl md:text-6xl font-popins font-bold mb-10">
          Where Innovation Meets <br className="hidden md:inline" />Excellence in Transformation
          </h2>
          <div className="flex justify-start">
            <button className="mr-8 md:mr-20 bg-[#ea2691]
             text-white px-14 py-5 rounded-md ">
              Learn More
            </button>
            <button className="bg-[#ea2691] text-white px-12 
            py-4 rounded-md ">
            About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;