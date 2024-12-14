import { Card, CardContent } from "@/components/ui/card";


const BiographySection: React.FC = () => (
    <Card className="shadow-md mb-8">
        <CardContent className="p-6">
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

export default BiographySection;