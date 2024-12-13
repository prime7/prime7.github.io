'use client';

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Mail, Clock, Calendar } from 'lucide-react';

const ContactPage = () => {
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const mountainTime = new Date(now.toLocaleString('en-US', {
                timeZone: 'America/Denver'
            }));
            setCurrentTime(format(mountainTime, 'MMMM d, yyyy h:mm:ss aa'));
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="p-8 w-full flex flex-col items-center justify-center">
            <Card className="max-w-2xl w-full mx-auto shadow-lg">
                <CardHeader className="bg-gray-800 text-white p-6 rounded-t-lg">
                    <CardTitle>
                        <h1 className="text-3xl font-bold">Contact Me</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-8">
                    <div className="flex items-center space-x-4">
                        <Mail className="w-6 h-6 text-blue-600" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Email</h2>
                            <a href="mailto:tarek5701@gmail.com" className="text-blue-600 hover:underline">
                                tarek5701@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Clock className="w-6 h-6 text-blue-600" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Current Time (Mountain Time)</h2>
                            <p className="text-lg font-mono">
                                {currentTime}
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <Calendar className="w-6 h-6 mr-2 text-blue-600" />
                            Let's Connect
                        </h2>
                        <p className="mb-6 text-gray-600 dark:text-gray-300">
                            Feel free to reach out if you have any questions or just want to chat about technology, software development, or any exciting projects!
                        </p>
                        <Link
                            href="https://calendar.app.google/iedo21DEW38bFRwg6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            Schedule a Meeting
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ContactPage;
