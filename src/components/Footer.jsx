import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-16" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-foreground/70">© 2025 AIWC Store</p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/" className="text-foreground/80 hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/" className="text-foreground/80 hover:text-foreground">
              Terms
            </Link>
            <Link href="/" className="text-foreground/80 hover:text-foreground">
              Contact
            </Link>
            <Link href="/" className="text-foreground/80 hover:text-foreground">
              About
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
