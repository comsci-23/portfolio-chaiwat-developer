import navIcon1 from "../assets/img/nav-icon1.svg";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-[rgba(0,0,0,0.4)] backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto max-w-[1320px] h-auto px-6 py-5 flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px]">
        <div className="flex items-center gap-4 mt-5 md:mt-0 justify-end w-full">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/chaiwat-sasithonratsame-614a8826b/"
            className="w-10 h-10 flex items-center justify-center border border-white rounded-full transition-all duration-300 hover:bg-white hover:text-black"
          >
            <img src={navIcon1} alt="LinkedIn" className="w-5 h-5" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/comsci-23"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-white rounded-full transition-all duration-300 hover:bg-white hover:text-black"
          >
            <FaGithub className="w-5 h-5 text-white" />
          </a>

          {/* Download CV */}
          {/* <a href="https://drive.google.com/file/d/1pp-aL3XT56rVmR_uWTXv6eDoGOqinv10/edit"> */}
          <a href="https://drive.google.com/file/d/15fXn4nRz59DCJ18QuwZUWrXxTDT9o0sb/view?usp=sharing">
            <button className="text-white border border-white py-2 px-5 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
              <span>Download CV</span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
