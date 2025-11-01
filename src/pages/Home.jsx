import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'
import AnimatedCounter from '../components/AnimatedCounter'
import SEO from '../components/SEO'

const Home = () => {
  const { language } = useLanguage()
  const t = content[language]
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  // Professional school images for the hero carousel
  const heroImages = [
    {
      id: 1,
      title: language === 'fr' ? 'Campus Moderne' : 'Modern Campus',
      description: language === 'fr' ? 'Notre environnement d\'apprentissage exceptionnel' : 'Our exceptional learning environment',
      placeholder: '🏫'
    },
    {
      id: 2,
      title: language === 'fr' ? 'Éducation Bilingue' : 'Bilingual Education',
      description: language === 'fr' ? 'Excellence académique en français et anglais' : 'Academic excellence in French and English',
      placeholder: '🌍'
    },
    {
      id: 3,
      title: language === 'fr' ? 'Vie Scolaire' : 'School Life',
      description: language === 'fr' ? 'Activités parascolaires enrichissantes' : 'Enriching extracurricular activities',
      placeholder: '🎓'
    },
    {
      id: 4,
      title: language === 'fr' ? 'Communauté' : 'Community',
      description: language === 'fr' ? 'Une communauté éducative solidaire' : 'A supportive educational community',
      placeholder: '👨‍👩‍👧‍👦'
    }
  ]

  // Programs data for the colorful bar
  const programs = [
    {
      name: language === 'fr' ? 'Arts & Culture' : 'Arts & Culture',
      color: 'from-purple-500 to-pink-500',
      percentage: 35,
      icon: '🎨',
      description: language === 'fr' ? 'Expression créative et développement artistique' : 'Creative expression and artistic development'
    },
    {
      name: language === 'fr' ? 'Sciences & Innovation' : 'Sciences & Innovation',
      color: 'from-blue-500 to-cyan-500',
      percentage: 40,
      icon: '🔬',
      description: language === 'fr' ? 'Recherche scientifique et pensée innovante' : 'Scientific research and innovative thinking'
    },
    {
      name: language === 'fr' ? 'Centre de Langues' : 'Language Center',
      color: 'from-green-500 to-emerald-500',
      percentage: 25,
      icon: '🌐',
      description: language === 'fr' ? 'Maîtrise multilingue et compétences globales' : 'Multilingual mastery and global skills'
    }
  ]

  // Auto-rotate slides every 5 seconds with progress tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
      setProgress(0) // Reset progress when slide changes
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Progress animation for the circular indicator
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0
        }
        return prev + 1
      })
    }, 50) // Update every 50ms for smooth animation

    return () => clearInterval(progressInterval)
  }, [currentSlide])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  }

  // Calculate the circumference for the circular progress (2 * π * r)
  const circumference = 2 * Math.PI * 40 // radius of 40

  return (
    <div>
      <SEO 
        title={t.home.title}
        description={t.home.description}
        keywords="bilingual school, Catholic education, Ghana, French English"
      />

      {/* Hero Section with Image Carousel */}
      <section className="relative h-screen overflow-hidden bg-gray-900">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-brown/80 to-primary-dark/60 z-10"></div>
              
              {/* Placeholder for image - in real implementation, replace with actual images */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-brown to-primary-dark">
                <div className="text-white text-center z-20">
                  <div className="text-8xl mb-4">{heroImages[currentSlide].placeholder}</div>
                  <h3 className="text-2xl font-bold mb-2">{heroImages[currentSlide].title}</h3>
                  <p className="text-lg opacity-90">{heroImages[currentSlide].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center max-w-4xl mx-auto text-white"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
              >
                {t.home.title}
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-2xl lg:text-3xl mb-8 italic text-primary-cream drop-shadow-lg"
              >
                {t.home.subtitle}
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="text-xl lg:text-2xl mb-12 leading-relaxed text-gray-100 max-w-3xl mx-auto drop-shadow"
              >
                {t.home.description}
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Link to="/about" className="btn-primary bg-white text-primary-brown hover:bg-primary-cream hover:text-primary-dark text-lg px-8 py-4">
                  {t.home.cta1}
                </Link>
                <Link to="/contact" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-brown text-lg px-8 py-4">
                  {t.home.cta2}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Circular Progress Indicator */}
        <div className="absolute bottom-8 right-8 z-30 hidden lg:block">
          <div className="relative w-24 h-24">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="8"
                fill="transparent"
              />
              {/* Progress circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                stroke="white"
                strokeWidth="8"
                fill="transparent"
                strokeLinecap="round"
                initial={{ strokeDashoffset: circumference }}
                animate={{ 
                  strokeDashoffset: circumference - (progress / 100) * circumference 
                }}
                transition={{ duration: 0.1 }}
                strokeDasharray={circumference}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
              {currentSlide + 1}/{heroImages.length}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setProgress(0)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-sm flex flex-col items-center"
          >
            <span className="mb-2">{language === 'fr' ? 'Découvrir' : 'Discover'}</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Programs Distribution Bar */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title mb-4 text-center"
          >
            {language === 'fr' ? 'Nos Domaines d\'Excellence' : 'Our Areas of Excellence'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle mb-12 text-center"
          >
            {language === 'fr' 
              ? 'Répartition de nos programmes académiques innovants'
              : 'Distribution of our innovative academic programs'
            }
          </motion.p>

          {/* Colorful Programs Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            {/* Main Distribution Bar */}
            <div className="flex h-16 rounded-2xl overflow-hidden shadow-lg mb-8">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${program.percentage}%` }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`h-full bg-gradient-to-r ${program.color} relative group cursor-pointer hover:brightness-110 transition-all duration-300`}
                  style={{ width: `${program.percentage}%` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm lg:text-base">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {program.percentage}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Program Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-2xl text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {program.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    {program.name}
                  </h3>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${program.color} bg-clip-text text-transparent mb-2`}>
                    {program.percentage}%
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className="text-gray-600 italic">
                {language === 'fr' 
                  ? 'Notre approche équilibrée combine créativité, innovation et compétences linguistiques pour une éducation complète'
                  : 'Our balanced approach combines creativity, innovation, and language skills for a comprehensive education'
                }
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-gradient-to-br from-primary-cream to-white relative">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title mb-16 text-center"
          >
            {language === 'fr' ? 'Notre Héritage en Chiffres' : 'Our Legacy in Numbers'}
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: 50, label: language === 'fr' ? 'Ans d\'Excellence' : 'Years of Excellence', suffix: '+' },
              { number: 2000, label: language === 'fr' ? 'Anciens Élèves' : 'Alumni', suffix: '+' },
              { number: 4, label: language === 'fr' ? 'Examens Nationaux' : 'National Exams' },
              { number: 5, label: language === 'fr' ? 'Valeurs Fondamentales' : 'Core Values' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105 border border-primary-cream">
                  <div className="text-4xl lg:text-5xl font-bold text-primary-brown mb-4">
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      duration={2.5}
                      delay={index * 0.2}
                    />
                  </div>
                  <div className="text-lg font-semibold text-gray-700">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title mb-4 text-center"
          >
            {language === 'fr' ? 'Pourquoi Nous Choisir' : 'Why Choose Us'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle mb-16 text-center"
          >
            {language === 'fr' 
              ? 'Découvrez ce qui fait de notre école un établissement d\'exception'
              : 'Discover what makes our school an exceptional institution'
            }
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: language === 'fr' ? 'Éducation Bilingue' : 'Bilingual Education',
                description: language === 'fr' 
                  ? 'Programme complet français-anglais avec allemand et espagnol, préparant les étudiants pour un monde globalisé.'
                  : 'Comprehensive French-English program with German and Spanish, preparing students for a globalized world.',
                icon: '🌍',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: language === 'fr' ? 'Excellence Académique' : 'Academic Excellence',
                description: language === 'fr'
                  ? 'Résultats exceptionnels aux examens nationaux avec un taux de réussite parmi les plus élevés du pays.'
                  : 'Outstanding results in national examinations with one of the highest success rates in the country.',
                icon: '🏆',
                color: 'from-amber-500 to-orange-500'
              },
              {
                title: language === 'fr' ? 'Valeurs Catholiques' : 'Catholic Values',
                description: language === 'fr'
                  ? 'Formation spirituelle et morale intégrée à l\'éducation pour développer des leaders complets et responsables.'
                  : 'Spiritual and moral formation integrated with education to develop well-rounded and responsible leaders.',
                icon: '⛪',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-primary-cream to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 h-full border border-gray-100">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-500`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-brown mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-brown to-primary-dark text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {language === 'fr' ? 'Prêt à Nous Rejoindre ?' : 'Ready to Join Us?'}
            </h2>
            <p className="text-xl text-primary-cream mb-8 max-w-2xl mx-auto">
              {language === 'fr' 
                ? 'Rejoignez notre communauté éducative et donnez à votre enfant une éducation d\'excellence'
                : 'Join our educational community and give your child an excellent education'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="bg-white text-primary-brown hover:bg-primary-cream px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                {language === 'fr' ? 'Postuler Maintenant' : 'Apply Now'}
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-brown px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home