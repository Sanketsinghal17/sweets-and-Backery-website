"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export function ProductsGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProductsByCategory(category);
      setProducts(data);
      setLoading(false);
    }

    loadProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <p>Loading products...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-lg text-muted-foreground">
          No products found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}