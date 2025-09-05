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
    { name: "All Projects", path: "/#projects" }
  ];
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-6 px-6 backdrop-blur-md bg-white bg-opacity-10 border-b border-white border-opacity-10 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white no-underline">
          Arturo Cano
        </a>
        
        <nav className="flex items-center space-x-6">
          <div className="relative" ref={dropdownRef}>
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
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="py-1">
                  {projects.map((project, index) => (
                    <a
                      key={index}
                      href={project.path}
                      className="block px-4 py-2 text-sm text-white hover:bg-white hover:bg-opacity-20 transition-colors"
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
          <Button href="/contact" variant="primary">
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
}