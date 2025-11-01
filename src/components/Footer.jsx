import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const { language } = useLanguage()
  const t = content[language]

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/stpierreclaver",
      label: "Facebook"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/stpierreclaver",
      label: "Twitter"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/stpierreclaver",
      label: "Instagram"
    },
    {
      icon: Youtube,
      href: "https://youtube.com/stpierreclaver",
      label: "YouTube"
    }
  ]

  return (
    <footer className="bg-primary-brown text-white relative overflow-hidden">
      {/* Ship Wave Top Edge */}
      <div className="absolute top-0 left-0 right-0 h-8 transform -translate-y-1/2 z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path 
            d="M0,0 V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-primary-brown"
          ></path>
          <path 
            d="M0,0 V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-primary-brown"
          ></path>
          <path 
            d="M0,0 V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-primary-brown"
          ></path>
        </svg>
      </div>

      {/* Net/Comb Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Horizontal Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, transparent 95%, white 95%),
            linear-gradient(to bottom, transparent 95%, white 95%)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0'
        }}></div>
        
        {/* Diagonal Pattern Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 49%, white 49%, white 51%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, white 49%, white 51%, transparent 51%)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.3
        }}></div>
      </div>

      {/* Ship Hull Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 transform translate-y-1/2 z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full rotate-180"
        >
          <path 
            d="M0,0 V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-primary-dark"
          ></path>
          <path 
            d="M0,0 V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-primary-dark"
          ></path>
          <path 
            d="M0,0 V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-primary-dark"
          ></path>
        </svg>
      </div>

      {/* Ship Mast Decoration */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center">
          {/* Mast */}
          <div className="w-1 h-16 bg-primary-cream/40 rounded-t-lg"></div>
          {/* Sail */}
          <div className="w-8 h-6 bg-primary-cream/30 rounded-lg -mt-1 transform -rotate-12"></div>
          {/* Flag */}
          <div className="w-4 h-3 bg-gradient-to-r from-primary-cream to-white rounded-sm -mt-2 ml-2 transform rotate-12 shadow-sm"></div>
        </div>
      </div>

      {/* Side Ship Decorations */}
      <div className="absolute bottom-8 left-8 transform -rotate-12 opacity-60">
        <div className="flex flex-col items-center">
          <div className="w-1 h-8 bg-primary-cream/30 rounded-t"></div>
          <div className="w-4 h-3 bg-primary-cream/20 rounded-sm -mt-1"></div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 transform rotate-12 opacity-60">
        <div className="flex flex-col items-center">
          <div className="w-1 h-8 bg-primary-cream/30 rounded-t"></div>
          <div className="w-4 h-3 bg-primary-cream/20 rounded-sm -mt-1"></div>
        </div>
      </div>

      <div className="container-custom section-padding relative z-10 pt-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-brown font-bold text-xl shadow-lg">
                SPC
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {language === 'fr' ? 'École Saint Pierre Claver' : 'Saint Peter Claver School'}
                </h3>
                <p className="text-primary-cream text-lg">
                  {language === 'fr' 
                    ? "Établissement d'enseignement bilingue catholique d'excellence depuis 1970"
                    : "Premier Catholic bilingual educational institution since 1970"
                  }
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-primary-cream">
                <MapPin size={18} className="flex-shrink-0" />
                <span className="text-sm">Mataheko, Accra, Ghana<br />Holy Family Catholic Parish</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-cream">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm">+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-cream">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm">info@stpierreclaver.edu.gh</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-bold mb-3 text-primary-cream">
                {language === 'fr' ? 'Suivez-nous' : 'Follow Us'}
              </h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-cream/20 hover:bg-primary-cream/30 text-white p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 pb-2 border-b-2 border-primary-cream/30 inline-block">
              {language === 'fr' ? 'Liens Rapides' : 'Quick Links'}
            </h4>
            <div className="space-y-3">
              <Link
                to="/about"
                className="block text-primary-cream hover:text-white transition-all duration-300 hover:translate-x-2"
              >
                {t.nav.about}
              </Link>
              <Link
                to="/academics"
                className="block text-primary-cream hover:text-white transition-all duration-300 hover:translate-x-2"
              >
                {t.nav.academics}
              </Link>
              <Link
                to="/admissions"
                className="block text-primary-cream hover:text-white transition-all duration-300 hover:translate-x-2"
              >
                {t.nav.admissions}
              </Link>
              <Link
                to="/contact"
                className="block text-primary-cream hover:text-white transition-all duration-300 hover:translate-x-2"
              >
                {t.nav.contact}
              </Link>
              <Link
                to="/apply"
                className="block text-white bg-primary-dark hover:bg-primary-brown px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 mt-4 text-center"
              >
                {language === 'fr' ? 'Postuler' : 'Apply Now'}
              </Link>
            </div>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 pb-2 border-b-2 border-primary-cream/30 inline-block">
              {language === 'fr' ? 'Académique' : 'Academics'}
            </h4>
            <div className="space-y-3">
              <Link
                to="/academics"
                className="block text-primary-cream hover:text-white transition-all duration-300 hover:translate-x-2"
              >
                {language === 'fr' ? 'Programmes' : 'Programs'}
              </Link>
              <Link
                to="/faculty"
                className="block text-primary-cream hover:text-white transition-all duration-300 hover:translate-x-2"
              >
                {language === 'fr' ? 'Notre Équipe' : 'Our Faculty'}
              </Link>
              <Link
                to="/admissions"
                className="block text-primary-cream hover:text-white transition-all duration-300 hover:translate-x-2"
              >
                {language === 'fr' ? 'Procédure Admission' : 'Admission Process'}
              </Link>
              <Link
                to="/campus"
                className="block text-primary-cream hover:text-white transition-all duration-300 hover:translate-x-2"
              >
                {language === 'fr' ? 'Vie sur le Campus' : 'Campus Life'}
              </Link>
              <Link
                to="/events"
                className="block text-primary-cream hover:text-white transition-all duration-300 hover:translate-x-2"
              >
                {t.nav.events}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-cream/30 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-primary-cream">
                &copy; 2024 {language === 'fr' ? 'École Saint Pierre Claver' : 'Saint Peter Claver School'}. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-cream">
              <Link to="/privacy" className="hover:text-white transition-colors duration-300">
                {language === 'fr' ? 'Confidentialité' : 'Privacy Policy'}
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-300">
                {language === 'fr' ? "Conditions d'utilisation" : 'Terms of Service'}
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors duration-300">
                {language === 'fr' ? 'Plan du site' : 'Sitemap'}
              </Link>
            </div>

            <div className="text-primary-cream text-sm">
              <strong>{language === 'fr' ? 'Couleurs:' : 'Colors:'}</strong> Crème & Marron
            </div>
          </div>
        </div>
      </div>

      {/* Water Ripple Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-4 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-primary-dark/20 rounded-t-full transform translate-y-1/2"></div>
        <div className="absolute bottom-0 left-4 right-4 h-6 bg-primary-dark/15 rounded-t-full transform translate-y-1/2"></div>
        <div className="absolute bottom-0 left-8 right-8 h-4 bg-primary-dark/10 rounded-t-full transform translate-y-1/2"></div>
      </div>
    </footer>
  )
}

export default Footer