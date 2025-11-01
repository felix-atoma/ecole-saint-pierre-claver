import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react'
import SEO from '../components/SEO'

const News = () => {
  const { language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const newsContent = {
    fr: {
      title: "Actualités",
      subtitle: "Restez informé des dernières nouvelles et développements de notre école",
      search: "Rechercher des actualités...",
      categories: {
        all: "Toutes les catégories",
        academic: "Académique",
        events: "Événements",
        sports: "Sports",
        community: "Communauté"
      },
      news: [
        {
          id: 1,
          title: "Excellents Résultats au Baccalauréat 2024",
          excerpt: "Nos étudiants ont encore une fois démontré leur excellence avec un taux de réussite de 95% au Baccalauréat 2024.",
          category: "academic",
          date: "2024-07-15",
          author: "Direction des Études",
          image: "/news/bac-results.jpg",
          featured: true
        },
        {
          id: 2,
          title: "Tournoi Sportif Inter-Écoles",
          excerpt: "Participation remarquable de nos équipes de football et basketball au tournoi annuel inter-écoles.",
          category: "sports",
          date: "2024-06-20",
          author: "Département des Sports",
          image: "/news/sports-tournament.jpg",
          featured: false
        },
        {
          id: 3,
          title: "Journée Portes Ouvertes 2024",
          excerpt: "Venez découvrir notre établissement et nos programmes lors de notre journée portes ouvertes annuelle.",
          category: "events",
          date: "2024-05-10",
          author: "Service des Admissions",
          image: "/news/open-day.jpg",
          featured: true
        },
        {
          id: 4,
          title: "Nouveau Laboratoire de Sciences",
          excerpt: "Inauguration de notre nouveau laboratoire de sciences entièrement équipé pour les expériences avancées.",
          category: "academic",
          date: "2024-04-05",
          author: "Département Scientifique",
          image: "/news/science-lab.jpg",
          featured: false
        },
        {
          id: 5,
          title: "Projet Communautaire des Étudiants",
          excerpt: "Nos étudiants organisent une collecte de fonds pour soutenir l'éducation dans les communautés rurales.",
          category: "community",
          date: "2024-03-18",
          author: "Vie Scolaire",
          image: "/news/community-project.jpg",
          featured: false
        },
        {
          id: 6,
          title: "Compétition de Débats Bilingues",
          excerpt: "Victoire de notre équipe de débats à la compétition nationale de débats bilingues.",
          category: "academic",
          date: "2024-02-22",
          author: "Département des Langues",
          image: "/news/debate-competition.jpg",
          featured: false
        }
      ]
    },
    en: {
      title: "News",
      subtitle: "Stay updated with the latest news and developments from our school",
      search: "Search news...",
      categories: {
        all: "All Categories",
        academic: "Academic",
        events: "Events",
        sports: "Sports",
        community: "Community"
      },
      news: [
        {
          id: 1,
          title: "Outstanding Baccalaureate Results 2024",
          excerpt: "Our students have once again demonstrated excellence with a 95% success rate in the 2024 Baccalaureate.",
          category: "academic",
          date: "2024-07-15",
          author: "Academic Directorate",
          image: "/news/bac-results.jpg",
          featured: true
        },
        {
          id: 2,
          title: "Inter-School Sports Tournament",
          excerpt: "Remarkable participation from our football and basketball teams in the annual inter-school tournament.",
          category: "sports",
          date: "2024-06-20",
          author: "Sports Department",
          image: "/news/sports-tournament.jpg",
          featured: false
        },
        {
          id: 3,
          title: "Open Day 2024",
          excerpt: "Come discover our institution and programs at our annual open day event.",
          category: "events",
          date: "2024-05-10",
          author: "Admissions Office",
          image: "/news/open-day.jpg",
          featured: true
        },
        {
          id: 4,
          title: "New Science Laboratory",
          excerpt: "Inauguration of our new fully equipped science laboratory for advanced experiments.",
          category: "academic",
          date: "2024-04-05",
          author: "Science Department",
          image: "/news/science-lab.jpg",
          featured: false
        },
        {
          id: 5,
          title: "Student Community Project",
          excerpt: "Our students organize a fundraising event to support education in rural communities.",
          category: "community",
          date: "2024-03-18",
          author: "Student Life",
          image: "/news/community-project.jpg",
          featured: false
        },
        {
          id: 6,
          title: "Bilingual Debate Competition",
          excerpt: "Our debate team wins the national bilingual debate competition.",
          category: "academic",
          date: "2024-02-22",
          author: "Language Department",
          image: "/news/debate-competition.jpg",
          featured: false
        }
      ]
    }
  }

  const t = newsContent[language]

  const filteredNews = t.news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredNews = filteredNews.filter(item => item.featured)
  const regularNews = filteredNews.filter(item => !item.featured)

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', options)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description="Latest news and updates from École Saint Pierre Claver. Stay informed about academic achievements, events, and school developments."
        keywords="school news, academic updates, events, achievements, Saint Pierre Claver"
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

      {/* Search and Filter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8"
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
              >
                {Object.entries(t.categories).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Featured News */}
          {featuredNews.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-primary-brown mb-6">
                {language === 'fr' ? 'Actualités en Vedette' : 'Featured News'}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredNews.map((item, index) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="card group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-primary-cream to-secondary-light h-48 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-4xl text-primary-brown">📰</div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={16} />
                        <span>{item.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary-brown mb-3 group-hover:text-primary-dark transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-primary-cream text-primary-brown px-3 py-1 rounded-full text-sm font-medium">
                        {t.categories[item.category]}
                      </span>
                      <ArrowRight className="text-primary-brown group-hover:translate-x-2 transition-transform" />
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* Regular News */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-primary-brown mb-6">
              {language === 'fr' ? 'Toutes les Actualités' : 'All News'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNews.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="card group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-primary-cream to-secondary-light h-32 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-2xl text-primary-brown">📰</div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{formatDate(item.date)}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-primary-brown mb-2 group-hover:text-primary-dark transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-primary-cream text-primary-brown px-2 py-1 rounded-full text-xs font-medium">
                      {t.categories[item.category]}
                    </span>
                    <ArrowRight size={16} className="text-primary-brown group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredNews.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {language === 'fr' ? 'Aucun article trouvé' : 'No articles found'}
                </h3>
                <p className="text-gray-500">
                  {language === 'fr' 
                    ? 'Essayez de modifier vos critères de recherche' 
                    : 'Try adjusting your search criteria'
                  }
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default News