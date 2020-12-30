<template>
  <div>
    <div class="staffheadThre">
      <el-button class="staff" @click="staff">员工列表</el-button>
      <el-button class="staffDepart" @click="depart">科室列表</el-button>
      <el-button class="staffRole" @click="role">角色列表</el-button>
      <el-button class="staffAdd" icon="el-icon-zoom-in" @click="staffadd"
        >新增</el-button
      >
    </div>
    <hr class="staffWidhr" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    staffadd() {
      this.$parent.fathpowadd();
    },
    staff() {
      this.$router.push("/Staff");
    },
    depart() {
      this.$router.push("/Department");
    },
    role() {
      this.$router.push("/Role");
    },
  },
};
</script>

<style scoped>
@import "power.css";
</style>
