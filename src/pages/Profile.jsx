// // import { useEffect, useState } from "react"
// // import { useNavigate } from "react-router-dom"

// // function Profile() {

// //   const navigate = useNavigate()
// //   const [user, setUser] = useState(null)

// //   useEffect(() => {
// //     const storedUser = JSON.parse(localStorage.getItem("user"))

// //     if (!storedUser) {
// //       navigate("/login")
// //     } else {
// //       setUser(storedUser)
// //     }
// //   }, [])

// //   // 📸 IMAGE UPLOAD
// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0]
// //     if (!file) return

// //     const reader = new FileReader()

// //     reader.onloadend = () => {
// //       const updatedUser = { ...user, image: reader.result }
// //       setUser(updatedUser)
// //       localStorage.setItem("user", JSON.stringify(updatedUser))
// //     }

// //     reader.readAsDataURL(file)
// //   }

// //   const handleLogout = () => {
// //     localStorage.removeItem("user")
// //     navigate("/")
// //   }

// //   if (!user) return null

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

// //       <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">

// //         {/* PROFILE IMAGE */}
// //         <div className="flex flex-col items-center">

// //           <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 mb-4">

// //             {user.image ? (
// //               <img src={user.image} className="w-full h-full object-cover" />
// //             ) : (
// //               <div className="w-full h-full flex items-center justify-center text-3xl font-bold">
// //                 {user.name[0]}
// //               </div>
// //             )}

// //           </div>

// //           {/* UPLOAD BUTTON */}
// //           <label className="cursor-pointer text-sm text-blue-600">
// //             Change Photo
// //             <input type="file" onChange={handleImageChange} hidden />
// //           </label>

// //         </div>

// //         {/* INFO */}
// //         <div className="mt-8 text-center">

// //           <h2 className="text-2xl font-bold">{user.name}</h2>
// //           <p className="text-gray-600">{user.email}</p>

// //         </div>

// //         {/* ACTIONS */}
// //         <div className="mt-10 flex justify-center gap-4">

// //           <button className="px-6 py-2 bg-black text-white rounded-xl hover:scale-105 transition">
// //             Edit Profile
// //           </button>

// //           <button
// //             onClick={handleLogout}
// //             className="px-6 py-2 border border-gray-300 rounded-xl hover:bg-gray-100"
// //           >
// //             Logout
// //           </button>

// //         </div>

// //       </div>

// //     </div>
// //   )
// // }

// // export default Profile

// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"

// function Profile() {

//   const navigate = useNavigate()

//   const [user, setUser] = useState(null)
//   const [editMode, setEditMode] = useState(false)

//   const [form, setForm] = useState({
//     name: "",
//     age: "",
//     email: "",
//     bio: "",
//     image: ""
//   })

//   // LOAD USER
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"))

//     if (!storedUser) {
//       navigate("/login")
//     } else {
//       setUser(storedUser)

//       setForm({
//         name: storedUser.name || "",
//         age: storedUser.age || "",
//         email: storedUser.email || "",
//         bio: storedUser.bio || "",
//         image: storedUser.image || ""
//       })
//     }
//   }, [])

//   // INPUT CHANGE
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   // IMAGE UPLOAD
//   const handleImageChange = (e) => {
//     const file = e.target.files[0]
//     if (!file) return

//     const reader = new FileReader()

//     reader.onloadend = () => {
//       setForm({ ...form, image: reader.result })
//     }

//     reader.readAsDataURL(file)
//   }

//   // SAVE PROFILE
//   const handleSave = () => {
//     const updatedUser = {
//       ...user,
//       name: form.name,
//       age: form.age,
//       email: form.email,
//       bio: form.bio,
//       image: form.image
//     }

//     localStorage.setItem("user", JSON.stringify(updatedUser))

//     // 🔥 INSTANT UI UPDATE
//     setUser(updatedUser)

//     setEditMode(false)
//   }

//   // LOGOUT
//   const handleLogout = () => {
//     localStorage.removeItem("user")
//     navigate("/")
//   }

//   if (!user) return null

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

//       <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">

//         {/* IMAGE */}
//         <div className="flex flex-col items-center">

//           <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 mb-4">

//             {form.image ? (
//               <img src={form.image} className="w-full h-full object-cover" />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center text-3xl font-bold">
//                 {form.name?.[0]}
//               </div>
//             )}

//           </div>

//           {editMode && (
//             <label className="cursor-pointer text-sm text-blue-600">
//               Change Photo
//               <input type="file" onChange={handleImageChange} hidden />
//             </label>
//           )}

//         </div>

//         {/* INFO */}
//         <div className="mt-8 text-center">

//           {editMode ? (
//             <div className="space-y-3">

//               <input
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 className="border p-2 rounded w-full"
//               />

//               <input
//                 name="age"
//                 value={form.age}
//                 onChange={handleChange}
//                 placeholder="Age"
//                 type="number"
//                 className="border p-2 rounded w-full"
//               />

//               <input
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 type="email"
//                 className="border p-2 rounded w-full"
//               />

//               <textarea
//                 name="bio"
//                 value={form.bio}
//                 onChange={handleChange}
//                 placeholder="Write your bio..."
//                 className="border p-2 rounded w-full"
//               />

//             </div>
//           ) : (
//             <>
//               <h2 className="text-2xl font-bold">{user.name}</h2>
//               <p className="text-gray-600">{user.age} yrs</p>
//               <p className="text-gray-500">{user.email}</p>
//               <p className="mt-3 text-gray-600">{user.bio || "No bio added"}</p>
//             </>
//           )}

//         </div>

//         {/* ACTIONS */}
//         <div className="mt-10 flex justify-center gap-4">

//           {editMode ? (
//             <>
//               <button
//                 onClick={handleSave}
//                 className="px-6 py-2 bg-black text-white rounded-xl hover:scale-105 transition"
//               >
//                 Save
//               </button>

//               <button
//                 onClick={() => setEditMode(false)}
//                 className="px-6 py-2 border rounded-xl"
//               >
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => setEditMode(true)}
//               className="px-6 py-2 bg-black text-white rounded-xl hover:scale-105 transition"
//             >
//               Edit Profile
//             </button>
//           )}

//           <button
//             onClick={handleLogout}
//             className="px-6 py-2 border border-gray-300 rounded-xl hover:bg-gray-100"
//           >
//             Logout
//           </button>

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Profile
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
      const inHero = scrollY < heroHeight - 80
      setIsHero(inHero)

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
      fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500
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
        <div className="flex items-center gap-4 relative">

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

          {/* 🍔 MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

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