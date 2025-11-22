import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronDown, Menu, X, Sparkles, Code2, Database, Brain } from 'lucide-react';

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
      link: '#',
      gradient: 'from-violet-500/20 to-purple-500/20'
    },
    {
      id: 2,
      title: 'ML-Powered Analytics Dashboard',
      category: 'Machine Learning',
      tech: ['Python', 'FastAPI', 'Scikit-learn', 'Pandas'],
      shortDesc: 'Real-time analytics with predictive modeling capabilities',
      fullDesc: 'Built an analytics dashboard with machine learning models for predictive insights. Integrated FastAPI backend with ML pipelines, achieving 92% accuracy in forecasting. Features include real-time data processing and interactive visualizations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      link: '#',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      id: 3,
      title: 'Legacy System Integration',
      category: 'Integration',
      tech: ['SOAP Services', 'Java', 'XML', 'SQL'],
      shortDesc: 'Seamless integration of legacy systems with modern architecture',
      fullDesc: 'Led the integration of legacy SOAP-based services with modern REST APIs. Designed adapters and middleware for seamless communication. Improved system interoperability and reduced integration time by 60%.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop',
      link: '#',
      gradient: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      id: 4,
      title: 'Automated Data Pipeline',
      category: 'Data Engineering',
      tech: ['Python', 'SQL', 'Apache Airflow', 'ETL'],
      shortDesc: 'Automated ETL pipeline for large-scale data processing',
      fullDesc: 'Created an automated data pipeline processing 1M+ records daily. Implemented data validation, transformation, and loading processes. Reduced manual processing time by 80% and improved data accuracy.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      link: '#',
      gradient: 'from-rose-500/20 to-pink-500/20'
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white relative overflow-hidden">
      {/* Static Background Elements (no mouse effect) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-violet-500/5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="text-violet-400" size={24} />
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              abhijith.dev
            </span>
          </div>
          
          <div className="hidden md:flex gap-8">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-300 hover:text-violet-400 transition-all capitalize relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10">
            <div className="flex flex-col gap-4 px-6 py-4">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-slate-300 hover:text-violet-400 transition-colors capitalize text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-4xl text-center relative z-10">
          <div className="mb-6 inline-block">
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 backdrop-blur-sm">
              <span className="text-violet-400 font-mono text-sm animate-pulse">
                &lt;Hey I'm/&gt;
              </span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
            ABHIJITH
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            Crafting scalable solutions with
            <span className="text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text font-semibold"> Java, Python & Machine Learning</span>
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all relative overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <a 
              href="/assets/Abhijith_Resume.pdf" 
              download
              className="group px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/20"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              Resume
            </a>
          </div>
          
          <ChevronDown className="mx-auto animate-bounce text-violet-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed">
                I'm a Software Engineer at <span className="text-violet-400 font-semibold">TCS</span> with expertise in building robust enterprise applications. 
                My journey in technology is driven by a constant desire to learn and solve complex problems.
              </p>
              <p className="text-lg leading-relaxed">
                My day-to-day stack includes Java, SQL, and SOAP services for both backend and frontend development. 
                I enjoy the challenge of working with established systems while finding ways to improve them.
              </p>
              <p className="text-lg leading-relaxed">
                Outside of work, I enjoy building side projects with whatever technology fits best—whether that's Python for data work, FastAPI for quick backends, or experimenting with ML models. I'm always learning something new.
              </p>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Core Expertise
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Code2, text: 'Backend Development' },
                    { icon: Database, text: 'Database Design' },
                    { icon: Code2, text: 'API Integration' },
                    { icon: Brain, text: 'Machine Learning' },
                    { icon: Code2, text: 'System Architecture' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 group/item">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-violet-500/20 to-cyan-500/20 group-hover/item:scale-110 transition-transform">
                        <item.icon size={20} className="text-violet-400" />
                      </div>
                      <span className="text-slate-200 group-hover/item:text-white transition-colors">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Java', color: 'from-orange-500 to-red-500' },
              { name: 'Python', color: 'from-blue-500 to-yellow-500' },
              { name: 'Hibernate', color: 'from-slate-500 to-slate-700' },
              { name: 'SQL', color: 'from-blue-600 to-cyan-600' },
              { name: 'FastAPI', color: 'from-teal-500 to-emerald-500' },
              { name: 'SOAP', color: 'from-indigo-500 to-blue-500' },
              { name: 'Spring Boot', color: 'from-green-500 to-emerald-600' },
              { name: 'Machine Learning', color: 'from-purple-500 to-pink-500' },
              { name: 'REST API', color: 'from-cyan-500 to-blue-500' },
              { name: 'Git', color: 'from-orange-600 to-red-600' }
            ].map((skill, idx) => (
              <div
                key={idx}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`} />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all flex flex-col items-center gap-4 group-hover:scale-105 group-hover:bg-white/10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center font-bold text-2xl shadow-lg`}>
                    {skill.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-slate-200 group-hover:text-white transition-colors text-center">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/50 via-cyan-500/50 to-violet-500/50" />
            
            <div className="relative pl-20">
              <div className="absolute left-[26px] w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/50 animate-pulse" />
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-all">
                  <div className="flex flex-wrap justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                        Software Engineer
                      </h3>
                      <p className="text-xl text-slate-300">Tata Consultancy Services (TCS)</p>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30">
                      <span className="text-violet-400 font-mono font-semibold">Present</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 text-slate-300">
                    {[
                      'Developing enterprise-grade applications using Java, Hibernate, and SOAP services',
                      'Optimizing SQL queries and database performance for high-traffic applications',
                      'Collaborating with cross-functional teams to deliver scalable solutions',
                      'Implementing machine learning models for data-driven insights'
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 group/item">
                        <span className="text-violet-400 mt-1 group-hover/item:scale-125 transition-transform">▹</span>
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

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                    
                    <div className="absolute top-4 right-4">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all group/link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="text-white group-hover/link:rotate-45 transition-transform" size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  >
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 font-mono">{project.category}</p>
                    </div>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {expandedProject === project.id ? project.fullDesc : project.shortDesc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-violet-500/10 to-cyan-500/10 text-violet-300 border border-violet-500/20 hover:border-violet-500/40 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button className="text-violet-400 text-sm font-semibold hover:text-cyan-400 transition-colors flex items-center gap-2 group/btn">
                      {expandedProject === project.id ? 'Show Less' : 'Read More'}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${expandedProject === project.id ? 'rotate-180' : ''} group-hover/btn:translate-x-1`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center mb-16">
            <a
              href="mailto:abhijithpilakka@gmail.com"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl font-semibold flex items-center gap-3 hover:scale-105 transition-transform">
                <Mail size={20} />
                Email Me
              </div>
            </a>
            
            <a
              href="https://linkedin.com/in/abhijithpilakka/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-xl font-semibold flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-violet-500/50 transition-all"
            >
              <Linkedin size={20} className="group-hover:text-violet-400 transition-colors" />
              LinkedIn
            </a>
            
            <a
              href="https://github.com/abhijithpilakka/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-xl font-semibold flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all"
            >
              <Github size={20} className="group-hover:text-cyan-400 transition-colors" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 backdrop-blur-xl relative">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            Designed & Built with <span className="text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text">React</span> • © 2024
          </p>
        </div>
      </footer>
    </div>
  );
}