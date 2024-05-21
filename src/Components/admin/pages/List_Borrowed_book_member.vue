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
                    <th>Borrower Name</th>
                    <!-- <th>Email</th>
                    <th>Phone Number</th> -->
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(borrowedBook, index) in borrowedBooks" :key="borrowedBook.BorrowID">
                    <td>{{ index + 1 }}</td>
                    <td>{{ borrowedBook.book.Title }}</td>
                    <td>{{ borrowedBook.BorrowDate }}</td>
                    <td>{{ borrowedBook.ReturnDate }}</td>
                    <td>{{ borrowedBook.member.FirstName }} {{ borrowedBook.member.LastName }}</td>
                    <!-- <td>{{ borrowedBook.member.Email }}</td>
                    <td>{{ borrowedBook.member.PhoneNumber }}</td> -->
                    <td>
                      <button v-if="borrowedBook.Status === 'Borrowed'" @click="returnBorrowedBook(borrowedBook.BorrowID, borrowedBook.member.MemberID)" class="btn btn-danger mr-2">Return</button>

                      <button v-if="borrowedBook.Status === 'Returned'" class="btn btn-primary mr-2 mb-2">Returned</button>

                      <button @click="deleteBorrowedBook(borrowedBook.BorrowID)" class="btn btn-danger mr-2 mt-2">Delete</button>
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
      this.setAuthHeader(token);
      apiClient.get('/borrowed-books-list')
        .then(response => {
          this.borrowedBooks = response.data; 
        })
        .catch(error => {
          console.error('Error fetching borrowed books:', error); 
        });
    },
    deleteBorrowedBook(borrowID) {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found in localStorage');
        return;
      }
      this.setAuthHeader(token);
      
      apiClient.delete(`/delete-borrow-book/${borrowID}`)
        .then(response => {
          // Handle success response
          console.log('Borrowed book deleted successfully:', response.data);
          // Display success message
          this.showMessage('success', 'Borrowed book deleted successfully');
          // Fetch updated list of borrowed books
          this.fetchBorrowedBooks();
        })
        .catch(error => {
          // Handle error response
          console.error('Error deleting borrowed book:', error);
          // Display error message
          this.showMessage('error', 'An error occurred while deleting the borrowed book');
        });
    },
    returnBorrowedBook(borrowID, memberID) {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found in localStorage');
        return;
      }
      this.setAuthHeader(token);
      
      apiClient.put(`/borrowed-books/${borrowID}/return/${memberID}`)
        .then(response => {
          // Handle success response
          console.log('Book returned successfully:', response.data);
          // Display success message
          this.showMessage('success', 'Book returned successfully');
          // Fetch updated list of borrowed books
          this.fetchBorrowedBooks();
        })
        .catch(error => {
          // Handle error response
          console.error('Error returning book:', error);
          // Display error message
          this.showMessage('error', 'An error occurred while returning the book');
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
  components: {
    Header,
    Footer,
    LeftSidebar
  }
}
</script>


<style></style>
