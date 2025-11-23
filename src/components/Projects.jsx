import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-orange-500 font-mono text-sm mb-4">Latest Projects & Collaborations</div>
          <h2 className="text-5xl md:text-6xl font-bold">Featured Work</h2>
        </div>

        <div className="space-y-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group border border-slate-800 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />
                  <div className="absolute top-8 left-8 text-6xl font-bold text-orange-500/20">
                    {project.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-12 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-orange-500 font-mono mb-3">{project.category}</div>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {expandedProject === project.id ? project.fullDesc : project.shortDesc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-slate-800 rounded-full text-sm text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors"
                      >
                        <Github size={20} />
                        <span className="text-sm">View Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}