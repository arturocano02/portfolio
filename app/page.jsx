import React from 'react';
import Button from '../components/Button';
import Badge from '../components/Badge';
import LogoScroller from '../components/LogoScroller';
import { partnerLogos } from '../public/logos';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <p className="text-xl mb-4">a London based 23 year old</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                designing and<br/>
                implementing AI products
              </h1>
              <div className="flex gap-4">
                <Button href="/contact" variant="primary">Work with me</Button>
                <Button href="/cv" variant="outline">CV</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-10">
        <div className="w-full px-4">
          <p className="text-sm text-gray-400 mb-4 max-w-4xl mx-auto">Who I have worked with</p>
          <div className="w-full overflow-hidden">
            <LogoScroller logos={partnerLogos} speed={0.3} />
          </div>
        </div>
      </section>

      {/* Norton Case Study Preview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2">make AI feel "magical"</h2>
            <p className="text-base mb-6">
              Led interaction design and UI elements for Norton Genie's scam-detection experience. 
              I designed the signature 'orb' animation and results banner so the product feels smart, magical and trustworthy.
            </p>
            <div className="flex gap-2 mb-6">
              <Badge text="Norton" />
              <Badge text="1M+ users" />
            </div>
            <Button href="/norton" variant="outline" className="text-yellow-400 hover:text-white">
              View Case Study →
            </Button>
          </div>

          <div className="flex gap-6 mb-10">
            <div className="flex-1">
              <div className="aspect-[9/16] bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Norton App Preview
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="aspect-[9/16] bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Norton App Results
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amazon Case Study Preview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2">automate the boring tasks</h2>
            <p className="text-base mb-6">
              During my time at Amazon I built AI tools and systems to automate boring and repetitive manual tasks, 
              saving time and increasing team efficiency.
            </p>
            <div className="flex gap-2 mb-6">
              <Badge text="Amazon" />
              <Badge text="10+ hours saved" />
            </div>
            <Button href="/amazon" variant="outline" className="text-orange-400 hover:text-white">
              View Case Study →
            </Button>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-10">
            {['Business Reviews', 'Slack Bot', 'Leadership Briefing', 'Newsletter', 'Stakeholder Map'].map((item, idx) => (
              <div key={idx} className="bg-orange-500 p-4 rounded-lg flex flex-col items-center justify-center text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trippl Case Study Preview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2">ship and test in the real world</h2>
            <p className="text-base mb-6">
              I co-founded Trippl, a platform that matches people travelling the same way so they can share rides more safely and affordably. 
              We ran real pilots and iterated in public.
            </p>
            <div className="flex gap-2 mb-6">
              <Badge text="Trippl" />
              <Badge text="500+ beta users" />
            </div>
            <Button href="/trippl" variant="outline" className="text-purple-400 hover:text-white">
              View Case Study →
            </Button>
          </div>

          <div className="aspect-video bg-black bg-opacity-30 rounded-lg flex items-center justify-center mb-10">
            <div className="flex flex-col items-center justify-center">
              <svg className="w-16 h-16 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-400 mt-2">Trippl Demo Video</p>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">More Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-pink-600 to-orange-400 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Good Engine</h3>
              <p className="text-sm mb-4">AI-powered Terms and Conditions analysis that highlights the key commitments and surfaces the most important points instantly.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-cyan-400 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">EasyJet</h3>
              <p className="text-sm mb-4">AI can locate undervalued capacity and moments to improve margin, simplifying choices for travelers while improving profitability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Let's work together</h2>
          <p className="text-xl mb-8">I'm available for new opportunities and collaborations.</p>
          <p className="mb-6">
            <a href="mailto:arturocanodesigns@gmail.com" className="text-accent hover:underline text-lg">
              arturocanodesigns@gmail.com
            </a>
          </p>
          <div className="flex space-x-6">
            <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="Twitter">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}