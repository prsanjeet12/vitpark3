import React from 'react';
import img from './images/about_us5.jpg'
import farm from './images/crop.jpeg'

const OurProduct = () => (
  <div className="py-40 ">
    <div className="mb-8 text-center">
      <h2 className="text-4xl font-bold mb-14">Our Partner</h2>
      <div className="max-w-screen-xl mx-auto px-4">
      <div className="relative">
  <img src={farm} alt="Partner Name" className="w-full h-60 
   object-fill rounded-lg" />
  <h1 className="text-center text-4xl font-semibold text-white absolute inset-0 flex items-center justify-center">BIOVMS</h1>
</div>
<div className="bg-gray-50 h-60 rounded-lg overflow-hidden p-4 flex items-center">
  <img src={img}  className="w-1/4 mr-4 rounded-full" />
  <div className="flex-1">
    <h3 className="text-xl font-bold mb-2">Partner Name</h3>
    <p>Description of the partner.</p>
  </div>
</div>
      </div>
    </div>
    <div className="mb-8 text-center">
      <h2 className="text-4xl font-bold mb-14">Our Product</h2>
      <div className="max-w-screen-xl mx-auto px-4">
      <div className="relative">
  <img src={img} alt="Partner Name" className="w-full h-60  object-fit rounded-lg" />
  <h1 className="text-center text-4xl font-semibold text-white absolute inset-0 flex items-center justify-center">BIOVMS</h1>
</div>
<div className="bg-gray-50 h-60 rounded-lg overflow-hidden p-4 flex items-center">
  <img src={img}  className="w-1/4 mr-4 rounded-full" />
  <div className="flex-1">
    <h3 className="text-xl font-bold mb-2">Partner Name</h3>
    <p>Description of the partner.</p>
  </div>
</div>
      </div>
    </div>
   
  </div>
);

export default OurProduct;
