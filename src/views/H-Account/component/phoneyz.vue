<template>
  <div>
    <div class="account-safe-phones" v-if="phonebind">
      <div>
        <p class="account-safe-bindphone">身份验证</p>
        <p class="account-safe-bindphone2">
          为了你的账户安全，请验证身份。验证成功后进行下一步操作。
        </p>
        <div>
          <input
            class="account-safe-phoneaccount"
            type="text"
            placeholder="请输入手机号"
            maxlength="11"
            v-model="phonetwo"
          />
        </div>
        <div>
          <input
            class="account-safe-phoncode"
            type="text"
            placeholder="请输入验证码"
            v-model="bindphonecode"
          />
          <button class="account-safe-phonehq" id="one" :disabled="phonedd">
            {{ phonecodeTxt }}
          </button>
        </div>
        <div>
          <button class="account-safe-phonelogin" @click="phoneno">取消</button>
          <button class="account-safe-phonelogin" @click="phoneyes">
            验证
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
