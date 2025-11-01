import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'
import { ChevronLeft, ChevronRight, Users, Award, Clock, MapPin } from 'lucide-react'
import SEO from '../components/SEO'

const About = () => {
  const { language } = useLanguage()
  const t = content[language]
  const [currentSlide, setCurrentSlide] = useState(0)

  // SEO content for both languages
  const seoContent = {
    fr: {
      title: "À Propos - École Saint Pierre Claver | Notre Histoire et Mission",
      description: "Découvrez l'histoire, la mission et les valeurs de l'École Saint Pierre Claver. Fondée en 1995, notre institution offre une éducation d'excellence bilingue.",
      keywords: "école Saint Pierre Claver, histoire école, mission éducation, valeurs pédagogiques, école bilingue, excellence académique",
      ogImage: "/about/og-image-fr.jpg"
    },
    en: {
      title: "About - Saint Pierre Claver School | Our History and Mission",
      description: "Discover the history, mission, and values of Saint Pierre Claver School. Founded in 1995, our institution provides excellent bilingual education.",
      keywords: "Saint Pierre Claver School, school history, education mission, pedagogical values, bilingual school, academic excellence",
      ogImage: "/about/og-image-en.jpg"
    }
  }

  // Carousel images data
  const carouselImages = [
    {
      src: "/about/campus-view.jpg",
      alt: language === 'fr' ? "Vue aérienne du campus moderne de l'École Saint Pierre Claver" : "Aerial view of Saint Pierre Claver School's modern campus",
      title: language === 'fr' ? "Notre Campus Moderne" : "Our Modern Campus",
      description: language === 'fr' ? "Infrastructures éducatives de pointe dans un environnement vert et inspirant" : "State-of-the-art educational facilities in a green and inspiring environment"
    },
    {
      src: "/about/students-learning.jpg",
      alt: language === 'fr' ? "Étudiants engagés dans l'apprentissage interactif en classe" : "Students engaged in interactive classroom learning",
      title: language === 'fr' ? "Apprentissage Actif et Collaboratif" : "Active and Collaborative Learning",
      description: language === 'fr' ? "Pédagogie centrée sur l'étudiant favorisant l'engagement et la participation" : "Student-centered pedagogy promoting engagement and participation"
    },
    {
      src: "/about/science-lab.jpg",
      alt: language === 'fr' ? "Laboratoire scientifique équipé pour l'expérimentation pratique" : "Fully equipped science laboratory for hands-on experimentation",
      title: language === 'fr' ? "Laboratoires Scientifiques Avancés" : "Advanced Science Laboratories",
      description: language === 'fr' ? "Installations modernes pour la recherche et l'expérimentation scientifique" : "Modern facilities for scientific research and experimentation"
    },
    {
      src: "/about/sports-facilities.jpg",
      alt: language === 'fr' ? "Installations sportives complètes pour le développement physique" : "Comprehensive sports facilities for physical development",
      title: language === 'fr' ? "Excellence Sportive et Bien-être" : "Sports Excellence and Wellness",
      description: language === 'fr' ? "Programmes sportifs diversifiés pour le développement holistique" : "Diverse sports programs for holistic development"
    },
    {
      src: "/about/cultural-event.jpg",
      alt: language === 'fr' ? "Événement culturel mettant en valeur la diversité étudiante" : "Cultural event showcasing student diversity",
      title: language === 'fr' ? "Vie Culturelle et Artistique Riche" : "Rich Cultural and Artistic Life",
      description: language === 'fr' ? "Célébration de la diversité culturelle et expression artistique" : "Celebration of cultural diversity and artistic expression"
    }
  ]

  // School statistics
  const schoolStats = [
    {
      icon: Users,
      number: "1500+",
      label: language === 'fr' ? "Étudiants Actifs" : "Active Students"
    },
    {
      icon: Award,
      number: "25+",
      label: language === 'fr' ? "Ans d'Excellence" : "Years of Excellence"
    },
    {
      icon: Users,
      number: "120+",
      label: language === 'fr' ? "Enseignants Qualifiés" : "Qualified Teachers"
    },
    {
      icon: MapPin,
      number: "15+",
      label: language === 'fr' ? "Hectares de Campus" : "Hectares Campus"
    }
  ]

  // Leadership team
  const leadershipTeam = [
    {
      name: language === 'fr' ? "Dr. Marie Laurent" : "Dr. Marie Laurent",
      position: language === 'fr' ? "Directrice Générale" : "General Director",
      bio: language === 'fr' ? "20 ans d'expérience en éducation bilingue et innovation pédagogique" : "20 years experience in bilingual education and pedagogical innovation",
      image: "/about/leadership/director.jpg"
    },
    {
      name: language === 'fr' ? "Prof. Jean Kabore" : "Prof. Jean Kabore",
      position: language === 'fr' ? "Directeur Académique" : "Academic Director",
      bio: language === 'fr' ? "Spécialiste en curriculum développement et évaluation pédagogique" : "Specialist in curriculum development and educational assessment",
      image: "/about/leadership/academic-director.jpg"
    },
    {
      name: language === 'fr' ? "Mme Aminata Diallo" : "Mrs. Aminata Diallo",
      position: language === 'fr' ? "Directrice des Études Primaires" : "Primary Studies Director",
      bio: language === 'fr' ? "Expert en éducation préscolaire et primaire bilingue" : "Expert in preschool and primary bilingual education",
      image: "/about/leadership/primary-director.jpg"
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [carouselImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const currentSEO = seoContent[language]

  return (
    <div className="bg-gray-50">
      <SEO 
        title={currentSEO.title}
        description={currentSEO.description}
        keywords={currentSEO.keywords}
        ogImage={currentSEO.ogImage}
      />

      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": language === 'fr' ? "École Saint Pierre Claver" : "Saint Pierre Claver School",
          "description": currentSEO.description,
          "foundingDate": "1995",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Burkina Faso"
          },
          "telephone": "+226-XX-XX-XX-XX",
          "email": "contact@ecolestpierreclaver.bf",
          "url": "https://www.ecolestpierreclaver.bf",
          "logo": "/logo.png",
          "sameAs": [
            "https://www.facebook.com/ecolestpierreclaver",
            "https://www.instagram.com/ecolestpierreclaver"
          ]
        })}
      </script>

      {/* Hero Carousel */}
      <section className="relative h-96 lg:h-[600px] overflow-hidden" aria-label={language === 'fr' ? "Galerie du campus" : "Campus gallery"}>
        {/* Carousel Slides */}
        <div className="relative h-full">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={index !== currentSlide}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                <div className="text-white max-w-4xl">
                  <h1 className="text-4xl lg:text-6xl font-bold mb-4 drop-shadow-2xl">
                    {t.about.title}
                  </h1>
                  <p className="text-xl lg:text-2xl text-primary-cream drop-shadow-lg mb-6">
                    {t.about.founded} {t.about.founder}
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
                    <p className="text-2xl lg:text-3xl font-semibold mb-2 drop-shadow-lg">
                      {image.title}
                    </p>
                    <p className="text-lg text-primary-cream-light drop-shadow-lg">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
          aria-label={language === 'fr' ? "Image précédente" : "Previous image"}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
          aria-label={language === 'fr' ? "Image suivante" : "Next image"}
        >
          <ChevronRight size={28} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={language === 'fr' ? `Aller à l'image ${index + 1}` : `Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-20"></div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-white -mt-20 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {schoolStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-primary-brown to-primary-brown-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-primary-cream font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {language === 'fr' ? 'Notre Engagement Éducatif' : 'Our Educational Commitment'}
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              {language === 'fr' 
                ? "Découvrez les principes fondamentaux qui guident notre approche éducative et notre vision pour l'avenir"
                : "Discover the fundamental principles that guide our educational approach and our vision for the future"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-primary-brown"
            >
              <div className="bg-gradient-to-br from-primary-brown to-primary-dark w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary-brown mb-6">
                {t.about.mission.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {t.about.mission.text}
              </p>
              <ul className="space-y-3">
                {[
                  language === 'fr' ? "Éducation bilingue d'excellence" : "Excellent bilingual education",
                  language === 'fr' ? "Développement intégral de la personne" : "Holistic personal development",
                  language === 'fr' ? "Innovation pédagogique continue" : "Continuous pedagogical innovation",
                  language === 'fr' ? "Service à la communauté" : "Community service"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-brown rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-secondary-gold"
            >
              <div className="bg-gradient-to-br from-secondary-gold to-secondary-dark w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white text-3xl">👁️</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary-brown mb-6">
                {t.about.vision.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {t.about.vision.text}
              </p>
              <ul className="space-y-3">
                {[
                  language === 'fr' ? "Leadership éducatif régional" : "Regional educational leadership",
                  language === 'fr' ? "Citoyens responsables et engagés" : "Responsible and engaged citizens",
                  language === 'fr' ? "Excellence académique reconnue" : "Recognized academic excellence",
                  language === 'fr' ? "Innovation et adaptation constante" : "Constant innovation and adaptation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-secondary-gold rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">{t.about.values.title}</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              {language === 'fr' 
                ? "Les principes fondamentaux qui guident chaque aspect de notre communauté éducative"
                : "The fundamental principles that guide every aspect of our educational community"
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.about.values.items.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-primary-cream to-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border-2 border-transparent hover:border-primary-brown/30 h-full flex flex-col">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 && '🌟'}
                    {index === 1 && '💡'}
                    {index === 2 && '🤝'}
                    {index === 3 && '🌍'}
                    {index === 4 && '📚'}
                  </div>
                  <h3 className="font-bold text-primary-brown text-lg mb-3 flex-grow">
                    {value}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' 
                      ? index === 0 ? "Poursuite constante de la qualité et de l'excellence dans tous les domaines"
                      : index === 1 ? "Encouragement de la pensée critique et de la créativité"
                      : index === 2 ? "Collaboration et respect mutuel au sein de la communauté"
                      : index === 3 ? "Ouverture sur le monde et responsabilité globale"
                      : "Amour de l'apprentissage et développement continu"
                      : index === 0 ? "Constant pursuit of quality and excellence in all areas"
                      : index === 1 ? "Encouragement of critical thinking and creativity"
                      : index === 2 ? "Collaboration and mutual respect within the community"
                      : index === 3 ? "Global awareness and responsibility"
                      : "Love of learning and continuous development"
                    }
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">
                {language === 'fr' ? 'Notre Histoire Inspirante' : 'Our Inspiring History'}
              </h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                {language === 'fr' 
                  ? "Un parcours d'excellence éducative depuis notre fondation en 1995"
                  : "A journey of educational excellence since our foundation in 1995"
                }
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  year: "1995",
                  title: language === 'fr' ? "Fondation" : "Foundation",
                  description: language === 'fr' 
                    ? "Création de l'école avec 50 étudiants et une vision d'excellence éducative" 
                    : "School founded with 50 students and a vision for educational excellence",
                  image: "/about/history/foundation.jpg"
                },
                {
                  year: "2005",
                  title: language === 'fr' ? "Expansion" : "Expansion",
                  description: language === 'fr' 
                    ? "Lancement du programme bilingue et agrandissement des infrastructures" 
                    : "Bilingual program launched and infrastructure expansion",
                  image: "/about/history/expansion.jpg"
                },
                {
                  year: "2020",
                  title: language === 'fr' ? "Excellence" : "Excellence",
                  description: language === 'fr' 
                    ? "Reconnaissance nationale comme établissement d'excellence éducative" 
                    : "National recognition as an institution of educational excellence",
                  image: "/about/history/excellence.jpg"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                    <div className="bg-gradient-to-br from-primary-brown to-primary-dark text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {milestone.year}
                    </div>
                    <h3 className="font-bold text-primary-brown text-xl mb-4">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {language === 'fr' ? 'Notre Équipe de Direction' : 'Our Leadership Team'}
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              {language === 'fr' 
                ? "Des professionnels dévoués guidant notre institution vers l'excellence"
                : "Dedicated professionals guiding our institution toward excellence"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-brown to-primary-dark rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-bold text-primary-brown text-xl mb-2">
                    {member.name}
                  </h3>
                  <p className="text-secondary-gold font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-brown to-primary-brown-dark text-white">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold mb-6"
          >
            {language === 'fr' 
              ? 'Prêt à Rejoindre Notre Communauté Éducative?' 
              : 'Ready to Join Our Educational Community?'
            }
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-primary-cream mb-8 max-w-2xl mx-auto"
          >
            {language === 'fr'
              ? "Découvrez comment nous pouvons accompagner l'épanouissement académique et personnel de votre enfant"
              : "Discover how we can support your child's academic and personal development"
            }
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-white text-primary-brown px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-cream hover:text-primary-brown-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
              {language === 'fr' ? 'Demander une Visite' : 'Schedule a Visit'}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-brown transition-all duration-300">
              {language === 'fr' ? 'Télécharger la Brochure' : 'Download Brochure'}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About