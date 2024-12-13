  "use client";

  import * as React from "react";
  import { useTheme } from "next-themes";
  import { MoonIcon, SunIcon } from "lucide-react";

  export function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();
    
    // Add mounted state to prevent hydration mismatch
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    const toggleTheme = React.useCallback(() => {
      const currentTheme = theme === "system" ? systemTheme : theme;
      setTheme(currentTheme === "dark" ? "light" : "dark");
    }, [theme, systemTheme, setTheme]);

    // Prevent flash of incorrect theme
    if (!mounted) {
      return <div className="w-10 h-10" />; // Placeholder to prevent layout shift
    }

    const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark");

    return (
      <button
        onClick={toggleTheme}
        className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 ripple"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      >
        {isDark ? (
          <MoonIcon className="h-5 w-5 text-yellow-500" />
        ) : (
          <SunIcon className="h-5 w-5 text-gray-500" />
        )}
      </button>
    );
  }
