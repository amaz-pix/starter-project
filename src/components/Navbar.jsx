// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Track scrolling to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Counter', path: '/co' },
  ];
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className={`fixed w-full z-30 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md flex items-center justify-center text-white font-bold">R</div>
              <span className={`ml-2 text-xl font-bold ${isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-gray-900 sm:text-white'}`}>
                ReactApp
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-1 pt-1 text-sm font-medium border-b-2 transition-colors duration-300 ${
                  isActive(link.path)
                    ? `border-indigo-500 ${isScrolled ? 'text-gray-900' : 'text-gray-900 sm:text-white'}`
                    : `border-transparent ${isScrolled ? 'text-gray-500 hover:text-gray-900 hover:border-gray-300' : 'text-gray-300 hover:text-white hover:border-gray-300'}`
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* CTA button */}
            <a
              href="https://github.com/your-repo/react-starter"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                isScrolled 
                  ? 'bg-indigo-600 hover:bg-indigo-700' 
                  : 'bg-indigo-500 bg-opacity-90 hover:bg-opacity-100'
              } transition-colors duration-300`}
            >
              GitHub
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled || isMobileMenuOpen 
                  ? 'text-gray-500 hover:text-gray-700 hover:bg-gray-100' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`sm:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64' : 'max-h-0 overflow-hidden'}`}>
        <div className="pt-2 pb-4 space-y-1 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive(link.path)
                  ? 'border-indigo-500 text-indigo-700 bg-indigo-50'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://github.com/your-repo/react-starter"
            target="_blank"
            rel="noopener noreferrer" 
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;