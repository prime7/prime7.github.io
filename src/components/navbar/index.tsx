import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeSwitch";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav className="bg-background shadow-sm border-b border-border sticky top-0 z-50">
      <div className="flex justify-center h-16">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} passHref className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-bold text-muted-foreground hover:border-primary hover:text-foreground">
                {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
