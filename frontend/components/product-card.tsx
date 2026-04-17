"use client";

import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  // ✅ FIX IMAGE URL
  const imageUrl = product.image?.startsWith("/uploads")
    ? `https://sweets-and-backery-website.onrender.com${product.image}`
    : product.image;

  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow duration-300 hover:shadow-lg">
      
      <div className="relative aspect-square overflow-hidden">
        
        {/* ✅ USE NORMAL IMG INSTEAD OF NEXT IMAGE */}
        <img
          src={imageUrl}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
          {product.category?.replace("-", " ")}
        </span>

        {product.weight && (
          <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground">
            {product.weight}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3 p-5">
        <h3 className="font-serif text-lg font-semibold text-card-foreground">
          {product.name}
        </h3>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-1">
          <span className="text-lg font-bold text-foreground">
            Rs.{product.price}
          </span>

          <Button
            size="sm"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => addItem(product)}
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>

    </article>
  );
}