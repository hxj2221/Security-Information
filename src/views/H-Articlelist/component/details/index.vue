<template>
  <div class="details_all">
    <!-- top -->
    <div class="details_top">
      <div class="details_top_left">
        <h5>文章详情</h5>
      </div>
      <div class="details_top_right">
        <el-button
          type="primary"
          style="border-color: #666ee8; background: none; color: #666ee8"
          icon="iconfont el-icon-hospital-passwordai207"
          @click="myreturn"
          >返回
        </el-button>
      </div>
    </div>
    <!-- content -->
    <div class="details_content" :model="content">
      <p>{{ content.title }}</p>
      <p>
        <span>{{ content.create_time }}</span>
      </p>
      <p>
        {{ content.content }}
        <!-- hufhahjfhjashfjkfhdsjkfhkjds hufhahjfhjashfjkfhdsjkfhkjds
        hufhahjfhjashfjkfhdsjkfhkjds hufhahjfhjashfjkfhdsjkfhkjds
        hufhahjfhjashfjkfhdsjkfhkjds hufhahjfhjashfjkfhdsjkfhkjds
        hufhahjfhjashfjkfhdsjkfhkjds hufhahjfhjashfjkfhdsjkfhkjds -->
      </p>
    </div>
  </div>
</template>

<script>
import "@/views/H-Articlelist/component/details/css.css";
export default {
  components: {},
  props: {},
  data() {
    return {
      content: {},
    };
  },
  methods: {
    myreturn() {
      this.$emit("returnAdd");
    },
  },
  created() {
    this.bus.$on("info", (item) => {
      this.content = item;
     this.content.content = item.content.replace(/<\/?.+?>/g, "");
    });
  },
};
</script>
<style scoped>
</style>