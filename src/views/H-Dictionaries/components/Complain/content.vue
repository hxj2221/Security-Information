<template>
  <div>
    <div class="allManage_cont">
      <el-row type="flex" class="row-bg" justify="space-around">
        <!-- 侧边导航 -->
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <div class="left">
              <ul class="side_nav">
                <li class="side_nav_list" v-for="(item,index) in SideNav" :key="item.type"
                  v-bind:class="{NavbgColor:index==nowIndex}" @click="change(index,item)">{{item.name}}</li>
              </ul>
            </div>
          </div>
        </el-col>
        <!-- 右边内容 -->
        <el-col :span="19">
          <div class="grid-content bg-purple-light">
            <div class="right">
              <el-input placeholder="请输入内容" v-model="search" class="input-with-select search">
                <el-button slot="append" icon="el-icon-search" @click="searchCon"></el-button>
              </el-input>
              <el-table class="right_con" ref="singleTable" max-height="548" :header-cell-style="getRowClass"
                :data="tableData">
                <el-table-column type="index" label="序号" width="50">
                </el-table-column>
                <el-table-column prop="title" label="字段">
                </el-table-column>
                <el-table-column prop="update_time" label="创建时间">
                </el-table-column>
                <el-table-column prop="username.name" label="创建人">
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button class="edit" type="text" size="small" @click="edit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button class="del" @click.native.prevent="deleteRow(scope.$index, tableData)" type="text"
                      size="small">删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- 编辑 -->
      <el-dialog title="编辑字段" :visible.sync="dialogVisible">
        <el-form :model="form">
          <el-form-item label="字段信息" required>
            <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="form.title">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="sure">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import '../../css/Dictionaries.css'

  import service from '@/service/index'
  export default {
    components: {},
    props: {
      // tableData: Array
    },
    data() {
      return {
        search: '', //搜索
        SideNav: [{
          name: '投诉方式（来源）',
          type:1
        }, {
          name: '事件状态',
          type:2
        }, {
          name: '与患者关系',
          type:3
        }, {
          name: '投诉类别',
          type:4
        }, {
          name: '事件性质',
          type:5
        }, ],
        tableData:[],
        // 编辑
        form: {
          title: '',
        },
        dialogVisible: false,
        nowIndex: 0,
      };
    },
    created(){
      let params={
        type:this.SideNav[0].type
      }
      service.DicList(params).then(res=>{
        if(res.code==20010){
          this.tableData=res.data
        }
      });
    },
    methods: {
      // 搜索
      searchCon() {
        
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
      // 导航
      change(index,item) {
        this.nowIndex = index;
        let params={
          type:item.type
        }
        service.DicList(params).then(res=>{
          this.tableData=res.data
        })
      },
      // 编辑
      edit(index, row) {
        this.dialogVisible = !this.dialogVisible
        this.form = row
      },
      // 确认更改
      sure() {
        let params = {
          title: this.form.title,
          type: this.form.type,
          id: this.form.id
        }
        service.DicEdit(params).then(res => {
          if (res.code == 20010) {
            this.$message({
              message: '编辑成功',
              type: 'success',
              duration: 1000,
            });
            this.dialogVisible = false
          } 
        })
      },
      // 删除
      deleteRow(val, row) {
        let params = {
          id: row[val].id
        }
        service.DicDel(params).then(res => {
          if (res.code == 20010) {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
              })
              .then(() => {
                this.$message({
                  type: "success",
                  message: "删除成功!",
                  delete: row.splice(val, 1),
                  duration: 1000,
                });
              })
              .catch(() => {
                this.$message({
                  type: "info",
                  message: "已取消删除",
                  duration: 1000,
                });
              });
          }
        })
      },
    },
  }
</script>
<style>
</style>