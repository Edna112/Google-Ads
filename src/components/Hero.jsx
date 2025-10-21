import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-zinc-100 py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Maximize Your <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-black"
              >
                Google Ads
              </motion.span> ROI
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 mb-8"
            >
              Professional Google Ads management that drives results. Get more leads, increase sales, and grow your business with our expert team.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Get Free Consultation
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right side - Anime Marketing Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-white/30 to-slate-100/40 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-slate-200/50"
            >
              {/* Anime-style character */}
              <div className="relative">
                {/* Character body */}
                <div className="flex justify-center mb-4">
                  <motion.div 
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative"
                  >
                    {/* Head */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="w-20 h-20 bg-white rounded-full border-4 border-black relative z-10"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-2 left-2 w-4 h-4 bg-black rounded-full"
                      ></motion.div>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="absolute top-2 right-2 w-4 h-4 bg-black rounded-full"
                      ></motion.div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black rounded-full"></div>
                    </motion.div>
                    
                    {/* Body */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="w-16 h-20 bg-white border-4 border-black rounded-lg mt-2 relative"
                    >
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-black rounded"></div>
                    </motion.div>
                    
                    {/* Arms */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                      className="absolute top-8 -left-4 w-6 h-12 bg-white border-4 border-black rounded-lg transform -rotate-12"
                    ></motion.div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      className="absolute top-8 -right-4 w-6 h-12 bg-white border-4 border-black rounded-lg transform rotate-12"
                    ></motion.div>
                  </motion.div>
                </div>
                
                {/* Marketing elements around character */}
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 2.0 }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute top-0 left-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                >
                  <motion.span 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-lg"
                  >
                    💰
                  </motion.span>
                </motion.div>
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute top-4 right-0 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center"
                >
                  <motion.span 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-lg"
                  >
                    📈
                  </motion.span>
                </motion.div>
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute bottom-0 left-4 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center"
                >
                  <motion.span 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="text-lg"
                  >
                    🎯
                  </motion.span>
                </motion.div>
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 2.6 }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute bottom-0 right-4 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center"
                >
                  <motion.span 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-lg"
                  >
                    ⚡
                  </motion.span>
                </motion.div>
                
                {/* Speech bubble */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.8 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border-4 border-black rounded-lg p-3 shadow-lg"
                >
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.2 }}
                    className="text-sm font-bold text-black"
                  >
                    "Let's boost your ads!"
                  </motion.div>
                  <div className="absolute p-1 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                </motion.div>
              </div>
              
              {/* Google Ads branding */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.0 }}
                className="mt-6 text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center space-x-2 bg-slate-100/40 backdrop-blur-lg px-4 py-2 rounded-lg border border-slate-300/50 shadow-lg"
                >
                  <span className="text-lg">🔍</span>
                  <span className="font-bold text-black">Google Ads</span>
                  <span className="text-lg">📊</span>
                </motion.div>
              </motion.div>
              
              {/* Floating success indicators */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 3.4 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-2 -left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold"
              >
                +250% ROI
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 3.6 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold"
              >
                +180% CTR
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
