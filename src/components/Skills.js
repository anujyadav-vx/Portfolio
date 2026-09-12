import React from "react";
import Tilt from "react-parallax-tilt";

export default function Skills() {
  const skills = {
    "Frontend & Frameworks": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "React Hooks",
      "Context API",
      "React Router",
      "Redux Toolkit",
      "Vite",
      "Tailwind CSS",
      "Bootstrap 5",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Pixel Perfect",
      "Semantic Web",
      "Web Accessibility",
    ],

    "Backend & APIs": [
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "HTTP Request Handling",
      "JWT Authentication",
      "Axios",
      "Fetch API",
      "Session Management",
      "Unit Testing",
    ],
    "AI & LLM": [
      "OpenAI API",
      "LLM API Integration",
      "Prompt Engineering",
      "Context Management",
      "Streaming Responses (SSE)",
      "AI Application Development",
    ],
    "Database ": ["MongoDB", "MongoDB Atlas", "SQL", "Firebase"],
    DevOps: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Conventional Commits",
    ],
    "CMS(AEM)": [
      "Template Development",
      "Component Authoring",
      "Content Authoring",
      "Page Management",
      "Content Publishing",
    ],
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <Tilt
              key={category}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={800}
              glareEnable={true}
              glareMaxOpacity={0.25}
              className="w-full"
            >
              <div
                className="
                  bg-white/10 backdrop-blur-lg
                  border border-white/20
                  rounded-2xl p-6
                  shadow-xl shadow-purple-900/40
                  hover:shadow-2xl hover:shadow-purple-500/50
                  transition-all duration-300
                "
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-300">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="
                        text-sm px-3 py-1
                        rounded-full
                        bg-slate-900/60 border border-purple-500/40
                        text-gray-100
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
