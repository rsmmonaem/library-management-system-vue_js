<template>
  <Head />

  <div v-if="dataLoaded" class="container">
    <div class="col-lg-8 border p-3 main-section bg-white">
      <div class="row m-0">
        <div class="col-lg-8">
          <div class="right-side-pro-detail border p-3 m-0">
            <div class="row">
              <div class="col-lg-12">
                <span>Author: {{ responseData.book.author.AuthorName }}</span>
                <p class="m-0 p-0">Book Name: {{ responseData.book.Title }}</p>
              </div>
              <div class="col-lg-12 mt-3">
                <div class="row">
                  <div class="col-lg-6">
                    <form @submit.prevent="borrowBook">
                      <div class="form-group">
                        <label for="returnDate">Return Date</label>
                        <input type="date" id="returnDate" v-model="returnDate" class="form-control" required>
                      </div>
                      <button type="submit" class="btn btn-danger w-100">Borrow Book</button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 mt-3">
                <div ref="messageContainer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container">
    <h1 class="text-center">Loading....</h1>
  </div>

  <Footer />
</template>

<script>
import axios from 'axios';
import Head from './head_food/Head.vue';
import Footer from './head_food/Footer.vue';
import { borrowBook } from "/apiService.js";

// Create an instance of axios with default headers set
const apiClient = axios.create({
  baseURL: 'https://lms.upseba.com.bd/api', // Your API base URL
});

export default {
  data() {
    return {
      responseData: null,
      dataLoaded: false,
      id: this.$route.params.id,
      userId: localStorage.getItem('userId'),
      returnDate: '',
      borrowDate: new Date().toISOString().substr(0, 10) // Setting borrowDate to current date in YYYY-MM-DD format
    };
  },
  components: {
    Head,
    Footer
  },
  mounted() {
    this.fetchProducts();
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
    async fetchProducts() {
      try {
        const response = await apiClient.get(`/book/${this.id}`);
        this.responseData = response.data;
        this.dataLoaded = true;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async borrowBook() {
      if (!this.userId) {
        console.error('User ID not found in localStorage');
        return;
      }

      const borrowData = {
        BookID: this.id,
        MemberID: this.userId,
        ReturnDate: this.returnDate,
        BorrowDate: this.borrowDate // Adding BorrowDate to the data being sent
      };

      try {
        const token = localStorage.getItem('token');
        this.setAuthHeader(token);

        const response = await borrowBook(borrowData);
        if (response.data.success) {
          this.showMessage('success', 'Book borrowed successfully');
        } else {
          this.showMessage('error', response.data.message);
        }
      } catch (error) {
        console.error('Error borrowing book:', error);
        this.showMessage('error', error.response.data.message);
      }
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
      this.$refs.messageContainer.innerHTML = '';
    }
  }
};
</script>

<style>
body {
  font-family: 'Roboto Condensed', sans-serif;
  background-color: #f5f5f5;
}

.hedding {
  font-size: 20px;
  color: #ab8181;
}

.main-section {
  left: 50%;
  right: 50%;
  transform: translate(-50%, 5%);
}

.left-side-product-box img {
  width: 100%;
}

.left-side-product-box .sub-img img {
  margin-top: 5px;
  width: 83px;
  height: 100px;
}

.right-side-pro-detail span {
  font-size: 15px;
}

.right-side-pro-detail p {
  font-size: 25px;
  color: #a1a1a1;
}

.right-side-pro-detail .price-pro {
  color: #e45641;
}

.right-side-pro-detail .tag-section {
  font-size: 18px;
  color: #5d4c46;
}

.pro-box-section .pro-box img {
  width: 100%;
  height: 200px;
}

@media (min-width: 360px) and (max-width: 640px) {
  .pro-box-section .pro-box img {
    height: auto;
  }
}
</style>
