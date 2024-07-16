import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

import PyroLogo from '../assets/Logo.svg';
import PyroLogoWhite from '../assets/Logo Shape.svg';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    setNavOpen(false)
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0 flex justify-between items-center h-24 px-4 bg-white z-50'>
      <div className='flex'>
        <a href="/">
        <img className='h-10 pl-3' src={PyroLogo} alt="" />
        </a>
        
      </div>

      {/* Desktop navigation */}
      <ul className='hidden md:flex'>
        <NavItem to='/' text='Home' currentPath={location.pathname} />
        <NavItem to='/about' text='About' currentPath={location.pathname} />
        <NavItem to='/work' text='Work' currentPath={location.pathname} />
        <NavItem to='/service' text='Service' currentPath={location.pathname} />
        <NavItem to='/contact' text='Contact' currentPath={location.pathname} />
      </ul>

      {/* Mobile navigation toggle button */}
      <div className='block md:hidden sm:hidden' onClick={handleNavToggle}>
        {navOpen ? (
          <AiOutlineMenu size={20} color='black' className='transition-opacity duration-500 ease-out opacity-0 transform hover:scale-105' />
        ) : (
          <AiOutlineMenu size={20} color='black' className='transition-opacity duration-500 ease-out opacity-100 transform hover:scale-105' />
        )}
      </div>

      {/* Mobile close button */}
      <div onClick={handleNavToggle} className='fixed top-9 right-4 z-[100]'>
        {navOpen ? (
          <AiOutlineClose size={20} color='white' className='z-[100] transition-opacity duration-500 ease-out opacity-100 transform hover:scale-[1.2]' />
        ) : (
          <AiOutlineClose size={20} color='white' className='z-[100] transition-opacity duration-500 ease-out opacity-0 transform hover:scale-[1.2]' />
        )}
      </div>

      {/* Mobile sidebar */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-black z-50 
                      transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.16,1)]
                      ${navOpen ? 'transform translate-y-0' : 'transform -translate-y-full opacity-0'}`}>
        <div className='flex justify-between items-center h-24 px-4 bg-black'>
          <a href="/" className='block'>
            <img
              className='h-16 pl-1 hover:scale-[1.05]'
              src={PyroLogoWhite}
              alt="Pyro Logo"
            />
          </a>
        </div>

        {/* Links in mobile sidebar */}
        <div className=''>
          <ul className='flex flex-col items-start mt-auto mb-6 ml-6'>
            <NavItemMobile to='/' text='Home' onClick={handleNavToggle} currentPath={location.pathname} />
            <NavItemMobile to='/about' text='About' onClick={handleNavToggle} currentPath={location.pathname} />
            <NavItemMobile to='/work' text='Work' onClick={handleNavToggle} currentPath={location.pathname} />
            <NavItemMobile to='/service' text='Service' onClick={handleNavToggle} currentPath={location.pathname} />
            <NavItemMobile to='/contact' text='Contact' onClick={handleNavToggle} currentPath={location.pathname} />
          </ul>
        </div>
      </div>
    </div>
  );
};

// Component for desktop navigation items
const NavItem = ({ to, text, currentPath }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isActive = currentPath === to;

  return (
    <li className={`p-4 text-black font-FuturaLight text-xl ${isActive ? 'underline underline-offset-[5px] decoration-2' : ''}`}>
      <Link
        to={to}
        className={`nav-item-desktop${isHovered ? '' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </Link>
    </li>
  );
};

// Component for mobile navigation items
const NavItemMobile = ({ to, text, onClick, currentPath }) => {
  const isActive = currentPath === to;

  return (
    <li className={`nav-item-mobile ${isActive ? 'underline underline-offset-[16px] decoration-4' : ''}`}>
      <Link to={to} onClick={onClick}>{text}</Link>
    </li>
  );
};

export default Navbar;
