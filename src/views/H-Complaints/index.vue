<template>
  <div>
    <div class="Complaints-background clearfix">
   <Complaintslist v-show="list">
       <el-button type="primary" icon="el-icon-circle-plus" class="addcomplaint"  @click="addcomsss()"
          slot="buttom"
          >新增</el-button
        >
   </Complaintslist>
   <Addcom v-show="add"></Addcom>
    </div>
  </div>
</template>

<script>
import Complaintslist from '../H-Complaints/components/complaintslist'
import Addcom from '../H-Complaints/components/addcom'


export default {
  components: {Complaintslist,Addcom},

  data() {
    return {
      list:true,
      add:false
    };
  },

  methods: {
    addcomsss(){
this.list=false
this.add=true
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
