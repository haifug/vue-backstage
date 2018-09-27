<template>


		<div class="header">

      <div class="header-logo">
        logo
      </div>

			<el-menu
			  :default-active="activeIndex2"
			  class="header-uav"
			  mode="horizontal"
			  @select="handleSelect"
			  background-color="#1A3654"
			  text-color="#fff"
			  active-text-color="#ffd04b">
			  <el-menu-item index="1">消息中心</el-menu-item>
			  <el-submenu index="2">
			    <template slot="title"><i class="el-icon-service"></i>admin</template>
			    <el-menu-item index="2-1" @click="signOut">退出登录</el-menu-item>
			  </el-submenu>
			</el-menu>
		</div>

</template>

<script>
  import store from  '../vuex/store';
	export default{
		name:"Header",
    store,
		data(){
			return{
				activeIndex: '1',
				activeIndex2: '0'
			}
		},
		methods:{
			handleSelect(key, keyPath) {
		        console.log(key, keyPath);
      },
      signOut(){
        let that = this;
        this.$confirm('确定退出?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            //center:true
          }).then(() => {

            this.$message({
              type: 'success',
              message: '退出成功!'
            });

            let userData = JSON.parse(that.$store.state.userData);
            let rememberPass = userData.rememberPass;
            if (rememberPass){
              that.$store.state.login = false;
              userData.isLogin = false;
              that.$store.commit("setLogin",{
                name:"_l",
                value:JSON.stringify(userData),
                time:1
              });
            }
            else
            {
              that.$store.state.login = false;
              that.$store.commit("setLogin",{
                name:"_l",
                value:false,
                time:-1
              });
              that.$store.state.userData = null;
            }
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消退出'
            });
          });
      }
		}
	}
</script>

<style scoped="scoped">
	.header{
		width: 100%;
		height: 100%;
		position: relative;
		top: 0;
		left: 0;
	}
	.header .header-logo{
		width: 200px;
		height: 100%;
		line-height: 60px;
	}
	.header .header-uav{
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		line-height: 60px;
	}
</style>
