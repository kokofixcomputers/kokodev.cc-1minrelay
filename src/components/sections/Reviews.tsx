import { motion } from "framer-motion"
import { fadeUp } from "../../styles/motion"

export default function Reviews() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2>What People Are Saying</h2>
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <blockquote className="card text-center">
            <p className="text-lg leading-relaxed mb-6">
              "An Absolute Game-Changer: My Rave Review for 1minrelay! I've been using 1minrelay for a little while now, and I can confidently say it's been an absolute game-changer for my AI workflow. This licensed service offers incredible value for a small, one-time fee, providing a lifetime license and the transparency of an open-source project. What makes 1minrelay so essential for me is its seamless integration with 1min.ai from chatkit.app and others. Essentially, 1minrelay acts as the perfect bridge, allowing me to fully leverage the power of app.1min.ai... Excellent."
            </p>
            <footer className="text-[rgb(var(--muted))]">
              — ko*****@p*.amour******.net
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}