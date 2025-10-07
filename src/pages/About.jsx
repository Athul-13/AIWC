import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-10 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About AIWC Store
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Your trusted partner in gardening and outdoor living for over a decade.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our Story
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Founded in 2010, AIWC Store began as a small family business with a passion for helping people create beautiful gardens. What started as a local nursery has grown into a comprehensive gardening supply store serving customers nationwide.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We believe that everyone deserves access to high-quality gardening products and expert advice, regardless of their experience level or garden size.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                To provide exceptional gardening products, expert advice, and outstanding customer service that helps our customers achieve their gardening dreams.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We're committed to sustainability, quality, and making gardening accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Quality</h3>
              <p className="text-foreground/80">We source only the highest quality products from trusted suppliers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Sustainability</h3>
              <p className="text-foreground/80">We're committed to environmentally friendly practices and products.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Service</h3>
              <p className="text-foreground/80">Exceptional customer service is at the heart of everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
