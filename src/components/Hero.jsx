// import heroVideo from "../assets/videos/hero.mp4";
// import { Typewriter } from "react-simple-typewriter";

// function Hero() {
//   return (
//     <section className="relative w-full min-h-screen overflow-hidden">
      

//       {/* VIDEO */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src={heroVideo} type="video/mp4" />
//       </video>

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>

//       {/* TEXT */}
//       <div className="absolute bottom-20 left-8 md:left-20 z-20 max-w-3xl">
        
        
        

//         {/* 🌈 RAINBOW TYPEWRITER */}
//         <h2 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
//           <span className="text-white">Connecting </span>
//           <span className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-purple-500 bg-clip-text text-transparent">
//             <Typewriter
//               words={[
//                 "LGBTQ Community",
//                 // "Real Connections",
//                 "Your Perfect Match",
//               ]}
//               loop={true}
//               cursor
//               typeSpeed={70}
//               deleteSpeed={50}
//             />
//           </span>
//         </h2>

//         <p className="mt-6 text-xl md:text-3xl text-white/90">
//           Find your tribe, find your vibe
//         </p>
//       </div>

//       {/* RAINBOW LINE */}
//       <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-purple-500 z-30"></div>

    

//     </section>
//   );
// }

// export default Hero;

import heroVideo from "../assets/videos/hero.mp4";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      

      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>

      {/* TEXT */}
      <div className="absolute bottom-20 left-8 md:left-20 z-20 max-w-3xl">
        
        
        

        {/* 🌈 RAINBOW TYPEWRITER */}
        <h2 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
          <span className="text-white">Connecting </span>
          <span className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-purple-500 bg-clip-text text-transparent">
            <Typewriter
              words={[
                "LGBTQ Community",
                // "Real Connections",
                "Your Perfect Match",
              ]}
              loop={true}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
            />
          </span>
        </h2>

        <p className="mt-6 text-xl md:text-3xl text-white/90">
          Find your tribe, find your vibe
        </p>
      </div>

      {/* RAINBOW LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-purple-500 z-30"></div>

    

    </section>
  );
}

export default Hero;

