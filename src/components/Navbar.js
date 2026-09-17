import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowUpRight, Sparkles } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-950/40 py-2.5 px-6"
            : "bg-slate-900/60 backdrop-blur-lg border border-white/5 py-3 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Status */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-purple-300 transition-colors">
                Anuj Yadav
              </span>
              <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5 hidden sm:flex">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                Available for roles
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center bg-slate-900/70 border border-white/5 rounded-full px-3 py-1 space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-purple-600/80 to-indigo-600/80 shadow-md shadow-purple-500/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/30 hover:shadow-purple-500/50 transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-200" />
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl shadow-purple-950/50 flex flex-col space-y-3 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new opportunities
            </span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeSection === item.id
                  ? "bg-purple-600/30 text-purple-300 border border-purple-500/30"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full mt-2 py-2.5 text-center text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-600/30"
          >
            Get In Touch
          </button>
        </div>
      )}
    </header>
  );
}

