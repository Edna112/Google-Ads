import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 text-white py-12 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">CryptoGuard Community</h3>
            <p className="text-gray-400">
              Your trusted crypto community providing expert guidance, scam recovery services, and reliable investment advice to help you navigate the crypto world safely.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <motion.li 
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                Scam Recovery
              </motion.li>
              <motion.li 
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                Investment Guidance
              </motion.li>
              <motion.li 
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                Newbie Mentorship
              </motion.li>
              <motion.li 
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                Security Education
              </motion.li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <motion.li 
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                +1 (555) 123-4567
              </motion.li>
              <motion.li 
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                hello@cryptoguard.com
              </motion.li>
              <motion.li 
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                123 Business Ave
              </motion.li>
              <motion.li 
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                New York, NY 10001
              </motion.li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Discord Community
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Telegram Group
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Reddit Community
              </motion.a>
            </div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-slate-300/20 mt-8 pt-8 text-center text-slate-400"
        >
          <p>&copy; 2024 CryptoGuard Community. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
