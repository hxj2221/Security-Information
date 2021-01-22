<template>
  <div>
    <div class="allManage">
      <!-- 顶部导航 -->
      <div class="allManage_nav">
        <ul class="nav_list">
          <li class="list" v-for="(item,index) in Nav" :key="item.index" v-bind:class="{bgColor:index==nowIndex}"
            @click="change(index)">{{item.name}}</li>
        </ul>
        <el-button type="primary" icon="el-icon-circle-plus" @click="increase()">新增
        </el-button>
      </div>
      <!-- 内容 -->
        <Complain v-show="isShow"></Complain>
      <!-- 分页 -->
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="currentChage" :current-page="currentPage4"
          :page-sizes="pageNumList" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
          :total="pageCount">
        </el-pagination>
      </div>
      <!-- 新增 -->
      <el-dialog class="newly" title="新增字段" :visible.sync="dialogFormVisible">
        <el-form class="newly_con" :model="form">
          <el-form-item class="info" label="字段信息" required>
            <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="form.name">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 编辑 -->
      <el-dialog title="编辑字段" :visible.sync="dialogVisible">
        <el-form :model="form">
          <el-form-item label="字段信息" required>
            <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="form.name">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  // 引入css样式
  import './css/Dictionaries.css'

  import Complain from './components/Complain/content'

  import service from '@/service/index'


  export default {
    components: {
      Complain
    },
    data() {
      return {
        // 顶部导航
        Nav: [{
            name: '投诉纠纷'
          },
          {
            name: '不良信息'
          },
          {
            name: '患者信息'
          },
          {
            name: '其他'
          },
        ],
        nowIndex: 0,
        currentPage4: 1, //分页
        pageNumList: [8, 10, 20], //页数
        pageCount: 0, //总数量
        pageSize: 8, //默认条数
        // 编辑
        form: {
          name: '',
        },
        dialogFormVisible: false,
        dialogVisible: false,
        isShow:true,//切换内容
      };
    },
    
    methods: {
      // 顶部导航
      change(index) {
        this.nowIndex = index;
        console.log(index)
        this.isShow=!this.isShow

      },
      handleClick(tab, event) {
        console.log(tab, event);
      },

      // 表格操作

      // 编辑
      edit() {
        this.dialogVisible = !this.dialogVisible
      },
      // 删除
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      // 分页
      // 每页显示条数
      handleSizeChange(val) {
        console.log(val)
      },
      // 页面跳转
      currentChage(val) {
        console.log(val)
      },
      // 新增
      increase() {
        this.dialogFormVisible = !this.dialogFormVisible
      },
    },
  };
</script>

<style lang="less" scoped></style>