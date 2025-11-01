import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  Mail, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Trash2, 
  Reply, 
  Archive, 
  Clock,
  User,
  Phone,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  XCircle,
  MoreVertical
} from 'lucide-react'
import SEO from '../components/SEO'

const AdminMessagesDashboard = () => {
  const { language } = useLanguage()
  const [messages, setMessages] = useState([])
  const [filteredMessages, setFilteredMessages] = useState([])
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [selectedMessages, setSelectedMessages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Mock data - replace with actual API calls
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockMessages = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@email.com',
          subject: 'Admission Inquiry for Grade 5',
          message: 'I would like to know more about the admission process for my son who will be entering Grade 5 next academic year.',
          studentGrade: 'primary',
          inquiryType: 'admission',
          status: 'new', // new, read, replied, archived
          date: '2024-01-15T10:30:00Z',
          phone: '+233 12 345 6789',
          priority: 'high' // low, medium, high
        },
        {
          id: 2,
          name: 'Sarah Mensah',
          email: 'sarah.mensah@email.com',
          subject: 'Campus Tour Request',
          message: 'We are interested in visiting your campus next week to see the facilities and meet with the admissions team.',
          studentGrade: 'jhs',
          inquiryType: 'visit',
          status: 'read',
          date: '2024-01-14T14:20:00Z',
          phone: '+233 23 456 7890',
          priority: 'medium'
        },
        {
          id: 3,
          name: 'Dr. Kwame Osei',
          email: 'k.osei@university.edu.gh',
          subject: 'Partnership Opportunity',
          message: 'Our university is interested in establishing a partnership program for student exchanges and collaborative research.',
          studentGrade: 'other',
          inquiryType: 'partnership',
          status: 'replied',
          date: '2024-01-13T09:15:00Z',
          phone: '+233 34 567 8901',
          priority: 'high'
        },
        {
          id: 4,
          name: 'Ama Johnson',
          email: 'ama.johnson@email.com',
          subject: 'General Information',
          message: 'Could you please send me information about your school fees structure and extracurricular activities?',
          studentGrade: 'preschool',
          inquiryType: 'information',
          status: 'archived',
          date: '2024-01-12T16:45:00Z',
          phone: '+233 45 678 9012',
          priority: 'low'
        }
      ]
      setMessages(mockMessages)
      setFilteredMessages(mockMessages)
      setIsLoading(false)
    }, 1000)
  }, [])

  const dashboardContent = {
    fr: {
      title: "Tableau de Bord des Messages",
      subtitle: "Gérez et répondez aux messages des visiteurs",
      stats: {
        total: "Total Messages",
        new: "Nouveaux",
        read: "Lus",
        replied: "Répondu",
        archived: "Archivé"
      },
      filters: {
        search: "Rechercher messages...",
        status: {
          all: "Tous les statuts",
          new: "Nouveaux",
          read: "Lus",
          replied: "Répondu",
          archived: "Archivé"
        },
        type: {
          all: "Tous les types",
          admission: "Admission",
          information: "Information",
          visit: "Visite",
          partnership: "Partenariat",
          other: "Autre"
        },
        sort: {
          newest: "Plus récent",
          oldest: "Plus ancien",
          priority: "Priorité"
        }
      },
      table: {
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        type: "Type",
        status: "Statut",
        date: "Date",
        priority: "Priorité",
        actions: "Actions"
      },
      actions: {
        view: "Voir",
        reply: "Répondre",
        archive: "Archiver",
        delete: "Supprimer",
        markRead: "Marquer comme lu",
        markReplied: "Marquer comme répondu",
        download: "Télécharger",
        selectAll: "Tout sélectionner",
        clearSelection: "Effacer la sélection"
      },
      messageDetail: {
        contactInfo: "Informations de Contact",
        message: "Message",
        reply: "Répondre",
        close: "Fermer",
        sendReply: "Envoyer la réponse"
      }
    },
    en: {
      title: "Messages Dashboard",
      subtitle: "Manage and respond to visitor messages",
      stats: {
        total: "Total Messages",
        new: "New",
        read: "Read",
        replied: "Replied",
        archived: "Archived"
      },
      filters: {
        search: "Search messages...",
        status: {
          all: "All Status",
          new: "New",
          read: "Read",
          replied: "Replied",
          archived: "Archived"
        },
        type: {
          all: "All Types",
          admission: "Admission",
          information: "Information",
          visit: "Campus Tour",
          partnership: "Partnership",
          other: "Other"
        },
        sort: {
          newest: "Newest First",
          oldest: "Oldest First",
          priority: "Priority"
        }
      },
      table: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        type: "Type",
        status: "Status",
        date: "Date",
        priority: "Priority",
        actions: "Actions"
      },
      actions: {
        view: "View",
        reply: "Reply",
        archive: "Archive",
        delete: "Delete",
        markRead: "Mark as Read",
        markReplied: "Mark as Replied",
        download: "Download",
        selectAll: "Select All",
        clearSelection: "Clear Selection"
      },
      messageDetail: {
        contactInfo: "Contact Information",
        message: "Message",
        reply: "Reply",
        close: "Close",
        sendReply: "Send Reply"
      }
    }
  }

  const t = dashboardContent[language]

  // Filter and sort messages
  useEffect(() => {
    let filtered = messages.filter(message => {
      const matchesSearch = 
        message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.message.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = statusFilter === 'all' || message.status === statusFilter
      const matchesType = typeFilter === 'all' || message.inquiryType === typeFilter
      
      return matchesSearch && matchesStatus && matchesType
    })

    // Sort messages
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date) - new Date(a.date)
        case 'oldest':
          return new Date(a.date) - new Date(b.date)
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 }
          return priorityOrder[b.priority] - priorityOrder[a.priority]
        default:
          return 0
      }
    })

    setFilteredMessages(filtered)
  }, [messages, searchTerm, statusFilter, typeFilter, sortBy])

  // Calculate statistics
  const stats = {
    total: messages.length,
    new: messages.filter(m => m.status === 'new').length,
    read: messages.filter(m => m.status === 'read').length,
    replied: messages.filter(m => m.status === 'replied').length,
    archived: messages.filter(m => m.status === 'archived').length
  }

  const handleViewMessage = (message) => {
    setSelectedMessage(message)
    // Mark as read when viewing
    if (message.status === 'new') {
      updateMessageStatus(message.id, 'read')
    }
  }

  const updateMessageStatus = (id, status) => {
    setMessages(prev => prev.map(msg => 
      msg.id === id ? { ...msg, status } : msg
    ))
  }

  const handleDeleteMessage = (id) => {
    setMessages(prev => prev.filter(msg => msg.id !== id))
    if (selectedMessage?.id === id) {
      setSelectedMessage(null)
    }
  }

  const handleArchiveMessage = (id) => {
    updateMessageStatus(id, 'archived')
  }

  const handleReply = (message) => {
    // Implement reply functionality
    console.log('Replying to:', message.email)
    updateMessageStatus(message.id, 'replied')
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'new':
        return <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
      case 'read':
        return <CheckCircle size={16} className="text-green-500" />
      case 'replied':
        return <Reply size={16} className="text-blue-500" />
      case 'archived':
        return <Archive size={16} className="text-gray-500" />
      default:
        return null
    }
  }

  const getPriorityBadge = (priority) => {
    const styles = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    }
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[priority]}`}>
        {priority}
      </span>
    )
  }

  const getTypeLabel = (type) => {
    const types = t.filters.type
    return types[type] || types.other
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-brown"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={t.title}
        description="Admin dashboard for managing contact form messages"
        keywords="admin, messages, dashboard, contact form"
      />

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
              <p className="text-gray-600 mt-2">{t.subtitle}</p>
            </div>
            <button className="btn-primary flex items-center space-x-2">
              <Download size={20} />
              <span>{t.actions.download}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {[
            { key: 'total', label: t.stats.total, color: 'bg-blue-500' },
            { key: 'new', label: t.stats.new, color: 'bg-green-500' },
            { key: 'read', label: t.stats.read, color: 'bg-yellow-500' },
            { key: 'replied', label: t.stats.replied, color: 'bg-purple-500' },
            { key: 'archived', label: t.stats.archived, color: 'bg-gray-500' }
          ].map((stat) => (
            <motion.div
              key={stat.key}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-sm border p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stats[stat.key]}</p>
                </div>
                <div className={`w-12 h-12 rounded-full ${stat.color} bg-opacity-10 flex items-center justify-center`}>
                  <Mail className={stat.color.replace('bg-', 'text-')} size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t.filters.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
            >
              {Object.entries(t.filters.status).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
            >
              {Object.entries(t.filters.type).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent"
            >
              {Object.entries(t.filters.sort).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Messages Table */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.table.name}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.table.subject}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.table.type}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.table.status}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.table.priority}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.table.date}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.table.actions}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMessages.map((message) => (
                  <motion.tr
                    key={message.id}
                    whileHover={{ backgroundColor: 'rgba(243, 244, 246, 0.5)' }}
                    className="cursor-pointer"
                    onClick={() => handleViewMessage(message)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-primary-cream rounded-full flex items-center justify-center">
                          <User size={20} className="text-primary-brown" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{message.name}</div>
                          <div className="text-sm text-gray-500">{message.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{message.subject}</div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">{message.message}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{getTypeLabel(message.inquiryType)}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(message.status)}
                        <span className="text-sm text-gray-900 capitalize">{message.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getPriorityBadge(message.priority)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(message.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleViewMessage(message)
                          }}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleReply(message)
                          }}
                          className="text-green-600 hover:text-green-900"
                        >
                          <Reply size={16} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleArchiveMessage(message.id)
                          }}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <Archive size={16} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteMessage(message.id)
                          }}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredMessages.length === 0 && (
            <div className="text-center py-12">
              <Mail size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg">No messages found</p>
            </div>
          )}
        </div>
      </div>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedMessage.subject}</h2>
                  <p className="text-gray-600 mt-1">{formatDate(selectedMessage.date)}</p>
                </div>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle size={24} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Contact Information */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.messageDetail.contactInfo}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <User className="text-gray-400" size={20} />
                      <div>
                        <p className="font-medium">{selectedMessage.name}</p>
                        <p className="text-sm text-gray-600">Contact Person</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-gray-400" size={20} />
                      <div>
                        <p className="font-medium">{selectedMessage.email}</p>
                        <p className="text-sm text-gray-600">Email</p>
                      </div>
                    </div>
                    {selectedMessage.phone && (
                      <div className="flex items-center space-x-3">
                        <Phone className="text-gray-400" size={20} />
                        <div>
                          <p className="font-medium">{selectedMessage.phone}</p>
                          <p className="text-sm text-gray-600">Phone</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center space-x-3">
                      <Calendar className="text-gray-400" size={20} />
                      <div>
                        <p className="font-medium">{getTypeLabel(selectedMessage.inquiryType)}</p>
                        <p className="text-sm text-gray-600">Inquiry Type</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-gray-400" size={20} />
                      <div>
                        <p className="font-medium capitalize">{selectedMessage.studentGrade}</p>
                        <p className="text-sm text-gray-600">Student Grade</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Content */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.messageDetail.message}</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>

                  {/* Reply Section */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.messageDetail.reply}</h3>
                    <textarea
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent resize-none"
                      placeholder={language === 'fr' ? 'Tapez votre réponse ici...' : 'Type your reply here...'}
                    ></textarea>
                    <div className="flex justify-end space-x-3 mt-4">
                      <button
                        onClick={() => setSelectedMessage(null)}
                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                      >
                        {t.messageDetail.close}
                      </button>
                      <button
                        onClick={() => handleReply(selectedMessage)}
                        className="btn-primary flex items-center space-x-2"
                      >
                        <Reply size={16} />
                        <span>{t.messageDetail.sendReply}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default AdminMessagesDashboard