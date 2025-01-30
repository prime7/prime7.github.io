import React from 'react';
import WorkExperience from './Work';
import SkillsSection from './Skills';
import ProfileSection from './Profile';
import BiographySection from './Biography';
import EducationSection from './Education';
const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-gray-900 dark:text-gray-100 w-full">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4">
                        <ProfileSection />
                        <div className="mt-8">
                            <SkillsSection />
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <BiographySection />
                        <WorkExperience />
                        <EducationSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
