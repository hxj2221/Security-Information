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
        <el-button icon="iconfont el-icon-hospital-passwordexport" class="exportcomplaint"   @click="exportcom()"
          >导出</el-button
        >
        </slot>
      </div>
      <slot name="table"></slot>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
    };
  },

  methods: {
  },
};
</script>

<style scoped>
@import "../css/complaintslist.css";
</style>
