import React from 'react';
import './globals.css';
import SimpleGradientBackground from '../components/SimpleGradientBackground';
import Header from '../components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Arturo Cano | Portfolio</title>
        <meta name="description" content="Arturo Cano - Designing and implementing AI products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', () => {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                  }
                });
              }, { threshold: 0.1 });
              
              document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
              });
            });
          `
        }} />
      </head>
      <body>
        <SimpleGradientBackground />
        <Header />
        <main className="min-h-screen pt-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}