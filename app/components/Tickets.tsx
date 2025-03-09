'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const Tickets = () => {
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

  const ticketTypes = [
    {
      type: 'Ermäßigtes Ticket',
      price: '25€',
      includes: [
    
      ],
      info: 'Für Schüler, Studenten, Lehrlinge, Zivil- und Präsenzdiener mit gültigem Nachweis'
    },
    {
      type: 'Reguläres Ticket',
      price: '28€',
      includes: [
       
      ]
    }
  ]

  const htlSalesDates = [
    { date: '14. März 2025', time: '09:30 - 09:45' },
    { date: '14. März 2025', time: '13:00 - 13:30' },
  ]

  return (
    <section id="tickets" className="relative min-h-screen py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bdt_images/crowd01.jpg"
          alt="Crowd Background"
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
          Tickets
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ticketTypes.map((ticket) => (
                <div
                  key={ticket.type}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-header/20 rounded-xl blur-xl group-hover:bg-header/30 transition-colors duration-300"></div>
                  <div className="relative p-6 rounded-xl border-2 border-header/30 backdrop-blur-sm bg-black/30
                    transform transition-all duration-300 group-hover:scale-[1.02] group-hover:border-header/50"
                  >
                    <h3 className="font-pirata text-3xl text-header mb-4
                      [text-shadow:_1px_1px_4px_rgb(0_0_0_/_90%)]">
                      {ticket.type}
                    </h3>
                    <p className="font-pirata text-4xl text-white mb-6">
                      {ticket.price}
                    </p>
                    <ul className="space-y-2">
                      {ticket.includes.map((item, i) => (
                        <li key={i} className="font-roboto text-lg text-white/90 flex items-center">
                          <span className="text-header mr-2">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                    {ticket.info && (
                      <p className="mt-4 text-sm text-white/80 italic border-t border-header/30 pt-4">
                        {ticket.info}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-header/20 rounded-xl blur-xl group-hover:bg-header/30 transition-colors duration-300"></div>
              <div className="relative p-6 rounded-xl border-2 border-header/30 backdrop-blur-sm bg-black/30
                transform transition-all duration-300 group-hover:scale-[1.02] group-hover:border-header/50"
              >
                <h3 className="font-pirata text-3xl text-header mb-4
                  [text-shadow:_1px_1px_4px_rgb(0_0_0_/_90%)]">
                  Tischreservierung
                </h3>
                <div className="space-y-2">
                  <p className="font-pirata text-2xl text-white">5€ pro Sitzplatz</p>
                  <p className="font-roboto text-lg text-white/90">
                    Reservierungen sind nur für ganze Tische möglich
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="p-6 rounded-xl border-2 border-header/30 backdrop-blur-sm bg-black/30
              transform transition-all duration-300 hover:scale-[1.02] hover:border-header/50"
            >
              <h3 className="font-pirata text-3xl text-header mb-6
                [text-shadow:_1px_1px_4px_rgb(0_0_0_/_90%)]">
                Ticketverkauf in der HTL Hollabrunn
              </h3>
              <p className="font-roboto text-lg text-white/90 mb-4">
                Tickets können in der Aula zu folgenden Terminen erworben werden:
              </p>
              <ul className="space-y-3">
                {htlSalesDates.map((sale, index) => (
                  <li key={index} className="font-roboto text-lg text-white/90 flex items-center space-x-4">
                    <span className="text-header min-w-[140px]">{sale.date}</span>
                    <span>{sale.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border-2 border-header/30 backdrop-blur-sm bg-black/30
              transform transition-all duration-300 hover:scale-[1.02] hover:border-header/50"
            >
              <h3 className="font-pirata text-3xl text-header mb-4
                [text-shadow:_1px_1px_4px_rgb(0_0_0_/_90%)]">
                Online Ticketverkauf
              </h3>
              <p className="font-roboto text-lg text-white/90">
                Falls es Restkarten gibt, werden diese online zum Verkauf angeboten.
              </p>
            </div>

            <div className="p-4 rounded-xl border-2 border-header/30 backdrop-blur-sm bg-black/30">
              <p className="font-roboto text-sm text-white/80 italic">
                * Tickets sind limitiert. Der Verkauf erfolgt nach dem First-Come-First-Serve Prinzip.
                Ermäßigte Tickets sind nur mit gültigem Nachweis erhältlich.<br/>Einlass ist nur bis 22:30 möglich.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Tickets
