import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Layers,
  Cpu,
  Database,
} from "lucide-react";

const roles = [
  "Full Stack Web Developer",
  "AI & LLM Integrator",
  "MERN Stack Specialist",
  "Scalable Web Architect",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="aura-glow w-[500px] h-[500px] bg-purple-600/25 top-1/4 -left-32 animate-pulse-slow" />
      <div className="aura-glow w-[450px] h-[450px] bg-indigo-500/20 bottom-10 -right-20 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="aura-glow w-[350px] h-[350px] bg-cyan-500/15 top-1/3 left-1/2 -translate-x-1/2" />

      <div className="relative max-w-5xl mx-auto w-full text-center z-10">
        
        {/* Floating tech tags around hero */}
        <div className="hidden lg:block absolute -left-12 top-24 animate-float">
          <div className="glass-panel px-3.5 py-2 rounded-2xl flex items-center gap-2 text-xs font-mono text-cyan-300 shadow-xl shadow-cyan-950/40 border-cyan-500/30">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>AI / LLM Streaming</span>
          </div>
        </div>

        <div className="hidden lg:block absolute -right-12 top-20 animate-float" style={{ animationDelay: '2.5s' }}>
          <div className="glass-panel px-3.5 py-2 rounded-2xl flex items-center gap-2 text-xs font-mono text-purple-300 shadow-xl shadow-purple-950/40 border-purple-500/30">
            <Layers className="w-4 h-4 text-purple-400" />
            <span>React • Vite • Node</span>
          </div>
        </div>

        <div className="hidden lg:block absolute -left-8 bottom-32 animate-float" style={{ animationDelay: '1.2s' }}>
          <div className="glass-panel px-3.5 py-2 rounded-2xl flex items-center gap-2 text-xs font-mono text-emerald-300 shadow-xl shadow-emerald-950/40 border-emerald-500/30">
            <Database className="w-4 h-4 text-emerald-400" />
            <span>MongoDB Atlas</span>
          </div>
        </div>

        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-medium mb-8 backdrop-blur-md shadow-lg shadow-purple-950/40">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Computer Science Engineering • Open to Opportunities</span>
        </div>

        {/* Name / Greeting */}
        <p className="text-sm md:text-base font-mono uppercase tracking-widest text-slate-400 mb-3">
          Hi, I am <span className="text-white font-semibold">Anuj Yadav</span>
        </p>

        {/* Typing Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 min-h-[80px] sm:min-h-[140px] md:min-h-[160px] flex items-center justify-center">
          <span className="text-gradient">
            {displayedText}
          </span>
          <span className="inline-block w-1 md:w-1.5 h-10 md:h-16 bg-purple-400 ml-2 animate-pulse" />
        </h1>

        {/* Bio description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10">
          Building high-performance, intelligent web applications with <span className="text-white font-medium">React.js, Node.js, Express, and MongoDB</span>. Specialized in integrating <span className="text-purple-300 font-medium">AI models & real-time APIs</span> to solve complex real-world challenges.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection("projects")}
            className="group px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 backdrop-blur-md transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Get In Touch</span>
          </button>

          <a
            href="https://github.com/anujyadav-vx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-full text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:text-white hover:border-purple-500/40 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/anujyadav-fswd/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-full text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Quick Highlights / Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 border-t border-white/10">
          <div className="glass-panel p-4 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-400 mb-1">2+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Shipped Full-Stack Apps</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 mb-1">15+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Modern Tech & Tools</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-pink-400 mb-1">OpenAI</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">LLM API Integration</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 mb-1">100%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Responsive & Clean UX</div>
          </div>
        </div>

      </div>
    </section>
  );
}

