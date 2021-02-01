<template>
  <div class="Cycle_all">
    <!-- 头部部分 -->
    <div class="Cycle_top">
      <div class="Cycle_top_left">
        <h5>投诉处理周期统计</h5>
      </div>
    </div>
    <hr class="Cycle_hr" />
    <!-- 筛选部分 -->
    <div class="Cycle_seach">
      <div class="Cycle_seach_one">
        <p>姓名</p>
        <el-input placeholder="请输入患者姓名" v-model="input"></el-input>
      </div>
      <div class="Cycle_seach_two">
        <p>投诉日期</p>
        <el-date-picker
          v-model="value"
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
      <el-button type="primary" icon="el-icon-search"></el-button>
    </div>
    <!-- 图 -->
    <div class="Cycle_chart">
      <div id="main1" style="margin: 0 auto; width: 95%"></div>
    </div>
    <!-- 表格 -->
    <div class="Cycle_table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号"> </el-table-column>
        <el-table-column prop="name" label="投诉人"> </el-table-column>
        <el-table-column prop="date" label="性别"> </el-table-column>
        <el-table-column prop="age" label="年龄"> </el-table-column>
        <el-table-column prop="phone" label="联系方式"> </el-table-column>
        <el-table-column prop="position" label="投诉日期"> </el-table-column>
        <el-table-column prop="positions" label="投诉次数"> </el-table-column>
        <el-table-column prop="number" label="处理周期"> </el-table-column>
      </el-table>
    </div>
     <!-- 分页 -->
    <div class="Cycle_paging">
      <div class="block">
        <el-pagination
          :current-page="currentPage"
          :page-sizes="[8, 10, 20]"
          :page-size="8"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import "@/views/H-Cycle/index.css";
export default {
  components: {},
  props: {},
  data() {
    return {
      // 筛选部分
      value: "",
      input: "",
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
      // 表格
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          number: "12",
          positions: "hahah",
          position: "heheh",
          phone: "123000000",
          age: "12",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          number: "12",
          positions: "hahah",
          position: "heheh",
          phone: "123000000",
          age: "12",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          number: "12",
          positions: "hahah",
          position: "heheh",
          phone: "123000000",
          age: "12",
        },
      ],
      currentPage:1,
    };
  },
  methods: {
    // 柱状图
    drawChart() {
      //基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main1"));
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              // 控制鼠标经过的一条线
              color: "#fff",
            },
          },
        },
        title: {
          text: "投诉处理周期统计",
          // padding:'20px'
          padding: 20,
          y: "left",
        },
        // 控制表格上边的图例和解释
        legend: {
          icon: "rect", //形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 10, // 设置宽度
          itemHeight: 5, // 设置高度
          itemGap: 20, // 设置间距
          data: ["投诉处理周期统计"],

          textStyle: {
            //控制图例文字样式
            // color: '#c1dafc',
            // fontSize: '12'
          },
          right: "40%",
          top: "4%",
        },
        //控制x轴
        xAxis: [
          {
            type: "category",
            data: ["1~3月", "4~6月", "7~9月", "10~12月"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        // 控制y轴
        yAxis: [
          {
            type: "value",
            // name: '单位：(°C)',
            min: 0,
            max: 10,
            // 每个相隔多少
            interval: 2,
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        // 控制主要内容（）柱
        series: [
          {
            name: "投诉处理周期统计",
            type: "bar",
            //控制条形的宽度
            barWidth: "30%",
            data: [1, 2, 4, 2],
          },
        ],
        color: ["#3aa1ff", "#4ecb73"],
      };
      // 使用刚指定到的配置项和数据显示图表
      myChart.setOption(option);
    },
  },
  mounted() {
    this.drawChart();
  },
};
</script>
<style scoped>
</style>