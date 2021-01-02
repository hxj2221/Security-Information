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
            <el-button v-show="show" @click="getCode" class="Forgetcode_button"
              >发送验证码
            </el-button>
            <el-button v-show="!show" class="Forgetcode_button1"
              >{{ count }}秒重发</el-button
            >
          </el-form-item>
          <el-form-item prop="newPassword">
            <el-input
              type="password"
              prefix-icon="el-icon-lock"
              placeholder="请输入新密码"
              v-model="ruleForm.newpassword"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="newPassword1">
            <el-input
              type="password"
              prefix-icon="el-icon-lock"
              placeholder="请输入再次输入密码"
              v-model="ruleForm.newpassword1"
            >
            </el-input>
          </el-form-item>
        </el-form>
        <el-button @click="determine"> 确定 </el-button>
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
      ruleForm: { name: "", code: "", newpassword: "", newpassword1: "" },
      // 验证码
      show: true,
      count: "",
      timer: null,
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
    // 获取验证码
    getCode() {
      if (/^1[34578]\d{9}$/.test(this.ruleForm.name) == "") {
        this.$message.error("手机号错误或为空，请重新输入");
      } else {
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000);
        }
      }
    },
    // 确定
    determine() {
      if (this.ruleForm.name == "") {
        this.$message.error("手机号为空");
      } else if (this.ruleForm.code == "") {
        this.$message.error("验证码为空");
      } else if (this.ruleForm.newpassword == "") {
        this.$message.error("新密码为空");
      } else if (this.ruleForm.newpassword1 == "") {
        this.$message.error("密码为空");
      } else if (this.ruleForm.newpassword != this.ruleForm.newpassword1) {
        this.$message.error("两次输入密码不同，请确认后重新输入");
        this.ruleForm.newpassword1 == " ";
      } else {
        this.$emit("forgetLogin");
      }
    },
  },
};
</script>
<style scoped>
</style>