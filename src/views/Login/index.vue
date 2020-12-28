<template>
  <div class="login">
    <div class="hospital-top">
    <img src="../../assets/icon/hospital.png" alt="" ></div>
    <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="0px" class="loginForm">
      <img src="../../assets/icon/backgroung.png" alt="" class="login-background">
      <div class="login-right">
      <h1 class="loginTitle">医疗安全信息管理系统</h1>
      <el-form-item prop="name">
        <el-input type="text" class="logininput" v-model="ruleForm.name" placeholder="请输入账号" autocomplete="off"  prefix-icon="el-icon-s-custom"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input type="password" class="logininput" v-model="ruleForm.pass" placeholder="请输入密码" autocomplete="off" prefix-icon="iconfont el-icon-hospital-passwordmima"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
       <!-- <el-input type="select" v-model="ruleForm.hospital" placeholder="请输入密码" autocomplete="off" prefix-icon="el-icon-office-building"></el-input> -->
       <el-select v-model="ruleForm.hospital" placeholder="请选择所属医院" prefix-icon="el-icon-office-building" class="selectoption">
      <el-option v-for="item in options" :key="item.id" :label="item.name"  :value="item.name"></el-option>
      </el-select>
      </el-form-item>
      <div class="loginRem">
        <el-checkbox label="记住密码" v-model="remember" class="loginRemcheck"></el-checkbox>
      </div>
      <!-- <div class="loginRem" style="font-size: 0.3rem; margin-top:-15px">
        注: 两个账号对应不同的路由权限 (账号/密码:admin/admin或editor/editor)  
     
      </div> -->
      <el-form-item>
        <el-button class="loginButton" type="primary" @click="submitForm('ruleForm')" :loading="logining">登录</el-button>
      </el-form-item>
      </div>
     
    </el-form>
  </div>
</template>

<script>
import service from '@/service/index'
import { mapGetters, mapActions } from 'vuex'
import { asyncRoutes } from '@/router/index'

export default {
  data() {
    return {
      options:[
        {
          id:1,
          name:'兰州大学第二医院'
        }
      ],
      logining: false,
      ruleForm: {
        name: 'admin',
        pass: 'admin',
        hospital:''
      },
      remember: true
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = Object.assign({}, this.ruleForm)
          this.logining = true;
          service.login(params).then(res => {
            let { code, msg = '', result = {} } = res['data'];
            if (code === 0) {
              sessionStorage.setItem('name', this.ruleForm.name)
              sessionStorage.setItem('pass', this.ruleForm.pass)
              this.$router.push('/Complaints')
              this.$store.dispatch('app/UpdateRememberPass', this.remember)
            } else {
              this.$message({
                message: msg,
                type: 'error',
                duration: 1000
              })
            }
            this.logining = false
          }).catch(err => {
            this.$message({
              message: err,
              type: 'error',
              duration: 1000
            })
            console.log(err)
          });
        } else {
          this.$message({
            message: 'error submit!!',
            type: 'error',
            duration: 1000
          })
          return false;
        }
      });
    },

    // 判断是否是移动端打开
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }

  },

  mounted() {
    if (this._isMobile()) {
      this.$store.dispatch('app/UpdateIsFold', true)  // 移动端打开则折叠侧边栏
    }
  }
}
</script>

<style scoped lang="less">
.login {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-weight: bold;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: #666ee8;
  // background-color: #ffffff;

  position: relative;
  height: 100%;
  // background-image: url('../../../public/img/background.jpeg');
  // background-size: 100% 100%;
  &Form {
    -webkit-border-radius: 20px;
    border-radius: 5px;
    -moz-border-radius: 20px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 50%;
    height: 70%;
    padding: 35px 50px 20px 50px;
    background-image: linear-gradient(to right, #ffffff, #ffffff);
    border: 1px solid #ffffff;
    box-shadow: 0 0 10px #474747; 
  }
  &Title {
    margin: 0 0 20px 0;
    text-align: center;
    font-size: 1.6rem;
  }
  &Button {
    width: 40%;
    background: #666ee8;
    border: none;
  }
  &Rem {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    margin-bottom: 20px;
    // border: 1px solid red
  }
  .login-background{
    width: 40%;
    margin-top:10%;
    }
 .login-right{
   width: 50%;
  //  text-align: right;
   float: right;
   margin-top: 30px;
 }
 .login-right h1{
   margin-bottom: 40px;
   color: #000;
 }
 .el-form-item__content{
   background-color: rgba(102, 110, 232, 0.0980392156862745);

 }
 .logininput{
   background-color: rgba(102, 110, 232, 0.0980392156862745);
    width: 90%;
 }
 .selectoption{
   width: 90%;
   background-color: rgba(102, 110, 232, 0.0980392156862745);
   color: rgba(102, 110, 232, 0.0980392156862745);
 }
 .hospital-top{
   position: absolute;
   top: 10px;
   left: 10px;
   width: 43px;
   height: 36.99px;
   padding-top: 5px;
   background: rgb(255, 255, 255);
   border-radius: 180px;
 }
 .loginRem .loginRemcheck{
   color: #666ee8;
 }
 .loginRem{
   margin-left:30px;
 }
}
</style>