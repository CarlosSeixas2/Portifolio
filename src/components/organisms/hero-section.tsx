import { ArrowRight, Download } from "lucide-react"
import { Button } from "../ui/button"

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block text-white">Olá, eu sou</span>
              <span className="block bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                Carlos Seixas
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">Desenvolvedor Full Stack</p>
          </div>

          {/* Impact Phrase */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Transformo ideias em experiências digitais incríveis, criando soluções inovadoras que conectam tecnologia e
            design de forma harmoniosa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a href="#projects">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-semibold px-8 py-3 rounded-full shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 group"
            >
              Ver Projetos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-3 rounded-full transition-all duration-300 group bg-transparent"
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
