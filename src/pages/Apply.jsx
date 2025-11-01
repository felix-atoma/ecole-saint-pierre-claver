import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  User, Mail, Phone, MapPin, Calendar, BookOpen, 
  Upload, CheckCircle, ArrowRight, School, Users,
  ChevronLeft, ChevronRight
} from 'lucide-react'
import SEO from '../components/SEO'

const Apply = () => {
  const { language } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    // Student Information
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    nationality: '',
    
    // Contact Information
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    city: '',
    
    // Academic Information
    gradeLevel: '',
    previousSchool: '',
    languageProficiency: '',
    specialNeeds: '',
    
    // Documents
    birthCertificate: null,
    previousReports: null,
    photo: null
  })

  const applicationContent = {
    fr: {
      title: "Demande d'Admission",
      subtitle: "Rejoignez notre communauté éducative d'excellence",
      steps: [
        { number: 1, title: "Informations de l'Étudiant", description: "Détails personnels" },
        { number: 2, title: "Informations de Contact", description: "Coordonnées des parents" },
        { number: 3, title: "Informations Académiques", description: "Niveau et antécédents" },
        { number: 4, title: "Documents", description: "Pièces justificatives" },
        { number: 5, title: "Confirmation", description: "Vérification finale" }
      ],
      studentInfo: {
        title: "Informations de l'Étudiant",
        fields: {
          firstName: "Prénom",
          lastName: "Nom",
          birthDate: "Date de Naissance",
          gender: "Genre",
          nationality: "Nationalité"
        },
        genderOptions: [
          { value: "male", label: "Masculin" },
          { value: "female", label: "Féminin" }
        ]
      },
      contactInfo: {
        title: "Informations de Contact",
        fields: {
          parentName: "Nom du Parent/Tuteur",
          parentEmail: "Email du Parent",
          parentPhone: "Téléphone du Parent",
          address: "Adresse",
          city: "Ville"
        }
      },
      academicInfo: {
        title: "Informations Académiques",
        fields: {
          gradeLevel: "Niveau Scolaire Demandé",
          previousSchool: "École Précédente",
          languageProficiency: "Maîtrise des Langues",
          specialNeeds: "Besoins Spéciaux"
        },
        gradeOptions: [
          { value: "nursery", label: "Maternelle" },
          { value: "primary1", label: "Primaire - 1ère Année" },
          { value: "primary2", label: "Primaire - 2ème Année" },
          { value: "primary3", label: "Primaire - 3ème Année" },
          { value: "primary4", label: "Primaire - 4ème Année" },
          { value: "primary5", label: "Primaire - 5ème Année" },
          { value: "middle1", label: "Collège - 6ème" },
          { value: "middle2", label: "Collège - 5ème" },
          { value: "middle3", label: "Collège - 4ème" },
          { value: "middle4", label: "Collège - 3ème" },
          { value: "high1", label: "Lycée - 2nde" },
          { value: "high2", label: "Lycée - 1ère" },
          { value: "high3", label: "Lycée - Terminale" }
        ],
        languageOptions: [
          { value: "beginner", label: "Débutant" },
          { value: "intermediate", label: "Intermédiaire" },
          { value: "advanced", label: "Avancé" },
          { value: "fluent", label: "Courant" }
        ]
      },
      documents: {
        title: "Documents Requis",
        requirements: [
          "Copie de l'acte de naissance",
          "Bulletins des 2 dernières années",
          "Photo d'identité récente",
          "Certificat de vaccination",
          "Attestation de transfert (le cas échéant)"
        ],
        uploadFields: {
          birthCertificate: "Acte de Naissance",
          previousReports: "Bulletins Scolaires",
          photo: "Photo d'Identité"
        }
      },
      confirmation: {
        title: "Confirmation de la Demande",
        summary: "Vérifiez les informations avant de soumettre votre demande",
        terms: "J'accepte les conditions d'admission et confirme l'exactitude des informations fournies."
      },
      buttons: {
        next: "Suivant",
        previous: "Précédent",
        submit: "Soumettre la Demande",
        saving: "Envoi en cours..."
      }
    },
    en: {
      title: "Admission Application",
      subtitle: "Join our community of educational excellence",
      steps: [
        { number: 1, title: "Student Information", description: "Personal details" },
        { number: 2, title: "Contact Information", description: "Parent coordinates" },
        { number: 3, title: "Academic Information", description: "Level and background" },
        { number: 4, title: "Documents", description: "Supporting documents" },
        { number: 5, title: "Confirmation", description: "Final verification" }
      ],
      studentInfo: {
        title: "Student Information",
        fields: {
          firstName: "First Name",
          lastName: "Last Name",
          birthDate: "Date of Birth",
          gender: "Gender",
          nationality: "Nationality"
        },
        genderOptions: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" }
        ]
      },
      contactInfo: {
        title: "Contact Information",
        fields: {
          parentName: "Parent/Guardian Name",
          parentEmail: "Parent Email",
          parentPhone: "Parent Phone",
          address: "Address",
          city: "City"
        }
      },
      academicInfo: {
        title: "Academic Information",
        fields: {
          gradeLevel: "Requested Grade Level",
          previousSchool: "Previous School",
          languageProficiency: "Language Proficiency",
          specialNeeds: "Special Needs"
        },
        gradeOptions: [
          { value: "nursery", label: "Nursery" },
          { value: "primary1", label: "Primary - Year 1" },
          { value: "primary2", label: "Primary - Year 2" },
          { value: "primary3", label: "Primary - Year 3" },
          { value: "primary4", label: "Primary - Year 4" },
          { value: "primary5", label: "Primary - Year 5" },
          { value: "middle1", label: "Middle School - Grade 6" },
          { value: "middle2", label: "Middle School - Grade 7" },
          { value: "middle3", label: "Middle School - Grade 8" },
          { value: "middle4", label: "Middle School - Grade 9" },
          { value: "high1", label: "High School - Grade 10" },
          { value: "high2", label: "High School - Grade 11" },
          { value: "high3", label: "High School - Grade 12" }
        ],
        languageOptions: [
          { value: "beginner", label: "Beginner" },
          { value: "intermediate", label: "Intermediate" },
          { value: "advanced", label: "Advanced" },
          { value: "fluent", label: "Fluent" }
        ]
      },
      documents: {
        title: "Required Documents",
        requirements: [
          "Copy of birth certificate",
          "Report cards from last 2 years",
          "Recent passport photo",
          "Vaccination certificate",
          "Transfer certificate (if applicable)"
        ],
        uploadFields: {
          birthCertificate: "Birth Certificate",
          previousReports: "School Reports",
          photo: "Passport Photo"
        }
      },
      confirmation: {
        title: "Application Confirmation",
        summary: "Review information before submitting your application",
        terms: "I accept the admission terms and confirm the accuracy of provided information."
      },
      buttons: {
        next: "Next",
        previous: "Previous",
        submit: "Submit Application",
        saving: "Submitting..."
      }
    }
  }

  // Carousel images data
  const carouselImages = [
    {
      src: "/apply/application-process.jpg",
      alt: language === 'fr' ? "Processus de demande" : "Application process",
      title: language === 'fr' ? "Démarrez Votre Aventure" : "Start Your Journey",
      description: language === 'fr' 
        ? "Rejoignez notre communauté éducative en quelques étapes simples"
        : "Join our educational community in a few simple steps"
    },
    {
      src: "/apply/student-success.jpg",
      alt: language === 'fr' ? "Réussite étudiante" : "Student success",
      title: language === 'fr' ? "Excellence Académique" : "Academic Excellence",
      description: language === 'fr' 
        ? "Formation bilingue d'excellence pour préparer l'avenir"
        : "Bilingual excellence education to prepare for the future"
    },
    {
      src: "/apply/support-team.jpg",
      alt: language === 'fr' ? "Équipe de support" : "Support team",
      title: language === 'fr' ? "Accompagnement Personnalisé" : "Personalized Support",
      description: language === 'fr' 
        ? "Notre équipe vous guide à chaque étape de l'admission"
        : "Our team guides you through every step of admission"
    },
    {
      src: "/apply/campus-life.jpg",
      alt: language === 'fr' ? "Vie sur le campus" : "Campus life",
      title: language === 'fr' ? "Environnement Stimulant" : "Inspiring Environment",
      description: language === 'fr' 
        ? "Découvrez un cadre d'apprentissage exceptionnel"
        : "Discover an exceptional learning environment"
    },
    {
      src: "/apply/future-ready.jpg",
      alt: language === 'fr' ? "Prêt pour l'avenir" : "Future ready",
      title: language === 'fr' ? "Préparation à l'Avenir" : "Future Preparation",
      description: language === 'fr' 
        ? "Formation complète pour réussir dans un monde globalisé"
        : "Comprehensive training to succeed in a globalized world"
    }
  ]

  const t = applicationContent[language]

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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }))
  }

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5))
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Application submitted:', formData)
    // In real implementation, send to backend
    nextStep()
  }

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.birthDate && formData.gender && formData.nationality
      case 2:
        return formData.parentName && formData.parentEmail && formData.parentPhone && formData.address && formData.city
      case 3:
        return formData.gradeLevel && formData.previousSchool && formData.languageProficiency
      case 4:
        return formData.birthCertificate && formData.previousReports && formData.photo
      default:
        return true
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description="Apply for admission to École Saint Pierre Claver. Online application form for bilingual Catholic education in Ghana."
        keywords="admission application, apply online, school admission, enrollment"
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

      {/* Application Process */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex justify-between items-center relative">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
              <div 
                className="absolute top-1/2 left-0 h-1 bg-primary-brown -translate-y-1/2 z-0 transition-all duration-500"
                style={{ width: `${((currentStep - 1) / (t.steps.length - 1)) * 100}%` }}
              ></div>

              {/* Steps */}
              {t.steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    currentStep >= step.number
                      ? 'bg-primary-brown text-white shadow-lg'
                      : 'bg-white text-gray-400 border-2 border-gray-300'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle size={20} />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="mt-3 text-center">
                    <div className={`font-semibold text-sm ${
                      currentStep >= step.number ? 'text-primary-brown' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit}>
              {/* Step 1: Student Information */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-primary-brown mb-6 flex items-center">
                    <User className="mr-3" size={24} />
                    {t.studentInfo.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        {t.studentInfo.fields.firstName} *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        {t.studentInfo.fields.lastName} *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        {t.studentInfo.fields.birthDate} *
                      </label>
                      <input
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        {t.studentInfo.fields.gender} *
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                        required
                      >
                        <option value="">{language === 'fr' ? 'Sélectionner' : 'Select'}</option>
                        {t.studentInfo.genderOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2 font-medium">
                        {t.studentInfo.fields.nationality} *
                      </label>
                      <input
                        type="text"
                        value={formData.nationality}
                        onChange={(e) => handleInputChange('nationality', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Contact Information */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-primary-brown mb-6 flex items-center">
                    <Users className="mr-3" size={24} />
                    {t.contactInfo.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2 font-medium">
                        {t.contactInfo.fields.parentName} *
                      </label>
                      <input
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => handleInputChange('parentName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        {t.contactInfo.fields.parentEmail} *
                      </label>
                      <input
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        {t.contactInfo.fields.parentPhone} *
                      </label>
                      <input
                        type="tel"
                        value={formData.parentPhone}
                        onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2 font-medium">
                        {t.contactInfo.fields.address} *
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        {t.contactInfo.fields.city} *
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Academic Information */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-primary-brown mb-6 flex items-center">
                    <School className="mr-3" size={24} />
                    {t.academicInfo.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        {t.academicInfo.fields.gradeLevel} *
                      </label>
                      <select
                        value={formData.gradeLevel}
                        onChange={(e) => handleInputChange('gradeLevel', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                        required
                      >
                        <option value="">{language === 'fr' ? 'Sélectionner' : 'Select'}</option>
                        {t.academicInfo.gradeOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        {t.academicInfo.fields.languageProficiency} *
                      </label>
                      <select
                        value={formData.languageProficiency}
                        onChange={(e) => handleInputChange('languageProficiency', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                        required
                      >
                        <option value="">{language === 'fr' ? 'Sélectionner' : 'Select'}</option>
                        {t.academicInfo.languageOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2 font-medium">
                        {t.academicInfo.fields.previousSchool} *
                      </label>
                      <input
                        type="text"
                        value={formData.previousSchool}
                        onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2 font-medium">
                        {t.academicInfo.fields.specialNeeds}
                      </label>
                      <textarea
                        value={formData.specialNeeds}
                        onChange={(e) => handleInputChange('specialNeeds', e.target.value)}
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                        placeholder={language === 'fr' ? 'Décrivez les besoins spécifiques...' : 'Describe specific needs...'}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Documents */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-primary-brown mb-6 flex items-center">
                    <Upload className="mr-3" size={24} />
                    {t.documents.title}
                  </h2>
                  
                  {/* Document Requirements */}
                  <div className="bg-primary-cream rounded-lg p-6 mb-8">
                    <h3 className="font-semibold text-primary-brown mb-4">
                      {language === 'fr' ? 'Documents Requis' : 'Required Documents'}
                    </h3>
                    <ul className="space-y-2">
                      {t.documents.requirements.map((req, index) => (
                        <li key={index} className="flex items-center space-x-3 text-gray-700">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* File Uploads */}
                  <div className="space-y-6">
                    {Object.entries(t.documents.uploadFields).map(([field, label]) => (
                      <div key={field}>
                        <label className="block text-gray-700 mb-2 font-medium">
                          {label} *
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-brown transition-colors cursor-pointer">
                          <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                          <p className="text-gray-600 mb-2">
                            {language === 'fr' ? 'Cliquez pour télécharger ou glissez-déposez' : 'Click to upload or drag and drop'}
                          </p>
                          <p className="text-sm text-gray-500">
                            PDF, JPG, PNG {language === 'fr' ? 'jusqu\'à 10MB' : 'up to 10MB'}
                          </p>
                          <input
                            type="file"
                            onChange={(e) => handleFileUpload(field, e.target.files[0])}
                            className="hidden"
                            id={field}
                            accept=".pdf,.jpg,.jpeg,.png"
                          />
                          <label htmlFor={field} className="btn-primary inline-block mt-2 cursor-pointer">
                            {language === 'fr' ? 'Choisir le Fichier' : 'Choose File'}
                          </label>
                          {formData[field] && (
                            <p className="text-green-600 mt-2">
                              ✓ {formData[field].name}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Confirmation */}
              {currentStep === 5 && (
                <div>
                  <h2 className="text-2xl font-bold text-primary-brown mb-6 flex items-center">
                    <CheckCircle className="mr-3" size={24} />
                    {t.confirmation.title}
                  </h2>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-primary-brown mb-4">
                      {t.confirmation.summary}
                    </h3>
                    
                    {/* Application Summary */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <strong>{t.studentInfo.fields.firstName}:</strong> {formData.firstName}
                        </div>
                        <div>
                          <strong>{t.studentInfo.fields.lastName}:</strong> {formData.lastName}
                        </div>
                        <div>
                          <strong>{t.studentInfo.fields.birthDate}:</strong> {formData.birthDate}
                        </div>
                        <div>
                          <strong>{t.studentInfo.fields.gender}:</strong> {
                            t.studentInfo.genderOptions.find(g => g.value === formData.gender)?.label
                          }
                        </div>
                        <div className="md:col-span-2">
                          <strong>{t.contactInfo.fields.parentName}:</strong> {formData.parentName}
                        </div>
                        <div>
                          <strong>{t.contactInfo.fields.parentEmail}:</strong> {formData.parentEmail}
                        </div>
                        <div>
                          <strong>{t.academicInfo.fields.gradeLevel}:</strong> {
                            t.academicInfo.gradeOptions.find(g => g.value === formData.gradeLevel)?.label
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start space-x-3 mb-6">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1"
                      required
                    />
                    <label htmlFor="terms" className="text-gray-700 text-sm">
                      {t.confirmation.terms}
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    {t.buttons.previous}
                  </button>
                )}
                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid(currentStep)}
                    className="btn-primary ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t.buttons.next}
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-primary ml-auto"
                  >
                    {t.buttons.submit}
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className="section-padding bg-primary-cream">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-brown mb-4">
              {language === 'fr' ? 'Besoin d\'Aide ?' : 'Need Help?'}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {language === 'fr' 
                ? 'Notre équipe des admissions est là pour vous accompagner dans votre démarche'
                : 'Our admissions team is here to guide you through the process'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:admissions@stpierreclaver.edu.gh"
                className="btn-primary"
              >
                {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
              </a>
              <a
                href="/admissions"
                className="btn-secondary"
              >
                {language === 'fr' ? 'En Savoir Plus' : 'Learn More'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Apply