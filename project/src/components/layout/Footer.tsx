import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-xl font-bold">LocalHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your one-stop platform for finding and booking local services and marriage halls in your area.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/halls" className="text-gray-400 hover:text-white transition-colors">
                  Marriage Halls
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Service Directory
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/bakeries" className="text-gray-400 hover:text-white transition-colors">
                  Bakeries
                </Link>
              </li>
              <li>
                <Link to="/services/towing" className="text-gray-400 hover:text-white transition-colors">
                  Vehicle Towing
                </Link>
              </li>
              <li>
                <Link to="/services/hospitals" className="text-gray-400 hover:text-white transition-colors">
                  Hospitals
                </Link>
              </li>
              <li>
                <Link to="/services/caterers" className="text-gray-400 hover:text-white transition-colors">
                  Caterers
                </Link>
              </li>
              <li>
                <Link to="/services/planners" className="text-gray-400 hover:text-white transition-colors">
                  Event Planners
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-gray-400">
                  123 Main Street, City, State, 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="ml-3 text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="ml-3 text-gray-400">info@localhub.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="ml-3 text-gray-400">Mon-Fri: 9AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} LocalHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;