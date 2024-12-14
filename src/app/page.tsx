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
    <div className="flex flex-col items-center justify-center p-4 text-center w-full dark:bg-gray-900 dark:text-white">
      <div className="w-24 h-24 mb-4 bg-blue-500 text-white rounded-full flex items-center justify-center dark:bg-blue-700">
        <UserRound size={48} />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Tarek Ahmed</h1>
      <h2 className="text-xl text-gray-500 mb-4 dark:text-gray-400">Software Engineer</h2>

      <div className="flex items-center space-x-3 mb-4">
        <Mail className="text-blue-600 dark:text-blue-400" />
        <a 
          href="mailto:tarek@example.com" 
          className="text-blue-800 hover:underline dark:text-blue-300"
        >
          tarek5701@gmail.com
        </a>
      </div>

      <div className="flex space-x-4 mb-4">
        <Link 
          href="/about" 
          className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <UserRound className="text-gray-600 dark:text-gray-300" />
          <span>About Me</span>
        </Link>

        <Link 
          href="https://calendar.app.google/iedo21DEW38bFRwg6" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-green-100 hover:bg-green-200 p-3 rounded-lg transition dark:bg-green-800 dark:hover:bg-green-700"
        >
          <Calendar className="text-green-600 dark:text-green-300" />
          <span>Schedule Meeting</span>
          <ExternalLink size={16} />
        </Link>
      </div>

      <div className="text-gray-500 text-sm dark:text-gray-400">
        Current Time: {time} (MT)
      </div>
    </div>
  );
}