<template>
  <div class="mainBl">
    <!-- 头部按钮 -->
    <div class="header">
      <h4>不良事件</h4>
      <div class="btn">
        <el-button type="primary" icon="el-icon-circle-plus" class="addAde" @click="Add()" >新增
        </el-button>
        <el-button type="primary" icon="iconfont el-icon-hospital-passwordexport" class="exportAde">导出</el-button>
      </div>
    </div>
    <!-- 检索 -->
    <div class="searchAll">
      <el-form ref="form">
        <div class="searchAll_search">
          <el-form-item label="患者姓名" label-width="80px">
            <el-input clearable v-model="patient_name" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="发生地点" label-width="80px">
            <el-select clearable v-model="occur_scene" placeholder="请选择">
              <el-option label="请选择" value=""></el-option>
              <el-option v-for="item in options" :key="item.id" :label="item.title" :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="事发日期" label-width="80px">
            <el-date-picker style="width:240px" v-model="occur_time" type="daterange" range-separator="至"
              start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="searchAll_search">
          <el-form-item label="轻重程度" label-width="80px">
            <el-select clearable style="width: 562px;" v-model="degree_weight_id" placeholder="请选择">
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
    <el-table class="elTable" :data="tableData" :header-cell-style="getRowClass">
      <el-table-column type="index" label="序号">
      </el-table-column>
      <el-table-column prop="event_num" label="事件编码" width="180">
      </el-table-column>
      <el-table-column prop="patient_name" label="患者姓名">
      </el-table-column>
      <el-table-column prop="sex" label="性别">
      </el-table-column>
      <el-table-column prop="age" label="年龄">
      </el-table-column>
      <el-table-column prop="occur_time" :formatter="getDate" label="事发日期" width="150">
      </el-table-column>
      <el-table-column prop="occurscene.title" label="发生场所">
      </el-table-column>
      <el-table-column prop="degreeweight.title" label="轻重程度" :show-overflow-tooltip='true'>
      </el-table-column>
      <el-table-column prop="create_time" label="上报时间" width="150">
      </el-table-column>
      <el-table-column prop="department.title" label="患者科室">
      </el-table-column>
      <el-table-column prop="create_uid" label="上报人">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.$index,scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
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
        occur_time: '', // 事发日期
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
    methods: {
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
      },
      // 查看
      handleClick(row, index) {
        let params = {
          id: index.id
        }
        service.badSee(params).then(res => {
          // console.log(res)
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
          // console.log(this.occur_time)
          let params = {
            patient_name: this.patient_name,
            starttime: this.occur_time[0],
            endtime: this.occur_time[1],
            occur_scene: this.occur_scene,
            degree_weight_id: this.degree_weight_id,
            pageNum: this.currentPage4,
            pageSize: this.pageSize
          }
          // console.log(params)
          service.AdeSearch(params).then(res => {
            // console.log(res)
            this.tableData = res.data
            this.pageCount = res.allnews
          })
        } else {
          let params = {
            pageNum: this.currentPage4,
            pageSize: this.pageSize
          }
          service.AdeList(params).then(res => {
            // console.log(res)
            this.tableData = res.data
            this.pageCount = res.allnews
          })
        }
      },

      // 分页
      // 当前页
      currentChage(val) {
        // console.log(val)
        this.currentPage4 = val
        if ((this.occur_time !== '' && this.occur_time !== null) || this
          .patient_name !== '' || this.occur_scene !== '' || this.degree_weight_id !== '') {
          let params = {
            patient_name: this.patient_name,
            starttime: this.occur_time[0],
            endtime: this.occur_time[1],
            occur_scene: this.occur_scene,
            degree_weight_id: this.degree_weight_id,
            pageNum: this.currentPage4,
            pageSize: this.pageSize
          }
          service.AdeSearch(params).then(res => {
            // console.log(res)
            this.tableData = res.data
            this.pageCount = res.allnews
          })
        } else {
          let params = {
            pageNum: this.currentPage4,
            pageSize: this.pageSize
          }
          service.AdeList(params).then(res => {
            // console.log(res)
            this.tableData = res.data
            this.pageCount = res.allnews
          })
        }
      },
      // 每页条数
      handleSizeChange(val) {
        // console.log(val)
        this.pageSize = val
        if ((this.occur_time !== '' && this.occur_time !== null) || this
          .patient_name !== '' || this.occur_scene !== '' || this.degree_weight_id !== '') {
          let params = {
            patient_name: this.patient_name,
            starttime: this.occur_time[0],
            endtime: this.occur_time[1],
            occur_scene: this.occur_scene,
            degree_weight_id: this.degree_weight_id,
            pageNum: this.currentPage4,
            pageSize: this.pageSize
          }
          service.AdeSearch(params).then(res => {
            // console.log(res)
            this.tableData = res.data
            this.pageCount = res.allnews
          })
        } else {
          let params = {
            pageNum: this.currentPage4,
            pageSize: this.pageSize
          }
          service.AdeList(params).then(res => {
            // console.log(res)
            this.tableData = res.data
            this.pageCount = res.allnews
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
      })
      // 下拉框内容
      service.AdeSel().then(res => {
        // console.log(res)
        this.options = res.address
        this.options1 = res.degree_weight
      })
    }
  }
</script>
<style>
</style>