import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section id="projects" className="py-16 md:py-32 px-4 md:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="text-orange-500 font-mono text-xs md:text-sm mb-3 md:mb-4">Latest Projects & Collaborations</div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Featured Work</h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group border border-gray-800 rounded-2xl md:rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all bg-zinc-950"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950/90 via-zinc-950/50 to-transparent" />
                  <div className="absolute top-4 left-4 md:top-8 md:left-8 text-4xl md:text-6xl font-bold text-orange-500/20">
                    {project.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="text-xs md:text-sm text-orange-500 font-mono mb-2 md:mb-3">{project.category}</div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-white">{project.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6 leading-relaxed">
                      {expandedProject === project.id ? project.fullDesc : project.shortDesc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 md:px-4 md:py-2 bg-zinc-900 border border-gray-800 rounded-full text-xs md:text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 md:gap-4 pt-4 border-t border-gray-800/50">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors group/link"
                      >
                        <Github size={18} className="md:w-5 md:h-5" />
                        <span className="text-xs md:text-sm font-medium">View Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors group/link"
                      >
                        <ExternalLink size={18} className="md:w-5 md:h-5" />
                        <span className="text-xs md:text-sm font-medium">Live Demo</span>
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