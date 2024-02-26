import React, { useState } from 'react';
import logo from './images/site-logo.png';
import { Popover } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const productList = [
    'Moisture Handbook',
    'Moisture control in drying Application',
    'Glossary of tern',
    'Moisture Analyzer for product Drying',
    'Product 5',
    'Product 6'
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="bg-black p-6 flex flex-wrap justify-between items-center">
      <div className="flex items-center lg:ml-80">
        <img src={logo} alt="Logo" className="h-10 sm:mr-9" />
        <ul className={`hidden sm:flex space-x-10 font-serif 
        lg:mt-3
        text-[16px] ${sidebarOpen ? 'hidden' : 'block'}`}>
          <li>
          <Popover 
              content={
                <ul className="text-black">
                  {productList.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
              } 
              placement="bottom" 
              trigger="click"
            >
              <a href="#" className="text-white">
                RESOURCES <DownOutlined />
              </a>
            </Popover>
          </li>
          <li>
            <Popover content="Popover content for PRODUCTS" placement="bottom" trigger="click">
              <a href="#" className="text-white">
                PRODUCTS <DownOutlined />
              </a>
            </Popover>
          </li>
          <li>
            <Popover content="Popover content for APPLICATIONS" placement="bottom" trigger="click">
              <a href="#" className="text-white">
                APPLICATIONS <DownOutlined />
              </a>
            </Popover>
          </li>
          <li className='text-white'>CASE STUDIES</li>
          <li className='pt-[-4px]'>
            <button className="bg-[#2080d1] md:hidden lg:flex text-white px-10 py-4 rounded">Request for Quote</button>
          </li>
        </ul>
      </div>
      <button className="sm:hidden text-white" onClick={toggleSidebar}>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {sidebarOpen && (
        <div className="sm:hidden fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <div className="bg-black w-64 flex flex-col p-4">
            <a href="#" className="text-white mb-4">RESOURCES</a>
            <a href="#" className="text-white mb-4">PRODUCTS</a>
            <a href="#" className="text-white mb-4">APPLICATIONS</a>
            <a href="#" className="text-white mb-4">CASE STUDIES</a>
            <button className="bg-[#2080d1] text-white px-6 py-3 rounded">Request Quote</button>
          </div>
          <button className="absolute top-0 right-0 m-4 text-white" onClick={toggleSidebar}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
