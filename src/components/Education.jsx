function Education() {
  return (
    <section className="bg-[#0b0b0f] py-24 text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Education Certification
          </h2>
          {/* <p className="text-gray-500 text-lg">
            Academic background and professional certifications.
          </p> */}
        </div>

        {/* Timeline */}
        <div className="space-y-10">

          {/* EDUCATION */}
          <div className="group border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition">

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3">
              <h3 className="text-xl font-medium">
                Southeast Asia University
              </h3>
              <span className="text-sm text-gray-500">
                2017 — 2021
              </span>
            </div>

            <p className="text-gray-400">
              Bachelor of Science (B.Sc.) in Computer Science
            </p>

          </div>

          {/* CERTIFICATE */}
          <div className="group border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition">

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3">
              <h3 className="text-xl font-medium">
                NSTDA — ITPE Certification
              </h3>
              <span className="text-sm text-gray-500">
                Certified
              </span>
            </div>

            <p className="text-gray-400">
              Information Technology Passport Examination (IP)
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;