import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import siklistoImage from '../assets/siklisto.png';
import loaImage from '../assets/loa.png';
import adviceImage from '../assets/advice.png';
import bibleImage from '../assets/bible.png';
import basicImage from '../assets/basic.png';
import notepadAppImage from '../assets/notepad.png';
import worldTimezoneImage from '../assets/worldtimezone.png';
import anehantechImage from '../assets/anehanit.png';
import anehansiteImage from '../assets/anehan.png';
import lawschoolImage from '../assets/lawschool.png';

interface Project {
  name: string;
  description: string;
  link: string;
  technologies: string[];
  image: string;
  isExternal?: boolean;
  subSystems?: {
    name: string;
    description: string;
  }[];
}

const clientProjects: Project[] = [
  {
    name: 'Lawschool Fitness System',
    description: 'A comprehensive web platform built to manage all business operations for a fitness company, supporting a client-facing mobile app.',
    link: 'https://lawschoolfitness.com',
    technologies: ['Next.js', 'React.js', 'Material UI', 'Shadcn', 'Firebase', 'Tailwind CSS'],
    image: lawschoolImage,
    isExternal: true,
    subSystems: [
      {
        name: 'Main E-Commerce Website',
        description: 'Developed the public-facing e-commerce and onboarding portal for client acquisition, featuring user authentication, secure package purchasing, and a trainer application form.'
      },
      {
        name: 'Innovator (Trainer) Portal',
        description: 'Built the dedicated portal for Innovators (Trainers) to manage their assigned clients, create and distribute custom workout/meal plans, and set their coaching availability.'
      },
      {
        name: 'Affiliate System',
        description: 'Developed the affiliate marketing portal from the ground up, allowing partners to manage referral codes and track commission performance to drive new user growth.'
      },
      {
        name: 'Central Admin Dashboard',
        description: 'Constructed the main dashboard for business owners to provide full control over the ecosystem, including financial reporting, user management, and client-trainer assignments.'
      }
    ]
  },
  {
    name: 'Anehan AgriTech',
    description: 'A B2B mobile platform connecting palay farmers with rice millers and retailers in Central Luzon',
    link: 'https://anehan.vercel.app',
    technologies: ['ReactJS', 'Tailwind CSS', 'Material UI'],
    image: anehansiteImage,
    isExternal: true,
  },
  {
    name: 'Anehan IT Solutions',
    description: 'A software development team dedicated to building innovative solutions from concept to deployment',
    link: 'https://anehan-tech.vercel.app',
    technologies: ['ReactJS', 'Tailwind CSS', 'Material UI'],
    image: anehantechImage,
    isExternal: true,
  },
];

const schoolProjects: Project[] = [
  {
    name: 'Siklisto',
    description: 'A Mobile Based Electric Bike Charging Station Locator',
    link: '/siklisto',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    image: siklistoImage,
  },
  {
    name: 'Lyceum of Alabang Performance Evaluation System',
    description: 'Faculty Evaluation System with Sentiment Analysis',
    link: 'https://github.com/LOA-Capstone/eval-system-capstone',
    technologies: ['HTML', 'Javascript', 'CSS', 'PHP', 'Python', 'MySQL'],
    image: loaImage,
    isExternal: true,
  },
  {
    name: 'Basic Photography Gallery',
    description: 'A website made for a project in Basic Photography',
    link: 'https://basic-photo-finals.vercel.app/photography',
    technologies: ['ReactJS', 'Tailwind CSS'],
    image: basicImage,
    isExternal: true,
  },
];

const personalProjects: Project[] = [
  {
    name: 'Random Bible Verse',
    description: 'Generates random bible verses to display',
    link: 'https://random-bible-verse-flame.vercel.app',
    technologies: ['Next.js'],
    image: bibleImage,
    isExternal: true,
  },
  {
    name: 'Random Advice Generator',
    description: 'Generates random advice',
    link: 'https://random-advice-app-seven.vercel.app',
    technologies: ['Next.js'],
    image: adviceImage,
    isExternal: true,
  },
  {
    name: 'Notepad App',
    description: 'Allows users to create temporary, shareable notes with an expiration time',
    link: 'https://notepad-app-eight.vercel.app',
    technologies: ['Next.js', 'Tailwind CSS', 'Upstash KV', 'Redis'],
    image: notepadAppImage,
    isExternal: true,
  },
  {
    name: 'World Timezone',
    description: 'See different timezones around the world simultaneously',
    link: 'https://world-timezone-gamma.vercel.app',
    technologies: ['ReactJS', 'Tailwind CSS'],
    image: worldTimezoneImage,
    isExternal: true,
  },
];

const ProjectItem = ({ project }: { project: Project }) => {
  const content = (
    <div className="p-5 bg-charcoal-gray/50 border border-teal/20 rounded-lg hover:border-teal hover:bg-charcoal-gray transition-all duration-300 group">
      <div className="flex flex-col md:flex-row items-start gap-5 mb-3">
        {/* Project Image */}
        <div className="w-full md:w-64 flex-shrink-0">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 md:h-48 object-cover rounded-lg border border-teal/20 group-hover:border-teal transition-all"
          />
        </div>

        {/* Project Info */}
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-2">
            <div className="flex-shrink-0 mt-1">
              {project.isExternal ? (
                <FaExternalLinkAlt className="text-teal w-4 h-4 group-hover:scale-110 transition-transform" />
              ) : (
                <FaArrowRight className="text-teal w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </div>
            <div className="flex-1">
              <h4 className="text-off-white font-semibold text-lg mb-1 group-hover:text-teal transition-colors">
                {project.name}
              </h4>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-teal/10 border border-teal/30 text-teal rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-systems */}
      {project.subSystems && project.subSystems.length > 0 && (
        <div className="ml-0 md:ml-[17rem] mt-4 space-y-3 border-l-2 border-teal/30 pl-4">
          {project.subSystems.map((system, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[1.125rem] top-2 w-3 h-3 rounded-full bg-teal/50 border-2 border-charcoal-gray"></div>
              <h5 className="text-teal font-medium text-sm mb-1">{system.name}</h5>
              <p className="text-gray-400 text-xs leading-relaxed">{system.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  if (project.isExternal) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link to={project.link}>{content}</Link>;
};

function Projects() {
  return (
    <section id="projects" className="relative bg-rich-black text-off-white py-12 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-teal text-center mb-10 text-3xl font-bold">Projects</h2>

        {/* Client Projects */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-off-white mb-4 flex items-center gap-2">
            <span className="text-teal">•</span> Client Projects
          </h3>
          <div className="space-y-3">
            {clientProjects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>

        {/* School Projects */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-off-white mb-4 flex items-center gap-2">
            <span className="text-teal">•</span> Academic Projects
          </h3>
          <div className="space-y-3">
            {schoolProjects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-off-white mb-4 flex items-center gap-2">
            <span className="text-teal">•</span> Personal Projects
          </h3>
          <div className="space-y-3">
            {personalProjects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;