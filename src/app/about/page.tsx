import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import { Github, Linkedin, Globe, Twitter } from 'lucide-react';

interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'cloud' | 'other';
}

const SKILLS: Skill[] = [
    { name: 'React.js', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'TailwindCSS', category: 'frontend' },
    { name: 'Shadcn', category: 'frontend' },
    { name: 'monorepo', category: 'frontend' },

    { name: 'GraphQL', category: 'backend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Python', category: 'backend' },
    { name: 'NestJs', category: 'backend' },
    { name: 'Hono.js', category: 'backend' },
    { name: 'Solidity', category: 'backend' },
    { name: 'Rust', category: 'backend' },

    { name: 'AWS', category: 'cloud' },
    { name: 'Docker', category: 'cloud' },
    
    { name: 'Redis', category: 'other' },
    { name: 'kafka', category: 'other' },
    { name: 'OpenAI', category: 'other' },
    { name: 'Stripe', category: 'other' },
];

const categoryColors = {
    frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    backend: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    cloud: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    other: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
};

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-gray-900 dark:text-gray-100 w-full">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4">
                    <ProfileSection />
                    </div>
                    <div className="lg:col-span-8">
                    <BiographySection />
                    <SkillsSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProfileSection: React.FC = () => (
    <Card className="shadow-md">
        <CardContent className="p-6">
            <div className="relative w-40 h-40 mx-auto mb-6">
                <Image
                    src="/profile.jpeg"
                    alt="Tarek Ahmed"
                    fill
                    className="rounded-full object-cover"
                    priority
                />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">Tarek Ahmed</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-4">Software Engineer</p>
            <div className="flex justify-center space-x-6">
                <SocialLink href="https://linkedin.com/in/tarek5701" icon={<Linkedin />} />
                <SocialLink href="https://github.com/prime7" icon={<Github />} />
                <SocialLink href="https://toptechschool.com" icon={<Globe />} />
                <SocialLink href="https://x.com/toptechschool" icon={<Twitter />} />
            </div>
        </CardContent>
    </Card>
);

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
        {icon}
    </a>
);

const BiographySection: React.FC = () => (
    <Card className="shadow-md mb-8">
        <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">About Me</h2>
            <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                    A passionate software engineer with 5+ years of experience in building web applications and programming.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 p-4">
                    <p className="text-gray-700 dark:text-gray-300">
                        I am actively exploring blockchain technology and its applications in decentralized finance.
                    </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                    Previously, I was a Software Engineer at <span className="font-semibold">Chegg Inc</span> in Edmonton, AB, 
                    where I evolved from a front-end specialist to a full-stack engineer, mastering React.js, Node.js, 
                    federated GraphQL, and real-time subscriptions with AWS SNS and Lambda.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                    I've also developed Chat Monster, an AI-powered customer service solution that generates an 
                    embeddable script for websites, enabling an AI-powered chatbot to answer customer queries 
                    and drive revenue with lead generation.
                </p>
            </div>
        </CardContent>
    </Card>
);

const SkillsSection: React.FC = () => (
    <Card className="shadow-md">
        <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.keys(categoryColors).map((category) => (
                    <SkillCategory key={category} category={category} />
                ))}
            </div>
        </CardContent>
    </Card>
);

const SkillCategory: React.FC<{ category: string }> = ({ category }) => (
    <div>
        <h3 className="text-lg font-semibold capitalize text-gray-700 dark:text-gray-300 mb-3">
            {category}
        </h3>
        <div className="flex flex-wrap gap-2">
            {SKILLS.filter(skill => skill.category === category).map(({ name }) => (
                <Badge 
                    key={name} 
                    className={`${categoryColors[category as keyof typeof categoryColors]} px-3 py-1`}
                >
                    {name}
                </Badge>
            ))}
        </div>
    </div>
);

export default AboutPage;
