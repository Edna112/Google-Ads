import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-zinc-100 via-slate-200 to-gray-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Get In Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-white">📞</span>
                </motion.div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+1 (914)6390770</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-white">✉️</span>
                </motion.div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">Support@cryptoexpertss.net</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-white">📍</span>
                </motion.div>
                <div>
                  <p className="font-semibold">Community Support</p>
                  <p className="text-gray-600">Discord Community Server<br />Join our 24/7 support channel</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-white">🕒</span>
                </motion.div>
                <div>
                  <p className="font-semibold">Support Hours</p>
                  <p className="text-gray-600">24/7 Community Support<br />Always here to help</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 bg-white/30 backdrop-blur-lg border border-slate-300/60 rounded-lg focus:outline-none focus:border-slate-400/70 transition-all duration-300 placeholder-slate-600"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 bg-white/30 backdrop-blur-lg border border-slate-300/60 rounded-lg focus:outline-none focus:border-slate-400/70 transition-all duration-300 placeholder-slate-600"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  type="text" 
                  placeholder="Your Crypto Experience Level" 
                  className="w-full p-4 bg-white/30 backdrop-blur-lg border border-slate-300/60 rounded-lg focus:outline-none focus:border-slate-400/70 transition-all duration-300 placeholder-slate-600"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.textarea 
                  whileFocus={{ scale: 1.02 }}
                  placeholder="Tell us about your crypto journey or how we can help..." 
                  rows="4"
                  className="w-full p-4 bg-white/30 backdrop-blur-lg border border-slate-300/60 rounded-lg focus:outline-none focus:border-slate-400/70 transition-all duration-300 placeholder-slate-600"
                ></motion.textarea>
              </motion.div>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)" 
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Join Our Community
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
