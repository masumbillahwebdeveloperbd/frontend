<template>
  <div class="container col-md-6">
    <h2 class="mt-5">User Dashboard</h2>
    <hr>
    <h3>Create a new topic</h3>
    <br>
    <form @submit.prevent="create">
      <div class="mb-3">
        <label class="form-label"><strong>Topic Title:</strong></label>
        <input type="text" v-model="form.title" class="form-control" placeholder="Enter Topc Title" autofocus>
        <div class="form-text text-danger" v-if="errors.title">{{errors.title[0]}}</div>
      </div>
      <div class="mb-3">
        <label  class="form-label"><strong>Topic Body:</strong></label>
        <textarea v-model="form.body" class="form-control" rows="5"></textarea>
        <div class="form-text text-danger" v-if="errors.password">{{errors.body[0]}}</div>
      </div>
      <button type="submit" class="btn btn-primary">create</button>
    </form>
  </div>
</template>
<script>
	export default{
		middleware:['auth'],
		data(){
			return{
				form:{
					title:'',
					body:''
				}
			}
		},
		methods:{
			async create({axios}){
				await this.$axios.$post('/topics',this.form)
				this.$router.push('/')
			}
		}
	}
</script>