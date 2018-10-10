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
		/*height: 100%;*/
	}
  h1,h2,h3,h4,h5{
    font-weight: 400;
    color: #1f2f3d;
  }
  .jf-href,.jf-href a{
    margin: 10px 0;
    font-size: 14px;
    color: #5e6d82;
  }
  .jf-p{
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
</style>
