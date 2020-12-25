<template>
  <div>
    <Connent
      v-show="isShow"
      @abcClick="myClick1"
      @abClick="mydetails"
    ></Connent>
    <Add @abcClick="myClick" v-show="isShows"></Add>
    <Form v-show="isdetails"></Form>
  </div>
</template>

<script>
import Connent from "@/views/H-Connect/component/connent/index.vue";
import Add from "@/views/H-Connect/component/addRecord/index.vue";
import Form from "@/views/H-Connect/component/lookForm/index.vue";
export default {
  components: {
    Connent,
    Add,
    Form,
  },
  props: {},
  data() {
    return {
      isShow: true, //首页
      isShows: false, //新建
      isdetails: false, //详情
    };
  },
  methods: {
    myClick() {
      this.isShow = !this.isShow;
      this.isShows = !this.isShows;
    },
    myClick1() {
      this.isShow = !this.isShow;
      this.isShows = !this.isShows;
    },
    mydetails() {
      console.log("hhh");
      this.isShow = false;
      this.isdetails = !this.isdetails;
    },
  },
};
</script>
<style scoped>
</style>