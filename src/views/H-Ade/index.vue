<template>
  <div class="all">
    <!-- 头部 -->
    <div class="header">
      <h4>不良事件</h4>
      <div class="btn">
        <i class="el-icon-circle-plus-outline" @click="dialogVisible = true">&nbsp;<span>新增不良</span></i>
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
    <!-- 新增弹框 -->
    <el-dialog :visible.sync="dialogVisible" width="60%" >
      <BLadd></BLadd>
      <div>
        <span slot="footer" class="dialog-footer">
        <i class="fa fa-file-o fa-2" aria-hidden="true" @click="dialogVisible = false"><span>提交</span></i>
        <i class="fa fa-reply fa-2" aria-hidden="true" @click="dialogVisible = false"><span>返回</span></i>
      </span>
      </div>
      
    </el-dialog>
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
        // 检索
        FormSearch:{},
        // 表格
        tableData: [],
        // 分页
        currentPage2: 5,
        // 新增弹框
        dialogVisible: false,
      };
    },

    methods: {
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