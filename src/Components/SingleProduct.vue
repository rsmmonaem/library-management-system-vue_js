<template>
  <Head />

  <div v-if="dataLoaded" class="container">
    <div class="col-lg-8 border p-3 main-section bg-white">
      <div class="row m-0">
        <div class="col-lg-8">
          <div class="right-side-pro-detail border p-3 m-0">
            <div class="row">
              <div class="col-lg-12">
                <span>{{ responseData.book.author.AuthorName }}</span>
                <p class="m-0 p-0">{{ responseData.book.Title }}</p>
              </div>
              <div class="col-lg-12 mt-3">
                <div class="row">
                  <div class="col-lg-6">
                    <a href="#" class="btn btn-danger w-100" style="height: 100%">Add To Cart</a>
                  </div>
                  <div class="col-lg-6">
                    <a href="#" class="btn btn-success w-100" style="height: 100%">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else="dataLoaded" class="container">
    <h1 style="text-align: center; justify-content: center">Loading....</h1>
  </div>

  <Footer />
</template>

<script>
import axios from 'axios'
import Head from './head_food/Head.vue'
import Footer from './head_food/Footer.vue'
export default {
  data() {
    return {
      responseData: null,
      dataLoaded: false,
      id: this.$route.params.id
      // id:null
    }
  },
  components: {
    Head,
    Footer
  },
  mounted() {
    // const segments = this.$route.path.split('/')
    // this.id = segments[3]
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/book/${this.id}`)
        this.responseData = response.data
        console.log(response.data)
        this.dataLoaded = true // Update dataLoaded to true after images are loaded
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  },
  directives: {
    lazy: {
      beforeMount(el, binding) {
        const options = {
          rootMargin: '50px 0px', // Adjust this value based on your needs
          threshold: 0.01
        }

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const lazyImage = entry.target
              lazyImage.src = binding.value
              observer.unobserve(lazyImage)
            }
          })
        }, options)

        observer.observe(el)
      }
    }
  }
}
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
