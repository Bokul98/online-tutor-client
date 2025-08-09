import React from "react";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();

  const navLinks = [
    {
      title: "Services",
      links: ["Language Tutoring", "Subject Coaching", "Online Sessions", "Exam Prep"],
    },
    {
      title: "Company",
      links: ["About Us", "Contact", "Careers", "Press Kit"],
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
    },
  ];

  const socials = [
    {
      href: "https://www.facebook.com/bokuldeveloper70/",
      label: "Facebook",
      icon: (
        <path d="M15.5 8.5h-2V7.5c0-.414.336-.75.75-.75h1.25V5h-2.25A2.25 2.25 0 0 0 11 7.25v1.25H9.5V11H11v6h2.5v-6h1.5l.5-2.5h-2z" />
      ),
      fill: "#1877F2",
    },
    {
      href: "https://x.com/Bokuldeveloper",
      label: "Twitter",
      icon: (
        <path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47a.75.75 0 0 0-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z"/>
      ),
      fill: "#1DA1F2",
    },
    {
      href: "https://www.instagram.com/bokul_developer/",
      label: "Instagram",
      icon: (
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 3.5a5 5 0 1 1-5 5 5 5 0 0 1 5-5z" />
      ),
      fill: "#E1306C",
    },
    {
      href: "https://www.linkedin.com/in/bokul-kumar-badyakar-677369191/",
      label: "LinkedIn",
      icon: (
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
      ),
      fill: "#0077B5",
    },
    {
      href: "https://github.com/Bokul98",
      label: "GitHub",
      icon: (
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482..." />
      ),
      fill: "#333",
    },
  ];

  return (
    <footer
      className={`transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 to-slate-800 text-gray-300"
          : "bg-gradient-to-br from-slate-100 to-white text-gray-700"
      } border-t ${isDark ? "border-slate-700" : "border-gray-200"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {navLinks.map((col) => (
          <div key={col.title}>
            <h3
              className={`mb-4 font-semibold text-lg ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {col.title}
            </h3>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`hover:text-blue-500 transition-colors duration-200 block`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social column */}
        <div>
          <h3
            className={`mb-4 font-semibold text-lg ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Connect
          </h3>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition-transform duration-200"
                title={s.label}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={s.fill} className="w-5 h-5">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom small strip */}
      <div
        className={`py-4 border-t text-center text-sm ${
          isDark
            ? "border-slate-700 text-gray-400"
            : "border-gray-200 text-gray-500"
        }`}
      >
        © 2025 LangLink Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;