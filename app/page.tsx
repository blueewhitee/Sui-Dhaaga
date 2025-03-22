import { Button } from "@/components/ui/button"
import ThreeDCarousel from "@/3d-carousel"
import { ArrowRight, Palette, Calculator, Zap, Image, Droplets, Heart, Star, Sparkles, PaintBucket, Repeat, Wand2 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Header - added sticky positioning */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/90 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Palette className="h-8 w-8 text-pink-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              TextileAI
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#front-view" className="text-sm font-medium text-gray-300 hover:text-pink-500 transition-colors">
              Front View
            </a>
            <a
              href="#multi-view"
              className="text-sm font-medium text-gray-300 hover:text-pink-500 transition-colors"
            >
              Multi View
            </a>
            <a href="#3d-view" className="text-sm font-medium text-gray-300 hover:text-pink-500 transition-colors">
              3D View
            </a>
            <a 
              href="http://localhost:8501"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-['Lobster',cursive] px-4 py-2 rounded-full bg-pink-500 text-[#0D5404] hover:bg-pink-400 transition-colors"
            >
              Get your style
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Decorative elements - more subtle */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-900 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-60 h-60 bg-pink-900 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-indigo-900 rounded-full opacity-10 blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-24">
            <div className="relative">
              {/* Position text without any background to allow cat to show through */}
              <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-5xl px-4 z-20"> {/* Added z-20 to ensure it's above everything */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                  Silhouette Automata
                </h1>
                <p className="text-2xl md:text-3xl lg:text-5xl text-pink-200 font-medium mb-8 mx-auto w-full font-['Lobster',cursive] whitespace-nowrap">
                  Innovation in Rapid Lifestyle with Automation
                </p>
              </div>
              
              {/* Bigger container for the cat - maintaining current positioning */}
              <div className="h-[600px] md:h-[700px] mb-8 overflow-hidden relative -mt-48">
                {/* Scale up the iframe to make the cat appear bigger and position it vertically */}
                <div className="w-[120%] h-[120%] -ml-[10%] -mt-[10%]">
                  <iframe 
                    src='https://my.spline.design/robotcat-4a0c5b5615fadd04deece83a135b1726/' 
                    frameBorder='0' 
                    width='100%' 
                    height='100%'
                    title="Interactive 3D Design"
                    loading="lazy"
                    style={{ opacity: 0.85 }}
                  ></iframe>
                </div>
              </div>
              
            </div>
            
            {/* 3D Carousel positioned below */}
            <div className="mt-20">
              <ThreeDCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-900 p-2 rounded-full mb-4">
              <Sparkles className="h-6 w-6 text-pink-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Magic Features
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover the enchanting tools that make our AI textile design studio special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 shadow-lg hover:shadow-pink-900/10 transition-shadow border border-gray-800">
              <div className="bg-gray-800 p-3 rounded-full w-fit mb-4">
                <Sparkles className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">AI Pattern Magic</h3>
              <p className="text-gray-400">
                Transform any idea into a beautiful textile pattern in seconds with our AI-powered design wizard.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 shadow-lg hover:shadow-pink-900/10 transition-shadow border border-gray-800">
              <div className="bg-gray-800 p-3 rounded-full w-fit mb-4">
                <PaintBucket className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">Color Enchantment</h3>
              <p className="text-gray-400">
                Instantly transform your patterns with magical color palettes that perfectly match your style.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 shadow-lg hover:shadow-pink-900/10 transition-shadow border border-gray-800">
              <div className="bg-gray-800 p-3 rounded-full w-fit mb-4">
                <Repeat className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">Seamless Spells</h3>
              <p className="text-gray-400">
                Create perfectly repeating patterns that are ready for printing on fabric, no visible seams or edges.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 shadow-lg hover:shadow-pink-900/10 transition-shadow border border-gray-800">
              <div className="bg-gray-800 p-3 rounded-full w-fit mb-4">
                <Droplets className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">Perfect Color Potions</h3>
              <p className="text-gray-400">
                Get the exact color recipe so your magical designs look exactly the same when they're made in real life.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 shadow-lg hover:shadow-pink-900/10 transition-shadow border border-gray-800">
              <div className="bg-gray-800 p-3 rounded-full w-fit mb-4">
                <Wand2 className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">Design Transmutation</h3>
              <p className="text-gray-400">
                Easily modify and refine your patterns with our intuitive editing tools - no design experience needed!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Palette className="h-6 w-6 text-pink-500" />
              <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                TextileAI
              </span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} TextileAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

