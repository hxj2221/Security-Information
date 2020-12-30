<template>
  <div>
    <div class="allManage">
      <!-- 顶部导航 -->
      <div class="nav">
        <ul>
          <li v-for="(item,index) in Nav" :key="item.index" v-bind:class="{bgColor:index==nowIndex}"
            @click="change(index)">{{item.name}}</li>
        </ul>
        <i class="el-icon-circle-plus-outline" @click="increase()"><span>新增</span></i>
      </div>
      <div class="content">
        <!-- 侧边导航 -->
        <div class="left">
          <ul>
            <li v-for="item in SideNav" :key="item.index">{{item.name}}</li>
          </ul>
        </div>
        <!-- 右边内容 -->
        <div class="right">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select search">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <el-table class="right_con" ref="singleTable" :data="tableData">
            <el-table-column type="index" label="序号">
            </el-table-column>
            <el-table-column property="field" label="字段">
            </el-table-column>
            <el-table-column property="date" label="创建时间">
            </el-table-column>
            <el-table-column property="name" label="创建人">
            </el-table-column>
            <el-table-column label="操作">
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
        <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000">
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