import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Eye, EyeOff, Lock, Mail, School, Shield, AlertCircle, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import { authService } from '../services/authService'

const AdminLogin = () => {
  const { language } = useLanguage()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const loginContent = {
    fr: {
      title: "Connexion Administrateur",
      subtitle: "Accédez au tableau de bord de gestion",
      form: {
        email: "Email Administrateur",
        password: "Mot de Passe",
        rememberMe: "Se souvenir de moi",
        forgotPassword: "Mot de passe oublié ?",
        login: "Se Connecter",
        loggingIn: "Connexion..."
      },
      features: {
        title: "Gestion Complète",
        messages: "Gestion des Messages",
        users: "Gestion des Utilisateurs",
        content: "Gestion du Contenu",
        analytics: "Analytiques"
      },
      security: {
        title: "Sécurité Renforcée",
        description: "Authentification sécurisée avec chiffrement de bout en bout"
      },
      errors: {
        invalidCredentials: "Email ou mot de passe incorrect",
        required: "Ce champ est requis",
        invalidEmail: "Format d'email invalide",
        serverError: "Erreur de serveur. Veuillez réessayer."
      },
      success: {
        login: "Connexion réussie ! Redirection..."
      }
    },
    en: {
      title: "Admin Login",
      subtitle: "Access your management dashboard",
      form: {
        email: "Admin Email",
        password: "Password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot password?",
        login: "Login",
        loggingIn: "Logging in..."
      },
      features: {
        title: "Complete Management",
        messages: "Message Management",
        users: "User Management",
        content: "Content Management",
        analytics: "Analytics"
      },
      security: {
        title: "Enhanced Security",
        description: "Secure authentication with end-to-end encryption"
      },
      errors: {
        invalidCredentials: "Invalid email or password",
        required: "This field is required",
        invalidEmail: "Invalid email format",
        serverError: "Server error. Please try again."
      },
      success: {
        login: "Login successful! Redirecting..."
      }
    }
  }

  const t = loginContent[language]

  const validateForm = () => {
    if (!formData.email.trim()) {
      setError(t.errors.required)
      return false
    }
    if (!formData.password) {
      setError(t.errors.required)
      return false
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError(t.errors.invalidEmail)
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!validateForm()) return

    setIsLoading(true)

    try {
      const response = await authService.adminLogin(formData.email, formData.password)
      
      if (response.success) {
        setSuccess(t.success.login)
        
        // Store auth token and user info
        localStorage.setItem('adminToken', response.data.token)
        authService.storeUser(response.data.user)
        
        if (formData.rememberMe) {
          localStorage.setItem('rememberMe', 'true')
        }

        // Redirect to admin dashboard
        setTimeout(() => {
          navigate('/admin')
        }, 1000)
      }
    } catch (err) {
      console.error('Login error:', err)
      
      if (err.response?.data?.message) {
        setError(err.response.data.message)
      } else if (err.code === 'NETWORK_ERROR') {
        setError(t.errors.serverError)
      } else {
        setError(t.errors.invalidCredentials)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  const features = [
    {
      icon: Mail,
      label: t.features.messages,
      description: language === 'fr' 
        ? "Gérez les messages des visiteurs et répondez rapidement"
        : "Manage visitor messages and respond quickly"
    },
    {
      icon: Shield,
      label: t.features.users,
      description: language === 'fr'
        ? "Administrez les comptes utilisateurs et permissions"
        : "Manage user accounts and permissions"
    },
    {
      icon: School,
      label: t.features.content,
      description: language === 'fr'
        ? "Modifiez le contenu du site et les actualités"
        : "Edit website content and news updates"
    },
    {
      icon: Lock,
      label: t.features.analytics,
      description: language === 'fr'
        ? "Suivez les statistiques et performances du site"
        : "Track website statistics and performance"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-brown via-primary-dark to-secondary-dark">
      <SEO 
        title={t.title}
        description="Admin login for École Saint Pierre Claver management dashboard"
        keywords="admin login, school management, dashboard, authentication"
      />

      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-primary-cream p-3 rounded-full">
                <School className="text-primary-brown" size={32} />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">
                  École Saint Pierre Claver
                </h1>
                <p className="text-primary-cream text-lg mt-2">
                  {language === 'fr' ? 'Système de Gestion' : 'Management System'}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Login Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">{t.title}</h2>
                <p className="text-gray-600 mt-2">{t.subtitle}</p>
              </div>

              {/* Status Messages */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3"
                >
                  <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                  <p className="text-red-700 text-sm">{error}</p>
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <p className="text-green-700 text-sm">{success}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.email}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all duration-300"
                      placeholder="admin@stpierreclaver.edu.gh"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.password}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all duration-300"
                      placeholder="••••••••"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary-brown focus:ring-primary-brown border-gray-300 rounded"
                      disabled={isLoading}
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                      {t.form.rememberMe}
                    </label>
                  </div>

                  <button
                    type="button"
                    className="text-sm text-primary-brown hover:text-primary-dark font-medium transition-colors duration-300"
                    disabled={isLoading}
                  >
                    {t.form.forgotPassword}
                  </button>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary-brown text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-dark focus:ring-2 focus:ring-primary-brown focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>{t.form.loggingIn}</span>
                    </>
                  ) : (
                    <>
                      <Lock size={20} />
                      <span>{t.form.login}</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Security Notice */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-3">
                  <Shield className="text-blue-500 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-medium text-blue-800">{t.security.title}</p>
                    <p className="text-sm text-blue-600 mt-1">{t.security.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-4">{t.features.title}</h3>
                <p className="text-primary-cream text-lg">
                  {language === 'fr' 
                    ? "Accédez à tous les outils de gestion de l'école"
                    : "Access all school management tools"
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-cream p-3 rounded-lg flex-shrink-0">
                        <feature.icon className="text-primary-brown" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg mb-2">
                          {feature.label}
                        </h4>
                        <p className="text-primary-cream/80 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Demo Credentials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h4 className="font-semibold text-white text-lg mb-3">
                  {language === 'fr' ? 'Identifiants de Démonstration' : 'Demo Credentials'}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-primary-cream/80">Email:</span>
                    <code className="bg-black/30 px-2 py-1 rounded text-primary-cream font-mono">
                      
                    </code>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-cream/80">Password:</span>
                    <code className="bg-black/30 px-2 py-1 rounded text-primary-cream font-mono">
                      
                    </code>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center pt-8"
          >
            <p className="text-primary-cream/60 text-sm">
              {language === 'fr' 
                ? "© 2024 École Saint Pierre Claver. Accès réservé au personnel autorisé."
                : "© 2024 Saint Pierre Claver School. Access restricted to authorized personnel."
              }
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin