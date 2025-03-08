'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div id="hero" className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50 scale-105 transition-transform duration-1000"
        style={{ 
          backgroundImage: `url(/images/bg-hero.png)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      <motion.div 
        className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div
          className="relative"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-big font-pirata text-header text-center
            [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]">
            3. Ball der Technik
          </h1>
          <div className="absolute -inset-x-4 -inset-y-2 bg-[#eaba5f]/10 blur-xl -z-10 rounded-full"></div>
        </motion.div>

        <motion.h2 
          className="font-pirata text-header text-center text-2xl md:text-3xl xl:text-6xl mb-8
            [text-shadow:_2px_2px_8px_rgb(0_0_0_/_90%)]"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Eine Nacht auf hoher See
        </motion.h2>

        <motion.div
          className="flex flex-col items-center space-y-4 mt-8"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-center font-pirata text-3xl md:text-4xl xl:text-7xl text-white
            [text-shadow:_2px_2px_8px_rgb(0_0_0_/_90%)]">
            17. Mai 2025
          </p>
          <p className="text-center font-pirata text-3xl md:text-4xl xl:text-7xl text-white
            [text-shadow:_2px_2px_8px_rgb(0_0_0_/_90%)]">
            Stadtsaal Hollabrunn
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#tickets"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-pirata
              text-[#eaba5f] transition-all duration-300 transform hover:scale-105 hover:text-white"
          >
            <span className="absolute inset-0 border border-[#eaba5f] rounded"></span>
            <span className="absolute inset-0 border border-[#eaba5f] rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-pulse"></span>
            <span className="relative">Tickets Sichern</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
