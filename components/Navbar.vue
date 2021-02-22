<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
  <div class="container-fluid">
  	<nuxt-link class="navbar-brand" to="/">MyPage</nuxt-link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
        <nuxt-link class="nav-link" to="/topics">Post</nuxt-link>
      </div>
      <div class="navbar-nav">
        <nuxt-link class="nav-link" to="/dashboard">Create</nuxt-link>
      </div>
      <div class="navbar-nav">
        <nuxt-link class="nav-link" to="/title">Title</nuxt-link>
      </div>
      <template v-if=!authenticated>
        <div class="navbar-nav ml-auto">
        <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
        <nuxt-link class="nav-link" to="/register">Register</nuxt-link>
      </div>
      </template>
      <template v-else>
        <div class="navbar-nav ml-auto">
        <a class="nav-link">{{user.name}}</a>
        <a @click.prevent="logout" class="nav-link" to="/login">Logout</a>
      </div>
      </template>
      

      
   
   
    </div>
  </div>
</nav>
</template>
<script>
//import {mapGetters} from 'vuex'
export default{

	name:"Navbar",
  methods:{
    logout(){
      this.$auth.logout()
    }
  }
/*  computed:{
    ...mapGetters({
      loggedIn:"authenticated"
    })
  }*/
}
</script>