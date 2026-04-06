// import img2 from "../img2.jpg"; // adjust path if needed

// function Community() {
//   return (
//     <section id="community" className="py-32 px-6 bg-white">

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

//         {/* TEXT */}
//         <div>
//           <h2 className="text-5xl font-bold mb-6 text-gray-900">
//             A Community That Cares
//           </h2>

//           <p className="text-lg text-gray-600 mb-6">
//             Join a welcoming community where everyone can express themselves
//             freely and build meaningful connections.
//           </p>

//           <p className="text-gray-700">
//             Share experiences, make friends, and celebrate diversity
//             in a safe and inclusive environment.
//           </p>
//         </div>

//         {/* IMAGE WITH GLOW BORDER */}
//         <div className="relative rounded-2xl group">

//           {/* 🌈 SOFT GLOW */}
//           <div className="absolute -inset-1 rounded-2xl 
//             bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400
//             opacity-40 blur-xl group-hover:opacity-70 transition duration-500">
//           </div>

//           {/* IMAGE CARD */}
//           <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">

//             <img
//               src={img2}
//               alt="Community"
//               className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-105"
//             />

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Community;

import { useEffect, useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function Community() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="community" className="py-24 px-6 bg-white">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
            A Community That Cares
          </h2>

          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Join a welcoming community where everyone can express themselves
            freely and build meaningful connections.
          </p>

          <p className="text-gray-500 text-sm">
            Share experiences, make friends, and celebrate diversity
            in a safe and inclusive environment.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative rounded-xl overflow-hidden border border-gray-200">

          <div className="relative h-[260px] md:h-[300px]">

            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Community"
                className={`
                  absolute inset-0 w-full h-full object-cover
                  transition-opacity duration-1000
                  ${i === index ? "opacity-100" : "opacity-0"}
                `}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Community;