import React from 'react';

export default function HomePage(){
  return (
    <section className="p-6" aria-label="Home content">
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold tracking-tight">designing and implementing AI products</h1>
        <p className="text-lg mt-2">a London based 23 year old</p>
        <div className="mt-4 flex gap-4">
          <a href="/contact" className="bg-transparent border border-white text-white px-4 py-2 rounded">Work with me</a>
          <a href="/cv" className="bg-white text-[#07080a] px-4 py-2 rounded">CV</a>
        </div>
      </header>
      <section aria-label="Partners" className="mb-8">
        <h2 className="text-2xl font-semibold">Who I have worked with</h2>
        <div className="flex flex-wrap items-center mt-4">
          {['Else','Amazon','Norton','Imperial Enterprise Lab','Placeholder 1','Placeholder 2'].map((name, idx)=> (
            <div key={idx} className="mr-4 mb-3 inline-flex items-center justify-center h-10 w-28 bg-gray-800 rounded">{name}</div>
          ))}
        </div>
      </section>

      <section aria-label="Features" className="mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <article>
            <div className="text-sm uppercase tracking-wide text-gray-400">make AI feel magical</div>
            <h3 className="text-xl font-semibold mt-1">Norton Genie scam detection</h3>
            <p className="mt-2">I led interaction and UI for Norton Genie’s scam-detection experience. I designed the signature orb assistant and the results banner so the product feels smart, magical and trustworthy.</p>
            <div className="mt-2 text-sm text-gray-300"> 
              <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded mr-2">1 million plus users</span>
              <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded mr-2">Award</span>
              <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded">Creativity</span>
            </div>
            <a href="/norton" className="mt-3 inline-block text-red-400 hover:underline">View Case Study →</a>
          </article>

          <article>
            <div className="text-sm uppercase tracking-wide text-gray-400">automate the boring tasks</div>
            <h3 className="text-xl font-semibold mt-1">Amazon internal AI tools</h3>
            <p className="mt-2">During my time at Amazon I built AI tools and systems to automate boring and repetitive manual work, saving time and increasing team efficiency.</p>
            <a href="/amazon" className="mt-3 inline-block text-red-400 hover:underline">View Case Study →</a>
          </article>

          <article>
            <div className="text-sm uppercase tracking-wide text-gray-400">ship and test in the real world</div>
            <h3 className="text-xl font-semibold mt-1">Trippl safer shared travel</h3>
            <p className="mt-2">I co-founded Trippl, a platform that matches people travelling the same way so they can share rides more safely and affordably. We ran real pilots and iterated in public.</p>
            <div className="mt-2 text-sm text-gray-300"> 
              <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded mr-2">6 pilots</span>
              <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded mr-2">4 partnerships</span>
              <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded">500 beta users</span>
            </div>
            <a href="/trippl" className="mt-3 inline-block text-red-400 hover:underline">View Case Study →</a>
          </article>
        </div>
      </section>

      <section aria-label="CaseCards" className="grid md:grid-cols-3 gap-6 mb-8">
        <article className="p-4 border rounded bg-[#111]">
          <h4 className="font-semibold">Good Engine</h4>
          <div className="text-sm text-gray-400">AI-powered T and Cs</div>
          <p className="mt-2">Terms and conditions are long and hard to parse, so most people only read a small part.</p>
          <p className="mt-2"><strong>Insight:</strong> Readers look for the few lines that matter to them.</p>
          <p className="mt-2"><strong>Solution:</strong> A generative tool that highlights the key commitments and surfaces the most important points instantly.</p>
        </article>
        <article className="p-4 border rounded bg-[#111]">
          <h4 className="font-semibold">EasyJet</h4>
          <div className="text-sm text-gray-400">Finding new airline value</div>
          <p className="mt-2">Airlines have fixed seats and variable demand, so unused opportunities are easy to miss.</p>
          <p className="mt-2"><strong>Insight:</strong> AI can locate undervalued capacity and moments to improve margin.</p>
          <p className="mt-2"><strong>Solution:</strong> An AI-supported concept that simplifies choices for travellers while improving profitability.</p>
        </article>
        <article className="p-4 border rounded bg-[#111]">
          <h4 className="font-semibold">Base360.AI</h4>
          <div className="text-sm text-gray-400">Clear terms, less friction</div>
          <p className="mt-2">Rental operations teams struggled with dense policy text.</p>
          <p className="mt-2"><strong>Insight:</strong> Fast comprehension improves decisions.</p>
          <p className="mt-2"><strong>Solution:</strong> An AI-powered summary and highlight layer for critical clauses.</p>
        </article>
      </section>

      <footer aria-label="Footer" className="pt-6 border-t border-gray-800 mt-6">
        <h2 className="text-2xl font-semibold mb-2">Let’s work together</h2>
        <p className="mb-2">Email and social icons</p>
        <p><a href="mailto:you@example.com" className="underline text-red-400">you@example.com</a></p>
        <div className="flex space-x-4 mt-2">
          <span className="w-6 h-6 bg-gray-700 rounded-full" aria-label="LinkedIn" />
          <span className="w-6 h-6 bg-gray-700 rounded-full" aria-label="Instagram" />
        </div>
      </footer>
    </section>
  );
}
