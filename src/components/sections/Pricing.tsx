import { motion } from "framer-motion"
import { fadeUp } from "../../styles/motion"
import { Check, X } from "lucide-react"

export default function Pricing() {
  const features = [
    { name: "Self-Hosted Option", free: true, lifetime: false, subscription: false, educational: false },
    { name: "Hosted Service", free: false, lifetime: true, subscription: true, educational: true },
    { name: "Priority Support", free: false, lifetime: true, subscription: true, educational: true },
    { name: "Text Generation", free: true, lifetime: true, subscription: true, educational: true },
    { name: "Image Generation", free: false, lifetime: true, subscription: true, educational: true },
    { name: "Text-To-Speech", free: false, lifetime: true, subscription: true, educational: true },
    { name: "Failover Nodes", free: false, lifetime: true, subscription: true, educational: true },
    { name: "Automatically updated model list", free: false, lifetime: true, subscription: true, educational: true },
    { name: "Commercial Use", free: true, lifetime: true, subscription: true, educational: false },
  ]

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2>Choose Your Plan</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            From free open source to lifetime access - pick what works for your project.
          </p>
        </div>
        
        <div className="alert-success mb-12 text-center">
          <strong>2026 New Year Coupon! Expiring soon. Apply at checkout "NEWYEAREVE25"</strong> - Limited time offer on all paid plans
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Free & Open Source</h3>
            <div className="text-3xl font-bold mb-2">$0 <span className="text-sm font-normal text-muted">/self-host</span></div>
            <p className="text-muted mb-6">Perfect for developers, hobby projects, and tinkerers.</p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                OpenAI API relay, no lock-in
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Self-hosted: Full control
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Community support
              </li>
            </ul>
            <a 
              href="https://github.com/kokofixcomputers/1min-relay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary w-full"
            >
              GitHub
            </a>
          </div>

          <div className="card ring-2 ring-blue-500/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Lifetime</h3>
              <span className="badge-primary">Popular</span>
            </div>
            <div className="text-3xl font-bold mb-2">$18 <span className="text-sm font-normal text-muted">one-time</span></div>
            <p className="text-muted mb-6">One-time purchase for full lifetime access and updates.</p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                All features included
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Priority support
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Hosted for you, no setup needed
              </li>
            </ul>
            <a 
              href="https://shop.kokodev.cc/products" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              Buy Lifetime
            </a>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Subscription</h3>
            <div className="text-3xl font-bold mb-2">$3.45 <span className="text-sm font-normal text-muted">/month</span></div>
            <p className="text-muted mb-6">Subscription plans with full access to all features.</p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Cheaper Option, Cancel Anytime.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Priority Support
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Hosted for you, no setup needed
              </li>
            </ul>
            <a 
              href="https://shop.kokodev.cc/products" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              Subscribe Now
            </a>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Educational Pricing</h3>
            <div className="text-lg font-semibold mb-2 text-muted">Contact kokofixcomputers</div>
            <p className="text-muted mb-6">Special pricing and offers for students and educators.</p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Discounted licenses
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Extended support
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Flexible options for institutions
              </li>
            </ul>
            <a 
              href="mailto:koko@kokodev.cc" 
              className="btn-secondary w-full"
            >
              Contact Us
            </a>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Feature Comparison</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Free</th>
                <th>Lifetime</th>
                <th>Subscription</th>
                <th>Educational</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index}>
                  <td className="font-medium">{feature.name}</td>
                  <td>{feature.free ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-500" />}</td>
                  <td>{feature.lifetime ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-500" />}</td>
                  <td>{feature.subscription ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-500" />}</td>
                  <td>{feature.educational ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-500" />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
