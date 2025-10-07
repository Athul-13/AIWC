import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductGrid from "./components/ProductGrid"
import { products } from "./products"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="mt-10 md:mt-14">
        <ProductGrid items={products.slice(0, 8)} />
      </div>
      <Footer />
    </main>
  )
}
