"use client";
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    const codeText = React.isValidElement(children)
      ? (children as React.ReactElement<any>).props.children
      : children;

    if (codeText) {
      await navigator.clipboard.writeText(
        typeof codeText === 'string' 
          ? codeText 
          : codeText.props?.children || ''
      );
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="relative">
      <pre className="p-4 rounded-lg overflow-x-auto text-white bg-gray-700">
        {children}
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 bg-primary/10 hover:bg-primary/20 rounded-md transition-colors"
        aria-label="Copy code"
      >
        {isCopied ? (
          <Check size={16} className="text-green-500" />
        ) : (
          <Copy size={16} className="text-primary" />
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
