
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-army-DEFAULT text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-army-gold" />
              <span className="text-xl font-display font-bold text-white">ValorFund</span>
            </Link>
            <p className="text-gray-300 text-sm">Supporting our heroes who protect our freedom. Your donations make a difference in the lives of soldiers and their families.</p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-army-gold text-gray-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-army-gold text-gray-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-army-gold text-gray-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-army-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-army-gold transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-army-gold transition">About Us</Link></li>
              <li><Link to="/campaigns" className="hover:text-army-gold transition">Campaigns</Link></li>
              <li><Link to="/news" className="hover:text-army-gold transition">News</Link></li>
              <li><Link to="/donate" className="hover:text-army-gold transition">Donate</Link></li>
              <li><Link to="/contact" className="hover:text-army-gold transition">Contact</Link></li>
            </ul>
          </div>

          {/* Campaigns */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-army-gold">Featured Campaigns</h3>
            <ul className="space-y-2">
              <li><Link to="/campaigns/medical-support" className="hover:text-army-gold transition">Medical Support</Link></li>
              <li><Link to="/campaigns/family-assistance" className="hover:text-army-gold transition">Family Assistance</Link></li>
              <li><Link to="/campaigns/education" className="hover:text-army-gold transition">Education Fund</Link></li>
              <li><Link to="/campaigns/equipment" className="hover:text-army-gold transition">Equipment & Gear</Link></li>
              <li><Link to="/campaigns/rehabilitation" className="hover:text-army-gold transition">Rehabilitation Program</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-army-gold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-army-gold mt-1" />
                <span>123 Military Lane, Arlington, VA 22201</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-army-gold" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-army-gold" />
                <span>support@valorfund.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="text-center text-gray-300 text-sm">
            <p>&copy; {new Date().getFullYear()} ValorFund. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <Link to="/privacy-policy" className="hover:text-army-gold">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-army-gold">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
