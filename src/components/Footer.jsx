import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Terminal className="text-orange-500" size={20} />
          <span className="text-orange-500">&lt;</span>
          <span>Abhijith.dev</span>
          <span className="text-orange-500">/&gt;</span>
        </div>
        <div className="text-slate-400 text-sm">
          Designed & Built with React • © 2025
        </div>
      </div>
    </footer>
  );
}