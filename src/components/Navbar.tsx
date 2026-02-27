import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed z-50 top-0 right-0 left-0 bg-gray-950/60 border-white/5 border-b backdrop-blur-xl">
      <nav className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between" aria-label="Main Navigation">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex items-center space-x-1 mr-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-duration:1s]"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-duration:1s] [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-duration:1s] [animation-delay:0.4s]"></div>
          </div>
          <span className="font-bold text-white group-hover:text-blue-400 transition-colors">Pushly</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link to="/#probleem" className="hover:text-white transition-colors">Probleem</Link>
          <Link to="/#systeem" className="hover:text-white transition-colors">Systeem</Link>
          <Link to="/#garantie" className="hover:text-white transition-colors">Garantie</Link>
          <Link to="/solutions" className="hover:text-white transition-colors">Oplossingen</Link>
        </div>

        {/* Desktop CTA */}
        <Link
          to="/get-started"
          className="hidden md:inline-flex hover:bg-blue-500 transition-all gap-2 items-center btn-glow text-sm font-medium text-white bg-blue-600 rounded-lg pt-2 pr-5 pb-2 pl-5"
        >
          Plan Een Scan
          <Icon icon="solar:arrow-right-linear" width="16" height="16" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          <Icon icon={isOpen ? "solar:close-linear" : "solar:hamburger-menu-linear"} width="24" height="24" />
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col bg-gray-950/95 backdrop-blur-xl border-b border-white/5 md:hidden px-6 py-6 space-y-6 absolute top-16 left-0 right-0 shadow-2xl"
          >
            <Link to="/#probleem" className="text-gray-300 hover:text-white transition-colors block text-lg font-medium">Probleem</Link>
            <Link to="/#systeem" className="text-gray-300 hover:text-white transition-colors block text-lg font-medium">Systeem</Link>
            <Link to="/#garantie" className="text-gray-300 hover:text-white transition-colors block text-lg font-medium">Garantie</Link>
            <Link to="/solutions" className="text-gray-300 hover:text-white transition-colors block text-lg font-medium">Oplossingen</Link>

            <div className="pt-4 border-t border-gray-800">
              <Link
                to="/get-started"
                className="w-full hover:bg-blue-500 transition-all font-medium text-white bg-blue-600 rounded-lg py-3 px-5 text-base flex justify-center gap-2 items-center btn-glow"
              >
                Plan Een Scan
                <Icon icon="solar:arrow-right-linear" width="18" height="18" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
