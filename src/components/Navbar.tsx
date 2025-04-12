import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex py-6 justify-between items-center px-4  bg-dark text-white relative">
      {/* Logo */}
      <div className="text-4xl font-bold text-accent">Bootwind</div>

      {/* Hamburger - Visible only on mobile */}
      <div
        className="text-xl cursor-pointer block md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? '✖' : '☰'}
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-4 text-xl list-none">
        <li className="hover:bg-secondary p-2 rounded-md transition cursor-pointer">Documentaion</li>
        <li className="hover:bg-secondary p-2 rounded-md transition cursor-pointer">Installation</li>
        
        <li className="hover:bg-secondary p-2 rounded-md transition cursor-pointer">Contact</li>
      </ul>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <ul className="absolute list-none top-full left-0  w-screen bg-dark flex flex-col gap-2 p-4 md:hidden z-10">
          <li className="hover:bg-secondary p-2 rounded-md transition cursor-pointer">Documentaion</li>
          <li className="hover:bg-secondary p-2 rounded-md transition cursor-pointer">Installation</li>
         
          <li className="hover:bg-secondary p-2 rounded-md transition cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
