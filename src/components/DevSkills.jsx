import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaPhp, FaPython, FaJava,  } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFlutter, SiDart, SiBootstrap ,SiJson,} from "react-icons/si";

const skills = [
  { name: "Dart", icon: <SiDart className="text-blue-400" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MySQL", icon: <FaDatabase className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "JSON", icon: <SiJson className="text-gray-400" /> },
];
const DevSkills = () => {
  return (
    <section className="bg-[#0f172a] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">💻 Programming Skills</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some technologies I've been working with as a fullstack developer.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e293b] transition-all rounded-xl p-6 flex flex-col items-center shadow-md"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-white font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevSkills;
