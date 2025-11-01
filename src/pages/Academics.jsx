import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import SEO from '../components/SEO'

// Import images - you'll need to add these to your project
const Academics = () => {
  const { language } = useLanguage()

  // Image paths - update these with your actual image paths
  const heroImages = {
    main: "/images/academics/hero-academics.jpg",
    nursery: "/images/academics/nursery-classroom.jpg",
    primary: "/images/academics/primary-students.jpg",
    middle: "/images/academics/middle-school-science.jpg",
    high: "/images/academics/high-school-lab.jpg",
    languages: "/images/academics/language-class.jpg",
    exams: "/images/academics/exam-preparation.jpg",
    methodology: "/images/academics/classroom-interaction.jpg"
  }

  const academicContent = {
    fr: {
      title: "Programme Académique",
      subtitle: "Un parcours éducatif complet de la Maternelle au Lycée",
      description: "Notre programme académique offre une éducation d'excellence avec un curriculum bilingue français-anglais, préparant les étudiants aux examens nationaux et internationaux.",
      programs: {
        nursery: {
          title: "Maternelle",
          description: "Programme d'éveil bilingue pour les jeunes enfants",
          age: "2-5 ans",
          features: ["Éveil sensoriel", "Socialisation", "Pré-lecture", "Activités motrices"],
          image: heroImages.nursery
        },
        primary: {
          title: "École Primaire",
          description: "Fondations académiques solides avec focus bilingue",
          age: "6-11 ans",
          features: ["Lecture/Écriture", "Mathématiques", "Sciences", "Histoire-Géographie"],
          image: heroImages.primary
        },
        middle: {
          title: "Collège",
          description: "Programme intermédiaire préparatoire aux examens nationaux",
          age: "12-15 ans",
          features: ["Approfondissement", "Méthodologie", "Préparation BEPC", "Orientation"],
          image: heroImages.middle
        },
        high: {
          title: "Lycée",
          description: "Spécialisation en Sciences et Lettres",
          age: "16-18 ans",
          features: ["Filières Scientifique/Littéraire", "Préparation Bac", "Orientation Supérieure"],
          image: heroImages.high
        }
      },
      exams: {
        title: "Examens Nationaux",
        subtitle: "Préparation aux certifications reconnues par l'État",
        image: heroImages.exams,
        items: [
          {
            name: "CEPD",
            fullName: "Certificat d'Études du Premier Degré",
            level: "Fin du Primaire",
            description: "Transition de l'école élémentaire au collège",
            preparation: "Préparation intensive dès le CM2"
          },
          {
            name: "BEPC",
            fullName: "Brevet d'Études du Premier Cycle",
            level: "Fin du Collège",
            description: "Passage du collège au lycée",
            preparation: "Stages de révision et examens blancs"
          },
          {
            name: "Baccalauréat I",
            fullName: "Première partie du Baccalauréat",
            level: "Première (12ème)",
            description: "Avancement vers la Terminale",
            preparation: "Simulations d'examen régulières"
          },
          {
            name: "Baccalauréat II",
            fullName: "Deuxième partie du Baccalauréat",
            level: "Terminale (13ème)",
            description: "Qualification pour l'enseignement supérieur",
            preparation: "Accompagnement personnalisé et coaching"
          }
        ]
      },
      languages: {
        title: "Programmes Linguistiques",
        subtitle: "Une approche multilingue pour une ouverture internationale",
        image: heroImages.languages,
        items: [
          {
            language: "Français",
            level: "Langue principale",
            description: "Langue d'instruction principale avec perfectionnement grammatical et littéraire",
            hours: "12-15h/semaine",
            certification: "DELF/DALF",
            flag: "🇫🇷"
          },
          {
            language: "Anglais",
            level: "Seconde langue",
            description: "Programme bilingue intensif avec natifs anglophones",
            hours: "8-10h/semaine",
            certification: "Cambridge English",
            flag: "🇬🇧"
          },
          {
            language: "Allemand",
            level: "Langue optionnelle",
            description: "Introduction à la troisième langue dès la 6ème",
            hours: "3-4h/semaine",
            certification: "Goethe-Zertifikat",
            flag: "🇩🇪"
          },
          {
            language: "Espagnol",
            level: "Langue optionnelle",
            description: "Ouverture culturelle supplémentaire au choix",
            hours: "3-4h/semaine",
            certification: "DELE",
            flag: "🇪🇸"
          }
        ]
      },
      methodology: {
        title: "Notre Méthodologie Pédagogique",
        image: heroImages.methodology,
        features: [
          {
            title: "Apprentissage Actif",
            description: "Classes interactives favorisant la participation et l'expérimentation",
            icon: "🎯"
          },
          {
            title: "Suivi Personnalisé",
            description: "Accompagnement individualisé avec tutorat et conseil d'orientation",
            icon: "👤"
          },
          {
            title: "Technologie Éducative",
            description: "Intégration des outils numériques dans l'apprentissage",
            icon: "💻"
          },
          {
            title: "Projets Interdisciplinaires",
            description: "Travail en équipe sur des projets concrets liant plusieurs matières",
            icon: "🤝"
          }
        ]
      },
      cta: {
        title: "Prêt à Rejoindre Notre Communauté Éducative?",
        button: "Demander une Visite",
        contact: "Contactez-nous pour plus d'informations"
      }
    },
    en: {
      title: "Academic Program",
      subtitle: "A comprehensive educational pathway from Nursery through High School",
      description: "Our academic program offers excellence in education with a French-English bilingual curriculum, preparing students for national and international examinations.",
      programs: {
        nursery: {
          title: "Nursery",
          description: "Bilingual awakening program for young children",
          age: "2-5 years",
          features: ["Sensory awakening", "Socialization", "Pre-reading", "Motor activities"],
          image: heroImages.nursery
        },
        primary: {
          title: "Primary School",
          description: "Strong academic foundations with bilingual focus",
          age: "6-11 years",
          features: ["Reading/Writing", "Mathematics", "Sciences", "History-Geography"],
          image: heroImages.primary
        },
        middle: {
          title: "Middle School",
          description: "Intermediate program preparing for national exams",
          age: "12-15 years",
          features: ["Deepening knowledge", "Methodology", "BEPC preparation", "Guidance"],
          image: heroImages.middle
        },
        high: {
          title: "High School",
          description: "Specialization in Sciences and Arts",
          age: "16-18 years",
          features: ["Science/Literature tracks", "Baccalaureate prep", "Higher education guidance"],
          image: heroImages.high
        }
      },
      exams: {
        title: "National Examinations",
        subtitle: "Preparation for state-recognized certifications",
        image: heroImages.exams,
        items: [
          {
            name: "CEPD",
            fullName: "First Degree Study Certificate",
            level: "End of Primary",
            description: "Transition from elementary to middle school",
            preparation: "Intensive preparation from 5th grade"
          },
          {
            name: "BEPC",
            fullName: "First Cycle Study Diploma",
            level: "End of Middle School",
            description: "Progression from middle to high school",
            preparation: "Revision workshops and mock exams"
          },
          {
            name: "Baccalauréat I",
            fullName: "First part of Baccalaureate",
            level: "Grade 12",
            description: "Advancement to Terminale",
            preparation: "Regular exam simulations"
          },
          {
            name: "Baccalauréat II",
            fullName: "Second part of Baccalaureate",
            level: "Grade 13",
            description: "Qualification for university education",
            preparation: "Personalized support and coaching"
          }
        ]
      },
      languages: {
        title: "Language Programs",
        subtitle: "A multilingual approach for international exposure",
        image: heroImages.languages,
        items: [
          {
            language: "French",
            level: "Primary language",
            description: "Main language of instruction with grammatical and literary perfection",
            hours: "12-15h/week",
            certification: "DELF/DALF",
            flag: "🇫🇷"
          },
          {
            language: "English",
            level: "Second language",
            description: "Intensive bilingual program with native English speakers",
            hours: "8-10h/week",
            certification: "Cambridge English",
            flag: "🇬🇧"
          },
          {
            language: "German",
            level: "Optional language",
            description: "Introduction to third language from 6th grade",
            hours: "3-4h/week",
            certification: "Goethe-Zertifikat",
            flag: "🇩🇪"
          },
          {
            language: "Spanish",
            level: "Optional language",
            description: "Additional cultural exposure as elective",
            hours: "3-4h/week",
            certification: "DELE",
            flag: "🇪🇸"
          }
        ]
      },
      methodology: {
        title: "Our Pedagogical Methodology",
        image: heroImages.methodology,
        features: [
          {
            title: "Active Learning",
            description: "Interactive classes promoting participation and experimentation",
            icon: "🎯"
          },
          {
            title: "Personalized Follow-up",
            description: "Individualized support with tutoring and career guidance",
            icon: "👤"
          },
          {
            title: "Educational Technology",
            description: "Integration of digital tools in learning",
            icon: "💻"
          },
          {
            title: "Interdisciplinary Projects",
            description: "Teamwork on concrete projects linking multiple subjects",
            icon: "🤝"
          }
        ]
      },
      cta: {
        title: "Ready to Join Our Educational Community?",
        button: "Schedule a Visit",
        contact: "Contact us for more information"
      }
    }
  }

  const t = academicContent[language]

  return (
    <div className="bg-gray-50">
      <SEO 
        title={t.title}
        description={t.description}
        keywords={language === 'fr' 
          ? "programme académique, éducation bilingue, maternelle, primaire, collège, lycée, examens nationaux, CEPD, BEPC, Baccalauréat"
          : "academic program, bilingual education, nursery, primary school, middle school, high school, national exams, CEPD, BEPC, Baccalaureate"
        }
      />
      
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-r from-primary-brown/90 to-primary-brown-dark/90 text-white py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('${heroImages.main}')`,
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-cream/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-brown/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {t.title}
          </h1>
          <p className="text-xl lg:text-2xl text-primary-cream mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          <p className="text-lg text-primary-cream-light max-w-2xl mx-auto mb-8">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-primary-brown px-8 py-3 rounded-lg font-bold hover:bg-primary-cream hover:text-primary-brown-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
              {t.cta.button}
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-brown transition-all duration-300">
              {language === 'fr' ? 'Brochure' : 'Download Brochure'}
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Academic Programs with Images */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {language === 'fr' ? "Cycles d'Enseignement" : "Educational Cycles"}
            </h2>
            <p className="section-subtitle">
              {language === 'fr' 
                ? "Un parcours éducatif progressif et cohérent" 
                : "A progressive and coherent educational journey"
              }
            </p>
          </div>
          
          <div className="space-y-12">
            {Object.entries(t.programs).map(([key, program], index) => (
              <div 
                key={key}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div 
                      className="w-full h-64 lg:h-80 rounded-2xl bg-cover bg-center shadow-lg group-hover:shadow-xl transition-all duration-500"
                      style={{ backgroundImage: `url('${program.image}')` }}
                    >
                      <div className="absolute inset-0 bg-black/20 rounded-2xl group-hover:bg-black/10 transition-all duration-300"></div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-primary-brown text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg">
                      {program.age}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2">
                  <div className="card border-l-4 border-l-primary-brown hover:transform hover:scale-105 transition-all duration-300">
                    <div className="text-left">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary-brown rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-primary-brown">{program.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{program.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {program.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-primary-brown mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Exams with Hero Image */}
      <section className="relative py-20 lg:py-28">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center z-0"
          style={{ backgroundImage: `url('${t.exams.image}')` }}
        >
          <div className="absolute inset-0 bg-primary-brown/80"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.exams.title}</h2>
            <p className="text-xl text-primary-cream max-w-2xl mx-auto">{t.exams.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.exams.items.map((exam, index) => (
              <div key={index} className="card group hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-primary-brown to-primary-brown-dark text-white rounded-xl p-4 min-w-20 text-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="font-bold text-2xl">{exam.name}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-xl text-primary-brown group-hover:text-primary-brown-dark transition-colors">
                        {exam.fullName}
                      </h3>
                      <span className="bg-primary-cream text-primary-brown text-xs font-bold px-3 py-1 rounded-full">
                        {exam.level}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{exam.description}</p>
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary-brown">
                      <p className="text-sm font-medium text-primary-brown mb-1">
                        {language === 'fr' ? 'Préparation' : 'Preparation'}
                      </p>
                      <p className="text-sm text-gray-600">{exam.preparation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-padding bg-gradient-to-br from-primary-cream to-primary-cream-light relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary-brown rounded-full -translate-y-36 translate-x-36"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-brown rounded-full translate-y-36 -translate-x-36"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">{t.methodology.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.methodology.features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:-translate-y-2 border-2 border-transparent group-hover:border-primary-brown/20">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-primary-brown mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Programs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">{t.languages.title}</h2>
            <p className="section-subtitle">{t.languages.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.languages.items.map((lang, index) => (
              <div key={index} className="card text-center group hover:border-primary-brown transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6">
                  <div className="text-4xl mb-3">{lang.flag}</div>
                  <div className="w-16 h-16 bg-primary-cream rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-brown group-hover:text-white transition-all">
                    <span className="text-2xl font-bold">{lang.language.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-brown mb-2">{lang.language}</h3>
                  <p className="text-sm text-gray-600 mb-2 font-medium bg-primary-cream-light px-3 py-1 rounded-full inline-block">
                    {lang.level}
                  </p>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{lang.description}</p>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{language === 'fr' ? 'Heures' : 'Hours'}:</span>
                    <span className="font-medium text-primary-brown">{lang.hours}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{language === 'fr' ? 'Certification' : 'Certification'}:</span>
                    <span className="font-medium text-primary-brown">{lang.certification}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${heroImages.main}')` }}
        >
          <div className="absolute inset-0 bg-primary-brown/90"></div>
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-cream/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-primary-cream/15 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-xl text-primary-cream mb-8 max-w-2xl mx-auto">
            {t.cta.contact}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-primary-brown px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-cream hover:text-primary-brown-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
              {t.cta.button}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-brown transition-all duration-300">
              {language === 'fr' ? 'Téléphoner' : 'Call Us'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Academics