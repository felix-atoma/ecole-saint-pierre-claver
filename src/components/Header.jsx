import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight, Phone, MapPin, Mail, Clock, User, BookOpen, Languages, GraduationCap, Users, Watch } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const { language } = useLanguage()
  const location = useLocation()
  const t = content[language]

  // Logo image path
  const logoImage = "/logo.jpg"

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString(language === 'fr' ? 'fr-FR' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: language !== 'fr'
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [language])

  // Top bar navigation - Quick links and essential info
  const topNavigation = {
    quickLinks: [
      { 
        path: '/language-courses', 
        label: language === 'fr' ? 'Cours de Langues' : 'Language Courses',
        icon: Languages
      },
      { 
        path: '/admissions', 
        label: language === 'fr' ? 'Admissions' : 'Admissions',
        icon: User
      },
      { 
        path: '/portal', 
        label: language === 'fr' ? 'Portail Élèves' : 'Student Portal',
        icon: BookOpen
      },
      { 
        path: '/parents-portal', 
        label: language === 'fr' ? 'Portail Parents' : 'Parents Portal',
        icon: Users
      }
    ]
  }

  // Main navigation - Academic structure
  const mainNavigation = {
    academics: {
      label: t.nav.academics,
      path: '/academics',
      icon: GraduationCap,
      items: [
        { 
          path: '/academics#nursery', 
          label: language === 'fr' ? 'Maternelle' : 'Nursery',
          description: language === 'fr' ? '2-5 ans' : 'Ages 2-5'
        },
        { 
          path: '/academics#primary', 
          label: language === 'fr' ? 'École Primaire' : 'Primary School',
          description: language === 'fr' ? '6-11 ans' : 'Ages 6-11'
        },
        { 
          path: '/academics#middle', 
          label: language === 'fr' ? 'Collège' : 'Middle School',
          description: language === 'fr' ? '12-15 ans' : 'Ages 12-15'
        },
        { 
          path: '/academics#high', 
          label: language === 'fr' ? 'Lycée' : 'High School',
          description: language === 'fr' ? '16-18 ans' : 'Ages 16-18'
        },
        { 
          path: '/academics#languages', 
          label: language === 'fr' ? 'Centre de Langues' : 'Language Center',
          description: language === 'fr' ? 'Adultes & Professionnels' : 'Adults & Professionals',
          highlight: true
        }
      ]
    },
    admissions: {
      label: t.nav.admissions,
      path: '/admissions',
      icon: User,
      items: [
        { 
          path: '/admissions#process', 
          label: language === 'fr' ? 'Processus d\'Admission' : 'Admission Process'
        },
        { 
          path: '/admissions#requirements', 
          label: language === 'fr' ? 'Conditions d\'Admission' : 'Admission Requirements'
        },
        { 
          path: '/admissions#fees', 
          label: language === 'fr' ? 'Frais de Scolarité' : 'Tuition Fees'
        },
        { 
          path: '/admissions#scholarships', 
          label: language === 'fr' ? 'Bourses' : 'Scholarships'
        },
        { 
          path: '/apply', 
          label: language === 'fr' ? 'Postuler en Ligne' : 'Apply Online',
          highlight: true
        }
      ]
    },
    campus: {
      label: language === 'fr' ? 'Vie du Campus' : 'Campus Life',
      path: '/campus',
      icon: Users,
      items: [
        { 
          path: '/campus#facilities', 
          label: language === 'fr' ? 'Installations' : 'Facilities'
        },
        { 
          path: '/campus#activities', 
          label: language === 'fr' ? 'Activités' : 'Activities'
        },
        { 
          path: '/campus#sports', 
          label: language === 'fr' ? 'Sports' : 'Sports'
        },
        { 
          path: '/campus#arts', 
          label: language === 'fr' ? 'Arts & Culture' : 'Arts & Culture'
        },
        { 
          path: '/events', 
          label: language === 'fr' ? 'Événements' : 'Events'
        }
      ]
    },
    about: {
      label: t.nav.about,
      path: '/about',
      icon: BookOpen,
      items: [
        { 
          path: '/about#history', 
          label: language === 'fr' ? 'Notre Histoire' : 'Our History'
        },
        { 
          path: '/about#mission', 
          label: language === 'fr' ? 'Mission & Vision' : 'Mission & Vision'
        },
        { 
          path: '/about#leadership', 
          label: language === 'fr' ? 'Direction' : 'Leadership'
        },
        { 
          path: '/about#faculty', 
          label: language === 'fr' ? 'Corps Enseignant' : 'Faculty'
        },
        { 
          path: '/about#alumni', 
          label: language === 'fr' ? 'Anciens Élèves' : 'Alumni'
        }
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
    <>
      {/* Top Navigation Bar - Essential Info & Quick Links */}
      <div className="bg-primary-brown text-white py-2 border-b border-primary-brown/20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
            {/* Contact Information */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 text-xs">
              <div className="flex items-center space-x-2">
                <Phone size={12} className="flex-shrink-0" />
                <span>+233 24 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={12} className="flex-shrink-0" />
                <span>info@stpierreclaver.edu.gh</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={12} className="flex-shrink-0" />
                <span>{language === 'fr' ? 'Lun - Ven: 7h30 - 17h00' : 'Mon - Fri: 7:30AM - 5:00PM'}</span>
              </div>
            </div>

            {/* Quick Links & Language Switcher */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              {/* Live Clock */}
              <div className="hidden md:flex items-center space-x-2 bg-primary-brown/80 px-3 py-1 rounded-full border border-primary-cream/20">
                <Watch size={12} className="text-primary-cream" />
                <span className="text-primary-cream text-xs font-medium">{currentTime}</span>
              </div>

              {/* Quick Links */}
              <div className="hidden lg:flex items-center space-x-4">
                {topNavigation.quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center space-x-1 text-primary-cream-light hover:text-white transition-colors duration-200 text-xs font-medium hover:bg-primary-brown/50 px-2 py-1 rounded"
                  >
                    <link.icon size={12} />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
              
              {/* Language Switcher */}
              <div className="flex items-center">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
        isScrolled ? 'shadow-xl border-gray-200' : 'shadow-lg border-gray-100'
      }`}>
        <div className="container-custom">
          {/* Main Header Row */}
          <div className="flex justify-between items-center py-3">
            {/* Logo & School Name */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group flex-shrink-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {/* Professional Logo Container */}
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg border border-gray-200 shadow-md group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                <img 
                  src={logoImage} 
                  alt={language === 'fr' ? "Logo École Saint Pierre Claver" : "Saint Peter Claver School Logo"}
                  className="w-10 h-10 object-contain p-1"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const fallback = e.target.nextSibling
                    fallback.style.display = 'flex'
                    fallback.classList.remove('hidden')
                  }}
                />
                {/* Elegant Fallback */}
                <div className="hidden w-10 h-10 bg-gradient-to-br from-primary-brown to-primary-dark rounded flex items-center justify-center text-white font-bold text-sm shadow-inner">
                  SPC
                </div>
              </div>
              
              {/* School Name */}
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-primary-brown leading-tight tracking-tight">
                  {language === 'fr' ? 'École Saint Pierre Claver' : 'Saint Peter Claver School'}
                </h1>
                <p className="text-xs text-gray-600 font-medium mt-0.5 tracking-wide">
                  {language === 'fr' ? 'Accra, Ghana - Excellence depuis 1970' : 'Accra, Ghana - Excellence since 1970'}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-1">
                {/* Home Link */}
                {simpleNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm flex items-center space-x-2 ${
                      location.pathname === item.path
                        ? 'bg-primary-brown text-white shadow-md'
                        : 'text-gray-700 hover:bg-primary-cream hover:text-primary-brown'
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}

                {/* Main dropdown navigation items */}
                {Object.entries(mainNavigation).map(([key, navItem]) => (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(key)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      to={navItem.path}
                      className={`px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm flex items-center space-x-2 group ${
                        isActivePath(navItem.path)
                          ? 'bg-primary-cream text-primary-brown'
                          : 'text-gray-700 hover:bg-primary-cream hover:text-primary-brown'
                      }`}
                    >
                      <navItem.icon size={16} />
                      <span>{navItem.label}</span>
                    </Link>

                    {/* Mega Dropdown Menu */}
                    {activeDropdown === key && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 py-3 z-50 animate-in fade-in-0 zoom-in-95">
                        <div className="space-y-1">
                          {navItem.items.map((subItem, index) => (
                            <div key={subItem.path}>
                              <Link
                                to={subItem.path}
                                className={`flex items-center justify-between px-4 py-2.5 transition-all duration-300 group text-sm mx-2 rounded-lg ${
                                  subItem.highlight 
                                    ? 'bg-gradient-to-r from-primary-brown to-primary-dark text-white hover:from-primary-dark hover:to-primary-brown' 
                                    : 'text-gray-700 hover:bg-primary-cream hover:text-primary-brown'
                                }`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="flex flex-col">
                                  <span className={`font-semibold ${subItem.highlight ? 'text-white' : ''}`}>
                                    {subItem.label}
                                  </span>
                                  {subItem.description && (
                                    <span className={`text-xs mt-0.5 ${
                                      subItem.highlight ? 'text-primary-cream' : 'text-gray-500'
                                    }`}>
                                      {subItem.description}
                                    </span>
                                  )}
                                </div>
                                <ChevronRight 
                                  size={14} 
                                  className={`transition-all duration-300 transform group-hover:translate-x-1 ${
                                    subItem.highlight ? 'text-white' : 'text-gray-400 group-hover:text-primary-brown'
                                  }`} 
                                />
                              </Link>
                              {index < navItem.items.length - 1 && !subItem.highlight && (
                                <div className="mx-6 border-t border-gray-100"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Contact Button */}
                <Link
                  to="/contact"
                  className={`px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm border flex items-center space-x-2 ${
                    location.pathname === '/contact'
                      ? 'bg-primary-brown text-white border-primary-brown shadow-md'
                      : 'text-primary-brown border-primary-brown hover:bg-primary-brown hover:text-white'
                  }`}
                >
                  <MapPin size={16} />
                  <span>{t.nav.contact}</span>
                </Link>
              </div>
            </nav>

            {/* CTA Section */}
            <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
              {/* Apply Now Button */}
              <Link
                to="/apply"
                className="px-5 py-2.5 bg-gradient-to-r from-primary-brown to-primary-dark text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap flex items-center space-x-2"
              >
                <User size={16} />
                <span>{language === 'fr' ? 'Postuler' : 'Apply Now'}</span>
              </Link>

              {/* Mobile Clock for larger screens */}
              <div className="hidden xl:flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg border border-gray-200">
                <Watch size={14} className="text-primary-brown" />
                <span className="text-gray-700 text-sm font-medium">{currentTime}</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center space-x-3">
              {/* Mobile Clock */}
              <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg border border-gray-200">
                <Watch size={14} className="text-primary-brown" />
                <span className="text-gray-700 text-sm font-medium">{currentTime}</span>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-lg bg-primary-cream text-primary-brown hover:bg-primary-brown hover:text-white transition-colors duration-300 shadow-md"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md shadow-2xl">
            <div className="py-4 space-y-2 max-h-[80vh] overflow-y-auto">
              {/* Quick Links for Mobile */}
              <div className="px-4 pb-3 border-b border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  {topNavigation.quickLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50 hover:bg-primary-cream hover:text-primary-brown transition-all duration-300 text-xs font-medium"
                    >
                      <link.icon size={14} />
                      <span className="text-xs">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Home Link */}
              {simpleNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-sm text-center ${
                    location.pathname === item.path
                      ? 'bg-primary-brown text-white shadow-md'
                      : 'text-gray-700 hover:bg-primary-cream hover:text-primary-brown'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Main navigation items for mobile */}
              {Object.entries(mainNavigation).map(([key, navItem]) => (
                <div key={key} className="space-y-1">
                  <Link
                    to={navItem.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-sm ${
                      isActivePath(navItem.path)
                        ? 'bg-primary-cream text-primary-brown'
                        : 'text-gray-700 hover:bg-primary-cream hover:text-primary-brown'
                    }`}
                  >
                    <navItem.icon size={16} />
                    <span>{navItem.label}</span>
                  </Link>
                  
                  {/* Mobile submenu */}
                  <div className="ml-6 space-y-1 border-l-2 border-primary-cream pl-3">
                    {navItem.items.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-3 py-2 transition-all duration-300 rounded text-xs ${
                          subItem.highlight
                            ? 'bg-gradient-to-r from-primary-brown to-primary-dark text-white font-semibold shadow-md'
                            : 'text-gray-600 hover:bg-primary-cream hover:text-primary-brown'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span>{subItem.label}</span>
                          {subItem.description && (
                            <span className="text-xs text-gray-500 mt-0.5">
                              {subItem.description}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Contact and Apply buttons for mobile */}
              <div className="space-y-2 px-4 pt-3 border-t border-gray-200">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-sm text-center border flex items-center justify-center space-x-2 ${
                    location.pathname === '/contact'
                      ? 'bg-primary-brown text-white border-primary-brown'
                      : 'text-primary-brown border-primary-brown hover:bg-primary-brown hover:text-white'
                  }`}
                >
                  <MapPin size={16} />
                  <span>{t.nav.contact}</span>
                </Link>
                
                <Link
                  to="/apply"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full px-4 py-3 bg-gradient-to-r from-primary-brown to-primary-dark text-white rounded-lg font-semibold text-sm text-center shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <User size={16} />
                  <span>{language === 'fr' ? 'Postuler Maintenant' : 'Apply Now'}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header