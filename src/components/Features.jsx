
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Features() {

  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      const cards = gsap.utils.toArray(".feature-card")

      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // 🎮 TILT
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateX = (y / rect.height - 0.5) * 5
    const rotateY = (x / rect.width - 0.5) * -5

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  }

  const resetTilt = (card) => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)"
  }

  const features = [
    {
      title: "Inclusive Profiles",
      desc: "Users can express identity with diverse gender options and pronouns.",
      icon: "🌈"
    },
    {
      title: "Smart Matching",
      desc: "AI-powered matches based on interests and compatibility.",
      icon: "💜"
    },
    {
      title: "Privacy & Safety",
      desc: "Advanced controls, blocking, reporting, and verification.",
      icon: "🔒"
    },
    {
      title: "Real-Time Chat",
      desc: "Instant messaging with media and future voice/video.",
      icon: "💬"
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-32 px-6 bg-[#e695eb]"
    >

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Amazing Features
        </h2>

        <p className="text-lg text-white/80 mb-20 max-w-2xl mx-auto">
          Discover tools designed to help you connect, chat, and build real relationships.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {features.map((item, i) => (
            <div
              key={i}
              className="
                feature-card relative p-8 rounded-2xl 
                bg-white/30 backdrop-blur-lg border border-white/40
                transition-all duration-300 group cursor-pointer
              "
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => resetTilt(e.currentTarget)}
            >

              {/* ✨ SINGLE COLOR GLOW */}
              <div className="
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                transition duration-500
                bg-[#d45add]/50 blur-xl
              "></div>

              <div className="relative z-10">

                <div className="text-4xl mb-4">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-700">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Features