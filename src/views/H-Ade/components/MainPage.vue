<template>
  <div class="mainBl">
    <!-- 头部按钮 -->
    <div class="header">
      <h4>不良事件</h4>
      <div class="btn">
        <el-button type="primary" size="medium" icon="el-icon-circle-plus" class="addAde" @click="Add()">新增
        </el-button>
        <el-button type="primary" size="medium" icon="iconfont el-icon-hospital-passwordexport" class="exportAde" @click="exportcom">导出</el-button>
      </div>
    </div>
    <!-- 检索 -->
    <div class="searchAll">
      <el-form ref="form">
        <div class="searchAll_search">
          <el-form-item label="患者姓名" label-width="80px">
            <el-input clearable v-model="patient_name" placeholder="请输入内容" @clear="clean"></el-input>
          </el-form-item>
          <el-form-item label="发生地点" label-width="80px">
            <el-select clearable v-model="occur_scene" placeholder="请选择" @clear="clean">
              <el-option label="请选择" value=""></el-option>
              <el-option v-for="item in options" :key="item.id" :label="item.title" :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="事发日期" label-width="80px">
            <el-date-picker style="width:240px" clearable @clear="clean" v-model="occur_time" type="daterange"
              range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd"
              value-format="yyyy-MM-dd" :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="searchAll_search">
          <el-form-item label="轻重程度" label-width="80px">
            <el-select clearable style="width: 562px;" v-model="degree_weight_id" placeholder="请选择" @clear="clean">
              <el-option label="请选择" value=""></el-option>
              <el-option v-for="item in options1" :key="item.id" :label="item.title" :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-button class="searchbtn" type="primary" icon="el-icon-search" @click="screen()"></el-button>
        </div>
      </el-form>
    </div>
    <!-- 内容 -->
    <div style="min-height:490px">
      <el-table class="elTable" max-height="490" :data="tableData" :header-cell-style="getRowClass">
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="event_num" label="事件编码" width="180">
        </el-table-column>
        <el-table-column prop="patient_name" label="患者姓名">
        </el-table-column>
        <el-table-column prop="sex" label="性别">
        </el-table-column>
        <el-table-column prop="age" label="年龄">
        </el-table-column>
        <el-table-column prop="occur_time" :formatter="getDate" label="事发日期" width="180">
        </el-table-column>
        <el-table-column prop="occurscene.title" label="发生场所">
        </el-table-column>
        <el-table-column prop="degreeweight.title" label="轻重程度" :show-overflow-tooltip='true'>
        </el-table-column>
        <el-table-column prop="create_time" label="上报时间" width="180">
        </el-table-column>
        <el-table-column prop="department.title" label="患者科室" :show-overflow-tooltip='true'>
        </el-table-column>
        <el-table-column prop="create_uid" label="上报人">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button style="color:#666ee8" @click="handleClick(scope.$index,scope.row)" type="text" size="small">查看
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页 -->
    <div class="paging">
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="currentChage" :current-page="currentPage4"
          :page-sizes="pageNumList" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
          :total="pageCount">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import service from "@/service/index";
  import moment from 'moment'
  export default {
    components: {},
    props: {},
    data() {
      return {
        // 检索
        patient_name: '', //患者姓名
        occur_time: [], // 事发日期
        starttime:'',//开始日期
        endtime:'',//结束日期
        occur_scene: '', //发生地点
        degree_weight_id: '', //轻重程度      
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        }, //时间限制
        options: [], //发生地点
        options1: [], //轻重程度
        tableData: [], //表格内容
        details: {}, //查看
        addcon: [], //新增里面的
        currentPage4: 1, //分页
        pageCount: 0, //总数量
        pageNumList: [8, 10, 20], //显示个数选择器
        pageSize: 8,
        eventNum: '', // 事件编码
      };
    },
    watch: {
      occur_time: function (val, oldVal) {
        if (val !== null) {
          this.starttime = val[0];
          this.endtime = val[1];
        } else {
          this.starttime = null;
          this.endtime = null;
        }
      },
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
        dataA[i].occurscen=dataA[i].occurscene.title
           dataA[i].degreeweigh=dataA[i].degreeweight.title
            dataA[i].departmen=dataA[i].department.title
            let data=this.formatDate(dataA[i].occur_time)
              dataA[i].occur_tim=this.initTime(data)
              dataB.push(dataA[i])
      }
      import('@/vendor/Export2Excel').then(excel => {
      const tHeader = ['事件编号', '患者姓名', '性别', '年龄/岁','事发日期','发生场所','轻重程度','上报时间','患者科室','上报人' ]
      const filterVal = ['event_num', 'patient_name', 'sex', 'age', 'occur_tim', 'occurscen', 'degreeweigh', 'create_time', 'departmen', 'create_uid' ]
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
        var date = new Date(cellValue * 1000);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        var minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        var second = date.getSeconds();
        second = minute < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
      },
      // 新增
      Add() {
        this.$emit('pageAdd')
        service.AdeSel().then(res => {
          if (res.code == 20010) {
            this.bus.$emit("eventNum", res.event_num)
          }
        })
      },
      // 查看
      handleClick(row, index) {
        let params = {
          id: index.id
        }
        service.badSee(params).then(res => {
          if (res.code == 20010) {
            this.$emit('pageDetail')
            this.details = res.data
            this.bus.$emit('detail', this.details)
          } 
        })
      },
      // 搜索事件
      screen() {
        if ((this.occur_time !== '' && this.occur_time !== null) || this
          .patient_name !== '' || this.occur_scene !== '' || this.degree_weight_id !== '') {
          let params = {
            patient_name: this.patient_name,
            starttime: this.starttime,
            endtime: this.endtime,
            occur_scene: this.occur_scene,
            degree_weight_id: this.degree_weight_id,
            pageNum: this.currentPage4,
            pageSize: this.pageSize
          }
          service.AdeSearch(params).then(res => {
            if (res.code == 20010) {
              this.tableData = res.data
              this.pageCount = res.allnews
            }
          })
        } else {
          let params = {
            pageNum: this.currentPage4,
            pageSize: this.pageSize
          }
          service.AdeList(params).then(res => {
            if (res.code == 20010) {
              this.tableData = res.data
              this.pageCount = res.allnews
            }
          })
        }
      },
      // 清除搜索
      clean() {
        let params = {
          patient_name: this.patient_name,
          starttime: this.starttime,
          endtime: this.endtime,
          occur_scene: this.occur_scene,
          degree_weight_id: this.degree_weight_id,
          pageNum: this.currentPage4,
          pageSize: this.pageSize
        }
        service.AdeSearch(params).then(res => {
          if (res.code == 20010) {
            this.tableData = res.data
            this.pageCount = res.allnews
          }
        })      
      },

      // 分页
      // 当前页
      currentChage(val) {
        this.currentPage4 = val
        if ((this.occur_time !== '' && this.occur_time !== null) || this
          .patient_name !== '' || this.occur_scene !== '' || this.degree_weight_id !== '') {
          let params = {
            patient_name: this.patient_name,
            starttime: this.starttime,
            endtime: this.endtime,
            occur_scene: this.occur_scene,
            degree_weight_id: this.degree_weight_id,
            pageNum: this.currentPage4,
            pageSize: this.pageSize
          }
          service.AdeSearch(params).then(res => {
            if (res.code == 20010) {
              this.tableData = res.data
              this.pageCount = res.allnews
            } 
          })
        } else {
          let params = {
            pageNum: this.currentPage4,
            pageSize: this.pageSize
          }
          service.AdeList(params).then(res => {
            if (res.code == 20010) {
              this.tableData = res.data
              this.pageCount = res.allnews
            }
          })
        }
      },
      // 每页条数
      handleSizeChange(val) {
        this.pageSize = val
        if ((this.occur_time !== '' && this.occur_time !== null) || this
          .patient_name !== '' || this.occur_scene !== '' || this.degree_weight_id !== '') {
          let params = {
            patient_name: this.patient_name,
            starttime: this.starttime,
            endtime: this.endtime,
            occur_scene: this.occur_scene,
            degree_weight_id: this.degree_weight_id,
            pageNum: this.currentPage4,
            pageSize: this.pageSize
          }
          service.AdeSearch(params).then(res => {
            if (res.code == 20010) {
              this.tableData = res.data
              this.pageCount = res.allnews
            }

          })
        } else {
          let params = {
            pageNum: this.currentPage4,
            pageSize: this.pageSize
          }
          service.AdeList(params).then(res => {
            if (res.code == 20010) {
              this.tableData = res.data
              this.pageCount = res.allnews
            } 

          })
        }
      },

    },
    created() {
      // 不良列表
      let params = {
        pageNum: this.currentPage4,
        pageSize: this.pageSize
      }
      service.AdeList(params).then(res => {
        // console.log(res)
          this.tableData = res.data
          this.pageCount = res.allnews
          this.options=res.address//不良发生地点
          this.options1=res.degree_weight//不良轻重程度
      })
    }
  }
</script>
<style>
</style>