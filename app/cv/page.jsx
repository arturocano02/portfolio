"use client";

import React from 'react';
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
            <h1 className="text-3xl font-bold mb-6">CV</h1>
            <p className="text-lg mb-8">Download my résumé or email me for a tailored version.</p>
            <div className="flex flex-col gap-4">
              <Link href="/CV/CV_Arturo_2025.pdf" download="CV_Arturo_Cano.pdf">
                <Button variant="primary" className="w-full">Download PDF</Button>
              </Link>
              <Button href="mailto:arturocanodesigns@gmail.com" variant="outline" className="w-full">Email me</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}