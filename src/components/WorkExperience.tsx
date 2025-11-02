import { FaBriefcase, FaCode, FaMobile, FaLaptopCode } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';

function WorkExperience() {
  const workExperiences = [
    {
      company: 'PHILIPPINE CENTRAL ENGAGEMENT SERVICES INC.',
      position: 'Mobile Application Developer | Wordpress Developer | UI/UX Designer',
      icon: <FaMobile size={40} className="text-teal" />,
      color: 'from-teal/20 to-blue-400/20',
      description:
        'Led and managed the IT team, reporting directly to senior management to propose and implement new workflows that improved organizational efficiency. Led the company\'s new mobile app development, building and delivering the first version of the application. Designed and developed the company website from initial UI design to final code deployment and maintenance.',
      skills: ['Flutter', 'WordPress', 'Figma', 'UI/UX']
    },
    {
      company: 'FUNDAMENTAL IT SOLUTIONS',
      position: 'Frontend Developer',
      icon: <FaCode size={40} className="text-blue-400" />,
      color: 'from-blue-400/20 to-teal/20',
      description:
        'Built and optimized responsive web apps for 10,000+ users by partnering with designers and backend developers. Collaborated with the backend team to integrate RESTful APIs, launching dynamic, data-driven features for users. Worked directly with the project manager to track tasks, manage sprints, and ensure all code met high-quality, clean-coding standards. Developed the Native Mobile Application of the website, integrating REST APIs for core functionality.',
      skills: ['React', 'REST API', 'React Native', 'Agile']
    },
    {
      company: 'ANEHAN IT SOLUTIONS',
      position: 'Web Developer',
      icon: <SiReact size={40} className="text-[#61DAFB]" />,
      color: 'from-teal/20 to-blue-500/20',
      description:
        'Designed and developed a comprehensive fitness ecosystem, leading client consultations to translate their business vision into a multi-portal platform. Developed a unified platform for a client\'s business operations, featuring integrated E-Commerce, Trainer, Affiliate, and Admin dashboards.',
      skills: ['React', 'Next.js', 'Firebase', 'Material UI']
    },
    {
      company: 'PHILIPPINE STATISTICS AUTHORITY',
      position: 'Systems Developer Internship',
      icon: <FaLaptopCode size={40} className="text-teal" />,
      color: 'from-blue-500/20 to-teal/20',
      description:
        'Gained in-depth exposure to PSA\'s operations and the BRAMS/BRAP Project through multiple workshops and meetings. Strengthened JavaScript proficiency by completing a full course, which covered essential concepts such as HTTP vs. HTTPS, encryption, and hashing. Simultaneously, advanced skills in Golang by studying various courses and setting up local client-server connections. Contributed to UI/UX design discussions for the BRAP application and documented technical insights during project sessions. Expanded front-end capabilities by learning ReactJS (including API fetching) and explored modern web technologies such as Next.js and Supabase for streamlined development workflows. Enhanced mobile development expertise with Flutter while gaining hands-on experience initializing projects with PostgreSQL and npm-based toolchains.',
      skills: ['JavaScript', 'React', 'Golang', 'Flutter']
    },
    {
      company: 'AVASIA INFORMATION SYSTEMS INC.',
      position: 'Web Developer Intern',
      icon: <FaCode size={40} className="text-blue-400" />,
      color: 'from-teal/20 to-blue-400/20',
      description:
        'Developed User Authentication using Cordova to ensure secure access and authentication processes. Created a Company Job Application Form that incorporated MySQL, Mustache JS, jQuery, Slim PHP, and Ajax, optimizing data handling and enhancing user interaction. Additionally, crafted comprehensive documentation for a Transport Route Project, leveraging Google Maps API and routing functionalities to provide clear implementation guidelines.',
      skills: ['PHP', 'MySQL', 'jQuery', 'Google Maps API']
    },
    {
      company: 'CONNECTED TECHNOLOGY',
      position: 'CSS NC2 OJT',
      icon: <FaBriefcase size={40} className="text-teal" />,
      color: 'from-blue-400/20 to-teal/20',
      description:
        'Designed network layouts using Packet Tracer and set up peer-to-peer networking configurations. Additionally, I established server-to-user networks to ensure smooth data flow. Furthermore, I gained hands-on experience in computer assembling and disassembling, enhancing my hardware proficiency.',
      skills: ['Networking', 'Hardware', 'Configuration']
    },
  ];

  return (
    <section
      id="work-experience"
      className="relative bg-rich-black text-off-white py-12 px-4 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-2 tracking-wide">
            Professional Experience
          </h2>
          <div className="w-20 h-0.5 bg-teal"></div>
        </div>

        {/* Minimalist Cards */}
        <div className="space-y-12">
          {workExperiences.map((item, index) => (
            <div
              key={index}
              className="group"
            >
              {/* Company & Position */}
              <div className="flex items-start gap-5 mb-5">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-1.5 group-hover:text-teal transition-colors">
                    {item.company}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 font-normal mb-4">
                    {item.position}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-gray-300 leading-relaxed mb-5 pl-0 md:pl-15">
                {item.description}
              </p>

              {/* Skills - Minimalist Tags */}
              <div className="flex flex-wrap gap-3 pl-0 md:pl-15">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-gray-400 font-light tracking-wide hover:text-teal transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Divider */}
              {index < workExperiences.length - 1 && (
                <div className="mt-12 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience; 