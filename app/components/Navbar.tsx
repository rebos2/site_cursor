'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#4A3A4A] h-18">
      <div className="container h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-white text-xl font-bold">AI Audit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-gray-300">
              Services
            </Link>
            <Link href="/pricing" className="text-white hover:text-gray-300">
              Pricing
            </Link>
            <div className="relative">
              <button
                className="flex items-center text-white hover:text-gray-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                Resources
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link href="/blog" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Blog
                  </Link>
                  <Link href="/docs" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Documentation
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signup" className="btn-secondary">
              Sign Up
            </Link>
            <Link href="/login" className="btn-primary">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;