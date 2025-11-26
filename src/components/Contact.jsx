import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-orange-500 font-mono text-sm mb-4">Get In Touch</div>
        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          Let's Create Something Amazing Together
        </h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          <a
            href="mailto:abhijithpilakka@gmail.com"
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-full font-semibold transition-all flex items-center gap-2"
          >
            <Mail size={20} />
            Send Email
          </a>

          <a
            href="https://linkedin.com/in/abhijithpilakka/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-slate-700 hover:border-orange-500 rounded-full font-semibold transition-all flex items-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a
            href="https://github.com/abhijithpilakka/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-slate-700 hover:border-orange-500 rounded-full font-semibold transition-all flex items-center gap-2"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}