'use client'

import { useState, useEffect, useCallback, memo, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { throttle } from 'lodash'

const NavLink = memo(({ 
  item, 
  isActive, 
  onClick 
}: { 
  item: { label: string; href: string }
  isActive: boolean
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void 
}) => (
  <a
    href={item.href}
    onClick={(e) => onClick(e, item.href)}
    className={`relative group py-2 text-lg uppercase tracking-wider font-oswald cursor-pointer
      ${isActive ? 'text-white' : 'text-[#eaba5f]'}`}
  >
    {item.label}
    <span className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300
      ${isActive ? 'bg-white scale-x-100' : 'bg-[#eaba5f] scale-x-0 group-hover:scale-x-100'}`} />
  </a>
))

NavLink.displayName = 'NavLink'

const MobileNavLink = memo(({ 
  item, 
  isActive, 
  onClick 
}: { 
  item: { label: string; href: string }
  isActive: boolean
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void 
}) => (
  <a
    href={item.href}
    onClick={(e) => onClick(e, item.href)}
    className={`block px-3 py-2 rounded-md font-oswald text-lg uppercase tracking-wider transition-all duration-300 cursor-pointer
      ${isActive 
        ? 'text-white bg-black/50' 
        : 'text-[#eaba5f] hover:text-white hover:bg-black/30'}`}
  >
    <span className="relative">
      {item.label}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300
        ${isActive ? 'bg-white scale-x-100' : 'bg-[#eaba5f] scale-x-0'}`} />
    </span>
  </a>
))

MobileNavLink.displayName = 'MobileNavLink'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Hardfacts', href: '#facts' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'Impressionen', href: '#images' },
  { label: 'FAQ', href: '#faq' },
] as const

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)

  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY
      
      if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setScrolled(currentScrollY > 20)
        lastScrollY.current = currentScrollY

        const sections = navItems.map(item => item.href.substring(1))
        let newActiveSection = ''
        
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 100 && rect.bottom >= 100) {
              newActiveSection = section
              break
            }
          }
        }
        
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection)
        }
      }
    }, 100),
    [activeSection]
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    
    if (element) {
      const navHeight = 80 
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      setIsMenuOpen(false)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 z-[100] 
      ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-black/50 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
            <Link href="/" className="text-xl font-bold relative group">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={100} 
                height={100} 
                className="py-2 transition-all duration-300 group-hover:brightness-110"
                priority
              />
              <div className="absolute inset-0 bg-[#ff00ff]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-12">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  item={item}
                  isActive={activeSection === item.href.substring(1)}
                  onClick={handleNavClick}
                />
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-md text-[#eaba5f] hover:text-white focus:outline-none transition-colors duration-300 group"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              <div className="relative w-8 h-8">
                <span className={`absolute left-1/2 top-1/2 block w-6 h-0.5 -translate-x-1/2 transform transition-all duration-300
                  ${isMenuOpen ? 'rotate-45 bg-white' : '-translate-y-2 bg-[#eaba5f] group-hover:bg-white'}`} />
                <span className={`absolute left-1/2 top-1/2 block w-6 h-0.5 -translate-x-1/2 transform transition-all duration-300
                  ${isMenuOpen ? 'opacity-0' : 'bg-[#eaba5f] group-hover:bg-[#ff00ff]'}`} />
                <span className={`absolute left-1/2 top-1/2 block w-6 h-0.5 -translate-x-1/2 transform transition-all duration-300
                  ${isMenuOpen ? '-rotate-45 bg-white' : 'translate-y-2 bg-[#eaba5f] group-hover:bg-white'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden fixed inset-x-0 top-20 transition-all duration-300 ease-in-out transform 
          ${isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md border-t border-header/20 max-h-[calc(100vh-5rem)] overflow-auto">
          {navItems.map((item) => (
            <MobileNavLink
              key={item.label}
              item={item}
              isActive={activeSection === item.href.substring(1)}
              onClick={handleNavClick}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default memo(Navbar)
 