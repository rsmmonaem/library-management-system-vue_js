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
              <h5 class="card-title">Add Author</h5>
              <hr />
              <form id="add_author_form" @submit.prevent="addAuthor">
                <div class="form-body mt-4">
                  <div class="row border border-1">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="" class="form-label">Name</label>
                        <input
                          v-model="authorName"
                          type="text"
                          name="AuthorName"
                          class="form-control"
                          id="name"
                          placeholder="Example: Durjay Ghosh"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="" class="form-label">Author Bio</label>
                        <input
                          v-model="authorBio"
                          type="text"
                          name="AuthorBio"
                          class="form-control"
                          id="bio"
                          placeholder="Example: British author best known for the Harry Potter series"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mt-2 mb-3">
                        <input
                          type="submit"
                          value="Submit"
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
import { addAuthor } from "/apiService.js";

export default {
  components: {
    Header,
    Footer,
    LeftSidebar,
    ContentLayout,
  },
  data() {
    return {
      authorName: '',
      authorBio: ''
    };
  },
  methods: {
  addAuthor() {
    const authorData = {
      AuthorName: this.authorName,
      AuthorBio: this.authorBio
    };

    addAuthor(authorData)
      .then(response => {
        if (response.data.success) {
          // Display success message
          this.showMessage('success', 'Author created successfully');
        } else {
          // Display error message
          this.showMessage('error', response.data.message);
        }
      })
      .catch(error => {
        // Handle error, maybe show a generic error message
        console.error(error);
        this.showMessage('error', 'An error occurred while creating the author');
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

}
};
</script>

<style></style>
