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
    <hr class="category_hr" />
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
      <el-button type="primary" icon="el-icon-search" size="small"
        >查询</el-button
      >
    </div>
    <!-- 图部分 -->
    <div class="category_chart">
      <div id="main1"></div>
      <div id="main2"></div>
    </div>
    <!-- 统计表格部分 -->
    <div class="category_statistics">
      <div class="category_statistics_top">
        <h6>科室投诉类别统计</h6>
      </div>
      <div class="category_statistics_table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="序号"> </el-table-column>
          <el-table-column prop="name" label="科室名称"> </el-table-column>
          <el-table-column prop="service" label="服务态度"> </el-table-column>
          <el-table-column prop="patient" label="医患沟通"> </el-table-column>
          <el-table-column prop="ethics" label="医德医风"> </el-table-column>
          <el-table-column prop="cost" label="费用"> </el-table-column>
          <el-table-column prop="disputes" label="技术争议/并发症">
          </el-table-column>
          <el-table-column prop="system" label="核心制度"> </el-table-column>
          <el-table-column prop="reason" label="患方原因"> </el-table-column>
          <el-table-column prop="other" label="其他"> </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="category_statistics_paging">
        <div class="block">
          <el-pagination
            :current-page.sync="currentPage"
            layout="total,prev, pager, next"
            :total="tableData.length"
          >
          </el-pagination>
        </div>
      </div>
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
      // 科室投诉类别
      tableData: [
        {
          id: "1",
          name: "医务处",
          service: "OAO就",
          patient: "12",
          ethics: "324",
          cost: "12",
          disputes: "21",
          system: "334",
          reason: "12",
          other: "12",
        },
        {
          id: "1",
          name: "医务处",
          service: "OAO就",
          patient: "12",
          ethics: "324",
          cost: "12",
          disputes: "21",
          system: "334",
          reason: "12",
          other: "12",
        },
        {
          id: "1",
          name: "医务处",
          service: "OAO就",
          patient: "12",
          ethics: "324",
          cost: "12",
          disputes: "21",
          system: "334",
          reason: "12",
          other: "12",
        },
        {
          id: "1",
          name: "医务处",
          service: "OAO就",
          patient: "12",
          ethics: "324",
          cost: "12",
          disputes: "21",
          system: "334",
          reason: "12",
          other: "12",
        },
      ],
      currentPage: 1,
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
          text: "投诉类别统计",
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
          data: ["投诉", "纠纷"],

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
              "服务态度",
              "医患沟通",
              "费用",
              "技术争议",
              "核心制度",
              "患方原因",
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
            max: 40,
            // 每个相隔多少
            interval: 5,
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        // 控制主要内容（）柱
        series: [
          {
            name: "投诉",
            type: "bar",
            //控制条形的宽度
            barWidth: "30%",
            data: [10, 12, 24, 12, 14, 17, 5],
          },
          {
            name: "纠纷",
            type: "bar",
            barWidth: "30%",
            data: [12, 23, 14, 12, 20, 27, 26],
          },
        ],
        color: ["#3aa1ff", "#4ecb73"],
      };
      // 使用刚指定到的配置项和数据显示图表
      myChart.setOption(option);
    },
    // 饼图
    drawChart1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main2"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "投诉类别占比", //主标题
          y: "left",
          padding: 20,
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          bottom: "bottom",
          data: [
            "服务态度",
            "医患沟通",
            "医德医风",
            "费用",
            "技术争议",
            "患方原因",
          ],
          textStyle: {
            fontSize: 14,
          },
          left: 30,
          itemWidth: 12,
          itemHeight: 5,
          radius: 5,
        },
        series: [
          {
            name: "one",
            type: "pie",
            radius: "60%",
            center: ["50%", "45%"],
            data: [
              { value: 30.16, name: "技术争议" },
              { value: 6.35, name: "患方原因" },
              { value: 11.11, name: "服务态度" },
              { value: 12.7, name: "医患沟通" },
              { value: 15.87, name: "医德医风" },
              { value: 23.81, name: "费用" },
            ],

            itemStyle: {
              emphasis: {
                shadowBlur: 100,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.2)",
              },
              normal: {
                color: function (params) {
                  //自定义颜色
                  var colorList = [
                    "#36cbcb",
                    "#4ecb73",
                    "#fbd437",
                    "#f2637b",
                    "#975fe5",
                    "#3aa1ff",
                  ];
                  return colorList[params.dataIndex];
                },
              },
            },
          },
        ],
      });
    },
  },
  mounted() {
    this.drawChart1();
    this.drawChart();
  },
};
</script>

<style lang="less" scoped></style>
