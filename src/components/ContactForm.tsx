"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const subject = encodeURIComponent("New Project Inquiry");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto = `mailto:hello@studioarc.design?subject=${subject}&body=${body}`;

    // Try opening the user's default mail client
    window.location.href = mailto;

    // Fallback toast-like UX
    setTimeout(() => {
      alert("Thanks! Your email client should open. If not, email hello@studioarc.design.");
      setSubmitting(false);
    }, 400);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:max-w-lg">
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/30"
      />
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/30"
      />
      <textarea
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tell us about your project..."
        rows={5}
        className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/30"
      />
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-background hover:opacity-90 disabled:opacity-50"
      >
        {submitting ? "Sending?" : "Send inquiry"}
      </button>
    </form>
  );
}
