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
          <el-form-item prop="ruleForm">
            <el-input
              type="text"
              placeholder="请输入账号"
              autocomplete="off"
              prefix-icon="el-icon-s-custom"
              v-model="ruleForm.name"
            ></el-input>
          </el-form-item>
          <el-form-item prop="code" class="Forgetcode">
            <el-input
              type="text"
              prefix-icon="el-icon-chat-line-square"
              placeholder="请输入验证码"
              v-model="ruleForm.code"
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
import { FPW, PCode } from "../../../../network/FPassword";
import qs from "qs";
export default {
  components: {},
  props: {},
  data() {
    return {
      ruleForm: {
        name: "15839435805",
        code: "",
        newpassword: "",
        newpassword1: "",
      },
      // 验证码
      show: true,
      count: "",
      timer: null,
    };
  },
  methods: {
    forgetLogin() {
      this.$emit("forgetLogin");
    },
    //获取验证码
    getCode() {
      let params = {
        phone: this.ruleForm.name,
      };
      console.log(params);
      PCode(qs.stringify(params)).then((res) => {
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
      });
    },
    //确定
    determine() {
      if (this.name == "") {
        this.$message.error("手机号为空");
      } else if (this.code == "") {
        this.$message.error("验证码为空");
      } else if (this.newpassword == "") {
        this.$message.error("新密码为空");
      } else if (this.newpassword1 == "") {
        this.$message.error("密码为空");
      } else if (this.newpassword != this.newpassword1) {
        this.$message.error("两次输入密码不同，请确认后重新输入");
        this.newpassword1 == " ";
      } else {
        let data = {
          phone: this.ruleForm.name,
          pcaptcha: this.ruleForm.code,
          password: this.ruleForm.newpassword,
          passwords: this.ruleForm.newpassword1,
        };
        FPW(qs.stringify(data)).then((res) => {
          if (res.data.msg == "找回成功") {
            this.$emit("forgetLogin");
            this.$message({
              message: "找回成功",
              type: "success",
            });
          } 
         
        });
      }
    },
  },
};
</script>
<style scoped>
</style>