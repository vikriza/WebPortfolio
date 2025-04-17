import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palette, Video, Home } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">Portfolio</Link>
          <div className="flex space-x-8">
            <Link to="/" className={`flex items-center space-x-1 ${isActive('/')}`}>
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/graphic" className={`flex items-center space-x-1 ${isActive('/graphic')}`}>
              <Palette size={20} />
              <span>Graphic</span>
            </Link>
            <Link to="/video" className={`flex items-center space-x-1 ${isActive('/video')}`}>
              <Video size={20} />
              <span>Video</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;