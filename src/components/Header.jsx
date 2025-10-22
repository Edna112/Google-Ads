import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-slate-900/95 via-gray-800/90 to-slate-900/95 backdrop-blur-xl border-b border-slate-300/20 text-white py-4 px-6 relative shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.a 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          href="#"
          className="text-2xl font-bold hover:text-gray-300 transition-colors"
        >
          CryptoGuard Community
        </motion.a>
        
        {/* Desktop Navigation */}
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

        {/* Mobile Hamburger Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ 
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 6 : 0
            }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={{ 
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -6 : 0
            }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white"
          />
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-slate-800/95 to-slate-900/95 backdrop-blur-xl border-t border-slate-300/20"
          >
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col space-y-4 py-4"
            >
              <motion.a 
                whileTap={{ scale: 0.95 }}
                href="#services" 
                onClick={closeMenu}
                className="px-6 py-2 hover:text-gray-300 transition-colors"
              >
                Services
              </motion.a>
              <motion.a 
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                onClick={closeMenu}
                className="px-6 py-2 hover:text-gray-300 transition-colors"
              >
                Contact
              </motion.a>
              <motion.a 
                whileTap={{ scale: 0.95 }}
                href="#about" 
                onClick={closeMenu}
                className="px-6 py-2 hover:text-gray-300 transition-colors"
              >
                About
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
