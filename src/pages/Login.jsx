

// // import { useState } from "react"
// // import { useNavigate } from "react-router-dom"
// // import { Eye, EyeOff } from "lucide-react"
// // import logo from "../assets/logo1.png"

// // function Login() {

// //   const navigate = useNavigate()

// //   const [form, setForm] = useState({
// //     email: "",
// //     password: ""
// //   })

// //   const [showPassword, setShowPassword] = useState(false)

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value })
// //   }

// //   return (
// //     <div className="min-h-screen grid md:grid-cols-2 
// //     bg-gradient-to-br from-purple-50 via-white to-pink-50">

// //       {/* LEFT SIDE */}
// //       <div className="hidden md:flex flex-col justify-center items-center px-16">

// //         {/* LOGO */}
// //         <img src={logo} alt="logo" className="h-20 mb-6" />

// //         <p className="text-gray-600 text-lg text-center max-w-sm">
// //           Connect with amazing people and build meaningful relationships.
// //         </p>

// //       </div>

// //       {/* RIGHT SIDE */}
// //       <div className="flex items-center justify-center px-6">

// //         <div className="w-full max-w-md p-8 rounded-2xl 
// //         bg-white shadow-xl border border-gray-200">

// //           <h2 className="text-3xl font-bold mb-8">Login</h2>

// //           {/* EMAIL */}
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             onChange={handleChange}
// //             className="w-full mb-4 p-3 border border-gray-300 rounded-xl 
// //             focus:outline-none focus:ring-2 focus:ring-purple-500 
// //             transition-all duration-300"
// //           />

// //           {/* PASSWORD */}
// //           <div className="relative mb-6">

// //             <input
// //               type={showPassword ? "text" : "password"}
// //               name="password"
// //               placeholder="Password"
// //               onChange={handleChange}
// //               className="w-full p-3 pr-12 border border-gray-300 rounded-xl 
// //               focus:outline-none focus:ring-2 focus:ring-purple-500 
// //               transition-all duration-300"
// //             />

// //             <button
// //               type="button"
// //               onClick={() => setShowPassword(!showPassword)}
// //               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
// //             >
// //               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// //             </button>

// //           </div>

// //           {/* BUTTON */}
// //           <button className="w-full bg-black text-white py-3 rounded-xl font-semibold 
// //           hover:scale-105 transition">
// //             Login
// //           </button>

// //           {/* SWITCH */}
// //           <p className="mt-6 text-sm text-gray-600 text-center">
// //             Don’t have an account?{" "}
// //             <span
// //               onClick={() => navigate("/signup")}
// //               className="font-semibold cursor-pointer"
// //             >
// //               Sign up
// //             </span>
// //           </p>

// //         </div>

// //       </div>

// //     </div>
// //   )
// // }

// // export default Login

// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { Eye, EyeOff } from "lucide-react"
// import logo from "../assets/logo.png"

// function Login() {

//   const navigate = useNavigate()

//   const [form, setForm] = useState({ email: "", password: "" })
//   const [showPassword, setShowPassword] = useState(false)

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }
//   const handleSubmit = (e) => {
//   e.preventDefault()

//   // fake login
//   localStorage.setItem("user", JSON.stringify(form))

//   navigate("/profile")
// }

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

//       {/* 🌈 ANIMATED GRADIENT BG */}
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-gradient"></div>

//       {/* ✨ PARTICLES */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="w-72 h-72 bg-white/20 rounded-full blur-3xl absolute top-10 left-10"></div>
//         <div className="w-72 h-72 bg-white/20 rounded-full blur-3xl absolute bottom-10 right-10"></div>
//       </div>

//       {/* 🔐 GLASS CARD */}
//       <div className="relative z-10 w-full max-w-md p-8 rounded-2xl 
//         bg-white/10 backdrop-blur-lg border border-white/20 
//         shadow-2xl">

//         {/* LOGO */}
//         <div className="flex justify-center mb-6">
//           <img src={logo} className="h-14" />
//         </div>

//         <h2 className="text-3xl font-bold text-white text-center mb-6">
//           Login
//         </h2>

//         {/* EMAIL */}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           className="w-full mb-4 p-3 rounded-xl bg-white/20 text-white placeholder-white/70 
//           border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
//         />

//         {/* PASSWORD */}
//         <div className="relative mb-6">
//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             className="w-full p-3 pr-12 rounded-xl bg-white/20 text-white placeholder-white/70 
//             border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
//           />

//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
//           >
//             {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//           </button>
//         </div>

//         {/* BUTTON */}
//         <button className="w-full bg-white text-black py-3 rounded-xl font-semibold 
//         hover:scale-105 transition">
//           Login
//         </button>

//         {/* SWITCH */}
//         <p className="mt-6 text-sm text-white/80 text-center">
//           Don’t have an account?{" "}
//           <span
//             onClick={() => navigate("/signup")}
//             className="font-semibold cursor-pointer"
//           >
//             Sign up
//           </span>
//         </p>

//       </div>

//     </div>
//   )
// }

// export default Login

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"
import logo from "../assets/logo.png"

function Login() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const userData = {
    name: form.name || "User",
    email: form.email,
    image: null
  }
    // save user
    localStorage.setItem("user", JSON.stringify(form))

    // redirect
    navigate("/profile")
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-gradient"></div>

      {/* PARTICLES */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-72 h-72 bg-white/20 rounded-full blur-3xl absolute top-10 left-10"></div>
        <div className="w-72 h-72 bg-white/20 rounded-full blur-3xl absolute bottom-10 right-10"></div>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl 
        bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl"
      >

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <img src={logo} className="h-14" />
        </div>

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded-xl bg-white/20 text-white placeholder-white/70 
          border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* PASSWORD */}
        <div className="relative mb-6">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-3 pr-12 rounded-xl bg-white/20 text-white placeholder-white/70 
            border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-xl font-semibold 
          hover:scale-105 transition"
        >
          Login
        </button>

        {/* SWITCH */}
        <p className="mt-6 text-sm text-white/80 text-center">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="font-semibold cursor-pointer"
          >
            Sign up
          </span>
        </p>

      </form>

    </div>
  )
}

export default Login