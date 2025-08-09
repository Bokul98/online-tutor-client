import React from "react";
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { FaBookOpen, FaExternalLinkAlt } from "react-icons/fa";

const Resources = () => {
  const { isDark } = useTheme();

  const resources = [
    {
      title: "Online Dictionaries",
      desc: "Explore multilingual dictionaries for better vocabulary building.",
      link: "https://dictionary.cambridge.org/",
    },
    {
      title: "Free Coding Tutorials",
      desc: "Learn programming from free and interactive tutorials online.",
      link: "https://www.freecodecamp.org/",
    },
    {
      title: "Language Exchange",
      desc: "Find native speakers to practice conversation skills.",
      link: "https://www.conversationexchange.com/",
    },
    {
      title: "Open Library",
      desc: "A free online library with millions of books to read.",
      link: "https://openlibrary.org/",
    },
    {
      title: "TED-Ed",
      desc: "Educational videos & resources for creative classroom learning.",
      link: "https://ed.ted.com/",
    },
    {
      title: "Khan Academy",
      desc: "Learn math, science, history, and more for free.",
      link: "https://www.khanacademy.org/",
    },
  ];

  return (
    <section
      className={`min-h-screen transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-gray-100"
          : "bg-gradient-to-br from-indigo-50 via-white to-slate-50 text-gray-800"
      }`}
    >
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1681842049775-dab552694e6e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Resources Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-black/60"
              : "bg-gradient-to-b from-indigo-500/60 to-indigo-800/40"
          }`}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center items-center text-center">
          <FaBookOpen className="text-4xl md:text-5xl text-white mb-4" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Learning Resources
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
            Curated tools, platforms, and guides to boost your learning journey.
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                isDark ? "bg-slate-800/80 border border-slate-700" : "bg-white border border-gray-200"
              }`}
            >
              <div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-auto font-medium text-blue-500 hover:text-blue-600"
              >
                Visit Site
                <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;