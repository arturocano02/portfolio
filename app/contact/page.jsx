"use client";

import React from 'react';
import Image from 'next/image';
import Button from '../../components/Button';

export default function ContactPage() {
  return (
    <div className="section-full flex items-center justify-center py-16">
      <div className="glass max-w-2xl mx-auto py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Let's work together</h1>
        <p className="text-xl mb-6 text-white">I am open to full-time roles and selected freelance collaborations.</p>
        <p className="text-lg mb-8 text-white">
          I work with <strong>AI agent startups</strong> and companies using tech for <strong>social change</strong>. 
          I'm determined, iterate fast, have a bias for action, and work independently. 
          I focus on building seamless AI interactions while solving real problems that matter.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-white">Contact options</h2>
          <p className="mb-6 text-lg">
            <span className="block text-white mb-2">Email:</span>
            <a href="mailto:arturocanodesigns@gmail.com" className="text-black hover:text-gray-700 hover:underline text-xl flex items-center gap-2 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              arturocanodesigns@gmail.com
            </a>
          </p>
          
          <div className="flex justify-center gap-6 mb-6">
            {/* Instagram */}
            <a href="https://www.instagram.com/arturocan0/" target="_blank" rel="noopener noreferrer" 
              className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105" 
              aria-label="Instagram">
              <img 
                src="/links_icons/icons8-instagram-48.png"
                alt="Instagram"
                className="w-10 h-10 object-contain"
              />
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/arturo-cano-designs/" target="_blank" rel="noopener noreferrer" 
              className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105" 
              aria-label="LinkedIn">
              <img 
                src="/links_icons/icons8-linkedin-50.png"
                alt="LinkedIn"
                className="w-10 h-10 object-contain"
              />
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/arturocano02" target="_blank" rel="noopener noreferrer" 
              className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105" 
              aria-label="GitHub">
              <img 
                src="/links_icons/icons8-github-50.png"
                alt="GitHub"
                className="w-10 h-10 object-contain"
              />
            </a>
          </div>
          
          <Button href="/contact" variant="primary" className="btn-primary">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            Get in touch
          </Button>
        </div>
        
        <form className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 text-lg text-white bg-black rounded-lg"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 text-lg text-white bg-black rounded-lg"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 text-lg text-white bg-black rounded-lg"
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
      
      {/* Footer CTA */}
      <section className="py-4 border-t border-gray-700 glass">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            {/* Instagram */}
            <a href="https://www.instagram.com/arturocan0/" target="_blank" rel="noopener noreferrer" 
              className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105" 
              aria-label="Instagram">
              <img 
                src="/links_icons/icons8-instagram-48.png"
                alt="Instagram"
                className="w-10 h-10 object-contain"
              />
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/arturo-cano-designs/" target="_blank" rel="noopener noreferrer" 
              className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105" 
              aria-label="LinkedIn">
              <img 
                src="/links_icons/icons8-linkedin-50.png"
                alt="LinkedIn"
                className="w-10 h-10 object-contain"
              />
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/arturocano02" target="_blank" rel="noopener noreferrer" 
              className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105" 
              aria-label="GitHub">
              <img 
                src="/links_icons/icons8-github-50.png"
                alt="GitHub"
                className="w-10 h-10 object-contain"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}