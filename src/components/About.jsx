import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-zinc-100 via-white to-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8"
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Google Ads Certified Experts</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our team consists of Google Ads certified professionals with years of experience managing campaigns across various industries. We stay up-to-date with the latest Google Ads features and best practices.
            </p>
            <ul className="text-left space-y-3">
              <motion.li 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <motion.span 
                  whileHover={{ scale: 1.2 }}
                  className="w-6 h-6 bg-black rounded-full mr-3 flex items-center justify-center"
                >
                  <span className="text-white text-sm">✓</span>
                </motion.span>
                Google Ads Certified
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <motion.span 
                  whileHover={{ scale: 1.2 }}
                  className="w-6 h-6 bg-black rounded-full mr-3 flex items-center justify-center"
                >
                  <span className="text-white text-sm">✓</span>
                </motion.span>
                5+ Years Experience
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <motion.span 
                  whileHover={{ scale: 1.2 }}
                  className="w-6 h-6 bg-black rounded-full mr-3 flex items-center justify-center"
                >
                  <span className="text-white text-sm">✓</span>
                </motion.span>
                Proven Results
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <motion.span 
                  whileHover={{ scale: 1.2 }}
                  className="w-6 h-6 bg-black rounded-full mr-3 flex items-center justify-center"
                >
                  <span className="text-white text-sm">✓</span>
                </motion.span>
                24/7 Support
              </motion.li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/30 backdrop-blur-lg p-8 rounded-lg border border-slate-200/60 shadow-xl"
          >
            <h4 className="text-2xl font-bold mb-4">Our Results</h4>
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-between items-center"
              >
                <span>Average ROI Increase:</span>
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="font-bold text-2xl text-green-600"
                >
                  +250%
                </motion.span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-between items-center"
              >
                <span>Cost Per Lead Reduction:</span>
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="font-bold text-2xl text-blue-600"
                >
                  -40%
                </motion.span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-between items-center"
              >
                <span>Click-Through Rate:</span>
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="font-bold text-2xl text-purple-600"
                >
                  +180%
                </motion.span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-between items-center"
              >
                <span>Conversion Rate:</span>
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  viewport={{ once: true }}
                  className="font-bold text-2xl text-orange-600"
                >
                  +120%
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
