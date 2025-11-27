import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full pt-20 px-0 flex items-center relative overflow-hidden"
      style={{
        width: '100vw',
        minHeight: '100vh',
      }}
    >
      {/* 🔥 DARK Premium Animated Gradient + Noise */}
      <div 
        className="absolute inset-0 animate-gradient-slow"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 80, 40, 0.25), transparent 60%),
            radial-gradient(circle at 70% 70%, rgba(180, 40, 10, 0.25), transparent 70%),
            linear-gradient(135deg, #0d0603, #1b0a04, #2b0f06, #1b0a04, #0d0603)
          `,
          backgroundSize: "300% 300%",
          position: "absolute",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "url('https://assets.codepen.io/2361/noise.png')",
          backgroundSize: "300px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Soft floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-80 h-80 rounded-full opacity-[0.15] animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(255,70,30,0.25), transparent 70%)',
            top: '20%',
            left: '10%',
          }}
        />
        <div 
          className="absolute w-72 h-72 rounded-full opacity-[0.12] animate-float-medium"
          style={{
            background: 'radial-gradient(circle, rgba(200,50,20,0.2), transparent 70%)',
            bottom: '25%',
            right: '15%',
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh] pb-32">

          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="font-bold leading-tight">
                <span className="text-2xl text-gray-300 block mb-2">Hey, I'm</span>

                <span className="text-6xl md:text-7xl lg:text-8xl text-white block">
                  Abhijith
                </span>

                <div>
                  <span className="text-base text-orange-400 font-mono animate-pulse">
                    Designer • Developer
                  </span>
                </div>
              </h1>
            </div>
            
            <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
              Crafting digital experiences where <span className="text-orange-400 font-semibold">design meets functionality</span>. 
              From elegant interfaces to robust backend systems, I turn ideas into reality.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 hover:scale-105"
              >
                View My Work
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-orange-500/40 hover:border-orange-500 hover:bg-orange-500/10 rounded-full font-semibold transition-all hover:scale-105"
              >
                Let's Talk
              </button>
            </div>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShiftSlow {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }

        .animate-gradient-slow {
          animation: gradientShiftSlow 26s ease infinite;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -25px) scale(1.07); }
        }

        @keyframes floatMedium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, 20px) scale(1.1); }
        }

        .animate-float-slow {
          animation: floatSlow 18s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: floatMedium 14s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
