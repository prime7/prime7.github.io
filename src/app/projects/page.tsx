"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Blog() {
  const [showProjects, setShowProjects] = useState(false);
  const projects = [
    {
      name: "TopTechSchool",
      description: [
        "A platform to apply for jobs and get hired.",
        "Uses AI to apply for the job faster and better.",
        "Customized resume and cover letter for each job application.",
        "Practice for interviews with mock interviews and AI-powered interviewer.",
        "Get feedback on your resume and cover letter with AI.",
      ],
      stack: [
        "Next.js",
        "stripe",
        "Redis",
        "OpenAI",
        "RAG",
        "Anthropic",
        "Gemini",
        "Supabase",
      ],
      status: "active",
      demo: "https://www.toptechschool.com/",
    },
    {
      name: "Chat Monster",
      description: [
        "AI-powered customer service chatbot embeddable via script tag.",
        "Uses OpenAI's language models for real-time, human-like responses.",
        "Built with Next.js, TypeScript, and Tailwind CSS.",
        "Features authentication (Next Auth), Stripe subscriptions, and Redis for caching/rate limiting.",
        "Advanced analytics dashboard for admins.",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "next-auth",
        "stripe",
        "Redis",
        "OpenAI",
        "RAG",
        "vector embeddings",
      ],
      status: "active",
      github: "https://github.com/prime7/monster",
      demo: "https://www.chatmonster.co/",
    },
    {
      name: "Personal Portfolio",
      description: [
        "GitHub-hosted personal portfolio website.",
        "Showcases projects, skills, and professional experience.",
        "Demonstrates web development and design capabilities.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      github: "https://github.com/prime7/prime7.github.io",
      demo: "https://prime7.github.io",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProjects(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100 font-mono">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-6">Projects CLI</h2>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <p className="text-gray-900 dark:text-gray-100 font-bold typing-effect">
            {" "}
            {">"} ls projects --detailed
          </p>
          {showProjects &&
            projects.map((project) => (
              <div key={project.name} className="ml-4 mt-2 space-y-4">
                <div className="group">
                  <div className="flex items-center">
                    <span className="text-green-600 dark:text-green-400">
                      └──
                    </span>
                    <span className="ml-2 font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </span>
                  </div>
                  <div className="ml-8 mt-2">
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                      {project.description.map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                    </ul>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 space-x-4">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                        >
                          <span className="text-xs">{">"}</span> github
                        </Link>
                      )}
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                      >
                        <span className="text-xs">{">"}</span> demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
