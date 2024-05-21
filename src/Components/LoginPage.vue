<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <input type="submit" value="Submit" class="btn btn-primary">
    </form>
    <input type="button" value="dd" class="btn btn-primary" @click="getbook">
  </div>
</template>

<script>
import axios from 'axios';

// Create an instance of axios with default headers set
const apiClient = axios.create({
  baseURL: 'https://lms.upseba.com.bd/api', // Your API base URL
});

export default {
  data() {
    return {
      email: 'admin@example.com',
      password: 'password'
    };
  },
  methods: {
    setAuthHeader(token) {
      if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        console.log('Token set in headers:', apiClient.defaults.headers.common['Authorization']); // For debugging
      } else {
        delete apiClient.defaults.headers.common['Authorization'];
      }
    },
    async login() {
      try {
        const response = await apiClient.post('/login', {
          email: this.email,
          password: this.password
        });
        
        // Save token to local storage
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('userType', response.data.user.user_type);
        localStorage.setItem('userId', response.data.user.id);  
        
        // Set token in headers
        this.setAuthHeader(token); 
        
        // Verify token in headers (for debugging)
        console.log('Authorization Header:', apiClient.defaults.headers.common['Authorization']);
        
        if (response.data.user.user_type === 'admin') {
          this.$router.push('/Admin'); // Uncomment this if you have a route for admin
        } else {
          this.$router.push('/'); // Redirect to default route for other user types
        }
      } catch (error) {
        console.error(error);
        // Handle login error
      }
    },
    async getbook() {
      console.log('ok');
      try {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');
        this.setAuthHeader(token);
        
        const response = await apiClient.get('/books');
        console.log(response.data);
      } catch (err) {
        console.error('Error fetching books:', err.response?.data || err.message);
      }
    }
  }
};
</script>

<style scoped>
/* Add any relevant styles here */
</style>
