import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  BookOpen, 
  Calendar, 
  DollarSign, 
  MessageCircle, 
  User, 
  Settings, 
  Bell, 
  FileText, 
  BarChart3,
  Clock,
  Download,
  Upload,
  Eye,
  Edit,
  Shield,
  LogOut
} from 'lucide-react'
import SEO from '../components/SEO'

const ParentsPortal = () => {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [user, setUser] = useState({
    name: 'Kwame Mensah',
    student: 'Ama Mensah',
    grade: 'Grade 5',
    lastLogin: '2024-01-15 14:30'
  })

  const portalContent = {
    fr: {
      title: "Portail Parents",
      subtitle: "Restez connecté avec l'éducation de votre enfant",
      welcome: "Bon retour",
      dashboard: {
        title: "Tableau de Bord",
        overview: "Aperçu",
        announcements: "Annonces",
        upcomingEvents: "Événements à Venir",
        quickActions: "Actions Rapides"
      },
      grades: {
        title: "Notes et Résultats",
        subject: "Matière",
        grade: "Note",
        teacher: "Enseignant",
        date: "Date",
        average: "Moyenne",
        performance: "Performance"
      },
      attendance: {
        title: "Présence",
        present: "Présent",
        absent: "Absent",
        late: "En retard",
        percentage: "Taux de présence",
        history: "Historique"
      },
      fees: {
        title: "Frais Scolaires",
        balance: "Solde",
        dueDate: "Date d'échéance",
        status: "Statut",
        paymentHistory: "Historique des Paiements"
      },
      messages: {
        title: "Messages",
        from: "De",
        subject: "Sujet",
        date: "Date",
        unread: "Non lu"
      },
      resources: {
        title: "Ressources",
        homework: "Devoirs",
        syllabus: "Programmes",
        calendar: "Calendrier Scolaire",
        documents: "Documents"
      },
      actions: {
        view: "Voir",
        download: "Télécharger",
        pay: "Payer",
        message: "Envoyer un message",
        update: "Mettre à jour"
      },
      status: {
        paid: "Payé",
        pending: "En attente",
        overdue: "En retard"
      }
    },
    en: {
      title: "Parents Portal",
      subtitle: "Stay connected with your child's education",
      welcome: "Welcome back",
      dashboard: {
        title: "Dashboard",
        overview: "Overview",
        announcements: "Announcements",
        upcomingEvents: "Upcoming Events",
        quickActions: "Quick Actions"
      },
      grades: {
        title: "Grades & Results",
        subject: "Subject",
        grade: "Grade",
        teacher: "Teacher",
        date: "Date",
        average: "Average",
        performance: "Performance"
      },
      attendance: {
        title: "Attendance",
        present: "Present",
        absent: "Absent",
        late: "Late",
        percentage: "Attendance Rate",
        history: "History"
      },
      fees: {
        title: "School Fees",
        balance: "Balance",
        dueDate: "Due Date",
        status: "Status",
        paymentHistory: "Payment History"
      },
      messages: {
        title: "Messages",
        from: "From",
        subject: "Subject",
        date: "Date",
        unread: "Unread"
      },
      resources: {
        title: "Resources",
        homework: "Homework",
        syllabus: "Syllabus",
        calendar: "School Calendar",
        documents: "Documents"
      },
      actions: {
        view: "View",
        download: "Download",
        pay: "Pay Now",
        message: "Send Message",
        update: "Update"
      },
      status: {
        paid: "Paid",
        pending: "Pending",
        overdue: "Overdue"
      }
    }
  }

  const t = portalContent[language]

  // Mock data
  const announcements = [
    { id: 1, title: 'Parent-Teacher Meeting', date: '2024-01-20', priority: 'high' },
    { id: 2, title: 'School Sports Day', date: '2024-01-25', priority: 'medium' },
    { id: 3, title: 'Holiday Notice', date: '2024-02-01', priority: 'low' }
  ]

  const grades = [
    { subject: 'Mathematics', grade: 'A', teacher: 'Mr. Johnson', date: '2024-01-10' },
    { subject: 'Science', grade: 'B+', teacher: 'Ms. Anderson', date: '2024-01-12' },
    { subject: 'English', grade: 'A-', teacher: 'Mrs. Smith', date: '2024-01-08' },
    { subject: 'French', grade: 'A', teacher: 'M. Dubois', date: '2024-01-15' }
  ]

  const attendance = {
    present: 45,
    absent: 2,
    late: 3,
    percentage: 90
  }

  const fees = {
    balance: 1250.00,
    dueDate: '2024-02-01',
    status: 'pending'
  }

  const quickActions = [
    { icon: DollarSign, label: language === 'fr' ? 'Payer les Frais' : 'Pay Fees', color: 'bg-green-500', tab: 'fees' },
    { icon: MessageCircle, label: language === 'fr' ? 'Contacter le Prof' : 'Contact Teacher', color: 'bg-blue-500', tab: 'messages' },
    { icon: FileText, label: language === 'fr' ? 'Rapport Trimestriel' : 'Term Report', color: 'bg-purple-500', tab: 'grades' },
    { icon: Calendar, label: language === 'fr' ? 'Calendrier' : 'Calendar', color: 'bg-orange-500', tab: 'resources' }
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-primary-brown to-primary-dark text-white rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">{t.welcome}, {user.name}!</h2>
        <p className="text-primary-cream">
          {language === 'fr' 
            ? `Suivi académique de ${user.student} - ${user.grade}`
            : `Tracking academic progress for ${user.student} - ${user.grade}`
          }
        </p>
        <div className="flex items-center mt-4 text-sm">
          <Clock size={16} className="mr-2" />
          {language === 'fr' ? 'Dernière connexion' : 'Last login'}: {user.lastLogin}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(action.tab)}
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
              <action.icon size={24} className="text-white" />
            </div>
            <span className="font-semibold text-gray-800 text-sm">{action.label}</span>
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Announcements */}
        <div className="card glass">
          <h3 className="text-xl font-bold mb-4">{t.dashboard.announcements}</h3>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="border-l-4 border-primary-brown pl-4 py-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-gray-800">{announcement.title}</h4>
                  <span className="text-sm text-gray-500">{announcement.date}</span>
                </div>
                <div className={`inline-block px-2 py-1 rounded text-xs mt-1 ${
                  announcement.priority === 'high' ? 'bg-red-100 text-red-800' :
                  announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {announcement.priority}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grades Overview */}
        <div className="card glass">
          <h3 className="text-xl font-bold mb-4">{t.grades.performance}</h3>
          <div className="space-y-3">
            {grades.slice(0, 3).map((grade, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-primary-cream/20 rounded-lg">
                <div>
                  <span className="font-semibold text-gray-800">{grade.subject}</span>
                  <p className="text-sm text-gray-600">{grade.teacher}</p>
                </div>
                <span className={`text-lg font-bold ${
                  grade.grade === 'A' ? 'text-green-600' :
                  grade.grade.includes('A') ? 'text-blue-600' :
                  grade.grade.includes('B') ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {grade.grade}
                </span>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setActiveTab('grades')}
            className="mt-4 text-primary-brown font-semibold hover:text-primary-dark transition-colors duration-300"
          >
            {language === 'fr' ? 'Voir toutes les notes →' : 'View all grades →'}
          </button>
        </div>
      </div>
    </div>
  )

  const renderGrades = () => (
    <div className="space-y-6">
      <div className="card glass">
        <h3 className="text-2xl font-bold mb-6">{t.grades.title}</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-primary-brown">
                <th className="text-left pb-4">{t.grades.subject}</th>
                <th className="text-left pb-4">{t.grades.grade}</th>
                <th className="text-left pb-4">{t.grades.teacher}</th>
                <th className="text-left pb-4">{t.grades.date}</th>
                <th className="text-left pb-4">{t.actions.view}</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-4 font-semibold">{grade.subject}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      grade.grade === 'A' ? 'bg-green-100 text-green-800' :
                      grade.grade.includes('A') ? 'bg-blue-100 text-blue-800' :
                      grade.grade.includes('B') ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {grade.grade}
                    </span>
                  </td>
                  <td className="py-4 text-gray-600">{grade.teacher}</td>
                  <td className="py-4 text-gray-600">{grade.date}</td>
                  <td className="py-4">
                    <button className="text-primary-brown hover:text-primary-dark transition-colors duration-300">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderFees = () => (
    <div className="space-y-6">
      <div className="card glass">
        <h3 className="text-2xl font-bold mb-6">{t.fees.title}</h3>
        
        {/* Balance Overview */}
        <div className="bg-primary-cream/20 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{t.fees.balance}</h4>
              <p className="text-3xl font-bold text-primary-brown">GHS {fees.balance.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">{t.fees.dueDate}: {fees.dueDate}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2 ${
                fees.status === 'paid' ? 'bg-green-100 text-green-800' :
                fees.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {t.status[fees.status]}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-3"
        >
          <DollarSign size={24} />
          <span>{t.actions.pay}</span>
        </motion.button>

        {/* Payment History */}
        <div className="mt-8">
          <h4 className="text-xl font-bold mb-4">{t.fees.paymentHistory}</h4>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex justify-between items-center p-4 bg-white rounded-lg border">
                <div>
                  <p className="font-semibold">Term {item} Fees 2024</p>
                  <p className="text-sm text-gray-600">Paid on 2024-01-10</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">GHS 1,250.00</p>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Paid</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard()
      case 'grades': return renderGrades()
      case 'fees': return renderFees()
      default: return renderDashboard()
    }
  }

  const tabs = [
    { id: 'dashboard', label: t.dashboard.title, icon: BarChart3 },
    { id: 'grades', label: t.grades.title, icon: BookOpen },
    { id: 'attendance', label: t.attendance.title, icon: User },
    { id: 'fees', label: t.fees.title, icon: DollarSign },
    { id: 'messages', label: t.messages.title, icon: MessageCircle },
    { id: 'resources', label: t.resources.title, icon: FileText }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={t.title}
        description="Access your child's academic progress, school fees, attendance, and communicate with teachers through our secure Parents Portal."
        keywords="parents portal, grades, attendance, school fees, communication"
      />

      {/* Header */}
      <section className="bg-primary-brown text-white py-12">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-cream"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Portal Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="card glass sticky top-8">
                {/* User Profile */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-cream rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="text-primary-brown" size={32} />
                  </div>
                  <h3 className="font-bold text-gray-800">{user.name}</h3>
                  <p className="text-sm text-gray-600">{user.student} - {user.grade}</p>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-primary-brown text-white'
                          : 'text-gray-700 hover:bg-primary-cream/30'
                      }`}
                    >
                      <tab.icon size={20} />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  ))}
                </nav>

                {/* Bottom Actions */}
                <div className="mt-8 pt-6 border-t border-gray-200 space-y-2">
                  <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                    <Settings size={20} />
                    <span>{language === 'fr' ? 'Paramètres' : 'Settings'}</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-300">
                    <LogOut size={20} />
                    <span>{language === 'fr' ? 'Déconnexion' : 'Logout'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="card glass">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ParentsPortal