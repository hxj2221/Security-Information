<template>
  <div>
    <div class="allManage">
      <!-- 顶部导航 -->
      <div class="allManage_nav">
        <ul class="nav_list">
          <li class="list" v-for="(item,index) in Nav" :key="item.index" v-bind:class="{bgColor:index==nowIndex}"
            @click="change(index)">{{item.name}}</li>
        </ul>
        <i class="el-icon-circle-plus-outline" @click="increase()"><span>新增</span></i>
      </div>
      <div class="allManage_cont">
        <!-- 侧边导航 -->
        <div class="left">
          <ul class="side_nav">
            <li class="side_nav_list" v-for="item in SideNav" :key="item.index">{{item.name}}</li>
          </ul>
        </div>
        <!-- 右边内容 -->
        <div class="right">
          <el-input placeholder="请输入内容" v-model="search" class="input-with-select search">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <el-table class="right_con" ref="singleTable" :data="tableData" style="width:100%">
            <el-table-column type="index" label="序号" width="90">
            </el-table-column>
            <el-table-column property="field" label="字段" width="350">
            </el-table-column>
            <el-table-column property="date" label="创建时间" width="180">
            </el-table-column>
            <el-table-column property="name" label="创建人" width="180">
            </el-table-column>
            <el-table-column label="操作" width="180">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="edit()">编辑</el-button>
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <!-- 分页 -->
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="currentChage"
          :current-page="currentPage4" :page-sizes="pageNumList" :page-size="100"
          layout="total, sizes, prev, pager, next, jumper" :total="pageCount">
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
          <el-button style="background: #666EE8;
    border: #666EE8;" type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 编辑 -->
      <el-dialog title="编辑字段" :visible.sync="dialogVisible">
        <el-form :model="form">
          <el-form-item label="字段信息" required>
            <el-input type="textarea" placeholder="请输入内容" v-model="form.name">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button style="background: #666EE8;
    border: #666EE8;" type="primary" @click="dialogVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  // 引入css样式
  import './css/Dictionaries.css'
  // import AdminHead from './components/AdminHead'

  export default {
    components: {

    },

    data() {
      return {
        // 顶部导航
        Nav: [{
            name: '投诉纠纷分'
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
        // 左侧导航
        SideNav: [{
          name: '信息来源'
        }, {
          name: '临床医技科室'
        }, {
          name: '投诉人与患者关系'
        }, {
          name: '投诉类别'
        }, {
          name: '调查科室'
        }, {
          name: '抄送部门'
        }, {
          name: '审批操作'
        }, {
          name: '辅助检查'
        }, {
          name: '治疗意见'
        }, ],
        // 搜索框
        search: '',
        // 表格
        tableData: [{
          field: '口头陈诉',
          date: '2019-11-12 12:08:12',
          name: '王冕',
        }, {
          field: '医院电话投诉',
          date: '2019-11-12 12:08:12',
          name: '王小虎',
        }, {
          field: '书面投诉',
          date: '2019-11-12 12:08:12',
          name: '王小虎',
        }, {
          field: '省卫生热线12320',
          date: '2019-11-12 12:08:12',
          name: '王小虎',
        }, {
          field: '卫健委维权处',
          date: '2019-11-12 12:08:12',
          name: '王小虎',
        }, {
          field: '卫健委信访',
          date: '2019-11-12 12:08:12',
          name: '王小虎',
        }, {
          field: '书面投诉',
          date: '2019-11-12 12:08:12',
          name: '王小虎',
        }, {
          field: '省卫生热线12320',
          date: '2019-11-12 12:08:12',
          name: '王小虎',
        }, {
          field: '卫健委维权处',
          date: '2019-11-12 12:08:12',
          name: '王小虎',
        }, {
          field: '卫健委信访',
          date: '2019-11-12 12:08:12',
          name: '王小虎',
        }],
        currentPage4:1,//分页
        pageNumList:[8,10,20],//页数
        pageCount:0,//总数量
        pageSize:8,//默认条数
        // 编辑
        form: {
          name: '',
        },
        dialogFormVisible: false,
        dialogVisible: false,
      };
    },

    methods: {
      // 顶部导航
      change(index) {
        this.nowIndex = index;
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
      handleSizeChange(val){
        console.log(val)
      },
      // 页面跳转
      currentChage(val){
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