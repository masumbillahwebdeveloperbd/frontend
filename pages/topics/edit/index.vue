<template>
	<div class="container">
		<h2>Update Topic Title</h2>
		<form @submit.prevent="update">
			<div class="form-group mt-5">
				<input type="text" class="form-control" v-model="topic.title">	
				</input>
				<small v-if="errors.title" class="form-text text-danger">{{errors.title[0]}}</small>
			</div>
			<button class="btn btn-outline-success">Update</button>
		</form>
		<p class="mt-5 btn btn-outline-warning">
				<nuxt-link to="/topics">Back to Topics</nuxt-link>	
			</p>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				topic:{
						title:''
					  }
				  }
				},
		async asyncData({$axios,params}){
			const {data} = await $axios.$get(`/topics/${params.id}`)
			return {topic: data}
		},
		methods:{
			async update(){
				await this.$axios.patch(`/topics/${this.$route.params.id}`,{
					title:this.topic.title
				})
				this.$router.push('/topics')
			}
		}
		
	}
</script>>