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
            <el-input v-model="search.name" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="发生地点">
            <el-select v-model="search.value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="事发日期">
            <el-date-picker v-model="search.date" type="daterange" align="right" unlink-panels range-separator="至"
              start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="search">
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="searchAll_search">
          <el-form-item label="轻重程度">
            <el-select style="width: 562px;" v-model="search.value1" placeholder="请选择">
              <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
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
      <el-table-column prop="serialNum" label="事件编码">
      </el-table-column>
      <el-table-column prop="patient_name" label="患者姓名">
      </el-table-column>
      <el-table-column prop="sex" label="性别">
      </el-table-column>
      <el-table-column prop="age" label="年龄">
      </el-table-column>
      <el-table-column prop="occur_time" label="事发日期" width="150" >
      </el-table-column>
      <el-table-column prop="occur_scene" label="发生场所" >
      </el-table-column>
      <el-table-column prop="degree_weight_id" label="轻重程度" >
      </el-table-column>
      <el-table-column prop="create_time" label="上报时间" width="150">
      </el-table-column>
      <el-table-column prop="department_id"  label="患者科室" >
      </el-table-column>
      <el-table-column prop="create_uid" label="上报人" >
      </el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.$index,scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="paging">
      <el-pagination :page-size="10" :pager-count="11" layout="prev, pager, next" :total="tableData.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import service from "@/service/index";
  export default {
    components: {},
    props: {},
    data() {
      return {
        // 检索
        search: {
          name: '',
          date: '',
          value: '',
          value1: ''
        },
        options: [{
            value: '选项1',
            label: '急诊'
          }, {
            value: '选项2',
            label: '门诊'
          }, {
            value: '选项3',
            label: '病房部'
          }, {
            value: '选项4',
            label: '手术室'
          }, {
            value: '选项5',
            label: '医技检查室'
          }, {
            value: '选项6',
            label: '后勤区域'
          }, {
            value: '选项7',
            label: '其他'
          }],
        options1: [{
            value: '选项1',
            label: 'A级：客观环境或条件可能引发不良事件（隐患）'
          }, {
            value: '选项2',
            label: 'B级：发生但未累及患者'
          }, {
            value: '选项3',
            label: 'C级：累及到患者，但没有造成伤害'
          }, {
            value: '选项4',
            label: 'D级：累及到患者，需要进行监测以确保患者不被伤害，或需通过干预阻止伤害发生'
          }, {
            value: '选项5',
            label: 'E级：造成患者暂时性伤害，并需要进行治疗或干预'
          }, {
            value: '选项6',
            label: 'F级：造成患者暂时性伤害，并需要住院或延长住院时间'
          }, {
            value: '选项7',
            label: 'G级：造成患者永久性伤害'
          }, {
            value: '选项8',
            label: 'H级：导致患者需要治疗挽救生命'
          }, {
            value: '选项9',
            label: 'I级：导致患者死亡'
          }, ],
        // 内容
        tableData: [],
        details:{},//查看
        addcon:[],//新增里面的
      };
    },
    methods: {
      // 新增
      Add() {
        this.$emit('pageAdd')
      },
      // 查看
      handleClick(row,index) {
        // console.log(index.id)
        let params={
          id:index.id
        }
        service.badSee(params).then(res=>{
          console.log(res)
          if(res.code==20010){
            this.$emit('pageDetail')
            this.details=res.data
            this.bus.$emit('detail',this.details)
          }
        })
      },
      // 搜索事件
      screen(){
        console.log(this.search)
      }
      
    },
    created(){
      // 不良列表
     service.AdeList().then(res=>{
        this.tableData=res.data
      })
      
    //   // // 轻重程度
    //   service.Weight().then(res=>{
    //     console.log(res)
    //   })
      
    }
  }
</script>
<style>
</style>