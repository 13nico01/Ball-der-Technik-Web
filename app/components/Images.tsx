'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Images = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    '/gallery/1.jpg',
    '/gallery/2.jpg',
    '/gallery/3.jpg',
    '/gallery/4.jpg',
    '/gallery/5.jpg',
    '/gallery/6.jpg',
    '/gallery/7.jpg',
    '/gallery/8.jpg',
    '/gallery/9.jpg',
    '/gallery/10.jpg',
    '/gallery/11.jpg',
    '/gallery/12.jpg',
    '/gallery/13.jpg',
    '/gallery/14.jpg',
    '/gallery/15.jpg',
    '/gallery/16.jpg',
    '/gallery/17.jpg',
    '/gallery/18.jpg',
    '/gallery/19.jpg',
  ]

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  return (
    <section id="images" className="relative min-h-screen flex flex-col justify-center py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bdt_images/dj01.jpg"
          alt="Background"
          fill
          priority
          className="object-cover brightness-[0.7] scale-105"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-pirata text-header text-center mb-12"
        >
          Impressionen
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl border border-header/20"
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/UkoYjmjepLI?controls=1&rel=0&modestbranding=1&enablejsapi=0"
              title="Ball der Technik Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-video w-full relative rounded-lg overflow-hidden shadow-2xl border border-header/20"
          >
            {images.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Ball der Technik Bild ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            ))}

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Vorheriges Bild"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Nächstes Bild"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-header w-4' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Gehe zu Bild ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Images
