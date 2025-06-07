"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TerminalDialog } from "@/components/ui/terminal-dialog";

const WORK_EXPERIENCE_DATA = [
  {
    triggerContent: {
      title: "Software Engineer",
      subtitle: "Chegg Inc",
      date: "February, 2022 - May, 2025",
    },
    dialogContent: {
      title: "Software Engineer",
      subtitle: "Chegg Inc",
      date: "February, 2022 - May, 2025", // February 28, 2022 - May 15, 2025
      tags: [
        "Python",
        "Databricks",
        "GitLab CI/CD",
        "LLM",
        "React",
        "Node.js",
        "FastAPI",
        "AWS",
        "Kafka",
        "GraphQL",
        "Next.js",
        "Langchain",
        "OCR",
        "Optimizely",
        "Amplitude",
        "AWS Polly",
        "OpenAI Whisper",
      ],
      items: [
        'Architected and implemented an automated "LLM-as-judge" pipeline using Python, Databricks, and GitLab CI/CD, which accelerated the AI evaluation process by 62% and reduced overall model development time by 40%.',
        "Transitioned to a full-stack capacity by taking ownership of end-to-end feature development, utilizing React.js for front-end and building scalable back-end services with FastAPI and Node.js, deployed on AWS and integrated with services like Kafka and GraphQL.",
        "Engineered and delivered robust, high-performance front-end authoring tools and student-side rendering components, including custom WYSIWYG editors, by developing reusable React libraries extensively adopted by internal teams.",
        "Developed two critical acquisition tools (content generation & project organization) in 4 months, leveraging Next.js (frontend) and Python (FastAPI, Langchain for LLM orchestration), which increased user engagement by 30%.",
        "Generated $6 million in cost savings by automating the transformation of legacy image-based content into structured JSON via an OCR-based tool, which significantly streamlined content management workflows.",
        "Optimized user experience and conversion through comprehensive A/B testing using Optimizely and amplitude.",
        "Integrated audio transcription service, introducing AI-enhanced capabilities to acquisition tools using AWS Polly and OpenAI whisper.",
        "Implemented and enforced data protection measures, leveraging security team's LLM risk analysis to reduce potential vulnerabilities by 35%.",
        "Collaborated with cross-functional teams to design and implement scalable, maintainable, and efficient software solutions, ensuring alignment with business goals and user needs.",
        "Demonstrated strong mentorship skills and consistently delivered high-quality work, meeting project deadlines and exceeding expectations.",
      ],
    },
  },
  {
    triggerContent: {
      title: "Information Technology Coach",
      subtitle: "Get Coding",
      date: "Oct 2023 – Feb 2024",
    },
    dialogContent: {
      title: "Information Technology Coach",
      subtitle: "Get Coding",
      date: "Oct 2023 – Feb 2024",
      tags: ["Front-end Development", "Curriculum Development", "Mentorship"],
      items: [
        "Mentored 2 students transitioning into tech, designing curriculum for front-end development and student-side rendering.",
        "Provided personalized instruction, adapting methods to individual learning styles and project requirements.",
      ],
    },
  },
  {
    triggerContent: {
      title: "Software Engineer",
      subtitle: "Dhanrhak Investments",
      date: "Nov 2019 – Apr 2021",
    },
    dialogContent: {
      title: "Software Engineer",
      subtitle: "Dhanrhak Investments",
      date: "Nov 2019 – Apr 2021",
      tags: [
        "Web Development",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Django",
        "Gatsby",
      ],
      items: [
        "Engineered three company websites, including the main portfolio, utilizing Next.js, Gatsby, and Django to expand the company's digital presence.",
      ],
    },
  },
  {
    triggerContent: {
      title: "Software Developer Intern",
      subtitle: "Cookups Technologies ltd",
      date: "Apr 2019 – Jul 2019",
    },
    dialogContent: {
      title: "Software Developer Intern",
      subtitle: "Cookups Technologies ltd",
      date: "Apr 2019 – Jul 2019",
      tags: ["React.js", "CSS Modules", "Django", "Docker"],
      items: [
        "Built reusable UI components using React.js and styled components, focusing on modular and maintainable frontend architecture, developed Cookup’s promotion feature, helped onboarding 35+ new cooks and demonstrate the usage of web and mobile application.",
      ],
    },
  },
];

const WorkExperience = () => {
  return (
    <Card className="shadow-md mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Experience
        </h2>
        <div className="space-y-2">
          {WORK_EXPERIENCE_DATA.map((experience, index) => (
            <TerminalDialog
              key={index}
              triggerContent={experience.triggerContent}
              dialogContent={experience.dialogContent}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkExperience;
