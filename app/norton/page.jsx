import React from 'react';
import Button from '../../components/Button';
import Badge from '../../components/Badge';

export default function NortonCaseStudy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-400">"make my product feel</span><br/>
            <span className="text-yellow-400">smart and magical"</span>
          </h1>
          <p className="text-xl mb-8">what I did for <span className="font-semibold">Genie</span></p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black bg-opacity-20 p-6 rounded-lg border border-gray-700">
              <h3 className="text-sm font-semibold mb-2">Research & Strategy</h3>
              <p className="text-sm text-gray-300">Studied how AI-led intelligence can augment human decision-making in scam detection.</p>
            </div>
            <div className="bg-black bg-opacity-20 p-6 rounded-lg border border-gray-700">
              <h3 className="text-sm font-semibold mb-2">Design the orb</h3>
              <p className="text-sm text-gray-300">Made Genie's UI dynamic with fine orb animation that responds with intelligence.</p>
            </div>
            <div className="bg-black bg-opacity-20 p-6 rounded-lg border border-gray-700">
              <h3 className="text-sm font-semibold mb-2">Polish the cards</h3>
              <p className="text-sm text-gray-300">Built anticipation, then a clear result that feels smart and magical.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="aspect-video bg-black bg-opacity-30 rounded-lg flex items-center justify-center mb-12">
            {/* Placeholder for Norton Genie screenshot/mockup */}
            <p className="text-gray-400">Norton Genie App Screenshot</p>
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
                  <div className="metric-number">1M+</div>
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
                  <div className="metric-number">3</div>
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
                  <div className="metric-number">98%</div>
                  <div className="metric-label">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <div className="aspect-[9/16] bg-black bg-opacity-30 rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-400">Phone Mockup 1</p>
              </div>
              <p className="text-sm text-gray-400">
                Hello screen with the orb assistant ready to help
              </p>
            </div>
            <div>
              <div className="aspect-[9/16] bg-black bg-opacity-30 rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-400">Phone Mockup 2</p>
              </div>
              <p className="text-sm text-gray-400">
                Last week I flagged 23,735 scams. I'm getting better at this every day!
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-4">Like magic, Genie will detect possible scams in seconds</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="aspect-[9/16] bg-gray-900 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Scam Detection Screen</p>
              </div>
              <div>
                <p className="text-base mb-6">
                  The orb animation provides visual feedback as Genie analyzes text for potential scams. The animation is carefully designed to convey intelligence and processing without feeling mechanical.
                </p>
                <p className="text-base">
                  When a scam is detected, the UI transitions to a clear warning with actionable advice, maintaining the magical feel while providing serious security information.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-4">Get tips on what to do next & ask Genie your follow up questions</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Diagnostics Screen</p>
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Recommendations Screen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="py-16 border-t border-gray-700 bg-black bg-opacity-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Let's work together</h2>
          <Button href="/contact" variant="primary">Get in touch</Button>
        </div>
      </section>
    </div>
  );
}