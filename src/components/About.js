import React from "react";
import {
  Cpu,
  Globe2,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Clock,
  Terminal,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-slate-950">
      {/* Background radial accent */}
      <div className="aura-glow w-96 h-96 bg-purple-600/15 top-1/2 left-0" />
      <div className="aura-glow w-96 h-96 bg-cyan-600/10 bottom-0 right-0" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Crafting Digital Experiences with <span className="text-gradient">Precision & AI</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A look into my engineering philosophy, technical background, and approach to modern software development.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Core Bio & Background (Spans 2 cols on desktop) */}
          <div className="md:col-span-2 glass-panel p-7 sm:p-8 rounded-3xl relative group overflow-hidden border-white/10 hover:border-purple-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 text-purple-500/10 group-hover:text-purple-500/20 transition-colors pointer-events-none">
              <GraduationCap className="w-32 h-32" />
            </div>
            
            <div className="inline-flex p-3 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-400 mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Computer Science Graduate & Full-Stack Builder
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Holding a degree in <span className="text-white font-medium">Computer Science Engineering</span>, I bridge solid theoretical fundamentals in algorithms and system design with hands-on full-stack development. I enjoy taking an idea from raw architecture to high-performance, polished production deployments.
            </p>

            <div className="space-y-2.5">
              {[
                "Clean, reusable component architecture with React & Tailwind CSS",
                "Robust RESTful APIs with Node.js, Express, and JWT authentication",
                "Schema design & optimized querying with MongoDB Atlas",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Interactive Terminal / Developer DNA (Spans 2 cols on desktop) */}
          <div className="md:col-span-2 glass-panel rounded-3xl overflow-hidden border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col">
            {/* Terminal Window Bar */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-slate-400" />
                <span>anuj-yadav.config.ts</span>
              </div>
              <div className="w-10" />
            </div>

            {/* Terminal Body */}
            <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300 flex-1 bg-slate-950/60">
              <p className="text-slate-500">{"// Engineering Profile & Specialization"}</p>
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-300">developer</span> = &#123;
              </p>
              <div className="pl-4">
                <p>
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-emerald-300">"Anuj Yadav"</span>,
                </p>
                <p>
                  <span className="text-slate-400">role:</span>{" "}
                  <span className="text-emerald-300">"Full Stack Developer"</span>,
                </p>
                <p>
                  <span className="text-slate-400">education:</span>{" "}
                  <span className="text-emerald-300">"B.Tech in CSE"</span>,
                </p>
                <p>
                  <span className="text-slate-400">coreStack:</span> [
                  <span className="text-amber-300">"React"</span>,{" "}
                  <span className="text-amber-300">"Node.js"</span>,{" "}
                  <span className="text-amber-300">"Express"</span>,{" "}
                  <span className="text-amber-300">"MongoDB"</span>],
                </p>
                <p>
                  <span className="text-slate-400">aiIntegration:</span> [
                  <span className="text-pink-300">"OpenAI API"</span>,{" "}
                  <span className="text-pink-300">"OpenRouter GPT-4o"</span>,{" "}
                  <span className="text-pink-300">"Streaming SSE"</span>],
                </p>
                <p>
                  <span className="text-slate-400">philosophy:</span>{" "}
                  <span className="text-purple-300">"Fast, intuitive, and AI-augmented"</span>
                </p>
              </div>
              <p>&#125;;</p>
              <div className="mt-3 text-cyan-400/80 flex items-center gap-2">
                <span>&gt; developer.readyForCollaboration()</span>
                <span className="w-2 h-4 bg-cyan-400 inline-block animate-pulse" />
              </div>
            </div>
          </div>

          {/* Card 3: AI & LLM Innovations (1 col on desktop or 2 col on md) */}
          <div className="md:col-span-2 lg:col-span-2 glass-panel p-7 rounded-3xl border-white/10 hover:border-pink-500/40 transition-all duration-300">
            <div className="inline-flex p-3 rounded-2xl bg-pink-600/20 border border-pink-500/30 text-pink-400 mb-5">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              AI & LLM Integration Expertise
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              I don't just build UI—I integrate intelligent AI agents, streaming completions (Server-Sent Events), prompt structuring, and API routing with GPT-4o-mini and OpenRouter.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 text-xs rounded-lg bg-pink-950/50 border border-pink-500/30 text-pink-300 font-mono">
                OpenAI API
              </span>
              <span className="px-2.5 py-1 text-xs rounded-lg bg-purple-950/50 border border-purple-500/30 text-purple-300 font-mono">
                OpenRouter
              </span>
              <span className="px-2.5 py-1 text-xs rounded-lg bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 font-mono">
                SSE Streaming
              </span>
              <span className="px-2.5 py-1 text-xs rounded-lg bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 font-mono">
                Prompt Eng
              </span>
            </div>
          </div>

          {/* Card 4: Global Collaboration & Location (2 cols on lg) */}
          <div className="md:col-span-1 lg:col-span-2 glass-panel p-7 rounded-3xl border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="inline-flex p-3 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 mb-5">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Location & Global Availability
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                Based in India (IST), ready to work seamlessly across global time zones (US, Europe, APAC) in remote, hybrid, or on-site roles.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                India (IST)
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <Clock className="w-3.5 h-3.5" />
                Available Immediately
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
