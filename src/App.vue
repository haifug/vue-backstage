<template>
  <div id="app">
    <v-login v-if="!this.$store.state.login"></v-login>
    <v-index v-if="this.$store.state.login"></v-index>
  </div>
</template>

<script>
  import index from "./components/Index.vue";
  import login from "./components/Login.vue";
  import store from "./vuex/store.js";

export default {
	name: 'App',

  data(){
	  return{

    }
  },
  store,
	components:{
		"v-index":index,
    "v-login":login
	},
  mounted(){
    this.$store.commit("getLogin",{
      name:"_l"
    });
  }
}
</script>

<style>

	#app{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	body .el-container{
		width: 100%;
		height: 100%;
	}
</style>
