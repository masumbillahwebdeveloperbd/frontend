/*export const state = () => ({
  counter: 0
})*/

/*export const mutations = {
  increment(state) {
    state.counter++
  }
}*/
export const getters={
	authenticated(state){
		return state.auth.loggedIn;
	},
	user(state){
		return state.auth.user
	}


};