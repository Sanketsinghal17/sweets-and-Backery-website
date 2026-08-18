import { Suspense } from "react";
import { ProductsFilter } from "@/components/products-filter";
import { ProductsGrid } from "@/components/products-grid";

export const metadata = {
  title: "Menu | Variety Sweets & Bakers",
  description:
    "Browse our full menu of 100% eggless bento cakes, whole cakes, premium cakes, 1 kg cakes, pastries and snacks.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
          Our Menu
        </span>

        <h1 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
          Explore Our Full Menu
        </h1>

        <p className="mt-3 max-w-lg text-pretty text-muted-foreground">
          All items are 100% eggless. From bento cakes and premium cakes to
          pastries and snacks, find something delicious for every occasion.
        </p>
      </div>

      <Suspense fallback={null}>
        <div className="mb-8">
          <ProductsFilter />
        </div>

        <ProductsGrid />
      </Suspense>
    </div>
  );
}