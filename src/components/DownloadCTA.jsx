

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function DownloadCTA() {

  const sectionRef = useRef(null)

  useEffect(() => {

    const ctx = gsap.context(() => {

      const buttons = gsap.utils.toArray(".download-btn")

      gsap.fromTo(
        buttons,
        {
          scale: 0.7,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  return (
    <section
      ref={sectionRef}
      id="download"
      className="py-28 px-6 bg-[#e695eb]" // ✅ single color here
    >

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Join the HelloQ Community Today
        </h2>

        <p className="mt-5 text-lg text-white/80">
          Meet amazing people, build connections and be yourself.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

          {/* 🍎 APP STORE */}
          <a
            href="#"
            className="download-btn inline-block transition hover:scale-105"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-14"
            />
          </a>

          {/* ▶️ GOOGLE PLAY */}
          <a
            href="#"
            className="download-btn inline-block transition hover:scale-105"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-14"
            />
          </a>

        </div>

      </div>

    </section>
  )
}

export default DownloadCTA