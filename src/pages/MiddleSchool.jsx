import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { BookOpen, Users, Flask, Globe, Award, Calculator } from 'lucide-react'
import SEO from '../components/SEO'

const MiddleSchool = () => {
  const { language } = useLanguage()

  const middleSchoolContent = {
    fr: {
      title: "Collège",
      subtitle: "Construction des savoirs fondamentaux et préparation au lycée",
      description: "Notre programme de collège offre une éducation équilibrée qui prépare les élèves âgés de 12 à 15 ans aux défis académiques du lycée.",
      heroImage: "/images/middle-school/hero-middle-school.jpg",
      curriculum: {
        title: "Curriculum Complet",
        subjects: [
          {
            icon: BookOpen,
            name: "Français",
            description: "Maîtrise de la langue, littérature et expression écrite"
          },
          {
            icon: Calculator,
            name: "Mathématiques",
            description: "Algèbre, géométrie et résolution de problèmes"
          },
          {
            icon: Flask,
            name: "Sciences",
            description: "Physique, chimie, sciences de la vie et de la terre"
          },
          {
            icon: Globe,
            name: "Langues Étrangères",
            description: "Anglais, allemand ou espagnol au choix"
          },
          {
            icon: Users,
            name: "Sciences Sociales",
            description: "Histoire, géographie et éducation civique"
          },
          {
            icon: Award,
            name: "Arts & Technologie",
            description: "Arts plastiques, musique et technologie"
          }
        ]
      },
      preparation: {
        title: "Préparation au BEPC",
        steps: [
          {
            step: "1",
            title: "Évaluation Continue",
            description: "Suivi régulier des progrès académiques"
          },
          {
            step: "2",
            title: "Examens Blancs",
            description: "Simulations d'examen trimestrielles"
          },
          {
            step: "3",
            title: "Stages de Révision",
            description: "Sessions intensives avant les examens"
          },
          {
            step: "4",
            title: "Coaching Personnalisé",
            description: "Accompagnement individuel pour le succès"
          }
        ]
      },
      activities: {
        title: "Vie Scolaire et Activités",
        clubs: [
          "Club de Débat et d'Éloquence",
          "Atelier Scientifique et Robotique",
          "Club de Théâtre Bilingue",
          "Journal des Élèves",
          "Club d'Échecs et Stratégie",
          "Atelier d'Art et Création"
        ]
      }
    },
    en: {
      title: "Middle School",
      subtitle: "Building fundamental knowledge and high school preparation",
      description: "Our middle school program provides a balanced education that prepares students aged 12 to 15 for the academic challenges of high school.",
      heroImage: "/images/middle-school/hero-middle-school.jpg",
      curriculum: {
        title: "Comprehensive Curriculum",
        subjects: [
          {
            icon: BookOpen,
            name: "French",
            description: "Language mastery, literature and written expression"
          },
          {
            icon: Calculator,
            name: "Mathematics",
            description: "Algebra, geometry and problem solving"
          },
          {
            icon: Flask,
            name: "Sciences",
            description: "Physics, chemistry, life and earth sciences"
          },
          {
            icon: Globe,
            name: "Foreign Languages",
            description: "English, German or Spanish to choose from"
          },
          {
            icon: Users,
            name: "Social Sciences",
            description: "History, geography and civic education"
          },
          {
            icon: Award,
            name: "Arts & Technology",
            description: "Visual arts, music and technology"
          }
        ]
      },
      preparation: {
        title: "BEPC Preparation",
        steps: [
          {
            step: "1",
            title: "Continuous Assessment",
            description: "Regular monitoring of academic progress"
          },
          {
            step: "2",
            title: "Mock Exams",
            description: "Quarterly exam simulations"
          },
          {
            step: "3",
            title: "Revision Workshops",
            description: "Intensive sessions before exams"
          },
          {
            step: "4",
            title: "Personalized Coaching",
            description: "Individual support for success"
          }
        ]
      },
      activities: {
        title: "School Life and Activities",
        clubs: [
          "Debate and Eloquence Club",
          "Science and Robotics Workshop",
          "Bilingual Theater Club",
          "Student Newspaper",
          "Chess and Strategy Club",
          "Art and Creation Workshop"
        ]
      }
    }
  }

  const t = middleSchoolContent[language]

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description={t.description}
        keywords={language === 'fr' 
          ? "collège, éducation secondaire, BEPC, programme scolaire, adolescence"
          : "middle school, secondary education, BEPC, school program, adolescence"
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

      {/* Curriculum Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">{t.curriculum.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.curriculum.subjects.map((subject, index) => {
              const IconComponent = subject.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center"
                >
                  <div className="bg-primary-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary-brown" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary-brown mb-3">{subject.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{subject.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Exam Preparation */}
      <section className="section-padding bg-primary-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t.preparation.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.preparation.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary-brown text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-primary-brown mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
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
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.activities.clubs.map((club, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-primary-cream transition-colors"
                >
                  <div className="w-3 h-3 bg-primary-brown rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{club}</span>
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
              ? 'Prêt pour l\'Excellence au Collège ?' 
              : 'Ready for Middle School Excellence?'
            }
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-white text-primary-brown px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-cream hover:text-primary-brown-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
              {language === 'fr' ? 'Visiter le Collège' : 'Visit Middle School'}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-brown transition-all duration-300">
              {language === 'fr' ? 'Programme Détaillé' : 'Detailed Program'}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MiddleSchool