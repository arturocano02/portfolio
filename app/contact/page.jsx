"use client";

import React from 'react';
import Image from 'next/image';
import Button from '../../components/Button';

export default function ContactPage() {
  return (
    <div className="section-full flex items-center justify-center py-16">
      <div className="glass max-w-2xl mx-auto py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Let's work together</h1>
        <p className="text-xl mb-12">I am open to full-time roles and selected freelance collaborations.</p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Contact options</h2>
          <p className="mb-6 text-lg">
            <span className="block text-gray-400 mb-2">Email:</span>
            <a href="mailto:arturocanodesigns@gmail.com" className="text-orange-400 hover:text-orange-300 hover:underline text-xl flex items-center gap-2 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              arturocanodesigns@gmail.com
            </a>
          </p>
          
          <div className="flex flex-wrap gap-6 mt-8">
            {/* LinkedIn */}
            <div className="flex flex-col items-center">
              <a href="https://www.linkedin.com/in/arturo-cano-designs/" target="_blank" rel="noopener noreferrer" 
                className="w-16 h-16 rounded-xl glass flex items-center justify-center hover:bg-blue-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-blue-500/30 mb-2" 
                aria-label="LinkedIn">
                <Image 
                  src="/links_icons/icons8-linkedin.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="w-8 h-8 text-blue-500"
                />
              </a>
              <span className="text-sm text-blue-400">LinkedIn</span>
            </div>
            
            {/* GitHub */}
            <div className="flex flex-col items-center">
              <a href="https://github.com/arturocano02" target="_blank" rel="noopener noreferrer" 
                className="w-16 h-16 rounded-xl glass flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-gray-500/30 mb-2" 
                aria-label="GitHub">
                <Image 
                  src="/links_icons/icons8-github.svg"
                  alt="GitHub"
                  width={32}
                  height={32}
                  className="w-8 h-8 text-gray-300"
                />
              </a>
              <span className="text-sm text-gray-300">GitHub</span>
            </div>
            
            {/* Instagram */}
            <div className="flex flex-col items-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-16 h-16 rounded-xl glass flex items-center justify-center hover:bg-pink-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-pink-500/30 mb-2" 
                aria-label="Instagram">
                <Image 
                  src="/links_icons/icons8-instagram.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-8 h-8 text-pink-500"
                />
              </a>
              <span className="text-sm text-pink-400">Instagram</span>
            </div>
          </div>
        </div>
        
        <form className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 text-lg"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 text-lg"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 text-lg"
              placeholder="How can we work together?"
            ></textarea>
          </div>
          
          <Button variant="primary" className="w-full py-3 text-lg">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}