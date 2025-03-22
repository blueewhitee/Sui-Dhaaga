import { Button } from "@/components/ui/button"
import ThreeDCarousel from "@/3d-carousel"
import { ArrowRight, Palette, Calculator, Zap, Image, Droplets, Heart, Star, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Header */}
      <header className="border-b border-pink-200">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Palette className="h-8 w-8 text-pink-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              TextileAI
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-purple-700 hover:text-pink-500 transition-colors">
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-purple-700 hover:text-pink-500 transition-colors"
            >
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium text-purple-700 hover:text-pink-500 transition-colors">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex border-pink-300 text-pink-600 hover:bg-pink-100">
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-60 h-60 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-teal-400 text-transparent bg-clip-text">
              Magical Textile Designs with AI
            </h1>
            <p className="text-lg text-purple-700 mb-8 max-w-2xl mx-auto">
              Create colorful, high-quality textile patterns instantly using our magical AI design studio. Perfect for
              bringing your creative dreams to life!
            </p>
          </div>

          {/* Carousel as main hero element */}
          <div className="max-w-5xl mx-auto relative">
            <div className="absolute -top-10 -left-10 md:-left-20 text-pink-500 animate-bounce">
              <Star className="h-8 w-8 md:h-12 md:w-12" fill="currentColor" />
            </div>
            <div className="absolute -bottom-5 -right-5 md:-right-16 text-purple-500 animate-pulse">
              <Heart className="h-8 w-8 md:h-12 md:w-12" fill="currentColor" />
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-4 border-pink-200">
              <ThreeDCarousel />
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white gap-2"
              >
                Start Creating <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-100">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-pink-100 p-2 rounded-full mb-4">
              <Sparkles className="h-6 w-6 text-pink-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Magical Features
            </h2>
            <p className="text-lg text-purple-700 max-w-2xl mx-auto">
              Our enchanted platform makes designing beautiful textiles as easy as waving a magic wand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-pink-200">
              <div className="bg-pink-100 p-3 rounded-full w-fit mb-4">
                <Palette className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-700">AI-Powered Design Magic</h3>
              <p className="text-purple-600">
                Instantly generates unique textile designs based on your ideas, favorite colors, and fabric choices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-pink-200">
              <div className="bg-pink-100 p-3 rounded-full w-fit mb-4">
                <Image className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Image Transformation</h3>
              <p className="text-purple-600">
                Change colors and patterns with a touch of magic, watching your designs transform right before your
                eyes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-pink-200">
              <div className="bg-pink-100 p-3 rounded-full w-fit mb-4">
                <Calculator className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Magic Price Calculator</h3>
              <p className="text-purple-600">
                See how much your creation will cost as you change colors and fabrics, making it easy to stay within
                budget.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-pink-200">
              <div className="bg-pink-100 p-3 rounded-full w-fit mb-4">
                <Droplets className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Perfect Color Potions</h3>
              <p className="text-purple-600">
                Get the exact color recipe so your magical designs look exactly the same when they're made in real life.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-pink-200">
              <div className="bg-pink-100 p-3 rounded-full w-fit mb-4">
                <Zap className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Super-Speed Creation</h3>
              <p className="text-purple-600">
                Create designs in minutes instead of days, so you can keep up with all the latest fashion trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-pink-100 p-2 rounded-full mb-4">
              <Star className="h-6 w-6 text-pink-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              How The Magic Works
            </h2>
            <p className="text-lg text-purple-700 max-w-2xl mx-auto">
              Three simple steps to transform your ideas into beautiful textile designs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Share Your Wishes</h3>
              <p className="text-purple-600">
                Tell us about your favorite colors, fabrics, and styles, or upload a picture for inspiration.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Watch The Magic Happen</h3>
              <p className="text-purple-600">
                Our AI wizard creates beautiful textile patterns just for you, with prices for each design.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Perfect Your Creation</h3>
              <p className="text-purple-600">
                Change colors and patterns until it's just right, watching the price update as you make changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 p-2 rounded-full mb-6">
            <Heart className="h-6 w-6 text-white" fill="white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready To Create Something Magical?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of designers who are bringing their textile dreams to life with our AI-powered platform.
          </p>
          <Button size="lg" variant="secondary" className="gap-2 bg-white text-pink-500 hover:bg-pink-100">
            Start Your Magical Journey <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-pink-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Palette className="h-6 w-6 text-pink-300" />
                <span className="text-xl font-bold text-white">TextileAI</span>
              </div>
              <p className="text-sm text-pink-200">
                Making textile design magical with AI-powered solutions for everyone.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Magic Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Our Castle</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors">
                    Join Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors">
                    Magic Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Magic Rules</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors">
                    Terms of Magic
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-pink-800 mt-12 pt-8 text-sm text-center text-pink-300">
            <p>© {new Date().getFullYear()} TextileAI. Spreading magic in textile design.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

