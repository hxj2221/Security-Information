<template>
  <div>
    <div class="userthreThre">
      <h2 class="userthreSpan">{{ headTitle }}</h2>
      <div class="userthrehead">
        <ul>
          <li class="userthregr" @click="information">个人信息</li>
          <li class="userthreb" @click="accountman">账户管理</li>
          <li class="userthrec" @click="notifica">消息通知</li>
        </ul>
      </div>
    </div>
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
