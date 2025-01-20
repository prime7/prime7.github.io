"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  content: string;
  stack?: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  date,
  content,
  stack,
}) => (
  <Dialog>
    <DialogTrigger className="w-full">
      <div className="flex flex-col items-start p-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
        <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
        <DialogDescription className="text-sm text-gray-600 dark:text-orange-300 italic">
          {company}
        </DialogDescription>
        <p className="text-sm text-gray-600 dark:text-gray-400">{date}</p>
      </div>
    </DialogTrigger>
    <DialogContent className="max-w-2xl bg-black text-white rounded-lg shadow-lg">
      <div className="p-4 font-mono">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400 italic mb-2">{company}</p>
        <p className="text-sm text-gray-400 mb-4">{date}</p>
        {stack && (
          <div className="flex flex-wrap gap-2 mb-4">
            {stack.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <ul className="list-disc pl-5 space-y-2">
          {content
            .split("\n")
            .filter((item) => item.trim())
            .map((item, index) => (
              <li
                key={index}
                className="text-sm text-gray-300"
              >
                {item.trim()}
              </li>
            ))}
        </ul>
      </div>
    </DialogContent>
  </Dialog>
);

const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Chegg Inc",
      date: "February, 2022 - November, 2024",
      content: `
                Evolved from front-end specialist to full-stack engineer, mastering React.js, Node.js, federated GraphQL, and real-time subscriptions with AWS SNS and Lambda.
                Developed complex custom React WYSIWYG editors and high-performance components for authoring tools.
                Delivered two critical acquisition tools in 4 months: a content generation system (flashcards, quizzes, reviews) and a project organization tool, increasing user engagement by 30%.
                Conducted comprehensive A/B testing using Optimizely and internal tools to optimize user experience and conversion rates.
                Engineered NASA, an automation tool leveraging OCR technology to re-author legacy image-based answers into a structured JSON format, streamlining content management and resulting in $6 million cost savings for the company.
                Integrated audio transcription service, introducing AI-enhanced capabilities to acquisition tools using AWS Polly and OpenAI whisper.
                Partnered with the security team for LLM risk analysis, implementing data protection measures that reduced potential vulnerabilities by 35%.
                Actively participated in agile development processes, from planning to support, in a fast-paced environment.
                Demonstrated strong mentorship skills and consistently delivered high-quality work, meeting project deadlines and exceeding expectations.
    `,
      stack: ["React.js", "Node.js", "GraphQL", "AWS SNS", "AWS Lambda", "Optimizely", "OCR", "AWS Polly", "OpenAI Whisper"],
    },
    {
      title: "Information Technology Coach",
      company: "Get Coding",
      date: "Oct 2023 – Feb 2024",
      content: `
                Mentored 2 students transitioning into tech, designing curriculum for front-end development and student-side rendering.
                Provided personalized instruction, adapting methods to individual learning styles and project requirements.
            `,
      stack: ["Front-end Development", "Curriculum Development", "Mentorship"],
    },
    {
      title: "Software Engineer",
      company: "Dhanrhak Investments",
      date: "Nov 2019 – Apr 2021",
      content: `
                Worked as a software developer, build 3 websites for the company including the main portfolio website.
            `,
      stack: ["Web Development", "React.js", "CSS Modules", "Next.js", "Tailwind CSS", "AWS"],
    },
    {
      title: "Software Developer Intern",
      company: "Cookups Technologies ltd",
      date: "Apr 2019 – Jul 2019",
      content: `
                Build web UI components in react.js and re-usable CSS modules/utilities, developed Cookups promotion feature, helped on-boarding 35+ new cooks and demonstrate the usage of web and mobile application.
            `,
      stack: ["React.js", "CSS Modules", "Django", "Docker"],
    },
  ];

  return (
    <Card className="shadow-md mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Experience
        </h2>
        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkExperience;
