import ProductCard from "./ProductCard";


export default function ProductGrid({ items }) {
  return (
    <section id="featured" aria-label="Featured products" className="mx-auto max-w-6xl px-4 md:px-6">
      <header className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Featured Products</h2>
        <p className="text-foreground/70 mt-2">Popular picks curated for your garden.</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
