"use client";

import React from 'react';
import Image from 'next/image';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import { useRef, useEffect } from 'react';

export default function AmazonCaseStudy() {
  const businessReviewsRef = useRef(null);
  const slackBotRef = useRef(null);
  const leadershipBriefingRef = useRef(null);
  const newsletterRef = useRef(null);
  const stakeholderMapRef = useRef(null);
  const scrollerRef = useRef(null);
  
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const elementTop = ref.current.offsetTop;
      const offsetPosition = elementTop - 100; // 100px offset to account for header
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // No longer need the scrolling effect since we're using floating icons instead
  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ lineHeight: '1.4', paddingBottom: '0.3em' }}>
            using AI to automate the boring tasks
          </h1>
          <p className="text-xl mb-8">During my time at Amazon I built AI tools and systems to automate boring and repetitive manual tasks, saving time and increasing team efficiency.</p>
        </div>
        
        {/* Full width scrolling cards section */}
        <div className="w-screen overflow-hidden mb-12 -mx-4">
          <div className="flex gap-6 animate-scroll-left">
            {/* Duplicate the tools for infinite scroll effect */}
            {[...Array(3)].map((_, repeat) => 
              [
                { name: 'Business Reviews', icon: 'business analytics on tablet screen.png', ref: businessReviewsRef },
                { name: 'Slack Bot', icon: 'artificial intelligence on tablet screen.png', ref: slackBotRef },
                { name: 'Leadership Briefing', icon: 'Business tools for risk assessment and management.png', ref: leadershipBriefingRef },
                { name: 'Newsletter', icon: 'email marketing and newsletter with new message.png', ref: newsletterRef },
                { name: 'Stakeholder Map', icon: 'Project management, team work and idea generation.png', ref: stakeholderMapRef }
              ].map((item, idx) => (
                <div 
                  key={`${repeat}-${idx}`} 
                  onClick={() => scrollToSection(item.ref)}
                  className="cursor-pointer group flex-shrink-0"
                >
                  <div className="w-48 h-40 rounded-xl glass flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg border border-white border-opacity-20 p-6">
                    <Image 
                      src={`/icons/${item.icon}`}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain mb-4"
                    />
                    <span className="text-white text-sm font-medium text-center">{item.name}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-8">
          {/* Automated Business Reviews */}
          <div ref={businessReviewsRef} className="glass p-6 rounded-lg border border-white border-opacity-10 w-full">
            <h3 className="text-lg font-bold mb-4">Automated Business Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-bold mb-2">Problem</h4>
                <p className="text-sm">Team members spent hours manually summarizing Business Reviews (BRs), leading to delays and inconsistent reporting across teams.</p>
              </div>
            <div>
                <h4 className="text-sm font-bold mb-2">Insight</h4>
                <p className="text-sm">AI-powered systems could process large amounts of data more accurately and consistently than manual review processes.</p>
            </div>
            <div>
                <h4 className="text-sm font-bold mb-2">Solution</h4>
                <p className="text-sm">Created intelligent agents with automated data extraction and visualization for faster insights and decision making.</p>
              </div>
            </div>
            
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Key Results</h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="metric-pill h-20 flex items-center">
                <div className="metric-icon">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <div className="metric-number">12+</div>
                  <div className="metric-label">Hours Saved</div>
                </div>
              </div>
              <div className="metric-pill h-20 flex items-center">
                <div className="metric-icon">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <div className="metric-number">68%</div>
                  <div className="metric-label">Error Reduction</div>
                </div>
              </div>
              <div className="metric-pill h-20 flex items-center">
                <div className="metric-icon">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
            </div>
            <div>
                  <div className="metric-number">3x</div>
                  <div className="metric-label">Faster Insights</div>
                </div>
              </div>
            </div>
          </div>

          {/* Slack Bot Automation */}
          <div ref={slackBotRef} className="glass p-6 rounded-lg border border-white border-opacity-10 w-full">
            <h3 className="text-lg font-bold mb-4">Slack Bot Automation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-bold mb-2">Problem</h4>
                <p className="text-sm">Teams were overwhelmed with repetitive queries and manual information routing, causing delays and inconsistent responses.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2">Insight</h4>
                <p className="text-sm">Automated systems could handle common queries and route information more efficiently than manual processes.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2">Solution</h4>
                <p className="text-sm">Built a system that automatically responds to common queries, routes information to the right people, and simplifies team workflows.</p>
              </div>
            </div>
            
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Key Results</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="metric-pill h-20 flex items-center">
                <div className="metric-icon">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <div className="metric-number">6+</div>
                  <div className="metric-label">Tools Created</div>
          </div>
        </div>
              <div className="metric-pill h-20 flex items-center">
                <div className="metric-icon">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                </div>
            <div>
                  <div className="metric-number">82%</div>
                  <div className="metric-label">Efficiency Gain</div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Briefing Automation */}
          <div ref={leadershipBriefingRef} className="glass p-6 rounded-lg border border-white border-opacity-10 w-full">
            <h3 className="text-lg font-bold mb-4">Leadership Briefing Automation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-bold mb-2">Problem</h4>
                <p className="text-sm">Executives spent significant time reading lengthy reports to extract key insights, leading to information overload and delayed decision-making.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2">Insight</h4>
                <p className="text-sm">AI could automatically identify and summarize the most critical metrics and insights from complex reports.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2">Solution</h4>
                <p className="text-sm">Created an AI system that automatically generates executive summaries from lengthy reports, highlighting key metrics and insights.</p>
              </div>
            </div>
            
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Key Results</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="metric-pill h-20 flex items-center">
                <div className="metric-icon">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <div className="metric-number">25</div>
                  <div className="metric-label">Minutes Saved</div>
                </div>
              </div>
              <div className="metric-pill h-20 flex items-center">
                <div className="metric-icon">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
            </div>
            <div>
                  <div className="metric-number">92%</div>
                  <div className="metric-label">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter Automation */}
          <div ref={newsletterRef} className="glass p-6 rounded-lg border border-white border-opacity-10 w-full">
            <h3 className="text-lg font-bold mb-4">Newsletter Automation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-bold mb-2">Problem</h4>
                <p className="text-sm">Team members spent a lot of time manually compiling newsletters, making the digest of new content time-consuming to produce.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2">Insight</h4>
                <p className="text-sm">Automated systems could scan repositories for changes and format updates more efficiently than manual processes.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2">Solution</h4>
                <p className="text-sm">Built a custom automation that scans repositories for changes, summarizes key updates, and formats them into a digestible newsletter.</p>
              </div>
            </div>
            
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Key Results</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="metric-pill h-20 flex items-center">
                <div className="metric-icon">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <div className="metric-number">2.5x</div>
                  <div className="metric-label">Frequency</div>
                </div>
              </div>
              <div className="metric-pill h-20 flex items-center">
                <div className="metric-icon">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
            </div>
            <div>
                  <div className="metric-number">78%</div>
                  <div className="metric-label">Time Saved</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Stakeholder Map */}
          <div ref={stakeholderMapRef} className="glass p-6 rounded-lg border border-white border-opacity-10 w-full">
            <h3 className="text-lg font-bold mb-4">Interactive Stakeholder Map</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-bold mb-2">Problem</h4>
                <p className="text-sm">Complex network of stakeholders and dependencies across teams was difficult to understand and navigate, leading to communication gaps.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2">Insight</h4>
                <p className="text-sm">Visual mapping could help identify key relationships and improve understanding of organizational structures.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2">Solution</h4>
                <p className="text-sm">Created an interactive map that visualizes relationships between teams, projects, and dependencies for better clarity.</p>
              </div>
            </div>
            
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Key Results</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="metric-pill h-20 flex items-center">
                <div className="metric-icon">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <div>
                  <div className="metric-number">80%</div>
                  <div className="metric-label">Relationship Clarity</div>
                </div>
              </div>
              <div className="metric-pill h-20 flex items-center">
                <div className="metric-icon">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <div className="metric-number">95%</div>
                  <div className="metric-label">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">Some of the highlights, including sort center visit</h3>
          
          {/* Images in 2x2 grid */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image 
                src="/images/amazon/amazon_office.png" 
                alt="Amazon Office with City View" 
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image 
                src="/images/amazon/amazon_meeting.png" 
                alt="Amazon Meeting Room" 
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image 
                src="/images/amazon/SC_visit.png" 
                alt="Amazon Sort Center Visit" 
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image 
                src="/images/amazon/tables.jpg" 
                alt="Amazon Tables" 
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Videos in 3 columns with 9:16 aspect ratio */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="aspect-[9/16] overflow-hidden rounded-lg">
              <video 
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/amazon/warehouse1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="aspect-[9/16] overflow-hidden rounded-lg">
              <video 
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/amazon/warehouse2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="aspect-[9/16] overflow-hidden rounded-lg">
              <video 
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/amazon/warehouse3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-6">Partners & Collaborators</h3>
          <div className="flex flex-wrap items-center gap-8 mb-12">
            <div className="h-12">
              <Image src="/logos/amazon.png" alt="Amazon" width={120} height={48} className="h-full w-auto" style={{ width: 'auto', height: 'auto' }} />
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-white font-bold text-xl">IMPERIAL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-4 border-t border-gray-700 glass">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            {/* Instagram */}
            <a href="https://www.instagram.com/arturocan0/" target="_blank" rel="noopener noreferrer" 
              className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-gray-500/30" 
              aria-label="Instagram">
              <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/arturo-cano-designs/" target="_blank" rel="noopener noreferrer" 
              className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-gray-500/30" 
              aria-label="LinkedIn">
              <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/arturocano02" target="_blank" rel="noopener noreferrer" 
              className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-gray-500/30" 
              aria-label="GitHub">
              <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
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