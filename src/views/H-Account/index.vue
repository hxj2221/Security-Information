<template>
  <div class="accountalBg">
    <userthre :headTitle="pageTitle"></userthre>
    <div class="accountF">
      <table class="accountTab" border="1" bordercolor="#ccc">
        <tr>
          <td class="accountTd">
            <div class="accountTddiv">
              <p class="accountHead">手机号</p>
            </div>
            <div style="display: flex; justify-content: space-between">
              <p class="accountMain">{{ phone }}</p>
              <p class="accountClick" @click="phoneyz = true">更改</p>
            </div>
          </td>
        </tr>
        <tr>
          <td class="accountTd">
            <div class="accountTddiv">
              <p class="accountHead">邮箱</p>
            </div>
            <div style="display: flex; justify-content: space-between">
              <p class="accountMain">{{ email }}</p>
              <p class="accountClick" @click="emailyz = true">绑定</p>
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
              <p class="accountClick" @click="pwdyz = true">更改</p>
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
              <p class="accountClick" @click="wxbtn = true">解绑</p>
            </div>
          </td>
        </tr>
      </table>
      <!-- 手机验证 -->
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
            <button class="account-change-phoneclick" @click="phoneno">
              取消
            </button>
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
              <button class="account-new-click" @click="phonenewyes">
                确认
              </button>
            </div>
          </div>
        </el-dialog>
      </el-dialog>

      <!-- 邮箱的验证 -->
      <el-dialog
        title="身份验证"
        :close-on-click-modal="false"
        :visible.sync="emailyz"
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
            <button class="account-change-phoneclick" @click="emailno">
              取消
            </button>
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
              <button class="account-new-click" @click="emailnewyes">
                确认
              </button>
            </div>
          </div>
        </el-dialog>
      </el-dialog>
      <!-- 密码更改 -->
      <el-dialog
        title="身份验证"
        :close-on-click-modal="false"
        :visible.sync="pwdyz"
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
              v-model="pwdphone"
            />
          </div>
          <div>
            <input
              class="account-change-phoncode"
              type="text"
              placeholder="请输入验证码"
              v-model="pwdphonecode"
            />
            <button class="account-change-phonehq" id="one" :disabled="phonedd">
              {{ codeTxt }}
            </button>
          </div>
          <div>
            <button class="account-change-phoneclick" @click="pwdno">
              取消
            </button>
            <button class="account-change-phoneclick" @click="pwdyes">
              验证
            </button>
          </div>
        </div>
        <!-- 新密码 -->
        <el-dialog
          :close-on-click-modal="false"
          width="30%"
          title="修改密码"
          :visible.sync="pwdnew"
          append-to-body
        >
          <div>
            <p class="account-new-change">修改密码</p>
            <div>
              <input
                class="account-new-changeimp"
                type="text"
                placeholder="请输入密码"
                v-model="newpwd"
              />
            </div>
            <div>
              <input
                class="account-new-changeimp"
                type="text"
                placeholder="请再次输入密码"
                v-model="newpwds"
              />
            </div>
            <div>
              <button class="account-new-click" @click="pwdnewyes">验证</button>
            </div>
          </div>
        </el-dialog>
      </el-dialog>
      <!-- 微信 -->
      <el-dialog
        title="身份验证"
        :close-on-click-modal="false"
        :visible.sync="wxbtn"
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
              v-model="wxphone"
            />
          </div>
          <div>
            <input
              class="account-change-phoncode"
              type="text"
              placeholder="请输入验证码"
              v-model="wxphonecode"
            />
            <button class="account-change-phonehq" id="one" :disabled="phonedd">
              {{ codeTxt }}
            </button>
          </div>
          <div>
            <button class="account-change-phoneclick" @click="wxno">
              取消
            </button>
            <button class="account-change-phoneclick" @click="wxyes">
              验证
            </button>
          </div>
        </div>
        <!-- 解绑微信 -->
      </el-dialog>
    </div>
  </div>
</template>

<script>
//import service from "../../util/request";
import userthre from "../component/userthre";
import service from "@/service/index";
export default {
  components: { userthre },

  data() {
    return {
      pageTitle: "账户管理",
      phone: "",
      email: "",
      phonecode: "",
      changephone: "",
      changephonecode: "",
      emailphone: "",
      emailphonecode: "",
      newemail: "",
      newemailcode: "",
      pwdphone: "",
      pwdphonecode: "",
      newpwd: "",
      newpwds: "",
      wxphone: "",
      wxphonecode: "",
      phonedd: "",
      phoneyz: false,
      phonenew: false,
      emailyz: false,
      emailnew: false,
      pwdyz: false,
      pwdnew: false,
      wxbtn: false,
      wxnewbtn: false,
      isCodeIng: false, //是否倒计时
      codeTxt: "获取验证码",
      codetime: 60,
      disablbtn: false,
    };
  },
  created() {
    service.accountman().then((res) => {
      console.log(res);
      this.phone = res.data.phone;
      this.email = res.data.email;
    });
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
      });
      // this.phonenew = true;
      // this.phoneyz = false;
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
      this.phonenew = false;
    },
    phonenewno() {
      this.phonenew = false;
    },
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

    // 密码
    pwdyes() {
      this.pwdyz = false;
      this.pwdnew = true;
    },
    pwdno() {
      this.pwdyz = false;
    },
    // 新密码
    pwdnewyes() {
      this.pwdnew = false;
    },
    // 解绑微信
    wxno() {
      this.wxbtn = false;
    },
    // 解绑
    wxyes() {
      this.wxbtn = false;
      this.$confirm("你确定要解绑微信吗？", "解绑微信", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "解绑成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消解绑",
          });
        });
    },
  },
};
</script>

<style >
@import "account.css";
</style>
