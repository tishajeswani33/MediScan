import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, Search, Scan, BookmarkCheck, Menu, X, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary-500' : 'text-gray-600 hover:text-primary-500';
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Stethoscope className="h-7 w-7 text-primary-500" />
              <span className="text-xl font-bold text-primary-500">MediScan</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/scan" className={`flex items-center space-x-1 ${isActive('/scan')}`}>
              <Scan className="h-5 w-5" />
              <span>Scan</span>
            </Link>
            <Link to="/search" className={`flex items-center space-x-1 ${isActive('/search')}`}>
              <Search className="h-5 w-5" />
              <span>Search</span>
            </Link>
            <Link to="/consultation" className={`flex items-center space-x-1 ${isActive('/consultation')}`}>
              <Heart className="h-5 w-5" />
              <span>Consultation</span>
            </Link>
            <Link to="/bookmarks" className={`flex items-center space-x-1 ${isActive('/bookmarks')}`}>
              <BookmarkCheck className="h-5 w-5" />
              <span>Bookmarks</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-3 pt-2 animate-fade-in">
          <div className="px-2 space-y-1">
            <Link 
              to="/scan" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/scan')}`}
              onClick={closeMenu}
            >
              <div className="flex items-center space-x-2">
                <Scan className="h-5 w-5" />
                <span>Scan Medicine</span>
              </div>
            </Link>
            <Link 
              to="/search"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/search')}`}
              onClick={closeMenu}
            >
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Search Database</span>
              </div>
            </Link>
            <Link 
              to="/consultation"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/consultation')}`}
              onClick={closeMenu}
            >
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Get Consultation</span>
              </div>
            </Link>
            <Link 
              to="/bookmarks"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/bookmarks')}`}
              onClick={closeMenu}
            >
              <div className="flex items-center space-x-2">
                <BookmarkCheck className="h-5 w-5" />
                <span>My Bookmarks</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;