import { motion } from "framer-motion"
import { Zap, Heart, Search, TvMinimalPlay } from "lucide-react"
import { fadeUp, stagger } from "../../styles/motion"

const features = [
  { 
    icon: Zap, 
    title: "Ultra-Fast OpenAI Relay", 
    desc: "Converts OpenAI requests to 1min.ai endpoints near-instantly." 
  },
  { 
    icon: Heart, 
    title: "Universal Client Support", 
    desc: "Any OpenAI-compatible app or library works immediately." 
  },
  { 
    icon: Search, 
    title: "Developer-First & Secure", 
    desc: "Open source. Strict no log policy." 
  },
  {
    icon: TvMinimalPlay,
    title: "Supports Streaming",
    desc: "Stream chat completions for real-time responses."
  }
]

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2>Why 1min Relay?</h2>
        </div>
        
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp} className="card text-center">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 mx-auto">
                <Icon size={24} strokeWidth={1.5} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{title}</h3>
              <p className="text-[rgb(var(--muted))]">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}