import { motion } from 'framer-motion'

function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Google Ads Services
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
            className="text-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <span className="text-white text-2xl">🎯</span>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Campaign Strategy</h3>
            <p className="text-gray-600">Custom Google Ads strategies tailored to your business goals and target audience.</p>
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
            className="text-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <span className="text-white text-2xl">📊</span>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Performance Optimization</h3>
            <p className="text-gray-600">Continuous monitoring and optimization to maximize your ad performance and ROI.</p>
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
            className="text-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <span className="text-white text-2xl">📈</span>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Analytics & Reporting</h3>
            <p className="text-gray-600">Detailed reports and insights to track your campaign success and growth.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
