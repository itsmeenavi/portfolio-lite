import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaCode, FaRocket, FaPalette } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase, SiNodedotjs } from 'react-icons/si';

function AboutMe() {
  return (
    <section id="about-me" className="relative bg-gradient-to-br from-charcoal-gray via-charcoal-gray to-rich-black text-off-white py-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating Tech Icons */}
      <div className="absolute top-1/4 left-[10%] animate-float">
        <SiReact size={40} className="text-teal/20" />
      </div>
      <div className="absolute top-1/3 right-[15%] animate-float-delayed">
        <SiNextdotjs size={35} className="text-teal/20" />
      </div>
      <div className="absolute bottom-1/4 left-[20%] animate-float">
        <SiTypescript size={30} className="text-blue-400/20" />
      </div>
      <div className="absolute bottom-1/3 right-[10%] animate-float-delayed">
        <SiFirebase size={35} className="text-teal/20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-teal rounded-full animate-pulse"></span>
            <span className="text-sm text-teal font-medium">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up delay-100">
            <span className="bg-gradient-to-r from-teal via-blue-400 to-teal bg-clip-text text-transparent animate-gradient">
              Ivhan Christopher Salazar
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-off-white/80 mb-6 animate-fade-in-up delay-200 font-light">
            Web Development Specialist
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-300 leading-relaxed">
            Crafting exceptional web experiences with modern technologies. 
            Specialized in building scalable applications and leading development teams.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10 animate-fade-in-up delay-400">
            <div className="bg-gradient-to-br from-dark-gray/50 to-dark-gray/30 backdrop-blur-sm border border-teal/20 rounded-xl p-5 hover:border-teal/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <FaCode className="text-teal text-3xl mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-off-white mb-2">Frontend Expert</h3>
              <p className="text-sm text-gray-400">React, Next.js, TypeScript</p>
            </div>
            
            <div className="bg-gradient-to-br from-dark-gray/50 to-dark-gray/30 backdrop-blur-sm border border-blue-400/20 rounded-xl p-5 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <FaRocket className="text-blue-400 text-3xl mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-off-white mb-2">Full-Stack Dev</h3>
              <p className="text-sm text-gray-400">Node.js, Firebase, APIs</p>
            </div>
            
            <div className="bg-gradient-to-br from-dark-gray/50 to-dark-gray/30 backdrop-blur-sm border border-teal/20 rounded-xl p-5 hover:border-teal/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <FaPalette className="text-teal text-3xl mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-off-white mb-2">UI/UX Design</h3>
              <p className="text-sm text-gray-400">Figma, Responsive Design</p>
            </div>
          </div>

          {/* Tech Stack Showcase */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in-up delay-500">
            <div className="flex items-center gap-2 bg-dark-gray/50 backdrop-blur-sm border border-gray-600/50 rounded-full px-4 py-2 hover:border-teal/50 transition-all">
              <SiReact size={20} className="text-[#61DAFB]" />
              <span className="text-sm text-off-white">React</span>
            </div>
            <div className="flex items-center gap-2 bg-dark-gray/50 backdrop-blur-sm border border-gray-600/50 rounded-full px-4 py-2 hover:border-teal/50 transition-all">
              <SiNextdotjs size={20} className="text-white" />
              <span className="text-sm text-off-white">Next.js</span>
            </div>
            <div className="flex items-center gap-2 bg-dark-gray/50 backdrop-blur-sm border border-gray-600/50 rounded-full px-4 py-2 hover:border-teal/50 transition-all">
              <SiTypescript size={20} className="text-[#3178C6]" />
              <span className="text-sm text-off-white">TypeScript</span>
            </div>
            <div className="flex items-center gap-2 bg-dark-gray/50 backdrop-blur-sm border border-gray-600/50 rounded-full px-4 py-2 hover:border-teal/50 transition-all">
              <SiTailwindcss size={20} className="text-[#38B2AC]" />
              <span className="text-sm text-off-white">Tailwind</span>
            </div>
            <div className="flex items-center gap-2 bg-dark-gray/50 backdrop-blur-sm border border-gray-600/50 rounded-full px-4 py-2 hover:border-teal/50 transition-all">
              <SiFirebase size={20} className="text-[#FFCA28]" />
              <span className="text-sm text-off-white">Firebase</span>
            </div>
            <div className="flex items-center gap-2 bg-dark-gray/50 backdrop-blur-sm border border-gray-600/50 rounded-full px-4 py-2 hover:border-teal/50 transition-all">
              <SiNodedotjs size={20} className="text-[#339933]" />
              <span className="text-sm text-off-white">Node.js</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up delay-600">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-teal to-blue-400 text-rich-black font-semibold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-teal/50 transition-all transform hover:scale-105"
            >
              <span>View My Work</span>
              <FaRocket className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Salazar, Ivhan - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-teal text-teal font-semibold py-3 px-8 rounded-lg hover:bg-teal hover:text-rich-black transition-all transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          {/* Contact & Social */}
          <div className="animate-fade-in-up delay-700">
            <div className="flex items-center justify-center gap-6 mb-4">
              <a
                href="https://www.linkedin.com/in/ivhan-salazar-467b45201/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal transition-all transform hover:scale-125"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/itsmeenavi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal transition-all transform hover:scale-125"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.facebook.com/ivhanchris761/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal transition-all transform hover:scale-125"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/navzou/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal transition-all transform hover:scale-125"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-400">
              <span>ivhanchris761@gmail.com</span>
              <span className="hidden sm:inline">•</span>
              <span>09669448658</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe; 