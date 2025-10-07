import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background" aria-label="Welcome banner">
      <div className="absolute inset-0">
        <img
          src="/garden-background-lush-leaves-subtle.svg"
          alt="Lush green garden background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6 pt-36 pb-20 md:pt-40 md:pb-28">
        <h1 className="text-balance text-3xl md:text-5xl font-bold text-foreground animate-fade-in">
          Welcome to the AIWC Store
        </h1>
        <p className="mt-4 text-pretty text-foreground/80 text-base md:text-lg max-w-2xl">
          Explore a Variety of Products for Your Garden &amp; Beyond.
        </p>
        <div className="mt-8">
          <a
            href="#featured"
            className="btn-primary inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-semibold shadow transition-all hover:shadow-md"
          >
            Shop Now
          </a>
        </div>

        {/* Subtle animated accent stripe like a modern, slightly flashy touch */}
        <div className="mt-10 h-1 w-24 rounded-full bg-primary/70 animate-pulse" aria-hidden="true" />
      </div>
    </section>
  )
}
