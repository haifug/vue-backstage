<template>
	<div class="aside">
		<el-menu
	      default-active="0"
	      class="el-menu-vertical-demo"
	      @open="handleOpen"
	      @close="handleClose"
	      @select="handleSelect"
	      background-color="#545c64"
	      text-color="#fff"
	      active-text-color="#ffd04b">
	      <el-menu-item index="1">
	        <i class="el-icon-menu"></i>
	        <router-link to="/home/1" slot="title" tag="div" class="router-a"><a>首页</a></router-link>
	      </el-menu-item>
	      <el-submenu index="2">
	        <template slot="title">
	          <i class="el-icon-setting"></i>
	          <span>权限配置</span>
	        </template>
	        <el-menu-item index="2-1">
	        	<router-link to="/user/2-1" tag="div" class="router-a"><a>用户管理</a></router-link>
	        </el-menu-item>
	        <el-menu-item index="2-2">
	        	<router-link to="/grouping/2-2" tag="div" class="router-a"><a>分组管理</a></router-link>
	        </el-menu-item>
	        <el-menu-item index="2-3">
	        	<router-link to="/role/2-3" tag="div" class="router-a"><a>角色管理</a></router-link>
	        </el-menu-item>
	      </el-submenu>
	      
	    </el-menu>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		    },
		    handleClose(key, keyPath) {
		        console.log(key, keyPath);
		    },
		    handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		    }
		}
	}
</script>

<style scoped="scoped">
	.aside{
		width: 100%;
		user-select:none;
	}
	.aside *{
		box-sizing: border-box;
		
	}
	.el-submenu .el-menu-item{
		min-width:100px
	}
	.el-menu-item .router-a{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	.el-menu-item .router-a a{
		display: inline-block;
		width: 100%;
		height: 100%;
		text-decoration: none;
		outline: none;
		color: #fff;
		padding: 0 40px;
	}
	.el-menu-item i+.router-a a{
		padding: 0 53px;
	}
	.router-link-active a:hover{
		color: #fff;
	}
	.router-link-active a:visited, .router-link-active a:link, .router-link-active a:active {
		color: inherit;
	}
		
</style>
