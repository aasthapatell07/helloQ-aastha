// import Home from "./pages/Home"

// function App() {
//   return <Home />
// }

// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        {/* 🔥 THIS FIXES YOUR ERROR */}
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App