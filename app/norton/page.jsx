"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import TypewriterEffect from '../../components/TypewriterEffect';

export default function NortonCaseStudy() {
  const [showContent, setShowContent] = useState(false);

  const handleTitleComplete = () => {
    setShowContent(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-safe">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            <TypewriterEffect 
              text='"make my product feel smart and magical"'
              speed={80}
              delay={500}
              onComplete={handleTitleComplete}
              className="block"
            />
          </h1>
          {showContent && (
            <>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 opacity-100 translate-y-0">
                <p className="text-fluid-lg text-white">what I did for</p>
                <Image 
                  src="/images/norton/NortonGenie_logo.png"
                  alt="Norton Genie Logo"
                  width={120}
                  height={40}
                  className="h-12 w-auto"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 max-w-full mx-auto justify-center transition-all duration-1000 opacity-100 translate-y-0 space-fluid-md">
                <div className="glass p-6 sm:p-8 rounded-xl border border-white border-opacity-10 flex-1">
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-amber-500 bg-opacity-20 rounded-full mr-4">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <h3 className="text-fluid-lg font-semibold">Research & Strategy</h3>
                  </div>
                  <p className="text-fluid-sm text-white leading-relaxed">Studied how AI-led intelligence can augment human decision-making in scam detection.</p>
                </div>
                <div className="glass p-8 rounded-xl border border-white border-opacity-10 flex-1">
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-amber-500 bg-opacity-20 rounded-full mr-4">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                      </svg>
                    </div>
                    <h3 className="text-fluid-lg font-semibold">Design the orb</h3>
                  </div>
                  <p className="text-fluid-sm text-white leading-relaxed">Made Genie's UI dynamic with fine orb animation that responds with intelligence.</p>
                </div>
                <div className="glass p-8 rounded-xl border border-white border-opacity-10 flex-1">
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-amber-500 bg-opacity-20 rounded-full mr-4">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                      </svg>
                    </div>
                    <h3 className="text-fluid-lg font-semibold">Polish the cards</h3>
                  </div>
                  <p className="text-fluid-sm text-white leading-relaxed">Built anticipation, then a clear result that feels smart and magical.</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      
      {/* Main Content */}
      {showContent && (
        <section className="py-safe transition-all duration-1000 opacity-100 translate-y-0">
          <div className="max-w-4xl mx-auto px-safe">
          <div className="aspect-responsive rounded-lg mb-6 relative overflow-hidden">
            <Image 
              src="/images/norton/orb_ball_text.svg"
              alt="Norton Genie Orb"
              width={1200}
              height={675}
              className="object-contain w-full"
              priority
            />
          </div>
          
          <h2 className="text-fluid-2xl sm:text-fluid-3xl font-bold mb-6">Your personal AI-powered scam detector</h2>
          
          <div className="mb-12">
            <p className="text-fluid-base mb-6 text-white break-words">
              Led interaction design and UI elements for Norton Genie's scam-detection experience. I designed the signature 'orb' animation and results banner so the product feels smart, magical and trustworthy.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 space-fluid-sm">
              <div className="metric-pill">
                <div className="metric-icon">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <div>
                                <div className="metric-number">1.2M+</div>
              <div className="metric-label">Active Users</div>
                </div>
              </div>
              
              <div className="metric-pill">
                <div className="metric-icon">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <div>
                                <div className="metric-number">5</div>
              <div className="metric-label">Design Awards</div>
                </div>
              </div>
              
              <div className="metric-pill">
                <div className="metric-icon">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                                <div className="metric-number">99.2%</div>
              <div className="metric-label">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Section */}
          <section className="mb-16">
            <div className="aspect-responsive rounded-lg overflow-hidden">
              <video 
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
                poster="/images/norton/orb_ball_text.svg"
              >
                <source 
                  src="/images/norton/Introducing Norton Genie â__ Real-Time AI-powered Scam Detection at Your Fingertips.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 space-fluid-lg">
            <div className="text-center">
              <div className="h-[400px] sm:h-[500px] rounded-t-2xl rounded-b-none mb-4 relative overflow-hidden max-w-sm sm:max-w-md mx-auto">
                <Image 
                  src="/images/norton/landing_page.png"
                  alt="Landing page screen"
                  width={500}
                  height={889}
                  className="w-full h-full object-contain rounded-t-[20px] rounded-b-none"
                  quality={100}
                  priority
                  unoptimized
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <p className="text-xs text-white opacity-80 text-center">
                Landing page screen
              </p>
            </div>
            <div className="text-center">
              <div className="h-[500px] sm:h-[600px] rounded-2xl mb-4 relative overflow-hidden max-w-sm sm:max-w-lg mx-auto">
                <Image 
                  src="/images/norton/analysing_text.png"
                  alt="Analyzing content screen"
                  width={500}
                  height={889}
                  className="w-full h-full object-contain rounded-[20px]"
                  quality={100}
                  priority
                  unoptimized
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <p className="text-xs text-white opacity-80 text-center">
                Analyzing content screen
              </p>
            </div>
          </div>
          
          {/* Assess Scam Page - No Background */}
          <div className="mb-20 text-center">
            <Image 
              src="/images/norton/assess_scam_page.png"
              alt="Scam Detection Screen"
              width={800}
              height={450}
              className="mx-auto"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          
          {/* Deal With Scam Page - No Background */}
          <div className="mb-20 text-center">
            <Image 
              src="/images/norton/deal_with_scam.png"
              alt="Deal With Scam Screen"
              width={800}
              height={450}
              className="mx-auto"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
        </section>
      )}
      
      {/* Partner Logos */}
      <section className="py-safe">
        <div className="max-w-4xl mx-auto px-safe">
          <h3 className="text-fluid-xl font-bold mb-6 text-white">Partners & Collaborators</h3>
          <div className="flex flex-wrap items-center gap-8 mb-12">
            <div className="h-12">
              <Image src="/logos/norton.png" alt="Norton" width={120} height={48} className="h-full w-auto" style={{ width: 'auto', height: 'auto' }} />
            </div>
            <div className="h-12">
              <Image src="/logos/else.png" alt="Else" width={120} height={48} className="h-full w-auto" style={{ width: 'auto', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="py-safe border-t border-gray-700 glass">
        <div className="max-w-4xl mx-auto px-safe text-center">
          <div className="flex justify-center gap-6 mb-6">
            {/* Instagram */}
            <a href="https://www.instagram.com/arturocan0/" target="_blank" rel="noopener noreferrer" 
              className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 touch-target" 
              aria-label="Instagram">
              <img 
                src="/links_icons/icons8-instagram-48.png"
                alt="Instagram"
                className="w-10 h-10 object-contain"
                style={{ width: 'auto', height: 'auto' }}
              />
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/arturo-cano-designs/" target="_blank" rel="noopener noreferrer" 
              className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 touch-target" 
              aria-label="LinkedIn">
              <img 
                src="/links_icons/icons8-linkedin-50.png"
                alt="LinkedIn"
                className="w-10 h-10 object-contain"
                style={{ width: 'auto', height: 'auto' }}
              />
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/arturocano02" target="_blank" rel="noopener noreferrer" 
              className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 touch-target" 
              aria-label="GitHub">
              <img 
                src="/links_icons/icons8-github-50.png"
                alt="GitHub"
                className="w-10 h-10 object-contain"
                style={{ width: 'auto', height: 'auto' }}
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
      </section>
    </div>
  );
}