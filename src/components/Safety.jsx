
// import { useEffect, useRef } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// function Safety() {

//   const sectionRef = useRef(null)

//   useEffect(() => {

//     const ctx = gsap.context(() => {

//       const cards = gsap.utils.toArray(".safety-card")

//       gsap.fromTo(
//         cards,
//         { y: 60, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//           }
//         }
//       )

//     }, sectionRef)

//     return () => ctx.revert()

//   }, [])

//   // 🎮 TILT
//   const handleMouseMove = (e, card) => {
//     const rect = card.getBoundingClientRect()
//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top

//     const rotateX = (y / rect.height - 0.5) * 6
//     const rotateY = (x / rect.width - 0.5) * -6

//     card.style.transform =
//       `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
//   }

//   const resetTilt = (card) => {
//     card.style.transform =
//       "perspective(1000px) rotateX(0) rotateY(0) scale(1)"
//   }

//   return (
//     <section
//       ref={sectionRef}
//       id="safety"
//       className="py-32 px-6 bg-[#e695eb]"
//     >

//       <div className="max-w-6xl mx-auto text-center">

//         <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
//           Your Safety Matters
//         </h2>

//         <p className="text-lg text-white/80 mb-20 max-w-2xl mx-auto">
//           We prioritize your privacy and security with powerful protection tools.
//         </p>

//         <div className="grid md:grid-cols-3 gap-10">

//           {[
//             {
//               title: "Profile Verification",
//               desc: "Ensuring real people and genuine connections.",
//               icon: "✔️"
//             },
//             {
//               title: "Privacy Controls",
//               desc: "Control who can see your profile and interact with you.",
//               icon: "🔒"
//             },
//             {
//               title: "24/7 Moderation",
//               desc: "Our team keeps the platform safe and respectful.",
//               icon: "🛡️"
//             }
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="
//                 safety-card relative p-8 rounded-2xl overflow-hidden
//                 bg-white/30 backdrop-blur-lg border border-white/40
//                 transition-all duration-300 group cursor-pointer
//               "
//               onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
//               onMouseLeave={(e) => resetTilt(e.currentTarget)}
//             >

//               {/* ✨ SINGLE COLOR GLOW */}
//               <div className="
//                 absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
//                 transition duration-500
//                 bg-[#d45add]/50 blur-xl
//               "></div>

//               {/* CONTENT */}
//               <div className="relative z-10">

//                 <div className="text-4xl mb-4">
//                   {item.icon}
//                 </div>

//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">
//                   {item.title}
//                 </h3>

//                 <p className="text-gray-700">
//                   {item.desc}
//                 </p>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   )
// }

// export default Safety

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Safety() {

  const sectionRef = useRef(null)

  useEffect(() => {

    const ctx = gsap.context(() => {

      const cards = gsap.utils.toArray(".safety-card")

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

    const rotateX = (y / rect.height - 0.5) * 6
    const rotateY = (x / rect.width - 0.5) * -6

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
  }

  const resetTilt = (card) => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)"
  }

  return (
    <section
      ref={sectionRef}
      id="safety"
      className="py-32 px-6 bg-white"
    >

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Your Safety Matters
        </h2>

        <p className="text-lg text-gray-600 mb-20 max-w-2xl mx-auto">
          We prioritize your privacy and security with powerful protection tools.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Profile Verification",
              desc: "Ensuring real people and genuine connections.",
              icon: "✔️"
            },
            {
              title: "Privacy Controls",
              desc: "Control who can see your profile and interact with you.",
              icon: "🔒"
            },
            {
              title: "24/7 Moderation",
              desc: "Our team keeps the platform safe and respectful.",
              icon: "🛡️"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="
                safety-card relative p-8 rounded-2xl overflow-hidden
                bg-white shadow-lg border border-gray-200
                transition-all duration-300 group cursor-pointer
              "
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => resetTilt(e.currentTarget)}
            >

              {/* ✨ SOFT GLOW */}
              <div className="
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                transition duration-500
                bg-[#d45add]/10 blur-xl
              "></div>

              {/* CONTENT */}
              <div className="relative z-10">

                <div className="text-4xl mb-4">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600">
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

export default Safety