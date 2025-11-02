import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

function AboutMe() {
  return (
    <section id="about-me" className="bg-charcoal-gray text-off-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* About Me Text */}
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-teal text-4xl md:text-5xl font-bold mb-3 animate-fade-in-up tracking-tight">
            IVHAN CHRISTOPHER M. SALAZAR
          </h1>
          <h2 className="text-2xl md:text-3xl text-off-white/90 mb-8 animate-fade-in-up delay-100 font-light tracking-wide">
            Web Development Specialist
          </h2>

          <p className="text-lg leading-relaxed mb-8 animate-fade-in-up delay-200 max-w-3xl mx-auto text-off-white/90">
            Experienced web developer specializing in modern frontend technologies and full-stack solutions. Proven track record of delivering scalable web applications, leading development teams, and implementing complex features across diverse industries. Expertise in React, Next.js, TypeScript, Firebase, and RESTful API integration.
          </p>

          <div className="mb-8 animate-fade-in-up delay-300 text-left max-w-3xl mx-auto">
            <h3 className="text-teal font-semibold text-lg mb-3">Technical Expertise</h3>
            <ul className="list-disc list-inside space-y-2 pl-4 text-off-white/90">
              <li>Frontend: React, Next.js, TypeScript, Tailwind CSS, Material UI</li>
              <li>Backend: Node.js, Firebase, REST API, PHP, MySQL</li>
              <li>Mobile: Flutter, React Native</li>
              <li>Development: Git, Figma, Agile Methodologies</li>
            </ul>
          </div>

          {/* Social Links & Contact */}
          <div className="flex flex-col items-center gap-6 animate-fade-in-up delay-400">
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/ivhan-salazar-467b45201/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-off-white transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/itsmeenavi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-off-white transition-colors transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.facebook.com/ivhanchris761/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-off-white transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://www.instagram.com/navzou/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-off-white transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
            </div>

            {/* Contact Info & Resume */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-off-white/80">
              <span className="text-sm">ivhanchristophersalazar@gmail.com</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-sm">09669448658</span>
            </div>

            <a
              href="/Ivhan Salazar - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal text-rich-black font-semibold py-3 px-8 rounded hover:bg-off-white transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe; 