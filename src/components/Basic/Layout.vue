<template>
    <div class="layout">
      <h2>Layout 布局</h2>
      <p class="jf-p">
        通过基础的 24 分栏，迅速简便地创建布局。
      </p>
      <div class="jf-href">
        参考文档地址:
        <a href="http://element-cn.eleme.io/#/zh-CN/component/layout" target="_blank">http://element-cn.eleme.io/#/zh-CN/component/layout</a>
      </div>
      <!--<h3>基础布局</h3>
      <p>使用单一分栏创建基础的栅格布局。</p>-->
      <el-card>
        <el-row >
          <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6" :offset="3"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
      </el-card>
    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped>

  h3{
    margin: 55px 0 20px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
