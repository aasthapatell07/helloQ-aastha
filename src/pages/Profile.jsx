// import { useNavigate } from "react-router-dom"
// import { useEffect } from "react"   

// function Profile() {

//   const navigate = useNavigate()

//   // 🔥 temporary user (later from backend)
//   const user = {
//     name: "Aastha",
//     email: "aastha@email.com",
//     bio: "Love meeting new people 💜"
//   }

//   const handleLogout = () => {
//     localStorage.removeItem("user")
//     navigate("/")
//   }

//    useEffect(() => {
//   const user = localStorage.getItem("user")
//   if (!user) {
//     navigate("/login")
//   }
// }, [])
//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-10">

//       <div className="max-w-4xl mx-auto">

//         {/* PROFILE CARD */}
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">

//           {/* TOP */}
//           <div className="flex flex-col md:flex-row items-center gap-6">

//             {/* AVATAR */}
//             <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-3xl font-bold">
//               {user.name[0]}
//             </div>

//             {/* INFO */}
//             <div className="text-center md:text-left">
//               <h2 className="text-3xl font-bold">{user.name}</h2>
//               <p className="text-gray-600">{user.email}</p>
//             </div>

//           </div>

//           {/* BIO */}
//           <div className="mt-8">
//             <h3 className="text-xl font-semibold mb-2">About</h3>
//             <p className="text-gray-600">{user.bio}</p>
//           </div>

//           {/* ACTIONS */}
//           <div className="mt-10 flex gap-4">

//             <button className="px-6 py-2 bg-black text-white rounded-xl hover:scale-105 transition">
//               Edit Profile
//             </button>

//             <button
//               onClick={handleLogout}
//               className="px-6 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>

//           </div>

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Profile

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Profile() {

  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))

    if (!storedUser) {
      navigate("/login")
    } else {
      setUser(storedUser)
    }
  }, [])

  // 📸 IMAGE UPLOAD
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {
      const updatedUser = { ...user, image: reader.result }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
    }

    reader.readAsDataURL(file)
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/")
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">

        {/* PROFILE IMAGE */}
        <div className="flex flex-col items-center">

          <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 mb-4">

            {user.image ? (
              <img src={user.image} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-3xl font-bold">
                {user.name[0]}
              </div>
            )}

          </div>

          {/* UPLOAD BUTTON */}
          <label className="cursor-pointer text-sm text-blue-600">
            Change Photo
            <input type="file" onChange={handleImageChange} hidden />
          </label>

        </div>

        {/* INFO */}
        <div className="mt-8 text-center">

          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>

        </div>

        {/* ACTIONS */}
        <div className="mt-10 flex justify-center gap-4">

          <button className="px-6 py-2 bg-black text-white rounded-xl hover:scale-105 transition">
            Edit Profile
          </button>

          <button
            onClick={handleLogout}
            className="px-6 py-2 border border-gray-300 rounded-xl hover:bg-gray-100"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  )
}

export default Profile