import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu state on hamburger click
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-black text-white flex justify-between items-center p-4 md:px-10">
      {/* Logo */}
      <div className="text-3xl font-bold">
        Pedro Oliveira
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="block md:hidden text-white text-3xl"
        onClick={toggleMenu}
      >
        &#9776;
      </button>

      {/* Navigation Links */}
      <nav
        className={`md:flex md:space-x-8 ${
          isMenuOpen
            ? 'block absolute top-16 left-0 w-full bg-black md:relative md:block md:w-auto md:top-0'
            : 'hidden md:block'
        }`}
      >
        <a
          href="#about"
          className="block py-2 px-4 text-xl font-semibold hover:text-gray-300 md:text-left"
        >
          About
        </a>
        <a
          href="#projects"
          className="block py-2 px-4 text-xl font-semibold hover:text-gray-300 md:text-left"
        >
          Projects
        </a>
        <button
          className="block py-2 px-4 text-xl font-semibold hover:text-gray-300 bg-transparent border-2 border-white rounded-md md:text-left"
          onClick={() => alert('Future Modal with contacts')}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
