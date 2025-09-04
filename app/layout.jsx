import React from 'react';
import './globals.css';
import MagneticGridBackground from '../components/MagneticGridBackground';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="text-white min-h-screen relative overflow-x-hidden">
        <MagneticGridBackground />
        <Header />
        <main className="min-h-screen relative z-10">
          <div className="main-container">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

function Header(){
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white no-underline">Arturo Cano</a>
        <nav className="flex items-center space-x-6">
          <a href="/" className="text-white hover:underline">Projects</a>
          <a href="/cv" className="text-white hover:underline">CV</a>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">Contact</button>
        </nav>
      </div>
    </header>
  );
}
