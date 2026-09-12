import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-slate-900"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to new opportunities and collaborations!
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="mailto:anujy2855@gmail.com"
            className="flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/anujyadav-vx"
            className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anujyadav-fswd/"
            className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg"
            />
            <button
              onClick={handleSubmit}
              className="w-full px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
