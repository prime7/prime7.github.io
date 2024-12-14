import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface ExperienceItemProps {
    title: string;
    company: string;
    date: string;
    content: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, date, content }) => (
        <AccordionItem value={`${title}-${company}`}>
            <AccordionTrigger className="text-left">
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-gray-600 dark:text-orange-300 italic">{company}</p>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{date}</p>
                <ul className="list-disc pl-5 space-y-2">
                    {content.split('\n').filter(item => item.trim()).map((item, index) => (
                        <li key={index} className="text-sm text-gray-700 dark:text-gray-300">{item.trim()}</li>
                    ))}
                </ul>
            </AccordionContent>
        </AccordionItem>
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
    `
        },
        {
            title: "Information Technology Coach",
            company: "Get Coding",
            date: "Oct 2023 – Feb 2024",
            content: `
                Mentored 2 students transitioning into tech, designing curriculum for front-end development and student-side rendering.
                Provided personalized instruction, adapting methods to individual learning styles and project requirements.
            `
        },
        {
            title: "Software Engineer",
            company: "Dhanrhak Investments",
            date: "Nov 2019 – Apr 2021",
            content: `
                Worked as a software developer, build 3 websites for the company including the main portfolio website.
            `
        },
        {
            title: "Software Developer Intern",
            company: "Cookups Technologies ltd",
            date: "Apr 2019 – Jul 2019",
            content: `
                Build web UI components in react.js and re-usable CSS modules/utilities, developed Cookups promotion feature, helped on-boarding 35+ new cooks and demonstrate the usage of web and mobile application.
            `
        }
    ];

    return (
        <Card className="shadow-md mb-8">
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Experience</h2>
                <Accordion type="single" collapsible className="w-full">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
                </Accordion>
            </CardContent>
        </Card>
    );
};

export default WorkExperience;
