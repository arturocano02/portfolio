"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import Badge from '../components/Badge';
import LogoScroller from '../components/LogoScroller';
import ProjectCard from '../components/ProjectCard';
import TypewriterEffect from '../components/TypewriterEffect';
import { partnerLogos } from '../public/logos';

export default function HomePage() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleSubtitleComplete = () => {
    setShowTitle(true);
  };

  const handleTitleComplete = () => {
    setShowButtons(true);
  };

  return (
    <>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-safe">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center space-fluid-lg">
          <p className="text-fluid-lg text-white text-center break-words-smart" style={{wordBreak: 'normal', overflowWrap: 'break-word', hyphens: 'none'}}>
            <TypewriterEffect 
              text="Imperial College London Engineering Graduate"
              speed={60}
              delay={500}
              onComplete={handleSubtitleComplete}
              className="block"
            />
          </p>
          {showTitle && (
            <h1 className="text-fluid-4xl sm:text-fluid-5xl lg:text-fluid-6xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-center leading-tight">
              <TypewriterEffect 
                text="designing and scaling AI products"
                speed={80}
                delay={200}
                onComplete={handleTitleComplete}
                className="block"
              />
          </h1>
          )}
          {showButtons && (
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 transition-all duration-1000 opacity-100 translate-y-0 w-full max-w-sm sm:max-w-none">
              <Button href="/contact" variant="primary" className="touch-target w-full sm:w-auto">Work with me</Button>
              <Button href="/cv" variant="outline" className="touch-target w-full sm:w-auto">CV</Button>
            </div>
          )}
          </div>
      </section>

      {/* Partners Strip */}
      <section className="py-safe w-full overflow-hidden">
        <div className="w-full text-center px-safe">
          <p className="text-fluid-lg text-white mb-6 font-medium">Who I have worked with</p>
          <LogoScroller logos={partnerLogos} />
        </div>
      </section>

      {/* Norton Case Study Preview */}
      <section className="py-safe">
        <div className="max-w-6xl mx-auto px-safe">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 space-fluid-lg">
            <div className="lg:w-1/2">
              {/* Headline */}
              <h2 className="text-fluid-2xl sm:text-fluid-3xl font-bold mb-4 text-left bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Make AI feel "magical"</h2>
              
              {/* Subheader */}
              <p className="text-fluid-base text-white mb-4 text-left break-words">
                Led interaction design and UI elements for Norton Genie's scam-detection experience. 
                I designed the signature 'orb' animation and results banner so the product feels smart, magical and trustworthy.
              </p>
              
              {/* Key Results */}
              <div className="mb-6">
                <h3 className="text-fluid-sm font-semibold text-white uppercase tracking-wider mb-3">Key Results</h3>
                <div className="flex flex-wrap gap-1 space-fluid-xs">
                  <div className="metric-pill border-2 border-white border-opacity-20">
                    <div className="metric-icon">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="metric-number">1M+</div>
                      <div className="metric-label">users</div>
                    </div>
                  </div>
                  <div className="metric-pill border-2 border-white border-opacity-20">
                    <div className="metric-icon">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="metric-number">4.7</div>
                      <div className="metric-label">App Store</div>
                    </div>
                  </div>
                  <div className="metric-pill border-2 border-white border-opacity-20">
                    <div className="metric-icon">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11.14 12a4 4 0 01-2.28-7.33l.38.38a1 1 0 001.414-1.415l-.38-.38A4 4 0 0111.14 12z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="metric-number">2</div>
                      <div className="metric-label">awards</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills & Expertise */}
              <div className="mb-6">
                <h3 className="text-fluid-sm font-semibold text-white uppercase tracking-wider mb-3">Skills & Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 space-fluid-xs">
                  <Badge text="UI/UX Design" />
                  <Badge text="Interaction Design" />
                  <Badge text="Animation" />
                  <Badge text="Prototyping" />
                </div>
              </div>

              {/* CTA */}
              <div className="text-left">
                <Button href="/norton" variant="primary" className="touch-target">View Case Study</Button>
              </div>
            </div>
            
            {/* Visual - Right Side */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full max-w-lg">
                <Image 
                  src="/images/norton/Visual_Home.svg"
                  alt="Norton Genie Visual"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amazon Case Study Preview */}
      <section className="py-safe">
        <div className="max-w-6xl mx-auto px-safe">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 space-fluid-lg">
            <div className="lg:w-1/2">
              {/* Headline */}
              <h2 className="text-fluid-2xl sm:text-fluid-3xl font-bold mb-4 text-left bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Automate the boring tasks</h2>
              
              {/* Subheader */}
              <p className="text-fluid-base text-white mb-4 text-left break-words">
                Created five AI tools and a stakeholder map to cut repetitive work and improve clarity. 
                Saved teams hours each week and gave leaders faster, cleaner reviews.
              </p>
              
              {/* Key Results */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Key Results</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="metric-pill border-2 border-white border-opacity-20">
                    <div className="metric-icon">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="metric-number">10+</div>
                      <div className="metric-label">hours saved</div>
                    </div>
                  </div>
                  <div className="metric-pill border-2 border-white border-opacity-20">
                    <div className="metric-icon">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="metric-number">50%</div>
                      <div className="metric-label">faster cycles</div>
                    </div>
                  </div>
                  <div className="metric-pill border-2 border-white border-opacity-20">
                    <div className="metric-icon">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="metric-number">5</div>
                      <div className="metric-label">tools built</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills & Expertise */}
              <div className="mb-6">
                <h3 className="text-fluid-sm font-semibold text-white uppercase tracking-wider mb-3">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-1 space-fluid-xs">
                  <Badge text="AI agents & automation" />
                  <Badge text="Knowledge management" />
                  <Badge text="Dashboard & KPI design" />
                  <Badge text="Stakeholder communication" />
                </div>
              </div>

              {/* CTA */}
              <div className="text-left">
                <Button href="/amazon" variant="primary">View Case Study</Button>
              </div>
            </div>
            
            {/* Tools - Right Side */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="grid grid-cols-3 gap-6 justify-items-center">
        {/* Top row - 3 tools */}
        {['Business Reviews', 'Slack Bot', 'Leadership Briefing'].map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-center">
            <div className="relative w-16 h-16 mb-3">
              <Image 
                src={`/icons/${idx === 0 ? 'business analytics on tablet screen.png' : 
                       idx === 1 ? 'artificial intelligence on tablet screen.png' :
                       'Business tools for risk assessment and management.png'}`}
                alt={item}
                width={60}
                height={60}
                className="w-16 h-16 object-contain floating-icon"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <span className="text-white text-xs font-medium text-center">{item}</span>
          </div>
        ))}
                
        {/* Bottom row - 2 tools, centered */}
        <div className="col-span-3 flex justify-center gap-12 mt-4">
          {['Newsletter', 'Stakeholder Map'].map((item, idx) => (
            <div key={idx + 3} className="relative flex flex-col items-center">
              <div className="relative w-16 h-16 mb-3">
                <Image 
                  src={`/icons/${idx === 0 ? 'email marketing and newsletter with new message.png' :
                         'Project management, team work and idea generation.png'}`}
                  alt={item}
                  width={60}
                  height={60}
                  className="w-16 h-16 object-contain floating-icon"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <span className="text-white text-xs font-medium text-center">{item}</span>
            </div>
          ))}
        </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trippl Case Study Preview */}
      <section className="py-safe">
        <div className="max-w-6xl mx-auto px-safe">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 space-fluid-lg">
            <div className="lg:w-1/2">
              {/* Headline */}
              <h2 className="text-fluid-2xl sm:text-fluid-3xl font-bold mb-4 text-left bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Build an app with social impact</h2>
              
              {/* Subheader */}
              <p className="text-fluid-base text-white mb-4 text-left break-words">
                Founded Trippl to help people travel together so rides are safer, cheaper, and more social. 
                Born from friends feeling unsafe at night, tested with students across London.
              </p>
              
              {/* Key Results */}
              <div className="mb-6">
                <h3 className="text-fluid-sm font-semibold text-white uppercase tracking-wider mb-3">Key Results</h3>
                <div className="flex flex-wrap gap-1 space-fluid-xs">
                  <div className="metric-pill border-2 border-white border-opacity-20">
                    <div className="metric-icon">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="metric-number">~500</div>
                      <div className="metric-label">beta users</div>
                    </div>
                  </div>
                  <div className="metric-pill border-2 border-white border-opacity-20">
                    <div className="metric-icon">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="metric-number">6</div>
                      <div className="metric-label">live pilots</div>
                    </div>
                  </div>
                  <div className="metric-pill border-2 border-white border-opacity-20">
                    <div className="metric-icon">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="metric-number">3</div>
                      <div className="metric-label">awards</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills & Expertise */}
              <div className="mb-6">
                <h3 className="text-fluid-sm font-semibold text-white uppercase tracking-wider mb-3">Skills & Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 space-fluid-xs">
                  <Badge text="Product design & algorithms" />
                  <Badge text="UX/UI design & branding" />
                  <Badge text="Partnerships & pitching" />
                  <Badge text="User research & live testing" />
                </div>
              </div>

              {/* CTA */}
              <div className="text-left">
                <div className="flex flex-wrap gap-4">
                  <Button href="/trippl" variant="primary">
                    View Case Study
                  </Button>
                  <Button href="https://trippl.co.uk" variant="outline" className="text-purple-400 border-purple-400 hover:text-white">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                    </svg>
                    Visit Website
          </Button>
        </div>
              </div>
            </div>
            
            {/* Video - Right Side */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full max-w-64 h-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                >
                  <source src="/images/trippl/Trippl_app_UX.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects Section */}
      <section id="projects" className="py-6">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">More Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Base360.ai */}
            <ProjectCard
              title="Base360.ai"
              summary="Landing, UX, and the human-AI interaction for a new ops startup."
              story="A new startup needed a strong public presence and a clear UX/UI for their core product. The challenge was to design a system that looked intuitive while also defining how users interact with AI in daily workflows."
              whatIDid={[
                "Shipped the public landing page for launch",
                "Designed core UX and UI flows",
                "Co-ideated conversation patterns with founders",
                "Built front-end pieces for demos and investor pitches"
              ]}
              skills={["UX/UI design", "Human-AI interaction", "Product strategy", "Front-end build", "Figma", "Web stack"]}
              icon={
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              }
            />
            
            {/* Good Engine */}
            <ProjectCard
            title="Good Engine"
              summary="AI that explains the small print so people can choose with confidence."
              story="The gambling industry is full of complex, often misleading terms. We designed a tool that simplified T&Cs, aligned them with user preferences, and promoted ethical, transparent AI."
              whatIDid={[
                "Led surveys and user interviews",
                "Mapped journeys and pain points",
                "Defined opportunity areas and value story",
                "Designed flows and wireframes in Figma"
              ]}
              skills={["User research", "Market analysis", "Ideation", "Wireframing", "Strategy", "Figma", "AI platforms"]}
              icon={
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            
            {/* EasyJourney */}
            <ProjectCard
              title="EasyJourney"
              summary="Trips planned in one place around the flight."
              story="Travelers often bounce between apps to book flights, hotels, and activities. We explored a unified platform anchored on easyJet flights, making the whole trip seamless."
              whatIDid={[
                "Researched user behaviors and pain points",
                "Identified new business opportunities",
                "Built a P&L model for profitability",
                "Designed a high-level trip-planning flow"
              ]}
              skills={["Market research", "Data analysis", "Strategy", "Opportunity identification", "Spreadsheets", "Prototyping tools"]}
              icon={
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              }
            />
            
            {/* Coming Soon */}
            <ProjectCard
              title="My AI products"
              summary="Building small, useful agents for real jobs to be done."
              story="I'm developing a suite of lightweight AI agents focused on clear human-AI interactions. Each is designed to take one painful task and make it fast, intuitive, and fun."
              whatIDid={[
                "Video + voice agent → Generates short social clips from a simple prompt. Script, synthetic voice, cut, captions.",
                "Research scribe → Records meetings and produces clean notes and actions.",
                "Ops copilot → Drafts updates, checks metrics, and keeps the team on track."
              ]}
              skills={["AI agents", "Human-AI interaction", "Rapid prototyping", "UX/UI design"]}
              icon={
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path  d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h16.5A2.25 2.25 0 0022.5 19.5v-7.5a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v7.5a2.25 2.25 0 002.25 2.25z" />
                </svg>
              }
              isComingSoon={true}
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-4 border-t border-gray-700 glass">
        <div className="max-w-4xl mx-auto px-4 text-center">
    <div className="flex justify-center gap-6 mb-3">
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
      </section>
    </>
  );
}