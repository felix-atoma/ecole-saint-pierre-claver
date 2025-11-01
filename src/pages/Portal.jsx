import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  User, 
  BookOpen, 
  Calendar, 
  FileText, 
  CreditCard, 
  MessageCircle, 
  Settings, 
  Bell, 
  BarChart3, 
  Users,
  GraduationCap,
  Clock,
  Award,
  Download,
  Upload,
  Eye,
  Edit,
  Shield,
  LogOut
} from 'lucide-react'
import SEO from '../components/SEO'

const Portal = () => {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [userType, setUserType] = useState('student') // student, parent, faculty

  const portalContent = {
    fr: {
      title: "Portail Éducatif",
      subtitle: "Accédez à vos ressources éducatives et informations personnelles",
      welcome: "Bienvenue de retour",
      userTypes: {
        student: "Étudiant",
        parent: "Parent",
        faculty: "Enseignant"
      },
      dashboard: {
        title: "Tableau de Bord",
        stats: {
          courses: "Cours Actifs",
          assignments: "Devoirs",
          announcements: "Annonces",
          events: "Événements"
        },
        recentActivity: "Activité Récente",
        upcomingEvents: "Événements à Venir",
        quickActions: "Actions Rapides"
      },
      courses: {
        title: "Mes Cours",
        current: "Cours en Cours",
        completed: "Cours Terminés",
        materials: "Ressources de Cours"
      },
      grades: {
        title: "Notes & Évaluations",
        current: "Notes Actuelles",
        history: "Historique des Notes",
        assignments: "Devoirs Notés"
      },
      schedule: {
        title: "Emploi du Temps",
        weekly: "Vue Hebdomadaire",
        daily: "Vue Quotidienne",
        exams: "Calendrier des Examens"
      },
      resources: {
        title: "Ressources",
        library: "Bibliothèque",
        documents: "Mes Documents",
        downloads: "Téléchargements"
      },
      finance: {
        title: "Finances",
        fees: "Frais de Scolarité",
        payments: "Historique des Paiements",
        invoices: "Factures"
      },
      messages: {
        title: "Messages",
        inbox: "Boîte de Réception",
        sent: "Messages Envoyés",
        compose: "Nouveau Message"
      },
      profile: {
        title: "Profil",
        personal: "Informations Personnelles",
        academic: "Informations Académiques",
        security: "Sécurité"
      }
    },
    en: {
      title: "Educational Portal",
      subtitle: "Access your educational resources and personal information",
      welcome: "Welcome back",
      userTypes: {
        student: "Student",
        parent: "Parent",
        faculty: "Faculty"
      },
      dashboard: {
        title: "Dashboard",
        stats: {
          courses: "Active Courses",
          assignments: "Assignments",
          announcements: "Announcements",
          events: "Events"
        },
        recentActivity: "Recent Activity",
        upcomingEvents: "Upcoming Events",
        quickActions: "Quick Actions"
      },
      courses: {
        title: "My Courses",
        current: "Current Courses",
        completed: "Completed Courses",
        materials: "Course Materials"
      },
      grades: {
        title: "Grades & Assessments",
        current: "Current Grades",
        history: "Grade History",
        assignments: "Graded Assignments"
      },
      schedule: {
        title: "Schedule",
        weekly: "Weekly View",
        daily: "Daily View",
        exams: "Exam Schedule"
      },
      resources: {
        title: "Resources",
        library: "Library",
        documents: "My Documents",
        downloads: "Downloads"
      },
      finance: {
        title: "Finance",
        fees: "Tuition Fees",
        payments: "Payment History",
        invoices: "Invoices"
      },
      messages: {
        title: "Messages",
        inbox: "Inbox",
        sent: "Sent Messages",
        compose: "New Message"
      },
      profile: {
        title: "Profile",
        personal: "Personal Information",
        academic: "Academic Information",
        security: "Security"
      }
    }
  }

  const t = portalContent[language]

  // Mock data - In a real app, this would come from an API
  const userData = {
    student: {
      name: "Kwame Asante",
      id: "STU2024001",
      program: "Science Program - Grade 11",
      avatar: "KA",
      stats: {
        courses: 6,
        assignments: 3,
        announcements: 2,
        events: 5
      },
      recentActivity: [
        { type: 'assignment', title: 'Math Homework', course: 'Mathematics', time: '2 hours ago', status: 'submitted' },
        { type: 'grade', title: 'Physics Test', course: 'Physics', time: '1 day ago', score: '85%' },
        { type: 'announcement', title: 'School Trip', course: 'General', time: '2 days ago' },
        { type: 'resource', title: 'Study Guide', course: 'Chemistry', time: '3 days ago' }
      ],
      upcomingEvents: [
        { title: 'Science Fair', date: '2024-03-15', time: '09:00 AM', location: 'Science Lab' },
        { title: 'Parent-Teacher Meeting', date: '2024-03-20', time: '02:00 PM', location: 'Main Hall' },
        { title: 'Mathematics Competition', date: '2024-03-25', time: '10:00 AM', location: 'Room 201' }
      ],
      currentCourses: [
        { name: 'Mathematics', teacher: 'Mr. Johnson', progress: 75, nextAssignment: 'Algebra Quiz - Mar 18' },
        { name: 'Physics', teacher: 'Dr. Mensah', progress: 60, nextAssignment: 'Lab Report - Mar 20' },
        { name: 'French Language', teacher: 'Mme. Laurent', progress: 85, nextAssignment: 'Oral Exam - Mar 22' },
        { name: 'Computer Science', teacher: 'Ms. Akoto', progress: 70, nextAssignment: 'Project Submission - Mar 25' }
      ]
    },
    parent: {
      name: "Mr. Asante",
      children: ["Kwame Asante", "Ama Asante"],
      stats: {
        courses: 8,
        assignments: 4,
        announcements: 3,
        events: 6
      }
    },
    faculty: {
      name: "Dr. Mensah",
      department: "Science Department",
      stats: {
        courses: 4,
        assignments: 12,
        announcements: 5,
        events: 3
      }
    }
  }

  const currentUser = userData[userType]

  const navigationItems = [
    { id: 'dashboard', label: t.dashboard.title, icon: BarChart3 },
    { id: 'courses', label: t.courses.title, icon: BookOpen },
    { id: 'grades', label: t.grades.title, icon: Award },
    { id: 'schedule', label: t.schedule.title, icon: Calendar },
    { id: 'resources', label: t.resources.title, icon: FileText },
    { id: 'finance', label: t.finance.title, icon: CreditCard },
    { id: 'messages', label: t.messages.title, icon: MessageCircle },
    { id: 'profile', label: t.profile.title, icon: User }
  ]

  const quickActions = [
    { label: language === 'fr' ? 'Voir Emploi du Temps' : 'View Schedule', icon: Calendar, action: () => setActiveTab('schedule') },
    { label: language === 'fr' ? 'Télécharger Documents' : 'Download Documents', icon: Download, action: () => {} },
    { label: language === 'fr' ? 'Voir Notes' : 'View Grades', icon: Award, action: () => setActiveTab('grades') },
    { label: language === 'fr' ? 'Contacter Enseignant' : 'Contact Teacher', icon: MessageCircle, action: () => setActiveTab('messages') }
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t.dashboard.stats.courses}</p>
              <p className="text-2xl font-bold text-primary-brown">{currentUser.stats.courses}</p>
            </div>
            <div className="bg-primary-cream rounded-lg p-3">
              <BookOpen className="text-primary-brown" size={24} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t.dashboard.stats.assignments}</p>
              <p className="text-2xl font-bold text-primary-brown">{currentUser.stats.assignments}</p>
            </div>
            <div className="bg-primary-cream rounded-lg p-3">
              <FileText className="text-primary-brown" size={24} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t.dashboard.stats.announcements}</p>
              <p className="text-2xl font-bold text-primary-brown">{currentUser.stats.announcements}</p>
            </div>
            <div className="bg-primary-cream rounded-lg p-3">
              <Bell className="text-primary-brown" size={24} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t.dashboard.stats.events}</p>
              <p className="text-2xl font-bold text-primary-brown">{currentUser.stats.events}</p>
            </div>
            <div className="bg-primary-cream rounded-lg p-3">
              <Calendar className="text-primary-brown" size={24} />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-bold text-primary-brown mb-4">{t.dashboard.recentActivity}</h3>
          <div className="space-y-4">
            {currentUser.recentActivity?.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'assignment' ? 'bg-blue-500' :
                  activity.type === 'grade' ? 'bg-green-500' :
                  activity.type === 'announcement' ? 'bg-yellow-500' : 'bg-purple-500'
                }`}></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.course} • {activity.time}</p>
                </div>
                {activity.score && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    {activity.score}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-bold text-primary-brown mb-4">{t.dashboard.upcomingEvents}</h3>
          <div className="space-y-4">
            {currentUser.upcomingEvents?.map((event, index) => (
              <div key={index} className="p-3 border-l-4 border-primary-brown bg-primary-cream/20 rounded-r-lg">
                <p className="font-medium text-gray-800">{event.title}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{event.location}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
      >
        <h3 className="text-lg font-bold text-primary-brown mb-4">{t.dashboard.quickActions}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-brown hover:bg-primary-cream transition-all duration-300 group"
            >
              <action.icon className="text-gray-400 group-hover:text-primary-brown mb-2" size={24} />
              <span className="text-sm text-gray-600 group-hover:text-primary-brown text-center">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Current Courses */}
      {currentUser.currentCourses && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-bold text-primary-brown mb-4">{t.courses.current}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentUser.currentCourses.map((course, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-800">{course.name}</h4>
                  <span className="bg-primary-cream text-primary-brown px-2 py-1 rounded text-xs font-medium">
                    {course.progress}%
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{course.teacher}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div 
                    className="bg-primary-brown h-2 rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500">
                  {language === 'fr' ? 'Prochain devoir:' : 'Next assignment:'} {course.nextAssignment}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard()
      case 'courses':
        return (
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-primary-brown mb-6">{t.courses.title}</h2>
            <p className="text-gray-600">{language === 'fr' ? 'Gestion des cours en cours de développement...' : 'Course management under development...'}</p>
          </div>
        )
      case 'grades':
        return (
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-primary-brown mb-6">{t.grades.title}</h2>
            <p className="text-gray-600">{language === 'fr' ? 'Système de notes en cours de développement...' : 'Grading system under development...'}</p>
          </div>
        )
      case 'schedule':
        return (
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-primary-brown mb-6">{t.schedule.title}</h2>
            <p className="text-gray-600">{language === 'fr' ? 'Calendrier en cours de développement...' : 'Schedule under development...'}</p>
          </div>
        )
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={t.title}
        description="Educational portal for students, parents, and faculty of École Saint Pierre Claver. Access courses, grades, schedules, and resources."
        keywords="student portal, parent portal, faculty portal, educational platform, school management system"
      />

      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-primary-brown">{t.title}</h1>
              <p className="text-gray-600">{t.subtitle}</p>
            </div>
            <div className="flex items-center space-x-4">
              {/* User Type Selector */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                {['student', 'parent', 'faculty'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setUserType(type)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      userType === type
                        ? 'bg-primary-brown text-white'
                        : 'text-gray-600 hover:text-primary-brown'
                    }`}
                  >
                    {t.userTypes[type]}
                  </button>
                ))}
              </div>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-brown rounded-full flex items-center justify-center text-white font-bold">
                  {currentUser.avatar}
                </div>
                <div className="hidden sm:block">
                  <p className="font-semibold text-gray-800">{currentUser.name}</p>
                  <p className="text-sm text-gray-600">{currentUser.id || currentUser.department}</p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <LogOut size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-8">
              {/* Welcome Section */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-sm text-gray-600">{t.welcome}</p>
                <p className="font-semibold text-primary-brown">{currentUser.name}</p>
                {currentUser.program && (
                  <p className="text-xs text-gray-500 mt-1">{currentUser.program}</p>
                )}
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300 ${
                        activeTab === item.id
                          ? 'bg-primary-brown text-white shadow-md'
                          : 'text-gray-700 hover:bg-primary-cream hover:text-primary-brown'
                      }`}
                    >
                      <IconComponent size={20} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  )
                })}
              </nav>

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{t.dashboard.stats.courses}</span>
                    <span className="font-semibold text-primary-brown">{currentUser.stats.courses}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{t.dashboard.stats.assignments}</span>
                    <span className="font-semibold text-primary-brown">{currentUser.stats.assignments}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Portal