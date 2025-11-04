import Gallery from "@/components/Gallery";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected interior design projects by Studio Arc.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      <Section title="Portfolio" subtitle="Selected residential and boutique commercial work.">
        <Gallery
          images={[
            {
              src:
                "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d19?q=80&auto=format&fit=crop&w=1600",
              alt: "Serene bedroom",
            },
            {
              src:
                "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&auto=format&fit=crop&w=1600",
              alt: "Living room with art",
            },
            {
              src:
                "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&auto=format&fit=crop&w=1600",
              alt: "Minimal kitchen",
            },
            {
              src:
                "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&auto=format&fit=crop&w=1600",
              alt: "Dining nook",
            },
            {
              src:
                "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&auto=format&fit=crop&w=1600",
              alt: "Entryway",
            },
            {
              src:
                "https://images.unsplash.com/photo-1505692794403-34cb0b2bdd31?q=80&auto=format&fit=crop&w=1600",
              alt: "Bathroom",
            },
          ]}
        />
      </Section>
    </div>
  );
}
