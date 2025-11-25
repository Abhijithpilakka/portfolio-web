import React from 'react';
import { Terminal, ArrowRight, ArrowDown } from 'lucide-react';

export default function Navigation() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50  backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold flex items-center gap-2">
          <Terminal className="text-orange-500" size={24} />
          <span className="text-orange-500">&lt;</span>
          <span className="text-white">Abhijith.dev</span>
          <span className="text-orange-500">/&gt;</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm">
          {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <a
          href="/Abhijith_Resume.pdf"
          download
          className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-full text-sm font-semibold transition-all flex items-center gap-2"
        >
          Resume
          <ArrowDown size={16} />
        </a>
      </div>
    </nav>
  );
}