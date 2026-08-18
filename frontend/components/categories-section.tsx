import Link from "next/link";
import {
  CakeSlice,
  Star,
  Sparkles,
  Heart,
  UtensilsCrossed,
} from "lucide-react";

const categories = [
  {
    icon: CakeSlice,
    name: "Bento Cakes",
    description: "Cute 250 gm bento cakes starting at just Rs.300.",
    href: "/products?category=bento-cakes",
  },
  {
    icon: CakeSlice,
    name: "Whole Cakes",
    description: "Fresh 500 gm cakes starting at just Rs.400.",
    href: "/products?category=whole-cakes",
  },
  {
    icon: Star,
    name: "Premium Cakes",
    description: "Premium 600 gm cakes with delicious flavors.",
    href: "/products?category=premium-cakes",
  },
  {
    icon: Sparkles,
    name: "Cakes 1kg",
    description: "Celebrate bigger with our delicious 1 kg cakes.",
    href: "/products?category=cakes-1kg",
  },
  {
    icon: Heart,
    name: "Cake Pastries",
    description: "Delicious pastries and doughnuts for every craving.",
    href: "/products?category=pastries",
  },
  {
    icon: UtensilsCrossed,
    name: "Snacks",
    description: "Burgers, kulchas, cheese rolls, hotdogs and more.",
    href: "/products?category=snacks",
  },
];

export function CategoriesSection() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Browse By Category
          </span>

          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            What Are You Craving?
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-accent">
                <cat.icon className="h-6 w-6 text-primary transition-colors group-hover:text-accent-foreground" />
              </div>

              <h3 className="mb-2 font-serif text-base font-semibold text-card-foreground">
                {cat.name}
              </h3>

              <p className="text-xs leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}