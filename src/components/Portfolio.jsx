import React, { useState } from "react";
import Pod1 from "../assets/img/project-img1.png";
import Pod2 from "../assets/img/project-img2.png";
import Pod3 from "../assets/img/project-img3.png";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  const projects = [
    {
      image: Pod1,
      category: "mobile",
      label: "Mobile Application",
      title: "TRR Family",
      link: "https://apps.apple.com/th/app/trr-family/id6450155810",
    },
    {
      image: Pod2,
      category: "mobile",
      label: "Mobile Application",
      title: "TRR Kinphak",
      link: "https://apps.apple.com/th/app/trr-kinphak/id1628873648",
    },
    {
      image: Pod3,
      category: "mobile",
      label: "Mobile Application",
      title: "myAIS",
      link: "https://apps.apple.com/us/app/myais/id399758084",
    },
  ];

  return (
    <section className="pt-20 pb-16 md:pt-[120px] md:pb-[100px] bg-[#0b0b0f] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-sm tracking-widest text-gray-400 uppercase">
            Projects
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Projects I Contributed To
          </h2>

          <p className="text-gray-400 mt-4 text-sm md:text-base">
            I contributed to these projects as a team member
          </p>
        </div>

        {/* FILTER */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => handleProject("all")}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition
              ${
                showCard === "all"
                  ? "bg-white text-black"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              }
            `}
          >
            All Projects
          </button>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((item) => showCard === "all" || item.category === showCard)
            .map((item, index) => (
              <PortfolioCard key={index} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

// ================= CARD =================

const PortfolioCard = ({ item }) => {
  return (
    <div
      className="
        group
        relative
        rounded-2xl
        overflow-hidden
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        hover:bg-white/10
        transition duration-500
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="
            w-full h-[220px] object-cover
            group-hover:scale-110
            transition duration-700 ease-out
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 text-center">
        <span className="text-xs text-gray-400 uppercase tracking-wide">
          {item.label}
        </span>

        <h3 className="text-lg font-semibold mt-2 mb-4">
          {item.title}
        </h3>

        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-5 py-2
            rounded-full
            text-sm font-medium
            border border-white/20
            text-white/80
            hover:bg-white
            hover:text-black
            transition
          "
        >
          View Details →
        </a>
      </div>

      {/* 🔥 glow hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/5"></div>
    </div>
  );
};