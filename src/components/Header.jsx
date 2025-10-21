import { motion } from 'framer-motion'

function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black text-white py-4 px-6"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl font-bold"
        >
          Google Ads Pro
        </motion.div>
        <motion.nav 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex space-x-6"
        >
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#services" 
            className="hover:text-gray-300 transition-colors"
          >
            Services
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="hover:text-gray-300 transition-colors"
          >
            Contact
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#about" 
            className="hover:text-gray-300 transition-colors"
          >
            About
          </motion.a>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header
