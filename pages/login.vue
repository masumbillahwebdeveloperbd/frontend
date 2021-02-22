<template>
  <div class="container col-md-6">
    <h2 class="mt-5">Login</h2>
    <br>
    <form @submit.prevent="userLogin">
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" v-model.trim="login.email" class="form-control" placeholder="Write Your Email" autofocus>
        <div class="form-text text-danger" v-if="errors.email">{{errors.email[0]}}</div>
      </div>
      <div class="mb-3">
        <label  class="form-label">Password</label>
        <input type="password" v-model.trim="login.password" class="form-control" placeholder="Min 6 Character">
        <div class="form-text text-danger" v-if="errors.password">{{errors.password[0]}}</div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <br>
    <p>Don't Have an account? <nuxt-link to="register">Register</nuxt-link></p>
  </div>
</template>

<script>
export default {
  middleware:['guest'],
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin(){
      try{
        await this.$auth.loginWith('local', { data: this.login })
        this.$router.push({
          path: this.$route.query.redirect || "/dashboard"
        })
      }
   catch (err){
            console.log(err)
            }
      }
  }
}
</script>