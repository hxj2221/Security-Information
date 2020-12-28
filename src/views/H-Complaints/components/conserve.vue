<template>
  <div>
    <div class="conserve">
      <slot name="keep">
        <el-button
          type="primary"
          icon="iconfont el-icon-hospital-passwordbaocun"
          class="keep"
          >保存</el-button
        ></slot
      >

      <el-button
        type="primary"
        icon="iconfont el-icon-hospital-passwordai207"
        class="return"
        style="border: 1px solid #949aef"
        @click="back()"
        >返回</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  created() {},
};
</script>
<style scoped>
@import "../css/conserve.css";
</style>
