import { FaGithub, FaDocker, FaAndroid, FaGitAlt, FaFigma, FaDatabase } from "react-icons/fa";
import { SiFirebase, SiXcode, SiJira, SiRealm, SiPostman } from "react-icons/si";

const softwareSkills = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "Android Studio", icon: <FaAndroid /> },
  { name: "Xcode", icon: <SiXcode /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Database", icon: <FaDatabase /> },
  { name: "Realm", icon: <SiRealm /> },
];

const SoftwareSkills = () => {
  return (
    <section className="bg-[#0b0b0f] py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">Software Tools</h2>

        <p className="text-gray-500 max-w-xl mx-auto mb-16 text-lg">
          Tools I regularly use for development, collaboration, and deployment.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {softwareSkills.map((tool, index) => (
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
              <div className="text-3xl mb-3 text-white/70 group-hover:text-white transition">{tool.icon}</div>

              {/* Name */}
              <p className="text-sm text-gray-400 group-hover:text-white transition text-center">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSkills;
