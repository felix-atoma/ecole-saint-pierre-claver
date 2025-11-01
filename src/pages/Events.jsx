import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter, Search, UserPlus } from 'lucide-react'
import SEO from '../components/SEO'

const Events = () => {
  const { language } = useLanguage()
  const [selectedType, setSelectedType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('all')
  const [showRegistrationModal, setShowRegistrationModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const eventsContent = {
    fr: {
      title: "Calendrier des Événements",
      subtitle: "Découvrez et participez aux événements de notre communauté scolaire",
      types: {
        all: "Tous les événements",
        academic: "Académique",
        cultural: "Culturel",
        sports: "Sports",
        community: "Communauté",
        parents: "Parents"
      },
      months: {
        all: "Tous les mois",
        january: "Janvier",
        february: "Février",
        march: "Mars",
        april: "Avril",
        may: "Mai",
        june: "Juin",
        july: "Juillet",
        august: "Août",
        september: "Septembre",
        october: "Octobre",
        november: "Novembre",
        december: "Décembre"
      },
      events: [
        {
          id: 1,
          title: "Journée Portes Ouvertes 2024",
          description: "Venez découvrir notre établissement, rencontrer nos enseignants et explorer nos programmes éducatifs. Visites guidées et sessions d'information disponibles.",
          type: "academic",
          date: "2024-09-15",
          time: "09:00 - 16:00",
          location: "Campus Principal",
          attendees: 200,
          image: "/events/open-day.jpg",
          featured: true,
          registration: true,
          registrationDeadline: "2024-09-10",
          capacity: 250
        },
        {
          id: 2,
          title: "Festival des Cultures",
          description: "Célébration de la diversité culturelle avec des performances, cuisine traditionnelle et expositions. Représentations des étudiants de toutes les nationalités.",
          type: "cultural",
          date: "2024-10-20",
          time: "14:00 - 20:00",
          location: "Cour Principale",
          attendees: 150,
          image: "/events/culture-festival.jpg",
          featured: true,
          registration: false,
          capacity: 300
        },
        {
          id: 3,
          title: "Tournoi de Basketball Inter-Classes",
          description: "Compétition amicale de basketball entre les différentes classes de l'école. Finale avec remise de trophées.",
          type: "sports",
          date: "2024-08-10",
          time: "15:00 - 18:00",
          location: "Terrain de Sports",
          attendees: 80,
          image: "/events/basketball-tournament.jpg",
          featured: false,
          registration: true,
          registrationDeadline: "2024-08-05",
          capacity: 100
        },
        {
          id: 4,
          title: "Conférence sur l'Éducation Bilingue",
          description: "Experts partagent leurs connaissances sur les avantages de l'éducation bilingue. Discussion ouverte avec les parents.",
          type: "academic",
          date: "2024-11-05",
          time: "10:00 - 12:00",
          location: "Auditorium",
          attendees: 120,
          image: "/events/bilingual-conference.jpg",
          featured: false,
          registration: true,
          registrationDeadline: "2024-11-01",
          capacity: 150
        },
        {
          id: 5,
          title: "Réunion des Parents-Enseignants",
          description: "Rencontre individuelle avec les enseignants pour discuter du progrès académique des étudiants.",
          type: "parents",
          date: "2024-09-25",
          time: "16:00 - 19:00",
          location: "Salles de Classe",
          attendees: 180,
          image: "/events/parent-teacher.jpg",
          featured: false,
          registration: true,
          registrationDeadline: "2024-09-20",
          capacity: 200
        },
        {
          id: 6,
          title: "Collecte de Fond Communautaire",
          description: "Événement caritatif pour soutenir les projets éducatifs dans les communautés locales.",
          type: "community",
          date: "2024-07-25",
          time: "11:00 - 15:00",
          location: "Hall Polyvalent",
          attendees: 100,
          image: "/events/fundraising.jpg",
          featured: false,
          registration: false,
          capacity: 150
        }
      ],
      upcoming: "À Venir",
      register: "S'inscrire",
      registered: "Inscrit",
      searchPlaceholder: "Rechercher des événements...",
      featuredEvents: "Événements en Vedette",
      allEvents: "Tous les Événements",
      noEvents: "Aucun événement trouvé",
      noEventsDesc: "Aucun événement ne correspond à vos critères de filtrage",
      ctaTitle: "Ne Manquez Aucun Événement",
      ctaDesc: "Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et invitations aux événements",
      emailPlaceholder: "Votre email",
      subscribe: "S'abonner",
      participants: "participants",
      registrationClosed: "Inscriptions closes",
      fullCapacity: "Complet"
    },
    en: {
      title: "Events Calendar",
      subtitle: "Discover and participate in our school community events",
      types: {
        all: "All Events",
        academic: "Academic",
        cultural: "Cultural",
        sports: "Sports",
        community: "Community",
        parents: "Parents"
      },
      months: {
        all: "All Months",
        january: "January",
        february: "February",
        march: "March",
        april: "April",
        may: "May",
        june: "June",
        july: "July",
        august: "August",
        september: "September",
        october: "October",
        november: "November",
        december: "December"
      },
      events: [
        {
          id: 1,
          title: "Open Day 2024",
          description: "Come discover our institution, meet our teachers, and explore our educational programs. Guided tours and information sessions available.",
          type: "academic",
          date: "2024-09-15",
          time: "09:00 - 16:00",
          location: "Main Campus",
          attendees: 200,
          image: "/events/open-day.jpg",
          featured: true,
          registration: true,
          registrationDeadline: "2024-09-10",
          capacity: 250
        },
        {
          id: 2,
          title: "Cultural Festival",
          description: "Celebration of cultural diversity with performances, traditional cuisine, and exhibitions. Student performances from all nationalities.",
          type: "cultural",
          date: "2024-10-20",
          time: "14:00 - 20:00",
          location: "Main Courtyard",
          attendees: 150,
          image: "/events/culture-festival.jpg",
          featured: true,
          registration: false,
          capacity: 300
        },
        {
          id: 3,
          title: "Inter-Class Basketball Tournament",
          description: "Friendly basketball competition between different school classes. Finals with trophy ceremony.",
          type: "sports",
          date: "2024-08-10",
          time: "15:00 - 18:00",
          location: "Sports Field",
          attendees: 80,
          image: "/events/basketball-tournament.jpg",
          featured: false,
          registration: true,
          registrationDeadline: "2024-08-05",
          capacity: 100
        },
        {
          id: 4,
          title: "Bilingual Education Conference",
          description: "Experts share knowledge about the benefits of bilingual education. Open discussion with parents.",
          type: "academic",
          date: "2024-11-05",
          time: "10:00 - 12:00",
          location: "Auditorium",
          attendees: 120,
          image: "/events/bilingual-conference.jpg",
          featured: false,
          registration: true,
          registrationDeadline: "2024-11-01",
          capacity: 150
        },
        {
          id: 5,
          title: "Parent-Teacher Meeting",
          description: "Individual meetings with teachers to discuss students' academic progress.",
          type: "parents",
          date: "2024-09-25",
          time: "16:00 - 19:00",
          location: "Classrooms",
          attendees: 180,
          image: "/events/parent-teacher.jpg",
          featured: false,
          registration: true,
          registrationDeadline: "2024-09-20",
          capacity: 200
        },
        {
          id: 6,
          title: "Community Fundraising Event",
          description: "Charitable event to support educational projects in local communities.",
          type: "community",
          date: "2024-07-25",
          time: "11:00 - 15:00",
          location: "Multipurpose Hall",
          attendees: 100,
          image: "/events/fundraising.jpg",
          featured: false,
          registration: false,
          capacity: 150
        }
      ],
      upcoming: "Upcoming",
      register: "Register",
      registered: "Registered",
      searchPlaceholder: "Search events...",
      featuredEvents: "Featured Events",
      allEvents: "All Events",
      noEvents: "No events found",
      noEventsDesc: "No events match your filtering criteria",
      ctaTitle: "Don't Miss Any Events",
      ctaDesc: "Subscribe to our newsletter to receive the latest news and event invitations",
      emailPlaceholder: "Your email",
      subscribe: "Subscribe",
      participants: "attendees",
      registrationClosed: "Registration closed",
      fullCapacity: "Full"
    }
  }

  const t = eventsContent[language]

  const filteredEvents = t.events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || event.type === selectedType
    const matchesMonth = selectedMonth === 'all' || 
                        new Date(event.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { month: 'long' }).toLowerCase() === selectedMonth.toLowerCase()
    
    return matchesSearch && matchesType && matchesMonth
  })

  const featuredEvents = filteredEvents.filter(event => event.featured)
  const regularEvents = filteredEvents.filter(event => !event.featured)

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', options)
  }

  const isUpcoming = (dateString) => {
    return new Date(dateString) >= new Date()
  }

  const canRegister = (event) => {
    if (!event.registration) return false
    if (!event.registrationDeadline) return true
    return new Date(event.registrationDeadline) >= new Date() && event.attendees < event.capacity
  }

  const isRegistrationClosed = (event) => {
    return event.registration && event.registrationDeadline && new Date(event.registrationDeadline) < new Date()
  }

  const isFullCapacity = (event) => {
    return event.registration && event.attendees >= event.capacity
  }

  const getRegistrationStatus = (event) => {
    if (!event.registration) return null
    if (isFullCapacity(event)) return 'full'
    if (isRegistrationClosed(event)) return 'closed'
    if (canRegister(event)) return 'open'
    return null
  }

  const handleRegisterClick = (event) => {
    if (canRegister(event)) {
      setSelectedEvent(event)
      setShowRegistrationModal(true)
    }
  }

  const RegistrationModal = () => {
    if (!showRegistrationModal || !selectedEvent) return null

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={() => setShowRegistrationModal(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-lg p-6 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl font-bold text-primary-brown mb-4">
            {language === 'fr' ? "Inscription à l'événement" : "Event Registration"}
          </h3>
          <p className="text-gray-600 mb-4">
            {language === 'fr' 
              ? `Vous êtes sur le point de vous inscrire à "${selectedEvent.title}".` 
              : `You are about to register for "${selectedEvent.title}".`
            }
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowRegistrationModal(false)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              {language === 'fr' ? 'Annuler' : 'Cancel'}
            </button>
            <button
              onClick={() => {
                // Handle registration logic here
                setShowRegistrationModal(false)
                alert(language === 'fr' ? 'Inscription réussie!' : 'Registration successful!')
              }}
              className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              {language === 'fr' ? "Confirmer" : "Confirm"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description="Upcoming events and calendar at École Saint Pierre Claver. Register for academic, cultural, sports, and community events."
        keywords="school events, academic events, cultural events, sports events, event registration"
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

      {/* Search and Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
          >
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
              />
            </div>

            {/* Type Filter */}
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-gray-600" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
              >
                {Object.entries(t.types).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>

            {/* Month Filter */}
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
            >
              {Object.entries(t.months).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </motion.div>

          {/* Featured Events */}
          {featuredEvents.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-primary-brown mb-8">
                {t.featuredEvents}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="card group cursor-pointer relative overflow-hidden"
                  >
                    {isUpcoming(event.date) && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                        {t.upcoming}
                      </div>
                    )}
                    <div className="bg-gradient-to-br from-primary-brown to-secondary-gold h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                      <div className="text-4xl text-white">🎉</div>
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-primary-brown group-hover:text-primary-dark transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">{event.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users size={16} />
                          <span>{event.attendees} {t.participants}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="inline-block bg-primary-cream text-primary-brown px-3 py-1 rounded-full text-sm font-medium">
                        {t.types[event.type]}
                      </span>
                      <div className="flex items-center space-x-2">
                        {getRegistrationStatus(event) === 'open' && (
                          <button 
                            onClick={() => handleRegisterClick(event)}
                            className="flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                          >
                            <UserPlus size={14} />
                            <span>{t.register}</span>
                          </button>
                        )}
                        {getRegistrationStatus(event) === 'closed' && (
                          <span className="flex items-center space-x-1 bg-gray-400 text-white px-3 py-1 rounded-lg text-sm font-medium">
                            {t.registrationClosed}
                          </span>
                        )}
                        {getRegistrationStatus(event) === 'full' && (
                          <span className="flex items-center space-x-1 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                            {t.fullCapacity}
                          </span>
                        )}
                        <ArrowRight className="text-primary-brown group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* All Events */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-primary-brown mb-8">
              {t.allEvents}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="card group cursor-pointer relative"
                >
                  {isUpcoming(event.date) && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                      {t.upcoming}
                    </div>
                  )}
                  <div className="bg-gradient-to-br from-primary-cream to-secondary-light h-32 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-2xl text-primary-brown">🎉</div>
                  </div>
                  <h3 className="text-lg font-bold text-primary-brown mb-2 group-hover:text-primary-dark transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar size={12} />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={12} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="inline-block bg-primary-cream text-primary-brown px-2 py-1 rounded-full text-xs font-medium">
                      {t.types[event.type]}
                    </span>
                    <div className="flex items-center space-x-2">
                      {getRegistrationStatus(event) === 'open' && (
                        <button 
                          onClick={() => handleRegisterClick(event)}
                          className="flex items-center space-x-1 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium hover:bg-green-600 transition-colors"
                        >
                          <UserPlus size={12} />
                          <span>{t.register}</span>
                        </button>
                      )}
                      {getRegistrationStatus(event) === 'closed' && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {t.registrationClosed}
                        </span>
                      )}
                      {getRegistrationStatus(event) === 'full' && (
                        <span className="text-xs text-red-500 bg-red-100 px-2 py-1 rounded">
                          {t.fullCapacity}
                        </span>
                      )}
                      <ArrowRight size={16} className="text-primary-brown group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {t.noEvents}
                </h3>
                <p className="text-gray-500">
                  {t.noEventsDesc}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="section-padding bg-primary-cream">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-brown mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                {t.subscribe}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Modal */}
      <RegistrationModal />
    </div>
  )
}

export default Events