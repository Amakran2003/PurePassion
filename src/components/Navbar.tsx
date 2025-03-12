import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'À propos', href: '/about' },
    { name: 'Galerie', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-sand/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="font-display text-2xl font-bold text-primary">
              Pure Passion
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={clsx(
                  "font-medium transition-colors hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary font-bold"
                    : isHomePage && !isScrolled 
                      ? "text-white font-semibold" 
                      : "text-text font-semibold"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-all shadow-warm"
            >
              Réserver
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-secondary-light transition-colors"
            >
              {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg shadow-lg my-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={clsx(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-secondary-light",
                    location.pathname === item.href
                      ? "text-primary font-bold"
                      : "text-text"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-3 py-2 mt-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary-light transition-all"
                onClick={() => setIsOpen(false)}
              >
                Réserver
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;