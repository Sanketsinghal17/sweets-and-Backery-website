import { AuthForm } from "@/components/auth-form";

export const metadata = {
  title: "Sign In | Variety Sweets & Bakers",
  description:
    "Sign in or create an account at Variety Sweets & Bakers.",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-12">
      <AuthForm />
    </div>
  );
}
