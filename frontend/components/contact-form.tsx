"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://sweets-and-backery-website.onrender.com/api/contact", // ✅ FIXED URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject, // ✅ send separately
            message,
          }),
        }
      );

      if (!res.ok) {
        alert("Failed to send message");
        return;
      }

      setSubmitted(true);

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            required
            className="bg-background"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="subject" className="text-sm font-medium text-foreground">
          Subject
        </Label>
        <Input
          id="subject"
          placeholder="What is this about?"
          required
          className="bg-background"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us more..."
          rows={5}
          required
          className="bg-background"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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