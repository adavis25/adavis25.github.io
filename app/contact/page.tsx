"use client";

import { useState } from "react";

// Sign up at formspree.io, create a form, and paste your form ID here.
const FORMSPREE_ID = "YOUR_FORM_ID";

type FormStatus = "idle" | "submitting" | "success" | "error";

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;

    try {
      const res = await fetch(`https://formspree.io/f/mojoqzyo`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-cyber-bg px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-cyber-accent font-mono text-sm mb-3 tracking-widest uppercase">
          Contact
        </p>
        <h1 className="text-4xl font-bold text-white mb-2">Let&apos;s Work Together</h1>
        <p className="text-cyber-muted text-lg mb-12">
          Open to new opportunities, collaborations, and interesting problems.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            {status === "success" ? (
              <div className="flex flex-col items-start gap-3 p-6 bg-cyber-card border border-cyber-green rounded-lg">
                <p className="text-cyber-green font-semibold">Message sent!</p>
                <p className="text-cyber-text text-sm">Thanks for reaching out — I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-cyber-accent hover:opacity-80 transition"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-xs text-cyber-muted uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="bg-cyber-card border border-cyber-border rounded px-4 py-2.5 text-cyber-text text-sm focus:outline-none focus:border-cyber-accent transition-colors"
                    placeholder="Alex Smith"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-xs text-cyber-muted uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-cyber-card border border-cyber-border rounded px-4 py-2.5 text-cyber-text text-sm focus:outline-none focus:border-cyber-accent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-mono text-xs text-cyber-muted uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="bg-cyber-card border border-cyber-border rounded px-4 py-2.5 text-cyber-text text-sm focus:outline-none focus:border-cyber-accent transition-colors resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong — try emailing me directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="px-6 py-3 bg-cyber-accent text-black font-semibold rounded hover:opacity-80 transition disabled:opacity-50 disabled:cursor-not-allowed self-start"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Direct contact links */}
          <div className="flex flex-col gap-8 lg:pt-2">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs text-cyber-muted uppercase tracking-widest">Elsewhere</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/adavis25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyber-muted hover:text-cyber-accent transition text-sm"
                >
                  <GitHubIcon />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/YOUR_HANDLE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyber-muted hover:text-cyber-accent transition text-sm"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
