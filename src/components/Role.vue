<template>
	<div class="role content">
		{{msg}}--{{id}}
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:"角色管理",
				id:''
			}
		},
		mounted(){
      this.id = this.$store.state.menuId;
		}
	}
</script>

<style scoped="scoped">
	.role{
		border-radius: 5px;
	}
</style>
