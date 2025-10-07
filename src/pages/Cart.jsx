import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function CartPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-10 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Cart
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Review your selected items and proceed to checkout.
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          {/* Empty Cart State */}
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🛒</span>
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Your cart is empty
            </h2>
            <p className="text-foreground/80 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
            </p>
            <Link
              to="/shop"
              className="btn-primary inline-flex items-center px-6 py-3"
            >
              Start Shopping
            </Link>
          </div>

          {/* Cart Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Free Shipping</h3>
              <p className="text-foreground/80 text-sm">On orders over $50</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">↩️</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Easy Returns</h3>
              <p className="text-foreground/80 text-sm">30-day return policy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Secure Checkout</h3>
              <p className="text-foreground/80 text-sm">Your data is protected</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
