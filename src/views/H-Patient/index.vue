<template>
  <div class="Patient_all">
    <!-- 头部部分 -->
    <div class="Patient_top">
      <div class="Patient_top_left">
        <h5>患者疾病信息统计</h5>
      </div>
    </div>
    <hr class="Patient_hr" />
    <!-- 筛选部分 -->
    <div class="Patient_seach">
      <div class="Patient_seach_one">
        <p>患者姓名</p>
        <el-input placeholder="请输入患者姓名" v-model="input"></el-input>
      </div>
      <div class="Patient_seach_two">
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
    <!-- 图 -->
    <div class="Patient_chart">
      <div id="main1" style="margin: 0 auto; width: 95%;"></div>
    </div>
    <!-- 表格 -->
    <div class="Patient_table">
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
    <div class="Patient_paging">
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
import "@/views/H-Patient/index.css";
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
          text: "患者疾病信息统计",
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
          data: ["患者疾病信息统计"],

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
              "传染病",
              "寄生虫病",
              "恶性肿瘤",
              "骨折",
              "血液病",
              "精神病",
              "呼吸系统疾病",
              "消化系统疾病",
              "泌尿生殖系统疾病",
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
            max: 30,
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
            name: "患者疾病信息统计",
            type: "bar",
            //控制条形的宽度
            barWidth: "30%",
            data: [11, 12, 4, 2, 4, 10, 15, 30, 20],
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