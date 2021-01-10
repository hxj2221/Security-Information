<template>
  <div class="login">
    <div class="hospital-top">
      <img src="@/assets/icon/hospital.png" alt="" />
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="0px"
      class="loginForm"
    >
      <img src="@/assets/icon/backgroung.png" alt="" class="login-background" />
      <div class="login-right">
        <h1 class="loginTitle">医疗安全信息管理系统</h1>
        <el-form-item prop="name">
          <el-input
            type="text"
            class="logininput"
            v-model="ruleForm.account"
            placeholder="请输入账号"
            autocomplete="off"
            prefix-icon="el-icon-s-custom"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            class="logininput"
            v-model="ruleForm.password"
            placeholder="请输入密码"
            autocomplete="off"
            prefix-icon="iconfont el-icon-hospital-passwordmima"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <!-- <el-input type="select" v-model="ruleForm.hospital" placeholder="请输入密码" autocomplete="off" prefix-icon="el-icon-office-building"></el-input> -->
          <!-- <el-select
            v-model="ruleForm.hospital"
            placeholder="请选择所属医院"
            prefix-icon="el-icon-office-building"
            class="selectoption"
          >
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select> -->

          <img
            src="http://bt1.wlqqlp.com:8082/api/login/captcha"
             title="看不清？点击切换"
            @click="reloadcode()"
            style="height:40px"
            class="imgcode" />
           
          <el-input
            placeholder="请输入验证码"
            v-model="ruleForm.captcha"
            class="codeinput"
          ></el-input>
        </el-form-item>
        <div class="loginRem">
          <el-checkbox
            label="记住密码"
            v-model="remember"
            class="loginRemcheck"
          ></el-checkbox>
          <el-link :underline="false" type="primary" @click="forgetPass"
            >忘记密码</el-link
          >
        </div>
        <!-- <div class="loginRem" style="font-size: 0.3rem; margin-top:-15px">
        注: 两个账号对应不同的路由权限 (账号/密码:admin/admin或editor/editor)  
     
      </div> -->
        <el-form-item>
          <el-button
            class="loginButton"
            type="primary"
            @click="submitForm('ruleForm')"
            :loading="logining"
            >登录</el-button
          >
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import service from "@/service/index";
import { mapGetters, mapActions } from "vuex";
import { asyncRoutes } from "@/router/index";
import { Login } from "@/network/Login";

export default {
  inject: ["reload"],
  data() {
    return {
      src: "http://bt1.wlqqlp.com:8082/api/login/captcha",
      height: 0,
      options: [
        {
          id: 1,
          name: "兰州大学第二医院",
        },
      ],
      logining: false,
      ruleForm: {
        account: "",
        password: "",
        captcha: "",
      },
      remember: true,
    };
  },

  methods: {
    reloadcode() {
      var verifyimg = $(".imgcode").attr("src");
      $(".imgcode").attr("src", verifyimg.replace(/\?.*$/, "") + "?" + Math.random());
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = this.ruleForm;
          this.logining = true;
          service.login(params).then((res) => {
              if (res.code === 20010) {
                 localStorage.setItem('token', res.data.token)
                sessionStorage.setItem("account", this.ruleForm.account);
                sessionStorage.setItem("password", this.ruleForm.password);
                this.$router.push("/dashboard");
                   
              } else {
                 this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
                this.logining = false;
              }
            })
            .catch((err) => {
              this.logining = false;
            });
        } else {
          return false;
        }
      });
    },

    // 判断是否是移动端打开
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },

    forgetPass() {
      this.$emit("forgetPass");
    },
  },

  mounted() {
    if (this._isMobile()) {
      this.$store.dispatch("app/UpdateIsFold", true); // 移动端打开则折叠侧边栏
    }
  },
  created() {
    localStorage.clear()
    // this.height=document.body.clientHeight
    // var heights=document.getElementsByClassName('login')
    //  var div_height = window.screen.availHeight;
    // $(".login").height(div_height);
  },
};
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
  background-size: 100% 100%;
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
  .login-background {
    width: 40%;
    margin-top: 10%;
  }
  .login-right {
    width: 50%;
    //  text-align: right;
    float: right;
    margin-top: 30px;
  }
  .login-right h1 {
    margin-bottom: 40px;
    color: #000;
  }
  .el-form-item__content {
    background-color: rgba(102, 110, 232, 0.0980392156862745);
  }
  .logininput {
    background-color: rgba(102, 110, 232, 0.0980392156862745);
    width: 90%;
  }
  .selectoption {
    width: 90%;
    background-color: rgba(102, 110, 232, 0.0980392156862745);
    color: rgba(102, 110, 232, 0.0980392156862745);
  }
  .hospital-top {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 43px;
    height: 36.99px;
    padding-top: 5px;
    background: rgb(255, 255, 255);
    border-radius: 180px;
  }

  .loginRem {
    display: flex;
    justify-content: space-between;
    margin: 10px 30px 20px;
    margin-top: 80px;
  }
  .imgcode {
    position: absolute;
    left: 25px;
    // width: 120px;
  }
  .codeinput {
    position: absolute;
    right: 25px;
    width: 40%;
  }
  .clickcode{
    font-size:6px;
    position: absolute;
     left: 155px;
     color: #666ee8;
  }
}
</style>
