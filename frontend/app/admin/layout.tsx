"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin")
    if (!isAdmin) {
      router.push("/admin/login")
    }
  }, [])

  return <>{children}</>
}