<template>
  <div id="app">
    <transition>
      <router-view v-if="alive" />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
        alive: true
    }
  },
  provide() {
    return {
      reload: this.reload
    }
  },
  methods: {
    reload() {
      this.alive= false
      this.$nextTick(() => {
        this.alive = true
      })
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #ffffff;
  height: 100%;
  min-width: 1700px;
}
</style>
