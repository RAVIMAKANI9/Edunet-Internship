import React, { useState } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { Plane, User, Menu, X } from 'lucide-react';
import { Link } from './Link';
import { Button } from './ui/Button';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <RouterLink 
            to="/" 
            className="flex items-center group transition-transform duration-300 hover:scale-105"
          >
            <Plane className="h-8 w-8 text-yellow-500 transition-transform duration-300 group-hover:rotate-12" />
            <span className="ml-2 text-xl font-bold text-gray-800">TravelEase</span>
          </RouterLink>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="nav-link"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('tours')}
              className="nav-link"
            >
              Tours
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="nav-link"
            >
              Book Now
            </button>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => navigate('/signup')}
                className="transform hover:rotate-1"
              >
                Sign Up
              </Button>
              <Button
                variant="secondary"
                icon={User}
                onClick={() => navigate('/login')}
                className="transform hover:-rotate-1"
              >
                Login
              </Button>
            </div>
          </div>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 space-y-4 animate-fade-in">
            <button 
              onClick={() => {
                scrollToSection('home');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-yellow-500 hover:bg-yellow-50 rounded-lg"
            >
              Home
            </button>
            <button 
              onClick={() => {
                scrollToSection('tours');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-yellow-500 hover:bg-yellow-50 rounded-lg"
            >
              Tours
            </button>
            <button 
              onClick={() => {
                scrollToSection('about');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-yellow-500 hover:bg-yellow-50 rounded-lg"
            >
              About
            </button>
            <button 
              onClick={() => {
                scrollToSection('booking');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-yellow-500 hover:bg-yellow-50 rounded-lg"
            >
              Book Now
            </button>
            <div className="space-y-2 pt-2 border-t">
              <Button 
                onClick={() => navigate('/signup')}
                fullWidth
              >
                Sign Up
              </Button>
              <Button
                variant="secondary"
                icon={User}
                onClick={() => navigate('/login')}
                fullWidth
              >
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};