import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Download, Calendar, FileText, Users, Phone, Mail, Clock } from 'lucide-react'
import SEO from '../components/SEO'

const Parents = () => {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState('resources')

  const parentsContent = {
    fr: {
      title: "Espace Parents",
      subtitle: "Ressources et informations pour accompagner la réussite de votre enfant",
      tabs: {
        resources: "Ressources",
        calendar: "Calendrier",
        contacts: "Contacts",
        pta: "Association Parents"
      },
      resources: {
        title: "Documents Importants",
        items: [
          {
            name: "Calendrier Scolaire 2024-2025",
            description: "Dates importantes de l'année académique",
            type: "PDF",
            size: "2.4 MB",
            url: "#"
          },
          {
            name: "Guide des Parents",
            description: "Règlement intérieur et informations pratiques",
            type: "PDF",
            size: "1.8 MB",
            url: "#"
          },
          {
            name: "Formulaire d'Inscription",
            description: "Formulaire de demande d'admission",
            type: "DOC",
            size: "1.2 MB",
            url: "#"
          },
          {
            name: "Liste des Fournitures",
            description: "Matériel scolaire requis par niveau",
            type: "PDF",
            size: "0.8 MB",
            url: "#"
          },
          {
            name: "Menu de la Cantine",
            description: "Programme nutritionnel hebdomadaire",
            type: "PDF",
            size: "1.1 MB",
            url: "#"
          },
          {
            name: "Politique d'Uniforme",
            description: "Règles vestimentaires de l'école",
            type: "PDF",
            size: "0.9 MB",
            url: "#"
          }
        ]
      },
      calendar: {
        title: "Événements à Venir",
        events: [
          {
            date: "15 Sept 2024",
            title: "Réunion des Parents",
            description: "Rencontre avec les enseignants et administration",
            time: "18:00 - 20:00",
            location: "Auditorium Principal"
          },
          {
            date: "25 Sept 2024",
            title: "Journée Portes Ouvertes",
            description: "Découverte des programmes et installations",
            time: "09:00 - 16:00",
            location: "Campus Principal"
          },
          {
            date: "10 Oct 2024",
            title: "Festival des Cultures",
            description: "Célébration de la diversité culturelle",
            time: "14:00 - 20:00",
            location: "Cour Principale"
          },
          {
            date: "15 Nov 2024",
            title: "Conférence sur l'Éducation",
            description: "Experts en pédagogie et développement de l'enfant",
            time: "10:00 - 12:00",
            location: "Salle de Conférence"
          }
        ]
      },
      contacts: {
        title: "Contacts Importants",
        departments: [
          {
            name: "Admissions",
            phone: "+233 XX XXX XXXX",
            email: "admissions@stpierreclaver.edu.gh",
            hours: "Lun-Ven: 8h00-16h00"
          },
          {
            name: "Vie Scolaire",
            phone: "+233 XX XXX XXXX",
            email: "viescolaire@stpierreclaver.edu.gh",
            hours: "Lun-Ven: 7h30-17h00"
          },
          {
            name: "Infirmerie",
            phone: "+233 XX XXX XXXX",
            email: "infirmerie@stpierreclaver.edu.gh",
            hours: "Lun-Ven: 7h30-16h00"
          },
          {
            name: "Cantine",
            phone: "+233 XX XXX XXXX",
            email: "cantine@stpierreclaver.edu.gh",
            hours: "Lun-Ven: 7h00-15h00"
          }
        ]
      },
      pta: {
        title: "Association des Parents",
        description: "L'Association des Parents d'Élèves (APE) travaille en partenariat avec l'école pour soutenir l'éducation de nos enfants.",
        meetings: "Réunions mensuelles le premier samedi du mois",
        contact: "President: M. Kofi Mensah - pta@stpierreclaver.edu.gh",
        initiatives: [
          "Programme de bourses d'études",
          "Amélioration des infrastructures",
          "Activités communautaires",
          "Soutien aux projets éducatifs"
        ]
      }
    },
    en: {
      title: "Parent Portal",
      subtitle: "Resources and information to support your child's success",
      tabs: {
        resources: "Resources",
        calendar: "Calendar",
        contacts: "Contacts",
        pta: "PTA"
      },
      resources: {
        title: "Important Documents",
        items: [
          {
            name: "Academic Calendar 2024-2025",
            description: "Important dates for the academic year",
            type: "PDF",
            size: "2.4 MB",
            url: "#"
          },
          {
            name: "Parent Handbook",
            description: "School rules and practical information",
            type: "PDF",
            size: "1.8 MB",
            url: "#"
          },
          {
            name: "Application Form",
            description: "Admission request form",
            type: "DOC",
            size: "1.2 MB",
            url: "#"
          },
          {
            name: "Supplies List",
            description: "Required school materials by grade level",
            type: "PDF",
            size: "0.8 MB",
            url: "#"
          },
          {
            name: "Cafeteria Menu",
            description: "Weekly nutritional program",
            type: "PDF",
            size: "1.1 MB",
            url: "#"
          },
          {
            name: "Uniform Policy",
            description: "School dress code rules",
            type: "PDF",
            size: "0.9 MB",
            url: "#"
          }
        ]
      },
      calendar: {
        title: "Upcoming Events",
        events: [
          {
            date: "Sept 15, 2024",
            title: "Parent Meeting",
            description: "Meeting with teachers and administration",
            time: "6:00 PM - 8:00 PM",
            location: "Main Auditorium"
          },
          {
            date: "Sept 25, 2024",
            title: "Open Day",
            description: "Discover programs and facilities",
            time: "9:00 AM - 4:00 PM",
            location: "Main Campus"
          },
          {
            date: "Oct 10, 2024",
            title: "Cultural Festival",
            description: "Celebration of cultural diversity",
            time: "2:00 PM - 8:00 PM",
            location: "Main Courtyard"
          },
          {
            date: "Nov 15, 2024",
            title: "Education Conference",
            description: "Experts in pedagogy and child development",
            time: "10:00 AM - 12:00 PM",
            location: "Conference Room"
          }
        ]
      },
      contacts: {
        title: "Important Contacts",
        departments: [
          {
            name: "Admissions",
            phone: "+233 XX XXX XXXX",
            email: "admissions@stpierreclaver.edu.gh",
            hours: "Mon-Fri: 8:00 AM-4:00 PM"
          },
          {
            name: "Student Life",
            phone: "+233 XX XXX XXXX",
            email: "studentlife@stpierreclaver.edu.gh",
            hours: "Mon-Fri: 7:30 AM-5:00 PM"
          },
          {
            name: "Infirmary",
            phone: "+233 XX XXX XXXX",
            email: "infirmary@stpierreclaver.edu.gh",
            hours: "Mon-Fri: 7:30 AM-4:00 PM"
          },
          {
            name: "Cafeteria",
            phone: "+233 XX XXX XXXX",
            email: "cafeteria@stpierreclaver.edu.gh",
            hours: "Mon-Fri: 7:00 AM-3:00 PM"
          }
        ]
      },
      pta: {
        title: "Parent-Teacher Association",
        description: "The Parent-Teacher Association (PTA) works in partnership with the school to support our children's education.",
        meetings: "Monthly meetings on the first Saturday of each month",
        contact: "President: Mr. Kofi Mensah - pta@stpierreclaver.edu.gh",
        initiatives: [
          "Scholarship program",
          "Infrastructure improvement",
          "Community activities",
          "Support for educational projects"
        ]
      }
    }
  }

  const t = parentsContent[language]

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description="Parent resources, calendar, and important contacts at École Saint Pierre Claver. Stay informed and support your child's education."
        keywords="parent resources, school calendar, PTA, parent portal, school contacts"
      />

      {/* Hero */}
      <section className="bg-primary-brown text-white py-20 relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-cream"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(t.tabs).map(([key, label]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-primary-brown text-white shadow-md'
                    : 'bg-primary-cream text-primary-brown hover:bg-primary-brown hover:text-white'
                }`}
              >
                {label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary-brown mb-8 text-center">
                {t.resources.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.resources.items.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="card group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-primary-cream p-3 rounded-lg">
                        <FileText className="text-primary-brown" size={24} />
                      </div>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm font-medium">
                        {resource.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-brown mb-2">
                      {resource.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{resource.size}</span>
                      <button className="flex items-center space-x-2 text-primary-brown hover:text-primary-dark transition-colors">
                        <Download size={16} />
                        <span className="font-medium">
                          {language === 'fr' ? 'Télécharger' : 'Download'}
                        </span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Calendar Tab */}
          {activeTab === 'calendar' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary-brown mb-8 text-center">
                {t.calendar.title}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {t.calendar.events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card"
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex-shrink-0 text-center sm:text-left">
                        <div className="bg-primary-brown text-white rounded-lg p-4 w-24 mx-auto sm:mx-0">
                          <div className="text-2xl font-bold">
                            {event.date.split(' ')[0]}
                          </div>
                          <div className="text-sm">
                            {event.date.split(' ').slice(1).join(' ')}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary-brown mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <div className="space-y-2 text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <Clock size={16} />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Contacts Tab */}
          {activeTab === 'contacts' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary-brown mb-8 text-center">
                {t.contacts.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {t.contacts.departments.map((dept, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card"
                  >
                    <h3 className="text-xl font-bold text-primary-brown mb-4">
                      {dept.name}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone size={18} className="text-gray-400" />
                        <a
                          href={`tel:${dept.phone}`}
                          className="text-gray-600 hover:text-primary-brown transition-colors"
                        >
                          {dept.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail size={18} className="text-gray-400" />
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-gray-600 hover:text-primary-brown transition-colors"
                        >
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock size={18} className="text-gray-400" />
                        <span className="text-gray-600">{dept.hours}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* PTA Tab */}
          {activeTab === 'pta' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-primary-brown mb-8 text-center">
                {t.pta.title}
              </h2>
              <div className="card text-center">
                <div className="bg-primary-cream rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Users className="text-primary-brown" size={32} />
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {t.pta.description}
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-primary-brown mb-2">
                    {language === 'fr' ? 'Réunions' : 'Meetings'}
                  </h4>
                  <p className="text-gray-600">{t.pta.meetings}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-primary-brown mb-2">
                    {language === 'fr' ? 'Contact' : 'Contact'}
                  </h4>
                  <p className="text-gray-600">{t.pta.contact}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-brown mb-4">
                    {language === 'fr' ? 'Initiatives en Cours' : 'Current Initiatives'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {t.pta.initiatives.map((initiative, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-gray-600"
                      >
                        <div className="w-2 h-2 bg-primary-brown rounded-full"></div>
                        <span>{initiative}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Parents