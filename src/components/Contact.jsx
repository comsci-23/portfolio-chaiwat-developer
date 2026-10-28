function Contact() {
  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-white/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Contact</h2>

        <p className="text-gray-400 text-lg mb-16"></p>

        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="mailto:your_email@gmail.com"
              className="px-8 py-4 bg-white text-black rounded-full font-medium transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/chaiwat-sasithonratsame-614a8826b/"
              target="_blank"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black transition duration-300"
            >
              LinkedIn
            </a>

            {/* <a
              href="https://comsci-23.github.io/profile.github.io/"
              target="_blank"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black transition duration-300"
            >
              Portfolio
            </a> */}
          </div>

          {/* Divider */}
          <div className="mt-14 border-t border-white/10"></div>

          {/* NEW Footer (เท่กว่าเดิมเยอะ) */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            {/* Left */}
            <p>
              Built & Designed by <span className="text-white font-medium">Chaiwat</span>
            </p>

            {/* Center */}
            <p className="hidden md:block">Software Engineer • Flutter • Fullstack</p>

            {/* Right */}
            <div className="flex gap-4">
              <a href="https://github.com/comsci-23" target="_blank" className="hover:text-white transition">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/chaiwat-sasithonratsame-614a8826b/"
                target="_blank"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
