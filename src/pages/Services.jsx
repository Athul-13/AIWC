import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-10 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Beyond products, we offer comprehensive gardening services to help you succeed.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Garden Consultation</h3>
              <p className="text-foreground/80 mb-4">
                Get personalized advice from our gardening experts to plan and design your perfect garden space.
              </p>
              <div className="text-primary font-medium">Learn More →</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Free Delivery</h3>
              <p className="text-foreground/80 mb-4">
                Enjoy free delivery on orders over $50. Fast, reliable shipping to your doorstep.
              </p>
              <div className="text-primary font-medium">Learn More →</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Gardening Workshops</h3>
              <p className="text-foreground/80 mb-4">
                Join our monthly workshops to learn new gardening techniques and tips from experts.
              </p>
              <div className="text-primary font-medium">Learn More →</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Tool Maintenance</h3>
              <p className="text-foreground/80 mb-4">
                Keep your gardening tools in perfect condition with our professional maintenance service.
              </p>
              <div className="text-primary font-medium">Learn More →</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Plant Care Guide</h3>
              <p className="text-foreground/80 mb-4">
                Get detailed care instructions for every plant you purchase, tailored to your climate.
              </p>
              <div className="text-primary font-medium">Learn More →</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Support</h3>
              <p className="text-foreground/80 mb-4">
                Get ongoing support and answers to your gardening questions from our expert team.
              </p>
              <div className="text-primary font-medium">Learn More →</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Contact us today to learn more about our services or to schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-3">
              Contact Us
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-md transition-colors">
              View Products
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
