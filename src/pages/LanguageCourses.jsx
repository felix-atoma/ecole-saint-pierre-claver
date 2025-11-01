import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { ChevronLeft, ChevronRight, Users, BookOpen, Clock, Award, Globe, MessageCircle, CheckCircle, Star } from 'lucide-react'
import SEO from '../components/SEO'

const LanguageCourses = () => {
  const { language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const languageCoursesContent = {
    fr: {
      title: "Cours de Langues",
      subtitle: "Programmes d'excellence en français, anglais et langues étrangères",
      hero: {
        description: "Maîtrisez les langues dans un environnement immersif avec des enseignants natifs et des méthodes pédagogiques innovantes"
      },
      programs: {
        title: "Nos Programmes Linguistiques",
        description: "Des cours adaptés à tous les niveaux, de débutant à avancé, avec préparation aux certifications internationales",
        items: [
          {
            name: "Français Langue Étrangère",
            level: "Tous niveaux",
            description: "Programme complet de français avec immersion culturelle et préparation aux certifications DELF/DALF",
            icon: Globe,
            features: ["Enseignants natifs", "Classes de 15 étudiants max", "Laboratoire de langues", "Certifications officielles"],
            duration: "2-4 semestres",
            certification: "DELF/DALF"
          },
          {
            name: "English Excellence Program",
            level: "Débutant à Avancé",
            description: "Programme intensif d'anglais avec focus sur la communication et préparation aux tests internationaux",
            icon: MessageCircle,
            features: ["Anglais académique et business", "Préparation IELTS/TOEFL", "Club de conversation", "Immersion culturelle"],
            duration: "2-4 semestres",
            certification: "IELTS/TOEFL"
          },
          {
            name: "Langues Africaines",
            level: "Tous niveaux",
            description: "Découverte et perfectionnement des langues locales : Twi, Ga, Ewe et autres langues du Ghana",
            icon: Users,
            features: ["Enseignants locaux experts", "Apprentissage culturel", "Pratique communautaire", "Certification locale"],
            duration: "1-2 semestres",
            certification: "Certificat Local"
          },
          {
            name: "Langues Étrangères",
            level: "Débutant à Intermédiaire",
            description: "Programmes d'allemand, espagnol, chinois mandarin et arabe pour l'ouverture internationale",
            icon: BookOpen,
            features: ["Petits groupes", "Méthode communicative", "Ressources multimédias", "Échanges culturels"],
            duration: "2-3 semestres",
            certification: "Certificats Internationaux"
          }
        ]
      },
      methodology: {
        title: "Notre Méthodologie Innovante",
        features: [
          {
            title: "Approche Communicative",
            description: "Apprentissage centré sur la communication réelle et les situations authentiques",
            icon: MessageCircle
          },
          {
            title: "Immersion Culturelle",
            description: "Intégration de la culture dans l'apprentissage linguistique pour une maîtrise complète",
            icon: Globe
          },
          {
            title: "Technologie Éducative",
            description: "Utilisation de plateformes digitales et laboratoires de langues dernier cri",
            icon: Award
          },
          {
            title: "Classes Réduites",
            description: "Groupes de 8 à 15 étudiants pour un accompagnement personnalisé optimal",
            icon: Users
          }
        ]
      },
      levels: {
        title: "Niveaux et Progression",
        items: [
          {
            level: "Débutant",
            description: "Acquisition des bases et communication simple",
            duration: "1 semestre",
            goals: ["Vocabulaire essentiel", "Grammaire de base", "Conversations simples"]
          },
          {
            level: "Intermédiaire",
            description: "Développement de la fluidité et précision",
            duration: "2 semestres",
            goals: ["Conversations courantes", "Compréhension écrite", "Expression écrite"]
          },
          {
            level: "Avancé",
            description: "Maîtrise et spécialisation linguistique",
            duration: "2-3 semestres",
            goals: ["Débats complexes", "Rédaction académique", "Préparation certification"]
          }
        ]
      },
      certifications: {
        title: "Certifications Internationales",
        description: "Préparation et passage des certifications reconnues mondialement",
        items: [
          {
            name: "DELF/DALF",
            language: "Français",
            levels: "A1 à C2",
            recognition: "Reconnu mondialement - Éducation française"
          },
          {
            name: "IELTS",
            language: "Anglais",
            levels: "Academic & General",
            recognition: "Reconnu internationalement - Universités et emploi"
          },
          {
            name: "TOEFL",
            language: "Anglais",
            levels: "iBT et Paper-based",
            recognition: "Standard pour les universités américaines"
          },
          {
            name: "Goethe-Zertifikat",
            language: "Allemand",
            levels: "A1 à C2",
            recognition: "Certificats officiels allemands"
          }
        ]
      },
      testimonials: {
        title: "Témoignages d'Étudiants",
        items: [
          {
            name: "Fatou Diop",
            course: "Français Avancé",
            content: "Grâce au programme DELF, j'ai obtenu le niveau B2 et suis maintenant acceptée dans une université française.",
            rating: 5
          },
          {
            name: "Kwame Asante",
            course: "English Excellence",
            content: "Le programme IELTS m'a permis d'obtenir 7.5 et de décrocher une bourse d'études au Canada.",
            rating: 5
          },
          {
            name: "Amina Mohammed",
            course: "Twi et Culture",
            content: "J'ai redécouvert ma culture à travers l'apprentissage du Twi avec des enseignants passionnants.",
            rating: 4
          }
        ]
      },
      enrollment: {
        title: "Inscription et Tarifs",
        periods: [
          "Rentrée de Septembre : Inscriptions jusqu'au 31 Août",
          "Rentrée de Janvier : Inscriptions jusqu'au 15 Décembre",
          "Session Intensive d'Été : Inscriptions en Mai"
        ],
        fees: {
          group: "Cours en groupe : 500-800 GHS/semestre",
          private: "Cours particuliers : 1000-1500 GHS/semestre",
          materials: "Frais de matériel : 150 GHS (inclus livres et ressources)"
        }
      }
    },
    en: {
      title: "Language Courses",
      subtitle: "Excellence programs in French, English and foreign languages",
      hero: {
        description: "Master languages in an immersive environment with native teachers and innovative teaching methods"
      },
      programs: {
        title: "Our Language Programs",
        description: "Courses adapted to all levels, from beginner to advanced, with preparation for international certifications",
        items: [
          {
            name: "French as a Foreign Language",
            level: "All levels",
            description: "Complete French program with cultural immersion and DELF/DALF certification preparation",
            icon: Globe,
            features: ["Native teachers", "Classes of 15 students max", "Language lab", "Official certifications"],
            duration: "2-4 semesters",
            certification: "DELF/DALF"
          },
          {
            name: "English Excellence Program",
            level: "Beginner to Advanced",
            description: "Intensive English program focusing on communication and international test preparation",
            icon: MessageCircle,
            features: ["Academic and business English", "IELTS/TOEFL preparation", "Conversation club", "Cultural immersion"],
            duration: "2-4 semesters",
            certification: "IELTS/TOEFL"
          },
          {
            name: "African Languages",
            level: "All levels",
            description: "Discovery and improvement of local languages: Twi, Ga, Ewe and other Ghanaian languages",
            icon: Users,
            features: ["Expert local teachers", "Cultural learning", "Community practice", "Local certification"],
            duration: "1-2 semesters",
            certification: "Local Certificate"
          },
          {
            name: "Foreign Languages",
            level: "Beginner to Intermediate",
            description: "German, Spanish, Mandarin Chinese and Arabic programs for international openness",
            icon: BookOpen,
            features: ["Small groups", "Communicative method", "Multimedia resources", "Cultural exchanges"],
            duration: "2-3 semesters",
            certification: "International Certificates"
          }
        ]
      },
      methodology: {
        title: "Our Innovative Methodology",
        features: [
          {
            title: "Communicative Approach",
            description: "Learning centered on real communication and authentic situations",
            icon: MessageCircle
          },
          {
            title: "Cultural Immersion",
            description: "Integration of culture in language learning for complete mastery",
            icon: Globe
          },
          {
            title: "Educational Technology",
            description: "Use of digital platforms and state-of-the-art language labs",
            icon: Award
          },
          {
            title: "Small Classes",
            description: "Groups of 8 to 15 students for optimal personalized support",
            icon: Users
          }
        ]
      },
      levels: {
        title: "Levels and Progression",
        items: [
          {
            level: "Beginner",
            description: "Acquisition of basics and simple communication",
            duration: "1 semester",
            goals: ["Essential vocabulary", "Basic grammar", "Simple conversations"]
          },
          {
            level: "Intermediate",
            description: "Development of fluency and accuracy",
            duration: "2 semesters",
            goals: ["Everyday conversations", "Reading comprehension", "Written expression"]
          },
          {
            level: "Advanced",
            description: "Mastery and linguistic specialization",
            duration: "2-3 semesters",
            goals: ["Complex debates", "Academic writing", "Certification preparation"]
          }
        ]
      },
      certifications: {
        title: "International Certifications",
        description: "Preparation and taking of worldwide recognized certifications",
        items: [
          {
            name: "DELF/DALF",
            language: "French",
            levels: "A1 to C2",
            recognition: "Worldwide recognized - French Education"
          },
          {
            name: "IELTS",
            language: "English",
            levels: "Academic & General",
            recognition: "Internationally recognized - Universities and employment"
          },
          {
            name: "TOEFL",
            language: "English",
            levels: "iBT and Paper-based",
            recognition: "Standard for American universities"
          },
          {
            name: "Goethe-Zertifikat",
            language: "German",
            levels: "A1 to C2",
            recognition: "Official German certificates"
          }
        ]
      },
      testimonials: {
        title: "Student Testimonials",
        items: [
          {
            name: "Fatou Diop",
            course: "Advanced French",
            content: "Thanks to the DELF program, I obtained level B2 and am now accepted into a French university.",
            rating: 5
          },
          {
            name: "Kwame Asante",
            course: "English Excellence",
            content: "The IELTS program helped me achieve 7.5 and secure a scholarship to study in Canada.",
            rating: 5
          },
          {
            name: "Amina Mohammed",
            course: "Twi and Culture",
            content: "I rediscovered my culture through learning Twi with passionate teachers.",
            rating: 4
          }
        ]
      },
      enrollment: {
        title: "Enrollment and Fees",
        periods: [
          "September Intake: Registration until August 31st",
          "January Intake: Registration until December 15th",
          "Summer Intensive Session: Registration in May"
        ],
        fees: {
          group: "Group courses: 500-800 GHS/semester",
          private: "Private lessons: 1000-1500 GHS/semester",
          materials: "Material fees: 150 GHS (includes books and resources)"
        }
      }
    }
  }

  // Carousel images data with Unsplash URLs
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: language === 'fr' ? "Cours de langue en groupe" : "Language class group",
      title: language === 'fr' ? "Apprentissage Collaboratif" : "Collaborative Learning",
      description: language === 'fr' 
        ? "Classes interactives avec des méthodes pédagogiques modernes"
        : "Interactive classes with modern teaching methods"
    },
    {
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: language === 'fr' ? "Laboratoire de langues" : "Language laboratory",
      title: language === 'fr' ? "Technologie Avancée" : "Advanced Technology",
      description: language === 'fr' 
        ? "Laboratoires de langues équipés des dernières technologies"
        : "Language labs equipped with latest technologies"
    },
    {
      src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: language === 'fr' ? "Enseignement personnalisé" : "Personalized teaching",
      title: language === 'fr' ? "Accompagnement Personnalisé" : "Personalized Support",
      description: language === 'fr' 
        ? "Sessions individuelles pour un suivi personnalisé de chaque étudiant"
        : "Individual sessions for personalized follow-up of each student"
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: language === 'fr' ? "Certifications internationales" : "International certifications",
      title: language === 'fr' ? "Excellence Académique" : "Academic Excellence",
      description: language === 'fr' 
        ? "Préparation aux certifications internationales reconnues mondialement"
        : "Preparation for internationally recognized certifications"
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: language === 'fr' ? "Immersion culturelle" : "Cultural immersion",
      title: language === 'fr' ? "Immersion Culturelle" : "Cultural Immersion",
      description: language === 'fr' 
        ? "Apprentissage linguistique enrichi par la découverte culturelle"
        : "Language learning enriched by cultural discovery"
    }
  ]

  const t = languageCoursesContent[language]

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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ))
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description="Language courses at École Saint Pierre Claver. French, English, African languages and foreign language programs with international certification preparation."
        keywords="language courses, French classes, English courses, DELF, IELTS, language learning, bilingual education"
      />

      {/* Hero Carousel */}
      <section className="relative h-96 lg:h-[500px] overflow-hidden">
        {/* Carousel Slides */}
        <div className="relative h-full">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                <div className="text-white max-w-4xl">
                  <h1 className="text-4xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                    {t.title}
                  </h1>
                  <p className="text-xl lg:text-2xl text-primary-cream drop-shadow-lg mb-4">
                    {t.subtitle}
                  </p>
                  <p className="text-lg text-primary-cream/90 mb-4 max-w-2xl mx-auto">
                    {t.hero.description}
                  </p>
                  <div className="border-t border-primary-cream/40 pt-4 mt-4">
                    <p className="text-lg lg:text-xl font-semibold drop-shadow-lg">
                      {image.title}
                    </p>
                    <p className="text-primary-cream/90 text-sm lg:text-base mt-2 max-w-2xl mx-auto">
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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label={language === 'fr' ? "Image précédente" : "Previous image"}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label={language === 'fr' ? "Image suivante" : "Next image"}
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
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
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-20"></div>
      </section>

      {/* Language Programs */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t.programs.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.programs.description}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.programs.items.map((program, index) => {
              const IconComponent = program.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="card group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary-cream rounded-lg p-3 group-hover:bg-primary-brown transition-colors duration-300">
                        <IconComponent className="text-primary-brown group-hover:text-white transition-colors duration-300" size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-brown">{program.name}</h3>
                        <span className="inline-block bg-primary-brown text-white px-2 py-1 rounded-full text-xs font-medium mt-1">
                          {program.level}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{program.duration}</div>
                      <div className="text-xs bg-primary-cream text-primary-brown px-2 py-1 rounded font-medium">
                        {program.certification}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2 mb-4">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary w-full">
                    {language === 'fr' ? 'En Savoir Plus' : 'Learn More'}
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t.methodology.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.methodology.features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-primary-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary-brown" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-brown mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Levels and Progression */}
      <section className="section-padding bg-primary-cream">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12"
          >
            {t.levels.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.levels.items.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="bg-primary-brown text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-primary-brown mb-3">{level.level}</h3>
                <p className="text-gray-600 mb-4">{level.description}</p>
                <div className="bg-primary-cream rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center space-x-2 text-sm text-primary-brown font-medium mb-2">
                    <Clock size={16} />
                    <span>{level.duration}</span>
                  </div>
                  <ul className="space-y-1 text-left">
                    {level.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="flex items-center space-x-2 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-brown rounded-full flex-shrink-0"></div>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t.certifications.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.certifications.description}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.certifications.items.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card border-l-4 border-primary-brown"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-primary-brown">{cert.name}</h3>
                  <span className="bg-primary-cream text-primary-brown px-2 py-1 rounded text-sm font-medium">
                    {cert.language}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Award size={16} />
                    <span><strong>{language === 'fr' ? 'Niveaux:' : 'Levels:'}</strong> {cert.levels}</span>
                  </div>
                  <p className="text-sm text-gray-600">{cert.recognition}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary-cream">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12"
          >
            {t.testimonials.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary-brown rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-primary-brown">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.course}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-brown to-primary-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.enrollment.title}</h2>
              <div className="space-y-4 mb-6">
                {t.enrollment.periods.map((period, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-primary-cream flex-shrink-0" />
                    <span>{period}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">{language === 'fr' ? 'Tarifs:' : 'Fees:'}</h4>
                <ul className="space-y-1 text-primary-cream">
                  <li>• {t.enrollment.fees.group}</li>
                  <li>• {t.enrollment.fees.private}</li>
                  <li>• {t.enrollment.fees.materials}</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'fr' ? 'Prêt à Commencer ?' : 'Ready to Start?'}
                </h3>
                <p className="text-primary-cream mb-6">
                  {language === 'fr' 
                    ? 'Rejoignez notre programme linguistique et ouvrez les portes du monde'
                    : 'Join our language program and open doors to the world'
                  }
                </p>
                <div className="space-y-4">
                  <button className="bg-white text-primary-brown w-full py-4 rounded-lg font-semibold hover:bg-primary-cream transition-colors">
                    {language === 'fr' ? 'S\'inscrire Maintenant' : 'Enroll Now'}
                  </button>
                  <button className="border-2 border-white text-white w-full py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-brown transition-colors">
                    {language === 'fr' ? 'Demander une Brochure' : 'Request Brochure'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LanguageCourses