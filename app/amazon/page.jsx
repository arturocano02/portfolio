export default function AmazonPage(){
  return (
    <main className="p-6" aria-label="Amazon content">
      <section className="mb-6">
        <h1 className="text-3xl font-semibold">using AI to automate the boring tasks</h1>
        <p className="mt-2">During my time at Amazon I built AI tools and systems to automate repetitive work, saving time and increasing efficiency.</p>
      </section>
      <section aria-label="Automated Business Reviews" className="mb-6">
        <h2 className="text-2xl font-semibold">Automated Business Reviews</h2>
        <p className="mt-2">Project Managers spent significant time turning weekly reviews into monthly and quarterly reports. AI could assemble a summary of past work.</p>
        <p className="mt-2 text-sm text-gray-300">Stats: 10+ hours saved per week, 50% reduction in reporting time.</p>
      </section>
      <section aria-label="Slack Bot Automation" className="mb-6">
        <h2 className="text-2xl font-semibold">Slack Bot Automation</h2>
        <p className="mt-2">Chasing weekly updates created unnecessary back-and-forth. A bot could validate inputs and request missing fields.</p>
        <p className="mt-2 text-sm text-gray-300">Stats: 4+ hours saved weekly, 75% reduction in manual follow-ups.</p>
      </section>
      <section aria-label="Leadership Briefing" className="mb-6">
        <h2 className="text-2xl font-semibold">Leadership Briefing Automation</h2>
        <p className="mt-2">Preparing leadership highlights after every meeting was stressful and error-prone. Highlights existed in team docs.</p>
        <p className="mt-2 text-sm text-gray-300">Stats: 15 minutes avg prep time, 80% reduction in pre-briefing follow-ups.</p>
      </section>
      <section aria-label="Newsletter" className="mb-6">
        <h2 className="text-2xl font-semibold">Newsletter Automation</h2>
        <p className="mt-2">Converting MBRs into newsletters was manual and visually weak. Clear highlights improve engagement.</p>
        <p className="mt-2 text-sm text-gray-300">Stats: 2x leadership readership, 60% fewer clarification emails.</p>
      </section>
      <section aria-label="Interactive Map" className="mb-6">
        <h2 className="text-2xl font-semibold">Interactive Stakeholder Map</h2>
        <p className="mt-2">A living map communicates structure better than a static doc.</p>
        <p className="mt-2 text-sm text-gray-300">Stats: 80% increase in new-joiner understanding, 95% team adoption.</p>
      </section>
      <footer>
        <button className="bg-red-600 text-white px-4 py-2 rounded">Let’s work together</button>
      </footer>
    </main>
  );
}
