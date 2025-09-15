"use client";
import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const projects = [
    { name: "Norton Genie", path: "/norton" },
    { name: "Amazon AI Tools", path: "/amazon" },
    { name: "Trippl", path: "/trippl" },
    { name: "More Projects", path: "/#projects" }
  ];
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-4 backdrop-blur-md bg-white bg-opacity-10 border-b border-white border-opacity-10 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-white no-underline">
          Arturo Cano
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Desktop navigation - All in one row */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Projects Dropdown */}
          <div className="relative flex items-center" ref={dropdownRef}>
            <button 
              className="text-white hover:text-gray-300 transition-colors flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              Projects
              <svg 
                className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div 
                className="absolute left-0 mt-4 w-48 rounded-lg shadow-xl bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="py-2">
                  {projects.map((project, index) => (
                    <a
                      key={index}
                      href={project.path}
                      className="block px-4 py-3 text-sm text-white hover:bg-white hover:bg-opacity-20 transition-all duration-200 rounded-md mx-2"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {project.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <a href="/cv" className="text-white hover:text-gray-300 transition-colors">
            CV
          </a>
          
          <Button href="/contact" variant="primary" className="text-sm px-4 py-2">
            Contact
          </Button>
        </nav>
        
        {/* Mobile navigation menu */}
        {isDropdownOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-20 backdrop-blur-lg border-b border-white border-opacity-30 shadow-xl">
            <div className="px-4 py-4 space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-white mb-2">Projects</p>
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.path}
                    className="block py-2 text-white hover:text-gray-300 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {project.name}
                  </a>
                ))}
              </div>
              <div className="border-t border-white border-opacity-20 pt-4 space-y-2">
                <a 
                  href="/cv" 
                  className="block py-2 text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  CV
                </a>
                <Button 
                  href="/contact" 
                  variant="primary" 
                  className="w-full"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}