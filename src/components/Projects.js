import React from "react";
import {
  ExternalLink,
  Github,
  Sparkles,
  Bot,
  ShoppingBag,
  Lock,
  Zap,
  Globe,
  CheckCircle2,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Chat-Assistant",
      tagline: "Full-Stack Generative AI Chat Platform",
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      category: "AI & Full Stack",
      accent: "cyan",
      borderColor: "border-cyan-500/30",
      glowColor: "from-cyan-500/20 via-purple-500/10 to-transparent",
      description:
        "Engineered an intelligent conversational AI platform featuring high-speed streaming completions, multi-turn chat memory, responsive Markdown rendering, and custom assistant personas.",
      highlights: [
        "OpenRouter GPT-4o-mini integration with streaming responses (SSE)",
        "Node.js & Express RESTful API with structured message parsing",
        "Dual-cloud deployment: Vercel (React/Vite) & Render (Backend API)",
        "Persisted conversation history and clean dark-mode UI",
      ],
      tech: [
        "React",
        "Vite",
        "Node.js",
        "Express",
        "OpenRouter",
        "GPT-4o-mini",
        "Render",
        "Vercel",
      ],
      link: "https://chat-assistant-gilt.vercel.app/",
      github: "https://github.com/anujyadav-vx/chat-assistant",
      previewUrl: "chat-assistant-gilt.vercel.app",
    },
    {
      title: "Styleora",
      tagline: "Luxury Wearables & E-Commerce Web App",
      icon: <ShoppingBag className="w-6 h-6 text-purple-400" />,
      category: "E-Commerce & MERN",
      accent: "purple",
      borderColor: "border-purple-500/30",
      glowColor: "from-purple-500/20 via-pink-500/10 to-transparent",
      description:
        "Designed and launched a modern full-stack luxury wearables boutique. Features secure user authentication, persistent cart state, dynamic catalog filtering, and order management.",
      highlights: [
        "JWT-secured authentication and authorization pipeline",
        "MongoDB Atlas database with normalized product & order schemas",
        "Optimized client state for fluid shopping cart and checkout",
        "Production-grade error handling and responsive mobile experience",
      ],
      tech: [
        "React",
        "Vite",
        "Node.js",
        "Express",
        "MongoDB Atlas",
        "JWT Auth",
        "Render",
        "Vercel",
      ],
      link: "https://styleora-lemon.vercel.app/",
      github: "https://github.com/anujyadav-vx/styleora",
      previewUrl: "styleora-lemon.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 relative overflow-hidden bg-slate-950"
    >
      <div className="aura-glow w-[500px] h-[500px] bg-purple-600/15 top-1/4 -right-20" />
      <div className="aura-glow w-[500px] h-[500px] bg-cyan-600/10 bottom-10 -left-20" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Shipped <span className="text-gradient">Products & Applications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world full-stack systems engineered with high performance, production deployments, and AI integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`
                glass-panel rounded-3xl overflow-hidden
                border border-white/10 hover:${project.borderColor}
                transition-all duration-300 flex flex-col justify-between
                shadow-2xl shadow-slate-950/70 group
              `}
            >
              <div>
                {/* Browser Mockup Header Bar */}
                <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  
                  {/* Address bar pill */}
                  <div className="bg-slate-950/80 border border-white/10 rounded-full px-3 py-1 flex items-center gap-1.5 max-w-[220px] sm:max-w-[260px] truncate text-[11px] font-mono text-slate-400">
                    <Lock className="w-2.5 h-2.5 text-emerald-400 flex-shrink-0" />
                    <span className="truncate">{project.previewUrl}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-400 hidden sm:inline">Live</span>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-8">
                  {/* Category & Title */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-slate-300 mb-4">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6 bg-slate-950/40 p-4 rounded-2xl border border-white/5">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>Key Technical Accomplishments</span>
                    </div>
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-slate-900 border border-white/10 rounded-lg text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 sm:px-8 py-4 bg-slate-900/50 border-t border-white/10 flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/30 transition-all group/btn"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Visit Live Demo</span>
                  <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

