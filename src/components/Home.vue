<template>
	
	<div class="home content">
		{{msg}}--{{id}}
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:"首页",
				id:""
			}
		},
		mounted(){
			this.id = "菜单id:"+this.$route.params.id;
		}
	}
</script>

<style scoped="scoped">
	.home{
		border-radius: 5px;
	}
</style>
