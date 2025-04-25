"use client"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"
import { useRouter } from "next/router"

export default function NavBar() {
  const pathname = usePathname()
  return (
    <>
      <Link
        style={{
          fontSize: "20px",
          fontWeight: pathname === "/yesterday" ? "bold" : "normal",
          color: pathname === "/yesterday" ? "blue" : "black",
        }}
        href="/yesterday"
      >
        어제
      </Link>
      <Link
        style={{
          fontSize: "20px",
          fontWeight: pathname === "/today" ? "bold" : "normal",
          color: pathname === "/today" ? "blue" : "black",
        }}
        href="/today"
      >
        오늘
      </Link>
      <Link
        style={{
          fontSize: "20px",
          fontWeight: pathname === "/tomorrow" ? "bold" : "normal",
          color: pathname === "/tomorrow" ? "blue" : "black",
        }}
        href="/tomorrow"
      >
        내일
      </Link>
    </>
  )
}
