<template>
  <div>
<<<<<<< HEAD
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
=======
    <div class="addstaffall" v-if="showpow">
      <!-- <headpow></headpow> -->
      <div class="roleaddThre">
        <span class="roleaddSpan">权限管理</span>
        <div style="margin-right: 10px">
          <el-button class="roleaddb" @click="addpower">新增</el-button>
          <el-button class="roleaddgr" @click="roleaddvueyes">保存</el-button>
          <el-button class="roleaddb" @click="roleaddvueno">返回</el-button>
        </div>
      </div>
      <div>
        <p
          style="
            display: flex;
            margin-left: 15px;
            font-size: 20px;
            color: #858bed;
            font-weight: bold;
          "
        >
          权限分配
        </p>
        <div class="roleF">
          <table class="roleTab">
            <tr style="background-color: #c2c5f6">
              <td style="margin-left: 83px">
                <input type="checkbox" id="all-checked" /><span
                  style="font-size: 14px; margin-left: 5px"
                  >模块</span
                >
                <span style="font-size: 14px; margin-left: 42px">功能</span>
              </td>
            </tr>
            <tr v-for="data in powdata" :key="data.id">
              <td class="roleTd">
                <span style="font-size: 14px">
                  <input type="checkbox" value="" :id="data.name" />
                  {{ data.name }}
                </span>

                <span
                  v-for="item in data._child"
                  :key="item.id"
                  style="font-size: 14px; margin-left: 30px"
                >
                  <input
                    type="checkbox"
                    :value="item"
                    v-model="data.selected"
                    :id="item.id"
                  />
                  {{ item.name }}
                </span>
              </td>
            </tr>
          </table>
        </div>
        <!-- 新增-->
>>>>>>> 7060c46ef8549151ce232acdaf393f8d7cfdd281
      </div>
    </div>
    <addpow v-show="addpow"></addpow>
  </div>
</template>

<script>
//import { editpower } from "../../network/H-edit";
import { addpower } from "../../network/H-edit";
import addpow from "./component/addpow";
export default {
  components: { addpow },
  data() {
    return {
<<<<<<< HEAD
      name:'',//权限名
      dialogVisible:false,
      tableData: [
=======
      showpow: true,
      addpow: false,
      radio: 3,
      rolecreate: "",
      roleNameipt: "",
      valuestatus: 1,
      powdata: [],
      datas: [
>>>>>>> 7060c46ef8549151ce232acdaf393f8d7cfdd281
        {
          id: 1,
          date: "首页",
          name: "王小虎",
          address: "这是首页权限",
          value: true,
        },
<<<<<<< HEAD
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
=======
>>>>>>> 7060c46ef8549151ce232acdaf393f8d7cfdd281
      ],
    };
  },
  created() {
    addpower().then((res) => {
      console.log(res.data.data);
      this.powdata = res.data.data;
    });
  },
  methods: {
<<<<<<< HEAD
    // 添加权限
    add(){
      this.dialogVisible=true
=======
    addpower() {
      this.showpow = false;
      this.addpow = true;
    },
    //   保存
    roleaddvueyes() {
      const loading = this.$loading({
        lock: true,
        text: "保存中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
      console.log();
      this.$router.push("/Role");
>>>>>>> 7060c46ef8549151ce232acdaf393f8d7cfdd281
    },
    dialogBeforeClose(){
       this.dialogVisible=false
    },
<<<<<<< HEAD
    handleClick() {},
      getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#c2c5f6;color:#000";
      } else {
        return "";
      }
=======
    // //   模块功能
    // isTitleChecked(data) {
    //   var _selected = data.selected;
    //   var _name = data.name;
    //   // 验证selected中是否含有全部的item的id 如果是 证明title要选中
    //   return _name.every(function (item) {
    //     return _selected.indexOf(item) != -1;
    //   });
    // },
    // changeTitleChecked(data, event) {
    //   if (event.target.checked === true) {
    //     data.name.forEach(function (item) {
    //       data.selected.indexOf(item) === -1 && data.selected.push(item);
    //     });
    //     console.log(data.name);
    //   } else {
    //     data.selected = [];
    //   }
    // },
    // changeAllChecked(event) {
    //   if (event.target.checked === true) {
    //     this.datas.forEach(function (data) {
    //       data.name.forEach(function (item) {
    //         data.selected.indexOf(item) === -1 && data.selected.push(item);
    //       });
    //       console.log(data.id);
    //     });
    //   } else {
    //     this.datas.forEach(function (data) {
    //       data.selected = [];
    //     });
    //   }
    // },
    // isAllChecked() {
    //   return this.datas.every(function (data) {
    //     return data.selected.length === data.name.length;
    //   });
    // },
    changesonc(e) {
      console.log(e);
    },
    jsmc() {
      console.log(this.roleNameipt);
>>>>>>> 7060c46ef8549151ce232acdaf393f8d7cfdd281
    },
  },

};
</script>

<style scoped>
@import "edit.css";
</style>
