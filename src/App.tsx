import Navbar from "./components/layout/Navbar.tsx"
import Footer from "./components/layout/Footer.tsx"

import Hero from "./components/sections/Hero.tsx"
import Features from "./components/sections/Features.tsx"
import Reviews from "./components/sections/Reviews.tsx"
import Clients from "./components/sections/Clients.tsx"
import Pricing from "./components/sections/Pricing.tsx"

export default function App() {
  return (
    <div className="page-frame">
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      <Clients />
      <Pricing />
      <Footer />
    </div>
  )
}
