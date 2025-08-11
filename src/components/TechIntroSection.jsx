import React from "react";
import { FiExternalLink } from "react-icons/fi";

const TechIntroSection = () => {
  return (
    <section className="py-24 px-4 bg-transparent">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            📖 My Tech Philosophy
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Every line of code has a story. Here's mine — thoughts, tools, and journeys I’ve documented as a software engineer.
          </p>
        </div>

        {/* Blog Card */}
        <div className="relative bg-white dark:bg-gradient-to-br dark:from-[#1f1f1f] dark:to-[#2e2e2e] p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-white/10 transition duration-300 hover:shadow-2xl">
          {/* Tag */}
          <div className="mb-4 inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide">Notion Blog</div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Hi, I’m Chaiwat — I’m working as a Software Engineer
          </h3>

          <p className="text-gray-800 dark:text-gray-300 mb-6 text-base leading-relaxed">
            I specialize in full-stack development — combining performance, elegance, and usability. My work spans mobile, backend, and more. This blog reflects my growth, my principles, and the tech I love.
          </p>

          <a
            href="https://www.notion.so/Hi-I-m-Chaiwat-I-m-working-as-a-Software-Engineer-2495ca1a476080e79347ff3a6c30536f"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Read the full post <FiExternalLink className="text-base" />
          </a>

          {/* Glow */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary opacity-20 blur-3xl rounded-full z-0" />
        </div>
      </div>
    </section>
  );
};

export default TechIntroSection;
