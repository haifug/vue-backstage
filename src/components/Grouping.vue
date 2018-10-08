<template>
	<div class="grouping content">
		{{msg}}--{{id}}
	</div>
</template>

<script>
  import store from  "../vuex/store.js";
	export default{
		data(){
			return{
				msg:"分组管理",
				id:''
			}
		},
    store,
		mounted(){
			this.id = this.$store.state.menuId;
			console.log(this.$route.params);
		}
	}
</script>

<style scoped="scoped">
	.grouping{
		border-radius: 5px;
	}
</style>
