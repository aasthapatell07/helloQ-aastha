
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HowItWorks() {

  const sectionRef = useRef(null);

  const steps = [
    "Create your profile",
    "Discover matches",
    "Chat safely",
    "Build real connections"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {

      const items = gsap.utils.toArray(".step-card");

      gsap.fromTo(
        items,
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
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 🎮 TILT
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 5;
    const rotateY = (x / rect.width - 0.5) * -5;

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTilt = (card) => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section
      ref={sectionRef}
      id="howitworks"
      className="py-32 px-6 bg-[#e695eb]"
    >

      <div className="relative">

        <h2 className="text-3xl md:text-5xl text-center font-bold text-white">
          How It Works
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mt-20">

          {steps.map((s, i) => (
            <div
              key={i}
              className="step-card text-center group cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => resetTilt(e.currentTarget)}
            >

              {/* 🔢 NUMBER WITH SINGLE COLOR GLOW */}
              <div className="relative mx-auto w-14 h-14 flex items-center justify-center">

                <div className="
                  absolute inset-0 rounded-full 
                  bg-[#d45add]/60 blur-xl opacity-70 
                  group-hover:opacity-100 transition
                "></div>

                <div className="
                  relative bg-white/80 backdrop-blur-md
                  w-12 h-12 rounded-full flex items-center justify-center 
                  text-gray-900 text-lg font-bold shadow-md
                  transition duration-300
                  group-hover:scale-110
                ">
                  {i + 1}
                </div>

              </div>

              {/* 🧊 CARD */}
              <div
                className="
                  mt-6 p-5 rounded-xl 
                  bg-white/30 backdrop-blur-lg border border-white/40 
                  transition-all duration-300

                  group-hover:-translate-y-2
                  group-hover:scale-105
                  group-hover:shadow-xl
                "
              >

                {/* ✨ SINGLE COLOR GLOW */}
                <div className="
                  absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                  transition duration-500
                  bg-[#d45add]/50 blur-xl
                "></div>

                <p className="relative text-gray-800 font-medium">
                  {s}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;