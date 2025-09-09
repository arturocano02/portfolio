"use client";

import React from 'react';
import Image from 'next/image';
import Button from '../../components/Button';
import Badge from '../../components/Badge';

export default function NortonCaseStudy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ lineHeight: '1.4', paddingBottom: '0.3em' }}>
            <span className="text-white">"make my product feel</span><br/>
            <span className="text-white">smart and magical"</span>
          </h1>
          <div className="flex items-center gap-4 mb-12">
            <p className="text-xl">what I did for</p>
            <Image 
              src="/images/norton/Genie Logo.png"
              alt="Genie Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-2 mb-12 max-w-full mx-auto px-2">
            <div className="glass p-8 rounded-xl border border-white border-opacity-10 flex-1">
              <div className="flex items-start mb-4">
                <div className="p-3 bg-yellow-400 bg-opacity-20 rounded-full mr-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold whitespace-nowrap">Research & Strategy</h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">Studied how AI-led intelligence can augment human decision-making in scam detection.</p>
            </div>
            <div className="glass p-8 rounded-xl border border-white border-opacity-10 flex-1">
              <div className="flex items-start mb-4">
                <div className="p-3 bg-yellow-400 bg-opacity-20 rounded-full mr-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold whitespace-nowrap">Design the orb</h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">Made Genie's UI dynamic with fine orb animation that responds with intelligence.</p>
            </div>
            <div className="glass p-8 rounded-xl border border-white border-opacity-10 flex-1">
              <div className="flex items-start mb-4">
                <div className="p-3 bg-yellow-400 bg-opacity-20 rounded-full mr-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold whitespace-nowrap">Polish the cards</h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">Built anticipation, then a clear result that feels smart and magical.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="aspect-video rounded-lg mb-6 relative overflow-hidden">
            <Image 
              src="/images/norton/orb_ball_text.svg"
              alt="Norton Genie Orb"
              width={1200}
              height={675}
              className="object-contain w-full"
              priority
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Your personal AI-powered scam detector</h2>
          
          <div className="mb-12">
            <p className="text-lg mb-6">
              Led interaction design and UI elements for Norton Genie's scam-detection experience. I designed the signature 'orb' animation and results banner so the product feels smart, magical and trustworthy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
            <div className="aspect-video rounded-lg overflow-hidden glass">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="text-center">
              <div className="aspect-[9/16] rounded-2xl mb-4 relative glass overflow-hidden max-w-sm mx-auto">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/norton/Phone Frame.png"
                    alt="Phone Frame"
                    width={375}
                    height={812}
                    className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <Image 
                      src="/images/norton/analysing_text.png"
                      alt="Analyzing content screen"
                      width={340}
                      height={740}
                      className="object-contain max-h-[95%] rounded-[22px]"
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Analyzing content screen
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-[9/16] rounded-2xl mb-4 relative glass overflow-hidden max-w-sm mx-auto">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/norton/Phone Frame.png"
                    alt="Phone Frame"
                    width={375}
                    height={812}
                    className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <Image 
                      src="/images/norton/analysing_text.png"
                      alt="Analyzing content screen"
                      width={340}
                      height={740}
                      className="object-contain max-h-[95%] rounded-[22px]"
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
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
            />
          </div>
        </div>
      </section>
      
      
      {/* Partner Logos */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-6">Partners & Collaborators</h3>
          <div className="flex flex-wrap items-center gap-8 mb-12">
            <div className="h-12">
              <Image src="/logos/norton.png" alt="Norton" width={120} height={48} className="h-full w-auto" />
            </div>
            <div className="h-12">
              <Image src="/logos/else.png" alt="Else" width={120} height={48} className="h-full w-auto" />
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-indigo-600 font-bold text-xl">IMPERIAL</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="py-16 border-t border-gray-700 glass">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Let's work together</h2>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {/* Instagram */}
            <a href="https://instagram.com/arturocano02" target="_blank" rel="noopener noreferrer" 
              className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-gray-500/30" 
              aria-label="Instagram">
              <img 
                src="/links_icons/icons8-instagram-48.png"
                alt="Instagram"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  console.log('Instagram icon failed to load');
                  e.target.style.display = 'none';
                }}
                onLoad={() => console.log('Instagram icon loaded successfully')}
              />
            </a>
            
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/arturo-cano" target="_blank" rel="noopener noreferrer" 
              className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-gray-500/30" 
              aria-label="LinkedIn">
              <img 
                src="/links_icons/icons8-linkedin-50.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  console.log('LinkedIn icon failed to load');
                  e.target.style.display = 'none';
                }}
                onLoad={() => console.log('LinkedIn icon loaded successfully')}
              />
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/arturocano02" target="_blank" rel="noopener noreferrer" 
              className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-gray-500/30" 
              aria-label="GitHub">
              <img 
                src="/links_icons/icons8-github-50.png"
                alt="GitHub"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  console.log('GitHub icon failed to load');
                  e.target.style.display = 'none';
                }}
                onLoad={() => console.log('GitHub icon loaded successfully')}
              />
            </a>
            
          </div>
          
          <Button href="/contact" variant="primary" className="btn-norton">
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