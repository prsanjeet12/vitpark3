import React, { useState } from 'react';
import mo1 from './images/img-emissions-monitoring (1).jpg';
import mo2 from './images/img-process-control.jpg';
import m03 from './images/img-mac-model-125.jpg';
import m04 from './images/img-mac-model-155.jpg';

import './style.css';

const OurProducts = () => {
  const [activeImage, setActiveImage] = useState(1);

  const images = [
    { src: mo1, alt: 'Emissions Monitoring', text: ' Emissions Monitoring' },
    { src: mo2, alt: 'Process Control', text: ' Process Control' }
  ];

  const handleImageClick = (imageNumber) => {
    setActiveImage(imageNumber);
  };

  return (
    <div className="mt-20">
      <h2 className="text-center text-3xl font-bold mb-8">Our Products</h2>
      <div className="flex justify-center items-start">
        {images.map((image, index) => (
          <div key={index} className={`relative w-[500px] ${activeImage === index + 1 ? 'active-image' : 'inactive-image'}`} onClick={() => handleImageClick(index + 1)}>
            <img src={image.src} alt={image.alt} className={`w-full h-54 ${activeImage === index + 1 ? 'darken' : ''}`} />
            {activeImage === index + 1 && <div className="triangle-bottom-center" onClick={() => setActiveImage(index + 1)}></div>}
            <div className="product-text absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">{image.text}</div>
          </div>
        ))}
      </div>
      {activeImage === 1 && (
        <div className="hidden lg:flex justify-start ml-64 mt-10 items-center">
          <div className="w-[1006px] h-[200px] bg-white flex justify-center items-center text-2xl font-bold">
            <div className="flex items-center">
              {/* Left Image */}
              <img src={m03} alt="Left Image" className="w-40 h-40 ml-8" />
              {/* Middle Text */}
              <span className="ml-10 text-gray-400">
                MAC155
                <h3 className='text-[14px] w-[470px]'>The MAC 155 moisture/humidity analyzer enables you to augment your process safety and comply with US EPA regulations..</h3>
              </span>
              {/* Right Text */}
              <button className='bg-white px-10 border-2 border-gray-400 text-[17px] py-2 text-gray-300 ml-[10px]' style={{ display: 'inline-block' }}>
                View Spaces
              </button>
            </div>
          </div>
        </div>
      )}
      {activeImage === 2 && window.innerWidth > 768 && (
        <div className="hidden lg:flex
         justify-start ml-64 mt-1 items-center">
          <div className="w-[1006px] h-[300px]
           bg-white flex items-center text-2xl font-bold">
            <div className="flex items-center">
              {/* Left Image */}
              <img src={m04} alt="Left Image" className="w-40
               h-40 ml-8  lg:flex" />
              {/* Middle Text */}
              <span className="ml-10  hidden lg:flex  text-gray-400 " >
                MAC125
                <h3 className='text-[14px] w-[470px]'>The MAC 125 Moisture Analyzer is different from other comparable products in that it uses no chemicals, compressed air, wet bulb techniques, optics or mirrors. Instead, its moisture sensor and humidity meter relies on a patented, proprietary solid state humidity measurement process.</h3>
              </span>
              {/* Right Text */}
              <button className='bg-white px-10 border-2 border-gray-400 text-[17px] py-2 text-gray-300 ml-[10px]' style={{ display: 'inline-block' }}>
                View Spaces
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OurProducts;