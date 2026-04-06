

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function HowItWorks() {

//   const sectionRef = useRef(null);

//   const steps = [
//     "Create your profile",
//     "Discover matches",
//     "Chat safely",
//     "Build real connections"
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {

//       const items = gsap.utils.toArray(".step-card");

//       gsap.fromTo(
//         items,
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
//       );

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   // 🎮 TILT
//   const handleMouseMove = (e, card) => {
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const rotateX = (y / rect.height - 0.5) * 5;
//     const rotateY = (x / rect.width - 0.5) * -5;

//     card.style.transform =
//       `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
//   };

//   const resetTilt = (card) => {
//     card.style.transform =
//       "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="howitworks"
//       className="py-32 px-6 bg-white"
//     >

//       <div className="relative">

//         <h2 className="text-3xl md:text-5xl text-center font-bold text-gray-900">
//           How It Works
//         </h2>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mt-20">

//           {steps.map((s, i) => (
//             <div
//               key={i}
//               className="step-card text-center group cursor-pointer"
//               onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
//               onMouseLeave={(e) => resetTilt(e.currentTarget)}
//             >

//               {/* 🔢 NUMBER WITH GLOW */}
//               <div className="relative mx-auto w-14 h-14 flex items-center justify-center">

//                 <div className="
//                   absolute inset-0 rounded-full 
//                   bg-[#d45add]/30 blur-xl opacity-70 
//                   group-hover:opacity-100 transition
//                 "></div>

//                 <div className="
//                   relative bg-white
//                   w-12 h-12 rounded-full flex items-center justify-center 
//                   text-gray-900 text-lg font-bold shadow-md border border-gray-200
//                   transition duration-300
//                   group-hover:scale-110
//                 ">
//                   {i + 1}
//                 </div>

//               </div>

//               {/* 🧊 CARD */}
//               <div
//                 className="
//                   mt-6 p-5 rounded-xl relative
//                   bg-white shadow-md border border-gray-200
//                   transition-all duration-300

//                   group-hover:-translate-y-2
//                   group-hover:scale-105
//                   group-hover:shadow-xl
//                 "
//               >

//                 {/* ✨ GLOW */}
//                 <div className="
//                   absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
//                   transition duration-500
//                   bg-[#d45add]/10 blur-xl
//                 "></div>

//                 <p className="relative text-gray-700 font-medium">
//                   {s}
//                 </p>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default HowItWorks;

function HowItWorks() {

  const steps = [
    "Create your profile",
    "Discover matches",
    "Chat safely",
    "Build real connections"
  ];

  return (
    <section id="howitworks" className="py-24 px-6 bg-white">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            How it works
          </h2>

          <p className="mt-3 text-gray-500 text-lg">
            Get started in just a few simple steps
          </p>
        </div>

        {/* STEPS LIST */}
        <div className="space-y-6">

          {steps.map((step, i) => (
            <div
              key={i}
              className="
                flex items-center gap-5
                p-5 rounded-xl border border-gray-200
                bg-white transition duration-300
                hover:shadow-md
              "
            >

              {/* NUMBER */}
              <div className="
                w-9 h-9 flex items-center justify-center
                rounded-full bg-gray-900 text-white text-sm font-medium
              ">
                {i + 1}
              </div>

              {/* TEXT */}
              <p className="text-gray-700 text-lg">
                {step}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;