<template>
  <div>
    <Header />
    <div id="layoutSidenav">
      <LeftSidebar />
      <div id="layoutSidenav_content">
        <div class="page-content" style="padding: 1.5rem 1.5rem 0.7rem 1.5rem">
          <div class="card">
            <div ref="messageContainer"></div>
            <div class="card-body p-4">
              <h5 class="card-title">Add Book</h5>
              <hr />
              <form id="add_book_form" @submit.prevent="updateBook">
                <div class="form-body mt-4">
                  <div class="row border border-1">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="authorName" class="form-label">Author Name</label>
                        <select v-model="selectedAuthor" @change="fetchAuthorBio" class="form-control">
                          <option v-for="author in authors" :key="author.AuthorID" :value="author.AuthorID" :selected="author.AuthorID === selectedAuthor">
                            {{ author.AuthorName }}
                          </option>
                        </select>
                        
                      </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                          <label for="authorBio" class="form-label">Author Bio</label>
                          <input
                            v-model="authorBio"
                            type="text"
                            name="authorBio"
                            class="form-control"
                            id="authorBio"
                            placeholder="Author Bio"
                            :disabled="true"
                          />
                        </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="publishedDate" class="form-label">Published Date</label>
                        <input
                          v-model="publishedDate"
                          type="date"
                          name="publishedDate"
                          class="form-control"
                          id="publishedDate"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input
                          v-model="title"
                          type="text"
                          name="title"
                          class="form-control"
                          id="title"
                          placeholder="Title"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="availableCopies" class="form-label">Available Copies</label>
                        <input
                          v-model="availableCopies"
                          type="number"
                          name="availableCopies"
                          class="form-control"
                          id="availableCopies"
                          placeholder="Available Copies"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="isbn" class="form-label">ISBN</label>
                        <input
                          v-model="isbn"
                          type="text"
                          name="isbn"
                          class="form-control"
                          id="isbn"
                          placeholder="ISBN"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="totalCopies" class="form-label">Total Copies</label>
                        <input
                          v-model="totalCopies"
                          type="number"
                          name="totalCopies"
                          class="form-control"
                          id="totalCopies"
                          placeholder="Total Copies"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="mt-2 mb-3">
                        <input
                          type="submit"
                          value="Update Book"
                          class="btn btn-primary"
                        />
                      </div>
                    </div>
                  </div>
                  <!--end row-->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import LeftSidebar from "../LeftSidebar.vue";
import ContentLayout from "../ContentLayout.vue";
import axios from 'axios';

import { UpdateBook, ListAuthor } from "/apiService.js";

export default {
  components: {
    Header,
    Footer,
    LeftSidebar,
    ContentLayout,
  },
  data() {
    return {
      title: "",
      selectedAuthor: null,
      authorBio: "",
      publishedDate: "",
      availableCopies: "",
      isbn: "",
      totalCopies: "",
      authors: [] ,
      bookId: this.$route.params.id,
    };
  },
  created() {
    
    this.fetchBookData();
    this.fetchAuthors();
  },
  methods: {
    fetchBookData() {
  axios.patch(`http://127.0.0.1:8000/api/update_book/${this.bookId}`)
    .then(response => {
      const bookData = response.data.book;
      this.title = bookData.Title;
      this.selectedAuthor = bookData.AuthorID; // Update to AuthorID
      this.publishedDate = bookData.PublishedDate;
      this.availableCopies = bookData.AvailableCopies;
      this.isbn = bookData.ISBN;
      this.totalCopies = bookData.TotalCopies;
      this.authorBio = bookData.author.AuthorBio;
      this.authorName = bookData.author.AuthorName;
    })
    .catch(error => {
      console.error('Error fetching book:', error); 
    });
},
    fetchAuthors() {
      ListAuthor()
        .then((response) => {
          this.authors = response.data;
        })
        .catch((error) => {
          console.error("Error fetching authors:", error);
        });
    },
    updateBook() {
      const updatedBookData = {
        title: this.title,
        authorId: this.selectedAuthor,
        publishedDate: this.publishedDate,
        availableCopies: this.availableCopies,
        isbn: this.isbn,
        totalCopies: this.totalCopies,
      };

      axios.patch(`http://127.0.0.1:8000/api/update_book/${this.bookId}`, updatedBookData)
        .then(response => {
          if (response.data.success) {
            this.showMessage('success', 'Book updated successfully');
            console.log(updatedBookData);
          } else {
            this.showMessage('error', response.data.message);
          }
        })
        .catch(error => {
          console.error('Error updating book:', error);
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
      this.$refs.messageContainer.innerHTML = ''; // Clear the message container
    }
  },

};
</script>

<style></style>
