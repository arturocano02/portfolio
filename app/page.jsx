import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import Badge from '../components/Badge';
import LogoScroller from '../components/LogoScroller';
import ProjectCard from '../components/ProjectCard';
import { partnerLogos } from '../public/logos';

export default function HomePage() {
  return (
    <>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xl mb-6">a London-based Imperial graduate</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-12" style={{ lineHeight: '1.4', paddingBottom: '0.3em' }}>
            designing and<br/>
            implementing AI products
          </h1>
          <div className="flex justify-center gap-6 mb-20">
            <Button href="/contact" variant="primary">Work with me</Button>
            <Button href="/cv" variant="outline">CV</Button>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-16 w-full overflow-hidden">
        <div className="w-full text-center">
          <p className="text-sm text-gray-400 mb-8">Who I have worked with</p>
          <LogoScroller logos={partnerLogos} />
        </div>
      </section>

      {/* Norton Case Study Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            <div className="lg:w-1/2">
              {/* Headline */}
              <h2 className="text-2xl font-bold mb-4 text-left">make AI feel "magical"</h2>
              
              {/* Subheader */}
              <p className="text-lg mb-6 text-left">
                Led interaction design and UI elements for Norton Genie's scam-detection experience. 
                I designed the signature 'orb' animation and results banner so the product feels smart, magical and trustworthy.
              </p>
              
              {/* Key Results */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Key Results</h3>
                <div className="flex flex-wrap gap-1">
                  <div className="metric-pill border-2 border-white border-opacity-20">
                    <div className="metric-icon">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Badge text="UI/UX Design" />
                  <Badge text="Interaction Design" />
                  <Badge text="Animation" />
                  <Badge text="Prototyping" />
                </div>
              </div>

              {/* CTA */}
              <div className="text-left">
                <Button href="/norton" variant="primary">View Case Study</Button>
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
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amazon Case Study Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            <div className="lg:w-1/2">
              {/* Headline */}
              <h2 className="text-2xl font-bold mb-4 text-left">automate the boring tasks</h2>
              
              {/* Subheader */}
              <p className="text-base mb-6 text-left">
                Created five AI tools and a stakeholder map to cut repetitive work and improve clarity. 
                Saved teams hours each week and gave leaders faster, cleaner reviews.
              </p>
              
              {/* Key Results */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Key Results</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="metric-pill border-2 border-white border-opacity-20 h-20 flex items-center">
                    <div className="metric-icon">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="metric-number">10+</div>
                      <div className="metric-label">hours saved</div>
                    </div>
                  </div>
                  <div className="metric-pill border-2 border-white border-opacity-20 h-20 flex items-center">
                    <div className="metric-icon">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="metric-number">50%</div>
                      <div className="metric-label">faster cycles</div>
                    </div>
                  </div>
                  <div className="metric-pill border-2 border-white border-opacity-20 h-20 flex items-center">
                    <div className="metric-icon">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
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
                  <div key={idx} className="relative group">
                    <div className="w-40 h-32 rounded-xl glass flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg border border-white border-opacity-20 p-4">
                      <Image 
                        src={`/icons/${idx === 0 ? 'business analytics on tablet screen.png' : 
                               idx === 1 ? 'artificial intelligence on tablet screen.png' :
                               'Business tools for risk assessment and management.png'}`}
                        alt={item}
                        width={60}
                        height={60}
                        className="w-15 h-15 object-contain mb-2"
                      />
                      <span className="text-white text-xs font-medium text-center">{item}</span>
                    </div>
                  </div>
                ))}
                
                {/* Bottom row - 2 tools, centered */}
                <div className="col-span-3 flex justify-center gap-12 mt-4">
                  {['Newsletter', 'Stakeholder Map'].map((item, idx) => (
                    <div key={idx + 3} className="relative group">
                      <div className="w-40 h-32 rounded-xl glass flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg border border-white border-opacity-20 p-4">
                        <Image 
                          src={`/icons/${idx === 0 ? 'email marketing and newsletter with new message.png' :
                                 'Project management, team work and idea generation.png'}`}
                          alt={item}
                          width={60}
                          height={60}
                          className="w-15 h-15 object-contain mb-2"
                        />
                        <span className="text-white text-xs font-medium text-center">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trippl Case Study Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            <div className="lg:w-1/2">
              {/* Headline */}
              <h2 className="text-2xl font-bold mb-4 text-left">build an app with social impact</h2>
              
              {/* Subheader */}
              <p className="text-base mb-6 text-left">
                Founded Trippl to help people travel together so rides are safer, cheaper, and more social. 
                Born from friends feeling unsafe at night, tested with students across London.
              </p>
              
              {/* Key Results */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Key Results</h3>
                <div className="flex flex-wrap gap-1">
                  <div className="metric-pill border-2 border-white border-opacity-20">
                    <div className="metric-icon">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-2">
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
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">More Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h16.5A2.25 2.25 0 0022.5 19.5v-7.5a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v7.5a2.25 2.25 0 002.25 2.25z" />
                </svg>
              }
              isComingSoon={true}
            />
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
          <Button href="/contact" variant="primary" className="btn-amazon">
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