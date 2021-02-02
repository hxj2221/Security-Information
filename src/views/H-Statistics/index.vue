<template>
  <div class="Statistics_all">
    <!-- 头部 -->
    <div class="Statistics_top">
      <div class="Statistics_top_left">
        <h5>被投诉医护人员统计</h5>
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
        <el-button type="primary" icon="el-icon-search"></el-button>
      </div>
    </div>
    <!-- <hr class="Statistics_hr" /> -->
    <!-- 筛选部分 -->
    <div class="Statistics_screen">
      <div class="Statistics_screen_one">
        <p>医护人员姓名</p>
        <el-input type="text" v-model="name"></el-input>
      </div>
      <el-button type="primary" icon="el-icon-search"></el-button>
    </div>
    <!-- 图 -->
    <div class="Statistics_chart">
      <div id="main1" style="margin: 0 auto"></div>
    </div>
    <!-- 表格 -->
    <div class="Statistics_table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="date" label="日期"> </el-table-column>
        <el-table-column prop="age" label="年龄"> </el-table-column>
        <el-table-column prop="phone" label="联系方式"> </el-table-column>
        <el-table-column prop="position" label="职称"> </el-table-column>
        <el-table-column prop="positions" label="职务"> </el-table-column>
        <el-table-column prop="number" label="被投诉次数"> </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="Statistics_paging">
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
      name: "",
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
      // 分页
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
          text: "被投诉人员统计",
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
          data: ["被投诉人员统计"],

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
            data: [
              "张三",
              "李四",
              "王五",
              "小花",
              "哈哈哈",
              "呵呵呵呵",
              "其他",
            ],
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
            max: 20,
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
            name: "被投诉人员统计",
            type: "bar",
            //控制条形的宽度
            barWidth: "30%",
            data: [11, 12, 4, 2, 4, 10, 15],
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