import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to start your interior design project.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <Section
        title="Contact"
        subtitle="Tell us about your project?timeline, scope, location?and we'll follow up within 2 business days."
      >
        <div className="grid items-start gap-10 md:grid-cols-2">
          <ContactForm />
          <div className="rounded-2xl border p-6">
            <div className="text-sm text-zinc-500">Email</div>
            <a href="mailto:hello@studioarc.design" className="mt-1 block font-medium underline-offset-4 hover:underline">
              hello@studioarc.design
            </a>
            <div className="mt-6 text-sm text-zinc-500">Location</div>
            <div className="font-medium">Remote + On-site in select cities</div>
            <div className="mt-6 text-sm text-zinc-500">Follow</div>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer noopener" className="underline-offset-4 hover:underline">
                Instagram
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer noopener" className="underline-offset-4 hover:underline">
                Pinterest
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
