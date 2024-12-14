import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { Github, Linkedin, Globe, Twitter } from 'lucide-react';

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

export default ProfileSection;