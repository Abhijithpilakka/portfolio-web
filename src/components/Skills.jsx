import React from 'react';
import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-orange-500 font-mono text-sm mb-4">What I Work With</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-12">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center gap-6 p-4"
            >
              <div 
                className="w-24 h-24 flex items-center justify-center grayscale opacity-60 group-hover:opacity-100 transition-all"
                dangerouslySetInnerHTML={{ __html: skill.logo }}
              />
              <span className="text-xl font-semibold text-slate-300 group-hover:text-orange-500 transition-colors text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}