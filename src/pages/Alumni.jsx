import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Alumni = () => {
  const { language } = useLanguage()

  const alumniContent = {
    fr: {
      title: "Anciens Élèves",
      subtitle: "Une communauté de professionnels qui excellent dans divers domaines",
      network: {
        title: "Réseau des Anciens",
        description: "Nos anciens élèves forment une communauté dynamique et inspirante de professionnels qui excellent dans divers secteurs à travers le monde."
      },
      statistics: {
        title: "Impact de nos Anciens",
        items: [
          { number: "2000+", label: "Anciens Élèves" },
          { number: "85%", label: "Poursuivent des Études Supérieures" },
          { number: "40+", label: "Pays de Destination" },
          { number: "15", label: "Secteurs Professionnels" }
        ]
      },
      careers: {
        title: "Domaines Professionnels",
        sectors: [
          {
            name: "Médecine et Santé",
            count: "250+",
            description: "Médecins, infirmiers, chercheurs médicaux"
          },
          {
            name: "Droit et Justice",
            count: "180+",
            description: "Avocats, juges, juristes internationaux"
          },
          {
            name: "Ingénierie et Architecture",
            count: "300+",
            description: "Ingénieurs civils, architectes, techniciens"
          },
          {
            name: "Éducation et Recherche",
            count: "200+",
            description: "Professeurs, chercheurs, administrateurs"
          },
          {
            name: "Finance et Banque",
            count: "220+",
            description: "Banquiers, analystes, gestionnaires"
          },
          {
            name: "Technologie",
            count: "150+",
            description: "Développeurs, data scientists, entrepreneurs"
          }
        ]
      },
      testimonials: {
        title: "Témoignages",
        items: [
          {
            name: "Dr. Ama Mensah",
            graduation: "Promotion 2005",
            current: "Chirurgienne - Hôpital Korle-Bu",
            quote: "L'éducation bilingue de Saint Pierre Claver m'a ouvert les portes des meilleures universités du monde."
          },
          {
            name: "Maître Kwame Asare",
            graduation: "Promotion 1998",
            current: "Avocat - Cour Internationale",
            quote: "Les valeurs de discipline et d'intégrité inculquées à l'école restent mes guides quotidiens."
          },
          {
            name: "Ing. Fatou Diop",
            graduation: "Promotion 2010",
            current: "Ingénieure en Chef - Société Nationale",
            quote: "La formation scientifique rigoureuse combinée au bilinguisme a été déterminante pour ma carrière."
          }
        ]
      },
      association: {
        title: "Association des Anciens",
        activities: [
          "Programmes de mentorat pour les étudiants actuels",
          "Bourses d'études et soutien financier",
          "Événements de networking annuels",
          "Projets de développement de l'école",
          "Initiatives communautaires"
        ]
      }
    },
    en: {
      title: "Alumni",
      subtitle: "A community of professionals excelling in various fields worldwide",
      network: {
        title: "Alumni Network",
        description: "Our alumni form a vibrant and inspiring community of professionals who excel in various sectors across the globe."
      },
      statistics: {
        title: "Alumni Impact",
        items: [
          { number: "2000+", label: "Alumni Members" },
          { number: "85%", label: "Pursue Higher Education" },
          { number: "40+", label: "Destination Countries" },
          { number: "15", label: "Professional Sectors" }
        ]
      },
      careers: {
        title: "Career Fields",
        sectors: [
          {
            name: "Medicine and Healthcare",
            count: "250+",
            description: "Doctors, nurses, medical researchers"
          },
          {
            name: "Law and Justice",
            count: "180+",
            description: "Lawyers, judges, international jurists"
          },
          {
            name: "Engineering and Architecture",
            count: "300+",
            description: "Civil engineers, architects, technicians"
          },
          {
            name: "Education and Research",
            count: "200+",
            description: "Professors, researchers, administrators"
          },
          {
            name: "Finance and Banking",
            count: "220+",
            description: "Bankers, analysts, managers"
          },
          {
            name: "Technology",
            count: "150+",
            description: "Developers, data scientists, entrepreneurs"
          }
        ]
      },
      testimonials: {
        title: "Testimonials",
        items: [
          {
            name: "Dr. Ama Mensah",
            graduation: "Class of 2005",
            current: "Surgeon - Korle-Bu Hospital",
            quote: "The bilingual education from Saint Peter Claver opened doors to the world's top universities for me."
          },
          {
            name: "Barrister Kwame Asare",
            graduation: "Class of 1998",
            current: "Lawyer - International Court",
            quote: "The values of discipline and integrity instilled in school remain my daily guides."
          },
          {
            name: "Eng. Fatou Diop",
            graduation: "Class of 2010",
            current: "Chief Engineer - National Company",
            quote: "The rigorous scientific training combined with bilingualism was crucial for my career."
          }
        ]
      },
      association: {
        title: "Alumni Association",
        activities: [
          "Mentorship programs for current students",
          "Scholarships and financial support",
          "Annual networking events",
          "School development projects",
          "Community initiatives"
        ]
      }
    }
  }

  const t = alumniContent[language]

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-primary-brown text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-primary-cream">{t.subtitle}</p>
        </div>
      </section>

      {/* Network Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="section-title">{t.network.title}</h2>
            <p className="text-xl text-gray-600">{t.network.description}</p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {t.statistics.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-brown mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Sectors */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title">{t.careers.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.careers.sectors.map((sector, index) => (
              <div key={index} className="card group hover:border-primary-brown transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary-brown">{sector.name}</h3>
                  <span className="bg-primary-cream text-primary-brown px-3 py-1 rounded-full text-sm font-bold">
                    {sector.count}
                  </span>
                </div>
                <p className="text-gray-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary-cream">
        <div className="container-custom">
          <h2 className="section-title">{t.testimonials.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <div key={index} className="card bg-white">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary-brown rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-bold text-lg text-primary-brown">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.graduation}</p>
                  <p className="text-gray-600 text-sm italic">{testimonial.current}</p>
                </div>
                <blockquote className="text-gray-600 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Association */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">{t.association.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.association.activities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-primary-cream rounded-lg">
                  <div className="bg-primary-brown text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{activity}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="btn-primary">
                {language === 'fr' ? 'Rejoindre Association' : 'Join Association'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Alumni