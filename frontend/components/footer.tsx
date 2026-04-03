import Link from "next/link";
import { Phone } from "lucide-react";

const footerLinks = {
  shop: [
    { href: "/products?category=whole-cakes", label: "Whole Cakes" },
    { href: "/products?category=premium-cakes", label: "Premium Cakes" },
    { href: "/products?category=special-cakes", label: "Special Cakes" },
    { href: "/products?category=slices-puddings", label: "Slices & Puddings" },
    { href: "/products?category=snacks", label: "Snacks" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2" aria-label="Variety Sweets & Bakers Home">
              <span className="font-serif text-lg font-semibold">
                Variety Sweets & Bakers
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              100% Eggless. Best Quality. Great Taste. We bake fresh cakes and prepare delicious snacks with love every day.
            </p>
            <a
              href="tel:7500171636"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent"
            >
              <Phone className="h-4 w-4" />
              Call: 7500171636
            </a>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Our Menu
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Company
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            {"© 2026 Variety Sweets & Bakers. All rights reserved."}
          </p>
          <p className="text-xs font-medium text-primary-foreground/50">
            Best Quality &middot; Great Taste
          </p>
        </div>
      </div>
    </footer>
  );
}
