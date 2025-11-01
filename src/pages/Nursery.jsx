import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Users, Palette, Music, BookOpen, Heart, Star } from 'lucide-react'
import SEO from '../components/SEO'

const Nursery = () => {
  const { language } = useLanguage()

  const nurseryContent = {
    fr: {
      title: "Maternelle",
      subtitle: "Premiers pas vers l'apprentissage et l'épanouissement",
      description: "Notre programme de maternelle offre un environnement chaleureux et stimulant pour l'éveil des jeunes enfants âgés de 2 à 5 ans.",
      heroImage: "/images/nursery/hero-nursery.jpg",
      features: {
        title: "Notre Approche Éducative",
        items: [
          {
            icon: Heart,
            title: "Environnement Bienveillant",
            description: "Un cadre sécurisé et affectif pour le développement émotionnel et social"
          },
          {
            icon: Palette,
            title: "Expression Créative",
            description: "Ateliers d'art, musique et activités manuelles pour stimuler la créativité"
          },
          {
            icon: Users,
            title: "Socialisation",
            description: "Apprentissage du vivre-ensemble et développement des compétences sociales"
          },
          {
            icon: BookOpen,
            title: "Éveil Linguistique",
            description: "Initiation bilingue français-anglais à travers des activités ludiques"
          }
        ]
      },
      program: {
        title: "Programme Quotidien",
        activities: [
          {
            time: "7h30 - 8h30",
            activity: "Accueil et jeux libres"
          },
          {
            time: "8h30 - 9h30",
            activity: "Activités d'éveil sensoriel"
          },
          {
            time: "9h30 - 10h30",
            activity: "Collation et récréation"
          },
          {
            time: "10h30 - 11h30",
            activity: "Ateliers créatifs"
          },
          {
            time: "11h30 - 12h30",
            activity: "Déjeuner et détente"
          },
          {
            time: "12h30 - 14h30",
            activity: "Sieste ou repos"
          },
          {
            time: "14h30 - 15h30",
            activity: "Éveil linguistique"
          },
          {
            time: "15h30 - 16h30",
            activity: "Activités motrices"
          }
        ]
      },
      ageGroups: {
        title: "Groupes d'Âge",
        groups: [
          {
            age: "2-3 ans",
            name: "Petite Section",
            focus: "Socialisation et autonomie"
          },
          {
            age: "3-4 ans",
            name: "Moyenne Section",
            focus: "Langage et motricité"
          },
          {
            age: "4-5 ans",
            name: "Grande Section",
            focus: "Préparation à la lecture"
          }
        ]
      },
      facilities: {
        title: "Installations Spécialisées",
        items: [
          "Salles de classe colorées et adaptées",
          "Espace de motricité sécurisé",
          "Coin bibliothèque et lecture",
          "Jardin d'enfants ombragé",
          "Salle de sieste confortable",
          "Sanitaires adaptés aux tout-petits"
        ]
      }
    },
    en: {
      title: "Nursery",
      subtitle: "First steps towards learning and development",
      description: "Our nursery program provides a warm and stimulating environment for the awakening of young children aged 2 to 5 years.",
      heroImage: "/images/nursery/hero-nursery.jpg",
      features: {
        title: "Our Educational Approach",
        items: [
          {
            icon: Heart,
            title: "Caring Environment",
            description: "A secure and affective setting for emotional and social development"
          },
          {
            icon: Palette,
            title: "Creative Expression",
            description: "Art workshops, music and manual activities to stimulate creativity"
          },
          {
            icon: Users,
            title: "Socialization",
            description: "Learning to live together and developing social skills"
          },
          {
            icon: BookOpen,
            title: "Language Awakening",
            description: "Bilingual French-English initiation through playful activities"
          }
        ]
      },
      program: {
        title: "Daily Program",
        activities: [
          {
            time: "7:30 - 8:30 AM",
            activity: "Welcome and free play"
          },
          {
            time: "8:30 - 9:30 AM",
            activity: "Sensory awakening activities"
          },
          {
            time: "9:30 - 10:30 AM",
            activity: "Snack and recreation"
          },
          {
            time: "10:30 - 11:30 AM",
            activity: "Creative workshops"
          },
          {
            time: "11:30 - 12:30 PM",
            activity: "Lunch and relaxation"
          },
          {
            time: "12:30 - 2:30 PM",
            activity: "Nap or rest time"
          },
          {
            time: "2:30 - 3:30 PM",
            activity: "Language awakening"
          },
          {
            time: "3:30 - 4:30 PM",
            activity: "Motor activities"
          }
        ]
      },
      ageGroups: {
        title: "Age Groups",
        groups: [
          {
            age: "2-3 years",
            name: "Toddler Class",
            focus: "Socialization and autonomy"
          },
          {
            age: "3-4 years",
            name: "Preschool Class",
            focus: "Language and motor skills"
          },
          {
            age: "4-5 years",
            name: "Pre-K Class",
            focus: "Reading preparation"
          }
        ]
      },
      facilities: {
        title: "Specialized Facilities",
        items: [
          "Colorful and adapted classrooms",
          "Secure motor skills area",
          "Library and reading corner",
          "Shaded children's garden",
          "Comfortable nap room",
          "Toddler-adapted bathrooms"
        ]
      }
    }
  }

  const t = nurseryContent[language]

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description={t.description}
        keywords={language === 'fr' 
          ? "maternelle, école maternelle, garderie, éveil enfant, éducation préscolaire"
          : "nursery, preschool, kindergarten, early childhood education, childcare"
        }
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-brown/90 to-primary-brown-dark/90 text-white py-24 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${t.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-primary-cream mb-8 max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-primary-cream-light max-w-2xl mx-auto"
          >
            {t.description}
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">{t.features.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.items.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                    <div className="bg-primary-cream rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-brown transition-colors">
                      <IconComponent className="text-primary-brown group-hover:text-white transition-colors" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-primary-brown mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Daily Program */}
      <section className="section-padding bg-primary-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t.program.title}</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {t.program.activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center p-6 ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <div className="w-32 flex-shrink-0">
                    <span className="bg-primary-brown text-white px-4 py-2 rounded-lg font-semibold">
                      {activity.time}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium text-gray-800">{activity.activity}</p>
                  </div>
                  <div className="w-8 h-8 bg-primary-cream rounded-full flex items-center justify-center">
                    <Star size={16} className="text-primary-brown" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t.ageGroups.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.ageGroups.groups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-primary-brown to-primary-brown-dark text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-4">{group.age}</div>
                  <h3 className="text-xl font-bold mb-4">{group.name}</h3>
                  <p className="text-primary-cream-light">{group.focus}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t.facilities.title}</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.facilities.items.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-primary-brown rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{facility}</span>
                </motion.div>
              ))}
            </div>
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
              ? 'Prêt pour le Premier Jour d\'École ?' 
              : 'Ready for the First Day of School?'
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
              ? "Inscrivez votre enfant et offrez-lui un départ exceptionnel dans son parcours éducatif"
              : "Enroll your child and give them an exceptional start to their educational journey"
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
              {language === 'fr' ? 'Visiter la Maternelle' : 'Visit the Nursery'}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-brown transition-all duration-300">
              {language === 'fr' ? 'Brochure Maternelle' : 'Nursery Brochure'}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Nursery