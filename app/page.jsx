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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl mb-4">a London based 23 year old</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            designing and<br/>
            implementing AI products
          </h1>
          <div className="flex justify-center gap-4 mb-16">
            <Button href="/contact" variant="primary">Work with me</Button>
            <Button href="/cv" variant="outline">CV</Button>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-10 w-full overflow-hidden">
        <div className="w-full text-center">
          <p className="text-sm text-gray-400 mb-6">Who I have worked with</p>
          <LogoScroller logos={partnerLogos} />
        </div>
      </section>

      {/* Norton Case Study Preview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">make AI feel "magical"</h2>
              <p className="text-base mb-6">
                Led interaction design and UI elements for Norton Genie's scam-detection experience. 
                I designed the signature 'orb' animation and results banner so the product feels smart, magical and trustworthy.
              </p>
              <div className="flex gap-2 mb-6">
                <Badge text="Norton" />
                <Badge text="1M+ users" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button href="/norton" variant="outline" className="text-yellow-400 border-yellow-400 hover:text-white">
                  Discover →
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-xs">
                <Image 
                  src="/images/norton/intro_page.png"
                  alt="Norton App Preview"
                  width={300}
                  height={600}
                  className="rounded-lg mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <Image 
              src="/logos/norton.png"
              alt="Norton"
              width={80}
              height={30}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </section>

      {/* Amazon Case Study Preview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">automate the boring tasks</h2>
              <p className="text-base mb-6">
                During my time at Amazon I built AI tools and systems to automate boring and repetitive manual tasks, 
                saving time and increasing team efficiency.
              </p>
              <div className="flex gap-2 mb-6">
                <Badge text="Amazon" />
                <Badge text="10+ hours saved" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button href="/amazon" variant="outline" className="text-orange-400 border-orange-400 hover:text-white">
                  Discover →
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-5 gap-2">
                {['Business Reviews', 'Slack Bot', 'Leadership Briefing', 'Newsletter', 'Stakeholder Map'].map((item, idx) => (
                  <div key={idx} className="bg-orange-500 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                    <div className="mb-1">
                      <Image 
                        src={`/icons/${idx === 0 ? 'business analytics on tablet screen.png' : 
                               idx === 1 ? 'artificial intelligence on tablet screen.png' :
                               idx === 2 ? 'Business tools for risk assessment and management.png' :
                               idx === 3 ? 'email marketing and newsletter with new message.png' :
                               'Project management, team work and idea generation.png'}`}
                        alt={item}
                        width={30}
                        height={30}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <p className="text-xs font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <Image 
              src="/logos/amazon.png"
              alt="Amazon"
              width={80}
              height={30}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </section>

      {/* Trippl Case Study Preview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">ship and test in the real world</h2>
              <p className="text-base mb-6">
                I co-founded Trippl, a platform that matches people travelling the same way so they can share rides more safely and affordably. 
                We ran real pilots and iterated in public.
              </p>
              <div className="flex gap-2 mb-6">
                <Badge text="Trippl" />
                <Badge text="500+ beta users" />
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/trippl" variant="outline" className="text-purple-400 border-purple-400 hover:text-white">
                  Discover →
                </Button>
                <Button href="https://trippl.app" variant="outline" className="text-purple-400 border-purple-400 hover:text-white">
                  Visit Website
          </Button>
        </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
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
        <div className="max-w-4xl mx-auto px-4">
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
      <section className="py-20 glass border-t border-white border-opacity-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's work together</h2>
          <div className="flex justify-center gap-4 mb-8">
            <Button href="/contact" variant="primary">Get in touch</Button>
          </div>
          <p className="mb-6">
            <a href="mailto:arturocanodesigns@gmail.com" className="text-white hover:underline text-lg">
              arturocanodesigns@gmail.com
            </a>
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors" aria-label="LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors" aria-label="GitHub">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors" aria-label="Instagram">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}