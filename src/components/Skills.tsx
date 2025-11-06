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
  SiSupabase,
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
      { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34F26" />, description: 'Advanced' },
      { name: 'CSS3', icon: <FaCss3Alt size={40} color="#1572B6" />, description: 'Intermediate' },
      { name: 'JavaScript', icon: <FaJsSquare size={40} color="#F7DF1E" />, description: 'Intermediate' },
      { name: 'React', icon: <FaReact size={40} color="#61DAFB" />, description: 'Intermediate' },
      { name: 'Next.js', icon: <FaJsSquare size={40} color="#000000" />, description: 'Intermediate' },
      { name: 'Bootstrap', icon: <FaBootstrap size={40} color="#7952B3" />, description: 'Novice' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#38B2AC" />, description: 'Novice' },
      { name: 'Material UI', icon: <FaReact size={40} color="#0081CB" />, description: 'Novice' },
      { name: 'Shadcn', icon: <FaReact size={40} color="#000000" />, description: 'Novice' },
      { name: 'Sass', icon: <FaSass size={40} color="#CC6699" />, description: 'Beginner' },
      { name: 'AJAX', icon: <FaJsSquare size={40} color="#0070C9" />, description: 'Novice' },
      { name: 'Axios', icon: <FaDatabase size={40} color="#5A29E4" />, description: 'Novice' },
      { name: 'Zustand', icon: <FaDatabase size={40} color="#FF6B35" />, description: 'Novice' },
      { name: 'Tanstack Query', icon: <FaDatabase size={40} color="#FF4154" />, description: 'Novice' },
      { name: 'Tanstack Router', icon: <FaRoute size={40} color="#FF4154" />, description: 'Novice' },
    ],
    "Backend Technologies": [
      { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" />, description: 'Beginner' },
      { name: 'Express.js', icon: <FaNodeJs size={40} color="#000000" />, description: 'Novice' },
      { name: 'PHP', icon: <FaPhp size={40} color="#777BB4" />, description: 'Novice' },
    ],
    "Mobile Development": [
      { name: 'Flutter', icon: <SiFlutter size={40} color="#02569B" />, description: 'Novice' },
      { name: 'Dart', icon: <SiDart size={40} color="#0175C2" />, description: 'Novice' },
      { name: 'React Native Bare', icon: <FaMobile size={40} color="#61DAFB" />, description: 'Novice' },
    ],
    "Programming Languages": [
      { name: 'C', icon: <SiC size={40} color="#A8B9CC" />, description: 'Beginner' },
      { name: 'C++', icon: <SiCplusplus size={40} color="#00599C" />, description: 'Beginner' },
      { name: 'Python', icon: <FaPython size={40} color="#3776AB" />, description: 'Novice' },
      { name: 'Java', icon: <FaJava size={40} color="#007396" />, description: 'Novice' },
      { name: 'VB.NET', icon: <FaRegWindowMaximize size={40} color="#0089B3" />, description: 'Novice' },
    ],
    "Databases & Cloud": [
      { name: 'MySQL', icon: <SiMysql size={40} color="#4479A1" />, description: 'Novice' },
      { name: 'Firebase', icon: <SiFirebase size={40} color="#FFCA28" />, description: 'Novice' },
      { name: 'Supabase', icon: <SiSupabase size={40} color="#3ECF8E" />, description: 'Novice' },
    ],
    "Design Tools": [
      { name: 'Figma', icon: <SiFigma size={40} color="#F24E1E" />, description: 'Advanced' },
      { name: 'Canva', icon: <SiCanva size={40} color="#00C4CC" />, description: 'Expert' },
    ],
  };

  const othersCategory = {
    "Others": [
      { name: 'Git', icon: <FaGitAlt size={40} color="#F05032" />, description: 'Advanced' },
      { name: 'WordPress', icon: <FaWordpress size={40} color="#21759B" />, description: 'Intermediate' },
      { name: 'Odoo ERP', icon: <SiOdoo size={40} color="#68C0B4" />, description: 'Novice' },
      { name: 'GoHighLevel', icon: <FaChartLine size={40} color="#6B46C1" />, description: 'Novice' },
    ],
  };

  // Additional tools to add to skills categories
  const additionalSkills = {
    "Corporate Tools": [
      { name: 'Jira', icon: <SiJira size={40} color="#0052CC" />, description: 'Project Management' },
      { name: 'Confluence', icon: <SiConfluence size={40} color="#172B4D" />, description: 'Documentation' },
      { name: 'Slack', icon: <SiSlack size={40} color="#4A154B" />, description: 'Team Communication' },
      { name: 'Trello', icon: <SiTrello size={40} color="#0079BF" />, description: 'Task Management' },
      { name: 'ClickUp', icon: <SiClickup size={40} color="#7B68EE" />, description: 'Productivity Platform' },
      { name: 'Postman', icon: <SiPostman size={40} color="#FF6C37" />, description: 'API Testing' },
    ],
    "Deployment Platforms": [
      { name: 'Vercel', icon: <SiVercel size={40} color="#000000" />, description: 'Frontend Deployment' },
      { name: 'Firebase Hosting', icon: <FaCloud size={40} color="#FFCA28" />, description: 'Google Cloud' },
      { name: 'Netlify', icon: <SiNetlify size={40} color="#00AD9F" />, description: 'Static Site Hosting' },
    ],
  };

  return (
    <>
      <section id="skills" className="bg-charcoal-gray text-off-white py-10 px-4 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10">
          <h2 className="text-teal text-center mb-2 text-3xl font-bold">Skills & Technologies</h2>
          <p className="text-center text-gray-400 mb-8 text-sm">Hover to explore</p>
          
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Skills Section - Dynamic & Visual */}
            {Object.entries(skillCategories).map(([categoryName, skills]) => (
              <div key={categoryName} className="relative">
                {/* Category Badge */}
                <div className="flex items-center justify-center mb-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal to-blue-400 blur-lg opacity-30"></div>
                    <h3 className="relative text-lg font-bold bg-gradient-to-r from-teal to-blue-400 bg-clip-text text-transparent px-6 py-2 border border-teal/30 rounded-full backdrop-blur-sm">{categoryName}</h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {skills.map((skill, index) => (
                    <div 
                      key={`${categoryName}-${index}`} 
                      className="relative group"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-blue-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Card */}
                      <div className="relative bg-gradient-to-br from-dark-gray to-dark-gray/50 backdrop-blur-sm rounded-xl p-3 border border-gray-600/50 hover:border-teal/50 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-teal/20 transform hover:-translate-y-2">
                        <div className="mb-2 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">{skill.icon}</div>
                        <span className="text-xs font-medium text-off-white/90 group-hover:text-teal leading-tight transition-colors duration-300">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {Object.entries(additionalSkills).map(([categoryName, skills]) => (
              <div key={categoryName} className="relative">
                {/* Category Badge */}
                <div className="flex items-center justify-center mb-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal to-blue-400 blur-lg opacity-30"></div>
                    <h3 className="relative text-lg font-bold bg-gradient-to-r from-teal to-blue-400 bg-clip-text text-transparent px-6 py-2 border border-teal/30 rounded-full backdrop-blur-sm">{categoryName}</h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {skills.map((skill, index) => (
                    <div 
                      key={`${categoryName}-${index}`} 
                      className="relative group"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-blue-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Card */}
                      <div className="relative bg-gradient-to-br from-dark-gray to-dark-gray/50 backdrop-blur-sm rounded-xl p-3 border border-gray-600/50 hover:border-teal/50 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-teal/20 transform hover:-translate-y-2">
                        <div className="mb-2 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">{skill.icon}</div>
                        <span className="text-xs font-medium text-off-white/90 group-hover:text-teal leading-tight transition-colors duration-300">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {Object.entries(othersCategory).map(([categoryName, skills]) => (
              <div key={categoryName} className="relative">
                {/* Category Badge */}
                <div className="flex items-center justify-center mb-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal to-blue-400 blur-lg opacity-30"></div>
                    <h3 className="relative text-lg font-bold bg-gradient-to-r from-teal to-blue-400 bg-clip-text text-transparent px-6 py-2 border border-teal/30 rounded-full backdrop-blur-sm">{categoryName}</h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {skills.map((skill, index) => (
                    <div 
                      key={`${categoryName}-${index}`} 
                      className="relative group"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-blue-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Card */}
                      <div className="relative bg-gradient-to-br from-dark-gray to-dark-gray/50 backdrop-blur-sm rounded-xl p-3 border border-gray-600/50 hover:border-teal/50 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-teal/20 transform hover:-translate-y-2">
                        <div className="mb-2 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">{skill.icon}</div>
                        <span className="text-xs font-medium text-off-white/90 group-hover:text-teal leading-tight transition-colors duration-300">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Combinations - Separate Section */}
      <section id="tech-stacks" className="relative bg-rich-black text-off-white py-12 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-teal text-center mb-10 text-3xl font-bold">Tech Stack Combinations</h2>
          
          {/* Frontend-Only Stacks */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-center text-off-white mb-6">Frontend-Only Stacks</h3>
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
            <h3 className="text-xl font-semibold text-center text-off-white mb-6">Backend-Involved Stacks</h3>
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
      </section>
    </>
  );
}

export default Skills;
