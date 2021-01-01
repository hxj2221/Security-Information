<template>
  <div class="notifyalBg">
    <userthre :headTitle="pageTitle"></userthre>
    <div class="notifyF">
      <table class="notifyTab">
        <tr>
          <td class="notifyTd">
            <div class="notifyTddiv">
              <i
                class="iconfont icon-zu"
                style="
                  font-size: 56px;
                  color: rgb(102, 110, 232);
                  display: flex;
                  flex-direction: column;
                "
              ></i>
              <p class="notifyHead">投诉推送</p>
              <span
                style="
                  font-size: 12px;
                  margin-left: 15px;
                  color: #ccc;
                  margin-top: 5px;
                "
                >2020/12/20 10:00:00</span
              >
            </div>
            <div style="display: flex; justify-content: space-between">
              <p class="notifyMain">
                您有投诉需要处理，截止时间2020-11-22 00:00:00
              </p>
              <p class="notifyClick">
                <i class="iconfont icon-arrow-right-copy"></i>
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td class="notifyTd">
            <div class="notifyTddiv">
              <i
                class="iconfont icon-zu"
                style="
                  font-size: 56px;
                  color: rgb(102, 110, 232);
                  display: flex;
                  flex-direction: column;
                "
              ></i>
              <p class="notifyHead">投诉推送</p>
              <span
                style="
                  font-size: 12px;
                  margin-left: 4px;
                  color: #ccc;
                  margin-top: 5px;
                "
                >2020/12/20 10:00:00</span
              >
            </div>
            <div style="display: flex; justify-content: space-between">
              <p class="notifyMain">
                您有投诉需要处理，截止时间2020-11-22 00:00:00
              </p>
              <p class="notifyClick">
                <i class="iconfont icon-arrow-right-copy"></i>
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td class="notifyTd">
            <div class="notifyTddiv">
              <i
                class="iconfont icon-zu"
                style="
                  font-size: 56px;
                  color: rgb(102, 110, 232);
                  display: flex;
                  flex-direction: column;
                "
              ></i>
              <p class="notifyHead">投诉推送</p>
              <span
                style="
                  font-size: 12px;
                  margin-left: 4px;
                  color: #ccc;
                  margin-top: 5px;
                "
                >2020/12/20 10:00:00</span
              >
            </div>
            <div style="display: flex; justify-content: space-between">
              <p class="notifyMain">
                您有投诉需要处理，截止时间2020-11-22 00:00:00
              </p>
              <p class="notifyClick">
                <i class="iconfont icon-arrow-right-copy"></i>
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td class="notifyTd">
            <div class="notifyTddiv">
              <i
                class="iconfont icon-zu"
                style="
                  font-size: 56px;
                  color: rgb(102, 110, 232);
                  display: flex;
                  flex-direction: column;
                "
              ></i>
              <p class="notifyHead">投诉推送</p>
              <span
                style="
                  font-size: 12px;
                  margin-left: 4px;
                  color: #ccc;
                  margin-top: 5px;
                "
                >2020/12/20 10:00:00</span
              >
            </div>
            <div style="display: flex; justify-content: space-between">
              <p class="notifyMain">
                您有投诉需要处理，截止时间2020-11-22 00:00:00
              </p>
              <p class="notifyClick">
                <i class="iconfont icon-arrow-right-copy"></i>
              </p>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import userthre from "../component/userthre";
export default {
  components: { userthre },

  data() {
    return {
      pageTitle: "消息通知",
    };
  },

  methods: {},
};
</script>

<style >
@import "notify.css";
</style>
