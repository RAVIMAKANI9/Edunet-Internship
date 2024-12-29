import axios from 'axios';

const api = axios.create({
  baseURL: '/api'
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  signup: (data: any) => api.post('/auth/signup', data),
  login: (data: any) => api.post('/auth/login', data),
  getCurrentUser: () => api.get('/auth/me')
};

export const bookings = {
  create: (data: any) => api.post('/bookings', data),
  getUserBookings: () => api.get('/bookings/my'),
  cancel: (id: string) => api.patch(`/bookings/${id}/cancel`)
};

export const tours = {
  getAll: () => api.get('/tours'),
  getOne: (id: string) => api.get(`/tours/${id}`)
};

export default api;