"use client";

import { useState, type FormEvent } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import PageHeader from "@/components/PageHeader";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;

    try {
      const res = await fetch("https://formspree.io/f/mojoqzyo", {
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
        <PageHeader
          label="Contact"
          title="Let's Work Together"
          subtitle="Open to new opportunities, collaborations, and interesting problems."
        />

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
