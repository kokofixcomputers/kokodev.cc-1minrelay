import { motion } from "framer-motion"
import { fadeUp } from "../../styles/motion"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="section">
      <div className="container text-center max-w-4xl">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10">
                {/* Relay tower/antenna */}
                <path d="M16 4v24" stroke="white" strokeWidth="2" strokeLinecap="round" />
                {/* Signal waves */}
                <path d="M8 12c4-4 12-4 16 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M10 16c3-3 9-3 12 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M12 20c2-2 6-2 8 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                {/* Base */}
                <rect x="14" y="26" width="4" height="2" fill="white" rx="1" />
                {/* Connection nodes */}
                <circle cx="6" cy="16" r="2" fill="white" opacity="0.8" />
                <circle cx="26" cy="16" r="2" fill="white" opacity="0.8" />
                {/* Data flow indicators */}
                <circle cx="11" cy="14" r="1" fill="white" opacity="0.6" />
                <circle cx="21" cy="18" r="1" fill="white" opacity="0.6" />
              </svg>
            </div>
          </div>

          <h1>1min Relay</h1>

          <p className="mt-6 text-xl text-[rgb(var(--muted))]">
            Effortless OpenAI-compatible relay for <strong>1min.ai</strong>.<br />
            Instantly connect your OpenAI tools to 1min's blazing-fast API.<br />
            <span className="text-green-600">Flexible. Secure. <strong>100% developer-friendly.</strong></span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://github.com/kokofixcomputers/1min-relay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              GitHub →
            </a>
            <a 
              href="#pricing" 
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Plans
            </a>
          </div>

          <div className="mt-16 p-6 rounded-xl bg-black/5 dark:bg-white/5 border border-[rgb(var(--border))]">
            <h2 className="text-xl font-semibold mb-3">What does 1min Relay do?</h2>
            <p className="text-[rgb(var(--muted))] leading-relaxed">
              <strong>1min Relay</strong> is a seamless bridge between the <strong>1min.ai API</strong> and <strong>OpenAI-compatible clients</strong>.<br/>
              It translates 1min.ai's unique, <strong>non-OpenAI API</strong> into the standard OpenAI API format—so you can use your favorite OpenAI tools and chat apps without any code changes, just by swapping the endpoint.
            </p>
          </div>
        </motion.div>
        
        <div className="mt-16 flex flex-col items-center">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-[rgb(var(--muted))] cursor-pointer"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm font-medium mb-2">Scroll down to see more!</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
