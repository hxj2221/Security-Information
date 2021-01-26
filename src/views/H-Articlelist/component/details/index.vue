<template>
  <div class="details_all">
    <!-- top -->
    <div class="details_top">
      <div class="details_top_left">
        <h5>文章详情</h5>
      </div>
      <div class="details_top_right">
        <el-button type="primary" style="border-color: #666ee8 ;background:none;color: #666ee8; " icon="iconfont el-icon-hospital-passwordai207" @click="myreturn">返回
          </el-button>
      </div>
    </div>
    <!-- content -->
    <div class="details_content">
      <p>新闻标题</p>
      <p><span>2020-12-25 17:33:06</span></p>
      <p>
        hufhahjfhjashfjkfhdsjkfhkjds hufhahjfhjashfjkfhdsjkfhkjds
        hufhahjfhjashfjkfhdsjkfhkjds hufhahjfhjashfjkfhdsjkfhkjds
        hufhahjfhjashfjkfhdsjkfhkjds hufhahjfhjashfjkfhdsjkfhkjds
        hufhahjfhjashfjkfhdsjkfhkjds hufhahjfhjashfjkfhdsjkfhkjds
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
    return {};
  },
  methods: {
      myreturn(){
          this.$emit('returnAdd')
      }
  },
};
</script>
<style scoped>
</style>