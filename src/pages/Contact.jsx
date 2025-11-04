import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Mail, Phone, MapPin, Send, Clock, Users, BookOpen, Calendar, User, AlertCircle, CheckCircle } from 'lucide-react'
import SEO from '../components/SEO'
import { useNavigate } from 'react-router-dom'
import { messageService } from '../services/messageService'

const Contact = () => {
  const { language } = useLanguage()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    studentGrade: '',
    inquiryType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const contactContent = {
    fr: {
      title: "Contactez-Nous",
      subtitle: "Nous sommes là pour répondre à vos questions et vous accompagner",
      heroSubtitle: "Votre partenaire dans l'éducation bilingue d'excellence depuis 1970",
      form: {
        name: "Nom Complet",
        email: "Adresse Email",
        subject: "Sujet",
        message: "Message",
        studentGrade: "Niveau de l'élève",
        inquiryType: "Type de demande",
        submit: "Envoyer le Message",
        submitting: "Envoi en cours...",
        selectGrade: "Sélectionnez le niveau",
        selectInquiry: "Sélectionnez le type",
        grades: {
          preschool: "Maternelle",
          primary: "Primaire",
          jhs: "Collège",
          shs: "Lycée",
          other: "Autre"
        },
        inquiries: {
          admission: "Admission",
          information: "Information générale",
          visit: "Visite du campus",
          partnership: "Partenariat",
          other: "Autre"
        }
      },
      info: {
        title: "Informations de Contact",
        address: "Mataheko, Accra, Ghana",
        phone: "+233 XX XXX XXXX",
        email: "contact@stpierreclaver.edu.gh",
        hours: "Lundi - Vendredi: 7h30 - 17h00",
        weekend: "Samedi: 9h00 - 13h00"
      },
      quickActions: {
        title: "Actions Rapides",
        admission: "Demande d'Admission",
        visit: "Visiter le Campus",
        prospectus: "Télécharger la Brochure",
        portal: "Portail Parent"
      },
      departments: {
        title: "Départements",
        admission: "Admissions",
        academic: "Académique",
        finance: "Finances",
        support: "Support Élève"
      },
      faq: {
        title: "Questions Fréquentes",
        questions: [
          {
            q: "Quels sont les documents requis pour l'admission?",
            a: "Certificat de naissance, bulletins précédents, photos d'identité, et formulaire médical complété."
          },
          {
            q: "Proposez-vous des bourses?",
            a: "Oui, nous offrons des bourses au mérite et des aides financières sous conditions."
          },
          {
            q: "Quel est le ratio élèves/enseignant?",
            a: "Notre ratio moyen est de 25 élèves par classe pour un enseignement personnalisé."
          }
        ]
      },
      messages: {
        success: "Message envoyé avec succès! Nous vous répondrons dans les plus brefs délais.",
        error: "Erreur lors de l'envoi du message. Veuillez réessayer."
      }
    },
    en: {
      title: "Contact Us",
      subtitle: "We're here to answer your questions and support your journey",
      heroSubtitle: "Your partner in excellent bilingual education since 1970",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        studentGrade: "Student Grade Level",
        inquiryType: "Inquiry Type",
        submit: "Send Message",
        submitting: "Sending...",
        selectGrade: "Select grade level",
        selectInquiry: "Select inquiry type",
        grades: {
          preschool: "Preschool",
          primary: "Primary School",
          jhs: "Junior High School",
          shs: "Senior High School",
          other: "Other"
        },
        inquiries: {
          admission: "Admission",
          information: "General Information",
          visit: "Campus Tour",
          partnership: "Partnership",
          other: "Other"
        }
      },
      info: {
        title: "Contact Information",
        address: "Mataheko, Accra, Ghana",
        phone: "+233 XX XXX XXXX",
        email: "contact@stpierreclaver.edu.gh",
        hours: "Monday - Friday: 7:30 AM - 5:00 PM",
        weekend: "Saturday: 9:00 AM - 1:00 PM"
      },
      quickActions: {
        title: "Quick Actions",
        admission: "Admission Inquiry",
        visit: "Schedule Campus Tour",
        prospectus: "Download Prospectus",
        portal: "Parent Portal"
      },
      departments: {
        title: "Departments",
        admission: "Admissions",
        academic: "Academic",
        finance: "Finance",
        support: "Student Support"
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            q: "What documents are required for admission?",
            a: "Birth certificate, previous school reports, passport photos, and completed medical form."
          },
          {
            q: "Do you offer scholarships?",
            a: "Yes, we offer merit-based scholarships and financial aid under certain conditions."
          },
          {
            q: "What is the student-teacher ratio?",
            a: "Our average ratio is 25 students per class for personalized teaching."
          }
        ]
      },
      messages: {
        success: "Message sent successfully! We will get back to you as soon as possible.",
        error: "Error sending message. Please try again."
      }
    }
  }

  const t = contactContent[language]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      const response = await messageService.createMessage(formData)
      
      if (response.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: t.messages.success 
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          studentGrade: '',
          inquiryType: ''
        })
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus({ 
        type: 'error', 
        message: t.messages.error 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Function to handle quick action clicks
  const handleQuickAction = (action) => {
    switch (action) {
      case 'admission':
        navigate('/admissions')
        break
      case 'visit':
        navigate('/campus')
        break
      case 'prospectus':
        window.open('/documents/prospectus.pdf', '_blank')
        break
      case 'portal':
        navigate('/parents-portal')
        break
      default:
        break
    }
  }

  const quickActions = [
    { 
      icon: Users, 
      label: t.quickActions.admission, 
      color: "bg-blue-500", 
      action: 'admission' 
    },
    { 
      icon: MapPin, 
      label: t.quickActions.visit, 
      color: "bg-green-500", 
      action: 'visit' 
    },
    { 
      icon: BookOpen, 
      label: t.quickActions.prospectus, 
      color: "bg-purple-500", 
      action: 'prospectus' 
    },
    { 
      icon: User,
      label: t.quickActions.portal, 
      color: "bg-orange-500", 
      action: 'portal' 
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description="Get in touch with École Saint Pierre Claver. Contact us for admissions, information, or any inquiries about our bilingual Catholic education programs."
        keywords="contact, admissions, information, bilingual school Ghana, campus tour"
      />
      
      {/* Hero Section with Image */}
      <section className="relative bg-primary-brown text-white py-24 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/contact-hero.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-primary-brown/70"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary-cream rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-12 h-12 border-2 border-primary-cream rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-primary-cream rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-primary-cream mb-6"
          >
            {t.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-primary-cream/90 max-w-2xl mx-auto"
          >
            {t.heroSubtitle}
          </motion.p>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="w-full h-12 text-gray-50"
          >
            <path 
              d="M0,0 V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-brown mb-4">{t.quickActions.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'fr' 
                ? "Accédez rapidement aux services les plus demandés"
                : "Quick access to our most requested services"
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleQuickAction(action.action)}
                className="bg-white rounded-xl shadow-lg p-6 text-center cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <action.icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">{action.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="card glass shadow-xl">
                <div className="bg-primary-brown text-white p-6 rounded-t-xl">
                  <h2 className="text-2xl font-bold">
                    {language === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}
                  </h2>
                  <p className="text-primary-cream">
                    {language === 'fr' 
                      ? "Nous vous répondrons dans les 24 heures"
                      : "We'll respond within 24 hours"
                    }
                  </p>
                </div>

                {/* Status Messages */}
                {submitStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`m-6 p-4 rounded-lg flex items-center space-x-3 ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 border border-green-200' 
                        : 'bg-red-50 border border-red-200'
                    }`}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    ) : (
                      <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                    )}
                    <p className={submitStatus.type === 'success' ? 'text-green-700' : 'text-red-700'}>
                      {submitStatus.message}
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">{t.form.name}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all duration-300"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">{t.form.email}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all duration-300"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">{t.form.studentGrade}</label>
                      <select
                        name="studentGrade"
                        value={formData.studentGrade}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all duration-300"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">{t.form.selectGrade}</option>
                        {Object.entries(t.form.grades).map(([key, value]) => (
                          <option key={key} value={key}>{value}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">{t.form.inquiryType}</label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all duration-300"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">{t.form.selectInquiry}</option>
                        {Object.entries(t.form.inquiries).map(([key, value]) => (
                          <option key={key} value={key}>{value}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">{t.form.subject}</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">{t.form.message}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all duration-300 resize-none"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center space-x-3 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>{t.form.submitting}</span>
                      </>
                    ) : (
                      <>
                        <Send size={24} />
                        <span>{t.form.submit}</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information & Departments */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="card glass shadow-xl">
                <h2 className="text-2xl font-bold text-primary-brown mb-6">{t.info.title}</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-cream p-3 rounded-full flex-shrink-0">
                      <MapPin className="text-primary-brown" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">{language === 'fr' ? 'Adresse' : 'Address'}</h3>
                      <p className="text-gray-600">{t.info.address}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        {language === 'fr' ? 'Paroisse Sainte Famille' : 'Holy Family Catholic Parish'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-cream p-3 rounded-full flex-shrink-0">
                      <Phone className="text-primary-brown" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">{language === 'fr' ? 'Téléphone' : 'Phone'}</h3>
                      <p className="text-gray-600">{t.info.phone}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        {language === 'fr' ? 'Ligne directe admissions' : 'Admissions direct line'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-cream p-3 rounded-full flex-shrink-0">
                      <Mail className="text-primary-brown" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Email</h3>
                      <p className="text-gray-600">{t.info.email}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        admissions@stpierreclaver.edu.gh
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-cream p-3 rounded-full flex-shrink-0">
                      <Clock className="text-primary-brown" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">{language === 'fr' ? 'Heures d\'ouverture' : 'Office Hours'}</h3>
                      <p className="text-gray-600">{t.info.hours}</p>
                      <p className="text-gray-600">{t.info.weekend}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Departments */}
              <div className="card glass shadow-xl">
                <h2 className="text-2xl font-bold text-primary-brown mb-6">{t.departments.title}</h2>
                <div className="space-y-4">
                  {Object.entries(t.departments).filter(([key]) => key !== 'title').map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-3 bg-primary-cream/20 rounded-lg hover:bg-primary-cream/30 transition-colors duration-300">
                      <span className="font-medium text-gray-700">{value}</span>
                      <span className="text-primary-brown text-sm font-semibold">
                        {language === 'fr' ? 'Contact' : 'Contact'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="card glass shadow-xl">
                <h2 className="text-2xl font-bold text-primary-brown mb-6">{t.faq.title}</h2>
                <div className="space-y-4">
                  {t.faq.questions.slice(0, 2).map((item, index) => (
                    <div key={index} className="border-l-4 border-primary-brown pl-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{item.q}</h3>
                      <p className="text-gray-600 text-sm">{item.a}</p>
                    </div>
                  ))}
                  <button className="text-primary-brown font-semibold hover:text-primary-dark transition-colors duration-300">
                    {language === 'fr' ? 'Voir toutes les questions' : 'View all questions'} →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-brown mb-4">
              {language === 'fr' ? 'Visitez Notre Campus' : 'Visit Our Campus'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'fr' 
                ? "Venez découvrir notre environnement d'apprentissage exceptionnel"
                : "Come discover our exceptional learning environment"
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="card glass h-96 bg-gradient-to-br from-primary-cream to-secondary-light flex items-center justify-center rounded-xl shadow-xl"
              >
                <div className="text-center">
                  <MapPin size={64} className="text-primary-brown mx-auto mb-6" />
                  <p className="text-primary-brown font-semibold text-xl mb-2">
                    {language === 'fr' ? 'Carte Interactive' : 'Interactive Map'}
                  </p>
                  <p className="text-gray-600">
                    {language === 'fr' ? 'Localisation de notre campus' : 'Our campus location'}
                  </p>
                  <button className="mt-4 bg-primary-brown text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300">
                    {language === 'fr' ? 'Voir sur Google Maps' : 'View on Google Maps'}
                  </button>
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card glass p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <Users size={48} className="text-primary-brown mx-auto mb-4" />
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {language === 'fr' ? 'Visite Guidée' : 'Guided Tour'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'fr' 
                    ? "Réservez une visite personnalisée de notre campus"
                    : "Schedule a personalized tour of our campus"
                  }
                </p>
                <button className="btn-primary w-full">
                  {language === 'fr' ? 'Planifier' : 'Schedule'}
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card glass p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <Calendar size={48} className="text-primary-brown mx-auto mb-4" />
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {language === 'fr' ? 'Journée Portes Ouvertes' : 'Open House'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'fr' 
                    ? "Prochaine session: 15 Décembre 2024"
                    : "Next session: December 15, 2024"
                  }
                </p>
                <button className="btn-primary w-full">
                  {language === 'fr' ? "S'inscrire" : 'Register'}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact