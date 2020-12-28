<template>
  <div>
    <div class="Complaints-background clearfix">
      <Complaintslist v-show="list">
        <el-button
          type="primary"
          icon="el-icon-circle-plus"
          class="addcomplaint"
          @click="addcomsss()"
          slot="buttom"
          >新增</el-button
        >
      </Complaintslist>
      <Addcom v-show="add">
        <Conserve>
          <el-button
            type="primary"
            icon="iconfont el-icon-hospital-passwordbaocun"
            class="keep"
            solt="keep"
            @click="keepform"
            >保存</el-button
          >
        </Conserve>
      </Addcom>
      <Look v-show="look">
        <div slot="buttom">
          <el-button
            type="primary"
            icon="iconfont el-icon-hospital-passworddayin"
            class="printing"
            @click="stamp"
            >打印调查表</el-button
          >
          <el-button
            type="primary"
            icon="iconfont el-icon-hospital-passwordai207"
            class="return"
            style="border: 1px solid #949aef"
            @click="back"
            >返回</el-button
          >
        </div>
      </Look>
    </div>
  </div>
</template>

<script>
import Complaintslist from "../H-Complaints/components/complaintslist";
import Addcom from "../H-Complaints/components/addcom";
import Look from "../H-Complaints/components/Look";
import Read from "../H-Complaints/components/read";
import Conserve from "../H-Complaints/components/conserve";

export default {
  components: { Complaintslist, Addcom, Look, Read, Conserve },

  data() {
    return {
      list: true,
      add: false,
      look: false,
    };
  },

  methods: {
    keepform() {
      this.list = true;
      this.add = false;
      this.look = false;
    },
    // 打印
    stamp() {},
    // 返回
    back() {
      this.list = true;
      this.add = false;
      this.look = false;
    },
    addcomsss() {
      this.list = false;
      this.add = true;
      this.look = false;
    },
    // 搜索事件
    clicks() {
      // 将标准时间转为年月日
      var stime = new Date(this.complaintsate[0]);
      var StartTime =
        stime.getFullYear() + "-" + (stime.getMonth() + 1) + "-" + stime.getDate();
      var etime = new Date(this.complaintsate[1]);
      var EndTime =
        etime.getFullYear() + "-" + (etime.getMonth() + 1) + "-" + etime.getDate();
    },
    // 设置表头颜色
    getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#c2c5f6";
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
@import "./css/index.css";
</style>
