import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gsme-blue-dark shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="GSME Logo"
              className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover ring-2 ring-white/30 group-hover:ring-gsme-gold transition-all duration-300"
            />
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg md:text-xl leading-tight block">
                GSME
              </span>
              <span className="text-blue-200 text-xs md:text-sm leading-tight block">
                Global Smart Move Enterprises
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white border-b-2 border-gsme-gold pb-1'
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-white text-gsme-blue hover:bg-gsme-gold hover:text-white font-semibold text-sm py-2 px-5 rounded-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-blue-700 pt-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium py-2 ${
                    isActive(link.path) ? 'text-white' : 'text-blue-200 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-white text-gsme-blue font-semibold py-2 px-5 rounded-lg text-center mt-2"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
