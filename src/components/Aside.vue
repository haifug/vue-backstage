<template>
		<el-menu
	      default-active="1"
        :router="true"
	      class="el-menu-vertical-demo"
	      @open="handleOpen"
	      @close="handleClose"
	      @select="handleSelect">
	      <el-menu-item index="1" route="/home">
	        <i class="el-icon-menu"></i>
	        <span>首页</span>
	      </el-menu-item>
	      <el-submenu index="2">
	        <template slot="title">
	          <i class="el-icon-setting"></i>
	          <span>权限配置</span>
	        </template>
	        <el-menu-item index="2-1" route="/user/2-1">
            用户管理
	        </el-menu-item>
	        <el-menu-item index="2-2" route="/grouping/2-2">
            分组管理
	        </el-menu-item>
	        <el-menu-item index="2-3" route="/role/2-3">
            角色管理
	        </el-menu-item>
	      </el-submenu>
	      
    </el-menu>

</template>

<script>
	export default{
		data(){
			return{
				true:true
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
  .el-menu-vertical-demo *,.el-menu-vertical-demo{
		box-sizing: border-box;
	}
  .el-menu-vertical-demo{
    height: 100%;
    user-select:none;
  }
		
</style>
