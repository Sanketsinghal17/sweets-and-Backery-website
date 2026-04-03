import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-6 py-16 md:flex-row md:gap-12 md:py-24">
        {/* Text */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-4 inline-block rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            100% Eggless
          </span>
          <h1 className="text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Best Quality, Great Taste
          </h1>
          <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Welcome to Variety Sweets & Bakers. Enjoy our freshly baked 100% eggless cakes, premium cakes, cake slices, puddings and delicious snacks every day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/products">
              <Button
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Explore Our Menu
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:7500171636">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                Order Now
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Want to customize your cake? Call us on <a href="tel:7500171636" className="font-semibold text-accent hover:underline">7500171636</a>
          </p>
        </div>

        {/* Image */}
        <div className="relative flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero-bakery.jpg"
              alt="Variety Sweets & Bakers - Fresh cakes, pastries and snacks"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
