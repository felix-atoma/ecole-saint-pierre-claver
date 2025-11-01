import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Cross, Heart, Users, BookOpen, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import SEO from '../components/SEO'

const Faith = () => {
  const { language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const faithContent = {
    fr: {
      title: "Foi et Spiritualité",
      subtitle: "Intégrer les valeurs catholiques dans l'éducation pour former des leaders complets",
      mission: {
        title: "Mission Spirituelle",
        description: "Notre école, située au sein de la Paroisse Sainte Famille, s'engage à former des individus moralement droits, spirituellement épanouis et socialement responsables à travers l'intégration des valeurs catholiques dans chaque aspect de l'éducation."
      },
      values: {
        title: "Valeurs Spirituelles",
        items: [
          {
            icon: "❤️",
            title: "Amour et Compassion",
            description: "Cultiver l'amour du prochain et la compassion envers tous"
          },
          {
            icon: "⛪",
            title: "Foi et Espérance",
            description: "Renforcer la foi en Dieu et l'espérance en l'avenir"
          },
          {
            icon: "🤝",
            title: "Service et Charité",
            description: "Encourager le service désintéressé et les œuvres de charité"
          },
          {
            icon: "📖",
            title: "Vérité et Intégrité",
            description: "Poursuivre la vérité et vivre avec intégrité morale"
          }
        ]
      },
      activities: {
        title: "Activités Spirituelles",
        items: [
          {
            title: "Messe Quotidienne",
            description: "Célébration eucharistique matinale pour commencer la journée dans la prière",
            schedule: "Lundi - Vendredi: 7h30",
            location: "Chapelle de l'École"
          },
          {
            title: "Catéchèse",
            description: "Formation religieuse adaptée à chaque niveau scolaire",
            schedule: "Mercredi: 14h00 - 15h30",
            location: "Salles de Catéchèse"
          },
          {
            title: "Retraites Spirituelles",
            description: "Temps de réflexion et de renouveau spirituel pour les étudiants",
            schedule: "Trimestriel",
            location: "Centre de Retraite"
          },
          {
            title: "Service Communautaire",
            description: "Projets caritatifs et engagement social basés sur les valeurs évangéliques",
            schedule: "Samedi Bimensuel",
            location: "Communauté Locale"
          }
        ]
      },
      sacraments: {
        title: "Préparation aux Sacrements",
        description: "Nous accompagnons nos étudiants dans la préparation et la réception des sacrements",
        items: [
          {
            sacrament: "Baptême",
            description: "Pour les étudiants qui souhaitent rejoindre la famille chrétienne"
          },
          {
            sacrament: "Première Communion",
            description: "Préparation à la première réception de l'Eucharistie"
          },
          {
            sacrament: "Confirmation",
            description: "Affermissement dans la foi et l'engagement chrétien"
          },
          {
            sacrament: "Réconciliation",
            description: "Sacrement de pardon et de renouveau spirituel"
          }
        ]
      }
    },
    en: {
      title: "Faith & Spirituality",
      subtitle: "Integrating Catholic values in education to form well-rounded leaders",
      mission: {
        title: "Spiritual Mission",
        description: "Our school, located within the Holy Family Parish, is committed to forming morally upright, spiritually fulfilled, and socially responsible individuals through the integration of Catholic values in every aspect of education."
      },
      values: {
        title: "Spiritual Values",
        items: [
          {
            icon: "❤️",
            title: "Love and Compassion",
            description: "Cultivating love for neighbors and compassion towards all"
          },
          {
            icon: "⛪",
            title: "Faith and Hope",
            description: "Strengthening faith in God and hope for the future"
          },
          {
            icon: "🤝",
            title: "Service and Charity",
            description: "Encouraging selfless service and charitable works"
          },
          {
            icon: "📖",
            title: "Truth and Integrity",
            description: "Pursuing truth and living with moral integrity"
          }
        ]
      },
      activities: {
        title: "Spiritual Activities",
        items: [
          {
            title: "Daily Mass",
            description: "Morning Eucharistic celebration to begin the day in prayer",
            schedule: "Monday - Friday: 7:30 AM",
            location: "School Chapel"
          },
          {
            title: "Catechesis",
            description: "Religious formation adapted to each grade level",
            schedule: "Wednesday: 2:00 PM - 3:30 PM",
            location: "Catechesis Rooms"
          },
          {
            title: "Spiritual Retreats",
            description: "Times of reflection and spiritual renewal for students",
            schedule: "Quarterly",
            location: "Retreat Center"
          },
          {
            title: "Community Service",
            description: "Charitable projects and social engagement based on Gospel values",
            schedule: "Bi-weekly Saturday",
            location: "Local Community"
          }
        ]
      },
      sacraments: {
        title: "Sacrament Preparation",
        description: "We accompany our students in preparing for and receiving the sacraments",
        items: [
          {
            sacrament: "Baptism",
            description: "For students wishing to join the Christian family"
          },
          {
            sacrament: "First Communion",
            description: "Preparation for first reception of the Eucharist"
          },
          {
            sacrament: "Confirmation",
            description: "Strengthening in faith and Christian commitment"
          },
          {
            sacrament: "Reconciliation",
            description: "Sacrament of forgiveness and spiritual renewal"
          }
        ]
      }
    }
  }

  const t = faithContent[language]

  // Carousel images data
  const carouselImages = [
    {
      src: "/faith/chapel-interior.jpg",
      alt: language === 'fr' ? "Intérieur de la chapelle" : "Chapel interior",
      title: language === 'fr' ? "Notre Chapelle" : "Our Chapel",
      description: language === 'fr' 
        ? "Un lieu de prière et de recueillement pour toute la communauté scolaire"
        : "A place of prayer and reflection for the entire school community"
    },
    {
      src: "/faith/mass-celebration.jpg",
      alt: language === 'fr' ? "Célébration eucharistique" : "Eucharistic celebration",
      title: language === 'fr' ? "Messe Communautaire" : "Community Mass",
      description: language === 'fr' 
        ? "Célébrations eucharistiques rassemblant étudiants, enseignants et personnel"
        : "Eucharistic celebrations bringing together students, teachers, and staff"
    },
    {
      src: "/faith/catechism-class.jpg",
      alt: language === 'fr' ? "Classe de catéchisme" : "Catechism class",
      title: language === 'fr' ? "Formation Religieuse" : "Religious Formation",
      description: language === 'fr' 
        ? "Enseignement de la foi adapté à chaque groupe d'âge"
        : "Faith teaching adapted to each age group"
    },
    {
      src: "/faith/retreat-activities.jpg",
      alt: language === 'fr' ? "Activités de retraite" : "Retreat activities",
      title: language === 'fr' ? "Retraites Spirituelles" : "Spiritual Retreats",
      description: language === 'fr' 
        ? "Moments de réflexion profonde et de croissance spirituelle"
        : "Moments of deep reflection and spiritual growth"
    },
    {
      src: "/faith/community-service.jpg",
      alt: language === 'fr' ? "Service communautaire" : "Community service",
      title: language === 'fr' ? "Service et Charité" : "Service and Charity",
      description: language === 'fr' 
        ? "Mettre en pratique les valeurs évangéliques au service des autres"
        : "Putting Gospel values into practice through service to others"
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

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description="Faith and spiritual life at École Saint Pierre Claver. Discover our Catholic values, spiritual activities, and sacrament preparation programs."
        keywords="Catholic education, spiritual formation, faith values, sacrament preparation, religious activities"
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
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl lg:text-6xl font-bold mb-4 drop-shadow-lg"
                  >
                    {t.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl lg:text-2xl text-primary-cream drop-shadow-lg mb-4"
                  >
                    {t.subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="border-t border-primary-cream/40 pt-4 mt-4"
                  >
                    <p className="text-lg lg:text-xl font-semibold drop-shadow-lg">
                      {image.title}
                    </p>
                    <p className="text-primary-cream/90 text-sm lg:text-base mt-2 max-w-2xl mx-auto">
                      {image.description}
                    </p>
                  </motion.div>
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

      {/* Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Cross className="text-primary-brown mx-auto mb-6" size={48} />
            <h2 className="section-title">{t.mission.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.mission.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Spiritual Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t.values.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.items.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card text-center group"
              >
                <div className="text-4xl mb-4 animate-float">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary-brown mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Activities */}
      <section className="section-padding bg-primary-cream">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t.activities.title}
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.activities.items.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-brown text-white rounded-lg p-3 flex-shrink-0">
                    {index === 0 && <Cross size={24} />}
                    {index === 1 && <BookOpen size={24} />}
                    {index === 2 && <Heart size={24} />}
                    {index === 3 && <Users size={24} />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-brown mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{activity.schedule}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users size={16} />
                        <span>{activity.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacrament Preparation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="section-title">{t.sacraments.title}</h2>
            <p className="text-lg text-gray-600">
              {t.sacraments.description}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.sacraments.items.map((sacrament, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover-lift"
              >
                <div className="w-16 h-16 bg-primary-cream rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-brown transition-colors">
                  <Cross className="text-primary-brown group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary-brown mb-3">
                  {sacrament.sacrament}
                </h3>
                <p className="text-gray-600">{sacrament.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary-brown to-primary-dark text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'fr' ? 'Rejoignez Notre Communauté de Foi' : 'Join Our Faith Community'}
            </h2>
            <p className="text-xl text-primary-cream mb-8 max-w-2xl mx-auto">
              {language === 'fr' 
                ? "Découvrez comment nous intégrons la foi dans l'éducation pour former des leaders complets"
                : "Discover how we integrate faith into education to form well-rounded leaders"
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-brown px-8 py-4 rounded-lg font-semibold hover:bg-primary-cream transition-colors"
            >
              {language === 'fr' ? 'En Savoir Plus' : 'Learn More'}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Faith