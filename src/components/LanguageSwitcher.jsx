import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 border border-primary-brown rounded-lg hover:bg-primary-brown hover:text-white transition-all duration-300 font-medium group"
    >
      <span className="font-medium text-sm">{language === 'fr' ? 'FR' : 'EN'}</span>
      <span className="text-sm group-hover:scale-110 transition-transform">
        {language === 'fr' ? '🇫🇷' : '🇬🇧'}
      </span>
    </button>
  )
}

export default LanguageSwitcher