import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProductGrid from "../components/ProductGrid"
import { products } from "../products"

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-10 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Shop
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Discover our complete collection of gardening products, tools, and supplies to help you create the perfect garden.
          </p>
        </div>
      </section>

      {/* All Products */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              All Products
            </h2>
            <p className="text-foreground/70">
              Browse our complete selection of gardening essentials.
            </p>
          </div>
          <ProductGrid items={products} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
