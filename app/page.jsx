import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import Badge from '../components/Badge';
import LogoScroller from '../components/LogoScroller';
import { partnerLogos } from '../public/logos';

export default function HomePage() {
  return (
    <>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xl mb-6">a London based 23 year old</p>
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
              
              {/* Stats Pills - Horizontal */}
              <div className="flex flex-wrap gap-4 mb-6">
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

              {/* Skills - Horizontal */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge text="UI/UX Design" />
                <Badge text="Interaction Design" />
                <Badge text="Animation" />
                <Badge text="Prototyping" />
              </div>

              {/* CTA */}
              <div className="text-left">
                <Button href="/norton" variant="primary">View Case Study</Button>
              </div>
            </div>
            
            {/* Visuals - Right Side */}
            <div className="lg:w-1/2 flex flex-col items-center gap-6">
              {/* Take me a look - smaller image */}
              <div className="w-full max-w-sm">
                <Image 
                  src="/images/norton/take_me_a_look.png"
                  alt="Norton Take a Look"
                  width={400}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </div>
              {/* Analysing text - bigger image */}
              <div className="w-full max-w-md">
                <Image 
                  src="/images/norton/analysing_text.png"
                  alt="Norton Analysing Text"
                  width={500}
                  height={300}
                  className="rounded-lg mx-auto"
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
              
              {/* Key Stats - Horizontal */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="metric-pill border-2 border-white border-opacity-20">
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
                <div className="metric-pill border-2 border-white border-opacity-20">
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
                <div className="metric-pill border-2 border-white border-opacity-20">
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

              {/* Skills - Horizontal */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge text="AI agents & automation" />
                <Badge text="Knowledge management" />
                <Badge text="Dashboard & KPI design" />
                <Badge text="Stakeholder communication" />
              </div>

              {/* CTA */}
              <div className="text-left">
                <Button href="/amazon" variant="primary">View Case Study</Button>
              </div>
            </div>
            
            {/* Icons - Right Side */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="flex flex-wrap gap-6 justify-center">
                {['Business Reviews', 'Slack Bot', 'Leadership Briefing', 'Newsletter', 'Stakeholder Map'].map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Image 
                        src={`/icons/${idx === 0 ? 'business analytics on tablet screen.png' : 
                               idx === 1 ? 'artificial intelligence on tablet screen.png' :
                               idx === 2 ? 'Business tools for risk assessment and management.png' :
                               idx === 3 ? 'email marketing and newsletter with new message.png' :
                               'Project management, team work and idea generation.png'}`}
                        alt={item}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black bg-opacity-80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      {item}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black border-t-opacity-80"></div>
                    </div>
                  </div>
                ))}
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
              
              {/* Key Stats - Horizontal */}
              <div className="flex flex-wrap gap-4 mb-6">
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

              {/* Skills - Horizontal */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge text="Product design & algorithms" />
                <Badge text="UX/UI design & branding" />
                <Badge text="Partnerships & pitching" />
                <Badge text="User research & live testing" />
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
            
            {/* Phone Mockup - Right Side */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-xs">
                <div className="bg-purple-600 rounded-2xl p-1 overflow-hidden">
                  <Image 
                    src="/images/trippl/Iphone_Mockup.png"
                    alt="Trippl App Preview"
                    width={300}
                    height={600}
                    className="rounded-xl mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-pink-600 to-orange-400 p-6 rounded-lg relative group">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-white bg-opacity-20 rounded-full mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Good Engine</h3>
              </div>
              <p className="text-sm mb-4">AI-powered Terms and Conditions analysis that highlights the key commitments and surfaces the most important points instantly.</p>
              <div className="mt-4">
                <button className="text-xs text-white hover:underline flex items-center gap-1">
                  Learn more 
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold mb-2">Good Engine</h4>
                  <p className="text-sm mb-3">AI-powered Terms and Conditions analysis that highlights the key commitments and surfaces the most important points instantly.</p>
                  <p className="text-xs text-gray-300">Technologies: React, TensorFlow.js, NLP</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-cyan-400 p-6 rounded-lg relative group">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-white bg-opacity-20 rounded-full mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">EasyJet</h3>
              </div>
              <p className="text-sm mb-4">AI can locate undervalued capacity and moments to improve margin, simplifying choices for travelers while improving profitability.</p>
              <div className="mt-4">
                <button className="text-xs text-white hover:underline flex items-center gap-1">
                  Learn more 
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold mb-2">EasyJet</h4>
                  <p className="text-sm mb-3">AI can locate undervalued capacity and moments to improve margin, simplifying choices for travelers while improving profitability.</p>
                  <p className="text-xs text-gray-300">Technologies: Python, TensorFlow, Data Analysis</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-blue-400 p-6 rounded-lg relative group">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-white bg-opacity-20 rounded-full mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Base360.AI</h3>
              </div>
              <p className="text-sm mb-4">An AI-powered summary and highlight layer for critical clauses, helping rental operations teams understand dense policy text.</p>
              <div className="mt-4">
                <button className="text-xs text-white hover:underline flex items-center gap-1">
                  Learn more 
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold mb-2">Base360.AI</h4>
                  <p className="text-sm mb-3">An AI-powered summary and highlight layer for critical clauses, helping rental operations teams understand dense policy text.</p>
                  <p className="text-xs text-gray-300">Technologies: Next.js, GPT-4, Document Processing</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-teal-400 p-6 rounded-lg relative group">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-white bg-opacity-20 rounded-full mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Beautiful AI</h3>
              </div>
              <p className="text-sm mb-4">Created a design system for AI interfaces that feel approachable, trustworthy and delightful to use.</p>
              <div className="mt-4">
                <button className="text-xs text-white hover:underline flex items-center gap-1">
                  Learn more 
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold mb-2">Beautiful AI</h4>
                  <p className="text-sm mb-3">Created a design system for AI interfaces that feel approachable, trustworthy and delightful to use.</p>
                  <p className="text-xs text-gray-300">Technologies: Figma, React, Storybook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Contact Section */}
      <section className="py-16 glass border-t border-white border-opacity-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's work together</h2>
          <div className="flex justify-center gap-4 mb-8">
            <Button href="/contact" variant="primary">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              Get in touch
            </Button>
          </div>
          <p className="mb-6">
            <a href="mailto:arturocanodesigns@gmail.com" className="text-orange-400 hover:text-orange-300 hover:underline text-lg flex items-center justify-center gap-2 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              arturocanodesigns@gmail.com
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {/* LinkedIn */}
            <div className="flex flex-col items-center">
              <a href="https://www.linkedin.com/in/arturo-cano-designs/" target="_blank" rel="noopener noreferrer" 
                className="w-14 h-14 rounded-xl glass flex items-center justify-center hover:bg-blue-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-blue-500/30 mb-2" 
                aria-label="LinkedIn">
                <svg className="w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <span className="text-xs text-blue-400">LinkedIn</span>
            </div>
            
            {/* GitHub */}
            <div className="flex flex-col items-center">
              <a href="https://github.com/arturocano02" target="_blank" rel="noopener noreferrer" 
                className="w-14 h-14 rounded-xl glass flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-gray-500/30 mb-2" 
                aria-label="GitHub">
                <svg className="w-7 h-7 text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <span className="text-xs text-gray-300">GitHub</span>
            </div>
            
            {/* Instagram */}
            <div className="flex flex-col items-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-14 h-14 rounded-xl glass flex items-center justify-center hover:bg-pink-600 hover:bg-opacity-20 transition-all transform hover:scale-105 border border-pink-500/30 mb-2" 
                aria-label="Instagram">
                <svg className="w-7 h-7 text-pink-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <span className="text-xs text-pink-400">Instagram</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}