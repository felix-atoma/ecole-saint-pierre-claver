import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { X, ChevronLeft, ChevronRight, Download, Play, Calendar, Users, MapPin, Clock, Filter } from 'lucide-react'
import SEO from '../components/SEO'

const Gallery = () => {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'masonry'

  const galleryContent = {
    fr: {
      title: "Galerie",
      subtitle: "Explorez la vie vibrante de notre école à travers nos photos et vidéos",
      description: "Découvrez les moments précieux de notre communauté éducative, des activités académiques aux événements culturels en passant par les compétitions sportives.",
      stats: {
        photos: "500+",
        videos: "50+",
        events: "100+",
        years: "10+"
      },
      categories: {
        all: "Toutes les photos",
        campus: "Campus",
        events: "Événements",
        academic: "Académique",
        sports: "Sports",
        community: "Communauté",
        arts: "Arts & Culture"
      },
      featuredEvents: [
        {
          id: 1,
          title: "Journée Portes Ouvertes 2024",
          date: "15 Mars 2024",
          participants: "200+ visiteurs",
          description: "Découverte de notre campus et de nos programmes éducatifs"
        },
        {
          id: 2,
          title: "Tournoi Sportif Annuel",
          date: "20 Avril 2024",
          participants: "15 équipes",
          description: "Compétition inter-classes de football et basketball"
        },
        {
          id: 3,
          title: "Festival des Arts",
          date: "10 Mai 2024",
          participants: "300 étudiants",
          description: "Exposition des talents artistiques de nos étudiants"
        }
      ],
      images: [
        {
          id: 1,
          title: "Campus Vue Aérienne",
          description: "Vue panoramique de notre beau campus avec ses installations modernes et ses espaces verts",
          category: "campus",
          type: "image",
          url: "/gallery/campus-aerial.jpg",
          featured: true,
          date: "2024-01-15",
          location: "Campus Principal",
          tags: ["campus", "vue", "architecture"]
        },
        {
          id: 2,
          title: "Cérémonie de Remise des Diplômes",
          description: "Nos étudiants célèbrent leurs succès académiques lors de la cérémonie annuelle",
          category: "academic",
          type: "image",
          url: "/gallery/graduation.jpg",
          featured: true,
          date: "2024-06-20",
          location: "Auditorium Principal",
          tags: ["diplôme", "cérémonie", "réussite"]
        },
        {
          id: 3,
          title: "Tournoi de Football Inter-scolaire",
          description: "Compétition sportive intense entre nos équipes et les écoles partenaires",
          category: "sports",
          type: "image",
          url: "/gallery/football-tournament.jpg",
          featured: true,
          date: "2024-04-15",
          location: "Stade de l'École",
          tags: ["football", "compétition", "sport"]
        },
        {
          id: 4,
          title: "Laboratoire de Sciences Avancées",
          description: "Étudiants menant des expériences scientifiques dans nos laboratoires équipés",
          category: "academic",
          type: "image",
          url: "/gallery/science-lab.jpg",
          featured: false,
          date: "2024-02-10",
          location: "Bâtiment des Sciences",
          tags: ["science", "laboratoire", "expérience"]
        },
        {
          id: 5,
          title: "Festival Culturel International",
          description: "Célébration de la diversité culturelle de notre communauté étudiante",
          category: "events",
          type: "image",
          url: "/gallery/cultural-festival.jpg",
          featured: true,
          date: "2024-03-08",
          location: "Place Centrale",
          tags: ["culture", "diversité", "festival"]
        },
        {
          id: 6,
          title: "Bibliothèque Moderne",
          description: "Espace d'étude et de recherche équipé de ressources numériques",
          category: "campus",
          type: "image",
          url: "/gallery/library.jpg",
          featured: false,
          date: "2024-01-20",
          location: "Bâtiment des Savoirs",
          tags: ["bibliothèque", "étude", "recherche"]
        },
        {
          id: 7,
          title: "Projet Communautaire Environnemental",
          description: "Engagement des étudiants dans des activités de service communautaire durable",
          category: "community",
          type: "image",
          url: "/gallery/community-service.jpg",
          featured: false,
          date: "2024-05-12",
          location: "Jardin Communautaire",
          tags: ["communauté", "environnement", "service"]
        },
        {
          id: 8,
          title: "Salle de Classe Interactive",
          description: "Environnement d'apprentissage moderne et technologiquement équipé",
          category: "academic",
          type: "image",
          url: "/gallery/classroom.jpg",
          featured: false,
          date: "2024-02-28",
          location: "Bâtiment Pédagogique",
          tags: ["classe", "technologie", "apprentissage"]
        },
        {
          id: 9,
          title: "Compétition de Débats Bilingues",
          description: "Nos étudiants excellent en art oratoire bilingue français-anglais",
          category: "academic",
          type: "image",
          url: "/gallery/debate-competition.jpg",
          featured: false,
          date: "2024-04-05",
          location: "Salle de Conférence",
          tags: ["débat", "oratoire", "bilingue"]
        },
        {
          id: 10,
          title: "Atelier d'Art Visuel",
          description: "Expression créative dans notre studio d'art entièrement équipé",
          category: "arts",
          type: "image",
          url: "/gallery/art-workshop.jpg",
          featured: true,
          date: "2024-03-15",
          location: "Studio d'Art",
          tags: ["art", "créativité", "atelier"]
        },
        {
          id: 11,
          title: "Concert des Talents Musicaux",
          description: "Performance musicale mettant en valeur les talents de nos étudiants",
          category: "arts",
          type: "image",
          url: "/gallery/music-concert.jpg",
          featured: false,
          date: "2024-05-20",
          location: "Auditorium de Musique",
          tags: ["musique", "concert", "talent"]
        },
        {
          id: 12,
          title: "Cours d'Éducation Physique",
          description: "Activités sportives et développement physique des étudiants",
          category: "sports",
          type: "image",
          url: "/gallery/physical-education.jpg",
          featured: false,
          date: "2024-02-14",
          location: "Gymnase Principal",
          tags: ["sport", "éducation", "physique"]
        }
      ],
      videos: [
        {
          id: 101,
          title: "Visite Virtuelle du Campus",
          description: "Découvrez nos installations en visite guidée virtuelle",
          category: "campus",
          type: "video",
          url: "/gallery/campus-tour.mp4",
          thumbnail: "/gallery/campus-tour-thumb.jpg",
          duration: "5:30",
          featured: true
        },
        {
          id: 102,
          title: "Documentaire des Projets Scolaires",
          description: "Regardez nos étudiants présenter leurs projets innovants",
          category: "academic",
          type: "video",
          url: "/gallery/project-documentary.mp4",
          thumbnail: "/gallery/project-doc-thumb.jpg",
          duration: "8:15",
          featured: false
        }
      ]
    },
    en: {
      title: "Gallery",
      subtitle: "Explore the vibrant life of our school through our photos and videos",
      description: "Discover precious moments from our educational community, from academic activities to cultural events and sports competitions.",
      stats: {
        photos: "500+",
        videos: "50+",
        events: "100+",
        years: "10+"
      },
      categories: {
        all: "All Photos",
        campus: "Campus",
        events: "Events",
        academic: "Academic",
        sports: "Sports",
        community: "Community",
        arts: "Arts & Culture"
      },
      featuredEvents: [
        {
          id: 1,
          title: "Open House 2024",
          date: "March 15, 2024",
          participants: "200+ visitors",
          description: "Discovery of our campus and educational programs"
        },
        {
          id: 2,
          title: "Annual Sports Tournament",
          date: "April 20, 2024",
          participants: "15 teams",
          description: "Inter-class football and basketball competition"
        },
        {
          id: 3,
          title: "Arts Festival",
          date: "May 10, 2024",
          participants: "300 students",
          description: "Exhibition of our students' artistic talents"
        }
      ],
      images: [
        {
          id: 1,
          title: "Campus Aerial View",
          description: "Panoramic view of our beautiful campus with modern facilities and green spaces",
          category: "campus",
          type: "image",
          url: "/gallery/campus-aerial.jpg",
          featured: true,
          date: "2024-01-15",
          location: "Main Campus",
          tags: ["campus", "view", "architecture"]
        },
        {
          id: 2,
          title: "Graduation Ceremony",
          description: "Our students celebrate their academic successes at the annual ceremony",
          category: "academic",
          type: "image",
          url: "/gallery/graduation.jpg",
          featured: true,
          date: "2024-06-20",
          location: "Main Auditorium",
          tags: ["graduation", "ceremony", "achievement"]
        },
        {
          id: 3,
          title: "Inter-school Football Tournament",
          description: "Intense sports competition between our teams and partner schools",
          category: "sports",
          type: "image",
          url: "/gallery/football-tournament.jpg",
          featured: true,
          date: "2024-04-15",
          location: "School Stadium",
          tags: ["football", "competition", "sports"]
        },
        {
          id: 4,
          title: "Advanced Science Laboratory",
          description: "Students conducting scientific experiments in our equipped laboratories",
          category: "academic",
          type: "image",
          url: "/gallery/science-lab.jpg",
          featured: false,
          date: "2024-02-10",
          location: "Science Building",
          tags: ["science", "laboratory", "experiment"]
        },
        {
          id: 5,
          title: "International Cultural Festival",
          description: "Celebration of our student community's cultural diversity",
          category: "events",
          type: "image",
          url: "/gallery/cultural-festival.jpg",
          featured: true,
          date: "2024-03-08",
          location: "Central Plaza",
          tags: ["culture", "diversity", "festival"]
        },
        {
          id: 6,
          title: "Modern Library",
          description: "Study and research space equipped with digital resources",
          category: "campus",
          type: "image",
          url: "/gallery/library.jpg",
          featured: false,
          date: "2024-01-20",
          location: "Knowledge Building",
          tags: ["library", "study", "research"]
        },
        {
          id: 7,
          title: "Environmental Community Project",
          description: "Student engagement in sustainable community service activities",
          category: "community",
          type: "image",
          url: "/gallery/community-service.jpg",
          featured: false,
          date: "2024-05-12",
          location: "Community Garden",
          tags: ["community", "environment", "service"]
        },
        {
          id: 8,
          title: "Interactive Classroom",
          description: "Modern learning environment technologically equipped",
          category: "academic",
          type: "image",
          url: "/gallery/classroom.jpg",
          featured: false,
          date: "2024-02-28",
          location: "Educational Building",
          tags: ["classroom", "technology", "learning"]
        },
        {
          id: 9,
          title: "Bilingual Debate Competition",
          description: "Our students excel in French-English oratory arts",
          category: "academic",
          type: "image",
          url: "/gallery/debate-competition.jpg",
          featured: false,
          date: "2024-04-05",
          location: "Conference Room",
          tags: ["debate", "oratory", "bilingual"]
        },
        {
          id: 10,
          title: "Visual Art Workshop",
          description: "Creative expression in our fully equipped art studio",
          category: "arts",
          type: "image",
          url: "/gallery/art-workshop.jpg",
          featured: true,
          date: "2024-03-15",
          location: "Art Studio",
          tags: ["art", "creativity", "workshop"]
        },
        {
          id: 11,
          title: "Musical Talents Concert",
          description: "Musical performance showcasing our students' talents",
          category: "arts",
          type: "image",
          url: "/gallery/music-concert.jpg",
          featured: false,
          date: "2024-05-20",
          location: "Music Auditorium",
          tags: ["music", "concert", "talent"]
        },
        {
          id: 12,
          title: "Physical Education Class",
          description: "Sports activities and physical development of students",
          category: "sports",
          type: "image",
          url: "/gallery/physical-education.jpg",
          featured: false,
          date: "2024-02-14",
          location: "Main Gymnasium",
          tags: ["sports", "education", "physical"]
        }
      ],
      videos: [
        {
          id: 101,
          title: "Virtual Campus Tour",
          description: "Discover our facilities through a guided virtual tour",
          category: "campus",
          type: "video",
          url: "/gallery/campus-tour.mp4",
          thumbnail: "/gallery/campus-tour-thumb.jpg",
          duration: "5:30",
          featured: true
        },
        {
          id: 102,
          title: "School Projects Documentary",
          description: "Watch our students present their innovative projects",
          category: "academic",
          type: "video",
          url: "/gallery/project-documentary.mp4",
          thumbnail: "/gallery/project-doc-thumb.jpg",
          duration: "8:15",
          featured: false
        }
      ]
    }
  }

  const t = galleryContent[language]

  const filteredImages = t.images.filter(image => 
    selectedCategory === 'all' || image.category === selectedCategory
  )

  const featuredImages = filteredImages.filter(image => image.featured)
  const regularImages = filteredImages.filter(image => !image.featured)

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setCurrentIndex(0)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description={t.description}
        keywords={language === 'fr' 
          ? "galerie école, photos campus, événements scolaires, activités académiques, sports école, communauté étudiante"
          : "school gallery, campus photos, school events, academic activities, school sports, student community"
        }
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-brown to-primary-brown-dark text-white py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/gallery/hero-gallery.jpg')",
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-cream/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-brown/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-primary-cream mb-6 max-w-3xl mx-auto leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-primary-cream-light max-w-2xl mx-auto mb-8"
          >
            {t.description}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {Object.entries(t.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{value}</div>
                <div className="text-primary-cream text-sm uppercase tracking-wider">
                  {language === 'fr' 
                    ? key === 'photos' ? 'Photos' 
                      : key === 'videos' ? 'Vidéos'
                      : key === 'events' ? 'Événements'
                      : 'Années'
                    : key === 'photos' ? 'Photos'
                      : key === 'videos' ? 'Videos'
                      : key === 'events' ? 'Events'
                      : 'Years'
                  }
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              {language === 'fr' ? 'Événements Marquants' : 'Featured Events'}
            </h2>
            <p className="section-subtitle">
              {language === 'fr' 
                ? 'Découvrez les moments forts de notre communauté scolaire'
                : 'Discover the highlights of our school community'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {t.featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-primary-brown to-secondary-gold h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="text-4xl text-white">🎉</div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <h3 className="text-xl font-bold text-primary-brown mb-3">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary-brown" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-primary-brown" />
                    {event.participants}
                  </div>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category Filter and View Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12"
          >
            <div className="flex flex-wrap gap-3">
              {Object.entries(t.categories).map(([key, value]) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === key
                      ? 'bg-primary-brown text-white shadow-lg'
                      : 'bg-white text-primary-brown hover:bg-primary-brown hover:text-white shadow-md'
                  }`}
                >
                  <Filter size={16} />
                  <span>{value}</span>
                </motion.button>
              ))}
            </div>

            <div className="flex items-center space-x-4 bg-white rounded-lg p-2 shadow-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-all ${
                  viewMode === 'grid' ? 'bg-primary-brown text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-1">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded transition-all ${
                  viewMode === 'masonry' ? 'bg-primary-brown text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="w-4 h-4 flex space-x-1">
                  <div className="w-1 bg-current rounded-sm"></div>
                  <div className="w-1 bg-current rounded-sm"></div>
                  <div className="w-1 bg-current rounded-sm"></div>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Featured Images */}
          {featuredImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-primary-brown mb-8 flex items-center">
                <span className="w-2 h-8 bg-primary-brown rounded-full mr-3"></span>
                {language === 'fr' ? 'Photos en Vedette' : 'Featured Photos'}
              </h2>
              <div className={`grid grid-cols-1 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'} gap-6`}>
                {featuredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="card group cursor-pointer overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => openLightbox(image, filteredImages.findIndex(img => img.id === image.id))}
                  >
                    <div className="relative overflow-hidden">
                      <div className="bg-gradient-to-br from-primary-brown to-secondary-gold h-64 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="text-4xl text-white">📸</div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                            <Download className="text-white" size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-primary-brown mb-2 line-clamp-1">
                        {image.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{image.description}</p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {image.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {image.location}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {image.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-primary-cream text-primary-brown px-2 py-1 rounded-full text-xs">
                            #{tag}
                          </span>
                        ))}
                        {image.tags.length > 2 && (
                          <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                            +{image.tags.length - 2}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="inline-block bg-primary-cream text-primary-brown px-3 py-1 rounded-full text-sm font-medium">
                          {t.categories[image.category]}
                        </span>
                        <button className="text-primary-brown hover:text-primary-brown-dark transition-colors">
                          <Download size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* All Images */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-primary-brown mb-8 flex items-center">
              <span className="w-2 h-8 bg-primary-brown rounded-full mr-3"></span>
              {language === 'fr' ? 'Toutes les Photos' : 'All Photos'}
            </h2>
            
            {filteredImages.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🖼️</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {language === 'fr' ? 'Aucune photo trouvée' : 'No photos found'}
                </h3>
                <p className="text-gray-500">
                  {language === 'fr' 
                    ? 'Aucune photo ne correspond à vos critères de filtrage' 
                    : 'No photos match your filtering criteria'
                  }
                </p>
              </motion.div>
            ) : (
              <div className={`grid gap-4 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
              }`}>
                {regularImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className={`cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${
                      viewMode === 'masonry' ? 'aspect-square' : 'aspect-[4/3]'
                    }`}
                    onClick={() => openLightbox(image, filteredImages.findIndex(img => img.id === image.id))}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-primary-cream to-secondary-light flex items-center justify-center relative overflow-hidden">
                      <div className="text-2xl text-primary-brown">📸</div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                        <div className="p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-white w-full bg-gradient-to-t from-black/80 to-transparent">
                          <h4 className="font-semibold text-sm mb-1 line-clamp-1">{image.title}</h4>
                          <p className="text-xs opacity-90 line-clamp-2">{image.description}</p>
                          <div className="flex items-center justify-between mt-2 text-xs">
                            <span className="bg-primary-brown/80 px-2 py-1 rounded-full">
                              {t.categories[image.category]}
                            </span>
                            <Download size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
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
              ? 'Partagez Vos Moments Préférés' 
              : 'Share Your Favorite Moments'
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
              ? 'Rejoignez notre communauté et partagez vos photos et souvenirs de l\'école'
              : 'Join our community and share your school photos and memories'
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
              {language === 'fr' ? 'Soumettre une Photo' : 'Submit a Photo'}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-brown transition-all duration-300">
              {language === 'fr' ? 'Voir Plus d\'Événements' : 'View More Events'}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-full bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image/Media Section */}
                <div className="lg:w-2/3 bg-gradient-to-br from-primary-brown to-secondary-gold min-h-96 flex items-center justify-center p-8">
                  <div className="text-8xl text-white">📸</div>
                </div>

                {/* Info Section */}
                <div className="lg:w-1/3 p-8">
                  <h3 className="text-2xl font-bold text-primary-brown mb-4">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedImage.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-3 text-primary-brown" />
                      <span>{selectedImage.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-3 text-primary-brown" />
                      <span>{selectedImage.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-3 text-primary-brown" />
                      <span>{currentIndex + 1} / {filteredImages.length}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary-brown mb-2">
                      {language === 'fr' ? 'Tags' : 'Tags'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedImage.tags.map((tag, index) => (
                        <span key={index} className="bg-primary-cream text-primary-brown px-3 py-1 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-primary-brown text-white px-4 py-2 rounded-full text-sm font-medium">
                      {t.categories[selectedImage.category]}
                    </span>
                    <button className="btn-primary flex items-center space-x-2">
                      <Download size={20} />
                      <span>{language === 'fr' ? 'Télécharger' : 'Download'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary-brown p-4 rounded-full shadow-lg transition-all hover:scale-110"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary-brown p-4 rounded-full shadow-lg transition-all hover:scale-110"
              >
                <ChevronRight size={28} />
              </button>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-primary-brown p-3 rounded-full shadow-lg transition-all hover:scale-110"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery