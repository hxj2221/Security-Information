<template>
  <div>
    <AList v-if="isshow" @myRe="myRe"></AList>
    <Det v-else @returnAdd="returnAdd"></Det>
  </div>
</template>

<script>
// import AdminHead from './components/AdminHead'
import AList from "@/views/H-Articlelist/component/articleList/index.vue";
import Det from "@/views/H-Articlelist/component/details/index.vue";
export default {
  components: {
    AList,
    Det,
  },

  data() {
    return {
      isshow: true,
    };
  },

  methods: {
    myRe() {
      this.isshow = !this.isshow;
    },
    returnAdd() {
      this.isshow = !this.isshow;
    },
  },
};
</script>

<style lang="less" scoped></style>
