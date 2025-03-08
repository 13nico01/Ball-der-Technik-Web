'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const Hardfacts = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const eventDetails = [
    { title: 'Datum', content: '17. Mai 2025' },
    { title: 'Einlass', content: ['20:00', 'Beginn: 21:00'] },
    { title: 'Musik', content: ['Live Musik: TBA', 'DJ Lineup: TBA'] },
    { 
      title: 'Was dich erwartet:', 
      content: [
        'Unvergessliche Kulisse',
        'Eintanzen und Mitternachtseinlage',
        'Die besten DJs',
        'Größtes Ball-Clubing in Hollabrunn'
      ] 
    }
  ]

  return (
    <section id="facts" className="relative min-h-screen py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bdt_images/eintanzen01.jpg"
          alt="Background"
          fill
          priority
          className="object-cover brightness-40"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 
          variants={itemVariants}
          className="font-pirata text-5xl lg:text-7xl text-center mb-12 text-header
            [text-shadow:_2px_2px_8px_rgb(0_0_0_/_90%)]"
        >
          Hardfacts
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Map Container */}
          <motion.div
            variants={itemVariants}
            className="relative h-[400px] lg:h-[600px] rounded-xl overflow-hidden
              border-2 border-header/30 backdrop-blur-sm bg-black/30
              transform transition-transform duration-300 hover:scale-[1.02]"
          >
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.0538717364557!2d16.07125547688394!3d48.558341421774536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d68026f75c2f7%3A0xb67082211ddf0c7e!2sStadtsaal%20Hollabrunn!5e1!3m2!1sde!2sat!4v1739828322816!5m2!1sde!2sat"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Event Location Map"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-8 p-8 rounded-xl
              border-2 border-header/30 backdrop-blur-sm bg-black/30
              transform transition-transform duration-300 hover:scale-[1.02]"
          >
            {eventDetails.map((detail) => (
              <motion.div
                key={detail.title}
                variants={itemVariants}
                className="space-y-2"
              >
                <h3 className="font-pirata text-3xl text-header
                  [text-shadow:_1px_1px_4px_rgb(0_0_0_/_90%)]">
                  {detail.title}
                </h3>
                {Array.isArray(detail.content) ? (
                  detail.content.map((item, i) => (
                    <p key={i} className="font-roboto text-xl text-white/90">
                      {item}
                    </p>
                  ))
                ) : (
                  <p className="font-roboto text-xl text-white/90">
                    {detail.content}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hardfacts
