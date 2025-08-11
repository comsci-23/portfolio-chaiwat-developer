import { FaGithub, FaDocker, FaAndroid, FaGitAlt, FaFigma, FaDatabase } from "react-icons/fa";
import { SiFirebase, SiXcode, SiJira, SiRealm, SiPostman } from "react-icons/si";

const softwareSkills = [
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
  { name: "Jira", icon: <SiJira className="text-blue-500" /> },
  { name: "Android Studio", icon: <FaAndroid className="text-green-500" /> },
  { name: "XCode", icon: <SiXcode className="text-gray-300" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Database Management", icon: <FaDatabase className="text-blue-600" /> },
  { name: "Realm", icon: <SiRealm className="text-green-700" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
];

const SoftwareSkills = () => {
  return (
    <section className="bg-[#0f172a] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">🛠 Software Tools</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Tools I regularly use for development, collaboration, and deployment.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {softwareSkills.map((tool, index) => (
            <div
              key={index}
              className="bg-[#1e293b] transition-all rounded-xl p-6 flex flex-col items-center shadow-md"
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <p className="text-white font-medium text-center">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSkills;
