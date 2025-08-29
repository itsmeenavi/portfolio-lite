import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowLeft, FaCode, FaGithub, FaLinkedin } from 'react-icons/fa';

const NotFound = () => {
  const [, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-rich-black via-charcoal-gray to-rich-black flex items-center justify-center relative overflow-hidden"
    >
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00b4d8 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #00b4d8 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-[10rem] font-bold bg-gradient-to-r from-teal via-teal-dark to-blue-400 bg-clip-text text-transparent animate-fade-in-up">
            404
          </h1>
        </div>

        {/* Professional message */}
        <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-6 animate-fade-in-up delay-100">
          Page Not Found
        </h2>
        
        <p className="text-lg md:text-xl text-off-white/80 mb-8 leading-relaxed animate-fade-in-up delay-200 max-w-2xl mx-auto">
          Looks like this page has wandered off into the digital void. 
          Don't worry, even the best developers encounter 404s from time to time!
        </p>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-300">
          <Link
            to="/"
            className="group relative px-8 py-4 bg-teal text-rich-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:bg-teal-dark hover:scale-105 hover:shadow-xl hover:shadow-teal/25 flex items-center gap-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaHome className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group relative px-8 py-4 bg-charcoal-gray text-off-white font-bold rounded-lg border-2 border-teal/30 overflow-hidden transition-all duration-300 hover:bg-teal hover:text-rich-black hover:scale-105 hover:shadow-xl hover:shadow-teal/25 flex items-center gap-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Quick navigation */}
        <div className="mb-8 animate-fade-in-up delay-400">
          <h3 className="text-teal text-xl font-semibold mb-4">Quick Navigation</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/#about-me"
              className="px-4 py-2 bg-charcoal-gray text-off-white rounded-lg border border-teal/30 hover:bg-teal hover:text-rich-black transition-all duration-300 hover:scale-105"
            >
              About Me
            </Link>
            <Link
              to="/#projects"
              className="px-4 py-2 bg-charcoal-gray text-off-white rounded-lg border border-teal/30 hover:bg-teal hover:text-rich-black transition-all duration-300 hover:scale-105"
            >
              Projects
            </Link>
            <Link
              to="/#skills"
              className="px-4 py-2 bg-charcoal-gray text-off-white rounded-lg border border-teal/30 hover:bg-teal hover:text-rich-black transition-all duration-300 hover:scale-105"
            >
              Skills
            </Link>
            <Link
              to="/#contact"
              className="px-4 py-2 bg-charcoal-gray text-off-white rounded-lg border border-teal/30 hover:bg-teal hover:text-rich-black transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Social links */}
        <div className="animate-fade-in-up delay-500">
          <p className="text-off-white/60 text-sm mb-4">Connect with me on:</p>
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://github.com/itsmeenavi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:text-teal-dark transition-colors transform hover:scale-125"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ivhan-salazar-467b45201/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:text-teal-dark transition-colors transform hover:scale-125"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Professional tip */}
        <div className="mt-12 p-6 bg-charcoal-gray/50 backdrop-blur-sm rounded-lg border border-teal/20 animate-fade-in-up delay-600">
          <div className="flex items-center justify-center gap-3 mb-3">
            <FaCode className="text-teal w-5 h-5" />
            <h4 className="text-teal font-semibold">Developer Tip</h4>
          </div>
          <p className="text-off-white/80 text-sm">
            <strong>Tip:</strong> Check the URL for typos or use the navigation menu above. 
            If you're looking for something specific, feel free to reach out through the contact form!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
