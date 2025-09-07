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
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  useEffect(() => {
    if (!scrollerRef.current) return;
    
    const scrollContainer = scrollerRef.current;
    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    
    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when we've scrolled a certain amount
      if (scrollPosition >= 100) {
        // Jump back but not completely to 0 to avoid visual jump
        scrollContainer.scrollLeft = 0;
        scrollPosition = 0;
      } else {
        scrollContainer.scrollLeft = scrollPosition;
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    scroll();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-400">using AI to automate the boring tasks</span>
          </h1>
          <p className="text-xl mb-8">During my time at Amazon I built AI tools and systems to automate boring and repetitive manual tasks, saving time and increasing team efficiency.</p>
          
          <div className="relative w-full overflow-hidden mb-12">
            <div ref={scrollerRef} className="flex gap-6 overflow-x-auto pb-4 snap-x scrollbar-hide" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
              {/* Business Reviews Card */}
              <div 
                className="flex-shrink-0 w-36 bg-orange-500 rounded-lg overflow-hidden snap-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => scrollToSection(businessReviewsRef)}
              >
                <div className="p-4 flex flex-col items-center justify-center h-48">
                  <div className="bg-orange-400 bg-opacity-30 p-3 rounded-full mb-3">
                    <Image 
                      src="/icons/business analytics on tablet screen.png"
                      alt="Business Reviews"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-center text-white font-medium">Business Reviews</h3>
                </div>
              </div>
              
              {/* Slack Bot Card */}
              <div 
                className="flex-shrink-0 w-36 bg-orange-500 rounded-lg overflow-hidden snap-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => scrollToSection(slackBotRef)}
              >
                <div className="p-4 flex flex-col items-center justify-center h-48">
                  <div className="bg-orange-400 bg-opacity-30 p-3 rounded-full mb-3">
                    <Image 
                      src="/icons/artificial intelligence on tablet screen.png"
                      alt="Slack Bot"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-center text-white font-medium">Slack Bot Automation</h3>
                </div>
              </div>
              
              {/* Leadership Briefing Card */}
              <div 
                className="flex-shrink-0 w-36 bg-orange-500 rounded-lg overflow-hidden snap-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => scrollToSection(leadershipBriefingRef)}
              >
                <div className="p-4 flex flex-col items-center justify-center h-48">
                  <div className="bg-orange-400 bg-opacity-30 p-3 rounded-full mb-3">
                    <Image 
                      src="/icons/Business tools for risk assessment and management.png"
                      alt="Leadership Briefing"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-center text-white font-medium">Leadership Briefing</h3>
                </div>
              </div>
              
              {/* Newsletter Card */}
              <div 
                className="flex-shrink-0 w-36 bg-orange-500 rounded-lg overflow-hidden snap-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => scrollToSection(newsletterRef)}
              >
                <div className="p-4 flex flex-col items-center justify-center h-48">
                  <div className="bg-orange-400 bg-opacity-30 p-3 rounded-full mb-3">
                    <Image 
                      src="/icons/email marketing and newsletter with new message.png"
                      alt="Newsletter"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-center text-white font-medium">Newsletter Automation</h3>
                </div>
              </div>
              
              {/* Stakeholder Map Card */}
              <div 
                className="flex-shrink-0 w-36 bg-orange-500 rounded-lg overflow-hidden snap-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => scrollToSection(stakeholderMapRef)}
              >
                <div className="p-4 flex flex-col items-center justify-center h-48">
                  <div className="bg-orange-400 bg-opacity-30 p-3 rounded-full mb-3">
                    <Image 
                      src="/icons/Project management, team work and idea generation.png"
                      alt="Stakeholder Map"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-center text-white font-medium">Interactive Stakeholder Map</h3>
                </div>
              </div>
              
              {/* Duplicate cards for infinite scroll effect */}
              <div className="flex-shrink-0 w-36 bg-orange-500 rounded-lg overflow-hidden snap-center cursor-pointer hover:scale-105 transition-transform">
                <div className="p-4 flex flex-col items-center justify-center h-48">
                  <div className="bg-orange-400 bg-opacity-30 p-3 rounded-full mb-3">
                    <Image 
                      src="/icons/business analytics on tablet screen.png"
                      alt="Business Reviews"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-center text-white font-medium">Business Reviews</h3>
                </div>
        </div>
              
              <div className="flex-shrink-0 w-36 bg-orange-500 rounded-lg overflow-hidden snap-center cursor-pointer hover:scale-105 transition-transform">
                <div className="p-4 flex flex-col items-center justify-center h-48">
                  <div className="bg-orange-400 bg-opacity-30 p-3 rounded-full mb-3">
                    <Image 
                      src="/icons/artificial intelligence on tablet screen.png"
                      alt="Slack Bot"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-center text-white font-medium">Slack Bot Automation</h3>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div ref={businessReviewsRef} className="glass p-6 rounded-lg mb-8 border border-white border-opacity-10">
            <h3 className="text-lg font-bold mb-2">Automated Business Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm mb-4">Created intelligent agents to significantly reduce the time spent on manually summarizing Business Reviews (BRs).</p>
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-number">12+</div>
                    <div className="metric-label">Hours Saved</div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm mb-4">Developed an AI powered system to process and analyze large amounts of data, saving time and improving accuracy.</p>
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
            <div>
                    <div className="metric-number">68%</div>
                    <div className="metric-label">Error Reduction</div>
                  </div>
                </div>
            </div>
            <div>
                <p className="text-sm mb-4">Implemented automated data extraction and visualization for faster insights and decision making.</p>
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div ref={slackBotRef} className="glass p-6 rounded-lg border border-white border-opacity-10">
              <h3 className="text-lg font-bold mb-2">Slack Bot Automation</h3>
              <p className="text-sm mb-4">Built a system that automatically responds to common queries, routes information to the right people, and simplifies team workflows.</p>
              <div className="flex justify-between">
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-number">6+</div>
                    <div className="metric-label">Tools Created</div>
          </div>
        </div>
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
            <div ref={leadershipBriefingRef} className="glass p-6 rounded-lg border border-white border-opacity-10">
              <h3 className="text-lg font-bold mb-2">Leadership Briefing Automation</h3>
              <p className="text-sm mb-4">Created an AI system that automatically generates executive summaries from lengthy reports, highlighting key metrics and insights.</p>
              <div className="flex justify-between">
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-number">25</div>
                    <div className="metric-label">Minutes Saved</div>
                  </div>
                </div>
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
          </div>
          
          <div className="mb-12">
            <h2 ref={newsletterRef} className="text-2xl font-bold mb-6">Newsletter Automation</h2>
            <div className="glass p-6 rounded-lg border border-white border-opacity-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-bold mb-2">Problem</h4>
                  <p className="text-sm mb-4">Team members spent a lot of time manually compiling newsletters. The digest of new content was time-consuming to produce.</p>
          </div>
                <div>
                  <h4 className="text-sm font-bold mb-2">Solution</h4>
                  <p className="text-sm mb-4">Built a custom automation that scans repositories for changes, summarizes key updates, and formats them into a digestible newsletter.</p>
        </div>
            <div>
                  <h4 className="text-sm font-bold mb-2">Impact</h4>
                  <p className="text-sm mb-4">Doubled the frequency of updates while reducing the time spent creating them by 60%, improving team communication.</p>
                  <div className="flex gap-4">
                    <div className="metric-pill">
                      <div className="metric-icon">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
            </div>
            <div>
                        <div className="metric-number">2.5x</div>
                        <div className="metric-label">Frequency</div>
                      </div>
                    </div>
                    <div className="metric-pill">
                      <div className="metric-icon">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
              </div>
            </div>
          </div>
          
          <h3 ref={stakeholderMapRef} className="text-xl font-bold mb-6">Interactive Stakeholder Map</h3>
          <div className="glass p-6 rounded-lg mb-8 border border-white border-opacity-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-bold mb-2">Problem</h4>
                <p className="text-sm mb-4">I needed to compile the complex network of stakeholders and dependencies across teams.</p>
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-number">80%</div>
                    <div className="metric-label">Relationship Clarity</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2">Solution</h4>
                <p className="text-sm mb-4">Created an interactive map that visualizes relationships between teams, projects, and dependencies.</p>
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-number">95%</div>
                    <div className="metric-label">Accuracy Rate</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2">Impact</h4>
                <p className="text-sm mb-4">The tool helped identify key stakeholders and improved communication flow across teams.</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-6">Some of the highlights, including sort center visit</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {/* First row - Images */}
            <div className="aspect-square glass rounded-lg overflow-hidden">
              <Image 
                src="/images/amazon/office1.jpg" 
                alt="Amazon Office" 
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square glass rounded-lg overflow-hidden">
              <Image 
                src="/images/amazon/sort_center.jpg" 
                alt="Amazon Sort Center" 
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square glass rounded-lg overflow-hidden">
              <Image 
                src="/images/amazon/presentation.jpg" 
                alt="Amazon Presentation" 
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
        </div>
            
            {/* Second row - Videos */}
            <div className="aspect-square glass rounded-lg overflow-hidden col-span-2 md:col-span-1">
              <video 
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/amazon/dashboard_demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="aspect-square glass rounded-lg overflow-hidden">
              <video 
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/amazon/slack_bot_demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="aspect-square glass rounded-lg overflow-hidden">
              <video 
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/amazon/warehouse_tour.mp4" type="video/mp4" />
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
              <Image src="/logos/amazon.png" alt="Amazon" width={120} height={48} className="h-full w-auto" />
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
          <Button href="/contact" variant="primary" className="btn-amazon">
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