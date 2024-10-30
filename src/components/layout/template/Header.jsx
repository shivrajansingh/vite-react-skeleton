import React from 'react';
import jcpLogo from '/images/jcp-logo.svg';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 px-4 bg-[#202020] text-white w-full">
      <div className="flex items-center">
        <img src={jcpLogo} alt="JCP Logo" className="h-8 w-8 mr-4" />
        <h1 className="text-lg">Demo Title</h1>
      </div>
      <div className="flex items-center">
        <span className="mr-4">Super User</span>
        <a
          href="/signout"
          className="text-[#29B4FF] hover:text-[#1a9cd8] transition duration-300"
        >
          Sign Out
        </a>
      </div>
    </header>
  );
};

export default Header;