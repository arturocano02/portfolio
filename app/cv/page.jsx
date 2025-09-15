"use client";

import React from 'react';
import Image from 'next/image';
import Button from '../../components/Button';
import Link from 'next/link';

export default function CVPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col md:flex-row">
        {/* Left side - CV viewer */}
        <div className="w-full md:w-3/4 h-[80vh] md:h-screen bg-gray-900">
          <iframe 
            src="/CV/CV_Arturo_2025.pdf" 
            className="w-full h-full border-0"
            title="Arturo Cano CV"
          />
        </div>
        
        {/* Right side - Download options */}
        <div className="w-full md:w-1/4 flex items-center justify-center p-8">
          <div className="glass max-w-sm mx-auto text-center p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">CV</h1>
            <p className="text-lg text-white mb-8">Download my résumé or email me for a tailored version.</p>
            <div className="flex flex-col gap-4">
              <Link href="/CV/CV_Arturo_2025.pdf" download="CV_Arturo_Cano.pdf">
                <Button variant="primary" className="w-full">Download PDF</Button>
              </Link>
              <Button href="mailto:arturocanodesigns@gmail.com" variant="outline" className="w-full">Email me</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer CTA */}
      <section className="py-4 border-t border-gray-700 glass">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            {/* Instagram */}
            <a href="https://www.instagram.com/arturocan0/" target="_blank" rel="noopener noreferrer" 
              className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-gray-500/30" 
              aria-label="Instagram">
              <img 
                src="/links_icons/icons8-instagram-48.png"
                alt="Instagram"
                className="w-6 h-6 object-contain"
                style={{ width: 'auto', height: 'auto' }}
              />
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/arturo-cano-designs/" target="_blank" rel="noopener noreferrer" 
              className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-gray-500/30" 
              aria-label="LinkedIn">
              <img 
                src="/links_icons/icons8-linkedin-50.png"
                alt="LinkedIn"
                className="w-6 h-6 object-contain"
                style={{ width: 'auto', height: 'auto' }}
              />
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/arturocano02" target="_blank" rel="noopener noreferrer" 
              className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-gray-500/30" 
              aria-label="GitHub">
              <img 
                src="/links_icons/icons8-github-50.png"
                alt="GitHub"
                className="w-6 h-6 object-contain"
                style={{ width: 'auto', height: 'auto' }}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}