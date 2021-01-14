<template>
  <el-dialog
    title="身份验证"
    :close-on-click-modal="false"
    :visible.sync="visible"
    :show="show"
    v-if="visible"
  >
    <div>
      <p class="account-change-bindphone2">
        为了你的账户安全，请验证身份。验证成功后进行下一步操作。
      </p>
      <div>
        <input
          class="account-change-phoneaccount"
          type="text"
          placeholder="请输入手机号"
          maxlength="11"
          v-model="emailphone"
        />
      </div>
      <div>
        <input
          class="account-change-phoncode"
          type="text"
          placeholder="请输入验证码"
          v-model="emailphonecode"
        />
        <button class="account-change-phonehq" id="one" :disabled="phonedd">
          {{ codeTxt }}
        </button>
      </div>
      <div>
        <button class="account-change-phoneclick" @click="emailno">取消</button>
        <button class="account-change-phoneclick" @click="emailyes">
          验证
        </button>
      </div>
    </div>
    <!-- 新邮箱 -->
    <el-dialog
      :close-on-click-modal="false"
      width="30%"
      title="更改邮箱"
      append-to-body
      :visible.sync="emailnew"
    >
      <div>
        <p class="account-new-change">邮箱绑定</p>
        <div>
          <input
            class="account-new-changeimp"
            type="text"
            placeholder="请输入邮箱"
            maxlength="11"
            v-model="newemail"
          />
        </div>
        <div>
          <input
            class="account-new-acccode"
            type="text"
            placeholder="请输入验证码"
            v-model="newemailcode"
          />
          <button class="account-new-hqcode" id="one" :disabled="phonedd">
            {{ codeTxt }}
          </button>
        </div>
        <div>
          <button class="account-new-click" @click="emailnewyes">确认</button>
        </div>
      </div>
    </el-dialog>
  </el-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    show() {
      this.visible = this.show;
    },
  },
  data() {
    return {
      emailphone: "",
      emailphonecode: "",
      newemail: "",
      newemailcode: "",
      emailnew: false,
      isCodeIng: false, //是否倒计时
      codeTxt: "获取验证码",
      codetime: 60,
      disablbtn: false,
      visible: this.show,
    };
  },
  methods: {
    // 邮箱
    emailno() {
      this.emailyz = false;
    },
    emailyes() {
      this.emailyz = false;
      this.emailnew = true;
    },
    // 新邮箱
    emailnewyes() {
      this.emailnew = false;
    },
  },
};
</script>

<style scoped>
</style>
