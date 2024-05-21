<template>
  <div>
    <div class="container" style="margin-top: 200px;">
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header">
            <h3>Sign In</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input type="text" class="form-control" v-model="email" placeholder="Email">

              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                </div>
                <input type="password" class="form-control" v-model="password" placeholder="Password">
              </div>
              <div class="form-group">
                <input type="submit" value="Submit" class="btn btn-primary">
              </div>
              <div class="form-group" style="text-align: center;background: green; color: white;">
                Email: 'user@example.com'
                <br/>
                Password: 'password'
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- <input type="button" value="dd" class="btn btn-primary" @click="getbook"> -->
  </div>
</template>

<script>
import axios from 'axios';

// Create an instance of axios with default headers set
const apiClient = axios.create({
  baseURL: 'https://lms.upseba.com.bd/api', // Your API base URL
});

export default {
  data() {
    return {
      email: 'admin@example.com',
      password: 'password'
    };
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
    async login() {
      try {
        const response = await apiClient.post('/login', {
          email: this.email,
          password: this.password
        });

        // Save token to local storage
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('userType', response.data.user.user_type);
        localStorage.setItem('userId', response.data.user.id);

        // Set token in headers
        this.setAuthHeader(token);

        // Verify token in headers (for debugging)
        console.log('Authorization Header:', apiClient.defaults.headers.common['Authorization']);

        if (response.data.user.user_type === 'admin') {
          this.$router.push('/Admin'); // Uncomment this if you have a route for admin
        } else {
          this.$router.push('/'); // Redirect to default route for other user types
        }
      } catch (error) {
        console.error(error);
        // Handle login error
      }
    },
    async getbook() {
      console.log('ok');
      try {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');
        this.setAuthHeader(token);

        const response = await apiClient.get('/books');
        console.log(response.data);
      } catch (err) {
        console.error('Error fetching books:', err.response?.data || err.message);
      }
    }
  }
};
</script>

<style scoped>
/* Made with love by Mutiullah Samim*/

@import url('https://fonts.googleapis.com/css?family=Numans');

.card {
  background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  font-family: 'Numans', sans-serif;

}

.container {
  height: 100%;
  align-content: center;
}

.card {
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.social_icon span {
  font-size: 60px;
  margin-left: 10px;
  color: #FFC312;
}

.social_icon span:hover {
  color: white;
  cursor: pointer;
}

.card-header h3 {
  color: white;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend span {
  width: 50px;
  background-color: #FFC312;
  color: black;
  border: 0 !important;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;

}

.remember {
  color: white;
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn {
  color: black;
  background-color: #FFC312;
  width: 100px;
}

.login_btn:hover {
  color: black;
  background-color: white;
}

.links {
  color: white;
}

.links a {
  margin-left: 4px;
}
</style>
