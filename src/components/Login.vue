<template>
  <el-form :model="form" status-icon ref="form" :rules="rules" label-width="70px" class="login">
    <el-form-item label="用户名" prop="name">
      <el-input type="text" v-model="form.name" auto-complete="off" placeholder="admin"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="form.pass" auto-complete="off" placeholder="123456"></el-input>
    </el-form-item>
    <el-form-item label="记住密码" prop="rememberPass">
      <el-switch v-model="form.rememberPass"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">提交</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import store from  "../vuex/store.js";

    export default {
      name: "Login",
      store,
      data() {
        let checkName = (rule,value,callback) =>{
          if (!value){
            return callback(new Error("用户名不能为空"));
          }
          else if(value !== "admin")
          {
            return callback(new Error("用户名不正确"));
          }else {
            callback()
          }


          /*setTimeout(() => {
            if (!value) {
              callback(new Error('用户名不能为空'));
            }else {
              callback()
            }
          },1000);*/
        };
        let checkPass = (rule,value,callback) =>{
          if (!value){
            return callback(new Error("密码不能为空"))
          }
          else if(value !== "123456")
          {
            return callback(new Error("密码不正确"));
          }else {
            callback()
          }
          /*setTimeout(() => {
            if (!value) {
              callback(new Error('密码不能为空'));
            }else {
              callback()
            }
          },1000);*/
        };
        return {
          form: {
            name: '',
            pass: '',
            rememberPass:false
          },
          rules:{
            name:[
              { validator : checkName, trigger: 'blur' }
            ],
            pass:[
              { validator: checkPass, trigger: 'blur' }
            ]
          },
          userData:this.$store.state.userData
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {

              let rememberPass = this.form.rememberPass;
              const userData = {};
              //判断是否记住密码
              if (rememberPass){
                userData.isLogin = true;
                userData.userName = "admin";
                userData.password = "123456";
                userData.rememberPass = true;
              }
              else
              {
                userData.isLogin = true;
                userData.rememberPass = false;
              }
              //设置用户登录信息cookie
              this.$store.commit("setLogin",{
                name:"_l",
                value:JSON.stringify(userData),
                time:1
              });
              //改变登录状态
              this.$store.commit("isLogin",{
                login:true,
                userData:JSON.stringify(userData)
              });
              //默认跳转首页
              this.$router.push({
                name:'Home',
                params:{
                  id:1
                }
              })


            } else {
              this.$store.commit("isLogin",{
                login:false,
                userData:null
              });
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      },
      mounted(){
        this.$store.commit("getLogin",{
          name:"_l"
        });
        if (this.$store.state.userData){
          let userData = JSON.parse(this.$store.state.userData);
          let rememberPass = userData.rememberPass;
          //判断是否记住密码
          if (rememberPass){
            this.form.name = userData.userName;
            this.form.pass = userData.password;
            this.form.rememberPass = userData.rememberPass;
          }
        }
      }
    }
</script>

<style scoped>
  .login{
    width: 270px;
    height: 240px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
    border-radius: 3px;
    box-shadow: 0px 0px 8px 2px #8c939d;
    padding: 30px 20px 20px;
  }
</style>
