<template>
  <div>
    <div class="all">
      <!-- 顶部导航 -->
      <div class="nav">
        <ul>
          <li v-for="(item,index) in Nav" :key="item.index" v-bind:class="{bgColor:index==nowIndex}"
            @click="change(index)">{{item.name}}</li>
        </ul>
        <i class="el-icon-circle-plus-outline" @click="increase()"><span>新增</span></i>
      </div>
      <!-- 侧边导航 -->
      <div class="side_nav">
        <el-row :gutter="20">
          <el-col :span="4" :offset="0">
            <div class="left">
              <ul>
                <li v-for="item in SideNav" :key="item.index">{{item.name}}</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="20" :offset="0">
            <div class="right">
              <div class="search">
                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                  <el-button class="btn" slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
              <hr>
              <el-table ref="singleTable" :data="tableData" style="width: 100%;margin-top: 25px;">
                <el-table-column type="index" label="序号" width="80">
                </el-table-column>
                <el-table-column property="field" label="字段" width="300">
                </el-table-column>
                <el-table-column property="date" label="创建时间" width="300">
                </el-table-column>
                <el-table-column property="name" label="创建人" width="200">
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="edit()">编辑</el-button>
                    <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>

            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 分页 -->
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="100"
          layout="total, sizes, prev, pager, next, jumper" :total="40">
        </el-pagination>
      </div>
      <!-- 新增 -->
      <el-dialog title="新增字段" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="字段信息" required>
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
            <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="form.name">
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
  import './css/index.css'
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
        input3: '',
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
        currentPage4: 4,
        form: {
          name: '',
        },
        dialogFormVisible: false,
        dialogVisible:false,
      };
    },

    methods: {
      // 顶部导航
      change(index) {
        this.nowIndex = index;
      },
      // 表格操作
      // 编辑
      edit(){
        this.dialogVisible=!this.dialogVisible
      },
      // 删除
      handleClick(row) {
        console.log(row);
      },
      // 分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      // 新增
      increase() {
        this.dialogFormVisible = !this.dialogFormVisible
      }

    },
  };
</script>

<style lang="less" scoped></style>