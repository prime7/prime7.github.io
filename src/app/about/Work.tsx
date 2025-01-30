"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TerminalDialog } from "@/components/ui/terminal-dialog";

const WORK_EXPERIENCE_DATA = [
  {
    triggerContent: {
      title: "Software Engineer",
      subtitle: "Chegg Inc",
      date: "February, 2022 - November, 2024",
    },
    dialogContent: {
      title: "Software Engineer", 
      subtitle: "Chegg Inc",
      date: "February, 2022 - November, 2024",
      tags: ["React.js", "Node.js", "GraphQL", "AWS SNS", "AWS Lambda", "Optimizely", "OCR", "AWS Polly", "OpenAI Whisper"],
      items: [
        "Evolved from front-end specialist to full-stack engineer, mastering React.js, Node.js, federated GraphQL, and real-time subscriptions with AWS SNS and Lambda.",
        "Developed complex custom React WYSIWYG editors and high-performance components for authoring tools.",
        "Delivered two critical acquisition tools in 4 months: a content generation system (flashcards, quizzes, reviews) and a project organization tool, increasing user engagement by 30%.",
        "Conducted comprehensive A/B testing using Optimizely and internal tools to optimize user experience and conversion rates.",
        "Engineered NASA, an automation tool leveraging OCR technology to re-author legacy image-based answers into a structured JSON format, streamlining content management and resulting in $6 million cost savings for the company.",
        "Integrated audio transcription service, introducing AI-enhanced capabilities to acquisition tools using AWS Polly and OpenAI whisper.",
        "Partnered with the security team for LLM risk analysis, implementing data protection measures that reduced potential vulnerabilities by 35%.",
        "Actively participated in agile development processes, from planning to support, in a fast-paced environment.",
        "Demonstrated strong mentorship skills and consistently delivered high-quality work, meeting project deadlines and exceeding expectations."
      ]
    }
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
        "Provided personalized instruction, adapting methods to individual learning styles and project requirements."
      ]
    }
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
      tags: ["Web Development", "React.js", "CSS Modules", "Next.js", "Tailwind CSS", "AWS"],
      items: [
        "Worked as a software developer, build 3 websites for the company including the main portfolio website."
      ]
    }
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
        "Build web UI components in react.js and re-usable CSS modules/utilities, developed Cookups promotion feature, helped on-boarding 35+ new cooks and demonstrate the usage of web and mobile application."
      ]
    }
  }
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
