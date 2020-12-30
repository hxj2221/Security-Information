<template>
  <div class="accountalBg">
    <!-- <div class="accountThre">
      <span class="accountSpan">账户管理</span>
      <div>
        <el-button class="accountgr">个人信息</el-button>
        <el-button class="accountb">账户管理</el-button>
        <el-button class="accountc">消息通知</el-button>
      </div>
    </div>
    <hr class="accountWidhr" /> -->
    <userthre></userthre>
    <div class="accountF">
      <table class="accountTab" border="1" bordercolor="#ccc">
        <tr>
          <td class="accountTd">
            <div class="accountTddiv">
              <p class="accountHead">手机号</p>
            </div>
            <div style="display: flex; justify-content: space-between">
              <p class="accountMain">177****1234</p>
              <p class="accountClick" @click="phonesafebtn">更改</p>
            </div>
          </td>
        </tr>
        <tr>
          <td class="accountTd">
            <div class="accountTddiv">
              <p class="accountHead">邮箱</p>
            </div>
            <div style="display: flex; justify-content: space-between">
              <p class="accountMain">123456789@gmail.com</p>
              <p class="accountClick" @click="emailsafebtn">绑定</p>
            </div>
          </td>
        </tr>
        <tr>
          <td class="accountTd">
            <div class="accountTddiv">
              <p class="accountHead">密码</p>
            </div>
            <div style="display: flex; justify-content: space-between">
              <p class="accountMain">已设置，可通过账户密码登录</p>
              <p class="accountClick" @click="pwdsafebtn">更改</p>
            </div>
          </td>
        </tr>
        <tr>
          <td class="accountTd">
            <div class="accountTddiv">
              <p class="accountHead">微信</p>
            </div>
            <div style="display: flex; justify-content: space-between">
              <p class="accountMain"><i class="el-icon-s-comment"></i>晚风</p>
              <p class="accountClick" @click="wxsafebtn">解绑</p>
            </div>
          </td>
        </tr>
      </table>
      <!-- 手机号验证下一步 -->
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
            <button class="account-safe-phonelogin" @click="phoneno">
              取消
            </button>
            <button class="account-safe-phonelogin" @click="phoneyes">
              验证
            </button>
          </div>
        </div>
      </div>

      <!-- 手机号绑定 -->
      <div class="account-new-phones" v-if="phonenewbind">
        <div>
          <p class="account-new-bindphone">更改手机号</p>
          <div>
            <input
              class="account-new-phoneaccount"
              type="text"
              placeholder="请输入手机号"
              maxlength="11"
              v-model="phonetwo"
            />
          </div>
          <div>
            <input
              class="account-new-phoncode"
              type="text"
              placeholder="请输入验证码"
              v-model="bindphonecode"
            />
            <button class="account-new-phonehq" id="one" :disabled="phonedd">
              {{ phonecodeTxt }}
            </button>
          </div>
          <div>
            <button class="account-new-phonelogin" @click="phonenewno">
              取消
            </button>
            <button class="account-new-phonelogin" @click="phonenewyes">
              确认
            </button>
          </div>
        </div>
      </div>
      <!-- 邮箱的验证 -->
      <div class="account-safe-phones" v-if="emailbind">
        <div>
          <p class="account-safe-bindphone">邮箱验证</p>
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
            <button class="account-safe-phonelogin" @click="emailno">
              取消
            </button>
            <button class="account-safe-phonelogin" @click="emailyes">
              验证
            </button>
          </div>
        </div>
      </div>
      <!-- 新邮箱 -->
      <div class="account-safe-phones" v-if="emailnewbind">
        <div>
          <p class="account-safe-bindphone">邮箱绑定</p>
          <div>
            <input
              class="account-safe-phoneaccount"
              type="text"
              placeholder="请输入邮箱"
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
            <button class="account-safe-phonelogin" @click="emailnewno">
              取消
            </button>
            <button class="account-safe-phonelogin" @click="emailnewyes">
              验证
            </button>
          </div>
        </div>
      </div>
      <!-- 密码更改 -->
      <div class="account-safe-phones" v-if="pwdbind">
        <div>
          <p class="account-safe-bindphone">修改密码</p>
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
            <button class="account-safe-phonelogin" @click="pwdno">取消</button>
            <button class="account-safe-phonelogin" @click="pwdyes">
              验证
            </button>
          </div>
        </div>
      </div>
      <!-- 新密码 -->
      <div class="account-safe-phones" v-if="pwdnewbind">
        <div>
          <p class="account-safe-bindphone">修改密码</p>
          <div>
            <input
              class="account-safe-phoneaccount"
              type="text"
              placeholder="请输入密码"
              maxlength="11"
              v-model="phonetwo"
            />
          </div>
          <div>
            <input
              class="account-safe-phoncode"
              type="text"
              placeholder="请输入密码"
              v-model="bindphonecode"
            />
          </div>
          <div>
            <button class="account-safe-phonelogin" @click="pwdnewno">
              取消
            </button>
            <button class="account-safe-phonelogin" @click="pwdnewyes">
              验证
            </button>
          </div>
        </div>
      </div>
      <!-- 微信 -->
      <div class="account-safe-phones" v-if="wxbind">
        <div>
          <p class="account-safe-bindphone">微信解绑</p>
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
            <button class="account-safe-phonelogin" @click="wxno">取消</button>
            <button class="account-safe-phonelogin" @click="wxyes">验证</button>
          </div>
        </div>
      </div>
      <!-- 解绑微信 -->
      <div class="account-safe-phones" v-if="wxnobind">
        <div>
          <p class="account-safe-bindphone">解绑</p>
          <p class="account-safe-bindphone2">您确定要解绑微信吗</p>
        </div>
        <div>
          <button class="account-safe-phonelogin" @click="wxnono">取消</button>
          <button class="account-safe-phonelogin" @click="wxnoyes">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userthre from "../component/userthre";
export default {
  components: { userthre },

  data() {
    return {
      phonebind: false,
      phonenewbind: false,
      emailbind: false,
      emailnewbind: false,
      pwdbind: false,
      pwdnewbind: false,
      wxbind: false,
      wxnobind: false,
      phonecodeTxt: "获取验证码",
    };
  },

  methods: {
    // 手机
    phonesafebtn() {
      this.phonebind = !this.phonebind;
    },
    phoneno() {
      this.phonebind = !this.phonebind;
    },
    phoneyes() {
      this.phonebind = !this.phonebind;
      this.phonenewbind = !this.phonenewbind;
    },
    //新手机
    phonenewyes() {
      this.phonenewbind = !this.phonenewbind;
    },
    phonenewno() {
      this.phonenewbind = !this.phonenewbind;
    },
    // 邮箱
    emailsafebtn() {
      this.emailbind = !this.emailbind;
    },
    emailno() {
      this.emailbind = !this.emailbind;
    },
    emailyes() {
      this.emailbind = !this.emailbind;
      this.emailnewbind = !this.emailnewbind;
    },
    // 新邮箱
    emailnewyes() {
      this.emailnewbind = !this.emailnewbind;
    },
    emailnewno() {
      this.emailnewbind = !this.emailnewbind;
    },
    // 密码
    pwdsafebtn() {
      this.pwdbind = !this.pwdbind;
    },
    pwdyes() {
      this.pwdbind = !this.pwdbind;
      this.pwdnewbind = !this.pwdnewbind;
    },
    pwdno() {
      this.pwdbind = !this.pwdbind;
    },
    // 新密码
    pwdnewyes() {
      this.pwdnewbind = !this.pwdnewbind;
    },
    pwdnewno() {
      this.pwdnewbind = !this.pwdnewbind;
    },
    // 解绑微信
    wxsafebtn() {
      this.wxbind = !this.wxbind;
    },
    wxno() {
      this.wxbind = !this.wxbind;
    },
    wxyes() {
      this.wxbind = !this.wxbind;
      this.wxnobind = !this.wxnobind;
    },
    // 解绑
    wxnono() {
      this.wxnobind = !this.wxnobind;
    },
    wxnoyes() {
      this.wxnobind = !this.wxnobind;
    },
  },
};
</script>

<style >
@import "account.css";
</style>
