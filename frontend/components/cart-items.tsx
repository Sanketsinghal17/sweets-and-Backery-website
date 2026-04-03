"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";

export function CartItems() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground/30" />
        <h2 className="font-serif text-2xl font-semibold text-foreground">
          Your cart is empty
        </h2>
        <p className="mt-2 text-muted-foreground">
          Looks like you have not added anything to your cart yet.
        </p>
        <Link href="/products" className="mt-6">
          <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            Browse Menu
          </Button>
        </Link>
      </div>
    );
  }

  const deliveryCharge = totalPrice >= 500 ? 0 : 30;

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Cart Items List */}
      <div className="lg:col-span-2">
        <div className="flex flex-col gap-4">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex gap-4 rounded-xl border border-border bg-card p-4 md:gap-6"
            >
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg md:h-28 md:w-28">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-semibold text-card-foreground md:text-lg">
                    {product.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {"Rs."}{product.price} each
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantity - 1)
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
                      aria-label={`Decrease quantity of ${product.name}`}
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium text-foreground">
                      {quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantity + 1)
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
                      aria-label={`Increase quantity of ${product.name}`}
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-base font-bold text-foreground">
                      {"Rs."}{product.price * quantity}
                    </span>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-muted-foreground transition-colors hover:text-destructive"
                      aria-label={`Remove ${product.name} from cart`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-destructive"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-serif text-lg font-semibold text-card-foreground">
            Order Summary
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium text-foreground">
                {"Rs."}{totalPrice}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Delivery</span>
              <span className="font-medium text-foreground">
                {deliveryCharge === 0 ? "Free" : `Rs.${deliveryCharge}`}
              </span>
            </div>
            <div className="border-t border-border pt-3">
              <div className="flex justify-between">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-lg font-bold text-foreground">
                  {"Rs."}{totalPrice + deliveryCharge}
                </span>
              </div>
            </div>
          </div>
          <Link href="/checkout" className="block mt-6">
  <Button
    size="lg"
    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
  >
    Proceed to Checkout
  </Button>
</Link>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            {"Free delivery on orders over Rs.500"}
          </p>
        </div>
      </div>
    </div>
  );
}
