"use client";

import React from 'react';
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
            <a href="mailto:arturocanodesigns@gmail.com" className="text-accent hover:underline text-xl flex items-center gap-2">
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
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <span className="text-sm text-blue-400">LinkedIn</span>
            </div>
            
            {/* GitHub */}
            <div className="flex flex-col items-center">
              <a href="https://github.com/arturocano02" target="_blank" rel="noopener noreferrer" 
                className="w-16 h-16 rounded-xl glass flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-gray-500/30 mb-2" 
                aria-label="GitHub">
                <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <span className="text-sm text-gray-300">GitHub</span>
            </div>
            
            {/* Instagram */}
            <div className="flex flex-col items-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-16 h-16 rounded-xl glass flex items-center justify-center hover:bg-pink-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-pink-500/30 mb-2" 
                aria-label="Instagram">
                <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
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