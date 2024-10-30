import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import jcpLogo from '/images/jcp-logo.svg';


const mobileNavigationBar = (menus, pageTitle="Account Setting") =>{

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const mobileMenu = () => {
    return (<>
    {isOpen && (
        <div className="fixed top-0 left-0 w-1/2 h-screen bg-[#202020] z-10">
          <div className="flex justify-between items-center py-2 px-4">
            <button
              className="text-[#0077C5]"
              onClick={handleToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center px-4">
            <img src={jcpLogo} alt="JCP Logo" className="h-8 w-8 mr-4" />
            <h1 className="text-lg text-white">Voucher Portal</h1>
          </div>
          <ul className="px-4">
            {menus.map((menu, index) => (
              <li key={index} className="py-2">
                <a
                  href={`/${menu.slug}`}
                  className="text-[#BEE5FF] hover:text-white"
                >
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>)
  }

  const burgerIcon = () => {
    return (
      <div className="md:hidden flex justify-between items-center py-2 bg-[#202020] text-white w-full">
    <div className="flex items-center">
      
      <button
        className="text-[#0077C5] ml-4"
        onClick={handleToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <h1 className="text-lg text-white">{pageTitle}</h1>
    </div>
    <div className="flex-1"></div>
  </div>
    )
  }

  return (
    <>
  {burgerIcon()}
  {mobileMenu()}
  </>
  )
}

const desktopNavigationBar = (menus) => {
  return(
    <nav className="hidden md:block bg-[#202020] text-[#BEE5FF] w-full">
        <ul className="items-center px-4 flex py-2">
          {menus.map((menu, index) => (
            <li key={index} className={index < menus.length - 1 ? 'mr-6' : ''}>
              <a
                href={`/${menu.slug}`}
                className="transition duration-300 hover:text-white hover:underline hover:decoration-[#0077C5] hover:decoration-4"
              >
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
  )
}

const NavigationBar = () => {
  
  const location = useLocation(); // we will use this to fetch page title
  const menus = [
    { label: 'Menu A', slug: 'menu-a' },
    { label: 'Menu B', slug: 'menu-b' },
    { label: 'Menu C', slug: 'menu-c' },
    { label: 'Menu D', slug: 'menu-d' },
    { label: 'Menu E', slug: 'menu-e' },
  ];

  return (
    <div>
      {mobileNavigationBar(menus)}
      {desktopNavigationBar(menus)}
    </div>
  );
};

export default NavigationBar;