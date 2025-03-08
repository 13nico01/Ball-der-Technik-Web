'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Images = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length)
  }

  return (
    <section id="images" className="relative h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bdt_images/dj01.jpg"
          alt="Background"
          fill
          priority
          className="object-cover brightness-40 scale-105"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-pirata text-5xl lg:text-7xl text-center mb-8 text-header
            [text-shadow:_2px_2px_8px_rgb(0_0_0_/_90%)] relative pt-20"
        >
          <span className="relative inline-block">
            Bilder
            <div className="absolute -inset-x-6 -inset-y-4 bg-header/10 blur-2xl -z-10 rounded-full"></div>
          </span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 flex-1 items-center max-h-[calc(100vh-12rem)]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 aspect-video relative rounded-xl overflow-hidden
              border-2 border-header/30 shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)]"
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/UkoYjmjepLI?si=mVsZOq73UHFY-9Fo"
              title="Ball der Technik 2024 Aftermovie"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-[3/2]"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden
              border-2 border-header/30 shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x)
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1)
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1)
                    }
                  }}
                  className="absolute w-full h-full"
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`Ball der Technik 2024 - Bild ${currentIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                  />
                </motion.div>
              </AnimatePresence>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white
                  w-10 h-10 flex items-center justify-center rounded-full bg-black/50
                  transition-all duration-300 hover:bg-black/70 z-10"
                onClick={() => paginate(-1)}
              >
                <span className="sr-only">Previous</span>
                ←
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white
                  w-10 h-10 flex items-center justify-center rounded-full bg-black/50
                  transition-all duration-300 hover:bg-black/70 z-10"
                onClick={() => paginate(1)}
              >
                <span className="sr-only">Next</span>
                →
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 
                      ${index === currentIndex 
                        ? 'bg-header w-4' 
                        : 'bg-white/50 hover:bg-white/80'}`}
                  >
                    <span className="sr-only">Bild {index + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Images
