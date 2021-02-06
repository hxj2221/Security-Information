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
        <el-button type="primary" icon="el-icon-search"></el-button>
      </div>
    </div>
    <!-- <hr class="category_hr" /> -->
    <!-- 选择筛选部分 -->
    <div class="category_screen">
      <!-- 筛选投诉类别 -->
      <div class="category_screen_one">
        <p>投诉类别</p>
        <el-select v-model="catone" placeholder="请选择" :span="8">
          <el-option
            v-for="item in category"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
      <div class="category_screen_two">
        <p>投诉科室</p>
        <el-select v-model="deptwo" placeholder="请选择">
          <el-option
            v-for="item in Department"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
      <div class="category_screen_three">
        <el-select v-model="datthree" placeholder="请选择">
          <el-option label="投诉日期" value=""></el-option>

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
      <el-button
        type="primary"
        icon="el-icon-search"
        @click="Myseach"
      ></el-button>
    </div>
    <!-- 图部分 -->
    <div class="category_chart">
      <div id="main1" class="main1"></div>
      <div id="main2" class="main2"></div>
    </div>
    <!-- 统计表格部分 -->
    <div class="category_statistics">
      <div class="category_statistics_top">
        <h6>科室投诉类别统计</h6>
      </div>
      <div class="category_statistics_table">
        <el-table :data="tableData" max-height="440" style="width: 100%">
          <el-table-column prop="id" label="序号"> </el-table-column>
          <el-table-column prop="title" label="科室名称"> </el-table-column>
          <el-table-column prop="fuwu" label="服务态度"> </el-table-column>
          <el-table-column prop="yh" label="医患沟通"> </el-table-column>
          <el-table-column prop="yf" label="医德医风"> </el-table-column>
          <el-table-column prop="fy" label="费用"> </el-table-column>
          <el-table-column prop="jszy" label="技术争议/并发症">
          </el-table-column>
          <el-table-column prop="system" label="核心制度"> </el-table-column>
          <el-table-column prop="hfyy" label="患方原因"> </el-table-column>
          <el-table-column prop="qt" label="其他"> </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="category_statistics_paging">
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
  </div>
</template>
<script>
// import AdminHead from './components/AdminHead'
import "@/views/H-Category/css.css";
// 引入service
import service from "@/service/index";
export default {
  components: {},

  data() {
    return {
      // 头部选择器
      options: [],
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
        // {
        //   value: "选项1",
        //   label: "投诉日期",
        // },
        {
          value: "选项1",
          label: "事发日期",
        },
      ],
      datthree: "",
      // 日期
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
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
      //类别
      colu: [
        // {
        //   costjf: "",
        //   dicjf: "",
        //   docjf: "",
        //   otherjf: "",
        //   patientsjf: "",
        //   sciencejf: "",
        //   systemjf: "",
        // },
      ],
      // 纠纷
      issue: [],
    };
  },

  methods: {
    // 搜索
    Myseach() {},
    // 柱状图
    drawChart() {
      //基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main1"));
      service.Censuscate().then((res) => {
        let seriesData = [];
        let seriesDatas = [];
        //获取到的数据需要转换成Json字符串,这里我也不是很明白，在控制台调试的时候，获取到的数据都是[object,Object]这样的格式，所以我只能转换一下
        let outdata = JSON.stringify(res.data.lbjf);
        let outdatas = JSON.stringify(res.data.lbts);
        //这里还需eval来处理一下字符串转为json对象，如此就能获取到数据了
        let xqo = eval("(" + outdata + ")");
        let xqos = eval("(" + outdatas + ")");

        for (var i in xqo) {
          seriesData.push(xqo[i]);
        }

        for (var i in xqos) {
          seriesDatas.push(xqos[i]);
        }
        myChart.setOption({
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
            right: "50%",
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
              data: seriesData,
            },
            {
              name: "纠纷",
              type: "bar",
              barWidth: "30%",
              data: seriesDatas,
            },
          ],
          color: ["#3aa1ff", "#4ecb73"],
          // }
        });
        // 指定图表的配置项和数据
        // let option = {
        //   tooltip: {
        //     trigger: "axis",
        //     axisPointer: {
        //       type: "cross",
        //       crossStyle: {
        //         // 控制鼠标经过的一条线
        //         color: "#fff",
        //       },
        //     },
        //   },
        //   title: {
        //     text: "投诉类别统计",
        //     // padding:'20px'
        //     padding: 20,
        //     y: "left",
        //   },
        //   // 控制表格上边的图例和解释
        //   legend: {
        //     icon: "rect", //形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
        //     itemWidth: 10, // 设置宽度
        //     itemHeight: 5, // 设置高度
        //     itemGap: 20, // 设置间距
        //     data: ["投诉", "纠纷"],

        //     textStyle: {
        //       //控制图例文字样式
        //       // color: '#c1dafc',
        //       // fontSize: '12'
        //     },
        //     right: "50%",
        //     top: "4%",
        //   },
        //   //控制x轴
        //   xAxis: [
        //     {
        //       type: "category",
        //       data: [
        //         "服务态度",
        //         "医患沟通",
        //         "费用",
        //         "技术争议",
        //         "核心制度",
        //         "患方原因",
        //         "其他",
        //       ],
        //       axisPointer: {
        //         type: "shadow",
        //       },
        //     },
        //   ],
        //   // 控制y轴
        //   yAxis: [
        //     {
        //       type: "value",
        //       // name: '单位：(°C)',
        //       min: 0,
        //       max: 40,
        //       // 每个相隔多少
        //       interval: 5,
        //       axisLabel: {
        //         formatter: "{value}",
        //       },
        //     },
        //   ],
        //   // 控制主要内容（）柱
        //   series: [
        //     {
        //       name: "投诉",
        //       type: "bar",
        //       //控制条形的宽度
        //       barWidth: "30%",
        //       data:seriesData
        //     },
        //     {
        //       name: "纠纷",
        //       type: "bar",
        //       barWidth: "30%",
        //       data: this.issue,
        //     },
        //   ],
        //   color: ["#3aa1ff", "#4ecb73"],
        // };
      });

      // 使用刚指定到的配置项和数据显示图表
      // myChart.setOption(option);
    },
    // 饼图
    drawChart1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main2"));
      service.Censuscate().then((res) => {
        console.log(res);
        let getData = [];
        //先进行赋值
        for (let i in res.data.zbtj) {
          var obj = new Object();
          obj.name = i;
          obj.value = parseInt(res.data.zbtj[i]);
          getData.push(obj);
        }
        console.log(getData);
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
            data: getData.name,
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
              // data: [
              //   { value: 30.16, name: "技术争议" },
              //   { value: 6.35, name: "患方原因" },
              //   { value: 11.11, name: "服务态度" },
              //   { value: 12.7, name: "医患沟通" },
              //   { value: 15.87, name: "医德医风" },
              //   { value: 23.81, name: "费用" },
              // ],
              data: getData,
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
      });
    },
  },
  mounted() {
    this.drawChart1();
    this.drawChart();
  },
  created() {
    service.CensusCate().then((res) => {
      this.category = res.data;
    });
    service.CensusDep().then((res) => {
      this.Department = res.data;
    });
    service.Censusdep().then((res) => {
      this.tableData = res.data;
    });
  },
};
</script>

<style lang="less" scoped></style>
