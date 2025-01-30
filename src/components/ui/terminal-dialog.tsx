import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TerminalDialogProps {
  triggerContent: {
    title: string;
    subtitle: string;
    date: string;
  };
  dialogContent: {
    title: string;
    subtitle: string;
    date: string;
    tags?: string[];
    items: string[];
  };
}

export const TerminalDialog: React.FC<TerminalDialogProps> = ({
  triggerContent,
  dialogContent,
}) => (
  <Dialog>
    <DialogTrigger className="w-full">
      <div className="flex flex-col items-start p-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
        <DialogTitle className="text-lg font-semibold">{triggerContent.title}</DialogTitle>
        <DialogDescription className="text-sm text-gray-600 dark:text-orange-300 italic">
          {triggerContent.subtitle}
        </DialogDescription>
        <p className="text-sm text-gray-600 dark:text-gray-400">{triggerContent.date}</p>
      </div>
    </DialogTrigger>
    <DialogContent className="max-w-2xl bg-black text-white rounded-lg shadow-lg">
      <div className="p-4 font-mono">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{dialogContent.title}</h3>
        <p className="text-sm text-gray-400 italic mb-2">{dialogContent.subtitle}</p>
        <p className="text-sm text-gray-400 mb-4">{dialogContent.date}</p>
        {dialogContent.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {dialogContent.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <ul className="list-disc pl-5 space-y-2">
          {dialogContent.items.map((item, index) => (
            <li key={index} className="text-sm text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </DialogContent>
  </Dialog>
); 