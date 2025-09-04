"use client";
import React from 'react';
import Button from './Button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white no-underline">
          Arturo Cano
        </a>
        
        <nav className="flex items-center space-x-6">
          <a href="/#projects" className="text-white hover:text-gray-300 transition-colors">
            Projects
          </a>
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
