import React from "react";

const BiographySection: React.FC = () => (
    <div className="bg-white dark:bg-black text-black dark:text-green-500 font-mono p-6 rounded-lg shadow-md mb-8">
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-black dark:text-green-500">
                {'>'} A passionate software engineer with 5+ years of experience in building web applications and programming.
            </p>
            <div className="bg-gray-200 dark:bg-gray-800 border-l-4 border-black dark:border-green-500 p-4">
                <p className="text-black dark:text-green-500">
                    {'>'} I am actively exploring blockchain technology and its applications in decentralized finance.
                </p>
            </div>
            <p className="text-black dark:text-green-500">
                {'>'} Previously, I was a Software Engineer at <span className="font-semibold">Chegg Inc</span> in Edmonton, AB, 
                where I evolved from a front-end specialist to a full-stack engineer, mastering React.js, Node.js, 
                federated GraphQL, and real-time subscriptions with AWS SNS and Lambda.
            </p>
            <p className="text-black dark:text-green-500">
                {'>'} I&apos;ve also developed Chat Monster, an AI-powered customer service solution that generates an 
                embeddable script for websites, enabling an AI-powered chatbot to answer customer queries 
                and drive revenue with lead generation.
            </p>
        </div>
    </div>
);

export default BiographySection;