
import img2 from "../img2.jpg"; // adjust path if needed

function Community() {
  return (
    <section id="community" className="py-32 px-6 bg-[#e695eb]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-5xl font-bold mb-6 text-white">
            A Community That Cares
          </h2>

          <p className="text-lg text-gray-800 mb-6">
            Join a welcoming community where everyone can express themselves
            freely and build meaningful connections.
          </p>

          <p className="text-gray-900">
            Share experiences, make friends, and celebrate diversity
            in a safe and inclusive environment.
          </p>
        </div>

        {/* IMAGE WITH GLOW BORDER */}
        <div className="relative rounded-2xl group">

          {/* 🌈 GLOW EFFECT */}
          <div className="absolute -inset-1 rounded-2xl 
            bg-gradient-to-r from-green-400 via-purple-400 to-indigo-400
            opacity-70 blur-xl group-hover:opacity-100 transition duration-500">
          </div>

          {/* IMAGE CARD */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">

            <img
              src={img2}
              alt="Community"
              className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-105"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/30"></div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Community;