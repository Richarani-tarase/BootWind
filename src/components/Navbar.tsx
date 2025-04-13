import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex py-6 justify-between items-center px-4 bg-dark text-white relative">
      {/* Logo */}
      <Link to="/" className="text-4xl font-bold text-white no-underline">
        Bootwind
      </Link>

      {/* Hamburger - Mobile only */}
      <div
        className="text-xl cursor-pointer block md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? '✖' : '☰'}
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-4 text-xl list-none">
        <li>
          <Link to="/documentation" className="hover:bg-secondary p-2  text-white no-underline rounded-md transition cursor-pointer">
            Documentation
          </Link>
        </li>
        <li>
          <a href="#installation" className="hover:bg-secondary p-2 text-white no-underline rounded-md transition cursor-pointer">
            Installation
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:bg-secondary p-2 text-white no-underline rounded-md transition cursor-pointer">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <ul className="absolute list-none top-full left-0 w-screen bg-dark flex flex-col gap-2 p-4 md:hidden z-10">
          <li>
            <Link to="/documentation" className="hover:bg-secondary text-white no-underline p-2 rounded-md transition cursor-pointer">
              Documentation
            </Link>
          </li>
          <li>
            <a href="#installation" className="hover:bg-secondary no-underline text-white p-2 rounded-md transition cursor-pointer">
              Installation
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:bg-secondary no-underline p-2 rounded-md transition cursor-pointer">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
