<template>
	<div class="grouping content">
		{{msg}}--{{id}}
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:"分组管理",
				id:''
			}
		},
		mounted(){
			this.id = "菜单id:"+this.$route.params.id;
			console.log(this.$route.params);
		}
	}
</script>

<style scoped="scoped">
	.grouping{
		border-radius: 5px;
	}
</style>
