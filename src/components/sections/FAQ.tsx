import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { slideDown } from '../../styles/motion'

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "You get 14 days of full access to all Pro features. No credit card required. After the trial, you can choose to upgrade or continue with our free plan."
  },
  {
    question: "Can I change my plan anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with SOC 2 Type II standards to keep your data safe."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund within 30 days of purchase."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2>Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgb(var(--border))] last:border-b-0">
              <button
                className="w-full text-left py-6 px-0 font-medium text-base transition-colors duration-200 hover:text-[rgb(var(--accent))] cursor-pointer flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="pb-6 text-[rgb(var(--muted))] overflow-hidden"
                    variants={slideDown}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}