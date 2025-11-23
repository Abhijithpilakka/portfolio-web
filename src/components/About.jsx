import React from 'react';
import { skillsData } from '../data/skills';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-orange-500 font-mono text-sm mb-4">Behind The Code</div>
          <h2 className="text-5xl md:text-6xl font-bold max-w-3xl">
            Building Solutions That Make a Difference
          </h2>
        </div>

        <div className="max-w-4xl mb-20">
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            I'm a Software Engineer at <span className="text-orange-500 font-semibold">TCS</span>, where I work on building and maintaining banking systems. 
            It's interesting work that involves solving real problems for real users.
          </p>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            My day-to-day stack includes Java, SQL, and SOAP services for both backend and frontend development. 
            I enjoy the challenge of working with established systems while finding ways to improve them.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            Outside of work, I like building side projects using whatever technology fits the problem—Python, FastAPI, 
            or experimenting with machine learning. Always learning, always building.
          </p>
        </div>

        {/* Skills Scrolling Band */}
        <div className="relative overflow-hidden py-12 bg-zinc-900 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...skillsData, ...skillsData, ...skillsData].map((skill, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-0 mx-12"
              >
                <div 
                  className="w-16 h-16 flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: skill.icon }}
                />
                <span className="text-2xl text-white font-bold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </section>
  );
}