<template>
    <el-container>
      <el-header height="60px">
        <v-header></v-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <v-aside></v-aside>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
  import header from "./Header.vue";
  import aside from "./Aside.vue";


  export default {
    name: 'index',
    components:{
      "v-header":header,
      "v-aside":aside
    }
  }
</script>

<style lang="scss">
  .el-header{
    width: 100%;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    height: 100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;

  }
  .el-main .content{
    box-shadow: 0 0 1px #333333;
  }
  body .el-container{
    width: 100%;
    height: 100%;
  }
</style>
