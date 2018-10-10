<template>
    <div class="container">
      <h2>Container 布局容器</h2>
      <p class="jf-p">
        用于布局的容器组件，方便快速搭建页面的基本结构
      </p>
      <div class="jf-href">
        参考文档地址:
        <a href="http://element-cn.eleme.io/#/zh-CN/component/container" target="_blank">http://element-cn.eleme.io/#/zh-CN/component/container</a>
      </div>
      <el-container class="container-el">
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>

      <el-container class="container-el">
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>

      <el-container class="container-el">
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>

      <el-container class="container-el">
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>

      <el-container class="container-el">
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>

      <el-container class="container-el">
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>

      <el-container class="container-el">
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "Container"
    }
</script>

<style scoped>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside,
  .el-container:nth-child(7) .el-aside {
    line-height: 260px;
  }

  /*.container-el:nth-child(7) .el-aside {
    line-height: 320px;
  }*/

  .container-el{
    margin-bottom: 40px;
  }

</style>
