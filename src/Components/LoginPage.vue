<template>
    <div>
      <form @submit.prevent="login">
        <input type="text" value="admin@example.com" v-model="email" placeholder="Email">
        <input type="password" value="password" v-model="password" placeholder="Password">
        <input type="submit" value="Submit" class="btn btn-primary">
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  // Create an instance of axios with default headers set
  const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // Your API base URL
    headers: {
      'Content-Type': 'application/json',
    }
  });
  
  export default {
    data() {
      return {
        email: 'admin@example.com',
        password: 'password'
      };
    },
    methods: {
      async login() {
        try {
          const response = await apiClient.post('/login', {
            email: this.email,
            password: this.password
          });
          
          // Save token to local storage
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userType', response.data.user.user_type);
          localStorage.setItem('userId', response.data.user.id);          
          if (response.data.user.user_type === 'admin') {
            this.$router.push('/Admin/List_Book'); // Redirect to admin route
          } else {
            this.$router.push('/'); // Redirect to default route for other user types
          }
        } catch (error) {
          console.error(error);
          // Handle login error
        }
      }
    },
    created() {
      // Set Authorization header for subsequent requests
      const token = localStorage.getItem('token');
      if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    }
  }
  </script>
  