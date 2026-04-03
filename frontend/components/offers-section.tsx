import Link from "next/link";
import { Truck, Egg, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    icon: Egg,
    title: "100% Eggless",
    description:
      "All our cakes and baked goods are 100% eggless. Pure vegetarian goodness in every bite.",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description:
      "We deliver fresh cakes and snacks right to your doorstep. Call us to place your order.",
  },
  {
    icon: Phone,
    title: "Custom Cakes",
    description:
      "Want to customize your cake? Call us on 7500171636 and we will make it just the way you like.",
  },
];

export function OffersSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
            Why Choose Us
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold md:text-4xl">
            Best Quality &middot; Great Taste
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="flex flex-col items-center rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center transition-colors hover:bg-primary-foreground/10"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                <offer.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold">
                {offer.title}
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/70">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
