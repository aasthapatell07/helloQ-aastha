// import Navbar from "../components/Navbar"
// import Hero from "../components/Hero"
// import Features from "../components/Features"
// import Community from "../components/Community"
// import HowItWorks from "../components/HowItWorks"
// import Testimonials from "../components/Testimonials"
// import Safety from "../components/Safety"
// import DownloadCTA from "../components/DownloadCTA"
// import Footer from "../components/Footer"
// import FAQ from "../components/FAQ"

// function Home() {
//   return (
//     <>
      
//       <Navbar/>
//       <Hero/>
//       <Features/>
//       <HowItWorks/>
//       <Community/>
//       <Testimonials/>
//       <Safety/>
//       <FAQ/>
//       <DownloadCTA/>
//       <Footer/>
      
//     </>
//   )
// }

// export default Home

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import Community from "../components/Community"
import Testimonials from "../components/Testimonials"
import Safety from "../components/Safety"
import FAQ from "../components/FAQ"
import DownloadCTA from "../components/DownloadCTA"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="bg-white text-gray-900">

      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Community />
      <Testimonials />
      <Safety />
      <FAQ />
      <DownloadCTA />
      <Footer />

    </div>
  )
}

export default Home