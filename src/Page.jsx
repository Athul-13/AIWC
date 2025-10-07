"use client"

import { useMemo, useState } from "react"
import { products } from "./products"
import Navbar from "./components/Navbar"
import { Link } from "react-router-dom"
import Footer from "./components/Footer"

export default function ProductDetailsPage({ params }) {
  const product = useMemo(() => products.find((p) => p.id === params.id), [params.id])
  const [qty, setQty] = useState(1)
  const [adding, setAdding] = useState(false)

  if (!product) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="mx-auto max-w-3xl px-4 md:px-6 pt-28 pb-20">
          <p className="text-foreground">Product not found.</p>
          <Link href="/" className="btn-primary inline-block mt-4 rounded-md px-4 py-2">
            Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const onAdd = () => {
    setAdding(true)
    setTimeout(() => setAdding(false), 700)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 md:px-6 pt-28 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden border border-border bg-card">
            <img
              src={product.image || "/placeholder.svg"}
              alt={`${product.name} large image`}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">{product.name}</h1>
            <p className="mt-2 text-xl text-foreground/80">${product.price.toFixed(2)}</p>

            <p className="mt-6 text-foreground/80 leading-relaxed">
              {product.description || "Detailed description coming soon."}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <label htmlFor="qty" className="text-sm">
                Quantity
              </label>
              <input
                id="qty"
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                className="w-20 rounded-md border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                aria-label="Quantity selector"
              />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onAdd}
                className="btn-primary rounded-md px-5 py-3 text-sm font-medium shadow-sm hover:shadow transition-all disabled:opacity-70"
                disabled={adding}
                aria-label={`Add ${product.name} to cart`}
              >
                {adding ? "Adding…" : "Add to Cart"}
              </button>
              <Link href="/" className="text-foreground/80 hover:text-foreground text-sm">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.id}`}
                className="group block rounded-lg border border-border bg-card p-3 hover:shadow-md transition-all hover:-translate-y-0.5"
                aria-label={`View ${p.name}`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-secondary">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={`${p.name} image`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="pt-3">
                  <h3 className="text-foreground font-medium">{p.name}</h3>
                  <p className="text-foreground/70 mt-1">${p.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
