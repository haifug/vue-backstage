<template>
    <div class="button">
      <h2>Button 按钮</h2>
      <p class="jf-p">
        常用的操作按钮。
      </p>
      <div class="jf-href">
        参考文档地址:
        <a href="http://element-cn.eleme.io/#/zh-CN/component/button" target="_blank">http://element-cn.eleme.io/#/zh-CN/component/button</a>
      </div>
      <el-card>
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger" disabled>危险按钮</el-button>
        </el-row>

        <el-row>
          <el-button plain>朴素按钮</el-button>
          <el-button type="primary" plain>主要按钮</el-button>
          <el-button type="success" plain>成功按钮</el-button>
          <el-button type="info" plain>信息按钮</el-button>
          <el-button type="warning" plain>警告按钮</el-button>
          <el-button type="danger" plain disabled>危险按钮</el-button>
        </el-row>

        <el-row>
          <el-button round>圆角按钮</el-button>
          <el-button type="primary" round>主要按钮</el-button>
          <el-button type="success" round>成功按钮</el-button>
          <el-button type="info" round>信息按钮</el-button>
          <el-button type="warning" round>警告按钮</el-button>
          <el-button type="danger" round disabled>危险按钮</el-button>
        </el-row>

        <el-row>
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle disabled></el-button>
        </el-row>
        <el-row>
          <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-button-group>
          <el-button-group>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete" disabled></el-button>
          </el-button-group>
        </el-row>
        <el-row>
          <el-button type="primary" :loading="true">加载中</el-button>
        </el-row>
      </el-card>
    </div>
</template>

<script>
    export default {
        name: "Color",
        data(){
          return{
            true:true
          }
        }
    }
</script>

<style scoped>
  .el-row{
    margin-bottom: 20px;
    background-color: #ffffff;
  }
  .el-row:last-child{
    margin-bottom: 0;
  }
</style>
