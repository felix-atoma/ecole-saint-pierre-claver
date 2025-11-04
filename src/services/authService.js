import api from './api';

export const authService = {
  // ✅ Admin login - FIXED: Added /api prefix
  adminLogin: async (email, password) => {
    try {
      const response = await api.post('/api/auth/admin/login', { email, password });

      // Extract token and user info
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem('adminToken', token);
      }

      if (user) {
        localStorage.setItem('adminUser', JSON.stringify(user));
      }

      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  // ✅ Get current logged-in admin - FIXED: Added /api prefix
  getCurrentUser: async () => {
    try {
      const response = await api.get('/api/auth/me');
      return response.data;
    } catch (error) {
      console.error('Error fetching current user:', error);
      throw error;
    }
  },

  // ✅ Logout (client-side)
  logout: () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    localStorage.removeItem('rememberMe');
    // Optional redirect
    window.location.href = '/admin/login';
  },

  // ✅ Check if admin is logged in
  isAuthenticated: () => {
    const token = localStorage.getItem('adminToken');
    return !!token;
  },

  // ✅ Get stored user from localStorage
  getStoredUser: () => {
    try {
      const user = localStorage.getItem('adminUser');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error parsing stored user:', error);
      return null;
    }
  },

  // ✅ Store or update user info
  storeUser: (userData) => {
    try {
      localStorage.setItem('adminUser', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  },
};