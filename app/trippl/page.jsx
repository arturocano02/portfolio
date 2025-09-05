import React from 'react';
import Button from '../../components/Button';
import Badge from '../../components/Badge';

export default function TripplCaseStudy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-purple-400">Built an app with</span><br/>
            <span className="text-purple-400">real social impact</span>
          </h1>
          <p className="text-xl mb-8">My female friends felt unsafe and often spent too much on taxis alone at night. During my Master's, I launched a platform that matches people traveling the same way to make urban transit safe and affordable.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="metric-pill">
              <div className="metric-icon">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
                </svg>
              </div>
              <div>
                <div className="metric-number">6</div>
                <div className="metric-label">Live Pilots</div>
              </div>
            </div>
            
            <div className="metric-pill">
              <div className="metric-icon">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <div>
                <div className="metric-number">500+</div>
                <div className="metric-label">Beta Users</div>
              </div>
            </div>
            
            <div className="metric-pill">
              <div className="metric-icon">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div className="metric-number">4</div>
                <div className="metric-label">Partnerships</div>
              </div>
            </div>
          </div>
          
          <Button href="#details" variant="outline" className="text-purple-400 hover:text-white">
            See details
          </Button>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="aspect-video bg-black bg-opacity-30 rounded-lg flex items-center justify-center mb-12">
            {/* Placeholder for Trippl video */}
            <div className="flex flex-col items-center justify-center">
              <svg className="w-16 h-16 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-400 mt-2">Video Placeholder</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What I Did Section */}
      <section id="details" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">what I did</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-purple-900 bg-opacity-50 p-6 rounded-lg border border-purple-800">
              <h3 className="text-sm font-semibold mb-2">Built the core algorithm</h3>
              <p className="text-sm text-gray-300 mb-4">Designed and coded the algorithm to match users based on their routes and timing, ensuring optimal pairings.</p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-800 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-purple-800 px-2 py-1 rounded">Firebase</span>
              </div>
            </div>
            <div className="bg-purple-900 bg-opacity-50 p-6 rounded-lg border border-purple-800">
              <h3 className="text-sm font-semibold mb-2">Created, tested and iterated the design</h3>
              <p className="text-sm text-gray-300 mb-4">Created the full UI and UX flow using feedback from user testing groups to refine the design.</p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-800 px-2 py-1 rounded">Figma</span>
                <span className="text-xs bg-purple-800 px-2 py-1 rounded">UserTesting</span>
              </div>
            </div>
            <div className="bg-purple-900 bg-opacity-50 p-6 rounded-lg border border-purple-800">
              <h3 className="text-sm font-semibold mb-2">Launched in the real world</h3>
              <p className="text-sm text-gray-300 mb-4">Ran live pilots in venues across London helping students get home safely with real-time matching, verification and guidance.</p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-800 px-2 py-1 rounded">React Native</span>
                <span className="text-xs bg-purple-800 px-2 py-1 rounded">Expo</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">the story of my first venture</h2>
          
          <p className="text-base mb-6">
            I launched Trippl, with my co-founder Theo Bot, during our final year of Design Engineering at Imperial. The idea came after watching my friends, mostly women, trying to get home safely after a night out. Many of them were on a tight budget, so a lot of money had been spent because they didn't feel safe walking or using public transport.
          </p>
          
          <p className="text-base mb-6">
            After running 6 campus trials with 500+ students and an app store soft launch, we realized this was a real problem worth solving. We were invited to pitch at Imperial Enterprise Lab competitions (3 of which we won) and were offered a place in their incubator. At the start it was simple, just a team matching algorithm and an email interface. I kept iterating. I talked to groups who'd experienced what we were trying to solve, and what would make them safer. Eventually, we had a product that matched people based on their route, verified their student status, and helped them find others who to travel with.
          </p>
          
          <p className="text-base mb-12">
            We set up our pilots. Six venues across London agreed to trial Trippl. I negotiated partnerships, printed posters, and created a marketing plan. We launched with 500 people across the trials. We had a custom-built matching algorithm that matched students and shared rides home.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="aspect-square bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Trippl Image {idx}</p>
              </div>
            ))}
          </div>
          
          <p className="text-base mb-6">
            At the same time, I was pitching. Trippl reached the UK Top 5 of campaigns made for Tomorrow and several targeted startup competitions. I also pitched to UCL, Angel investors, and accelerator programs. Sadly, but importantly, we realized that the business model wasn't viable in the long run without significant funding.
          </p>
          
          <p className="text-base mb-12">
            This journey led me to realize that products built using the app on their phones. Realtime at venues, friends full of people at each venue, each with their own phone. How these friends interact is a design model that's worth exploring. This is a design model that's worth exploring. This is a design model that's a product tested in the world, with students relying on it to get home safe.
          </p>
          
          <div className="aspect-video bg-black bg-opacity-30 rounded-lg flex items-center justify-center mb-12">
            <p className="text-gray-400">Trippl App Demo</p>
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