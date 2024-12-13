'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      <h1 className="text-4xl font-bold mb-4">Hello, I'm Tarek Ahmed</h1>
      <h2 className="text-2xl mb-6">Software Engineer</h2>
      <div className="flex items-center gap-2">
        Read more{" "}
        <Link
          href="/about" 
          className="text-blue-600 hover:text-blue-800 underline"
        >
          about Me
        </Link>
        {" "}or{" "}
        <Link 
          href="https://calendar.app.google/iedo21DEW38bFRwg6" 
          className="text-blue-600 hover:text-blue-800 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          schedule a meeting
        </Link>
      </div>
    </div>
  );
}
