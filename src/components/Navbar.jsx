

import { useEffect, useState } from "react"
import logo from "../assets/logo.png"

function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6">

      <div
        className={`
          max-w-[98%] mx-auto flex justify-between items-center
          rounded-full px-6 py-3 transition-all duration-500

          ${
            scrolled
              ? "bg-black/70 backdrop-blur-md border border-white/20 shadow-lg"
              : "bg-transparent"
          }
        `}
      >

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="HelloQ"
            className="h-8 md:h-10 object-contain"
          />
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6 md:gap-8 text-white font-semibold text-sm md:text-base">
        

          <button
            onClick={() => scrollToSection("features")}
            className="hover:scale-105 transition"
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("howitworks")}
            className="hover:scale-105 transition"
          >
            How It Works
          </button>

          <button
            onClick={() => scrollToSection("safety")}
            className="hover:scale-105 transition"
          >
            Safety
          </button>

          {/* CTA */}
          <button
            onClick={() => scrollToSection("download")}
            className="bg-gradient-to-r from-pink-500 to-purple-500 
            px-5 py-2 rounded-full text-white font-semibold 
            hover:scale-110 transition"
          >
            Download
          </button>

        </div>

      </div>
    </nav>
  )
}

export default Navbar