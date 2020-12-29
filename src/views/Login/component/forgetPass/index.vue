<template>
  <div class="Forget_all">
    <div class="Forget_img">
      <img src="@/assets/icon/hospital.png" alt="" />
    </div>
    <!-- content -->
    <div class="Forget_content">
      <div class="Forget_content_content">
        <h1>找回密码</h1>
        <el-form :model="ruleForm">
          <el-form-item prop="name">
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
            <el-button>发送验证码 </el-button>
          </el-form-item>
          <el-form-item prop="newPassword">
            <el-input
              type="password"
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
              v-model="ruleForm.newpassword"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="newPassword1">
            <el-input
              type="password"
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
              v-model="ruleForm.newpassword1"
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
import "@/views/Login/component/forgetPass/css.css";
export default {
  components: {},
  props: {},
  data() {
    return {
      ruleForm: [{ name: "", code: "", newpassword: "", newpassword1: "" }],
    };
  },
  methods: {
    forgetLogin() {
      this.$emit("forgetLogin");
    },
  },
};
</script>
<style scoped>

</style>