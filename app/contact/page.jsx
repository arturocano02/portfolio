"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setShowSuccessAnimation(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Hide success animation after 3 seconds
        setTimeout(() => {
          setShowSuccessAnimation(false);
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        
        {/* Success Animation */}
        {showSuccessAnimation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center animate-bounce">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600">I'll get back to you ASAP. Thanks for reaching out!</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Message sent successfully! I'll get back to you ASAP.
              </div>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Failed to send message. Please try again.
              </div>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 text-lg text-white bg-black bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your name"
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 text-lg text-white bg-black bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-white mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 text-lg text-white bg-black bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              placeholder="How can we work together?"
              disabled={isSubmitting}
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 text-lg font-medium rounded-lg transition-all duration-200 flex items-center justify-center ${
              isSubmitting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-orange-500 hover:bg-orange-600 transform hover:scale-105 shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
                Send Message
              </>
            )}
          </button>
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