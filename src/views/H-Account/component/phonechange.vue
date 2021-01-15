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
      visible: this.show,
      phone: "",
      phonecode: "",
      changephone: "",
      changephonecode: "",
      phonenew: false,
      isCodeIng: false, //是否倒计时
      codeTxt: "获取验证码",
      codetime: 60,
      disablbtn: false,
    };
  },
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
  methods: {
    // 手机
    phoneyes() {
      let data = {
        phone: this.phone,
        pcaptcha: this.phonecode,
      };
      service.phonechange(data).then((res) => {
        console.log(res);
        if (res.msg == "身份验证通过!") {
          this.phonenew = true;
          this.phoneyz = false;
        }
      });
    },
    phonebtncode() {
      let data = {
        phone: this.phone,
      };
      service.phoneyz(data).then((res) => {
        console.log(res);
        if (res.code == 20020) {
          alert(res.msg);
        } else if (res.code == 20010) {
          let timer = setInterval(() => {
            this.isCodeIng = true;
            this.disablbtn = true;
            this.codetime -= 1;
            this.codeTxt = "重新获取" + this.codetime + "s";
            if (this.codetime < 1) {
              clearInterval(timer);
              if (this.codetime < 1) {
                this.codeTxt = "获取验证码";
                this.isCodeIng = false;
                this.codetime = 60;
                this.disablbtn = false;
              }
            }
          }, 1000);
        }
      });
    },
    changephonebtncode() {
      let data = {
        phone: this.changephone,
      };
      service.phoneyz(data).then((res) => {
        console.log(res);
        if (res.code == 20020) {
          alert(res.msg);
        } else if (res.code == 20010) {
          let timer = setInterval(() => {
            this.isCodeIng = true;
            this.disablbtn = true;
            this.codetime -= 1;
            this.codeTxt = "重新获取" + this.codetime + "s";
            if (this.codetime < 1) {
              clearInterval(timer);
              if (this.codetime < 1) {
                this.codeTxt = "获取验证码";
                this.isCodeIng = false;
                this.codetime = 120;
                this.disablbtn = false;
              }
            }
          }, 1000);
        }
      });
    },
    phoneno() {
      this.phoneyz = false;
    },
    //新手机
    phonenewyes() {
      let data = {
        phone: this.changephone,
        pcaptcha: this.changephonecode,
      };
      service.phonehb(data).then((res) => {
        console.log(res);
        if (res.code == "20010") {
          this.phonenew = false;
        }
        this.reload();
      });
    },
  },
};
</script>

<style scoped>
</style>
