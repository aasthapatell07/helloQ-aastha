// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"

// function Profile() {

//   const navigate = useNavigate()
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"))

//     if (!storedUser) {
//       navigate("/login")
//     } else {
//       setUser(storedUser)
//     }
//   }, [])

//   // 📸 IMAGE UPLOAD
//   const handleImageChange = (e) => {
//     const file = e.target.files[0]
//     if (!file) return

//     const reader = new FileReader()

//     reader.onloadend = () => {
//       const updatedUser = { ...user, image: reader.result }
//       setUser(updatedUser)
//       localStorage.setItem("user", JSON.stringify(updatedUser))
//     }

//     reader.readAsDataURL(file)
//   }

//   const handleLogout = () => {
//     localStorage.removeItem("user")
//     navigate("/")
//   }

//   if (!user) return null

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

//       <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">

//         {/* PROFILE IMAGE */}
//         <div className="flex flex-col items-center">

//           <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 mb-4">

//             {user.image ? (
//               <img src={user.image} className="w-full h-full object-cover" />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center text-3xl font-bold">
//                 {user.name[0]}
//               </div>
//             )}

//           </div>

//           {/* UPLOAD BUTTON */}
//           <label className="cursor-pointer text-sm text-blue-600">
//             Change Photo
//             <input type="file" onChange={handleImageChange} hidden />
//           </label>

//         </div>

//         {/* INFO */}
//         <div className="mt-8 text-center">

//           <h2 className="text-2xl font-bold">{user.name}</h2>
//           <p className="text-gray-600">{user.email}</p>

//         </div>

//         {/* ACTIONS */}
//         <div className="mt-10 flex justify-center gap-4">

//           <button className="px-6 py-2 bg-black text-white rounded-xl hover:scale-105 transition">
//             Edit Profile
//           </button>

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

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Profile() {

  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [editMode, setEditMode] = useState(false)

  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    bio: "",
    image: ""
  })

  // LOAD USER
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))

    if (!storedUser) {
      navigate("/login")
    } else {
      setUser(storedUser)

      setForm({
        name: storedUser.name || "",
        age: storedUser.age || "",
        email: storedUser.email || "",
        bio: storedUser.bio || "",
        image: storedUser.image || ""
      })
    }
  }, [])

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // IMAGE UPLOAD
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {
      setForm({ ...form, image: reader.result })
    }

    reader.readAsDataURL(file)
  }

  // SAVE PROFILE
  const handleSave = () => {
    const updatedUser = {
      ...user,
      name: form.name,
      age: form.age,
      email: form.email,
      bio: form.bio,
      image: form.image
    }

    localStorage.setItem("user", JSON.stringify(updatedUser))

    // 🔥 INSTANT UI UPDATE
    setUser(updatedUser)

    setEditMode(false)
  }

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/")
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">

        {/* IMAGE */}
        <div className="flex flex-col items-center">

          <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 mb-4">

            {form.image ? (
              <img src={form.image} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-3xl font-bold">
                {form.name?.[0]}
              </div>
            )}

          </div>

          {editMode && (
            <label className="cursor-pointer text-sm text-blue-600">
              Change Photo
              <input type="file" onChange={handleImageChange} hidden />
            </label>
          )}

        </div>

        {/* INFO */}
        <div className="mt-8 text-center">

          {editMode ? (
            <div className="space-y-3">

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="border p-2 rounded w-full"
              />

              <input
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="Age"
                type="number"
                className="border p-2 rounded w-full"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                className="border p-2 rounded w-full"
              />

              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                placeholder="Write your bio..."
                className="border p-2 rounded w-full"
              />

            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.age} yrs</p>
              <p className="text-gray-500">{user.email}</p>
              <p className="mt-3 text-gray-600">{user.bio || "No bio added"}</p>
            </>
          )}

        </div>

        {/* ACTIONS */}
        <div className="mt-10 flex justify-center gap-4">

          {editMode ? (
            <>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-black text-white rounded-xl hover:scale-105 transition"
              >
                Save
              </button>

              <button
                onClick={() => setEditMode(false)}
                className="px-6 py-2 border rounded-xl"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="px-6 py-2 bg-black text-white rounded-xl hover:scale-105 transition"
            >
              Edit Profile
            </button>
          )}

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