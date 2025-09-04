export default function NortonPage(){ return (
  <main className="p-6" aria-label="Norton content">
    <blockquote className="text-xl italic mb-4">make my product feel smart and magical</blockquote>
    <h2 className="text-2xl font-semibold mb-2">What I did for Norton Genie</h2>
    <section aria-label="Section 1" className="mb-4">
      <h3 className="text-xl font-semibold">Research the magic</h3>
      <p>I studied how AI products earn trust. People feel an assistant is “alive” when timing, feedback and motion create a sense of presence.</p>
    </section>
    <section aria-label="Section 2" className="mb-4">
      <h3 className="text-xl font-semibold">Design the orb</h3>
      <p>I explored more than fifty variations of the orb assistant and refined the motion and light until it felt helpful and confident.</p>
    </section>
    <section aria-label="Section 3" className="mb-4">
      <h3 className="text-xl font-semibold">Polish the wow</h3>
      <p>I designed scan animations that build anticipation and deliver clear results so the product feels magical rather than mechanical.</p>
    </section>
    <section aria-label="Product blurb" className="mb-4">
      <h3 className="text-xl font-semibold">Your personal AI-powered scam detector</h3>
      <p>Hello If you are worried about a scam, I am here to help. Paste a message or upload a screenshot and I will analyse it.</p>
      <p>Last week we flagged more than 23 725 scams. You can run scans every week even without an account.</p>
    </section>
    <section aria-label="Follow-up" className="mb-4">
      <h3 className="text-xl font-semibold">Get tips on what to do next and ask Genie follow up questions</h3>
      <ul className="list-disc pl-6">
        <li>Change your passwords.</li>
        <li>Enable two factor authentication.</li>
        <li>Report suspicious senders.</li>
      </ul>
    </section>
    <footer>
      <button className="bg-red-600 text-white px-4 py-2 rounded">Let’s work together</button>
    </footer>
  </main>
); }
