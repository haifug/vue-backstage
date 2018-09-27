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
    background-color: #1A3654;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
  .el-main {
    color: #333;
  }
  body .el-container{
    width: 100%;
    height: 100%;
  }
</style>
