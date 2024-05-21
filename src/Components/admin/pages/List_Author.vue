<template>
  <div>
    <Header />
    <div id="layoutSidenav">
      <LeftSidebar />
      <div id="layoutSidenav_content">
        <div class="container-fluid px-4">
          <div ref="messageContainer"></div>
          <h1 class="mt-4">Tables</h1>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
            <li class="breadcrumb-item active">Tables</li>
          </ol>
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-table me-1"></i>
              DataTable Example
            </div>
            <div class="card-body">
              <table id="authorTable" class="table" style="text-align: center;">
                <thead>
                  <tr style="content">
                    <th>SL</th>
                    <th>Name</th>
                    <th>Bio</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(author, index) in authors" :key="author.AuthorID">
                    <td>{{ index + 1 }}</td>
                    <td>{{ author.AuthorName }}</td>
                    <td>{{ author.AuthorBio }}</td>
                    <td>
                        <router-link :to="{ name: 'Edit_Author', params: { id: author.AuthorID } }">
                          <span class="btn btn-success mr-2">Edit</span>
                        </router-link>
                        <button @click="deleteAuthor(author.AuthorID)" class="btn btn-danger mr-2">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import LeftSidebar from '../LeftSidebar.vue';
import axios from 'axios';

// Create an instance of axios with default headers set
const apiClient = axios.create({
  baseURL: 'https://lms.upseba.com.bd/api', // Your API base URL
});

export default {
  data() {
    return {
      authors: [],
      table: null 
    };
  },
  created() {
    this.fetchAuthors();
  },
  mounted() {
    $(document).ready(function () {
      $('#dataTable').DataTable();
    });
  },
  destroyed() {
    if (this.table) {
      this.table.destroy();
    }
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
    fetchAuthors() {
      const token = localStorage.getItem('token');
      this.setAuthHeader(token);
      apiClient.get('/authors')
        .then(response => {
          this.authors = response.data; 
        })
        .catch(error => {
          console.error('Error fetching authors:', error); 
        });
    },
    deleteAuthor(authorId) {
      const token = localStorage.getItem('token');
      this.setAuthHeader(token);
      apiClient.delete(`/delete_author/${authorId}`)
        .then(response => {
          if (response.data.success) {
            this.showMessage('success', 'Author deleted successfully');
            this.fetchAuthors();
          } else {
            this.showMessage('error', response.data.message);
          }
        })
        .catch(error => {
          console.error('Error deleting author:', error);
          this.showMessage('error', 'An error occurred while deleting the author');
        });
    },
    showMessage(type, message) {
      const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
      const alert = `
        <div class="alert ${alertClass} alert-dismissible fade show" role="alert">
          ${message}
        </div>
      `;
      this.$refs.messageContainer.innerHTML = alert;

      setTimeout(() => {
        this.hideMessage();
      }, 2000);
    },
    hideMessage() {
      this.$refs.messageContainer.innerHTML = ''; // Clear message container
    },
  },
  watch: {
    $route(to, from) {
      this.fetchAuthors();
    }
  },
  components: {
    Header,
    Footer,
    LeftSidebar
  }
}
</script>

<style></style>

<style></style>
