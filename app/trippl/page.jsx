import React from 'react';
import Button from '../../components/Button';
import ScrollIndicator from '../../components/ScrollIndicator';

export default function TripplPage() {
  return (
    <>
      {/* Hero Section - Full viewport */}
      <section className="section-full">
        <div className="glass py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Built an app with real social impact</h1>
          <p className="text-xl mb-8">My female friends felt unsafe and often spent too much on rides alone at night. During my Master's, I launched a platform that matches people travelling the same way to make urban transit safe and affordable.</p>
          <div className="flex gap-4">
            <Button href="#" variant="primary">Download App</Button>
            <Button href="/contact" variant="outline">Get Involved</Button>
          </div>
        </div>
        <ScrollIndicator targetId="what-i-did" />
      </section>

      {/* "What I did" Cards - Full viewport */}
      <section className="section-full" id="what-i-did">
        <h2 className="text-3xl font-semibold mb-8 text-center">What I did</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card">
            <h3 className="text-2xl font-semibold mb-4">Launched in the real world</h3>
            <p className="text-lg">We ran live pilots, partnered with venues and gathered real-world feedback to shape the product.</p>
          </div>

          <div className="glass-card">
            <h3 className="text-2xl font-semibold mb-4">Built the core algorithm</h3>
            <p className="text-lg">I designed the matching algorithm so sharing rides is always cheaper. We used ideas like Shapley Values to keep matches fair.</p>
          </div>

          <div className="glass-card">
            <h3 className="text-2xl font-semibold mb-4">Created, tested and iterated the design</h3>
            <p className="text-lg">I owned UX and UI, interviewing users and refining flows through continuous testing.</p>
          </div>
        </div>
        <ScrollIndicator targetId="story" />
      </section>

      {/* Story Block - Full viewport */}
      <section className="section-full" id="story">
        <div className="glass py-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">the story of my first venture</h2>
          <p className="text-xl mb-6">We started from a simple observation. Friends felt unsafe travelling alone at night. We surveyed and interviewed women, then prototyped and tested quickly.</p>
          <p className="text-xl">We ran pilots in London venues and reached around five hundred beta users. We pitched at competitions, including Samsung's Solve for Tomorrow, and kept iterating. The platform is still active.</p>
        </div>
        <ScrollIndicator targetId="cta" />
      </section>

      {/* Footer CTA - Full viewport */}
      <section className="section-full flex items-center justify-center" id="cta">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to build something impactful?</h2>
          <Button href="/contact" variant="primary">Let's work together</Button>
        </div>
      </section>
    </>
  );
}