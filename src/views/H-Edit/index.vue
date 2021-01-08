<template>
  <div>
    <div class="H-edit">
      <div class="edit-top">
        <el-button type="primary" @click="add">添加权限</el-button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        :header-cell-style="getRowClass"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="date" label="名称" width="180"> </el-table-column>

        <el-table-column prop="address" label="备注"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="400">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >添加子级</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-dialog
          title="添加权限"
          :visible.sync="dialogVisible"
          width="width"
          :before-close="dialogBeforeClose">
          <div>
            <div>
              <span>权限名：</span> <el-input v-model="name" placeholder="请输入权限名" style="width:70%"></el-input>
            </div>
           
          </div>
          <div slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'',//权限名
      dialogVisible:false,
      tableData: [
        {
          id: 1,
          date: "首页",
          name: "王小虎",
          address: "这是首页权限",
          value: true,
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "登录",
          address: "登录 ",
          value: true,
        },
        {
          id: 3,
          date: "业务处理",
          name: "业务处理",
          address: "业务处理 ",
          value: true,
          children: [
            {
              id: 31,
              date: "投诉事件",
              name: "投诉事件",
              address: "投诉事件 ",
              value: true,
            },
            {
              id: 32,
              date: "不良事件",
              name: "王小虎",
              address: "不良事件 ",
              value: true,
              children: [
                {
                  id: 42,
                  date: "添加不良",
                  name: "添加不良",
                  address: "添加不良 ",
                },
                {
                  id: 424,
                  date: "删除",
                  name: "删除",
                  address: "删除 ",
                },
                {
                  id: 7245,
                  date: "查看",
                  name: "查看",
                  address: "查看 ",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    // 添加权限
    add(){
      this.dialogVisible=true
    },
    dialogBeforeClose(){
       this.dialogVisible=false
    },
    handleClick() {},
      getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#c2c5f6;color:#000";
      } else {
        return "";
      }
    },
  },

};
</script>

<style scoped>
@import "edit.css";
</style>
