export default function ContactPage(){
  return (
    <main className="p-6" aria-label="Contact content">
      <h1 className="text-3xl font-semibold">Let’s work together</h1>
      <p className="mt-2">I am open to full-time roles and selected freelance collaborations.</p>
      <p className="mt-2">Email: <a href="mailto:you@example.com" className="underline text-red-400">you@example.com</a></p>
      <div className="flex space-x-4 mt-2">
        <span className="w-6 h-6 bg-gray-700 rounded-full" aria-label="LinkedIn" />
        <span className="w-6 h-6 bg-gray-700 rounded-full" aria-label="Instagram" />
      </div>
    </main>
  );
}
