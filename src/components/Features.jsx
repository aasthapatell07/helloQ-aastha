

// import { useEffect, useRef } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// function Features() {

//   const sectionRef = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {

//       const cards = gsap.utils.toArray(".feature-card")

//       gsap.fromTo(
//         cards,
//         { y: 80, opacity: 0 },
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
//       `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`
//   }

//   const resetTilt = (card) => {
//     card.style.transform =
//       "perspective(1000px) rotateX(0) rotateY(0) scale(1)"
//   }

//   const features = [
//     {
//       title: "Inclusive Profiles",
//       desc: "Express yourself freely with identity, pronouns, and preferences.",
//       icon: "🌈"
//     },
//     {
//       title: "Smart Matching",
//       desc: "AI-powered suggestions based on your vibe and interests.",
//       icon: "💜"
//     },
//     {
//       title: "Privacy & Safety",
//       desc: "Advanced controls, blocking, reporting, and verification.",
//       icon: "🔒"
//     },
//     {
//       title: "Real-Time Chat",
//       desc: "Instant messaging with media, voice, and video features.",
//       icon: "💬"
//     }
//   ]

//   return (
//     <section
//       ref={sectionRef}
//       id="features"
//       className="py-28 px-6 bg-white"
//     >

//       <div className="max-w-6xl mx-auto">

//         {/* HEADER */}
//         <div className="text-center mb-20">

//           <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
//             Designed for <span className="text-purple-600">Real Connections</span>
//           </h2>

//           <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
//             Discover powerful features that help you connect, match, and build meaningful relationships.
//           </p>

//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//           {features.map((item, i) => (
//             <div
//               key={i}
//               className="
//                 feature-card relative p-8 md:p-10 rounded-3xl 
//                 bg-white border border-gray-200 shadow-sm
//                 transition-all duration-300 cursor-pointer group
//                 hover:-translate-y-3 hover:shadow-2xl
//               "
//               onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
//               onMouseLeave={(e) => resetTilt(e.currentTarget)}
//             >

//               {/* ✨ GLOW */}
//               <div className="
//                 absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
//                 transition duration-500
//                 bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200
//                 blur-xl
//               "></div>

//               {/* CONTENT */}
//               <div className="relative z-10">

//                 {/* ICON */}
//                 <div className="
//                   w-14 h-14 flex items-center justify-center
//                   text-3xl rounded-xl mb-6
//                   bg-purple-100 group-hover:scale-110 transition
//                 ">
//                   {item.icon}
//                 </div>

//                 {/* TITLE */}
//                 <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
//                   {item.title}
//                 </h3>

//                 {/* DESC */}
//                 <p className="text-gray-600 text-lg leading-relaxed">
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

// export default Features

function Features() {

  const features = [
    {
      title: "Inclusive Profiles",
      desc: "Express yourself freely with identity, pronouns, and preferences.",
      icon: "🌈"
    },
    {
      title: "Smart Matching",
      desc: "AI-powered suggestions based on your vibe and interests.",
      icon: "💜"
    },
    {
      title: "Privacy & Safety",
      desc: "Advanced controls, blocking, reporting, and verification.",
      icon: "🔒"
    },
    {
      title: "Real-Time Chat",
      desc: "Instant messaging with media, voice, and video features.",
      icon: "💬"
    }
  ]

  return (
    <section id="features" className="py-24 px-6 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Everything you need to connect
          </h2>

          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Simple, powerful features designed for real relationships.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

          {features.map((item, i) => (
            <div
              key={i}
              className="
                p-6 md:p-8 rounded-2xl
                border border-gray-200 bg-white
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-1
              "
            >

              {/* ICON */}
              <div className="text-3xl mb-4">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Features