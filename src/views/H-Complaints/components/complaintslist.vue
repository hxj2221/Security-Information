<template>
  <div>
    <div class="comlist">
      <div class="Complaints-header clearfix">
        <span>投诉事件</span>
        <slot name="buttom">
          <el-button type="primary" icon="el-icon-circle-plus" class="addcomplaint" 
          >新增</el-button
        >
        </slot>
         <slot name="export">
        <el-button icon="iconfont el-icon-hospital-passwordexport" class="exportcomplaint"
          >导出</el-button
        >
        </slot>
      </div>
    
      <slot name="table">
     
      </slot>
    
      
    </div>
  </div>
</template>
<script>
import Tables from '../components/Tables'

export default {
  components: {Tables},

  data() {
    return {
     
     
      form: {},
      
    };
  },

  methods: {
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
  },
};
</script>

<style scoped>
@import "../css/complaintslist.css";
</style>
