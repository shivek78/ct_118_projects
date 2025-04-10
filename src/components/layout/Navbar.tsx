
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-army-DEFAULT" />
            <span className="text-xl font-display font-bold text-army-DEFAULT">ValorFund</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-army-DEFAULT font-medium">Home</Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-army-DEFAULT font-medium">
                <span>Campaigns</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                <Link to="/campaigns" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Campaigns</Link>
                <Link to="/campaigns/featured" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Featured</Link>
                <Link to="/campaigns/urgent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Urgent Needs</Link>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-army-DEFAULT font-medium">About Us</Link>
            <Link to="/news" className="text-gray-700 hover:text-army-DEFAULT font-medium">News</Link>
            <Link to="/contact" className="text-gray-700 hover:text-army-DEFAULT font-medium">Contact</Link>
            <Link to="/donate">
              <Button className="bg-army-gold hover:bg-yellow-600 text-black">Donate Now</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-army-DEFAULT text-army-DEFAULT hover:bg-army-DEFAULT hover:text-white">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-army-DEFAULT font-medium py-2">Home</Link>
              <Link to="/campaigns" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-army-DEFAULT font-medium py-2">Campaigns</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-army-DEFAULT font-medium py-2">About Us</Link>
              <Link to="/news" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-army-DEFAULT font-medium py-2">News</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-army-DEFAULT font-medium py-2">Contact</Link>
              <div className="flex space-x-2 pt-2">
                <Link to="/donate" onClick={() => setIsOpen(false)} className="w-1/2">
                  <Button className="bg-army-gold hover:bg-yellow-600 text-black w-full">Donate Now</Button>
                </Link>
                <Link to="/login" onClick={() => setIsOpen(false)} className="w-1/2">
                  <Button variant="outline" className="border-army-DEFAULT text-army-DEFAULT hover:bg-army-DEFAULT hover:text-white w-full">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
