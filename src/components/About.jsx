import React from 'react';
import { skillsData } from '../data/skills';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 px-4 md:px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="text-orange-500 font-mono text-xs md:text-sm mb-3 md:mb-4">Behind The Code</div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
            Building Solutions That Make a Difference
          </h2>
        </div>

        <div className="max-w-4xl mb-12 md:mb-20">
          <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed">
            I'm a Software Engineer at <span className="text-orange-500 font-semibold">TCS</span>, where I work on building and maintaining banking systems. 
            It's interesting work that involves solving real problems for real users.
          </p>
          <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed">
            My day-to-day stack includes Java, SQL, and SOAP services for both backend and frontend development. 
            I enjoy the challenge of working with established systems while finding ways to improve them.
          </p>
          <p className="text-base md:text-xl text-gray-300 leading-relaxed">
            Outside of work, I like building side projects using whatever technology fits the problem—Python, FastAPI, 
            or experimenting with machine learning. Always learning, always building.
          </p>
        </div>

        {/* Skills Scrolling Band */}
        <div className="relative overflow-hidden py-6 md:py-12 bg-zinc-900 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="text-orange-500 font-mono text-xs md:text-sm mb-4 md:mb-6 text-center">Skills & Tools</div>
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...skillsData, ...skillsData, ...skillsData].map((skill, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 md:gap-3 mx-4 md:mx-8 lg:mx-12"
              >
                <div 
                  className="w-8 h-8 md:w-12 lg:w-16 md:h-12 lg:h-16 flex items-center justify-center flex-shrink-0"
                  dangerouslySetInnerHTML={{ __html: skill.icon }}
                />
                <span className="text-sm md:text-lg lg:text-2xl text-white font-bold whitespace-nowrap">{skill.name}</span>
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
          animation: scroll-left 30s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll-left {
            animation: scroll-left 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}