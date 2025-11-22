import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Enterprise Microservices Platform',
      category: 'Backend Development',
      tech: ['Java', 'Spring Boot', 'Hibernate', 'SQL'],
      shortDesc: 'Scalable microservices architecture for enterprise applications',
      fullDesc: 'Developed a comprehensive microservices platform handling 10K+ requests/day. Implemented RESTful APIs, database optimization, and service orchestration. Reduced response time by 40% through caching strategies and query optimization.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
      link: '#'
    },
    {
      id: 2,
      title: 'ML-Powered Analytics Dashboard',
      category: 'Machine Learning',
      tech: ['Python', 'FastAPI', 'Scikit-learn', 'Pandas'],
      shortDesc: 'Real-time analytics with predictive modeling capabilities',
      fullDesc: 'Built an analytics dashboard with machine learning models for predictive insights. Integrated FastAPI backend with ML pipelines, achieving 92% accuracy in forecasting. Features include real-time data processing and interactive visualizations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      link: '#'
    },
    {
      id: 3,
      title: 'Legacy System Integration',
      category: 'Integration',
      tech: ['SOAP Services', 'Java', 'XML', 'SQL'],
      shortDesc: 'Seamless integration of legacy systems with modern architecture',
      fullDesc: 'Led the integration of legacy SOAP-based services with modern REST APIs. Designed adapters and middleware for seamless communication. Improved system interoperability and reduced integration time by 60%.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop',
      link: '#'
    },
    {
      id: 4,
      title: 'Automated Data Pipeline',
      category: 'Data Engineering',
      tech: ['Python', 'SQL', 'Apache Airflow', 'ETL'],
      shortDesc: 'Automated ETL pipeline for large-scale data processing',
      fullDesc: 'Created an automated data pipeline processing 1M+ records daily. Implemented data validation, transformation, and loading processes. Reduced manual processing time by 80% and improved data accuracy.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      link: '#'
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-300 hover:text-amber-400 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-md">
            <div className="flex flex-col gap-4 px-6 py-4">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-slate-300 hover:text-amber-400 transition-colors capitalize text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-6 text-amber-400 font-mono text-sm animate-pulse">
            &lt;Hello World /&gt;
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent">
            Software Engineer
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Building scalable solutions with Java, Python & Machine Learning
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            >
              Get in Touch
            </button>
            <button className="px-8 py-3 border border-amber-500 text-amber-400 rounded-lg font-semibold hover:bg-amber-500/10 transition-all flex items-center gap-2">
              <Download size={18} />
              Resume
            </button>
          </div>
          <ChevronDown className="mx-auto animate-bounce text-amber-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed">
                I'm a passionate Software Engineer at TCS with expertise in building robust enterprise applications. 
                My journey in technology is driven by a constant desire to learn and solve complex problems.
              </p>
              <p className="text-lg leading-relaxed">
                With a strong foundation in Java ecosystem and expanding expertise in Python and Machine Learning, 
                I create efficient, scalable solutions that make a real impact.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, I explore emerging technologies, contribute to open-source projects, 
                and share knowledge with the developer community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Core Expertise</h3>
              <div className="space-y-4">
                {['Backend Development', 'Database Design', 'API Integration', 'Machine Learning', 'System Architecture'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Technical Skills & Tools
            </span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Java */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col items-center gap-4 hover:scale-105">
              <svg className="w-16 h-16" viewBox="0 0 128 128" fill="none">
                <path d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z" fill="#5382A1"/>
                <path d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z" fill="#E76F00"/>
                <path d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z" fill="#5382A1"/>
                <path d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z" fill="#E76F00"/>
                <path d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z" fill="#5382A1"/>
              </svg>
              <span className="font-semibold text-slate-200">Java</span>
            </div>

            {/* Python */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col items-center gap-4 hover:scale-105">
              <svg className="w-16 h-16" viewBox="0 0 128 128" fill="none">
                <path d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 66 78.489 66H49.33C41.342 66 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z" fill="url(#python-gradient)"/>
                <defs>
                  <linearGradient id="python-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#387EB8"/>
                    <stop offset="100%" stopColor="#FFC331"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-semibold text-slate-200">Python</span>
            </div>

            {/* Hibernate */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col items-center gap-4 hover:scale-105">
              <svg className="w-16 h-16" viewBox="0 0 128 128" fill="none">
                <path d="M41.5 17.5L23 64l18.5 46.5L60 64z" fill="#59666C"/>
                <path d="M86.5 17.5L68 64l18.5 46.5L105 64z" fill="#BCAE79"/>
              </svg>
              <span className="font-semibold text-slate-200">Hibernate</span>
            </div>

            {/* SQL */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col items-center gap-4 hover:scale-105">
              <svg className="w-16 h-16" viewBox="0 0 128 128" fill="none">
                <path d="M64 8C28.7 8 0 20.7 0 36.3v55.4C0 107.3 28.7 120 64 120s64-12.7 64-28.3V36.3C128 20.7 99.3 8 64 8z" fill="#00618A"/>
                <path d="M64 96c-35.3 0-64-10.7-64-24s28.7-24 64-24 64 10.7 64 24-28.7 24-64 24z" fill="#E48E00"/>
                <ellipse cx="64" cy="36" rx="64" ry="24" fill="#00618A"/>
              </svg>
              <span className="font-semibold text-slate-200">SQL</span>
            </div>

            {/* FastAPI */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col items-center gap-4 hover:scale-105">
              <svg className="w-16 h-16" viewBox="0 0 128 128" fill="none">
                <circle cx="64" cy="64" r="56" fill="#009688"/>
                <path d="M64 20L90 50H38L64 20z M64 108L38 78H90L64 108z M50 64H78" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-semibold text-slate-200">FastAPI</span>
            </div>

            {/* SOAP */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col items-center gap-4 hover:scale-105">
              <svg className="w-16 h-16" viewBox="0 0 128 128" fill="none">
                <rect x="20" y="20" width="88" height="88" rx="8" fill="#4A90E2"/>
                <text x="64" y="75" fontSize="42" fill="white" textAnchor="middle" fontWeight="bold">S</text>
              </svg>
              <span className="font-semibold text-slate-200">SOAP</span>
            </div>

            {/* Spring Boot */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col items-center gap-4 hover:scale-105">
              <svg className="w-16 h-16" viewBox="0 0 128 128" fill="none">
                <path d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205 0C28.984 0 .146 28.876.146 64.135a64.15 64.15 0 0063.695 64.135c35.22 0 63.695-28.876 63.695-64.135 0-19.26-8.491-36.622-21.934-48.492z" fill="#6DB33F"/>
                <path d="M64.205 114.255c-27.673 0-50.146-22.514-50.146-50.199S36.532 13.857 64.205 13.857c27.673 0 50.145 22.514 50.145 50.199s-22.472 50.199-50.145 50.199z" fill="#FFF"/>
                <path d="M45.867 83.48c-3.42 0-6.211-2.804-6.211-6.24 0-3.435 2.791-6.238 6.211-6.238s6.21 2.803 6.21 6.238c0 3.436-2.79 6.24-6.21 6.24zm36.477 0c-3.42 0-6.21-2.804-6.21-6.24 0-3.435 2.79-6.238 6.21-6.238 3.421 0 6.211 2.803 6.211 6.238 0 3.436-2.79 6.24-6.21 6.24z" fill="#6DB33F"/>
              </svg>
              <span className="font-semibold text-slate-200">Spring Boot</span>
            </div>

            {/* Machine Learning */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col items-center gap-4 hover:scale-105">
              <svg className="w-16 h-16" viewBox="0 0 128 128" fill="none">
                <circle cx="64" cy="64" r="50" stroke="#FF6F00" strokeWidth="4" fill="none"/>
                <circle cx="64" cy="64" r="8" fill="#FF6F00"/>
                <circle cx="94" cy="64" r="6" fill="#FF6F00"/>
                <circle cx="34" cy="64" r="6" fill="#FF6F00"/>
                <circle cx="64" cy="34" r="6" fill="#FF6F00"/>
                <circle cx="64" cy="94" r="6" fill="#FF6F00"/>
                <line x1="64" y1="64" x2="94" y2="64" stroke="#FF6F00" strokeWidth="3"/>
                <line x1="64" y1="64" x2="34" y2="64" stroke="#FF6F00" strokeWidth="3"/>
                <line x1="64" y1="64" x2="64" y2="34" stroke="#FF6F00" strokeWidth="3"/>
                <line x1="64" y1="64" x2="64" y2="94" stroke="#FF6F00" strokeWidth="3"/>
              </svg>
              <span className="font-semibold text-slate-200">ML</span>
            </div>

            {/* REST API */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col items-center gap-4 hover:scale-105">
              <svg className="w-16 h-16" viewBox="0 0 128 128" fill="none">
                <rect x="10" y="30" width="35" height="35" rx="4" fill="#61DAFB"/>
                <rect x="83" y="30" width="35" height="35" rx="4" fill="#61DAFB"/>
                <rect x="46" y="63" width="35" height="35" rx="4" fill="#61DAFB"/>
                <path d="M45 47.5H83M45 47.5L63.5 80.5M83 47.5L63.5 80.5" stroke="#61DAFB" strokeWidth="3"/>
              </svg>
              <span className="font-semibold text-slate-200">REST API</span>
            </div>

            {/* Git */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col items-center gap-4 hover:scale-105">
              <svg className="w-16 h-16" viewBox="0 0 128 128" fill="none">
                <path d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.053 15.336l14.275 14.275c3.366-1.136 7.229-.395 9.906 2.282 2.683 2.688 3.419 6.565 2.269 9.942l13.758 13.758c3.377-1.15 7.254-.413 9.943 2.27 3.757 3.76 3.757 9.851 0 13.611-3.753 3.756-9.845 3.756-13.603 0-2.82-2.821-3.517-6.951-2.105-10.426L67.717 48.269v35.958c.915.453 1.776 1.059 2.55 1.833 3.757 3.756 3.757 9.847 0 13.607-3.753 3.756-9.844 3.756-13.601 0-3.757-3.76-3.757-9.851 0-13.607.927-.928 2.009-1.638 3.174-2.133V47.933c-1.165-.495-2.247-1.205-3.174-2.132-2.833-2.834-3.518-6.987-2.084-10.474L40.349 21.092 3.264 58.178c-3.174 3.174-3.174 8.321 0 11.497l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.857-54.858c3.174-3.176 3.174-8.327 0-11.503z" fill="#F05032"/>
              </svg>
              <span className="font-semibold text-slate-200">Git</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="relative border-l-2 border-amber-500/30 pl-8 ml-4">
            <div className="mb-12">
              <div className="absolute w-4 h-4 bg-amber-500 rounded-full -left-[9px] border-4 border-slate-950"></div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-amber-400 mb-2">Software Engineer</h3>
                    <p className="text-xl text-slate-300">Tata Consultancy Services (TCS)</p>
                  </div>
                  <span className="text-slate-400 font-mono">Present</span>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-amber-400 mt-1">▹</span>
                    <span>Developing enterprise-grade applications using Java, Hibernate, and SOAP services</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400 mt-1">▹</span>
                    <span>Optimizing SQL queries and database performance for high-traffic applications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400 mt-1">▹</span>
                    <span>Collaborating with cross-functional teams to deliver scalable solutions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400 mt-1">▹</span>
                    <span>Implementing machine learning models for data-driven insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-amber-500/20 hover:border-amber-500/40 transition-all"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-500/90 hover:bg-amber-500 p-2 rounded-lg transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="text-slate-900" size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-amber-400 mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-400 font-mono">{project.category}</p>
                  </div>
                  
                  <p className="text-slate-300 mb-4">
                    {expandedProject === project.id ? project.fullDesc : project.shortDesc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm border border-amber-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors">
                    {expandedProject === project.id ? 'Show Less ↑' : 'Read More →'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all flex items-center gap-2"
            >
              <Mail size={20} />
              Email Me
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-amber-500 text-amber-400 rounded-lg font-semibold hover:bg-amber-500/10 transition-all flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-amber-500 text-amber-400 rounded-lg font-semibold hover:bg-amber-500/10 transition-all flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-amber-500/20">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>Designed & Built with React • © 2024</p>
        </div>
      </footer>
    </div>
  );
}