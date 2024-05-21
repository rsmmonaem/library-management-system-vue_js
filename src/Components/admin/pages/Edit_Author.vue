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
              <h5 class="card-title">Update Author</h5>
              <hr />
              <form id="add_author_form" @submit.prevent="UpdateAuthor">
                <div class="form-body mt-4">
                  <div class="row border border-1">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
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
                        <label for="bio" class="form-label">Author Bio</label>
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
                          value="Update"
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
import axios from 'axios'; // Import Axios for HTTP requests


export default {
  components: {
    Header,
    Footer,
    LeftSidebar,
    ContentLayout,
  },
  data() {
    return {
      authorName: "",
      authorBio: "",
      slug: this.$route.params.id,
    };
  },
  mounted() {
    this.fetchAuthorData();
  },
  methods: {
    fetchAuthorData() {
      axios.patch(`https://lms.upseba.com.bd/api/update_author/${this.slug}`)
        .then(response => {
          this.authorName = response.data.author.AuthorName;
          this.authorBio = response.data.author.AuthorBio;
        })
        .catch(error => {
          console.error('Error fetching author:', error); 
        });
    },
    UpdateAuthor() {
    const authorData = {
      AuthorName: this.authorName,
      AuthorBio: this.authorBio,
    };

    axios.patch(`https://lms.upseba.com.bd/api/update_author/${this.slug}`, authorData)
      .then(response => {
        if (response.data.success) {
          this.showMessage('success', 'Author created successfully');
        } else {
          this.showMessage('error', response.data.message);
        }
      })
      .catch(error => {
        // Handle error
        console.error('Error updating author:', error);
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
  },
};
</script>

<style></style>


<style></style>
