"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/lib/products";
import { cn } from "@/lib/utils";

export function ProductsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category") || "all";

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            if (cat.value === "all") {
              params.delete("category");
            } else {
              params.set("category", cat.value);
            }
            router.push(`/products?${params.toString()}`);
          }}
          className={cn(
            "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200",
            active === cat.value
              ? "border-accent bg-accent text-accent-foreground"
              : "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
