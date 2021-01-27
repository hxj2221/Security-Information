<template>
  <div>
    <div class="powerheadThre">
      <ul class="list">
        <li class="stafflist" @click="staff">员工列表</li>
        <li class="departlist" @click="depart">科室列表</li>
        <li class="rolelist" @click="role">角色列表</li>
        <li class="editpowlist" @click="editpow">编辑权限</li>
      </ul>
      <el-button type="primary" icon="el-icon-circle-plus" class="powerAdd" @click="staffadd">新增
        </el-button>
    </div>
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
