import React from 'react'
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  Mail, 
  Users, 
  School, 
  BarChart3, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

const AdminLayout = () => {
  const { language } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminEmail')
    localStorage.removeItem('rememberMe')
    navigate('/admin/login')
  }

  const adminMenu = [
    {
      path: '/admin/dashboard',
      icon: BarChart3,
      label: language === 'fr' ? 'Tableau de Bord' : 'Dashboard'
    },
    {
      path: '/admin/messages',
      icon: Mail,
      label: language === 'fr' ? 'Messages' : 'Messages'
    },
    {
      path: '/admin/users',
      icon: Users,
      label: language === 'fr' ? 'Utilisateurs' : 'Users'
    },
    {
      path: '/admin/academics',
      icon: School,
      label: language === 'fr' ? 'Académique' : 'Academics'
    },
    {
      path: '/admin/settings',
      icon: Settings,
      label: language === 'fr' ? 'Paramètres' : 'Settings'
    }
  ]

  const isActivePath = (path) => {
    return location.pathname === path
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 px-4">
            <School className="h-8 w-8 text-primary-brown" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              {language === 'fr' ? 'Administration' : 'Admin'}
            </span>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex-grow flex flex-col">
            <nav className="flex-1 px-4 pb-4 space-y-2">
              {adminMenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActivePath(item.path)
                      ? 'bg-primary-brown text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* User Info & Logout */}
            <div className="flex-shrink-0 border-t border-gray-200 p-4">
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">
                    {localStorage.getItem('adminEmail')}
                  </p>
                  <p className="text-xs font-medium text-gray-500">
                    {language === 'fr' ? 'Administrateur' : 'Administrator'}
                  </p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="mt-3 w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
              >
                <LogOut className="mr-3 h-5 w-5" />
                {language === 'fr' ? 'Déconnexion' : 'Logout'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Mobile header */}
        <div className="md:hidden">
          <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center">
              <School className="h-6 w-6 text-primary-brown" />
              <span className="ml-2 text-lg font-bold text-gray-900">
                {language === 'fr' ? 'Admin' : 'Admin'}
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="bg-white border-b">
              <nav className="px-4 py-2 space-y-1">
                {adminMenu.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${
                      isActivePath(item.path)
                        ? 'bg-primary-brown text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.label}
                    </div>
                  </Link>
                ))}
                <button
                  onClick={handleLogout}
                  className="w-full text-left flex items-center px-3 py-2 text-base font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  {language === 'fr' ? 'Déconnexion' : 'Logout'}
                </button>
              </nav>
            </div>
          )}
        </div>

        {/* Page content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout