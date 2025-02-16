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
    <div className="flex flex-col items-center justify-center p-4 text-center w-full bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-900 text-slate-900 dark:text-slate-200 font-mono">
      <div className="w-full max-w-3xl p-8 border border-slate-200 dark:border-slate-700 rounded-lg shadow-2xl bg-white/95 dark:bg-slate-900/95 relative backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300">
        <div className="absolute top-0 left-0 right-0 h-8 bg-slate-100/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 rounded-t-lg flex items-center px-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 text-slate-600 dark:text-slate-400 text-sm font-light">terminal@tarek-ahmed</div>
        </div>

        <div className="mt-8">
          <div className="w-24 h-24 mb-4 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center bg-slate-100/30 dark:bg-slate-800/30 shadow-lg mx-auto hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-300">
            <UserRound size={48} className="text-slate-700 dark:text-slate-300" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2 font-sans">Tarek Ahmed</h1>
          <h2 className="text-2xl text-slate-600 dark:text-slate-400 mb-6 font-medium font-sans">Software Engineer</h2>

          <div className="flex items-center space-x-3 mb-6 justify-center group cursor-pointer">
            <Mail className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors" />
            <a 
              href="mailto:tarek5701@gmail.com" 
              className="text-base text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 font-medium transition-colors"
            >
              tarek5701@gmail.com
            </a>
          </div>

          <div className="flex space-x-4 mb-6 justify-center">
            <Link 
              href="/about" 
              className="flex items-center space-x-2 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 p-3 rounded-lg transition-all duration-300 hover:shadow-lg group"
            >
              <UserRound className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200" />
              <span className="text-base font-medium group-hover:text-slate-800 dark:group-hover:text-slate-200">About Me</span>
            </Link>

            <Link 
              href="https://calendar.app.google/iedo21DEW38bFRwg6" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 p-3 rounded-lg transition-all duration-300 hover:shadow-lg group"
            >
              <Calendar className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200" />
              <span className="text-base font-medium group-hover:text-slate-800 dark:group-hover:text-slate-200">Schedule Meeting</span>
              <ExternalLink size={16} className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200" />
            </Link>
          </div>

          <div className="text-sm text-slate-600 dark:text-slate-400 font-medium bg-slate-100/30 dark:bg-slate-800/30 px-3 py-1.5 rounded-md inline-block hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-300">
            {time} (MT - Local Time)
          </div>
        </div>
      </div>
    </div>
  );
}