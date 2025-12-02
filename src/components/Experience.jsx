import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <div className="mb-14 md:mb-20">
          <div className="text-orange-500 font-mono text-xs md:text-sm mb-3">Career Journey</div>
          <h2 className="text-4xl md:text-6xl font-bold text-white">Experience</h2>
        </div>

        <div className="relative md:pl-20"> {/* give space for the left timeline on desktop */}

          {/* Left Timeline Line (Desktop only) */}
          <div
            className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] 
                       bg-gradient-to-b from-orange-600/60 via-orange-500/40 to-orange-600/60"
            aria-hidden="true"
          />

          {/* Timeline Dot (Desktop only) - aligned to top of card padding (p-6 -> top-6) */}
            <div className="hidden md:flex absolute left-8 top-0 -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-orange-500
                              ring-4 ring-black shadow-md shadow-orange-500/40" />
            </div>

          {/* Experience Item */}
          <div className="relative md:mb-16 mb-10">

            

            {/* Card (shifted right on desktop using ml to leave space for timeline) */}
            <div className="
              bg-zinc-950 border border-gray-800 hover:border-orange-600/40 
              transition-all rounded-2xl p-6 md:p-10 ml-0 md:ml-8
            ">
              {/* Top Row */}
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Software Engineer
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Tata Consultancy Services (TCS)
                  </p>
                </div>

                <div className="px-3 py-1.5 rounded-full bg-orange-500/10 
                                border border-orange-500/30 text-orange-400 
                                font-mono text-xs md:text-sm">
                  Present
                </div>
              </div>

              {/* List */}
              <ul className="space-y-3 text-gray-400 text-sm md:text-base">
                {[
                  'Developing banking applications using Java, SQL and SOAP services',
                  'Maintaining backend systems and modernizing frontend modules',
                  'Implementing enterprise solutions used by real customers',
                  'Collaborating across teams to deliver stable products'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-orange-500">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}