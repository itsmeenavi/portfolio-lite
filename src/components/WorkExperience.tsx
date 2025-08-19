import { FaBriefcase } from 'react-icons/fa';
import workImage from '../assets/work.png';

function WorkExperience() {
  const workExperiences = [
    {
      company: 'Connected Technology',
      position: 'CSS NC2 OJT',
      years: 'Nov 2022',
      description:
        'Designed network layouts using Packet Tracer and set up peer-to-peer networking configurations. Additionally, I established server-to-user networks to ensure smooth data flow. Furthermore, I gained hands-on experience in computer assembling and disassembling, enhancing my hardware proficiency.',
    },
    {
      company: 'Avasia Information Systems Inc.',
      position: 'Web Developer Intern',
      years: 'March 2023 - July 2023',
      description:
        'Developed User Authentication using Cordova to ensure secure access and authentication processes. Created a Company Job Application Form that incorporated MySQL, Mustache JS, jQuery, Slim PHP, and Ajax, optimizing data handling and enhancing user interaction. Additionally, crafted comprehensive documentation for a Transport Route Project, leveraging Google Maps API and routing functionalities to provide clear implementation guidelines.',
    },
    {
      company: 'P.C.E.S Inc.',
      position: 'Mobile Application Developer',
      years: 'Sept 2023 - Feb 2024',
      description:
        'Developed websites using PHP and JavaScript. Designed websites using WordPress CMS with the help of HTML and JavaScript. Created professional presentations for B2B and B2C clients. Designed the full UI/UX of a mobile app using Figma. Initiated development of a mobile application version of the main company product using Flutter Dart. Managed the IT team to be more organized and systematic.',
    },
    {
      company: 'Philippine Statistics Authority',
      position: 'Systems Developer Internship',
      years: 'October 2024 - December 2024',
      description:
        'Gained in-depth exposure to PSA\'s operations and the BRAMS/BRAP Project through multiple workshops and meetings. Strengthened JavaScript proficiency by completing a full course, which covered essential concepts such as HTTP vs. HTTPS, encryption, and hashing. Simultaneously, advanced skills in Golang by studying various courses and setting up local client-server connections. Contributed to UI/UX design discussions for the BRAP application and documented technical insights during project sessions. Expanded front-end capabilities by learning ReactJS (including API fetching) and explored modern web technologies such as Next.js and Supabase for streamlined development workflows. Enhanced mobile development expertise with Flutter while gaining hands-on experience initializing projects with PostgreSQL and npm-based toolchains.',
    },
    {
      company: 'Fundamental IT Solutions',
      position: 'Junior Frontend Developer',
      years: 'April 2025 - August 2025',
      description:
        'Contributing to frontend development projects using modern technologies and frameworks. Focusing on creating responsive and user-friendly interfaces while collaborating with cross-functional teams to deliver high-quality software solutions.',
    },
    {
      company: 'Anehan IT Solutions (Start-Up)',
      position: 'Web Developer (Freelance)',
      years: 'March 2025 - Current',
      description:
        'Developing the company website and creating custom client projects including fitness websites, makeup product business websites, and other e-commerce solutions. Utilizing modern web technologies to build responsive, user-friendly interfaces that enhance client business presence and drive customer engagement.',
    },
  ];

  return (
    <section
      id="work-experience"
      className="bg-rich-black text-off-white py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Work Image with hover effects */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={workImage}
                alt="Work Experience"
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Decorative Teal Borders (hover effect) */}
            <div className="absolute -top-4 -left-4 w-24 h-24 
                            border-t-4 border-l-4 border-teal 
                            opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500" 
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 
                            border-b-4 border-r-4 border-teal 
                            opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500" 
            />
          </div>

          {/* Right Side - Timeline */}
          <div>
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-teal to-blue-400 bg-clip-text text-transparent">
              Work Experience
            </h2>

            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal"></div>
              
              <div className="space-y-6">
                {workExperiences.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-6 
                               transition-transform duration-300 hover:-translate-y-1"
                  >
                    {/* FaBriefcase icon on the left */}
                    <FaBriefcase className="text-teal w-6 h-6 mt-1 flex-shrink-0 relative z-10" />

                    <div className="flex-1">
                      <span className="block text-teal font-semibold">
                        {item.years}
                      </span>
                      <h3 className="text-xl font-semibold mt-1">
                        {item.company}
                      </h3>
                      <p className="text-teal/80 font-medium mb-2">{item.position}</p>
                      {item.description && (
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience; 