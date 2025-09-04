import React from 'react';
import Button from '../../components/Button';
import ScrollIndicator from '../../components/ScrollIndicator';

export default function AmazonPage() {
  return (
    <>
      {/* Hero Section - Full viewport */}
      <section className="section-full">
        <div className="glass py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">using AI to automate the boring tasks</h1>
          <p className="text-xl">During my time at Amazon I built AI tools and systems to automate repetitive work, saving time and increasing efficiency.</p>
        </div>
        <ScrollIndicator targetId="tool-1" />
      </section>

      {/* Tool Sections - One per viewport */}
      <section className="section-full" id="tool-1">
        <div className="glass-card max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Automated Business Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Problem</h3>
              <p className="text-gray-300 text-lg">Project Managers spent significant time turning weekly reviews into monthly and quarterly reports.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Insight</h3>
              <p className="text-gray-300 text-lg">Most content was a summary of past work, which AI could assemble.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Solution</h3>
              <p className="text-gray-300 text-lg">I built a tool that aggregates and synthesises information from weekly reviews into MBRs and QBRs automatically.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="badge">10+ hours saved per week</span>
            <span className="badge">50% reduction in reporting time</span>
          </div>
        </div>
        <ScrollIndicator targetId="tool-2" />
      </section>

      <section className="section-full" id="tool-2">
        <div className="glass-card max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Slack Bot Automation</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Problem</h3>
              <p className="text-gray-300 text-lg">Chasing weekly updates created unnecessary back-and-forth.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Insight</h3>
              <p className="text-gray-300 text-lg">A bot could validate inputs and request missing fields.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Solution</h3>
              <p className="text-gray-300 text-lg">I built a Slack bot that pings teammates, checks for required fields and suggests follow-ups.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="badge">4+ hours saved weekly</span>
            <span className="badge">75% reduction in manual follow-ups</span>
          </div>
        </div>
        <ScrollIndicator targetId="tool-3" />
      </section>

      <section className="section-full" id="tool-3">
        <div className="glass-card max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Leadership Briefing Automation</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Problem</h3>
              <p className="text-gray-300 text-lg">Preparing leadership highlights after every meeting was stressful and error-prone.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Insight</h3>
              <p className="text-gray-300 text-lg">The highlights already existed in team documents.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Solution</h3>
              <p className="text-gray-300 text-lg">I built a tool that extracts highlights and flags missing information so managers are always prepared.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="badge">15 minutes average prep time</span>
            <span className="badge">80% reduction in pre-briefing follow-ups</span>
          </div>
        </div>
        <ScrollIndicator targetId="tool-4" />
      </section>

      <section className="section-full" id="tool-4">
        <div className="glass-card max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Newsletter Automation</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Problem</h3>
              <p className="text-gray-300 text-lg">Converting MBRs into newsletters was manual and visually weak.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Insight</h3>
              <p className="text-gray-300 text-lg">Clear highlights improve engagement.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Solution</h3>
              <p className="text-gray-300 text-lg">I built a generator that converts MBRs and applies a refined template.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="badge">2x increase in leadership readership</span>
            <span className="badge">60% fewer clarification emails</span>
          </div>
        </div>
        <ScrollIndicator targetId="tool-5" />
      </section>

      <section className="section-full" id="tool-5">
        <div className="glass-card max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Interactive Stakeholder Map</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Problem</h3>
              <p className="text-gray-300 text-lg">New and existing employees struggled to see the web of teams and responsibilities.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Insight</h3>
              <p className="text-gray-300 text-lg">A living map communicates structure better than a static doc.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Solution</h3>
              <p className="text-gray-300 text-lg">I built a dynamic stakeholder map that clarifies RACI roles and improves onboarding.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="badge">80% increase in new-joiner understanding</span>
            <span className="badge">95% team adoption</span>
          </div>
        </div>
        <ScrollIndicator targetId="cta" />
      </section>

      {/* Footer CTA - Full viewport */}
      <section className="section-full flex items-center justify-center" id="cta">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to automate your workflow?</h2>
          <Button href="/contact" variant="primary">Let's work together</Button>
        </div>
      </section>
    </>
  );
}