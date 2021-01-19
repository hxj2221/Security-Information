<template>
  <div>
    <div class="powerheadThre">
      <el-button class="powerStaff" @click="staff">员工列表</el-button>
      <el-button style="margin-left: -5px" class="powerDepart" @click="depart"
        >科室列表</el-button
      >
      <el-button class="powerRole" style="margin-left: -5px" @click="role"
        >角色列表</el-button
      >
      <el-button class="powerRole" style="margin-left: -5px" @click="editpow"
        >编辑权限</el-button
      >
      <el-button class="powerAdd" icon="el-icon-zoom-in" @click="staffadd"
        >新增</el-button
      >
    </div>
    <hr class="powerWidhr" />
  </div>
</template>

<script>
import service from "@/service/index";
export default {
  data() {
    return {
      all: {},
      job_number: "",
    };
  },
  methods: {
    staffadd() {
      service.getrole().then((res) => {
        console.log(res);
        this.all = res.data;
        // this.job_number = res.data.job_number;
        this.bus.$emit("ReceiveMessage", this.all);
        this.$parent.fathpowadd();
      });
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
    editpow() {
      this.$router.push("/Edit");
    },
  },
};
</script>

<style scoped>
@import "power.css";
</style>
