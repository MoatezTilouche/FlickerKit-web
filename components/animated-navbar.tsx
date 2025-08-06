"use client"

import { useState, useEffect } from "react"
import { Home, Wrench, Mail, Menu, X } from 'lucide-react'

export function AnimatedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/90 backdrop-blur-md border-b border-purple-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-700 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FK</span>
            </div>
            <span className="text-white font-bold text-lg">FlickerKit</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="nav-link group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Home</span>
            </button>
            <button
              onClick={() => scrollToSection('tools')}
              className="nav-link group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Wrench className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Tools</span>
            </button>
            <button
              onClick={() => scrollToSection('footer')}
              className="nav-link group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-purple-500/20">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => scrollToSection('tools')}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              <Wrench className="w-4 h-4" />
              <span>Tools</span>
            </button>
            <button
              onClick={() => scrollToSection('footer')}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #7c3aed, #0891b2);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  )
}
