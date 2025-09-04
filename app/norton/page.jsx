import React from 'react';
import Button from '../../components/Button';
import ScrollIndicator from '../../components/ScrollIndicator';

export default function NortonPage() {
  return (
    <>
      {/* Top Quote - Full viewport */}
      <section className="section-full">
        <div className="glass py-12">
          <blockquote className="text-4xl md:text-5xl italic font-light mb-6">
            make my product feel smart and magical
          </blockquote>
          <h2 className="text-2xl font-semibold">what I did for Norton Genie</h2>
        </div>
        <ScrollIndicator targetId="research" />
      </section>

      {/* Content Sections - One per viewport */}
      <section className="section-full" id="research">
        <div className="glass-card max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Research the magic</h3>
          <p className="text-xl">I studied how AI products earn trust. People feel an assistant is "alive" when timing, feedback and motion create a sense of presence.</p>
        </div>
        <ScrollIndicator targetId="design" />
      </section>

      <section className="section-full" id="design">
        <div className="glass-card max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Design the orb</h3>
          <p className="text-xl">I explored more than fifty variations of the orb assistant and refined the motion and light until it felt helpful and confident.</p>
        </div>
        <ScrollIndicator targetId="polish" />
      </section>

      <section className="section-full" id="polish">
        <div className="glass-card max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Polish the wow</h3>
          <p className="text-xl">I designed scan animations that build anticipation and deliver clear results so the product feels magical rather than mechanical.</p>
        </div>
        <ScrollIndicator targetId="product" />
      </section>

      {/* Product Blurb - Full viewport */}
      <section className="section-full" id="product">
        <div className="glass py-12">
          <h3 className="text-3xl font-semibold mb-6">Your personal AI-powered scam detector</h3>
          <p className="text-xl mb-6">Hello If you are worried about a scam, I am here to help. Paste a message or upload a screenshot and I will analyse it.</p>
          <p className="text-xl">Last week we flagged more than 23 725 scams. You can run scans every week even without an account.</p>
        </div>
        <ScrollIndicator targetId="followup" />
      </section>

      {/* Follow-up - Full viewport */}
      <section className="section-full" id="followup">
        <div className="glass-card max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Get tips on what to do next and ask Genie follow up questions</h3>
          <ul className="list-disc pl-6 space-y-4 text-xl mb-8">
            <li>Change your passwords.</li>
            <li>Enable two factor authentication.</li>
            <li>Report suspicious senders.</li>
          </ul>
        </div>
        <ScrollIndicator targetId="cta" />
      </section>

      {/* Footer CTA - Full viewport */}
      <section className="section-full flex items-center justify-center" id="cta">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to create something magical?</h2>
          <Button href="/contact" variant="primary">Let's work together</Button>
        </div>
      </section>
    </>
  );
}