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
            <a href="mailto:you@example.com" className="text-accent hover:underline text-xl">
              you@example.com
            </a>
          </p>
          
          <div className="flex space-x-6 mt-8">
            <a href="#" className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="LinkedIn">
              <span className="sr-only">LinkedIn</span>
              {/* LinkedIn icon placeholder */}
              <div className="w-7 h-7 bg-gray-600 rounded-sm"></div>
            </a>
            <a href="#" className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="Instagram">
              <span className="sr-only">Instagram</span>
              {/* Instagram icon placeholder */}
              <div className="w-7 h-7 bg-gray-600 rounded"></div>
            </a>
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
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}