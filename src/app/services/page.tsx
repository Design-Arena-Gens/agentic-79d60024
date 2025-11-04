import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Interior design services for renovations, furnishings, and new builds.",
};

const services = [
  {
    title: "Full-Service Interior Design",
    details:
      "End-to-end design: concept, materials, drawings, sourcing, procurement, and installation.",
  },
  {
    title: "Renovations & Space Planning",
    details:
      "Kitchens, baths, and reconfigurations with detailed plans for contractors and trades.",
  },
  {
    title: "Furnishing & Styling",
    details:
      "Custom furniture plans, window treatments, art curation, textiles, and styling.",
  },
  {
    title: "New Build Consulting",
    details:
      "Finish selections and cohesive interior packages from the ground up.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <Section title="Services" subtitle="Tailored to your project scope and timeline.">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">{s.details}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Process"
        title="A collaborative, transparent approach"
        subtitle="Clear milestones and communication from kickoff to installation."
      >
        <ol className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {[
            { step: "1. Discovery", text: "We learn your goals, budget, and style." },
            { step: "2. Concepts", text: "Mood boards, layouts, and material directions." },
            { step: "3. Design", text: "Detailed selections, drawings, and sourcing." },
            { step: "4. Installation", text: "Procurement, styling, and final walkthrough." },
          ].map((i) => (
            <li key={i.step} className="rounded-2xl border p-6">
              <div className="text-sm font-medium text-zinc-500">{i.step}</div>
              <div className="mt-2 font-semibold">{i.text}</div>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
