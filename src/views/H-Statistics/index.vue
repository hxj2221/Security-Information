<template>
  <div class="Statistics_all">
    <!-- 头部 -->
    <div class="Statistics_top">
      <div class="Statistics_top_left">
        <h6>被投诉医护人员统计</h6>
      </div>
      <!-- 头部下拉框 -->
      <div class="Statistics_top_right">
        <el-select v-model="value" placeholder="选择统计维度">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-button type="primary" size="small">查询</el-button>
      </div>
    </div>
    <hr class="Statistics_hr" />
    <!-- 筛选部分 -->
    <div class="Statistics_screen">
      <div class="Statistics_screen_one">
        <p>医护人员姓名</p>
        <el-input type="text" v-model="name"></el-input>
      </div>
      <el-button type="primary" icon="el-icon-search" size="small"
        >查询</el-button
      >
    </div>
  </div>
</template>

<script>
import "@/views/H-Statistics/index.css";
export default {
  components: {},
  props: {},
  data() {
    return {
      // 头部下拉框
      options: [
        {
          value: "选项1",
          label: "患者基本信息统计",
        },
        {
          value: "选项2",
          label: "患者疾病信息统计",
        },
        {
          value: "选项3",
          label: "被投诉医护人员统计",
        },
      ],
      value: "",
      // 筛选
      name:'',
    };
  },
  methods: {},
};
</script>
<style scoped>
</style>