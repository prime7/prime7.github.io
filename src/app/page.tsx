'use client';
import Link from "next/link";
import useMountainTime from "@/hooks/use-mountain-time";
import { 
  Mail, 
  Calendar, 
  UserRound, 
  ExternalLink 
} from "lucide-react";

export default function Home() {
  const time = useMountainTime();

  return (
    <div className="flex flex-col items-center justify-center p-4 text-center w-full bg-gradient-to-r from-white via-green-50 to-white dark:from-black dark:via-green-950/30 dark:to-black text-green-700 dark:text-green-500 font-mono">
      <div className="w-24 h-24 mb-4 border-3 border-green-600 dark:border-green-400 rounded-full flex items-center justify-center bg-green-50/50 dark:bg-green-900/20 shadow-md">
        <UserRound size={48} className="text-green-600 dark:text-green-400" />
      </div>
      <h1 className="text-3xl font-bold text-green-600 dark:text-green-400 tracking-tight">Tarek Ahmed</h1>
      <h2 className="text-xl text-green-700 dark:text-green-500 mb-4 font-medium">Passionate Software Engineer</h2>

      <div className="flex items-center space-x-3 mb-4 hover:transform hover:scale-102 transition-transform">
        <Mail className="text-green-600 dark:text-green-400" />
        <a 
          href="mailto:tarek@example.com" 
          className="text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 font-medium"
        >
          tarek5701@gmail.com
        </a>
      </div>

      <div className="flex space-x-4 mb-4">
        <Link 
          href="/about" 
          className="flex items-center space-x-2 border-2 border-green-600 dark:border-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 p-3 rounded-lg transition-all duration-200 hover:shadow-md"
        >
          <UserRound className="text-green-600 dark:text-green-400" />
          <span className="font-medium">About Me</span>
        </Link>

        <Link 
          href="https://calendar.app.google/iedo21DEW38bFRwg6" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 border-2 border-green-600 dark:border-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 p-3 rounded-lg transition-all duration-200 hover:shadow-md"
        >
          <Calendar className="text-green-600 dark:text-green-400" />
          <span className="font-medium">Schedule Meeting</span>
          <ExternalLink size={16} className="text-green-600 dark:text-green-400" />
        </Link>
      </div>

      <div className="text-green-700 dark:text-green-500 text-sm font-medium bg-green-50/50 dark:bg-green-900/20 px-3 py-1.5 rounded-md">
        Current Time: {time} (MT)
      </div>
    </div>
  );
}