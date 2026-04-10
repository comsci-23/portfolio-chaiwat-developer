import { FaGithub } from "react-icons/fa";
import navIcon1 from "../assets/img/nav-icon1.svg";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-[60px] md:h-[65px] flex items-center justify-between">
        
        {/* LEFT */}
        <div className="text-white text-sm tracking-wide font-medium">
          Chaiwat
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 md:gap-6">

          {/* Divider (ซ่อนใน mobile) */}
          <div className="hidden md:block w-px h-5 bg-white/10"></div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/chaiwat-sasithonratsame-614a8826b/"
            className="opacity-70 hover:opacity-100 transition"
          >
            <img src={navIcon1} alt="LinkedIn" className="w-5 h-5" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/comsci-23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition"
          >
            <FaGithub size={18} />
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;