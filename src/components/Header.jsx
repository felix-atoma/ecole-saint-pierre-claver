import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language } = useLanguage()
  const location = useLocation()
  const t = content[language]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Consolidated navigation - fewer, more focused dropdowns
  const navigation = {
    academics: {
      label: t.nav.academics,
      path: '/academics',
      items: [
        { path: '/academics', label: language === 'fr' ? 'Programmes' : 'Programs' },
        { path: '/academics#curriculum', label: language === 'fr' ? 'Curriculum' : 'Curriculum' },
        { path: '/academics#languages', label: language === 'fr' ? 'Langues' : 'Languages' },
        { path: '/faculty', label: language === 'fr' ? 'Notre Équipe' : 'Our Team' },
        { path: '/academics#exams', label: language === 'fr' ? 'Examens' : 'Exams' }
      ]
    },
    admissions: {
      label: t.nav.admissions,
      path: '/admissions',
      items: [
        { path: '/admissions', label: language === 'fr' ? 'Processus' : 'Process' },
        { path: '/admissions#requirements', label: language === 'fr' ? 'Exigences' : 'Requirements' },
        { path: '/admissions#deadlines', label: language === 'fr' ? 'Dates Limites' : 'Deadlines' },
        { path: '/apply', label: language === 'fr' ? 'Postuler en Ligne' : 'Apply Online', highlight: true },
        { path: '/campus', label: language === 'fr' ? 'Visite du Campus' : 'Campus Tour' }
      ]
    },
    community: {
      label: language === 'fr' ? 'Vie Scolaire' : 'School Life',
      path: '#',
      items: [
        { path: '/campus', label: language === 'fr' ? 'Vie sur le Campus' : 'Campus Life' },
        { path: '/events', label: t.nav.events },
        { path: '/gallery', label: t.nav.gallery },
        { path: '/news', label: t.nav.news },
        { path: '/faith', label: t.nav.faith }
      ]
    },
    about: {
      label: t.nav.about,
      path: '/about',
      items: [
        { path: '/about', label: language === 'fr' ? 'Notre Histoire' : 'Our History' },
        { path: '/about#mission', label: language === 'fr' ? 'Mission & Vision' : 'Mission & Vision' },
        { path: '/leadership', label: t.nav.leadership },
        { path: '/alumni', label: t.nav.alumni },
        { path: '/parents', label: language === 'fr' ? 'Espace Parents' : 'Parents Portal' }
      ]
    }
  }

  const simpleNavItems = [
    { path: '/', label: t.nav.home }
  ]

  const handleDropdownEnter = (key) => {
    setActiveDropdown(key)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-200' 
        : 'bg-white shadow-lg border-gray-200'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group flex-shrink-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-primary-brown to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
              SPC
            </div>
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-brown leading-tight">
                {language === 'fr' ? 'École Saint Pierre Claver' : 'Saint Peter Claver School'}
              </h1>
              <p className="text-sm text-gray-600 font-medium mt-1">{t.home.subtitle}</p>
            </div>
          </Link>

          {/* Desktop Navigation - Clean and organized */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-4">
              {/* Home Link */}
              {simpleNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                    location.pathname === item.path
                      ? 'bg-primary-brown text-white shadow-md'
                      : 'text-gray-700 hover:bg-primary-cream hover:text-primary-brown'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Main dropdown navigation items - Only 4 key categories */}
              {Object.entries(navigation).map(([key, navItem]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(key)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={navItem.path}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap group ${
                      isActivePath(navItem.path)
                        ? 'bg-primary-cream text-primary-brown'
                        : 'text-gray-700 hover:bg-primary-cream hover:text-primary-brown'
                    }`}
                  >
                    {navItem.label}
                  </Link>

                  {/* Dropdown Menu - Appears on hover */}
                  {activeDropdown === key && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 py-3 z-50">
                      {navItem.items.map((subItem, index) => (
                        <div key={subItem.path}>
                          <Link
                            to={subItem.path}
                            className={`flex items-center justify-between px-4 py-3 transition-all duration-300 group ${
                              subItem.highlight 
                                ? 'bg-primary-brown text-white hover:bg-primary-dark' 
                                : 'text-gray-700 hover:bg-primary-cream hover:text-primary-brown'
                            }`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className={`font-medium ${subItem.highlight ? 'text-white' : ''}`}>
                              {subItem.label}
                            </span>
                            <ChevronRight 
                              size={16} 
                              className={`transition-colors opacity-0 group-hover:opacity-100 ${
                                subItem.highlight ? 'text-white' : 'text-gray-400 group-hover:text-primary-brown'
                              }`} 
                            />
                          </Link>
                          {index < navItem.items.length - 1 && (
                            <div className="mx-4 border-t border-gray-100"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Contact Button */}
              <Link
                to="/contact"
                className={`px-5 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap border-2 ${
                  location.pathname === '/contact'
                    ? 'bg-primary-brown text-white border-primary-brown shadow-md'
                    : 'text-primary-brown border-primary-brown hover:bg-primary-brown hover:text-white'
                }`}
              >
                {t.nav.contact}
              </Link>

              {/* Apply Now Button - Prominent CTA */}
              <Link
                to="/apply"
                className="px-6 py-3 bg-gradient-to-r from-primary-brown to-primary-dark text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                {language === 'fr' ? 'Postuler' : 'Apply Now'}
              </Link>
            </div>
          </nav>

          {/* Language Switcher - Right side */}
          <div className="hidden lg:flex items-center flex-shrink-0 ml-4">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-lg bg-primary-cream text-primary-brown hover:bg-primary-brown hover:text-white transition-colors duration-300"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="py-6 space-y-3 max-h-[80vh] overflow-y-auto">
              {/* Home Link */}
              {simpleNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-6 py-4 rounded-lg font-semibold transition-all duration-300 text-lg text-center ${
                    location.pathname === item.path
                      ? 'bg-primary-brown text-white'
                      : 'text-gray-700 hover:bg-primary-cream hover:text-primary-brown'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Main navigation items for mobile */}
              {Object.entries(navigation).map(([key, navItem]) => (
                <div key={key} className="space-y-2">
                  <Link
                    to={navItem.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-6 py-4 rounded-lg font-semibold transition-all duration-300 text-lg text-center ${
                      isActivePath(navItem.path)
                        ? 'bg-primary-cream text-primary-brown'
                        : 'text-gray-700 hover:bg-primary-cream hover:text-primary-brown'
                    }`}
                  >
                    {navItem.label}
                  </Link>
                  
                  {/* Mobile submenu */}
                  <div className="ml-6 space-y-2 border-l-2 border-primary-cream">
                    {navItem.items.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 transition-colors duration-300 ${
                          subItem.highlight
                            ? 'bg-primary-brown text-white font-semibold mx-2 rounded-lg'
                            : 'text-gray-600 hover:text-primary-brown'
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Contact and Apply buttons for mobile */}
              <div className="space-y-3 px-4 pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full px-6 py-4 rounded-lg font-semibold transition-all duration-300 text-lg text-center border-2 ${
                    location.pathname === '/contact'
                      ? 'bg-primary-brown text-white border-primary-brown'
                      : 'text-primary-brown border-primary-brown hover:bg-primary-brown hover:text-white'
                  }`}
                >
                  {t.nav.contact}
                </Link>
                
                <Link
                  to="/apply"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full px-6 py-4 bg-gradient-to-r from-primary-brown to-primary-dark text-white rounded-lg font-semibold text-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {language === 'fr' ? 'Postuler Maintenant' : 'Apply Now'}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header