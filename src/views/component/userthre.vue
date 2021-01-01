<template>
  <div>
    <div class="userthreThre">
      <span class="userthreSpan">{{ headTitle }}</span>
      <div class="userthrehead">
        <el-button
          style="margin-left: -5px"
          class="userthregr"
          @click="information"
          >个人信息</el-button
        >
        <el-button
          style="margin-left: -5px"
          class="userthreb"
          @click="accountman"
          >账户管理</el-button
        >
        <el-button style="margin-left: -5px" class="userthrec" @click="notifica"
          >消息通知</el-button
        >
      </div>
    </div>
    <hr class="userthreWidhr" />
  </div>
</template>

<script>
export default {
  props: ["headTitle"],
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
@import "userthre.css";
</style>
