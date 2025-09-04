import React from 'react';
import './globals.css';
import MagneticGridBackground from '../components/MagneticGridBackground';
import Header from '../components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Arturo Cano | Portfolio</title>
        <meta name="description" content="Arturo Cano - Designing and implementing AI products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <MagneticGridBackground />
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}