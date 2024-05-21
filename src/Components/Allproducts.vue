<template>
  <div v-if="dataLoaded" class="container mt-5">
    <div class="row">
      <div class="col-md-3 col-sm-6 mb-4" v-for="(product, index) in responseData" :key="index">
        <router-link id="link" :to="{ name: 'SingleProduct', params: { id: product.BookID } }">
          <div class="card_id card">
            <div class="image-container">
              <div class="first">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="discount">-25%</span>
                  <span class="wishlist"><i class="fas fa-heart"></i></span>
                </div>
              </div>
              <img style="height: 200px" src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1350" class="img-thumbnail" />
              <!-- <img style="height: 200px" v-bind:src="product.image" class="img-thumbnail" /> -->

            </div>

            <div class="product-detail-container p-2">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="dress-name">
                  {{ truncate(product.Title, 25) }}
                </h5>
                <div class="d-flex flex-column mb-2">
                  <!-- <span class="new-price">${{ product.price }}</span> -->
                </div>
              </div>



              <div class="d-flex justify-content-between align-items-center pt-1">
                <div>
                  <i class="fa fa-star-o rating-star"></i>
                  <span class="rating-number">4.5</span>
                </div>
                <span class="buy">BUY +</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <div v-else="dataLoaded" class="container">
    <h1 style="text-align: center; justify-content: center">Loading....</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      responseData: null,
      dataLoaded: false
    }
  },
  mounted() {
    this.fatchProducts()
  },
  methods: {
    async fatchProducts() {
      try {
        const response = await axios.get('https://lms.upseba.com.bd/api/books')
        this.responseData = response.data
        this.dataLoaded = true
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

<style>
.card_id {
  transition: background-color 2s ease-out 100ms;
}
.card_id:hover {
  background-color: rgb(176, 208, 224);
}
body {
  background-color: #eee;
}

.container_id {
  width: 900px;
}

.card_id {
  background-color: #fff;
  border: none;
  border-radius: 10px;
  width: 190px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.image-container {
  position: relative;
}

.thumbnail-image {
  border-radius: 10px !important;
}

.discount {
  background-color: red;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 4px;
  padding-right: 4px;
  font-size: 10px;
  border-radius: 6px;
  color: #fff;
}

.wishlist {
  height: 25px;
  width: 25px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.first {
  position: absolute;
  width: 100%;
  padding: 9px;
}

.dress-name {
  font-size: 13px;
  font-weight: bold;
  width: 75%;
}

.new-price {
  font-size: 13px;
  font-weight: bold;
  color: red;
}
.old-price {
  font-size: 8px;
  font-weight: bold;
  color: grey;
}

#btn {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  padding: 3px;
}

.creme {
  background-color: #fff;
  border: 2px solid grey;
}
.creme:hover {
  border: 3px solid grey;
}

.creme:focus {
  background-color: grey;
}

.red {
  background-color: #fff;
  border: 2px solid red;
}

.red:hover {
  border: 3px solid red;
}
.red:focus {
  background-color: red;
}

.blue {
  background-color: #fff;
  border: 2px solid #40c4ff;
}

.blue:hover {
  border: 3px solid #40c4ff;
}
.blue:focus {
  background-color: #40c4ff;
}
.darkblue {
  background-color: #fff;
  border: 2px solid #01579b;
}
.darkblue:hover {
  border: 3px solid #01579b;
}
.darkblue:focus {
  background-color: #01579b;
}
.yellow {
  background-color: #fff;
  border: 2px solid #ffca28;
}
.yellow:hover {
  border-radius: 3px solid #ffca28;
}
.yellow:focus {
  background-color: #ffca28;
}

.item-size {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid grey;
  color: grey;
  font-size: 10px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
}

.rating-star {
  font-size: 10px !important;
}
.rating-number {
  font-size: 10px;
  color: grey;
}
.buy {
  font-size: 12px;
  color: purple;
  font-weight: 500;
}

.voutchers {
  background-color: #fff;
  border: none;
  border-radius: 10px;
  width: 190px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
}
.voutcher-divider {
  display: flex;
}
.voutcher-left {
  width: 60%;
}
.voutcher-name {
  color: grey;
  font-size: 9px;
  font-weight: 500;
}
.voutcher-code {
  color: red;
  font-size: 11px;
  font-weight: bold;
}
.voutcher-right {
  width: 40%;
  background-color: purple;
  color: #fff;
}

.discount-percent {
  font-size: 12px;
  font-weight: bold;
  position: relative;
  top: 5px;
}
.off {
  font-size: 14px;
  position: relative;
  bottom: 5px;
}
</style>
