<template>
  <div class="Basic_all">
    <!-- 头部 -->
    <div class="Basic_top">
      <div class="Basic_top_left">
        <h5>患者基本信息统计</h5>
      </div>
      <!-- 头部下拉框 -->
      <!-- <div></div> -->
    </div>
    <hr class="Basic_hr" />
    <!--  筛选部分-->
    <div class="Basic_seach">
      <div class="Basic_seach_one">
        <p>患者姓名</p>
        <el-input placeholder="请输入患者姓名" v-model="input"></el-input>
      </div>
      <div class="Basic_seach_two">
        <p>医保类型</p>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <el-button type="primary" icon="el-icon-search"></el-button>
    </div>
    <!-- 图形部分 -->
    <div class="Basic_screen">
      <div id="main1"></div>
      <div id="main2"></div>
    </div>
    <!-- 统计表格部分 -->
    <div class="Basic_table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="序号"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="service" label="性别"> </el-table-column>
        <el-table-column prop="patient" label="年龄"> </el-table-column>
        <el-table-column prop="ethics" label="联系方式"> </el-table-column>
        <el-table-column prop="cost" label="职称"> </el-table-column>
        <el-table-column prop="disputes" label="职务"> </el-table-column>
        <el-table-column prop="system" label="学历"> </el-table-column>
        <el-table-column prop="reason" label="工作年限"> </el-table-column>
        <el-table-column prop="other" label="被投诉次数"> </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="Basic_paging">
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
import "@/views/H-Basic/index.css";
export default {
  components: {},
  props: {},
  data() {
    return {
      // 搜索下拉框
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
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
      input: "",
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
          // text: "投诉类别统计",
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
          data: ["男", "女"],

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
              "1-10",
              "10-20",
              "20-30",
              "30-40",
              "40-50",
              "50-60",
              "60-70",
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
            max: 80,
            // 每个相隔多少
            interval: 10,
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        // 控制主要内容（）柱
        series: [
          {
            name: "男",
            type: "bar",
            //控制条形的宽度
            barWidth: "30%",
            data: [10, 30, 60, 30, 20, 17, 5],
          },
          {
            name: "女",
            type: "bar",
            barWidth: "30%",
            data: [50, 23, 30, 40, 70, 80, 10],
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
        // title: {
        //   text: "投诉类别占比", //主标题
        //   y: "left",
        //   padding: 20,
        // },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          bottom: "bottom",
          data: [
            "农民",
            "教师",
            "农业、牧业、林业工作者及渔民、猎人",
            "服务工作者",
            "其他",
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
              { value: 12.43, name: "农民" },
              { value: 12.26, name: "教师" },
              { value: 16.87, name: "农业、牧业、林业工作者及渔民、猎人" },
              { value: 25.75, name: "服务工作者" },
              { value: 32.68, name: "其他" },
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
                    // "#3aa1ff",
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
<style scoped>
</style>