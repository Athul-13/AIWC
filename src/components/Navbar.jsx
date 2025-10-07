"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = "text-sm md:text-base text-foreground/80 hover:text-foreground transition-colors"

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <nav className="mx-auto max-w-6xl px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group" aria-label="AIWC Store Home">
            <div
              className="h-8 w-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform"
              aria-hidden="true"
            >
              <span className="sr-only">AIWC Store</span>
              <span className="h-3 w-3 rounded-full bg-primary block" />
            </div>
            <span className="font-semibold text-foreground">AIWC Store</span>
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-secondary"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="h-0.5 w-5 bg-foreground block mb-1" />
          <span className="h-0.5 w-5 bg-foreground block" />
        </button>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className={navLink}>
            Home
          </Link>
          <Link href="/" className={navLink}>
            Shop
          </Link>
          <Link href="/" className={navLink}>
            About
          </Link>
          <Link href="/" className={navLink}>
            Services
          </Link>
          <Link href="/" className={navLink}>
            Contact
          </Link>
        <Link
        to="/"   // React Router uses `to` instead of `href`
        className={
            "btn-primary rounded-md px-3 py-2 text-sm font-medium shadow-sm " +
            "hover:shadow md:ml-2 transition-all"
        }
        >
        View Cart
        </Link>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col gap-3">
            <Link href="/" className={navLink} onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/" className={navLink} onClick={() => setOpen(false)}>
              Shop
            </Link>
            <Link href="/" className={navLink} onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/" className={navLink} onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/" className={navLink} onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link
              href="/"
              className="btn-primary rounded-md px-3 py-2 text-sm font-medium shadow-sm w-fit"
              onClick={() => setOpen(false)}
            >
              View Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
