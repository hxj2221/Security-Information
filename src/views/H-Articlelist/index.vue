<template>
  <div>
    <AList v-show="isshow" @myRe="myRe"></AList>
    <Det v-show="ishow" @returnAdd="returnAdd"></Det>
    <AriEd v-show="showEdit" @returnAdd="returnAdd"></AriEd>
  </div>
</template>
<script>
import AList from "@/views/H-Articlelist/component/articleList/index.vue";
import Det from "@/views/H-Articlelist/component/details/index.vue";
import AriEd from "@/views/H-Articlelist/component/ariEdit/index.vue";

export default {
  components: { AList, Det, AriEd },
  data() {
    return {
      isshow: true,
      ishow: false,
      showEdit: false, //编辑
    };
  },
  methods: {
    myRe() {
      this.isshow = !this.isshow;
      this.ishow = !this.ishow;
    },
    returnAdd() {
      this.isshow = true;
      this.ishow =false;
      this.showEdit=false
    },
    abcClick() {
      this.isshow = !this.isshow;
      this.showEdit = !this.showEdit;
    },
  },
};
</script>

<style lang="less" scoped></style>
