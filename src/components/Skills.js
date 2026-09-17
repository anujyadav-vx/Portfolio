import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import {
  Code,
  Server,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend & UI",
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      glowColor: "cyan",
      borderColor: "border-cyan-500/30",
      description: "Crafting pixel-perfect, accessible, and responsive user interfaces.",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5 & Semantic Web",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap 5",
        "Redux Toolkit",
        "Context API",
        "React Router",
        "Vite",
        "Responsive Design",
        "Web Accessibility (a11y)",
      ],
    },
    {
      id: "backend",
      title: "Backend & APIs",
      icon: <Server className="w-5 h-5 text-purple-400" />,
      glowColor: "purple",
      borderColor: "border-purple-500/30",
      description: "Designing secure, high-throughput server architectures and REST APIs.",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful API Design",
        "JWT Authentication",
        "HTTP & Middleware",
        "Axios / Fetch API",
        "Session Management",
        "Unit Testing",
      ],
    },
    {
      id: "ai",
      title: "AI & LLM Integration",
      icon: <Cpu className="w-5 h-5 text-pink-400" />,
      glowColor: "pink",
      borderColor: "border-pink-500/30",
      description: "Empowering web applications with modern generative AI capabilities.",
      skills: [
        "OpenAI API",
        "OpenRouter Integration",
        "Prompt Engineering",
        "Streaming Responses (SSE)",
        "Context Memory Management",
        "AI Chat Architecture",
      ],
    },
    {
      id: "database",
      title: "Database & Storage",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      glowColor: "emerald",
      borderColor: "border-emerald-500/30",
      description: "Structuring scalable databases and cloud persistence.",
      skills: [
        "MongoDB",
        "MongoDB Atlas",
        "Mongoose ODM",
        "SQL Queries",
        "Firebase",
        "Data Modeling",
      ],
    },
    {
      id: "devops",
      title: "DevOps & Cloud",
      icon: <GitBranch className="w-5 h-5 text-amber-400" />,
      glowColor: "amber",
      borderColor: "border-amber-500/30",
      description: "Deploying and maintaining CI/CD pipelines and version control.",
      skills: [
        "Git & GitHub",
        "Vercel Deployment",
        "Render Cloud",
        "CI/CD Pipelines",
        "GitHub Actions",
        "Conventional Commits",
      ],
    },
    {
      id: "cms",
      title: "CMS & Enterprise",
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      glowColor: "indigo",
      borderColor: "border-indigo-500/30",
      description: "Enterprise content authoring and component development.",
      skills: [
        "Adobe Experience Manager (AEM)",
        "Template Development",
        "Component Authoring",
        "Content Publishing",
        "Page Management",
      ],
    },
  ];

  const filterOptions = ["All", "Frontend & UI", "Backend & APIs", "AI & LLM", "Database & Storage", "DevOps & Cloud", "CMS & Enterprise"];

  const filteredCategories =
    activeFilter === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.title.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(cat.title.toLowerCase()));

  return (
    <section
      id="skills"
      className="py-24 px-4 relative overflow-hidden bg-slate-900/60 bg-grid-pattern"
    >
      <div className="aura-glow w-96 h-96 bg-purple-600/10 top-1/3 right-10" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Tech Stack & Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Technologies, frameworks, and engineering tools I leverage daily to engineer fast, resilient software.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/50"
                  : "bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <Tilt
              key={category.id}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1200}
              scale={1.02}
              transitionSpeed={600}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
              glareBorderRadius="24px"
              className="w-full flex"
            >
              <div
                className={`
                  w-full glass-panel rounded-3xl p-6 sm:p-7
                  flex flex-col justify-between
                  border border-white/10 hover:${category.borderColor}
                  shadow-xl shadow-slate-950/50 hover:shadow-2xl
                  transition-all duration-300 group
                `}
              >
                <div>
                  {/* Category Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded-md">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          text-xs px-3 py-1.5 rounded-xl
                          bg-slate-950/70 border border-white/10
                          text-slate-300 font-medium
                          hover:text-white hover:border-purple-400/50 hover:bg-purple-950/30
                          transition-all duration-200
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Production Ready</span>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

      </div>
    </section>
  );
}

