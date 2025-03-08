'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative border-t border-header/30 bg-black/95 backdrop-blur-md z-[90]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="font-pirata text-xl text-header mb-2">Kontakt</h3>
            <div className="space-y-1">
              <a
                href="mailto:ball@htl-hl.ac.at"
                className="block text-white/80 hover:text-white transition-colors duration-300"
              >
                email@email.com
              </a>
              <p className="text-white/80">
                Ballkomitee
              </p>
              <p className="text-white/80">
                Adresse
              </p>
              <p className="text-white/80">
                Adresse
              </p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <h3 className="font-pirata text-xl text-header mb-2">Folge uns</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/balldertechnik.hl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-white/80 hover:text-header 
                  transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Instagram</span>
              </a>
            </div>
          </div>

          <div className="text-center md:text-right space-y-2">
            <h3 className="font-pirata text-xl text-header mb-2">Rechtliches</h3>
            <div className="space-y-1">
              <Link
                href="/impressum"
                className="block text-white/80 hover:text-white transition-colors duration-300"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="block text-white/80 hover:text-white transition-colors duration-300"
              >
                Datenschutz
              </Link>
              <Link
                href="/agb"
                className="block text-white/80 hover:text-white transition-colors duration-300"
              >
                AGB
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-header/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Ball der Technik - HTL Hollabrunn
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-white/60 text-sm">Developed by</span>
              <a
                href="https://github.com/13nico01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-header hover:text-white transition-colors duration-300 text-sm"
              >
                Nico Zimmermann
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
