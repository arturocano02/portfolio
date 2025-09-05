import React from 'react';
import Button from '../../components/Button';
import Badge from '../../components/Badge';

export default function AmazonCaseStudy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-400">using AI to automate the boring tasks</span>
          </h1>
          <p className="text-xl mb-8">During my time at Amazon I built AI tools and systems to automate boring and repetitive manual tasks, saving time and increasing team efficiency.</p>
          
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
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-orange-500 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-2">Automated Business Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm mb-4">Created intelligent agents to significantly reduce the time spent on manually summarizing Business Reviews (BRs).</p>
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-number">10+</div>
                    <div className="metric-label">Hours Saved</div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm mb-4">Developed an AI powered system to process and analyze large amounts of data, saving time and improving accuracy.</p>
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-number">50%</div>
                    <div className="metric-label">Error Reduction</div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm mb-4">Implemented automated data extraction and visualization for faster insights and decision making.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black bg-opacity-20 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-bold mb-2">Slack Bot Automation</h3>
              <p className="text-sm mb-4">Built a system that automatically responds to common queries, routes information to the right people, and simplifies team workflows.</p>
              <div className="flex justify-between">
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-number">4+</div>
                    <div className="metric-label">Tools Created</div>
                  </div>
                </div>
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-number">75%</div>
                    <div className="metric-label">Efficiency Gain</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black bg-opacity-20 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-bold mb-2">Leadership Briefing Automation</h3>
              <p className="text-sm mb-4">Created an AI system that automatically generates executive summaries from lengthy reports, highlighting key metrics and insights.</p>
              <div className="flex justify-between">
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-number">15</div>
                    <div className="metric-label">Minutes Saved</div>
                  </div>
                </div>
                <div className="metric-pill">
                  <div className="metric-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="metric-number">80%</div>
                    <div className="metric-label">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Newsletter Automation</h2>
            <div className="bg-blue-100 bg-opacity-10 p-6 rounded-lg border border-blue-200 border-opacity-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-bold mb-2">Problem</h4>
                  <p className="text-sm mb-4">Team members spent a lot of time manually compiling newsletters. The digest of new content was time-consuming to produce.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-2">Solution</h4>
                  <p className="text-sm mb-4">Built a custom automation that scans repositories for changes, summarizes key updates, and formats them into a digestible newsletter.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-2">Impact</h4>
                  <p className="text-sm mb-4">Doubled the frequency of updates while reducing the time spent creating them by 60%, improving team communication.</p>
                  <div className="flex gap-4">
                    <div className="bg-blue-500 bg-opacity-20 rounded p-2">
                      <span className="text-sm font-bold">2x frequency</span>
                    </div>
                    <div className="bg-blue-500 bg-opacity-20 rounded p-2">
                      <span className="text-sm font-bold">60% time saved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-6">Some of the highlights, including sort center visit</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="aspect-square bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Amazon Work Image {idx}</p>
              </div>
            ))}
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