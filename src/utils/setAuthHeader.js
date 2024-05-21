import axios from 'axios';
import apiClient from '../Components/LoginPage.vue'; // Ensure correct path

const setAuthHeader = (token) => {
    if (token) {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log('Token set in headers:', apiClient.defaults.headers.common['Authorization']); // For debugging
    } else {
      delete apiClient.defaults.headers.common['Authorization'];
    }
  };
  
export default setAuthHeader;
