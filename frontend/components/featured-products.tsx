"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { fetchProducts } from "@/lib/api";

export function FeaturedProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

  async function loadProducts() {

    try {

      const data = await fetchProducts();

      const featured = data;

      setProducts(featured.slice(0,6));

    } catch (error) {
      console.error("Error fetching featured products:", error);
    }

  }

  loadProducts();

}, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
          Our Bestsellers
        </span>

        <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
          Popular Picks
        </h2>

        <p className="mt-3 max-w-lg text-pretty text-muted-foreground">
          Our most loved cakes and snacks, freshly prepared every day. All 100% eggless.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {products.map((product:any) => (
          <ProductCard key={product._id} product={product} />
        ))}

      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/products">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View Full Menu
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}