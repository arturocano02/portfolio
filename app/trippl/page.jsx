export default function TripplPage(){
  return (
    <main className="p-6" aria-label="Trippl content">
      <section className="mb-6">
        <h1 className="text-3xl font-semibold">Built an app with real social impact</h1>
        <p className="mt-2">My female friends felt unsafe and often spent too much on rides alone at night. During my Master’s, I launched a platform that matches people travelling the same way to make urban transit safe and affordable.</p>
        <div className="mt-4">
          <a href="/trippl" className="bg-transparent border border-white text-white px-4 py-2 rounded mr-2">Download App</a>
          <a href="/contact" className="bg-red-600 text-white px-4 py-2 rounded">Get Involved</a>
        </div>
      </section>
      <section aria-label="What I did" className="grid md:grid-cols-3 gap-6 mb-6">
        <article>
          <h3 className="font-semibold">Launched in the real world</h3>
          <p className="mt-2">We ran live pilots, partnered with venues and gathered real-world feedback to shape the product.</p>
        </article>
        <article>
          <h3 className="font-semibold">Built the core algorithm</h3>
          <p className="mt-2">I designed the matching algorithm so sharing rides is always cheaper. We used ideas like Shapley Values to keep matches fair.</p>
        </article>
        <article>
          <h3 className="font-semibold">Created, tested and iterated the design</h3>
          <p className="mt-2">I owned UX and UI, interviewing users and refining flows through continuous testing.</p>
        </article>
      </section>
      <section aria-label="Story" className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">the story of my first venture</h2>
        <p>We started from a simple observation. Friends felt unsafe travelling alone at night. We surveyed and interviewed women, then prototyped and tested quickly.</p>
        <p className="mt-2">We ran pilots in London venues and reached around five hundred beta users. We pitched at competitions, including Samsung’s Solve for Tomorrow, and kept iterating. The platform is still active.</p>
      </section>
      <footer>
        <button className="bg-red-600 text-white px-4 py-2 rounded">Let’s work together</button>
      </footer>
    </main>
  );
}
