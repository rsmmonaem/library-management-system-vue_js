<template>
  <div>
    <Header />
    <div id="layoutSidenav">
      <LeftSidebar />
      <div id="layoutSidenav_content">
        <div class="container-fluid px-4">
          <div ref="messageContainer"></div>
          <h1 class="mt-4">Borrowed Books</h1>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
            <li class="breadcrumb-item active">Borrowed Books</li>
          </ol>
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-table me-1"></i>
              Borrowed Books Table
            </div>
            <div class="card-body">
              <table id="borrowedBooksTable" class="table" style="text-align: center;">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Book Title</th>
                    <th>Borrow Date</th>
                    <th>Return Date</th>
                    <th>Status</th>
                    <th>Borrower Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(borrowedBook, index) in borrowedBooks" :key="borrowedBook.BorrowID">
                    <td>{{ index + 1 }}</td>
                    <td>{{ borrowedBook.book.Title }}</td>
                    <td>{{ borrowedBook.BorrowDate }}</td>
                    <td>{{ borrowedBook.ReturnDate }}</td>
                    <td>{{ borrowedBook.Status }}</td>
                    <td>{{ borrowedBook.member.FirstName }} {{ borrowedBook.member.LastName }}</td>
                    <td>{{ borrowedBook.member.Email }}</td>
                    <td>{{ borrowedBook.member.PhoneNumber }}</td>
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
      borrowedBooks: [],
      table: null 
    };
  },
  created() {
    this.fetchBorrowedBooks();
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
    fetchBorrowedBooks() {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  if (!token || !userId) {
    console.error('Token or userId not found in localStorage');
    return;
  }
  this.setAuthHeader(token);
  apiClient.get(`/borrowed-books/${userId}`)
    .then(response => {
      this.borrowedBooks = response.data; 
    })
    .catch(error => {
      console.error('Error fetching borrowed books:', error); 
    });
},

  },
  components: {
    Header,
    Footer,
    LeftSidebar
  }
}
</script>

<style></style>
