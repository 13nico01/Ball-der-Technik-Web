'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: 'Wie läuft der Kartenverkauf ab?',
      answer: 'Der Kartenverkauf findet zu den angegebenen Terminen in der Aula der HTL Hollabrunn statt. Restkarten werden, falls vorhanden, online zum Verkauf angeboten.'
    },
    {
      question: 'Was ist der Dresscode?',
      answer: 'Der Ball ist eine elegante Veranstaltung. Für Damen gilt: Langes oder kurzes Abendkleid. Für Herren: Smoking, dunkler Anzug oder Uniform.'
    },
    {
      question: 'Gibt es eine Garderobe?',
      answer: 'Ja, es gibt eine Garderobe um Jacken und Taschen zu verwahren.'
    },
    {
      question: 'Ab welchem Alter ist der Eintritt erlaubt?',
      answer: 'Der Eintritt ist ab 16 Jahren gestattet. Für Jugendliche unter 18 Jahren gelten die gesetzlichen Bestimmungen des NÖ Jugendgesetzes.'
    },
    {
      question: 'Kann ich einen Tisch reservieren?',
      answer: 'Ja, Tischreservierungen sind möglich. Diese können nur für ganze Tische vorgenommen werden und kosten 5€ pro Sitzplatz.'
    }
  ]

  return (
    <section id="faq" className="relative h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bdt_images/crowd02.jpg"
          alt="Background"
          fill
          priority
          className="object-cover brightness-40 scale-105"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-pirata text-5xl lg:text-7xl text-center mb-12 text-header
            [text-shadow:_2px_2px_8px_rgb(0_0_0_/_90%)] relative"
        >
          <span className="relative inline-block">
            Noch Fragen?
            <div className="absolute -inset-x-6 -inset-y-4 bg-header/10 blur-2xl -z-10 rounded-full"></div>
          </span>
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-header/5 rounded-xl blur-xl group-hover:bg-header/10 
                transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <motion.div
                className="relative border-2 border-header/30 rounded-xl overflow-hidden
                  backdrop-blur-sm bg-black/30 transition-all duration-300
                  hover:border-header/50 hover:shadow-[0_0_30px_-5px_rgba(234,186,95,0.2)]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                >
                  <span className="font-pirata text-xl text-white">{item.question}</span>
                  <span
                    className={`text-header transition-transform duration-300 transform
                      ${openIndex === index ? 'rotate-180' : ''}`}
                  >
                    ▼
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-white/90 font-roboto border-t border-header/30">
                        <p className="pt-4">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
