import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaPhp, FaPython, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFlutter, SiDart, SiBootstrap, SiJson } from "react-icons/si";

const skills = [
  { name: "Dart", icon: <SiDart /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MySQL", icon: <FaDatabase /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "JSON", icon: <SiJson /> },

  {
    name: "C",
    icon: <span className="text-lg font-semibold">C</span>,
  },
  {
    name: "C#",
    icon: <span className="text-lg font-semibold">C#</span>,
  },
];

const DevSkills = () => {
  return (
    <section className="bg-[#0b0b0f] py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">Programming Skills</h2>

        <p className="text-gray-500 max-w-xl mx-auto mb-16 text-lg">
          Here are some technologies I've been working with as a fullstack developer.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                flex flex-col items-center
                justify-center
                transition-all duration-300
                hover:bg-white/10
                hover:scale-[1.03]
              "
            >
              {/* Icon */}
              <div className="text-3xl mb-3 text-white/70 group-hover:text-white transition">{skill.icon}</div>

              {/* Name */}
              <p className="text-sm text-gray-400 group-hover:text-white transition">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevSkills;
