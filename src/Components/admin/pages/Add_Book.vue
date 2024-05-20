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
              <form id="add_book_form" @submit.prevent="addBook">
                <div class="form-body mt-4">
                  <div class="row border border-1">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="authorName" class="form-label">Author Name</label>
                        <select v-model="selectedAuthor" @change="fetchAuthorBio" class="form-control">
                          <option v-for="author in authors" :key="author.AuthorID" :value="author.AuthorID">
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
                          value="Add Book"
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
import { addBook, ListAuthor } from "/apiService.js";

export default {
  components: {
    Header,
    Footer,
    LeftSidebar,
  },
  data() {
    return {
      authors: [],
      selectedAuthor: null,
      authorBio: "",
      publishedDate: "",
      title: "",
      availableCopies: "",
      isbn: "",
      totalCopies: "",
    };
  },
  created() {
    this.fetchAuthors();
  },
  methods: {
    fetchAuthors() {
      ListAuthor()
        .then((response) => {
          this.authors = response.data;
        })
        .catch((error) => {
          console.error("Error fetching authors:", error);
        });
    },
    fetchAuthorBio() {
      const selectedAuthor = this.authors.find((author) => author.AuthorID === this.selectedAuthor);
      if (selectedAuthor) {
        this.authorBio = selectedAuthor.AuthorBio;
      }
    },
    addBook() {
      const bookData = {
        AuthorID: this.selectedAuthor,
        PublishedDate: this.publishedDate,
        Title: this.title,
        AvailableCopies: this.availableCopies,
        ISBN: this.isbn,
        TotalCopies: this.totalCopies,
      };

      addBook(bookData)
        .then((response) => {
          if (response.data.success) {
            this.showMessage("success", "Book added successfully");
          } else {
            this.showMessage("error", response.data.message);
          }
        })
        .catch((error) => {
          console.error(error);
          this.showMessage("error", "An error occurred while adding the book");
        });
    },
    showMessage(type, message) {
      const alertClass = type === "success" ? "alert-success" : "alert-danger";
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
      this.$refs.messageContainer.innerHTML = "";
    },
  },
};
</script>

<style></style>
