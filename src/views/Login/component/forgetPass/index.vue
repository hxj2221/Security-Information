<template>
  <div class="Forget_all">
    <div class="Forget_img">
      <img src="@/assets/icon/hospital.png" alt="" />
    </div>
    <!-- content -->
    <div class="Forget_content">
      <div class="Forget_content_content">
        <h1>找回密码</h1>
        <el-form>
          <el-form-item prop="name">
            <el-input
              type="text"
              placeholder="请输入账号"
              autocomplete="off"
              prefix-icon="el-icon-s-custom"
              v-model="name"
            ></el-input>
          </el-form-item>
          <el-form-item prop="code" class="Forgetcode">
            <el-input
              type="text"
              prefix-icon="el-icon-chat-line-square"
              placeholder="请输入验证码"
              v-model="code"
            >
            </el-input>
            <el-button @click="failyz">发送验证码 </el-button>
          </el-form-item>
          <el-form-item prop="newPassword">
            <el-input
              type="password"
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
              v-model="newpassword"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="newPassword1">
            <el-input
              type="password"
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
              v-model="newpassword1"
            >
            </el-input>
          </el-form-item>
        </el-form>
        <el-button> 确定 </el-button>
        <el-link :underline="false" type="primary" @click="forgetLogin"
          >已有账号，去登录</el-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import service from "@/service/index";
import "@/views/Login/component/forgetPass/css.css";
import { wjpwd } from "../../../../network/wj.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      name: "",
      code: "",
      newpassword: "",
      newpassword1: "",
    };
  },
  methods: {
    failyz() {
      let data = {
        Phone: this.name,
        Pcaptcha: this.code,
        Password: this.newpassword,
        Passwords: this.newpassword1,
        // token: "000sss1cassaf456dsa23",
      };
      console.log(data);
      wjpwd(data).then((res) => {
        console.log(res.data);
      });
    },
    forgetLogin() {
      this.$emit("forgetLogin");
    },
  },
};
</script>
<style scoped>
</style>