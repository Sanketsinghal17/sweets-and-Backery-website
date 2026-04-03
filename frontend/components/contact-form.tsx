"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <h3 className="font-serif text-xl font-semibold text-card-foreground">
          Thank you!
        </h3>
        <p className="mt-2 text-muted-foreground">
          We have received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            required
            className="bg-background"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            required
            className="bg-background"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="subject"
          className="text-sm font-medium text-foreground"
        >
          Subject
        </Label>
        <Input
          id="subject"
          placeholder="What is this about?"
          required
          className="bg-background"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us more..."
          rows={5}
          required
          className="bg-background"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="self-start bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Send Message
      </Button>
    </form>
  );
}
