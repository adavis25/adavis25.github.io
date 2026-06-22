"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-cyber-surface border-b border-cyber-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono font-bold text-xl text-cyber-accent tracking-tight hover:opacity-80 transition"
        >
          AD
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition ${
                pathname === href
                  ? "text-cyber-accent"
                  : "text-cyber-muted hover:text-cyber-text"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-1.5 border border-cyber-accent text-cyber-accent rounded hover:bg-cyber-accent hover:text-black transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
