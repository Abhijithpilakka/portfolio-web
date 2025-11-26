import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl ">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        {/* Logo with Favicon */}
        <div className="flex items-center gap-2 md:gap-3">
          <img 
            src="/A3.png" 
            alt="Logo" 
            className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
          />
        </div>
        
        <div className="hidden md:flex gap-6 lg:gap-8 text-sm">
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
          className="px-4 py-2 md:px-6 md:py-2 bg-orange-500 hover:bg-orange-600 rounded-full text-xs md:text-sm font-semibold transition-all flex items-center gap-1 md:gap-2"
        >
          <span className="hidden sm:inline">Resume</span>
          <span className="sm:hidden">Resume</span>
          <ArrowDown size={14} className="md:w-4 md:h-4" />
        </a>
      </div>
    </nav>
  );
}
