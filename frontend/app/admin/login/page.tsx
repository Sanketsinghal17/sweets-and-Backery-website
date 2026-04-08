"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = () => {
    if (password === "admin123") {
      localStorage.setItem("admin", "true")
      router.push("/admin")
    } else {
      alert("Wrong password")
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Login 🔐</h2>

      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}