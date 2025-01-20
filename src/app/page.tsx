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
    <div className="flex flex-col items-center justify-center p-4 text-center w-full bg-white dark:bg-black text-green-700 dark:text-green-500 font-mono">
      <div className="w-24 h-24 mb-4 border-2 border-green-700 dark:border-green-500 rounded-full flex items-center justify-center">
        <UserRound size={48} className="text-green-700 dark:text-green-500" />
      </div>
      <h1 className="text-3xl font-bold text-green-600 dark:text-green-400">Tarek Ahmed</h1>
      <h2 className="text-xl text-green-700 dark:text-green-500 mb-4">Software Engineer</h2>

      <div className="flex items-center space-x-3 mb-4">
        <Mail className="text-green-700 dark:text-green-500" />
        <a 
          href="mailto:tarek@example.com" 
          className="text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300"
        >
          tarek5701@gmail.com
        </a>
      </div>

      <div className="flex space-x-4 mb-4">
        <Link 
          href="/about" 
          className="flex items-center space-x-2 border border-green-700 dark:border-green-500 hover:bg-green-100 dark:hover:bg-green-900/30 p-3 rounded-lg transition"
        >
          <UserRound className="text-green-700 dark:text-green-500" />
          <span>About Me</span>
        </Link>

        <Link 
          href="https://calendar.app.google/iedo21DEW38bFRwg6" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 border border-green-700 dark:border-green-500 hover:bg-green-100 dark:hover:bg-green-900/30 p-3 rounded-lg transition"
        >
          <Calendar className="text-green-700 dark:text-green-500" />
          <span>Schedule Meeting</span>
          <ExternalLink size={16} className="text-green-700 dark:text-green-500" />
        </Link>
      </div>

      <div className="text-green-700 dark:text-green-500 text-sm">
        Current Time: {time} (MT)
      </div>
    </div>
  );
}