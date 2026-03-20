
function Testimonials() {

  const reviews = [
    { name: "Alex", text: "HelloQ helped me find an amazing LGBTQ community." },
    { name: "Sam", text: "Finally a safe dating platform." },
    { name: "Jordan", text: "Best place to meet genuine people." }
  ]

  return (

    <section className="py-32 px-6 bg-[#e695eb]">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl text-center font-bold text-white">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((r, i) => (
            <div
              key={i}
              className="
                relative p-6 rounded-2xl 
                bg-white/30 backdrop-blur-lg border border-white/40
                shadow-lg transition duration-300 group

                hover:scale-105 hover:shadow-xl
              "
            >

              {/* ✨ SINGLE COLOR GLOW */}
              <div className="
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                transition duration-500
                bg-[#d45add]/50 blur-xl
              "></div>

              <div className="relative z-10">

                {/* ⭐ STARS */}
                <div className="flex text-yellow-300 mb-3 text-lg">
                  ⭐⭐⭐⭐⭐
                </div>

                <h4 className="font-bold text-lg text-gray-900">
                  {r.name}
                </h4>

                <p className="text-gray-700 mt-3">
                  {r.text}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>

  )

}

export default Testimonials