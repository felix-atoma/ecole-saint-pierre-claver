import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Leadership = () => {
  const { language } = useLanguage()

  const leadershipContent = {
    fr: {
      title: "Direction et Administration",
      subtitle: "Une équipe dévouée à l'excellence éducative",
      principal: {
        name: "M. Bala Emmanuel",
        title: "Directeur",
        bio: "Avec plus de 20 ans d'expérience dans l'éducation bilingue, M. Bala Emmanuel dirige l'école avec passion et dévouement. Son leadership a contribué aux excellents résultats académiques de l'école.",
        qualifications: [
          "Maîtrise en Administration Scolaire",
          "Diplôme en Éducation Bilingue",
          "20+ ans d'expérience en leadership éducatif"
        ]
      },
      manager: {
        name: "Révérend Père",
        title: "Directeur Local - Paroisse Sainte Famille",
        bio: "Représentant de la Paroisse Sainte Famille, le Révérend Père assure la guidance spirituelle et veille à l'intégration des valeurs catholiques dans l'éducation.",
        responsibilities: [
          "Guidance spirituelle et morale",
          "Supervision des activités religieuses",
          "Liaison avec la communauté paroissiale"
        ]
      },
      departments: {
        title: "Départements Académiques",
        items: [
          {
            name: "Département des Langues",
            head: "Mme. Akossiwa Mensah",
            description: "Coordination des programmes français, anglais, allemand et espagnol"
          },
          {
            name: "Département Scientifique",
            head: "Dr. Koffi Adjo",
            description: "Supervision des sciences, mathématiques et technologies"
          },
          {
            name: "Département des Humanités",
            head: "M. Jean-Baptiste Yao",
            description: "Coordination de l'histoire, géographie et philosophie"
          },
          {
            name: "Vie Scolaire",
            head: "Mme. Afi Gbedema",
            description: "Encadrement des élèves et activités parascolaires"
          }
        ]
      },
      mission: "Notre équipe de direction s'engage à fournir un environnement d'apprentissage stimulant qui allie excellence académique, formation morale et développement spirituel."
    },
    en: {
      title: "Leadership and Administration",
      subtitle: "A team dedicated to educational excellence",
      principal: {
        name: "Mr. Bala Emmanuel",
        title: "Principal",
        bio: "With over 20 years of experience in bilingual education, Mr. Bala Emmanuel leads the school with passion and dedication. His leadership has contributed to the school's outstanding academic results.",
        qualifications: [
          "Master's in School Administration",
          "Diploma in Bilingual Education",
          "20+ years of educational leadership experience"
        ]
      },
      manager: {
        name: "Reverend Father",
        title: "Local Manager - Holy Family Parish",
        bio: "Representing the Holy Family Parish, the Reverend Father provides spiritual guidance and ensures the integration of Catholic values in education.",
        responsibilities: [
          "Spiritual and moral guidance",
          "Supervision of religious activities",
          "Liaison with parish community"
        ]
      },
      departments: {
        title: "Academic Departments",
        items: [
          {
            name: "Language Department",
            head: "Mrs. Akossiwa Mensah",
            description: "Coordination of French, English, German, and Spanish programs"
          },
          {
            name: "Science Department",
            head: "Dr. Koffi Adjo",
            description: "Supervision of sciences, mathematics, and technology"
          },
          {
            name: "Humanities Department",
            head: "Mr. Jean-Baptiste Yao",
            description: "Coordination of history, geography, and philosophy"
          },
          {
            name: "Student Life",
            head: "Mrs. Afi Gbedema",
            description: "Student guidance and extracurricular activities"
          }
        ]
      },
      mission: "Our leadership team is committed to providing a stimulating learning environment that combines academic excellence, moral formation, and spiritual development."
    }
  }

  const t = leadershipContent[language]

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-primary-brown text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-primary-cream">{t.subtitle}</p>
        </div>
      </section>

      {/* Principal and Manager */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Principal */}
            <div className="card text-center">
              <div className="w-32 h-32 bg-primary-cream rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl text-primary-brown font-bold">BE</span>
              </div>
              <h2 className="text-2xl font-bold text-primary-brown mb-2">{t.principal.name}</h2>
              <p className="text-lg text-gray-600 mb-4">{t.principal.title}</p>
              <p className="text-gray-600 mb-6">{t.principal.bio}</p>
              <div className="space-y-2">
                {t.principal.qualifications.map((qual, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-brown rounded-full"></div>
                    <span>{qual}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Manager */}
            <div className="card text-center">
              <div className="w-32 h-32 bg-primary-cream rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl text-primary-brown font-bold">RF</span>
              </div>
              <h2 className="text-2xl font-bold text-primary-brown mb-2">{t.manager.name}</h2>
              <p className="text-lg text-gray-600 mb-4">{t.manager.title}</p>
              <p className="text-gray-600 mb-6">{t.manager.bio}</p>
              <div className="space-y-2">
                {t.manager.responsibilities.map((resp, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-brown rounded-full"></div>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-primary-cream py-16">
        <div className="container-custom text-center">
          <blockquote className="text-2xl italic text-primary-brown max-w-4xl mx-auto">
            "{t.mission}"
          </blockquote>
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title">{t.departments.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.departments.items.map((dept, index) => (
              <div key={index} className="card border-t-4 border-primary-brown">
                <h3 className="text-xl font-bold text-primary-brown mb-2">{dept.name}</h3>
                <p className="text-lg text-gray-700 mb-3">
                  <strong>{language === 'fr' ? 'Chef de Département:' : 'Department Head:'}</strong> {dept.head}
                </p>
                <p className="text-gray-600">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Leadership