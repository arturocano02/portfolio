export default function CVPage(){
  return (
    <main className="p-6" aria-label="CV content">
      <h1 className="text-3xl font-semibold">CV</h1>
      <p className="mt-2">Download my résumé or email me for a tailored version.</p>
      <div className="mt-4 space-x-2">
        <a href="#" className="bg-red-600 text-white px-4 py-2 rounded">Download PDF</a>
        <a href="mailto:you@example.com" className="bg-transparent border border-white text-white px-4 py-2 rounded">Email me</a>
      </div>
    </main>
  );
}
