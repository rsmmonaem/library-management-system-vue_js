<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link :to="{ name: 'home' }" class="navbar-brand"> Home </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(category, index) in responseData" :key="index">
          <router-link :to="{ name: 'categories', params: { id: category.AuthorID } }" class="nav-link">
            {{ category.AuthorName }}
          </router-link>
        </li>
        <li v-if="userType === 'admin' || userType === 'member'" class="nav-item">
          <router-link  class="nav-link collapsed" :to="{ name: 'Logout' }">Logout</router-link>
        </li>
        <li>
          <router-link v-if="userType === 'admin'" class="nav-link collapsed" :to="{ name: 'Admin' }">Dashboard</router-link>
          <router-link v-else-if="userType === 'member'" class="nav-link collapsed" :to="{ name: 'Member' }">Dashboard</router-link>
        </li>
        <li v-if="!userType" class="nav-item">
          <router-link class="nav-link collapsed" :to="{ name: 'login' }">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      responseData: null,
      Allproducts: () => {
        console.log('hi')
      },
      userType: ''
    }
  },
  mounted() {
    this.fatchProducts();
    const userType = localStorage.getItem('userType');
        if (userType) {
            this.userType = userType;
        } else {
            console.log('User Type Not Found');
            // Optionally handle this case, like redirecting to a login page
        }
  },
  methods: {
    async fatchProducts() {
      try {
        const response = await axios.get('https://lms.upseba.com.bd/api/authors')
        this.responseData = response.data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    truncate(text, length) {
      if (text.length > length) {
        return text.substring(0, length) + '...'
      } else {
        return text
      }
    }
  }
}
</script>

<style></style>
