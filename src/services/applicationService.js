import api from './api';

export const applicationService = {
  // ✅ Submit new application - FIXED: Added /api prefix
  submitApplication: async (applicationData) => {
    try {
      const formData = new FormData();

      // Append student info
      Object.entries(applicationData.studentInfo || {}).forEach(([key, value]) => {
        formData.append(`studentInfo[${key}]`, value);
      });

      // Append contact info
      Object.entries(applicationData.contactInfo || {}).forEach(([key, value]) => {
        formData.append(`contactInfo[${key}]`, value);
      });

      // Append academic info
      Object.entries(applicationData.academicInfo || {}).forEach(([key, value]) => {
        formData.append(`academicInfo[${key}]`, value);
      });

      // Append uploaded files
      if (applicationData.documents) {
        Object.entries(applicationData.documents).forEach(([key, value]) => {
          if (value) formData.append(key, value);
        });
      }

      const response = await api.post('/api/applications', formData, { // ✅ Added /api
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return response.data;
    } catch (error) {
      console.error('Error submitting application:', error);
      throw error;
    }
  },

  // ✅ Get all applications (with optional filters) - FIXED: Added /api prefix
  getApplications: async (filters = {}) => {
    try {
      const params = new URLSearchParams();

      Object.entries(filters).forEach(([key, value]) => {
        if (value && value !== 'all') {
          params.append(key, value);
        }
      });

      const response = await api.get(`/api/applications?${params.toString()}`); // ✅ Added /api
      return response.data;
    } catch (error) {
      console.error('Error fetching applications:', error);
      throw error;
    }
  },

  // ✅ Get single application by ID - FIXED: Added /api prefix
  getApplication: async (id) => {
    try {
      const response = await api.get(`/api/applications/${id}`); // ✅ Added /api
      return response.data;
    } catch (error) {
      console.error(`Error fetching application ${id}:`, error);
      throw error;
    }
  },

  // ✅ Update application status - FIXED: Added /api prefix
  updateApplicationStatus: async (id, status, notes = '') => {
    try {
      const response = await api.patch(`/api/applications/${id}/status`, { status, notes }); // ✅ Added /api
      return response.data;
    } catch (error) {
      console.error('Error updating application status:', error);
      throw error;
    }
  },

  // ✅ Get statistics overview - FIXED: Added /api prefix
  getApplicationStats: async () => {
    try {
      const response = await api.get('/api/applications/stats/overview'); // ✅ Added /api
      return response.data;
    } catch (error) {
      console.error('Error fetching application stats:', error);
      throw error;
    }
  },

  // ✅ Download a document (PDF, image, etc.) - FIXED: Added /api prefix
  downloadDocument: async (applicationId, documentType) => {
    try {
      const response = await api.get(
        `/api/applications/${applicationId}/documents/${documentType}`, // ✅ Added /api
        { responseType: 'blob' }
      );
      return response.data;
    } catch (error) {
      console.error('Error downloading document:', error);
      throw error;
    }
  },
};