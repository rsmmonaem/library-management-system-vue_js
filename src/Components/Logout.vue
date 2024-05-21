<template>
    <div>Logging out...</div>
  </template>
  
  <script>
  export default {
    created() {
      localStorage.removeItem('token');
      localStorage.removeItem('userType');
      localStorage.removeItem('userId');
      
        this.$router.push('/login');
    }
  };
  </script>
  
  <style scoped>
  </style>
  