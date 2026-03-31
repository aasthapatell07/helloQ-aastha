
// import { useEffect, useRef, useState } from "react"
// import logo from "../assets/logo1.png"
// import { Globe, ChevronDown, Menu, X } from "lucide-react"
// import { useNavigate } from "react-router-dom"

// function Navbar() {

//   const [scrolled, setScrolled] = useState(false)
//   const [user, setUser] = useState(null)
//   const [open, setOpen] = useState(false)
//   const [active, setActive] = useState("")
//   const [isHero, setIsHero] = useState(true)
//   const [mobileOpen, setMobileOpen] = useState(false)

//   const dropdownRef = useRef()
//   const navigate = useNavigate()

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY

//       setScrolled(scrollY > 50)

//       const heroHeight = window.innerHeight
//       const inHero = scrollY < heroHeight - 80
//       setIsHero(inHero)

//       const sections = ["features", "howitworks", "community", "safety"]

//       let found = false

//       for (let id of sections) {
//         const el = document.getElementById(id)
//         if (el) {
//           const rect = el.getBoundingClientRect()

//           if (rect.top <= 120 && rect.bottom >= 120) {
//             setActive(id)
//             found = true
//             break
//           }
//         }
//       }

//       if (!found) setActive("")
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // USER
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"))
//     setUser(storedUser)
//   }, [])

//   // CLICK OUTSIDE DROPDOWN
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//       setMobileOpen(false)
//     }
//   }

//   const navItems = ["features", "howitworks", "community", "safety"]

//   return (
//     <nav className={`
//       fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500
//       ${isHero 
//         ? "bg-transparent" 
//         : "bg-white/70 backdrop-blur-xl shadow-sm border-b border-gray-200"
//       }
//     `}>

//       <div className="max-w-7xl mx-auto flex items-center justify-between">

//         {/* LOGO */}
//         <img
//           src={logo}
//           alt="HelloQ"
//           className="h-8 md:h-10 cursor-pointer"
//           onClick={() => navigate("/")}
//         />

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex bg-white/90 backdrop-blur-md rounded-full px-6 py-2 shadow-md border border-gray-200 gap-8 text-sm font-medium">

//           {navItems.map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollToSection(item)}
//               className="relative flex flex-col items-center capitalize transition"
//             >
//               <span className={`transition ${
//                 active === item ? "text-black font-semibold" : "text-gray-600"
//               }`}>
//                 {item === "howitworks" ? "How It Works" : item}
//               </span>

//               {/* ACTIVE DOT */}
//               <span
//                 className={`
//                   mt-1 w-1.5 h-1.5 rounded-full bg-black transition-all duration-300
//                   ${active === item ? "opacity-100 scale-100" : "opacity-0 scale-0"}
//                 `}
//               ></span>
//             </button>
//           ))}

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-2 relative">

//           {/* LANGUAGE */}
//           <div className="hidden md:flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm">
//             <Globe size={16} />
//             <ChevronDown size={16} />
//           </div>

//           {/* USER / SIGNUP */}
//           {user ? (
//             <div className="relative" ref={dropdownRef}>

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

//               {/* DROPDOWN */}
//               <div className={`
//                 absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-lg border p-3
//                 transition-all duration-300 origin-top-right
//                 ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
//               `}>

//                 <button
//                   onClick={() => navigate("/profile")}
//                   className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
//                 >
//                   Profile
//                 </button>

//                 <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">
//                   Settings
//                 </button>

//                 <button
//                   onClick={() => {
//                     localStorage.removeItem("user")
//                     setUser(null)
//                     navigate("/")
//                   }}
//                   className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-red-500"
//                 >
//                   Logout
//                 </button>

//               </div>

//             </div>
//           ) : (
//             <button
//               onClick={() => navigate("/signup")}
//               className="hidden md:block bg-black text-white px-5 py-2 rounded-full hover:scale-105 transition"
//             >
//               Sign up
//             </button>
//           )}

//           {/* 🍔 MOBILE MENU BUTTON */}
//           {/* <div className="md:hidden">
//             <button onClick={() => setMobileOpen(!mobileOpen)}>
//               {mobileOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div> */}
//           <div className="md:hidden">
//   <button onClick={() => setMobileOpen(!mobileOpen)}>
//     {mobileOpen ? (
//       <X size={26} className={isHero ? "text-white" : "text-black"} />
//     ) : (
//       <Menu size={26} className={isHero ? "text-white" : "text-black"} />
//     )}
//   </button>
// </div>

//         </div>

//       </div>

//       {/* 📱 MOBILE MENU */}
//       {mobileOpen && (
//         <div className="md:hidden mt-4 mx-4 bg-white rounded-xl shadow-md p-4 space-y-4">

//           {navItems.map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollToSection(item)}
//               className="block w-full text-left capitalize"
//             >
//               {item === "howitworks" ? "How It Works" : item}
//             </button>
//           ))}

//           {!user && (
//             <button
//               onClick={() => {
//                 navigate("/signup")
//                 setMobileOpen(false)
//               }}
//               className="w-full bg-black text-white py-2 rounded-lg"
//             >
//               Sign up
//             </button>
//           )}

//         </div>
//       )}

//     </nav>
//   )
// }

// export default Navbar

import { useEffect, useRef, useState } from "react"
import logo from "../assets/logo1.png"
import { Globe, ChevronDown, Menu, X } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [user, setUser] = useState(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")
  const [isHero, setIsHero] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  const dropdownRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      setScrolled(scrollY > 50)

      const heroHeight = window.innerHeight
      setIsHero(scrollY < heroHeight - 80)

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

  // USER
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    setUser(storedUser)
  }, [])

  // CLICK OUTSIDE DROPDOWN
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
      setMobileOpen(false)
    }
  }

  const navItems = ["features", "howitworks", "community", "safety"]

  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4 transition-all duration-500
      ${isHero 
        ? "bg-transparent" 
        : "bg-white/70 backdrop-blur-xl shadow-sm border-b border-gray-200"
      }
    `}>

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <img
          src={logo}
          alt="HelloQ"
          className="h-8 md:h-10 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex bg-white/90 backdrop-blur-md rounded-full px-6 py-2 shadow-md border border-gray-200 gap-8 text-sm font-medium">

          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative flex flex-col items-center capitalize transition"
            >
              <span className={`transition ${
                active === item ? "text-black font-semibold" : "text-gray-600"
              }`}>
                {item === "howitworks" ? "How It Works" : item}
              </span>

              {/* ACTIVE DOT */}
              <span
                className={`
                  mt-1 w-1.5 h-1.5 rounded-full bg-black transition-all duration-300
                  ${active === item ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                `}
              ></span>
            </button>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 relative">

          {/* 🍔 MOBILE MENU BUTTON (FIRST = FIX) */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X size={26} className={isHero ? "text-white" : "text-black"} />
              ) : (
                <Menu size={26} className={isHero ? "text-white" : "text-black"} />
              )}
            </button>
          </div>

          {/* LANGUAGE */}
          <div className="hidden md:flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm">
            <Globe size={16} />
            <ChevronDown size={16} />
          </div>

          {/* USER / SIGNUP */}
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

              {/* DROPDOWN */}
              <div className={`
                absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-lg border p-3
                transition-all duration-300 origin-top-right
                ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
              `}>

                <button
                  onClick={() => navigate("/profile")}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  Profile
                </button>

                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">
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
              className="hidden md:block bg-black text-white px-5 py-2 rounded-full hover:scale-105 transition"
            >
              Sign up
            </button>
          )}

        </div>

      </div>

      {/* 📱 MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden mt-4 mx-4 bg-white rounded-xl shadow-md p-4 space-y-4">

          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left capitalize"
            >
              {item === "howitworks" ? "How It Works" : item}
            </button>
          ))}

          {!user && (
            <button
              onClick={() => {
                navigate("/signup")
                setMobileOpen(false)
              }}
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              Sign up
            </button>
          )}

        </div>
      )}

    </nav>
  )
}

export default Navbar