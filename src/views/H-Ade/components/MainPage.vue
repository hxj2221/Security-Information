<template>
  <div class="mainBl">
    <!-- 头部按钮 -->
    <div class="header">
      <h4>不良事件</h4>
      <div class="btn">
        <i class="el-icon-circle-plus-outline" @click="Add()">&nbsp;<span>新增不良</span></i>
        <i class="fa fa-sign-in" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;<span>导出</span></i>
      </div>
    </div>
    <!-- 检索 -->
    <div class="searchAll">
      <el-form ref="form" :model="search">
        <div class="searchAll_search">
          <el-form-item label="患者姓名">
            <el-input v-model="search.patient_name" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="发生地点">
            <el-select v-model="search.occur_scene" placeholder="请选择">
              <el-option v-for="item in options" :key="item.id" :label="item.title" :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="事发日期">
            <el-date-picker format="yyyy-MM-dd" value-format="yyyy-MM-dd" v-model="search.starttime" type="date"
              placeholder="开始日期时间" :picker-options="start_Date" style="width:162px">
            </el-date-picker>
            --
            <el-date-picker format="yyyy-MM-dd" value-format="yyyy-MM-dd" v-model="search.endtime" type="date"
              placeholder="结束日期时间" :picker-options="end_Date" style="width:162px">
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="searchAll_search">
          <el-form-item label="轻重程度">
            <el-select style="width: 562px;" v-model="search.degree_weight_id" placeholder="请选择">
              <el-option v-for="item in options1" :key="item.id" :label="item.title" :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-button class="searchbtn" type="primary" icon="el-icon-search" @click="screen()"></el-button>
        </div>
      </el-form>
    </div>
    <!-- 内容 -->
    <el-table class="elTable" :data="tableData">
      <el-table-column prop="id" label="序号">
      </el-table-column>
      <el-table-column prop="event_num" label="事件编码">
      </el-table-column>
      <el-table-column prop="patient_name" label="患者姓名">
      </el-table-column>
      <el-table-column prop="sex" label="性别">
      </el-table-column>
      <el-table-column prop="age" label="年龄">
      </el-table-column>
      <el-table-column prop="occur_time" :formatter="getdate" label="事发日期" width="150">
      </el-table-column>
      <el-table-column prop="occur_scene" label="发生场所">
      </el-table-column>
      <el-table-column prop="degree_weight_id" label="轻重程度" :show-overflow-tooltip='true'>
      </el-table-column>
      <el-table-column prop="create_time" label="上报时间" width="150">
      </el-table-column>
      <el-table-column prop="department_id" label="患者科室">
      </el-table-column>
      <el-table-column prop="create_uid" label="上报人">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.$index,scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="paging">
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="currentChage"
          :current-page="currentPage4" :page-sizes="[8,10,20]" :page-size="100"
          layout="total, sizes, prev, pager, next, jumper" :total="pageCount">
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
        search: {
          patient_name: '',//患者姓名
          starttime: '',//开始日期
          endtime: '',//结束日期
          occur_scene: '',//发生地点
          degree_weight_id: ''//轻重程度
        },
        start_Date: { //时间限制
          disabledDate: time => {
            return time.getTime() > Date.now();
          }
        },
        end_Date: {
          disabledDate: time => {
            return time.getTime() > Date.now();
          }
        },
        options: [], //发生地点
        options1: [], //轻重程度
        tableData: [], //表格内容
        details: {}, //查看
        addcon: [], //新增里面的
        currentPage4: 1,//分页
        pages:'',
        pageSize:8,
        pageCount:0,
        eventNum:'',// 事件编码
      };
    },
    methods: {
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
          console.log(res)
          if (res.code == 20010) {
            this.$emit('pageDetail')
            this.details = res
            this.bus.$emit('detail', this.details)
          }
        })
      },
      // 搜索事件
      screen() {
        let params=this.search
        service.AdeSearch(params).then(res=>{
          console.log(res)
          this.tableData=res.data
        })

      },
      //时间格式化 
      getdate: function (row, column) {
        var date = row[column.property];
        if (date == undefined) {
          return "";
        }
        return moment(date).format("YYYY-MM-DD HH:mm:ss");
      },
      // 分页
      currentChage(current){
        let params={
          pageNum:current,
          pageSize:this.pageSize,
          patient_name: this.search.patient_name,
          starttime: this.search.starttime,
          endtime: this.search.endtime,
          occur_scene: this.search.occur_scene,
          degree_weight_id:this.search.degree_weight_id
        }
        service.AdeList(params).then(res=>{
          // console.log(res)
          this.tableData=res.data
        })
      },
      handleSizeChange(val) {
        this.pages=val
        let params={
          pageSize:this.pages,
          pageNum:this.pageNum
        }
        // console.log(params)
        service.AdeList(params).then(res=>{
          // console.log(res)
          this.tableData=res.data
        })
        // console.log(`每页 ${val} 条`);
      },
   
    },
    created() {
      // 不良列表
      let params={
        pageNum:1,
        pageSize:this.pageSize
      }
      // console.log(params)
      service.AdeList(params).then(res => {
        // console.log(res)
        this.tableData = res.data 
      })
      // 总数
     
      service.AdeList(this.pageSize,'').then(res => {
        // console.log(res)
        this.pageCount = res.data.length 
      })
      // 下拉框内容
      service.AdeSel().then(res => {
        // console.log(res)
        this.options = res.address
        this.options1 = res.degree_weight
      })
    },
  }
</script>
<style>
</style>