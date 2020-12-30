<template>
  <div>
    <div class="personThre">
      <span class="prersonSpan">这个没来得及</span>
      <div>
        <el-button class="persongr" @click="information">个人信息</el-button>
        <el-button class="personb" @click="accountman">账户管理</el-button>
        <el-button class="personc" @click="notifica">消息通知</el-button>
      </div>
    </div>
    <hr class="personWidhr" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    information() {
      this.$router.push("/Personal");
    },
    accountman() {
      this.$router.push("/Account");
    },
    notifica() {
      this.$router.push("/Notify");
    },
  },
};
</script>

<style scoped>
.personThre {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #cccccc;
  padding-top: 30px;
  padding-left: 60px;
}

.prersonSpan {
  color: #000;
  font-size: 20px;
  font-weight: 700;
}

.persongr:hover {
  background-color: #666ee8;
}

.persongr {
  border-left: 2px solid #ccc;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  border-radius: 5px;
}

.personb:hover {
  background-color: #666ee8;
}

.personb {
  border: 2px solid #ccc;
  border-radius: 5px;
}

.personc:hover {
  background-color: #666ee8;
}

.personc {
  border-right: 2px solid #ccc;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  border-radius: 5px;
}

.personWidhr {
  margin-top: 15px;
  margin-bottom: 12px;
  background-color: #ccc;
  height: 1px;
  border: none;
}
</style>
