import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0b0b0f] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center md:text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Chaiwat Sasithonratsame</p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/comsci-23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/chaiwat-sasithonratsame-614a8826b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
