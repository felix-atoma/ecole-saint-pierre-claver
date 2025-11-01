import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { GraduationCap, Target, Users, BookOpen, Award, Globe } from 'lucide-react'
import SEO from '../components/SEO'

const HighSchool = () => {
  const { language } = useLanguage()

  const highSchoolContent = {
    fr: {
      title: "Lycée",
      subtitle: "Excellence académique et préparation aux études supérieures",
      description: "Notre programme de lycée offre une spécialisation avancée et prépare les étudiants âgés de 16 à 18 ans aux défis de l'enseignement supérieur et du monde professionnel.",
      heroImage: "/images/high-school/hero-high-school.jpg",
      tracks: {
        title: "Filières d'Excellence",
        programs: [
          {
            icon: BookOpen,
            name: "Série Scientifique",
            description: "Mathématiques, physique-chimie, sciences de la vie et de la terre",
            careers: ["Ingénierie", "Médecine", "Recherche Scientifique", "Technologie"]
          },
          {
            icon: Users,
            name: "Série Littéraire",
            description: "Littérature, philosophie, langues et sciences sociales",
            careers: ["Droit", "Journalisme", "Enseignement", "Relations Internationales"]
          },
          {
            icon: Globe,
            name: "Série Économique",
            description: "Sciences économiques, mathématiques appliquées, gestion",
            careers: ["Commerce", "Finance", "Management", "Économie"]
          }
        ]
      },
      bacPreparation: {
        title: "Préparation au Baccalauréat",
        features: [
          {
            title: "Cours Avancés",
            description: "Programme approfondi aligné sur les exigences du baccalauréat"
          },
          {
            title: "Travaux Pratiques",
            description: "Laboratoires et expérimentations pour les filières scientifiques"
          },
          {
            title: "Séances de Révision",
            description: "Sessions intensives dirigées par des enseignants expérimentés"
          },
          {
            title: "Simulations d'Oral",
            description: "Préparation complète aux épreuves orales du baccalauréat"
          }
        ]
      },
      university: {
        title: "Orientation Universitaire",
        services: [
          "Conseil en orientation personnalisé",
          "Visites d'universités et salons étudiants",
          "Préparation aux concours d'entrée",
          "Ateliers de rédaction de CV et lettres de motivation",
          "Simulations d'entretiens universitaires"
        ]
      }
    },
    en: {
      title: "High School",
      subtitle: "Academic excellence and preparation for higher education",
      description: "Our high school program offers advanced specialization and prepares students aged 16 to 18 for the challenges of higher education and the professional world.",
      heroImage: "/images/high-school/hero-high-school.jpg",
      tracks: {
        title: "Excellence Tracks",
        programs: [
          {
            icon: BookOpen,
            name: "Science Track",
            description: "Mathematics, physics-chemistry, life and earth sciences",
            careers: ["Engineering", "Medicine", "Scientific Research", "Technology"]
          },
          {
            icon: Users,
            name: "Literature Track",
            description: "Literature, philosophy, languages and social sciences",
            careers: ["Law", "Journalism", "Teaching", "International Relations"]
          },
          {
            icon: Globe,
            name: "Economics Track",
            description: "Economic sciences, applied mathematics, management",
            careers: ["Business", "Finance", "Management", "Economics"]
          }
        ]
      },
      bacPreparation: {
        title: "Baccalaureate Preparation",
        features: [
          {
            title: "Advanced Courses",
            description: "In-depth program aligned with baccalaureate requirements"
          },
          {
            title: "Practical Work",
            description: "Laboratories and experiments for science tracks"
          },
          {
            title: "Revision Sessions",
            description: "Intensive sessions led by experienced teachers"
          },
          {
            title: "Oral Exam Simulations",
            description: "Complete preparation for baccalaureate oral exams"
          }
        ]
      },
      university: {
        title: "University Guidance",
        services: [
          "Personalized orientation counseling",
          "University visits and student fairs",
          "Entrance exam preparation",
          "CV and motivation letter writing workshops",
          "University interview simulations"
        ]
      }
    }
  }

  const t = highSchoolContent[language]

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description={t.description}
        keywords={language === 'fr' 
          ? "lycée, baccalauréat, études secondaires, orientation universitaire, filières"
          : "high school, baccalaureate, secondary education, university guidance, tracks"
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

      {/* Tracks Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">{t.tracks.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.tracks.programs.map((program, index) => {
              const IconComponent = program.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="bg-primary-brown text-white p-8 text-center">
                    <IconComponent className="mx-auto mb-4" size={48} />
                    <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                    <p className="text-primary-cream-light">{program.description}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-primary-brown mb-3">
                      {language === 'fr' ? 'Débouchés Professionnels' : 'Career Opportunities'}
                    </h4>
                    <ul className="space-y-2">
                      {program.careers.map((career, careerIndex) => (
                        <li key={careerIndex} className="flex items-center space-x-2 text-gray-600">
                          <Target size={16} className="text-primary-brown flex-shrink-0" />
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bac Preparation */}
      <section className="section-padding bg-primary-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t.bacPreparation.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.bacPreparation.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary-brown text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-primary-brown mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* University Guidance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t.university.title}</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.university.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-primary-cream transition-colors"
                >
                  <Award size={20} className="text-primary-brown flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
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
              ? 'Prêt pour l\'Excellence au Lycée ?' 
              : 'Ready for High School Excellence?'
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
              {language === 'fr' ? 'Visiter le Lycée' : 'Visit High School'}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-brown transition-all duration-300">
              {language === 'fr' ? 'Guide des Filières' : 'Tracks Guide'}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HighSchool