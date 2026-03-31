// import { useEffect, useState } from "react"
// import logo from "../assets/logo1.png"
// import { Globe, ChevronDown } from "lucide-react"
// import { useNavigate } from "react-router-dom"

// function Navbar() {

//   const [scrolled, setScrolled] = useState(false)
//   const [user, setUser] = useState(null)
//   const [open, setOpen] = useState(false)
//   const [active, setActive] = useState("")
//   const navigate = useNavigate()

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)

//       // 🔥 detect active section
//       const sections = ["features", "howitworks", "community", "safety"]

//       for (let id of sections) {
//         const el = document.getElementById(id)
//         if (el) {
//           const rect = el.getBoundingClientRect()
//           if (rect.top <= 120 && rect.bottom >= 120) {
//             setActive(id)
//           }
//         }
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // get user
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"))
//     setUser(storedUser)
//   }, [])

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">

//       <div className="max-w-7xl mx-auto flex items-center justify-between">

//         {/* LOGO */}
//         <img src={logo} alt="HelloQ" className="h-8 md:h-10" />

//         {/* CENTER MENU */}
//         <div className="hidden md:flex bg-white/90 backdrop-blur-md rounded-full px-6 py-2 shadow-md border border-gray-200 gap-8 text-sm font-medium">

//           {["features", "howitworks", "community", "safety"].map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollToSection(item)}
//               className={`capitalize transition ${
//                 active === item ? "text-black font-semibold" : "text-gray-600"
//               }`}
//             >
//               {item === "howitworks" ? "How It Works" : item}
//             </button>
//           ))}

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-4 relative">

//           {/* LANGUAGE */}
//           <div className="hidden md:flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm">
//             <Globe size={16} />
//             <ChevronDown size={16} />
//           </div>

//           {/* 🔥 USER / CTA */}
//           {user ? (
//             <div className="relative">

//               {/* AVATAR */}
//               <div
//                 onClick={() => setOpen(!open)}
//                 className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden"
//               >
//                 {user.image ? (
//                   <img src={user.image} className="w-full h-full object-cover" />
//                 ) : (
//                   user.name?.[0]
//                 )}
//               </div>

//               {/* 🔽 DROPDOWN */}
//               {open && (
//                 <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-lg border p-2">

//                   <button
//                     onClick={() => navigate("/profile")}
//                     className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
//                   >
//                     Profile
//                   </button>

//                   <button
//                     onClick={() => alert("Settings coming soon")}
//                     className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
//                   >
//                     Settings
//                   </button>

//                   <button
//                     onClick={() => {
//                       localStorage.removeItem("user")
//                       setUser(null)
//                       navigate("/")
//                     }}
//                     className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-red-500"
//                   >
//                     Logout
//                   </button>

//                 </div>
//               )}

//             </div>
//           ) : (
//             <button
//               onClick={() => navigate("/signup")}
//               className="bg-black text-white px-5 py-2 rounded-full hover:scale-105 transition"
//             >
//               Sign up
//             </button>
//           )}

//         </div>

//       </div>

//     </nav>
//   )
// }

// export default Navbar

import { useEffect, useRef, useState } from "react"
import logo from "../assets/logo1.png"
import { Globe, ChevronDown } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [user, setUser] = useState(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")
  const [isHero, setIsHero] = useState(true) // ✅ ADDED

  const dropdownRef = useRef() // ✅ ADDED
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      setScrolled(scrollY > 50)

      // ✅ HERO DETECTION
      const heroHeight = window.innerHeight
      setIsHero(scrollY < heroHeight - 80)

      // active section
      const sections = ["features", "howitworks", "community", "safety"]
      
      let found = false

      for (let id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id)
            found = true
            break
          }
        }
      }
      if (!found) setActive("")
        
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // get user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    setUser(storedUser)
  }, [])

  // ✅ CLICK OUTSIDE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500
      ${isHero 
        ? "bg-transparent" 
        : "bg-white/70 backdrop-blur-xl shadow-sm border-b border-gray-200"
      }
    `}>

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <img src={logo} alt="HelloQ" className="h-8 md:h-10" />

        {/* CENTER MENU */}
        <div className="hidden md:flex bg-white/90 backdrop-blur-md rounded-full px-6 py-2 shadow-md border border-gray-200 gap-8 text-sm font-medium">

          {["features", "howitworks", "community", "safety"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition ${
                active === item ? "text-black font-semibold" : "text-gray-600"
              }`}
            >
              {item === "howitworks" ? "How It Works" : item}
            </button>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 relative">

          {/* LANGUAGE */}
          <div className="hidden md:flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm">
            <Globe size={16} />
            <ChevronDown size={16} />
          </div>

          {/* USER / CTA */}
          {user ? (
            <div className="relative" ref={dropdownRef}>

              {/* AVATAR */}
              <div
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden"
              >
                {user.image ? (
                  <img src={user.image} className="w-full h-full object-cover" />
                ) : (
                  user.name?.[0]
                )}
              </div>

              {/* ✅ ANIMATED DROPDOWN */}
              <div className={`
                absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-lg border p-3
                transition-all duration-300 origin-top-right
                ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
              `}>

                {/* ✅ USER INFO */}
                <div className="flex items-center gap-3 px-2 pb-2 border-b mb-2">

                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    {user.image ? (
                      <img src={user.image} className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex items-center justify-center h-full font-bold">
                        {user.name?.[0]}
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-semibold">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>

                </div>

                <button
                  onClick={() => navigate("/profile")}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  Profile
                </button>

                <button
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  Settings
                </button>

                <button
                  onClick={() => {
                    localStorage.removeItem("user")
                    setUser(null)
                    navigate("/")
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-red-500"
                >
                  Logout
                </button>

              </div>

            </div>
          ) : (
            <button
              onClick={() => navigate("/signup")}
              className={`
                px-5 py-2 rounded-full transition hover:scale-105
                ${isHero ? "bg-white text-black" : "bg-black text-white"}
              `}
            >
              Sign up
            </button>
          )}

        </div>

      </div>

    </nav>
  )
}

export default Navbar