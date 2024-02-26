import React, { useState } from 'react';
import im1 from './images/imm1.jpeg';
import im5 from './images/im5.jpg';
import im4 from './images/im4.jpg';
import joo1 from './images/jo1.jpeg';
import joo2 from './images/jo2.jpeg';
import joo3 from './images/joo3.jpeg';
import joo4 from './images/joo4.webp';
import buid from './images/building.png';
import deit from './images/diet.png';
import fire from './images/fire.png';
import still from './images/steel-beam.png';
import crop from './images/wheat-grain.png';

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageUrls] = useState([joo1, joo2, joo3, joo4, im5]);
  const icons = [buid, deit, fire, still, crop];

  const handleIconClick = (imageNumber) => {
    setCurrentImage(imageNumber - 1);
  };

  return (
    <div className="relative mb-20 mt-20">
      <div className="w-full h-[500px] relative">
       
        <div className="absolute top-0 left-0 right-0 flex justify-center items-center z-10">
          <div className="flex space-x-20 h-20  bg-[#d1d5db]">
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`ml-4 mr-4 cursor-pointer ${currentImage === index ? '  bg-gray-200' : 'bg-gray-300'} w-10 h-10`}
                onClick={() => handleIconClick(index + 1)}
              >
                <img src={icon} alt={`Icon ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        {/* Image */}
        <img
          src={imageUrls[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageSlider;