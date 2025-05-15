'use client';

import React from 'react';
import { Twitter, Linkedin, Github, Coffee } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
    { href: 'https://x.com/toptechschool', icon: Twitter, label: 'Twitter' },
    { href: 'https://www.linkedin.com/in/tarek5701/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/prime7', icon: Github, label: 'GitHub' },
    { href: 'https://buymeacoffee.com/tarek5701', icon: Coffee, label: 'Buy Me a Coffee' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full z-50">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-600 mb-4 md:mb-0">
                        <p>&copy; {currentYear} 🛜 Tarek Ahmed</p>
                    </div>
                    <nav aria-label="Social media links">
                        <ul className="flex space-x-6">
                            {socialLinks.map(({ href, icon: Icon, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                                        aria-label={label}
                                    >
                                        <Icon size={24} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
