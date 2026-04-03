"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function AuthForm() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-lg">
      {/* Logo */}
      <div className="mb-8 flex flex-col items-center">
        <Link href="/" className="flex items-center gap-2" aria-label="Variety Sweets & Bakers Home">
          <span className="font-serif text-xl font-semibold text-card-foreground">
            Variety <span className="text-accent">Sweets</span> & Bakers
          </span>
        </Link>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex rounded-lg bg-muted p-1">
        <button
          className={cn(
            "flex-1 rounded-md py-2 text-sm font-medium transition-all",
            mode === "login"
              ? "bg-card text-card-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
          onClick={() => setMode("login")}
        >
          Sign In
        </button>
        <button
          className={cn(
            "flex-1 rounded-md py-2 text-sm font-medium transition-all",
            mode === "register"
              ? "bg-card text-card-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
          onClick={() => setMode("register")}
        >
          Register
        </button>
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-5"
      >
        {mode === "register" && (
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="fullName"
              className="text-sm font-medium text-foreground"
            >
              Full Name
            </Label>
            <Input
              id="fullName"
              placeholder="Your full name"
              required
              className="bg-background"
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="authEmail"
            className="text-sm font-medium text-foreground"
          >
            Email
          </Label>
          <Input
            id="authEmail"
            type="email"
            placeholder="you@example.com"
            required
            className="bg-background"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="authPassword"
            className="text-sm font-medium text-foreground"
          >
            Password
          </Label>
          <Input
            id="authPassword"
            type="password"
            placeholder="Enter your password"
            required
            className="bg-background"
          />
        </div>

        {mode === "register" && (
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-foreground"
            >
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required
              className="bg-background"
            />
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {mode === "login" ? "Sign In" : "Create Account"}
        </Button>

        {mode === "login" && (
          <p className="text-center text-sm text-muted-foreground">
            {"Don't have an account? "}
            <button
              type="button"
              className="font-medium text-accent underline-offset-4 hover:underline"
              onClick={() => setMode("register")}
            >
              Register
            </button>
          </p>
        )}
        {mode === "register" && (
          <p className="text-center text-sm text-muted-foreground">
            {"Already have an account? "}
            <button
              type="button"
              className="font-medium text-accent underline-offset-4 hover:underline"
              onClick={() => setMode("login")}
            >
              Sign In
            </button>
          </p>
        )}
      </form>
    </div>
  );
}
