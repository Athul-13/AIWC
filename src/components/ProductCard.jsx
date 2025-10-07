import { useState } from "react"
import { Link } from "react-router-dom"

export default function ProductCard({ product }) {
  const [adding, setAdding] = useState(false)

  const onAdd = async (e) => {
    e.preventDefault()
    setAdding(true)
    // Simulated add-to-cart delay for UX feedback
    setTimeout(() => setAdding(false), 700)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block rounded-lg border border-border bg-card p-3 hover:shadow-md transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--ring)]"
      aria-label={`${product.name} details`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-secondary">
        <img
          src={product.image || "/placeholder.svg"}
          alt={`${product.name} image`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="pt-3">
        <h3 className="text-foreground font-medium">{product.name}</h3>
        <p className="text-foreground/70 mt-1">${product.price.toFixed(2)}</p>
      </div>
      <div className="pt-3">
        <button
          className="btn-primary w-full rounded-md px-3 py-2 text-sm font-medium shadow-sm hover:shadow transition-all disabled:opacity-70"
          onClick={onAdd}
          aria-label={`Add ${product.name} to cart`}
          disabled={adding}
        >
          {adding ? "Adding…" : "Add to Cart"}
        </button>
      </div>
    </Link>
  )
}
