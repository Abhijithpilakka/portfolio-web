import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-orange-500 font-mono text-sm mb-4">Career Journey</div>
          <h2 className="text-5xl md:text-6xl font-bold">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-orange-500 via-orange-600 to-orange-500" />
          
          <div className="relative pl-20">
            {/* Timeline Dot */}
            <div className="absolute left-[26px] top-8 w-5 h-5 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50 ring-4 ring-black" />
            
            <div className="group">
              <div className="bg-zinc-950 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all">
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-white">
                      Software Engineer
                    </h3>
                    <p className="text-xl text-gray-300">Tata Consultancy Services (TCS)</p>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30">
                    <span className="text-orange-500 font-mono font-semibold">Present</span>
                  </div>
                </div>
                
                <ul className="space-y-4 text-gray-300">
                  {[
                    'Developing banking applications with Java, SQL, and SOAP services',
                    'Building and maintaining both backend systems and frontend interfaces',
                    'Working on enterprise solutions that serve real users',
                    'Collaborating with teams to deliver reliable software'
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 group/item">
                      <span className="text-orange-500 mt-1">▹</span>
                      <span className="group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}