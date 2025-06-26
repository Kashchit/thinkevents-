
import React, { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-lg">
              <span className="font-bold text-xl">TE</span>
            </div>
            <span className="font-bold text-xl text-gray-800">Think Event</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Events</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Categories</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Venues</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Organizers</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <Search className="absolute left-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search events, artists, venues..."
              className="pl-10 w-64"
            />
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex space-x-2">
                <Button variant="ghost" size="sm">Login</Button>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-2 space-y-1">
              <div className="py-2">
                <Input 
                  placeholder="Search events..."
                  className="w-full"
                />
              </div>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Events</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Categories</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Venues</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Organizers</a>
              <div className="flex space-x-2 pt-2">
                <Button variant="ghost" size="sm" className="flex-1">Login</Button>
                <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
