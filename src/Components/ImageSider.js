import React, { useState } from 'react';
import im1 from './images/imm1.jpeg';
import im5 from './images/im5.jpg';
import im4 from './images/im4.jpg';
import joo1 from './images/jo1.jpeg';
import joo2 from './images/jo2.jpeg';
import joo3 from './images/joo3.jpeg';
import joo4 from './images/joo4.webp';
import payment from './images/paymenticon.png';
import connectivity from './images/connectivityicon.png';
import building from './images/builingIcon1.png';
import webisteiCONS from './images/webisteiCONS.png';
import business from './images/bussinessicon.png';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageUrls] = useState([joo1, joo2, joo3, joo4, im5]);
  const [titles] = useState([
    "Payment Gateways",
    "Last Mile Connectivity",
    "IT Park",
    "Mobility",
    "E-business"
  ]);
  const [descriptions] = useState([
    "Our advanced payment gateway solutions ensure seamless and secure online transactions for businesses of all sizes. With cutting-edge encryption technologies and robust fraud prevention measures, we empower merchants to accept payments with confidence while providing customers with a smooth and secure checkout experience.",
    "VITPARK understands the critical importance of last mile connectivity in delivering digital services to end-users. Through strategic partnerships and innovative infrastructure solutions, we bridge the gap between networks and end-users, ensuring reliable and high-speed connectivity to homes, businesses, and communities.",
    "VITPARK\'s IT Park provides state-of-the-art infrastructure and facilities for businesses to thrive in the digital age. With high-speed internet connectivity, modern office spaces, conference rooms, and collaborative work environments, our IT Park fosters innovation, creativity, and growth. Join us at VITPARK and experience the ultimate workspace for your digital journey.",
    "In an increasingly mobile-centric world, VITPARK enables businesses to embrace mobility with tailored solutions that cater to the needs of today\'s on-the-go consumers. Whether it\'s developing mobile applications, optimizing websites for mobile devices, or leveraging location-based services, we empower businesses to engage with their audiences anytime, anywhere.",
    "Empower your business to thrive in the digital landscape with VITPARK\'s comprehensive e-business solutions. From setting up online storefronts and implementing digital payment systems to streamlining supply chain management and enhancing customer engagement, we provide end-to-end support to drive your e-business initiatives forward."
  ]);
  const icons = [payment,connectivity,building, webisteiCONS, business];

  const handleIconClick = (imageNumber) => {
    setCurrentImage(imageNumber - 1);
  };


  const nextImage = () => {
    setCurrentImage((prevImage) => {
      if (prevImage === imageUrls.length - 1) {
     
        return prevImage;
      } else {
      
        return prevImage + 1;
      }
    });
  };
  const prevImage = () => {
    setCurrentImage((prevImage) => {
   
      if (prevImage === 0) {
 
        return prevImage;
      } else {
        
        return prevImage - 1;
      }
    });
  };
  return (
    <div className="relative mb-20 mt-20">
      <div className="w-full h-[500px] relative">
        <div className="absolute hidden top-0 left-0 right-0 lg:flex md:flex justify-center items-center z-10">
          <div className="flex space-x-20 h-20 bg-white ">
          {/* bg-[#282828] */}
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`ml-4 mr-4 cursor-pointer ${currentImage === index ? '    ' : ''} w-20 h-20`}
                onClick={() => handleIconClick(index + 1)}
              >
                <img src={icon} alt={`Icon ${index + 1}`}
                 className="w-full 
                
                h-86 fit" />
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
        {/* Title and Description */}
        <div className="absolute lg:top-60 lg:left-40 md:top-40 md:left-20
         top-20 left-10 transform -translate-y-1/2 text-white px-4 py-2">
  <h2 className="lg:text-4xl md:text-3xl sm:text-2xl mb-4 font-popins font-bold">{titles[currentImage]}</h2>
  <p className="text-start lg:text-xl md:text-base sm:text-sm lg:w-1/2 w-full">{descriptions[currentImage]}</p>
  <div className='flex flex-col 
  lg:flex-row lg:justify-start gap-8 lg:mr-80 mt-6'>
  <button onClick={prevImage} className='bg-black
  px-4 py-4
  h-30 w-30 lg:top-10  mb-4 lg:mb-0'>  <LeftOutlined style
  ={{ fontSize: '30px', color: 'white' }} /></button>
  <button className='bg-black px-4 py-4 h-30 w-30'>
    
  <RightOutlined onClick={nextImage} style={{ fontSize: '30px', color: 'white' }} />
    </button>
</div>

</div>
      </div>
    </div>
  );
};

export default ImageSlider;