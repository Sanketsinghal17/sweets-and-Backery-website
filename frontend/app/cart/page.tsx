import { CartItems } from "@/components/cart-items";

export const metadata = {
  title: "Cart | Variety Sweets & Bakers",
  description: "Review and manage items in your shopping cart.",
};

export default function CartPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      <div className="mb-10">
        <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          Your Cart
        </h1>
        <p className="mt-2 text-muted-foreground">
          Review your items before checkout.
        </p>
      </div>
      <CartItems />
    </div>
  );
}
