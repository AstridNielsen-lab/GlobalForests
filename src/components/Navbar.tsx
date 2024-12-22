import React from 'react';
import { TreePine, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <TreePine className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">GlobalForests</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-green-600">About</a>
            <a href="#impact" className="text-gray-700 hover:text-green-600">Impact</a>
            <a href="#process" className="text-gray-700 hover:text-green-600">Process</a>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
              Donate Now
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
}