<template>
    <div class="all" >
      <div class="Main" v-show="MainShow">
        <!-- 头部 -->
      <div class="header">
        <h4>不良事件</h4>
        <div class="btn">
          <i class="el-icon-circle-plus-outline" @click="Add()">&nbsp;<span>新增不良</span></i>
          <i class="fa fa-sign-in" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;<span>导出</span></i>
        </div>
      </div>
      <!-- 检索 -->
      <form-search :search="FormSearch"></form-search>
      <!-- 表格内容 -->
      <table-data :tableData='tableData'></table-data>
      <!-- 分页 -->
      <div class="block page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page.sync="currentPage2" :page-sizes="[10, 20, 30, 40]" :page-size="10"
          layout="sizes, prev, pager, next" :total="1000">
        </el-pagination>
      </div>
      </div>
    <!-- 新增不良 -->
    <BLadd v-show="AddShow" @Main="MainPage()"></BLadd>
  </div>

</template>

<script>
  // import AdminHead from './components/AdminHead'
  import './css/index.css'
  // 引入不良事件记录
  import TableData from './components/Table';
  import BLadd from './components/BLadd';
  import FormSearch from './components/search'
  export default {
    components: {
      TableData,
      BLadd,
      FormSearch
    },

    data() {
      return {
        // 主页
        MainShow:true,
        // 新增
        AddShow: false,
        // 检索
        FormSearch: {},
        // 表格
        tableData: [],
        // 分页
        currentPage2: 5,
      };
    },

    methods: {
      // 让主页面显示
      MainPage(){
        this.MainShow=true
      },
      // 新增
      Add() {
        this.AddShow = !this.AddShow
        this.MainShow=!this.MainShow
      },
      // 分页 
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

    },
  };
</script>

<style lang="less" scoped>
</style>