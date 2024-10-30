import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const NavigationBar = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const menus = [
    { label: 'Menu A', slug: 'menu-a' },
    { label: 'Menu B', slug: 'menu-b' },
    { label: 'Menu C', slug: 'menu-c' },
    { label: 'Menu D', slug: 'menu-d' },
    { label: 'Menu E', slug: 'menu-e' },
  ];

  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    const currentSlug = location.pathname.split('/').pop();
    const matchedMenu = menus.find((menu) => menu.slug === currentSlug);
    if (matchedMenu) {
      setActiveMenu(matchedMenu.label);
    }
  }, [location, menus]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu.label);
  };

  return (
    <nav className="bg-[#202020] text-[#BEE5FF] w-full">
      <ul className="items-center px-4 flex py-2">
        {menus.map((menu, index) => (
          <li key={index} className={index < menus.length - 1 ? 'mr-6' : ''}>
            <a
              href={`/${menu.slug}`}
              className={`transition duration-300 ${
                activeMenu === menu.label
                  ? 'text-white underline decoration-[#0077C5] decoration-4'
                  : 'hover:text-white hover:underline hover:decoration-[#0077C5] hover:decoration-4'
              }`}
              onClick={() => handleMenuClick(menu)}
            >
              {menu.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;