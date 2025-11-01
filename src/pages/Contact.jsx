import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import SEO from '../components/SEO'

const Contact = () => {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactContent = {
    fr: {
      title: "Contactez-Nous",
      subtitle: "Nous sommes là pour répondre à vos questions",
      form: {
        name: "Nom Complet",
        email: "Adresse Email",
        subject: "Sujet",
        message: "Message",
        submit: "Envoyer le Message"
      },
      info: {
        title: "Informations de Contact",
        address: "Mataheko, Accra, Ghana",
        phone: "+233 XX XXX XXXX",
        email: "contact@stpierreclaver.edu.gh",
        hours: "Lundi - Vendredi: 8h00 - 16h00"
      }
    },
    en: {
      title: "Contact Us",
      subtitle: "We're here to answer your questions",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        submit: "Send Message"
      },
      info: {
        title: "Contact Information",
        address: "Mataheko, Accra, Ghana",
        phone: "+233 XX XXX XXXX",
        email: "contact@stpierreclaver.edu.gh",
        hours: "Monday - Friday: 8:00 AM - 4:00 PM"
      }
    }
  }

  const t = contactContent[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description="Get in touch with École Saint Pierre Claver. Contact us for admissions, information, or any inquiries about our bilingual Catholic education programs."
        keywords="contact, admissions, information, bilingual school Ghana"
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

      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card glass"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">{t.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">{t.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">{t.form.subject}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">{t.form.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>{t.form.submit}</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="card glass">
                <h2 className="text-2xl font-bold text-primary-brown mb-6">{t.info.title}</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-cream p-3 rounded-full">
                      <MapPin className="text-primary-brown" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">{language === 'fr' ? 'Adresse' : 'Address'}</h3>
                      <p className="text-gray-600">{t.info.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-cream p-3 rounded-full">
                      <Phone className="text-primary-brown" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">{language === 'fr' ? 'Téléphone' : 'Phone'}</h3>
                      <p className="text-gray-600">{t.info.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-cream p-3 rounded-full">
                      <Mail className="text-primary-brown" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Email</h3>
                      <p className="text-gray-600">{t.info.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card glass h-64 bg-gradient-to-br from-primary-cream to-secondary-light flex items-center justify-center"
              >
                <div className="text-center">
                  <MapPin size={48} className="text-primary-brown mx-auto mb-4" />
                  <p className="text-primary-brown font-semibold">
                    {language === 'fr' ? 'Carte Interactive' : 'Interactive Map'}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    {language === 'fr' ? 'Localisation de notre campus' : 'Our campus location'}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact