<template>
  <div class="category_all">
    <!-- 头部 -->
    <div class="category_top">
      <div class="category_top_left">
        <h6>投诉类别与科室统计</h6>
      </div>
      <!-- 头部下拉框 -->
      <div class="category_top_right">
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
    <hr />
    <!-- 选择筛选部分 -->
    <div class="category_screen">
      <!-- 筛选投诉类别 -->
      <div class="category_screen_one">
        <p>投诉类别</p>
        <el-select v-model="catone" placeholder="请选择" :span="8">
          <el-option
            v-for="item in category"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="category_screen_two">
        <p>投诉科室</p>
        <el-select v-model="deptwo" placeholder="请选择">
          <el-option
            v-for="item in Department"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="category_screen_three">
        <el-select v-model="datthree" placeholder="请选择">
          <el-option
            v-for="item in date"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="category_screen_four">
        <div class="block">
          <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </div>
      </div>
      <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
    </div>
  </div>
</template>

<script>
// import AdminHead from './components/AdminHead'
import "@/views/H-Category/css.css";
export default {
  components: {},

  data() {
    return {
      // 头部选择器
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
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      // 筛选选择器 one
      category: [
        {
          value: "选项1",
          label: "服务态度",
        },
        {
          value: "选项2",
          label: "医患沟通",
        },
        {
          value: "选项3",
          label: "医德医风",
        },
        {
          value: "选项4",
          label: "费用",
        },
      ],
      catone: "",
      // 筛选 two
      Department: [
        {
          value: "选项1",
          label: "门诊",
        },
        {
          value: "选项2",
          label: "办公室",
        },
        {
          value: "选项3",
          label: "医务处",
        },
      ],
      deptwo: "",
      // three
      date: [
        {
          value: "选项1",
          label: "投诉日期",
        },
        {
          value: "选项2",
          label: "事发日期",
        },
      ],
      datthree: "",
      // 日期
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
      value2: "",
    };
  },

  methods: {},
};
</script>

<style lang="less" scoped></style>
