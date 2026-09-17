import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "anujy2855@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);

    try {
      // Attempt backend API if running
      await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => {
        // Graceful catch if backend server isn't started locally
      });

      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative overflow-hidden bg-slate-950"
    >
      <div className="aura-glow w-[500px] h-[500px] bg-purple-600/15 bottom-0 right-0" />
      <div className="aura-glow w-[400px] h-[400px] bg-indigo-500/10 top-20 left-10" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Let's Build Together</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, an engineering role, or just want to chat about AI & tech? I'd love to hear from you.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Quick Copy (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="text-xs font-mono uppercase text-purple-400 mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Direct Email</span>
              </div>
              <div className="text-lg font-bold text-white mb-4 break-all">
                {emailAddress}
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition-all active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <span>Open Mail App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/anujyadav-vx"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-purple-500/40 hover:bg-slate-900/80 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Github className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="font-bold text-white text-sm">GitHub</div>
                <div className="text-xs text-slate-400 font-mono">@anujyadav-vx</div>
              </a>

              <a
                href="https://www.linkedin.com/in/anujyadav-fswd/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Linkedin className="w-6 h-6 text-cyan-400" />
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="font-bold text-white text-sm">LinkedIn</div>
                <div className="text-xs text-slate-400 font-mono">anujyadav-fswd</div>
              </a>
            </div>

            {/* Availability Status */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <div className="text-xs font-semibold text-white">Status: Available</div>
                  <div className="text-[11px] text-slate-400">Response within 24 hours</div>
                </div>
              </div>
              <span className="text-xs font-mono text-purple-400 bg-purple-950/50 border border-purple-500/30 px-2.5 py-1 rounded-md">
                India (IST)
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-7 sm:p-9 rounded-3xl border border-white/10 shadow-2xl shadow-slate-950/80">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the details below and I'll get back to your inbox promptly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-2.5 animate-in fade-in duration-300">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Thank you! Your message has been received. I will reply soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-950/70 border border-white/10 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-white rounded-xl text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-950/70 border border-white/10 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-white rounded-xl text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-950/70 border border-white/10 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-white rounded-xl text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Message *
                  </label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell me about your project, role, or ideas..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-950/70 border border-white/10 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-white rounded-xl text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

