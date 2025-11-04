import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-24 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Elevated interiors, tailored to your life
            </h1>
            <p className="mt-5 max-w-prose text-lg text-zinc-600 dark:text-zinc-400">
              We design warm, modern spaces that balance form and function?
              from single rooms to full-home transformations.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/portfolio"
                className="rounded-full bg-foreground px-6 py-3 text-background hover:opacity-90"
              >
                View portfolio
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-foreground px-6 py-3 hover:bg-foreground/5"
              >
                Book a consultation
              </Link>
            </div>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg md:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&auto=format&fit=crop&w=1600"
              alt="Modern living room interior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <Section
        eyebrow="Services"
        title="From concept to completion"
        subtitle="Full-service interior design for renovations, furnishings, and new builds."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Full-Service Design",
              desc: "Comprehensive design, sourcing, and project coordination.",
            },
            {
              title: "Renovations",
              desc: "Kitchens, baths, and structural space planning.",
            },
            {
              title: "Furnishing & Styling",
              desc: "Custom furniture plans, art, textiles, and finishing touches.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/services" className="underline underline-offset-4">
            Explore services
          </Link>
        </div>
      </Section>

      {/* Featured work */}
      <Section
        eyebrow="Featured work"
        title="Spaces with soul"
        subtitle="A selection of recent residential and boutique commercial projects."
      >
        <Gallery
          images={[
            {
              src:
                "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&auto=format&fit=crop&w=1600",
              alt: "Minimal kitchen with wood and stone",
            },
            {
              src:
                "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d19?q=80&auto=format&fit=crop&w=1600",
              alt: "Calm bedroom with layered textures",
            },
            {
              src:
                "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&auto=format&fit=crop&w=1600",
              alt: "Contemporary living space with art",
            },
          ]}
        />
        <div className="mt-6">
          <Link href="/portfolio" className="underline underline-offset-4">
            See full portfolio
          </Link>
        </div>
      </Section>

      {/* Testimonial */}
      <Section
        eyebrow="Testimonials"
        title="?They transformed our home into a sanctuary.?"
        subtitle="? A.M., whole-home renovation, 2024"
      >
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
          The Studio Arc team listened deeply to how we live day-to-day and
          delivered a home that feels warm, functional, and uniquely ours.
        </p>
      </Section>

      {/* CTA */}
      <Section
        eyebrow="Get started"
        title="Let?s design your space"
        subtitle="Tell us about your project and we?ll follow up with next steps."
      >
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-background hover:opacity-90"
        >
          Book a consultation
        </Link>
      </Section>
    </div>
  );
}
