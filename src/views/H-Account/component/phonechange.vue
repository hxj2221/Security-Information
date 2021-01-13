<template>
  <el-dialog
    title="身份验证"
    :close-on-click-modal="false"
    :visible.sync="phoneyz"
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
          v-model="phone"
        />
      </div>
      <div>
        <input
          class="account-change-phoncode"
          type="text"
          placeholder="请输入验证码"
          v-model="phonecode"
        />
        <button
          class="account-change-phonehq"
          @click="phonebtncode"
          id="regis"
          :disabled="disablbtn"
        >
          {{ codeTxt }}
        </button>
      </div>
      <div>
        <button class="account-change-phoneclick" @click="phoneno">取消</button>
        <button class="account-change-phoneclick" @click="phoneyes">
          验证
        </button>
      </div>
    </div>
    <el-dialog
      :close-on-click-modal="false"
      width="30%"
      title="更改手机号码"
      :visible.sync="phonenew"
      append-to-body
    >
      <div>
        <p class="account-new-change">更改手机号</p>
        <div>
          <input
            class="account-new-changeimp"
            type="text"
            placeholder="请输入手机号"
            maxlength="11"
            v-model="changephone"
          />
        </div>
        <div>
          <input
            class="account-new-acccode"
            type="text"
            placeholder="请输入验证码"
            v-model="changephonecode"
          />
          <button
            class="account-new-hqcode"
            @click="changephonebtncode"
            id="regis"
            :disabled="disablbtn"
          >
            {{ codeTxt }}
          </button>
        </div>
        <div>
          <button class="account-new-click" @click="phonenewyes">确认</button>
        </div>
      </div>
    </el-dialog>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    dialog() {
      this.$parent.fatherclose();
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style scoped>
</style>
