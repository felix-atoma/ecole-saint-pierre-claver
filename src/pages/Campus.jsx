import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { ChevronLeft, ChevronRight, Wifi, Shield, Users, BookOpen, Microscope, Computer, Library, Dumbbell, Heart } from 'lucide-react'
import SEO from '../components/SEO'

const Campus = () => {
  const { language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const campusContent = {
    fr: {
      title: "Vie sur le Campus",
      subtitle: "Un environnement d'apprentissage exceptionnel et sécurisé au cœur d'Accra",
      facilities: {
        title: "Installations Modernes",
        description: "Notre campus offre des infrastructures de classe mondiale conçues pour optimiser l'apprentissage et le développement personnel",
        items: [
          {
            name: "Salles de Classe Intelligentes",
            description: "Espaces pédagogiques équipés de tableaux interactifs, climatisation et technologies éducatives dernier cri",
            icon: BookOpen,
            features: ["Tableaux interactifs SMART", "Climatisation centrale", "Wi-Fi haute vitesse", "Mobilier ergonomique"]
          },
          {
            name: "Laboratoires Scientifiques Avancés",
            description: "Laboratoires de physique, chimie et biologie entièrement équipés avec matériel de sécurité professionnel",
            icon: Microscope,
            features: ["Équipement de microscopie", "Systèmes de sécurité", "Matériel expérimental", "Zone de préparation"]
          },
          {
            name: "Centre Technologique",
            description: "Salle informatique moderne avec stations de travail performantes et accès aux ressources numériques",
            icon: Computer,
            features: ["Ordinateurs dernière génération", "Logiciels éducatifs", "Imprimantes 3D", "Réseau sécurisé"]
          },
          {
            name: "Médiathèque Bilingue",
            description: "Centre de ressources avec plus de 10,000 ouvrages en français et anglais, espaces de lecture et de recherche",
            icon: Library,
            features: ["Collection bilingue", "Espace numérique", "Salles d'étude", "Service de prêt"]
          },
          {
            name: "Complexe Sportif",
            description: "Installations sportives complètes pour le développement physique et les compétitions inter-scolaires",
            icon: Dumbbell,
            features: ["Terrain de football", "Courts de basketball", "Piste d'athlétisme", "Salle de fitness"]
          },
          {
            name: "Espace de Développement Spirituel",
            description: "Chapelle et salles de méditation pour la croissance spirituelle et les activités pastorales",
            icon: Heart,
            features: ["Chapelle moderne", "Salles de catéchèse", "Espace de réflexion", "Activités communautaires"]
          }
        ]
      },
      activities: {
        title: "Vie Étudiante et Activités Parascolaires",
        description: "Un programme complet d'activités pour développer les talents, la créativité et le leadership des étudiants",
        items: [
          {
            name: "Programme Linguistique Avancé",
            description: "Clubs de langues avec laboratoire de langues numérique et partenariats internationaux",
            category: "Académique",
            benefits: ["Certifications DELF/DALF", "Échanges culturels", "Compétitions oratoires", "Journal étudiant bilingue"]
          },
          {
            name: "Arts et Culture Créative",
            description: "Programme artistique complet incluant musique, théâtre, danse traditionnelle et arts visuels",
            category: "Artistique",
            benefits: ["Orchestre scolaire", "Troupe de théâtre", "Ateliers d'art", "Expositions annuelles"]
          },
          {
            name: "Excellence Sportive",
            description: "Programme sportif compétitif avec entraîneurs professionnels et participation aux championnats nationaux",
            category: "Sportif",
            benefits: ["Équipes compétitives", "Entraînement spécialisé", "Compétitions interscolaires", "Développement athlétique"]
          },
          {
            name: "Innovation Technologique",
            description: "Club de robotique, programmation et innovation technologique avec projets pratiques",
            category: "Technologique",
            benefits: ["Compétitions de robotique", "Développement d'applications", "Projets innovants", "Partenariats tech"]
          },
          {
            name: "Leadership et Entrepreneuriat",
            description: "Programme de développement du leadership et d'initiation à l'entrepreneuriat pour les jeunes leaders",
            category: "Développement",
            benefits: ["Ateliers de leadership", "Projets entrepreneuriaux", "Mentorat professionnel", "Réseau d'anciens"]
          },
          {
            name: "Engagement Communautaire",
            description: "Programme de service communautaire et d'engagement social basé sur les valeurs catholiques",
            category: "Social",
            benefits: ["Projets humanitaires", "Sensibilisation sociale", "Bénévolat local", "Impact communautaire"]
          }
        ]
      },
      environment: {
        title: "Environnement d'Apprentissage Optimal",
        description: "Un cadre conçu pour favoriser le bien-être, la sécurité et la réussite académique de chaque étudiant",
        features: [
          {
            title: "Sécurité et Surveillance",
            description: "Campus entièrement sécurisé avec surveillance 24h/24, contrôle d'accès et personnel de sécurité formé",
            icon: Shield
          },
          {
            title: "Infrastructure Numérique",
            description: "Réseau Wi-Fi haute performance, plateforme d'apprentissage en ligne et ressources pédagogiques digitales",
            icon: Wifi
          },
          {
            title: "Services de Soutien",
            description: "Infirmerie médicale, cantine biologique, service de transport et accompagnement psychologique",
            icon: Users
          },
          {
            title: "Développement Durable",
            description: "Campus écologique avec système de recyclage, énergie solaire et programmes de sensibilisation environnementale"
          }
        ]
      },
      testimonials: {
        title: "Témoignages de Notre Communauté",
        items: [
          {
            name: "M. Kwame Adjo",
            role: "Parent d'élève",
            content: "L'environnement d'apprentissage à Saint Pierre Claver a transformé mon enfant en un étudiant confiant et curieux."
          },
          {
            name: "Mlle Ama Mensah",
            role: "Élève de Terminale",
            content: "Les installations modernes et les activités parascolaires m'ont permis de découvrir mes passions et talents."
          },
          {
            name: "Dr. François Kouassi",
            role: "Enseignant de Sciences",
            content: "Travailler dans un environnement aussi bien équipé et sécurisé rend l'enseignement vraiment inspirant."
          }
        ]
      }
    },
    en: {
      title: "Campus Life",
      subtitle: "An exceptional and secure learning environment in the heart of Accra",
      facilities: {
        title: "Modern Facilities",
        description: "Our campus offers world-class infrastructure designed to optimize learning and personal development",
        items: [
          {
            name: "Smart Classrooms",
            description: "Learning spaces equipped with interactive whiteboards, air conditioning, and cutting-edge educational technologies",
            icon: BookOpen,
            features: ["SMART interactive boards", "Central air conditioning", "High-speed Wi-Fi", "Ergonomic furniture"]
          },
          {
            name: "Advanced Science Laboratories",
            description: "Fully equipped physics, chemistry, and biology labs with professional safety equipment",
            icon: Microscope,
            features: ["Microscopy equipment", "Safety systems", "Experimental materials", "Preparation area"]
          },
          {
            name: "Technology Center",
            description: "Modern computer lab with high-performance workstations and access to digital resources",
            icon: Computer,
            features: ["Latest generation computers", "Educational software", "3D printers", "Secure network"]
          },
          {
            name: "Bilingual Media Library",
            description: "Resource center with over 10,000 books in French and English, reading and research spaces",
            icon: Library,
            features: ["Bilingual collection", "Digital space", "Study rooms", "Lending service"]
          },
          {
            name: "Sports Complex",
            description: "Complete sports facilities for physical development and inter-school competitions",
            icon: Dumbbell,
            features: ["Football field", "Basketball courts", "Athletics track", "Fitness room"]
          },
          {
            name: "Spiritual Development Space",
            description: "Chapel and meditation rooms for spiritual growth and pastoral activities",
            icon: Heart,
            features: ["Modern chapel", "Catechesis rooms", "Reflection space", "Community activities"]
          }
        ]
      },
      activities: {
        title: "Student Life and Extracurricular Activities",
        description: "A comprehensive activity program to develop students' talents, creativity, and leadership",
        items: [
          {
            name: "Advanced Language Program",
            description: "Language clubs with digital language lab and international partnerships",
            category: "Academic",
            benefits: ["DELF/DALF certifications", "Cultural exchanges", "Oratory competitions", "Bilingual student newspaper"]
          },
          {
            name: "Creative Arts and Culture",
            description: "Comprehensive arts program including music, theater, traditional dance, and visual arts",
            category: "Artistic",
            benefits: ["School orchestra", "Theater troupe", "Art workshops", "Annual exhibitions"]
          },
          {
            name: "Sports Excellence",
            description: "Competitive sports program with professional coaches and national championship participation",
            category: "Sports",
            benefits: ["Competitive teams", "Specialized training", "Interschool competitions", "Athletic development"]
          },
          {
            name: "Technological Innovation",
            description: "Robotics, programming and technological innovation club with practical projects",
            category: "Technological",
            benefits: ["Robotics competitions", "App development", "Innovative projects", "Tech partnerships"]
          },
          {
            name: "Leadership and Entrepreneurship",
            description: "Leadership development and entrepreneurship initiation program for young leaders",
            category: "Development",
            benefits: ["Leadership workshops", "Entrepreneurial projects", "Professional mentoring", "Alumni network"]
          },
          {
            name: "Community Engagement",
            description: "Community service and social engagement program based on Catholic values",
            category: "Social",
            benefits: ["Humanitarian projects", "Social awareness", "Local volunteering", "Community impact"]
          }
        ]
      },
      environment: {
        title: "Optimal Learning Environment",
        description: "A setting designed to promote the well-being, safety, and academic success of every student",
        features: [
          {
            title: "Security and Surveillance",
            description: "Fully secured campus with 24/7 surveillance, access control, and trained security personnel",
            icon: Shield
          },
          {
            title: "Digital Infrastructure",
            description: "High-performance Wi-Fi network, online learning platform, and digital educational resources",
            icon: Wifi
          },
          {
            title: "Support Services",
            description: "Medical infirmary, organic cafeteria, transport service, and psychological support",
            icon: Users
          },
          {
            title: "Sustainable Development",
            description: "Eco-friendly campus with recycling system, solar energy, and environmental awareness programs"
          }
        ]
      },
      testimonials: {
        title: "Testimonials from Our Community",
        items: [
          {
            name: "Mr. Kwame Adjo",
            role: "Parent",
            content: "The learning environment at Saint Peter Claver has transformed my child into a confident and curious student."
          },
          {
            name: "Miss Ama Mensah",
            role: "Grade 12 Student",
            content: "The modern facilities and extracurricular activities have allowed me to discover my passions and talents."
          },
          {
            name: "Dr. François Kouassi",
            role: "Science Teacher",
            content: "Working in such a well-equipped and secure environment makes teaching truly inspiring."
          }
        ]
      }
    }
  }

  // Carousel images data
  const carouselImages = [
    {
      src: "/campus/main-campus.jpg",
      alt: language === 'fr' ? "Vue principale du campus" : "Main campus view",
      title: language === 'fr' ? "Campus Moderne et Sécurisé" : "Modern and Secure Campus",
      description: language === 'fr' 
        ? "Un environnement d'apprentissage exceptionnel au cœur d'Accra"
        : "An exceptional learning environment in the heart of Accra"
    },
    {
      src: "/campus/science-labs.jpg",
      alt: language === 'fr' ? "Laboratoires scientifiques" : "Science laboratories",
      title: language === 'fr' ? "Laboratoires de Pointe" : "State-of-the-Art Laboratories",
      description: language === 'fr' 
        ? "Équipements modernes pour l'expérimentation scientifique pratique"
        : "Modern equipment for hands-on scientific experimentation"
    },
    {
      src: "/campus/sports-facilities.jpg",
      alt: language === 'fr' ? "Installations sportives" : "Sports facilities",
      title: language === 'fr' ? "Excellence Sportive" : "Sports Excellence",
      description: language === 'fr' 
        ? "Complexe sportif complet pour le développement physique des étudiants"
        : "Complete sports complex for students' physical development"
    },
    {
      src: "/campus/library.jpg",
      alt: language === 'fr' ? "Bibliothèque moderne" : "Modern library",
      title: language === 'fr' ? "Centre de Ressources Bilingue" : "Bilingual Resource Center",
      description: language === 'fr' 
        ? "Médiathèque moderne avec collections étendues en français et anglais"
        : "Modern media library with extensive collections in French and English"
    },
    {
      src: "/campus/student-activities.jpg",
      alt: language === 'fr' ? "Activités étudiantes" : "Student activities",
      title: language === 'fr' ? "Vie Étudiante Dynamique" : "Dynamic Student Life",
      description: language === 'fr' 
        ? "Programme complet d'activités parascolaires et de développement personnel"
        : "Comprehensive program of extracurricular activities and personal development"
    }
  ]

  const t = campusContent[language]

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

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description="Discover the modern campus facilities, student life, and learning environment at École Saint Pierre Claver in Accra, Ghana."
        keywords="campus life, school facilities, student activities, learning environment, modern campus"
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

      {/* Facilities */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t.facilities.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.facilities.description}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.facilities.items.map((facility, index) => {
              const IconComponent = facility.icon
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
                  <div className="bg-primary-cream rounded-lg p-6 mb-4 flex items-center justify-center group-hover:bg-primary-brown transition-colors duration-300">
                    <IconComponent className="text-primary-brown group-hover:text-white transition-colors duration-300" size={48} />
                  </div>
                  <h3 className="text-xl font-bold text-primary-brown mb-3">{facility.name}</h3>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-brown rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t.activities.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.activities.description}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.activities.items.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card border-l-4 border-primary-brown hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-3">
                  <span className="inline-block bg-primary-cream text-primary-brown px-3 py-1 rounded-full text-sm font-medium group-hover:bg-primary-brown group-hover:text-white transition-colors duration-300">
                    {activity.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary-brown mb-2">{activity.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                <ul className="space-y-1">
                  {activity.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-xs text-gray-500">
                      <div className="w-1 h-1 bg-primary-brown rounded-full"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="section-padding bg-primary-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t.environment.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.environment.description}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.environment.features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  {IconComponent && (
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-primary-brown text-white p-3 rounded-lg">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-primary-brown">{feature.title}</h3>
                    </div>
                  )}
                  {!IconComponent && (
                    <h3 className="text-xl font-bold text-primary-brown mb-4">{feature.title}</h3>
                  )}
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
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
                className="card text-center"
              >
                <div className="w-16 h-16 bg-primary-cream rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary-brown" size={32} />
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-primary-brown">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Tour CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-brown to-primary-dark text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'fr' ? 'Visitez Notre Campus' : 'Visit Our Campus'}
            </h2>
            <p className="text-xl text-primary-cream mb-8 max-w-2xl mx-auto">
              {language === 'fr' 
                ? "Venez découvrir par vous-même notre environnement d'apprentissage exceptionnel"
                : "Come discover our exceptional learning environment for yourself"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-brown px-8 py-4 rounded-lg font-semibold hover:bg-primary-cream transition-colors">
                {language === 'fr' ? 'Planifier une Visite' : 'Schedule a Tour'}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-brown transition-colors">
                {language === 'fr' ? 'Virtuelle Visite' : 'Virtual Tour'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Campus