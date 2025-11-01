import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Mail, Phone, BookOpen, Award, Users, Filter, Search } from 'lucide-react'
import SEO from '../components/SEO'

const Faculty = () => {
  const { language } = useLanguage()
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const facultyContent = {
    fr: {
      title: "Notre Équipe Pédagogique",
      subtitle: "25 enseignants qualifiés dévoués à l'excellence académique",
      departments: {
        all: "Tous les départements",
        languages: "Département des Langues",
        sciences: "Département Scientifique",
        humanities: "Département des Humanités",
        arts: "Département des Arts",
        administration: "Administration",
        physical: "Éducation Physique"
      },
      searchPlaceholder: "Rechercher un enseignant...",
      joinTitle: "Rejoindre Notre Équipe",
      joinDesc: "Vous souhaitez contribuer à notre mission éducative ? Découvrez les opportunités de carrière.",
      applyNow: "Postuler Maintenant",
      contactUs: "Nous Contacter",
      subjects: "Matières",
      qualifications: "Qualifications",
      yearsExp: "ans exp.",
      faculty: [
        // Language Department (6 teachers)
        {
          id: 1,
          name: "Mme. Akossiwa Mensah",
          title: "Chef du Département des Langues",
          department: "languages",
          qualifications: ["Maîtrise en Linguistique", "DELF Examinateur", "15 ans d'expérience"],
          subjects: ["Français", "Anglais", "Littérature"],
          email: "a.mensah@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Spécialiste en éducation bilingue avec une passion pour la littérature francophone.",
          years: 15
        },
        {
          id: 2,
          name: "M. François Kouassi",
          title: "Professeur de Français",
          department: "languages",
          qualifications: ["Licence en Lettres Modernes", "Certificat FLE", "8 ans d'expérience"],
          subjects: ["Français", "Communication"],
          email: "f.kouassi@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Passionné par l'enseignement de la langue française et de la culture francophone.",
          years: 8
        },
        {
          id: 3,
          name: "Mme. Sarah Johnson",
          title: "Professeur d'Anglais",
          department: "languages",
          qualifications: ["Master en Littérature Anglaise", "CELTA Certified", "10 ans d'expérience"],
          subjects: ["Anglais", "Littérature Mondiale"],
          email: "s.johnson@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Enseignante expérimentée en littérature anglaise et compétences linguistiques.",
          years: 10
        },
        {
          id: 4,
          name: "M. Kwame Osei",
          title: "Professeur de Langues Africaines",
          department: "languages",
          qualifications: ["Master en Linguistique Africaine", "Spécialiste Twi", "7 ans d'expérience"],
          subjects: ["Twi", "Culture Ghanéenne"],
          email: "k.osei@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Expert en langues locales et préservation du patrimoine linguistique.",
          years: 7
        },
        {
          id: 5,
          name: "Mme. Elena Rodriguez",
          title: "Professeur d'Espagnol",
          department: "languages",
          qualifications: ["Licence en Langues Étrangères", "DELE Examinateur", "6 ans d'expérience"],
          subjects: ["Espagnol", "Culture Hispanique"],
          email: "e.rodriguez@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Enseignante native espagnole passionnée par les langues romanes.",
          years: 6
        },
        {
          id: 6,
          name: "M. David Chen",
          title: "Professeur de Mandarin",
          department: "languages",
          qualifications: ["Master en Langues Orientales", "HSK Certified", "5 ans d'expérience"],
          subjects: ["Mandarin", "Culture Chinoise"],
          email: "d.chen@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Enseignant de mandarin avec une approche interactive et culturelle.",
          years: 5
        },

        // Science Department (6 teachers)
        {
          id: 7,
          name: "Dr. Koffi Adjo",
          title: "Chef du Département Scientifique",
          department: "sciences",
          qualifications: ["Doctorat en Physique", "MSc. en Éducation", "Prix d'Excellence 2020"],
          subjects: ["Physique", "Chimie", "Mathématiques Avancées"],
          email: "k.adjou@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Ancien chercheur au CERN, passionné par l'enseignement des sciences appliquées.",
          years: 12
        },
        {
          id: 8,
          name: "Mme. Amina Diallo",
          title: "Professeur de Chimie",
          department: "sciences",
          qualifications: ["Master en Chimie", "Spécialiste Chimie Organique", "9 ans d'expérience"],
          subjects: ["Chimie", "Sciences de l'Environnement"],
          email: "a.diallo@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Passionnée par la chimie verte et les applications pratiques en laboratoire.",
          years: 9
        },
        {
          id: 9,
          name: "M. Samuel Nkrumah",
          title: "Professeur de Biologie",
          department: "sciences",
          qualifications: ["Master en Biologie", "Spécialiste Génétique", "11 ans d'expérience"],
          subjects: ["Biologie", "Sciences de la Vie"],
          email: "s.nkrumah@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Expert en biologie moléculaire et écologie des écosystèmes africains.",
          years: 11
        },
        {
          id: 10,
          name: "Mme. Grace Anokye",
          title: "Professeur de Mathématiques",
          department: "sciences",
          qualifications: ["Master en Mathématiques", "Spécialiste Algèbre", "8 ans d'expérience"],
          subjects: ["Mathématiques", "Statistiques"],
          email: "g.anokye@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Enseignante passionnée par la résolution de problèmes et les applications pratiques.",
          years: 8
        },
        {
          id: 11,
          name: "M. Benjamin Tetteh",
          title: "Professeur d'Informatique",
          department: "sciences",
          qualifications: ["Master en Informatique", "Développeur Full-Stack", "7 ans d'expérience"],
          subjects: ["Informatique", "Programmation", "Robotique"],
          email: "b.tetteh@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Expert en technologies éducatives et programmation créative.",
          years: 7
        },
        {
          id: 12,
          name: "Mme. Comfort Asare",
          title: "Professeur de Sciences Physiques",
          department: "sciences",
          qualifications: ["Licence en Physique", "Spécialiste Énergie Renouvelable", "6 ans d'expérience"],
          subjects: ["Physique", "Technologie"],
          email: "c.asare@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Passionnée par les applications pratiques de la physique dans la vie quotidienne.",
          years: 6
        },

        // Humanities Department (5 teachers)
        {
          id: 13,
          name: "M. Jean-Baptiste Yao",
          title: "Chef du Département des Humanités",
          department: "humanities",
          qualifications: ["Maîtrise en Histoire", "DEA en Philosophie", "Auteur Publiqué"],
          subjects: ["Histoire", "Géographie", "Philosophie"],
          email: "j.yao@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Expert en histoire africaine et relations internationales.",
          years: 18
        },
        {
          id: 14,
          name: "Mme. Abena Ofori",
          title: "Professeur d'Histoire",
          department: "humanities",
          qualifications: ["Master en Histoire Africaine", "Chercheur Associé", "10 ans d'expérience"],
          subjects: ["Histoire", "Civilisations Africaines"],
          email: "a.ofori@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Spécialiste de l'histoire pré-coloniale et des royaumes africains.",
          years: 10
        },
        {
          id: 15,
          name: "M. Michael Appiah",
          title: "Professeur de Géographie",
          department: "humanities",
          qualifications: ["Master en Géographie", "Spécialiste SIG", "9 ans d'expérience"],
          subjects: ["Géographie", "Environnement"],
          email: "m.appiah@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Expert en géographie humaine et systèmes d'information géographique.",
          years: 9
        },
        {
          id: 16,
          name: "Mme. Fatou Diop",
          title: "Professeur de Philosophie",
          department: "humanities",
          qualifications: ["Master en Philosophie", "Spécialiste Philosophie Africaine", "8 ans d'expérience"],
          subjects: ["Philosophie", "Éthique"],
          email: "f.diop@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Passionnée par la philosophie africaine contemporaine et l'éthique appliquée.",
          years: 8
        },
        {
          id: 17,
          name: "M. Robert Quansah",
          title: "Professeur d'Économie",
          department: "humanities",
          qualifications: ["Master en Économie", "Ancien Banquier", "12 ans d'expérience"],
          subjects: ["Économie", "Entrepreneuriat"],
          email: "r.quansah@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Expert en économie du développement et entrepreneuriat des jeunes.",
          years: 12
        },

        // Arts Department (4 teachers)
        {
          id: 18,
          name: "M. Kwame Asante",
          title: "Chef du Département des Arts",
          department: "arts",
          qualifications: ["Diplôme des Beaux-Arts", "Artiste Exposé", "8 ans d'enseignement"],
          subjects: ["Arts Visuels", "Musique", "Théâtre"],
          email: "k.asante@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Artiste multidisciplinaire passionné par l'expression créative des étudiants.",
          years: 8
        },
        {
          id: 19,
          name: "Mme. Ama Serwaa",
          title: "Professeur de Musique",
          department: "arts",
          qualifications: ["Diplôme en Musique", "Pianiste Concertiste", "7 ans d'expérience"],
          subjects: ["Musique", "Chorale", "Histoire de la Musique"],
          email: "a.serwaa@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Musicienne accomplie spécialisée dans les traditions musicales africaines.",
          years: 7
        },
        {
          id: 20,
          name: "M. Yaw Boateng",
          title: "Professeur d'Arts Visuels",
          department: "arts",
          qualifications: ["BFA en Peinture", "Artiste Exposé International", "6 ans d'expérience"],
          subjects: ["Dessin", "Peinture", "Sculpture"],
          email: "y.boateng@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Artiste visuel spécialisé dans les techniques mixtes et l'art contemporain.",
          years: 6
        },
        {
          id: 21,
          name: "Mme. Akua Frempong",
          title: "Professeur de Théâtre",
          department: "arts",
          qualifications: ["Licence en Arts du Spectacle", "Metteur en Scène", "5 ans d'expérience"],
          subjects: ["Théâtre", "Expression Corporelle", "Improvisation"],
          email: "a.frempong@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Passionnée par le théâtre éducatif et le développement de la confiance en soi.",
          years: 5
        },

        // Physical Education (2 teachers)
        {
          id: 22,
          name: "M. Joseph Mensah",
          title: "Professeur d'Éducation Physique",
          department: "physical",
          qualifications: ["Licence en Éducation Physique", "Entraîneur Certifié", "10 ans d'expérience"],
          subjects: ["Éducation Physique", "Basketball", "Athlétisme"],
          email: "j.mensah@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Ancien athlète passionné par le développement physique et le sport scolaire.",
          years: 10
        },
        {
          id: 23,
          name: "Mme. Esther Owusu",
          title: "Professeur de Sports",
          department: "physical",
          qualifications: ["Master en Sciences du Sport", "Entraîneuse Football", "8 ans d'expérience"],
          subjects: ["Football", "Volleyball", "Santé et Bien-être"],
          email: "e.owusu@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Spécialiste en conditionnement physique et développement des jeunes athlètes.",
          years: 8
        },

        // Administration (2 teachers)
        {
          id: 24,
          name: "Mme. Afi Gbedema",
          title: "Conseillère d'Éducation",
          department: "administration",
          qualifications: ["Maîtrise en Psychologie", "Spécialiste en Orientation", "10 ans d'expérience"],
          subjects: ["Vie Scolaire", "Orientation"],
          email: "a.gbedema@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Dévouée au développement personnel et académique des étudiants.",
          years: 10
        },
        {
          id: 25,
          name: "M. Daniel Kumi",
          title: "Coordinateur Académique",
          department: "administration",
          qualifications: ["Master en Administration Scolaire", "15 ans d'expérience", "Formateur d'Enseignants"],
          subjects: ["Planification Académique", "Développement Curriculaire"],
          email: "d.kumi@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Expert en développement curriculaire et innovation pédagogique.",
          years: 15
        }
      ]
    },
    en: {
      title: "Our Faculty & Staff",
      subtitle: "25 qualified teachers dedicated to academic excellence",
      departments: {
        all: "All Departments",
        languages: "Language Department",
        sciences: "Science Department",
        humanities: "Humanities Department",
        arts: "Arts Department",
        administration: "Administration",
        physical: "Physical Education"
      },
      searchPlaceholder: "Search for a teacher...",
      joinTitle: "Join Our Team",
      joinDesc: "Interested in contributing to our educational mission? Explore career opportunities.",
      applyNow: "Apply Now",
      contactUs: "Contact Us",
      subjects: "Subjects",
      qualifications: "Qualifications",
      yearsExp: "years exp.",
      faculty: [
        // Language Department (6 teachers)
        {
          id: 1,
          name: "Mrs. Akossiwa Mensah",
          title: "Head of Language Department",
          department: "languages",
          qualifications: ["Master's in Linguistics", "DELF Examiner", "15 years experience"],
          subjects: ["French", "English", "Literature"],
          email: "a.mensah@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Bilingual education specialist with a passion for Francophone literature.",
          years: 15
        },
        {
          id: 2,
          name: "Mr. François Kouassi",
          title: "French Teacher",
          department: "languages",
          qualifications: ["Bachelor's in Modern Literature", "FLE Certificate", "8 years experience"],
          subjects: ["French", "Communication"],
          email: "f.kouassi@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Passionate about teaching French language and Francophone culture.",
          years: 8
        },
        {
          id: 3,
          name: "Mrs. Sarah Johnson",
          title: "English Teacher",
          department: "languages",
          qualifications: ["Master's in English Literature", "CELTA Certified", "10 years experience"],
          subjects: ["English", "World Literature"],
          email: "s.johnson@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Experienced teacher in English literature and language skills.",
          years: 10
        },
        {
          id: 4,
          name: "Mr. Kwame Osei",
          title: "African Languages Teacher",
          department: "languages",
          qualifications: ["Master's in African Linguistics", "Twi Specialist", "7 years experience"],
          subjects: ["Twi", "Ghanaian Culture"],
          email: "k.osei@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Expert in local languages and linguistic heritage preservation.",
          years: 7
        },
        {
          id: 5,
          name: "Mrs. Elena Rodriguez",
          title: "Spanish Teacher",
          department: "languages",
          qualifications: ["Bachelor's in Foreign Languages", "DELE Examiner", "6 years experience"],
          subjects: ["Spanish", "Hispanic Culture"],
          email: "e.rodriguez@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Native Spanish teacher passionate about Romance languages.",
          years: 6
        },
        {
          id: 6,
          name: "Mr. David Chen",
          title: "Mandarin Teacher",
          department: "languages",
          qualifications: ["Master's in Oriental Languages", "HSK Certified", "5 years experience"],
          subjects: ["Mandarin", "Chinese Culture"],
          email: "d.chen@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Mandarin teacher with interactive and cultural approach.",
          years: 5
        },

        // Science Department (6 teachers)
        {
          id: 7,
          name: "Dr. Koffi Adjo",
          title: "Head of Science Department",
          department: "sciences",
          qualifications: ["PhD in Physics", "MSc. in Education", "Excellence Award 2020"],
          subjects: ["Physics", "Chemistry", "Advanced Mathematics"],
          email: "k.adjou@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Former researcher at CERN, passionate about applied science education.",
          years: 12
        },
        {
          id: 8,
          name: "Mrs. Amina Diallo",
          title: "Chemistry Teacher",
          department: "sciences",
          qualifications: ["Master's in Chemistry", "Organic Chemistry Specialist", "9 years experience"],
          subjects: ["Chemistry", "Environmental Science"],
          email: "a.diallo@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Passionate about green chemistry and practical laboratory applications.",
          years: 9
        },
        {
          id: 9,
          name: "Mr. Samuel Nkrumah",
          title: "Biology Teacher",
          department: "sciences",
          qualifications: ["Master's in Biology", "Genetics Specialist", "11 years experience"],
          subjects: ["Biology", "Life Sciences"],
          email: "s.nkrumah@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Expert in molecular biology and African ecosystems ecology.",
          years: 11
        },
        {
          id: 10,
          name: "Mrs. Grace Anokye",
          title: "Mathematics Teacher",
          department: "sciences",
          qualifications: ["Master's in Mathematics", "Algebra Specialist", "8 years experience"],
          subjects: ["Mathematics", "Statistics"],
          email: "g.anokye@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Teacher passionate about problem-solving and practical applications.",
          years: 8
        },
        {
          id: 11,
          name: "Mr. Benjamin Tetteh",
          title: "Computer Science Teacher",
          department: "sciences",
          qualifications: ["Master's in Computer Science", "Full-Stack Developer", "7 years experience"],
          subjects: ["Computer Science", "Programming", "Robotics"],
          email: "b.tetteh@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Expert in educational technologies and creative programming.",
          years: 7
        },
        {
          id: 12,
          name: "Mrs. Comfort Asare",
          title: "Physical Sciences Teacher",
          department: "sciences",
          qualifications: ["Bachelor's in Physics", "Renewable Energy Specialist", "6 years experience"],
          subjects: ["Physics", "Technology"],
          email: "c.asare@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Passionate about practical applications of physics in daily life.",
          years: 6
        },

        // Humanities Department (5 teachers)
        {
          id: 13,
          name: "Mr. Jean-Baptiste Yao",
          title: "Head of Humanities Department",
          department: "humanities",
          qualifications: ["Master's in History", "DEA in Philosophy", "Published Author"],
          subjects: ["History", "Geography", "Philosophy"],
          email: "j.yao@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Expert in African history and international relations.",
          years: 18
        },
        {
          id: 14,
          name: "Mrs. Abena Ofori",
          title: "History Teacher",
          department: "humanities",
          qualifications: ["Master's in African History", "Research Associate", "10 years experience"],
          subjects: ["History", "African Civilizations"],
          email: "a.ofori@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Specialist in pre-colonial history and African kingdoms.",
          years: 10
        },
        {
          id: 15,
          name: "Mr. Michael Appiah",
          title: "Geography Teacher",
          department: "humanities",
          qualifications: ["Master's in Geography", "GIS Specialist", "9 years experience"],
          subjects: ["Geography", "Environment"],
          email: "m.appiah@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Expert in human geography and geographic information systems.",
          years: 9
        },
        {
          id: 16,
          name: "Mrs. Fatou Diop",
          title: "Philosophy Teacher",
          department: "humanities",
          qualifications: ["Master's in Philosophy", "African Philosophy Specialist", "8 years experience"],
          subjects: ["Philosophy", "Ethics"],
          email: "f.diop@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Passionate about contemporary African philosophy and applied ethics.",
          years: 8
        },
        {
          id: 17,
          name: "Mr. Robert Quansah",
          title: "Economics Teacher",
          department: "humanities",
          qualifications: ["Master's in Economics", "Former Banker", "12 years experience"],
          subjects: ["Economics", "Entrepreneurship"],
          email: "r.quansah@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Expert in development economics and youth entrepreneurship.",
          years: 12
        },

        // Arts Department (4 teachers)
        {
          id: 18,
          name: "Mr. Kwame Asante",
          title: "Head of Arts Department",
          department: "arts",
          qualifications: ["Fine Arts Diploma", "Exhibited Artist", "8 years teaching"],
          subjects: ["Visual Arts", "Music", "Theater"],
          email: "k.asante@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Multidisciplinary artist passionate about students' creative expression.",
          years: 8
        },
        {
          id: 19,
          name: "Mrs. Ama Serwaa",
          title: "Music Teacher",
          department: "arts",
          qualifications: ["Music Diploma", "Concert Pianist", "7 years experience"],
          subjects: ["Music", "Choir", "Music History"],
          email: "a.serwaa@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Accomplished musician specialized in African musical traditions.",
          years: 7
        },
        {
          id: 20,
          name: "Mr. Yaw Boateng",
          title: "Visual Arts Teacher",
          department: "arts",
          qualifications: ["BFA in Painting", "Internationally Exhibited Artist", "6 years experience"],
          subjects: ["Drawing", "Painting", "Sculpture"],
          email: "y.boateng@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Visual artist specialized in mixed media and contemporary art.",
          years: 6
        },
        {
          id: 21,
          name: "Mrs. Akua Frempong",
          title: "Theater Teacher",
          department: "arts",
          qualifications: ["Bachelor's in Performing Arts", "Stage Director", "5 years experience"],
          subjects: ["Theater", "Body Expression", "Improvisation"],
          email: "a.frempong@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Passionate about educational theater and confidence building.",
          years: 5
        },

        // Physical Education (2 teachers)
        {
          id: 22,
          name: "Mr. Joseph Mensah",
          title: "Physical Education Teacher",
          department: "physical",
          qualifications: ["Bachelor's in Physical Education", "Certified Coach", "10 years experience"],
          subjects: ["Physical Education", "Basketball", "Athletics"],
          email: "j.mensah@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Former athlete passionate about physical development and school sports.",
          years: 10
        },
        {
          id: 23,
          name: "Mrs. Esther Owusu",
          title: "Sports Teacher",
          department: "physical",
          qualifications: ["Master's in Sports Science", "Football Coach", "8 years experience"],
          subjects: ["Football", "Volleyball", "Health & Wellness"],
          email: "e.owusu@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Specialist in physical conditioning and young athletes development.",
          years: 8
        },

        // Administration (2 teachers)
        {
          id: 24,
          name: "Mrs. Afi Gbedema",
          title: "Education Counselor",
          department: "administration",
          qualifications: ["Master's in Psychology", "Guidance Specialist", "10 years experience"],
          subjects: ["Student Life", "Guidance"],
          email: "a.gbedema@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Dedicated to students' personal and academic development.",
          years: 10
        },
        {
          id: 25,
          name: "Mr. Daniel Kumi",
          title: "Academic Coordinator",
          department: "administration",
          qualifications: ["Master's in School Administration", "15 years experience", "Teacher Trainer"],
          subjects: ["Academic Planning", "Curriculum Development"],
          email: "d.kumi@stpierreclaver.edu.gh",
          phone: "+233 XX XXX XXXX",
          bio: "Expert in curriculum development and pedagogical innovation.",
          years: 15
        }
      ]
    }
  }

  const t = facultyContent[language]

  const filteredFaculty = t.faculty.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment
    
    return matchesSearch && matchesDepartment
  })

  const getDepartmentStats = () => {
    const stats = {}
    t.faculty.forEach(member => {
      if (!stats[member.department]) {
        stats[member.department] = 0
      }
      stats[member.department]++
    })
    return stats
  }

  const departmentStats = getDepartmentStats()

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description="Meet our 25 qualified and dedicated faculty members at École Saint Pierre Claver. Experienced teachers committed to student success across all departments."
        keywords="faculty, teachers, staff, qualified educators, school teachers, language department, science department, humanities, arts"
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
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

            {/* Department Filter */}
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-gray-600" />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
              >
                {Object.entries(t.departments).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value} {key !== 'all' && `(${departmentStats[key] || 0})`}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredFaculty.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="card group"
              >
                <div className="flex flex-col h-full">
                  {/* Profile Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-brown to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-brown mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-1">{member.title}</p>
                      <p className="text-primary-brown font-semibold text-sm">
                        {t.departments[member.department]}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Users size={14} />
                      <span>{member.years} {t.yearsExp}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{member.bio}</p>

                  {/* Subjects */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 text-sm mb-2 flex items-center">
                      <BookOpen size={14} className="mr-1" />
                      {t.subjects}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-cream text-primary-brown px-2 py-1 rounded text-xs font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 text-sm mb-2 flex items-center">
                      <Award size={14} className="mr-1" />
                      {t.qualifications}
                    </h4>
                    <ul className="space-y-1">
                      {member.qualifications.slice(0, 2).map((qual, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                          <div className="w-1 h-1 bg-primary-brown rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{qual}</span>
                        </li>
                      ))}
                      {member.qualifications.length > 2 && (
                        <li className="text-xs text-primary-brown font-medium">
                          +{member.qualifications.length - 2} {language === 'fr' ? 'de plus' : 'more'}
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="pt-4 border-t border-gray-200 mt-auto">
                    <div className="flex flex-col space-y-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center space-x-2 text-primary-brown hover:text-primary-dark transition-colors text-sm"
                      >
                        <Mail size={14} />
                        <span>Email</span>
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors text-sm"
                      >
                        <Phone size={14} />
                        <span>{member.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredFaculty.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {language === 'fr' ? 'Aucun enseignant trouvé' : 'No teachers found'}
              </h3>
              <p className="text-gray-500">
                {language === 'fr' 
                  ? 'Aucun enseignant ne correspond à vos critères de recherche' 
                  : 'No teachers match your search criteria'
                }
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="section-padding bg-primary-cream">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-brown mb-4">
              {t.joinTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.joinDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@stpierreclaver.edu.gh"
                className="btn-primary"
              >
                {t.applyNow}
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                {t.contactUs}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Faculty