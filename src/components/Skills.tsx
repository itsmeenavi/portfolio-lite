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
  FaRobot,
  FaPalette,
  FaEye,
  FaImage,
  FaDribbble,
  FaBehance,
  FaFileVideo,
  FaEraser,
  FaCloud,
  FaExchangeAlt,
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
  SiOpenai,
  SiVercel,
  SiNetlify,
  SiJira,
  SiConfluence,
  SiSlack,
  SiTrello,
  SiClickup,
  SiPostman,
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
    "Others": [
      { name: 'Git', icon: <FaGitAlt size={60} color="#F05032" />, description: 'Advanced' },
      { name: 'WordPress', icon: <FaWordpress size={60} color="#21759B" />, description: 'Intermediate' },
      { name: 'Odoo ERP', icon: <SiOdoo size={60} color="#68C0B4" />, description: 'Novice' },
    ],
  };

  // Extras categories with different design (no proficiency levels)
  const extrasCategories = {
    "AI Models & Tools": [
      { name: 'Gemini 2.5 Pro', icon: <FaRobot size={40} color="#4285F4" />, description: 'Specific/Hard Tasks' },
      { name: 'Claude Sonnet 4', icon: <FaRobot size={40} color="#FF6B35" />, description: 'Large Refactors' },
      { name: 'ChatGPT Free', icon: <SiOpenai size={40} color="#10A37F" />, description: 'Developer Questions' },
      { name: 'Qwen 3', icon: <FaRobot size={40} color="#FF6B6B" />, description: 'Daily Go-to AI' },
      { name: 'Cursor', icon: <FaRobot size={40} color="#00D4AA" />, description: 'AI-Powered IDE' },
    ],
    "Helpful Tools": [
      { name: 'Readdy AI', icon: <FaPalette size={40} color="#FF6B6B" />, description: 'AI Design Tool' },
      { name: 'Google Lens', icon: <FaEye size={40} color="#4285F4" />, description: 'Visual Search' },
      { name: 'Image Color Picker', icon: <FaImage size={40} color="#FF6B35" />, description: 'Color Extraction' },
      { name: 'Dribbble', icon: <FaDribbble size={40} color="#EA4C89" />, description: 'Design Inspiration' },
      { name: 'Behance', icon: <FaBehance size={40} color="#1769FF" />, description: 'Design Inspiration' },
      { name: 'LottieFiles', icon: <FaFileVideo size={40} color="#00D4AA" />, description: 'Animation Library' },
      { name: 'Postman', icon: <SiPostman size={40} color="#FF6C37" />, description: 'API Testing' },
      { name: 'Remove.bg', icon: <FaEraser size={40} color="#FF6B6B" />, description: 'Background Removal' },
      { name: 'CloudConvert', icon: <FaExchangeAlt size={40} color="#FF6B35" />, description: 'File Conversion' },
    ],
    "Corporate Tools": [
      { name: 'Jira', icon: <SiJira size={40} color="#0052CC" />, description: 'Project Management' },
      { name: 'Confluence', icon: <SiConfluence size={40} color="#172B4D" />, description: 'Documentation' },
      { name: 'Slack', icon: <SiSlack size={40} color="#4A154B" />, description: 'Team Communication' },
      { name: 'Trello', icon: <SiTrello size={40} color="#0079BF" />, description: 'Task Management' },
      { name: 'ClickUp', icon: <SiClickup size={40} color="#7B68EE" />, description: 'Productivity Platform' },
    ],
    "Deployment Platforms": [
      { name: 'Vercel', icon: <SiVercel size={40} color="#000000" />, description: 'Frontend Deployment' },
      { name: 'Firebase Hosting', icon: <FaCloud size={40} color="#FFCA28" />, description: 'Google Cloud' },
      { name: 'Netlify', icon: <SiNetlify size={40} color="#00AD9F" />, description: 'Static Site Hosting' },
    ],
  };

  // Define the color mapping for skill levels (darker/muted colors)
  const levelColors = {
    Beginner: '#B71C1C', // Dark Red
    Novice: '#E65100',   // Dark Orange
    Intermediate: '#FBC02D', // Muted Yellow
    Advanced: '#1B5E20', // Dark Green
    Expert: '#0D47A1',   // Dark Blue
  };

  // Function to determine if the text should be light or dark based on the background color
  const getTextColor = (backgroundColor: string) => {
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#FFFFFF'; // Dark text for light backgrounds, light text for dark backgrounds
  };

    return (
    <section id="skills" className="bg-charcoal-gray text-off-white py-12 px-4">
      <h2 className="text-teal text-center mb-10 text-4xl font-bold font-poppins">Skills</h2>
      <div className="max-w-7xl mx-auto space-y-12">
        {Object.entries(skillCategories).map(([categoryName, skills]) => (
          <div key={categoryName} className="space-y-6">
            <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-teal to-blue-400 bg-clip-text text-transparent">
              {categoryName}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => {
                const backgroundColor = levelColors[skill.description as keyof typeof levelColors];
                const textColor = getTextColor(backgroundColor);

                return (
                  <div key={`${categoryName}-${index}`} className="flip-card group h-48">
                    <div className="flip-card-inner transform transition-transform duration-500 group-hover:rotate-y-180 h-full">
                      <div className="flip-card-front flex flex-col items-center justify-center p-6 bg-dark-gray rounded-lg shadow-xl border-2 border-teal hover:border-teal-500 transition-all duration-300 h-full">
                        <div aria-label={skill.name}>{skill.icon}</div>
                        <span className="mt-2 text-lg text-off-white font-semibold font-poppins text-center">{skill.name}</span>
                      </div>
                      <div
                        className="flip-card-back flex items-center justify-center p-6 rounded-lg shadow-xl border-2 border-dark-gray transition-all duration-300 h-full"
                        style={{ backgroundColor, color: textColor }}
                      >
                        <p className="text-center font-medium font-poppins">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Extras Section with Different Design */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-teal to-blue-400 bg-clip-text text-transparent mb-12">
            Extras & Tools
          </h3>
          {Object.entries(extrasCategories).map(([categoryName, tools]) => (
            <div key={categoryName} className="space-y-6 mb-12">
              <h4 className="text-xl font-bold text-center text-teal mb-6">
                {categoryName}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={`${categoryName}-${index}`} 
                    className="group relative bg-dark-gray rounded-lg p-4 shadow-lg border border-gray-600 hover:border-teal transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className="group-hover:scale-110 transition-transform duration-300" aria-label={tool.name}>
                        {tool.icon}
                      </div>
                      <div className="text-center">
                        <h5 className="text-sm font-semibold text-off-white font-poppins leading-tight">
                          {tool.name}
                        </h5>
                        <p className="text-xs text-gray-400 mt-1 font-poppins">
                          {tool.description}
                        </p>
                      </div>
                    </div>
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