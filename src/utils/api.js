import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SERVER_URL = 'http://172.20.10.6:5000'; // Sesuaikan dengan alamat server Anda

const API = axios.create({
  baseURL: `${SERVER_URL}/api`,
});

// Tambahkan interceptor untuk menyisipkan token ke setiap permintaan
API.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('token'); // Ambil token dari AsyncStorage
      console.log('Token Sent to Server:', token); // Debugging log
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Tambahkan token ke header Authorization
      }
    } catch (err) {
      console.error('Error retrieving token:', err); // Debugging log untuk kesalahan pengambilan token
    }
    return config;
  },
  (error) => {
    console.error('API Request Error:', error); // Debugging log untuk kesalahan permintaan
    return Promise.reject(error);
  }
);

export default API;
