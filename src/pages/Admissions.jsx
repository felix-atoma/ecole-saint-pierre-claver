import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { ChevronLeft, ChevronRight, Download, Mail, Phone, Clock } from 'lucide-react'
import SEO from '../components/SEO'

const Admissions = () => {
  const { language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const admissionsContent = {
    fr: {
      title: "Admissions",
      subtitle: "Rejoignez notre communauté éducative d'excellence",
      process: {
        title: "Processus d'Admission",
        steps: [
          {
            step: "1",
            title: "Demande d'Information",
            description: "Contactez-nous pour obtenir le dossier d'inscription"
          },
          {
            step: "2",
            title: "Soumission du Dossier",
            description: "Complétez et soumettez le formulaire avec les documents requis"
          },
          {
            step: "3",
            title: "Test d'Entrée",
            description: "Évaluation des compétences académiques et linguistiques"
          },
          {
            step: "4",
            title: "Entretien",
            description: "Rencontre avec la direction et l'équipe pédagogique"
          },
          {
            step: "5",
            title: "Inscription Finale",
            description: "Complétion des formalités administratives"
          }
        ]
      },
      requirements: {
        title: "Documents Requis",
        items: [
          "Formulaire d'inscription dûment rempli",
          "Copie de l'acte de naissance",
          "Photos d'identité récentes",
          "Bulletins de notes des années précédentes",
          "Certificat de vaccination",
          "Attestation de transfert (le cas échéant)"
        ]
      },
      deadlines: {
        title: "Dates Limites",
        items: [
          "Rentrée de Septembre: Inscriptions avant le 30 Juin",
          "Rentrée de Janvier: Inscriptions avant le 30 Novembre",
          "Tests d'entrée: Mensuels selon disponibilité"
        ]
      },
      contact: {
        title: "Contact Admissions",
        email: "admissions@stpierreclaver.edu.gh",
        phone: "+233 XX XXX XXXX",
        hours: "Lundi - Vendredi: 8h00 - 16h00"
      }
    },
    en: {
      title: "Admissions",
      subtitle: "Join our community of educational excellence",
      process: {
        title: "Admission Process",
        steps: [
          {
            step: "1",
            title: "Information Request",
            description: "Contact us to obtain the application package"
          },
          {
            step: "2",
            title: "Document Submission",
            description: "Complete and submit the form with required documents"
          },
          {
            step: "3",
            title: "Entrance Test",
            description: "Assessment of academic and language skills"
          },
          {
            step: "4",
            title: "Interview",
            description: "Meeting with administration and teaching staff"
          },
          {
            step: "5",
            title: "Final Registration",
            description: "Completion of administrative formalities"
          }
        ]
      },
      requirements: {
        title: "Required Documents",
        items: [
          "Duly completed application form",
          "Copy of birth certificate",
          "Recent passport photographs",
          "Report cards from previous years",
          "Vaccination certificate",
          "Transfer certificate (if applicable)"
        ]
      },
      deadlines: {
        title: "Application Deadlines",
        items: [
          "September Intake: Applications before June 30th",
          "January Intake: Applications before November 30th",
          "Entrance Tests: Monthly based on availability"
        ]
      },
      contact: {
        title: "Admissions Contact",
        email: "admissions@stpierreclaver.edu.gh",
        phone: "+233 XX XXX XXXX",
        hours: "Monday - Friday: 8:00 AM - 4:00 PM"
      }
    }
  }

  const t = admissionsContent[language]

  // Carousel images data with placeholder images
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      alt: language === 'fr' ? "Entrée du campus" : "Campus entrance",
      title: language === 'fr' ? "Bienvenue au Campus" : "Welcome to Campus",
      description: language === 'fr' 
        ? "Découvrez notre environnement d'apprentissage exceptionnel"
        : "Discover our exceptional learning environment"
    },
    {
      src: "https://images.unsplash.com/photo-1588072432836-e10032781450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      alt: language === 'fr' ? "Étudiants en classe" : "Students in classroom",
      title: language === 'fr' ? "Excellence Académique" : "Academic Excellence",
      description: language === 'fr' 
        ? "Rejoignez une communauté dédiée à la réussite scolaire"
        : "Join a community dedicated to academic success"
    },
    {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: language === 'fr' ? "Bureau des admissions" : "Admissions office",
      title: language === 'fr' ? "Processus Simplifié" : "Streamlined Process",
      description: language === 'fr' 
        ? "Notre équipe vous accompagne à chaque étape de l'admission"
        : "Our team guides you through every step of admission"
    },
    {
      src: "https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
      alt: language === 'fr' ? "Activités étudiantes" : "Student activities",
      title: language === 'fr' ? "Vie Éducative Complète" : "Comprehensive Education",
      description: language === 'fr' 
        ? "Éducation complète alliant académique et développement personnel"
        : "Comprehensive education combining academics and personal development"
    },
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: language === 'fr' ? "Cérémonie de graduation" : "Graduation ceremony",
      title: language === 'fr' ? "Réussite et Accomplissement" : "Success and Achievement",
      description: language === 'fr' 
        ? "Rejoignez une tradition d'excellence et de réussite"
        : "Join a tradition of excellence and achievement"
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
        description="Admission process and requirements for École Saint Pierre Claver. Join our bilingual Catholic educational community in Accra, Ghana."
        keywords="admissions, application process, requirements, deadlines, school enrollment"
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

      {/* Admission Process */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">{t.process.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.process.steps.map((step, index) => (
              <div key={index} className="card text-center relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-brown text-white rounded-full w-8 h-8 flex items-center justify-center font-bold group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-primary-brown mt-4 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements and Deadlines */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div className="card group hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-primary-brown mb-6">{t.requirements.title}</h2>
              <ul className="space-y-3">
                {t.requirements.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary-cream transition-colors duration-300">
                    <div className="bg-primary-cream rounded-full p-1 mt-1 group-hover:bg-primary-brown transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary-brown rounded-full group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deadlines */}
            <div className="card group hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-primary-brown mb-6">{t.deadlines.title}</h2>
              <ul className="space-y-4">
                {t.deadlines.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 p-4 bg-primary-cream rounded-lg group-hover:bg-primary-brown transition-all duration-300 group-hover:text-white">
                    <div className="bg-primary-brown text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-white group-hover:text-primary-brown transition-colors duration-300">
                      {index + 1}
                    </div>
                    <span className="text-gray-600 group-hover:text-white transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-primary-cream">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title">{t.contact.title}</h2>
            <div className="card group hover:shadow-xl transition-all duration-300">
              <div className="space-y-6 text-lg">
                <div className="flex items-center justify-center space-x-3 text-gray-600">
                  <Mail size={20} className="text-primary-brown" />
                  <span><strong>Email:</strong> {t.contact.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-600">
                  <Phone size={20} className="text-primary-brown" />
                  <span><strong>Phone:</strong> {t.contact.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-600">
                  <Clock size={20} className="text-primary-brown" />
                  <span><strong>Office Hours:</strong> {t.contact.hours}</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary flex items-center justify-center space-x-2 group">
                  <Download size={20} />
                  <span>{language === 'fr' ? 'Télécharger le Formulaire' : 'Download Application Form'}</span>
                </button>
                <button className="btn-secondary">
                  {language === 'fr' ? 'Postuler en Ligne' : 'Apply Online'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Apply CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-brown to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'fr' ? 'Prêt à Nous Rejoindre ?' : 'Ready to Join Us?'}
          </h2>
          <p className="text-xl text-primary-cream mb-8 max-w-2xl mx-auto">
            {language === 'fr' 
              ? "Commencez votre parcours d'admission dès aujourd'hui"
              : "Start your admission journey today"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-brown px-8 py-4 rounded-lg font-semibold hover:bg-primary-cream transition-colors">
              {language === 'fr' ? 'Commencer la Demande' : 'Start Application'}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-brown transition-colors">
              {language === 'fr' ? 'Visiter le Campus' : 'Schedule Campus Tour'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admissions