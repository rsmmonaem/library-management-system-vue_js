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
      }
    }
  },
  mounted() {
    this.fatchProducts()
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
