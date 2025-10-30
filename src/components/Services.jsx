import { motion } from 'framer-motion'

function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-white via-slate-50 to-zinc-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our CryptoGuard Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              y: -10
            }}
            className="text-center p-8 bg-white/30 backdrop-blur-lg rounded-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/60"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <span className="text-white text-2xl">🔒</span>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Scam Recovery</h3>
            <p className="text-gray-600">Expert assistance to help victims recover from crypto scams and fraudulent schemes with proven recovery strategies.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              y: -10
            }}
            className="text-center p-8 bg-white/30 backdrop-blur-lg rounded-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/60"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <span className="text-white text-2xl">💎</span>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Investment Guidance</h3>
            <p className="text-gray-600">Reliable crypto investment advice from experienced traders to help you make informed decisions and avoid pitfalls.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              y: -10
            }}
            className="text-center p-8 bg-white/30 backdrop-blur-lg rounded-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/60"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <span className="text-white text-2xl">🚀</span>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Newbie Mentorship</h3>
            <p className="text-gray-600">Comprehensive guidance for crypto beginners with step-by-step tutorials and personalized mentorship programs.</p>
            {/* Elfsight Telegram Chat | crypto */}
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div className="elfsight-app-ea67b6d3-4ce1-4aee-9b4e-10aa0d6a0e33" data-elfsight-app-lazy></div>
          </motion.div>
          </div>
      </div>
    </section>
  )
}

export default Services
