import React from 'react';
import Image from 'next/image';
import Button from '../../components/Button';
import Badge from '../../components/Badge';

"use client";

export default function TripplCaseStudy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-purple-400">Built an app with</span><br/>
                <span className="text-purple-400">real social impact</span>
              </h1>
              <p className="text-xl mb-8">My female friends felt unsafe and often spent too much on taxis alone at night. During my Master's, I launched a platform that matches people traveling the same way to make urban transit safe and affordable.</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button href="#video" variant="primary" className="bg-purple-600 hover:bg-purple-700">
                  Watch Demo
                </Button>
                <Button href="#details" variant="outline" className="text-purple-400 hover:text-white border-purple-400 hover:border-white">
                  See Case Study
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="glass rounded-lg overflow-hidden h-full">
                <iframe 
                  src="https://trippl.co.uk" 
                  title="Trippl Website"
                  className="w-full h-[500px] border-0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section id="video" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="aspect-video rounded-lg overflow-hidden mb-12 relative glass">
            <iframe 
              src="https://www.youtube.com/embed/bHCXWi60BKU?autoplay=1&controls=1" 
              title="Trippl Demo Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
              <p className="text-white text-sm">what I did</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Did Section */}
      <section id="details" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">what I did</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-800 to-purple-600 p-6 rounded-lg">
              <h3 className="text-sm font-semibold mb-2">Built the core algorithm</h3>
              <p className="text-sm text-gray-100 mb-4">Designed and coded the algorithm to match users based on their routes and timing, ensuring optimal pairings.</p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-900 bg-opacity-50 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-purple-900 bg-opacity-50 px-2 py-1 rounded">Firebase</span>
              </div>
              <div className="mt-4">
                <button className="text-xs text-white hover:underline">Learn more</button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-800 to-purple-600 p-6 rounded-lg">
              <h3 className="text-sm font-semibold mb-2">Created, tested and iterated the design</h3>
              <p className="text-sm text-gray-100 mb-4">Created the full UI and UX flow using feedback from user testing groups to refine the design.</p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-900 bg-opacity-50 px-2 py-1 rounded">Figma</span>
                <span className="text-xs bg-purple-900 bg-opacity-50 px-2 py-1 rounded">UserTesting</span>
              </div>
              <div className="mt-4">
                <button className="text-xs text-white hover:underline">Learn more</button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-800 to-purple-600 p-6 rounded-lg">
              <h3 className="text-sm font-semibold mb-2">Launched in the real world</h3>
              <p className="text-sm text-gray-100 mb-4">Ran live pilots in venues across London helping students get home safely with real-time matching, verification and guidance.</p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-900 bg-opacity-50 px-2 py-1 rounded">React Native</span>
                <span className="text-xs bg-purple-900 bg-opacity-50 px-2 py-1 rounded">Expo</span>
              </div>
              <div className="mt-4">
                <button className="text-xs text-white hover:underline">Learn more</button>
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
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image 
                src="/images/trippl/Enter_ride.png"
                alt="Trippl App Enter Ride Screen"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image 
                src="/images/trippl/loading_screen.png"
                alt="Trippl App Loading Screen"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image 
                src="/images/trippl/north.png"
                alt="Trippl App North Screen"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image 
                src="/images/trippl/bathroom.png"
                alt="Trippl Event Location"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image 
                src="/images/trippl/Meeting point.png"
                alt="Trippl Meeting Point"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image 
                src="/images/trippl/prize.JPG"
                alt="Trippl Prize Ceremony"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <p className="text-base mb-6">
            At the same time, I was pitching. Trippl reached the UK Top 5 of campaigns made for Tomorrow and several targeted startup competitions. I also pitched to UCL, Angel investors, and accelerator programs. Sadly, but importantly, we realized that the business model wasn't viable in the long run without significant funding.
          </p>
          
          <p className="text-base mb-12">
            This journey led me to realize that products built for safety need to be tested in the real world. Realtime at venues, friends full of people at each venue, each with their own phone. How these friends interact is a design model that's worth exploring. This was a product tested in the world, with students relying on it to get home safe.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="aspect-[9/16] rounded-lg overflow-hidden">
              <video 
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster="/images/trippl/Enter_ride.png"
              >
                <source 
                  src="/images/trippl/pitch_outside.MOV" 
                  type="video/quicktime" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="aspect-[9/16] rounded-lg overflow-hidden">
              <video 
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster="/images/trippl/loading_screen.png"
              >
                <source 
                  src="/images/trippl/protest.MOV" 
                  type="video/quicktime" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
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
            
            <div className="metric-pill">
              <div className="metric-icon">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div className="metric-number">3</div>
                <div className="metric-label">Awards</div>
              </div>
            </div>
          </div>
          
          {/* Partner Logos */}
          <h3 className="text-xl font-bold mb-6">Partners & Collaborators</h3>
          <div className="flex flex-wrap items-center gap-8 mb-12">
            <div className="h-12 flex items-center justify-center">
              <span className="text-indigo-600 font-bold text-xl">IMPERIAL</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-purple-400 font-bold text-xl">UCL</span>
            </div>
            <div className="h-12 flex items-center justify-center glass px-4 py-2 rounded-lg">
              <span className="font-medium">Imperial Enterprise Lab</span>
            </div>
            <div className="h-12 flex items-center justify-center glass px-4 py-2 rounded-lg">
              <span className="font-medium">Venture Catalyst Challenge</span>
            </div>
          </div>
          
          {/* App Link */}
          <div className="flex items-center gap-4 mb-12">
            <a href="https://trippl.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 glass px-4 py-3 rounded-lg hover:bg-purple-900 hover:bg-opacity-20 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
              </svg>
              <span className="font-medium">Visit Trippl Website</span>
            </a>
            <div className="flex items-center gap-2 glass px-4 py-3 rounded-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
              <span className="font-medium">App Available on iOS & Android</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 border-t border-gray-700 glass">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Let's work together</h2>
          <Button href="/contact" variant="primary" className="bg-purple-600 hover:bg-purple-700">Get in touch</Button>
        </div>
      </section>
    </div>
  );
}