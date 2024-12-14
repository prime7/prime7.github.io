import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'cloud' | 'other';
}

const categoryColors = {
    frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    backend: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    cloud: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    other: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
};

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

const SkillsSection: React.FC = () => (
    <Card className="shadow-md">
        <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Technical Skills</h2>
            <div className="space-y-6">
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

export default SkillsSection;
