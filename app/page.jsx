import React from 'react';
import Button from '../components/Button';
import Badge from '../components/Badge';
import FeatureCard from '../components/FeatureCard';
import CaseStudyCard from '../components/CaseStudyCard';
import ScrollIndicator from '../components/ScrollIndicator';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full viewport height */}
      <section className="section-full" id="hero">
        <div className="glass hero">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            designing and implementing AI products
          </h1>
          <p className="text-xl mb-8">a London based 23 year old</p>
          <div className="flex gap-4">
            <Button href="/contact" variant="primary">Work with me</Button>
            <Button href="/cv" variant="outline">CV</Button>
          </div>
        </div>
        <ScrollIndicator targetId="partners" />
      </section>

      {/* Partners Strip - Compact section */}
      <section className="section-compact" id="partners">
        <div className="glass">
          <h2 className="text-2xl font-semibold mb-8">Who I have worked with</h2>
          <div className="partners-strip">
            {['Else', 'Amazon', 'Norton', 'Imperial Enterprise Lab', 'Placeholder 1', 'Placeholder 2'].map((name, idx) => (
              <div key={idx} className="partner-logo glass flex items-center justify-center h-16 px-6">
                {name}
              </div>
            ))}
          </div>
        </div>
        <ScrollIndicator targetId="norton-feature" />
      </section>

      {/* Feature Blocks - One per viewport */}
      <section className="section-full" id="norton-feature">
        <div className="glass-card">
          <div className="text-sm uppercase tracking-wide text-gray-400 mb-3">make AI feel magical</div>
          <h2 className="text-3xl font-semibold mb-4">Norton Genie scam detection</h2>
          <p className="text-lg mb-6">I led interaction and UI for Norton Genie's scam-detection experience. I designed the signature orb assistant and the results banner so the product feels smart, magical and trustworthy.</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge text="1 million plus users" />
            <Badge text="Award" />
            <Badge text="Creativity" />
          </div>
          <Button href="/norton" variant="outline" className="text-accent hover:text-white">
            View Case Study →
          </Button>
        </div>
        <ScrollIndicator targetId="amazon-feature" />
      </section>

      <section className="section-full" id="amazon-feature">
        <div className="glass-card">
          <div className="text-sm uppercase tracking-wide text-gray-400 mb-3">automate the boring tasks</div>
          <h2 className="text-3xl font-semibold mb-4">Amazon internal AI tools</h2>
          <p className="text-lg mb-6">During my time at Amazon I built AI tools and systems to automate boring and repetitive manual work, saving time and increasing team efficiency.</p>
          <Button href="/amazon" variant="outline" className="text-accent hover:text-white">
            View Case Study →
          </Button>
        </div>
        <ScrollIndicator targetId="trippl-feature" />
      </section>

      <section className="section-full" id="trippl-feature">
        <div className="glass-card">
          <div className="text-sm uppercase tracking-wide text-gray-400 mb-3">ship and test in the real world</div>
          <h2 className="text-3xl font-semibold mb-4">Trippl safer shared travel</h2>
          <p className="text-lg mb-6">I co-founded Trippl, a platform that matches people travelling the same way so they can share rides more safely and affordably. We ran real pilots and iterated in public.</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge text="6 pilots" />
            <Badge text="4 partnerships" />
            <Badge text="500 beta users" />
          </div>
          <Button href="/trippl" variant="outline" className="text-accent hover:text-white">
            View Case Study →
          </Button>
        </div>
        <ScrollIndicator targetId="case-studies" />
      </section>

      {/* Case Study Cards - Full section */}
      <section className="section-full" id="case-studies">
        <h2 className="text-3xl font-semibold mb-8 text-center">More Projects</h2>
        <div className="feature-grid">
          <CaseStudyCard
            title="Good Engine"
            subtitle="AI-powered T and Cs"
            problem="Terms and conditions are long and hard to parse, so most people only read a small part."
            insight="Readers look for the few lines that matter to them."
            solution="A generative tool that highlights the key commitments and surfaces the most important points instantly."
          />

          <CaseStudyCard
            title="EasyJet"
            subtitle="Finding new airline value"
            problem="Airlines have fixed seats and variable demand, so unused opportunities are easy to miss."
            insight="AI can locate undervalued capacity and moments to improve margin."
            solution="An AI-supported concept that simplifies choices for travellers while improving profitability."
          />

          <CaseStudyCard
            title="Base360.AI"
            subtitle="Clear terms, less friction"
            problem="Rental operations teams struggled with dense policy text."
            insight="Fast comprehension improves decisions."
            solution="An AI-powered summary and highlight layer for critical clauses."
          />
        </div>
        <ScrollIndicator targetId="contact" />
      </section>

      {/* Footer - Full section */}
      <section className="section-full" id="contact">
        <div className="glass">
          <h2 className="text-3xl font-semibold mb-6">Let's work together</h2>
          <p className="text-xl mb-8">I'm available for new opportunities and collaborations.</p>
          <p className="mb-6">
            <a href="mailto:you@example.com" className="text-accent hover:underline text-lg">
              you@example.com
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