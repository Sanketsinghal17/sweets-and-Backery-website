import Image from "next/image";
import { Heart, Award, Egg } from "lucide-react";

export const metadata = {
  title: "About Us | Variety Sweets & Bakers",
  description:
    "Learn about Variety Sweets & Bakers - 100% eggless cakes and snacks with best quality and great taste.",
};

const values = [
  {
    icon: Egg,
    title: "100% Eggless",
    description:
      "All our cakes and baked goods are prepared completely eggless. Pure vegetarian treats for the whole family.",
  },
  {
    icon: Award,
    title: "Best Quality",
    description:
      "We use only the finest ingredients to ensure every product meets our high standards of quality and taste.",
  },
  {
    icon: Heart,
    title: "Made With Love",
    description:
      "Every cake is baked fresh and every snack is prepared with care by our skilled team of bakers.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-16 md:flex-row md:gap-12 md:py-24">
          <div className="flex-1">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Our Story
            </span>
            <h1 className="text-balance font-serif text-3xl font-bold text-foreground md:text-5xl">
              Variety Sweets & Bakers
            </h1>
            <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground md:text-lg">
              Variety Sweets & Bakers is your neighborhood bakery committed to delivering 100% eggless cakes and snacks of the highest quality. From classic whole cakes to premium flavors like Truffle, Rasmalai, and Red Velvet, we have something for every celebration.
            </p>
            <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              We also serve a wide variety of freshly prepared snacks including burgers, rolls, sandwiches and more. Our mission is simple: Best Quality, Great Taste, at prices everyone can enjoy.
            </p>
          </div>
          <div className="relative flex-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/about-bakery.jpg"
                alt="Variety Sweets & Bakers interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            What We Stand For
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Our Values
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                <v.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-card-foreground">
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 text-center md:grid-cols-4 md:py-24">
          {[
            { value: "30+", label: "Menu Items" },
            { value: "5", label: "Categories" },
            { value: "100%", label: "Eggless" },
            { value: "1000+", label: "Happy Customers" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl font-bold text-accent">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
