import React from 'react';
import Button from '../components/Button';
import Badge from '../components/Badge';
import FeatureCard from '../components/FeatureCard';
import CaseStudyCard from '../components/CaseStudyCard';
import ScrollIndicator from '../components/ScrollIndicator';
import LogoScroller from '../components/LogoScroller';
import { partnerLogos } from '../public/logos';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full viewport height */}
      <section className="section-full" id="hero">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <p className="text-xl mb-4">a London based 23 year old</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            designing and <br/>implementing AI products
          </h1>
          <div className="flex gap-4 mb-16">
            <Button href="/contact" variant="primary">Work with me</Button>
            <Button href="/cv" variant="outline">CV</Button>
          </div>
        </div>
        <ScrollIndicator targetId="partners" />
      </section>

      {/* Partners Strip - Compact section */}
      <section className="py-12" id="partners">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-medium text-center mb-6 text-gray-400">Who I have worked with</h2>
          <LogoScroller logos={partnerLogos} speed={0.5} />
        </div>
        <ScrollIndicator targetId="norton-feature" />
      </section>

      {/* Norton Case Study Feature */}
      <section className="py-20" id="norton-feature">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-yellow-400">"make my product feel</span><br/>
              <span className="text-yellow-400">smart and magical"</span>
            </h2>
            <p className="text-lg mb-6">what I did for <span className="font-semibold">Genie</span></p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-black bg-opacity-30 p-6 rounded-lg border border-gray-800">
                <h3 className="text-sm font-semibold mb-2">Research & Strategy</h3>
                <p className="text-sm text-gray-300">Studied how AI-led intelligence can augment human decision-making in scam detection.</p>
              </div>
              <div className="bg-black bg-opacity-30 p-6 rounded-lg border border-gray-800">
                <h3 className="text-sm font-semibold mb-2">Design the orb</h3>
                <p className="text-sm text-gray-300">Made Genie's UI dynamic with fine orb animation that responds with intelligence.</p>
              </div>
              <div className="bg-black bg-opacity-30 p-6 rounded-lg border border-gray-800">
                <h3 className="text-sm font-semibold mb-2">Polish the cards</h3>
                <p className="text-sm text-gray-300">Built anticipation, then a clear result that feels smart and magical.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge text="1 million plus users" />
              <Badge text="Award" />
              <Badge text="Creativity" />
            </div>
            
            <Button href="/norton" variant="outline" className="text-yellow-400 hover:text-white">
              View Case Study →
            </Button>
          </div>
          
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-12">
            {/* Placeholder for Norton Genie screenshot/mockup */}
            <p className="text-gray-400">Norton Genie App Screenshot</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="aspect-[9/16] bg-gray-900 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Phone Mockup 1</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="aspect-[9/16] bg-gray-900 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Phone Mockup 2</p>
              </div>
            </div>
          </div>
        </div>
        <ScrollIndicator targetId="amazon-feature" />
      </section>

      {/* Amazon Case Study Feature */}
      <section className="py-20 bg-black" id="amazon-feature">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-orange-400">using AI to automate the boring tasks</span>
            </h2>
            <p className="text-lg mb-6">During my time at Amazon I built AI tools and systems to automate boring and repetitive manual tasks, saving time and increasing team efficiency.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {['Business Reviews', 'Slack Bot Automation', 'Leadership Briefing', 'Newsletter Automation', 'Stakeholder Map'].map((item, idx) => (
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
            
            <Button href="/amazon" variant="outline" className="text-orange-400 hover:text-white">
              View Case Study →
            </Button>
          </div>
          
          <div className="bg-orange-500 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-2">Automated Business Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm mb-4">Created intelligent agents to significantly reduce the time spent on manually summarizing Business Reviews (BRs).</p>
                <div className="bg-white bg-opacity-20 rounded p-2 inline-block">
                  <span className="text-sm font-bold">10+ hours saved</span>
                </div>
              </div>
              <div>
                <p className="text-sm mb-4">Developed an AI powered system to process and analyze large amounts of data, saving time and improving accuracy.</p>
                <div className="bg-white bg-opacity-20 rounded p-2 inline-block">
                  <span className="text-sm font-bold">50% reduction in errors</span>
                </div>
              </div>
              <div>
                <p className="text-sm mb-4">Implemented automated data extraction and visualization for faster insights and decision making.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Placeholder for other Amazon tool examples */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Slack Bot Automation</h3>
              <p className="text-sm mb-4">Placeholder content for Slack Bot Automation description.</p>
              <div className="flex justify-between">
                <div className="bg-gray-800 rounded p-2">
                  <span className="text-sm font-bold">4+ tools</span>
                </div>
                <div className="bg-gray-800 rounded p-2">
                  <span className="text-sm font-bold">75% efficiency gain</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Leadership Briefing Automation</h3>
              <p className="text-sm mb-4">Placeholder content for Leadership Briefing Automation description.</p>
              <div className="flex justify-between">
                <div className="bg-gray-800 rounded p-2">
                  <span className="text-sm font-bold">15 mins saved</span>
                </div>
                <div className="bg-gray-800 rounded p-2">
                  <span className="text-sm font-bold">80% more accurate</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Amazon Work Image {idx}</p>
              </div>
            ))}
          </div>
        </div>
        <ScrollIndicator targetId="trippl-feature" />
      </section>

      {/* Trippl Case Study Feature */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-black" id="trippl-feature">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-purple-400">Built an app with</span><br/>
              <span className="text-purple-400">real social impact</span>
            </h2>
            <p className="text-lg mb-6">My female friends felt unsafe and often spent too much on taxis alone at night. During my Master's, I launched a platform that matches people traveling the same way to make urban transit safe and affordable.</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge text="6 pilots" />
              <Badge text="4 partnerships" />
              <Badge text="500 beta users" />
            </div>
            
            <Button href="/trippl" variant="outline" className="text-purple-400 hover:text-white">
              View Case Study →
            </Button>
          </div>
          
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-12">
            {/* Placeholder for Trippl video */}
            <div className="flex flex-col items-center justify-center">
              <svg className="w-16 h-16 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-400 mt-2">Video Placeholder</p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-6">what I did</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-purple-900 bg-opacity-50 p-6 rounded-lg border border-purple-800">
              <h4 className="text-sm font-semibold mb-2">Built the core algorithm</h4>
              <p className="text-sm text-gray-300 mb-4">Designed and coded the algorithm to match users based on their routes and timing, ensuring optimal pairings.</p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-800 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-purple-800 px-2 py-1 rounded">Firebase</span>
              </div>
            </div>
            <div className="bg-purple-900 bg-opacity-50 p-6 rounded-lg border border-purple-800">
              <h4 className="text-sm font-semibold mb-2">Created, tested and iterated the design</h4>
              <p className="text-sm text-gray-300 mb-4">Created the full UI and UX flow using feedback from user testing groups to refine the design.</p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-800 px-2 py-1 rounded">Figma</span>
                <span className="text-xs bg-purple-800 px-2 py-1 rounded">UserTesting</span>
              </div>
            </div>
            <div className="bg-purple-900 bg-opacity-50 p-6 rounded-lg border border-purple-800">
              <h4 className="text-sm font-semibold mb-2">Launched in the real world</h4>
              <p className="text-sm text-gray-300 mb-4">Ran live pilots in venues across London helping students get home safely with real-time matching, verification and guidance.</p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-800 px-2 py-1 rounded">React Native</span>
                <span className="text-xs bg-purple-800 px-2 py-1 rounded">Expo</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Trippl Image {idx}</p>
              </div>
            ))}
          </div>
        </div>
        <ScrollIndicator targetId="case-studies" />
      </section>

      {/* Case Study Cards - Full section */}
      <section className="py-20" id="case-studies">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10">More Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-pink-600 to-orange-400 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Good Engine</h3>
              <p className="text-sm mb-4">AI-powered Terms and Conditions analysis that highlights the key commitments and surfaces the most important points instantly.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-cyan-400 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">EasyJet</h3>
              <p className="text-sm mb-4">AI can locate undervalued capacity and moments to improve margin, simplifying choices for travelers while improving profitability.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-blue-400 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Base360.AI</h3>
              <p className="text-sm mb-4">An AI-powered summary and highlight layer for critical clauses, helping rental operations teams understand dense policy text.</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-teal-400 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Beautiful AI</h3>
              <p className="text-sm mb-4">Created a design system for AI interfaces that feel approachable, trustworthy and delightful to use.</p>
            </div>
          </div>
        </div>
        <ScrollIndicator targetId="contact" />
      </section>

      {/* Footer - Full section */}
      <section className="section-full" id="contact">
        <div className="glass">
          <h2 className="text-3xl font-semibold mb-6">Let's work together</h2>
          <p className="text-xl mb-8">I'm available for new opportunities and collaborations.</p>
          <p className="mb-6">
            <a href="mailto:arturocanodesigns@gmail.com" className="text-accent hover:underline text-lg">
              arturocanodesigns@gmail.com
            </a>
          </p>
          <div className="flex space-x-6">
            <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <div className="w-6 h-6 bg-gray-600 rounded-sm"></div>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="Instagram">
              <span className="sr-only">Instagram</span>
              <div className="w-6 h-6 bg-gray-600 rounded"></div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}