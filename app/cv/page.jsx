import React from 'react';
import Button from '../../components/Button';

export default function CVPage() {
  return (
    <div className="section-full flex items-center justify-center">
      <div className="glass max-w-2xl mx-auto text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">CV</h1>
        <p className="text-xl mb-12">Download my résumé or email me for a tailored version.</p>
        <div className="flex justify-center gap-6">
          <Button href="#" variant="primary">Download PDF</Button>
          <Button href="mailto:you@example.com" variant="outline">Email me</Button>
        </div>
      </div>
    </div>
  );
}