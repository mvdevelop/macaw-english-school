
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiSun, 
  FiMoon, 
  FiMenu, 
  FiX,
  FiHome,
  FiBookOpen,
  FiUser,
  FiBell,
  FiMessageSquare
} from 'react-icons/fi';
import { useState } from 'react';
import AuthStatus from './auth/AuthStatus';
import { useTheme } from '../hooks/useTheme';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const navLinks = [
    { name: 'Home', icon: <FiHome />, path: '/' },
    { name: 'Cursos', icon: <FiBookOpen />, path: '/courses' },
    { name: 'Professores', icon: <FiUser />, path: '/teachers' },
    { name: 'Comunidade', icon: <FiMessageSquare />, path: '/community' },
    { name: 'Preços', icon: <FiBell />, path: '/pricing' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                Macaw English
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>

            {/* Auth Status */}
            <AuthStatus />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            <AuthStatus />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-colors duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
