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
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0 animate-gradient"
        style={{
          background: 'linear-gradient(135deg, #1a0a00, #2d1200, #4a1f00, #2d1200, #1a0a00)',
          backgroundSize: '400% 400%',
        }}
      />

      {/* Animated floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(255, 87, 34, 0.4) 0%, transparent 70%)',
            top: '20%',
            left: '10%',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-20 animate-float-medium"
          style={{
            background: 'radial-gradient(circle, rgba(230, 74, 25, 0.3) 0%, transparent 70%)',
            bottom: '30%',
            right: '15%',
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-20 animate-float-fast"
          style={{
            background: 'radial-gradient(circle, rgba(255, 138, 101, 0.3) 0%, transparent 70%)',
            top: '60%',
            left: '60%',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh] md:min-h-[70vh] pb-32 md:pb-24">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 md:mb-8">
              <h1 className="font-bold leading-tight">
                <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300 block mb-2 md:mb-3">Hey, I'm</span>
                <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-white block mb-3 md:mb-4">Abhijith</span>
                <div>
                  <span className="text-sm md:text-base lg:text-lg text-orange-400 font-mono animate-pulse">
                    Designer • Developer
                  </span>
                </div>
              </h1>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 max-w-xl leading-relaxed">
              Crafting digital experiences where <span className="text-orange-400 font-semibold">design meets functionality</span>. 
              From elegant interfaces to robust backend systems, I turn ideas into reality.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 md:px-8 md:py-4 bg-orange-500 hover:bg-orange-600 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105 text-sm md:text-base"
              >
                View My Work
                <ArrowRight size={18} className="md:w-5 md:h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-orange-500/50 hover:border-orange-500 hover:bg-orange-500/10 rounded-full font-semibold transition-all hover:scale-105 text-sm md:text-base"
              >
                Let's Talk
              </button>
            </div>
          </div>

          {/* Right Side - Empty space for balance */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Bottom Bar - Hidden on mobile, visible on tablet and up */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full backdrop-blur-md border-t border-orange-500/20">
        <div className="w-full px-8 md:px-12 lg:px-16 py-8 md:py-10 lg:py-12">
          <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8 lg:gap-12 text-sm md:text-base lg:text-lg">
            <span className="text-gray-200 hover:text-orange-400 transition-colors cursor-default whitespace-nowrap">
              UI/UX Design
            </span>
            <span className="text-orange-500/40">|</span>
            <span className="text-gray-200 hover:text-orange-400 transition-colors cursor-default whitespace-nowrap">
              Full-Stack Development
            </span>
            <span className="text-orange-500/40">|</span>
            <span className="text-gray-200 hover:text-orange-400 transition-colors cursor-default whitespace-nowrap">
              System Architecture
            </span>
            <span className="text-orange-500/40">|</span>
            <span className="text-gray-200 hover:text-orange-400 transition-colors cursor-default whitespace-nowrap">
              Creative Solutions
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-40px, 30px) scale(1.15);
          }
          66% {
            transform: translate(25px, -25px) scale(0.95);
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, 30px) scale(1.2);
          }
        }

        .animate-gradient {
          animation: gradient-shift 15s ease infinite;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}