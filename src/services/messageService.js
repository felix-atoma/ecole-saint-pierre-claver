// src/services/messageService.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://backend12-9z98.onrender.com/api",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token for admin routes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Auto logout if 401 response
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export const messageService = {
  // Get all messages with filters (Admin only)
  getMessages: async (filters = {}) => {
    try {
      const params = new URLSearchParams();

      Object.keys(filters).forEach((key) => {
        if (filters[key] && filters[key] !== "all") {
          params.append(key, filters[key]);
        }
      });

      const response = await api.get(`/messages?${params}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  },

  // Get single message (Admin only)
  getMessage: async (id) => {
    try {
      const response = await api.get(`/messages/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching message ${id}:`, error);
      throw error;
    }
  },

  // Create new message (Public - no auth required)
  createMessage: async (messageData) => {
    try {
      // Create a separate instance without auth for public endpoints
      const publicApi = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL || "https://backend12-9z98.onrender.com/api",
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const response = await publicApi.post("/messages", messageData);
      return response.data;
    } catch (error) {
      console.error('Error creating message:', error);
      throw error;
    }
  },

  // Update message status (Admin only)
  updateMessageStatus: async (id, status, adminNotes = "") => {
    try {
      const response = await api.patch(`/messages/${id}/status`, {
        status,
        adminNotes,
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating message status ${id}:`, error);
      throw error;
    }
  },

  // Reply to message (Admin only)
  replyToMessage: async (id, replyData) => {
    try {
      const response = await api.post(`/messages/${id}/reply`, replyData);
      return response.data;
    } catch (error) {
      console.error(`Error replying to message ${id}:`, error);
      throw error;
    }
  },

  // Delete message (Admin only)
  deleteMessage: async (id) => {
    try {
      const response = await api.delete(`/messages/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting message ${id}:`, error);
      throw error;
    }
  },

  // Get message statistics (Admin only)
  getMessageStats: async () => {
    try {
      const response = await api.get("/messages/stats/overview");
      return response.data;
    } catch (error) {
      console.error('Error fetching message stats:', error);
      throw error;
    }
  },

  // Mark message as read (Admin only)
  markAsRead: async (id) => {
    try {
      const response = await api.patch(`/messages/${id}/read`);
      return response.data;
    } catch (error) {
      console.error(`Error marking message as read ${id}:`, error);
      throw error;
    }
  },

  // Bulk update messages (Admin only)
  bulkUpdateMessages: async (messageIds, updates) => {
    try {
      const response = await api.patch('/messages/bulk-update', {
        messageIds,
        updates
      });
      return response.data;
    } catch (error) {
      console.error('Error bulk updating messages:', error);
      throw error;
    }
  },

  // Export messages (Admin only)
  exportMessages: async (filters = {}) => {
    try {
      const params = new URLSearchParams();

      Object.keys(filters).forEach((key) => {
        if (filters[key] && filters[key] !== "all") {
          params.append(key, filters[key]);
        }
      });

      const response = await api.get(`/messages/export?${params}`, {
        responseType: 'blob'
      });
      return response.data;
    } catch (error) {
      console.error('Error exporting messages:', error);
      throw error;
    }
  }
};