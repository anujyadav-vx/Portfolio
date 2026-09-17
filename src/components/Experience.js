import React from "react";
import {
  GraduationCap,
  Sparkles,
  Cpu,
  Calendar,
  Layers,
} from "lucide-react";

export default function Experience() {
  const milestones = [
    {
      period: "Recent / Present",
      role: "AI & Full Stack Solutions Developer",
      organization: "Independent Engineering & Production Deployments",
      type: "Projects & Architecture",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      accent: "cyan",
      description:
        "Architecting and shipping end-to-end full-stack applications with AI models. Engineered 'Chat-Assistant' utilizing OpenRouter GPT-4o-mini with real-time SSE streaming, and 'Styleora' luxury e-commerce platform with JWT auth and MongoDB Atlas.",
      skills: ["React", "Node.js", "Express", "OpenAI / OpenRouter", "MongoDB Atlas", "Vercel", "Render"],
    },
    {
      period: "Specialized Training",
      role: "Enterprise CMS & Adobe Experience Manager (AEM)",
      organization: "Digital Experience & Content Systems",
      type: "Enterprise Development",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      accent: "purple",
      description:
        "Trained and skilled in Adobe Experience Manager (AEM), focusing on template development, component authoring, digital asset management, page workflows, and enterprise content publishing.",
      skills: ["AEM 6.5 / Cloud", "Component Authoring", "Content Management", "Enterprise UI"],
    },
    {
      period: "Academic Foundations",
      role: "B.Tech in Computer Science & Engineering",
      organization: "Engineering University",
      type: "Degree & Core Academics",
      icon: <GraduationCap className="w-5 h-5 text-pink-400" />,
      accent: "pink",
      description:
        "Graduated with comprehensive coursework in Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, and Object-Oriented Software Engineering.",
      skills: ["Data Structures", "Algorithms", "DBMS", "System Design", "JavaScript ES6+", "SQL"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-4 relative overflow-hidden bg-slate-900/60 bg-grid-pattern"
    >
      <div className="aura-glow w-96 h-96 bg-purple-600/10 top-1/2 -left-20" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            My Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A chronological track of education, hands-on architectural experience, and specialized domains.
          </p>
        </div>

        {/* Timeline Trail */}
        <div className="relative border-l border-purple-500/20 ml-4 md:ml-32 space-y-12">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Icon Node */}
              <div className="absolute -left-[21px] top-1.5 w-10 h-10 rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                {item.icon}
              </div>

              {/* Timestamp on desktop */}
              <div className="md:absolute md:-left-36 md:top-2 text-xs font-mono text-purple-400 md:text-right md:w-28 mb-1 md:mb-0">
                <span className="inline-flex items-center gap-1 bg-purple-950/50 border border-purple-500/30 px-2 py-0.5 rounded-md">
                  <Calendar className="w-3 h-3" />
                  {item.period}
                </span>
              </div>

              {/* Timeline Content Card */}
              <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl shadow-slate-950/50">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {item.type}
                  </span>
                </div>

                <div className="text-sm font-medium text-purple-300 mb-3">
                  {item.organization}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-950/70 border border-white/10 text-slate-400 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
