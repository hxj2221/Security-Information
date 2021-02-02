<template>
  <div class="connent_all">
    <!-- 头部内容 -->
    <div class="connent_top">
      <div class="connent_top_left">
        <h6>医患沟通记录</h6>
      </div>
      <div class="connent_top_right">
        <el-button type="primary" size="medium" icon="el-icon-circle-plus" @click="addRecord()">新增
        </el-button>
        <el-button type="primary" size="medium" icon="iconfont el-icon-hospital-passwordexport" @click="exportcom">导出</el-button>
      </div>
    </div>
    <hr class="connent_hr" />
    <!-- 表单部分 -->
    <div class="connent_Tableall">
      <!-- 表单搜素部分 -->
      <div class="seach">
        <p>沟通日期</p>
        <div class="block">
          <el-date-picker v-model="seachTime" type="daterange" align="right" unlink-panels range-separator="至" style="width:100%"
            start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
          </el-date-picker>
          <el-input v-model="input" maxlength="10" placeholder="输入患者姓名"></el-input>
          <el-button type="primary" icon="el-icon-search" @click="searchBtn()"></el-button>
        </div>
      </div>
      <!-- 表单表格部分 -->
      <div class="connent_myTable">
        <!--  -->
        <el-table :data="tableData" max-height="545" :header-cell-style="getRowClass">
          <el-table-column label="序号" type="index" width="50"> </el-table-column>

          <el-table-column label="记录编号" prop="number" width="150"> </el-table-column>

          <el-table-column label="患者姓名" prop="patient_name">
          </el-table-column>

          <el-table-column label="主持人" prop="hosp_name"> </el-table-column>

          <el-table-column label="记录人" prop="note_taker"> </el-table-column>

          <el-table-column label="沟通日期" prop="communicate_time" :formatter="getDate">
          </el-table-column>

          <el-table-column label="关联投诉编号" prop="event_number">
          </el-table-column>

          <el-table-column label="主要沟通事项" prop="record_of_communication" :show-overflow-tooltip="true">
          </el-table-column>

          <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">
              <el-button style="color:#666ee8" type="text" size="small" @click="details(scope.$index, scope.row)">记录详情
              </el-button>
              <el-button style="color:#666ee8" type="text" size="small" @click="complaint(scope.$index, scope.row)">投诉详情
              </el-button>
              <el-button style="color:#ff0000" type="text" size="small" @click="handleDel(scope.$index, tableData)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="connent_paging">
        <div class="block">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="currentPage" :page-sizes="numberlist" :page-size="num"
            layout="total, sizes, prev, pager, next, jumper" :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 引用css
  import "@/views/H-Connect/component/connent/css.css";
  // 引用service
  import service from "@/service/index";
  export default {
    data() {
      return {
        tableData: [],
        pickerOptions: {
          shortcuts: [{
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
            }
          ]
        },
        seachTime: [], //选择时间
        input: "", //input内容
        beginDate: "",
        endDate: "",
        // 分页
        numberlist: [8, 10, 20],
        currentPage: 1,
        total: 0,
        num: 8,
      }
    },
    methods: {
        formatDate(date) {
        var date = new Date(date)*1000;
        return date;
      },
   initTime(t) {
      let d=new Date(t).getTime(new Date(t));
      let time= new Date(d + 8 * 3600 * 1000).toJSON().substr(0, 19).replace('T', ' ').replace(/\./g, '-');
      return time;
    },
         // 导出事件
    exportcom() {  
      let dataA =this.tableData
       let dataB=new Array()
      for(let i =0;i<dataA.length;i++){
            let data=this.formatDate(dataA[i].communicate_time)
              dataA[i].communicate_tim=this.initTime(data)
              dataB.push(dataA[i])
      }
      console.log(dataB)
      import('@/vendor/Export2Excel').then(excel => {
      const tHeader = ['记录编号', '患者姓名', '主持人', '记录人','沟通日期','关联投诉编号','主要沟通事项']
      const filterVal = ['number', 'patient_name', 'hosp_name', 'note_taker', 'communicate_tim', 'event_number', 'record_of_communication']
      const list = dataB
      const data = this.formatJson(filterVal, list)
      excel.export_json_to_excel({
        header: tHeader,
        data,
        filename: '业务列表',
        autoWidth: true,
        bookType: 'xlsx'
      })
    })
      
    },
   formatJson(filterVal, jsonData) {
    return jsonData.map(v => filterVal.map(j => {
      return v[j]
    }))
   },
      // 设置表头颜色
      getRowClass({
        rowIndex
      }) {
        if (rowIndex == 0) {
          return "background:#c2c5f6;color:#000";
        } else {
          return "";
        }
      },
      // 时间戳转为日期格式
      getDate: function (row, column, cellValue, index) {
        // console.log(new Date(cellValue * 1000))
        var date = new Date(cellValue * 1000);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        // var h = date.getHours();
        // var minute = date.getMinutes();
        // minute = minute < 10 ? ('0' + minute) : minute;
        // var second = date.getSeconds();
        // second = minute < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d ;

        // return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
      },
      // 删除
      handleDel(val, row) {
        let params = {
          id: row[val].id,
        };
        service.patientDel(params).then((res) => {
          console.log(res)
          if (res.code == 20010) {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
              })
              .then(() => {
                this.$message({
                  type: "success",
                  message: "删除成功!",
                  delete: row.splice(val, 1),
                  duration: 1000,
                });
              })
              .catch(() => {
                this.$message({
                  type: "info",
                  message: "已取消删除",
                  duration: 1000,
                });
              });
          }
        });
      },
      // 搜索
      searchBtn() {
        let data = {
          starttime: this.beginDate,
          endtime: this.endDate,
          patient_name: this.input,
          pageNum: this.currentPage,
          pageSize: this.number,
        };
        service.seachpag(data).then((res) => {
          this.tableData = this.tableDatas = res.data;
          this.total = res.allNews;
        });
      },
      //  分页
      handleSizeChange(val) {
        this.num = val;
        let data = {
          pageSize: val, //每页几条
          pageNum: this.currentPage, //第几页
        };
        service.patientList(data).then((res) => {
          this.tableData = res.data;
          this.total = res.allNews;
        });
      },
      //
      handleCurrentChange(val) {
        this.currentPage = val;
        let data = {
          pageSize: this.num,
          pageNum: this.currentPage,
        };
        service.patientList(data).then((res) => {
          this.tableData = res.data;
          this.total = res.allNews;
        });
      },

      // 新增记录
      addRecord() {
        service.selDep().then((res) => {
          this.bus.$emit("selDep", res);
          this.$emit("abcClick");
        });
      },
      // 记录详情
      details(val, row) {
        let data = {
          id: row.id,
        };
        service.details(data).then((res) => {
          this.bus.$emit("details", res);
          this.$emit("abClick");
        });
        // this.$emit("abClick");
      },
      //投诉详情
      complaint() {
        this.$router.push("/Complaints");
      },

    },
    watch: {
      seachTime: function (val, oldVal) {
        if (val !== null) {
          this.beginDate = val[0];
          this.endDate = val[1];
        } else {
          this.beginDate = null;
          this.endDate = null;
        }
      },
    },
    created() {
      let number=this.$route.query.event_number
      if(number){
        service.comtocon(number).then((res) => {
        this.tableData = res.data;
        this.total = res.allNews;
      });
      }
      else{
       let params = {
        pageSize: this.num,
        pageNum: this.currentPage,
      };
      service.patientList(params).then((res) => {
        this.tableData = res.data;
        this.total = res.allNews;
      });
      }
     
    },
  };
</script>

<style lang="less" scoped></style>