<template>
	<div class="container col-md-6">
		<h2>Register</h2>
		<br>
		<form @submit.prevent="submit">
		  <div class="mb-3">
		    <label class="form-label">Full Name</label>
		    <input v-model.trim="form.name" type="text" class="form-control" placeholder="Write Your Name" autofocus>
		    <div class="form-text text-danger" v-if="errors.name">{{errors.name[0]}}</div>
		  </div>
		  <div class="mb-3">
		    <label class="form-label">Email address</label>
		    <input v-model.trim="form.email" type="email" class="form-control" placeholder="Write Your Email">
		    <div class="form-text text-danger" v-if="errors.email">{{errors.email[0]}}</div>
		  </div>
		  <div class="mb-3">
		    <label  class="form-label">Password</label>
		    <input v-model.trim="form.password" type="password" class="form-control" placeholder="Min 6 Character">
		    <div class="form-text text-danger" v-if="errors.password">{{errors.password[0]}}</div>
		  </div>
		  <button type="submit" class="btn btn-primary">Submit</button>
		</form>
		<br>
		<p>Already Have an account? <nuxt-link to="login">Login</nuxt-link></p>
	</div>
</template>
<script>
	export default{
		middleware:['guest'],
		data(){
			return{
				form:{
					name:'',
					email:'',
					password:''
				}
			}
		},
		methods:{
			async submit(){
				try {
					await this.$axios.$post('/register',this.form)
			        await this.$auth.loginWith('local',{ data:{
			        	email:this.form.email,
			        	password:this.form.password
			        }})
			  
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