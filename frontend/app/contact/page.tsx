import { Phone, Clock, CakeSlice } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact | Variety Sweets & Bakers",
  description:
    "Get in touch with Variety Sweets & Bakers. Call 7500171636 for orders and custom cakes.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us / WhatsApp",
    value: "7500171636",
    href: "tel:7500171636",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Open Daily: 9 AM - 10 PM",
    href: undefined,
  },
  {
    icon: CakeSlice,
    label: "Custom Cakes",
    value: "Want to customize your cake? Call us on 7500171636.",
    href: "tel:7500171636",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
          Get In Touch
        </span>
        <h1 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
          Contact Us
        </h1>
        <p className="mt-3 max-w-lg text-pretty text-muted-foreground">
          Have a question, want to place a bulk order, or customize a cake? We would love to hear from you.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          {contactInfo.map((item) => {
            const Wrapper = item.href ? "a" : "div";
            return (
              <Wrapper
                key={item.label}
                {...(item.href ? { href: item.href } : {})}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted/50"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.value}
                  </p>
                </div>
              </Wrapper>
            );
          })}

          {/* Menu image from the shop */}
          <div className="overflow-hidden rounded-xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-03%20at%2011.30.56%20AM-b5rL96DANQdlflhHjToYT3BKlMR1ry.jpeg"
              alt="Variety Sweets & Bakers - Full Cake Menu"
              className="w-full"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          <h2 className="mb-6 font-serif text-xl font-semibold text-card-foreground">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
