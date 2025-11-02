import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaSass,
  FaWordpress,
  FaGitAlt,
  FaRegWindowMaximize,
  FaDatabase,
  FaMobile,
  FaRoute,
  FaCloud,
  FaChartLine,
} from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiTailwindcss,
  SiFigma,
  SiCanva,
  SiOdoo,
  SiMysql,
  SiVercel,
  SiNetlify,
  SiJira,
  SiConfluence,
  SiSlack,
  SiTrello,
  SiClickup,
  SiPostman,
  SiAntdesign,
} from 'react-icons/si';

function Skills() {
  const skillCategories = {
    "Frontend Technologies": [
      { name: 'HTML5', icon: <FaHtml5 size={60} color="#E34F26" />, description: 'Advanced' },
      { name: 'CSS3', icon: <FaCss3Alt size={60} color="#1572B6" />, description: 'Intermediate' },
      { name: 'JavaScript', icon: <FaJsSquare size={60} color="#F7DF1E" />, description: 'Intermediate' },
      { name: 'React', icon: <FaReact size={60} color="#61DAFB" />, description: 'Intermediate' },
      { name: 'Next.js', icon: <FaJsSquare size={60} color="#000000" />, description: 'Intermediate' },
      { name: 'Bootstrap', icon: <FaBootstrap size={60} color="#7952B3" />, description: 'Novice' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={60} color="#38B2AC" />, description: 'Novice' },
      { name: 'Material UI', icon: <FaReact size={60} color="#0081CB" />, description: 'Novice' },
      { name: 'Shadcn', icon: <FaReact size={60} color="#000000" />, description: 'Novice' },
      { name: 'Sass', icon: <FaSass size={60} color="#CC6699" />, description: 'Beginner' },
      { name: 'AJAX', icon: <FaJsSquare size={60} color="#0070C9" />, description: 'Novice' },
      { name: 'Axios', icon: <FaDatabase size={60} color="#5A29E4" />, description: 'Novice' },
      { name: 'Zustand', icon: <FaDatabase size={60} color="#FF6B35" />, description: 'Novice' },
      { name: 'Tanstack Query', icon: <FaDatabase size={60} color="#FF4154" />, description: 'Novice' },
      { name: 'Tanstack Router', icon: <FaRoute size={60} color="#FF4154" />, description: 'Novice' },
    ],
         "Backend Technologies": [
       { name: 'Node.js', icon: <FaNodeJs size={60} color="#339933" />, description: 'Beginner' },
       { name: 'Express.js', icon: <FaNodeJs size={60} color="#000000" />, description: 'Novice' },
       { name: 'PHP', icon: <FaPhp size={60} color="#777BB4" />, description: 'Novice' },
     ],
    "Mobile Development": [
      { name: 'Flutter', icon: <SiFlutter size={60} color="#02569B" />, description: 'Novice' },
      { name: 'Dart', icon: <SiDart size={60} color="#0175C2" />, description: 'Novice' },
      { name: 'React Native Bare', icon: <FaMobile size={60} color="#61DAFB" />, description: 'Novice' },
    ],
    "Programming Languages": [
      { name: 'C', icon: <SiC size={60} color="#A8B9CC" />, description: 'Beginner' },
      { name: 'C++', icon: <SiCplusplus size={60} color="#00599C" />, description: 'Beginner' },
      { name: 'Python', icon: <FaPython size={60} color="#3776AB" />, description: 'Novice' },
      { name: 'Java', icon: <FaJava size={60} color="#007396" />, description: 'Novice' },
      { name: 'VB.NET', icon: <FaRegWindowMaximize size={60} color="#0089B3" />, description: 'Novice' },
    ],
    "Databases & Cloud": [
      { name: 'MySQL', icon: <SiMysql size={60} color="#4479A1" />, description: 'Novice' },
      { name: 'Firebase', icon: <SiFirebase size={60} color="#FFCA28" />, description: 'Novice' },
    ],
    "Design Tools": [
      { name: 'Figma', icon: <SiFigma size={60} color="#F24E1E" />, description: 'Advanced' },
      { name: 'Canva', icon: <SiCanva size={60} color="#00C4CC" />, description: 'Expert' },
    ],
  };

  const othersCategory = {
    "Others": [
      { name: 'Git', icon: <FaGitAlt size={60} color="#F05032" />, description: 'Advanced' },
      { name: 'WordPress', icon: <FaWordpress size={60} color="#21759B" />, description: 'Intermediate' },
      { name: 'Odoo ERP', icon: <SiOdoo size={60} color="#68C0B4" />, description: 'Novice' },
      { name: 'GoHighLevel', icon: <FaChartLine size={60} color="#6B46C1" />, description: 'Novice' },
    ],
  };

  // Additional tools to add to skills categories
  const additionalSkills = {
    "Corporate Tools": [
      { name: 'Jira', icon: <SiJira size={60} color="#0052CC" />, description: 'Project Management' },
      { name: 'Confluence', icon: <SiConfluence size={60} color="#172B4D" />, description: 'Documentation' },
      { name: 'Slack', icon: <SiSlack size={60} color="#4A154B" />, description: 'Team Communication' },
      { name: 'Trello', icon: <SiTrello size={60} color="#0079BF" />, description: 'Task Management' },
      { name: 'ClickUp', icon: <SiClickup size={60} color="#7B68EE" />, description: 'Productivity Platform' },
      { name: 'Postman', icon: <SiPostman size={60} color="#FF6C37" />, description: 'API Testing' },
    ],
    "Deployment Platforms": [
      { name: 'Vercel', icon: <SiVercel size={60} color="#000000" />, description: 'Frontend Deployment' },
      { name: 'Firebase Hosting', icon: <FaCloud size={60} color="#FFCA28" />, description: 'Google Cloud' },
      { name: 'Netlify', icon: <SiNetlify size={60} color="#00AD9F" />, description: 'Static Site Hosting' },
    ],
  };

  return (
    <section id="skills" className="bg-charcoal-gray text-off-white py-12 px-4">
      <h2 className="text-teal text-center mb-8 text-3xl font-bold">Skills</h2>
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Tech Stack Combinations Section - MOVED TO TOP */}
        <div>
          <h3 className="text-2xl font-bold text-center text-teal mb-8">
            Tech Stack Combinations
          </h3>
           
          {/* Frontend-Only Stacks */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-center text-off-white mb-4">Frontend-Only Stacks</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* React + Tailwind Stack */}
              <div className="bg-dark-gray rounded-lg p-4 border border-gray-600 hover:border-teal transition-all duration-300">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaReact size={30} color="#61DAFB" />
                  <span className="text-lg font-bold text-teal">+</span>
                  <SiTailwindcss size={30} color="#38B2AC" />
                </div>
                <h4 className="text-sm font-semibold text-center text-off-white">React + Tailwind CSS</h4>
              </div>

              {/* React + Shadcn Stack */}
              <div className="bg-dark-gray rounded-lg p-4 border border-gray-600 hover:border-teal transition-all duration-300">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaReact size={30} color="#61DAFB" />
                  <span className="text-lg font-bold text-teal">+</span>
                  <FaReact size={30} color="#000000" />
                </div>
                <h4 className="text-sm font-semibold text-center text-off-white">React + Shadcn</h4>
              </div>

              {/* React + Material UI Stack */}
              <div className="bg-dark-gray rounded-lg p-4 border border-gray-600 hover:border-teal transition-all duration-300">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaReact size={30} color="#61DAFB" />
                  <span className="text-lg font-bold text-teal">+</span>
                  <FaReact size={30} color="#0081CB" />
                </div>
                <h4 className="text-sm font-semibold text-center text-off-white">React + Material UI</h4>
              </div>

              {/* NextJS + Material UI Stack */}
              <div className="bg-dark-gray rounded-lg p-4 border border-gray-600 hover:border-teal transition-all duration-300">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaJsSquare size={30} color="#000000" />
                  <span className="text-lg font-bold text-teal">+</span>
                  <FaReact size={30} color="#0081CB" />
                </div>
                <h4 className="text-sm font-semibold text-center text-off-white">NextJS + Material UI</h4>
              </div>

              {/* React + AntD Stack */}
              <div className="bg-dark-gray rounded-lg p-4 border border-gray-600 hover:border-teal transition-all duration-300">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaReact size={30} color="#61DAFB" />
                  <span className="text-lg font-bold text-teal">+</span>
                  <SiAntdesign size={30} color="#0170FE" />
                </div>
                <h4 className="text-sm font-semibold text-center text-off-white">React + Ant Design</h4>
              </div>
            </div>
          </div>

          {/* Backend-Involved Stacks */}
          <div>
            <h4 className="text-lg font-semibold text-center text-off-white mb-4">Backend-Involved Stacks</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* PHP + MySQL Stack */}
              <div className="bg-dark-gray rounded-lg p-4 border border-gray-600 hover:border-teal transition-all duration-300">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaPhp size={30} color="#777BB4" />
                  <span className="text-lg font-bold text-teal">+</span>
                  <SiMysql size={30} color="#4479A1" />
                </div>
                <h4 className="text-sm font-semibold text-center text-off-white">PHP + MySQL</h4>
              </div>

              {/* Flutter + Firebase Stack */}
              <div className="bg-dark-gray rounded-lg p-4 border border-gray-600 hover:border-teal transition-all duration-300">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <SiFlutter size={30} color="#02569B" />
                  <span className="text-lg font-bold text-teal">+</span>
                  <SiFirebase size={30} color="#FFCA28" />
                </div>
                <h4 className="text-sm font-semibold text-center text-off-white">Flutter + Firebase</h4>
              </div>

              {/* React + Firebase Stack */}
              <div className="bg-dark-gray rounded-lg p-4 border border-gray-600 hover:border-teal transition-all duration-300">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaReact size={30} color="#61DAFB" />
                  <span className="text-lg font-bold text-teal">+</span>
                  <SiFirebase size={30} color="#FFCA28" />
                </div>
                <h4 className="text-sm font-semibold text-center text-off-white">React + Firebase</h4>
              </div>

              {/* React + External APIs Stack */}
              <div className="bg-dark-gray rounded-lg p-4 border border-gray-600 hover:border-teal transition-all duration-300">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaReact size={30} color="#61DAFB" />
                  <span className="text-lg font-bold text-teal">→</span>
                  <FaDatabase size={25} color="#666666" />
                </div>
                <h4 className="text-sm font-semibold text-center text-off-white">React + External APIs</h4>
              </div>

              {/* Next.js + External APIs Stack */}
              <div className="bg-dark-gray rounded-lg p-4 border border-gray-600 hover:border-teal transition-all duration-300">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaJsSquare size={30} color="#000000" />
                  <span className="text-lg font-bold text-teal">→</span>
                  <FaDatabase size={25} color="#666666" />
                </div>
                <h4 className="text-sm font-semibold text-center text-off-white">Next.js + External APIs</h4>
              </div>

              {/* Next.js + Firebase Stack */}
              <div className="bg-dark-gray rounded-lg p-4 border border-gray-600 hover:border-teal transition-all duration-300">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaJsSquare size={30} color="#000000" />
                  <span className="text-lg font-bold text-teal">+</span>
                  <SiFirebase size={30} color="#FFCA28" />
                </div>
                <h4 className="text-sm font-semibold text-center text-off-white">Next.js + Firebase</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-center text-teal mb-6">Skills</h3>
          {Object.entries(skillCategories).map(([categoryName, skills]) => (
            <div key={categoryName} className="mb-6">
              <h4 className="text-lg font-semibold text-off-white mb-3">{categoryName}</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div key={`${categoryName}-${index}`} className="bg-dark-gray rounded px-3 py-2 border border-gray-600 hover:border-teal transition-all duration-300 flex items-center gap-2">
                    <div className="scale-50 -my-2">{skill.icon}</div>
                    <span className="text-sm text-off-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {Object.entries(additionalSkills).map(([categoryName, skills]) => (
            <div key={categoryName} className="mb-6">
              <h4 className="text-lg font-semibold text-off-white mb-3">{categoryName}</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div key={`${categoryName}-${index}`} className="bg-dark-gray rounded px-3 py-2 border border-gray-600 hover:border-teal transition-all duration-300 flex items-center gap-2">
                    <div className="scale-50 -my-2">{skill.icon}</div>
                    <span className="text-sm text-off-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {Object.entries(othersCategory).map(([categoryName, skills]) => (
            <div key={categoryName} className="mb-6">
              <h4 className="text-lg font-semibold text-off-white mb-3">{categoryName}</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div key={`${categoryName}-${index}`} className="bg-dark-gray rounded px-3 py-2 border border-gray-600 hover:border-teal transition-all duration-300 flex items-center gap-2">
                    <div className="scale-50 -my-2">{skill.icon}</div>
                    <span className="text-sm text-off-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills; 