import Image from "next/image";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Studio Arc ? boutique interior design studio.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <Section title="About Studio Arc" subtitle="Human, timeless, and livable design.">
        <div className="grid items-start gap-8 md:grid-cols-[1.2fr,0.8fr]">
          <div className="prose max-w-none dark:prose-invert">
            <p>
              We create spaces that feel effortless and inviting, with a focus
              on natural materials, layered textures, and enduring functionality.
              Our studio partners closely with clients to understand how they
              live, then designs environments that elevate the everyday.
            </p>
            <p>
              Studio Arc works across residential and boutique commercial
              projects, from thoughtful room refreshes to full-home renovations
              and new builds. We collaborate with a trusted network of builders
              and trades to deliver work with care and precision.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&auto=format&fit=crop&w=1200"
              alt="Designer workspace with materials"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
