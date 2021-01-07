<template>
  <div>
    <div class="rolealBg" v-if="rolevue">
      <headpow></headpow>
      <div class="roleIptsech">
        <el-input
          v-model="search"
          class="roleNameIpt"
          placeholder="请输入内容"
        ></el-input>
        <el-button class="staffNamesch" icon="el-icon-search">搜索</el-button>
      </div>
      <el-table
        :data="tables"
        tooltip-effect="dark"
        height="61.7%"
        style="width: 90%; margin-left: 5%"
        :header-cell-style="{ background: '#C2C5F6' }"
        :cell-style="{ background: '#fff' }"
      >
        <el-table-column label="序号" type="index" :index="indexMethod">
        </el-table-column>
        <el-table-column prop="rolejobNum" label="角色编号"> </el-table-column>
        <el-table-column prop="roleName" label="角色名称"> </el-table-column>
        <el-table-column prop="rolenumber" label="员工数量"> </el-table-column>
        <el-table-column prop="roleCreapeo" label="创建人员"></el-table-column>

        <el-table-column prop="roleCreat" label="创建时间"></el-table-column>
        <el-table-column label="角色状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              :active-value="1"
              :inactive-value="2"
              active-color="#02538C"
              inactive-color="#B9B9B9"
              @change="changeSwitch($event, scope.row)"
            />
          </template>
          ></el-table-column
        >

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              class="roleEdit"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              class="roleDel"
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, tables)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="rolePag"
        layout="total, prev, pager, next, jumper"
        :total="dormitory.length"
      >
      </el-pagination>
    </div>
    <!-- 新增-->
    <addrole v-show="addrole"></addrole>
    <!-- 编辑 -->
    <el-dialog
      title="编辑"
      :visible.sync="editFormVisible"
      :close-on-click-modal="true"
      :append-to-body="true"
    >
      <!--editForm表单提交的数据-->
      <el-form :model="editForm" label-width="80px" ref="editForm">
        <el-form-item prop="rolejobNum" label="角色编号" width="100">
          <el-input
            v-model="editForm.rolejobNum"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="roleName" label="角色名称" width="120">
          <el-input v-model="editForm.roleName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="roleName" label="员工数量" width="120">
          <el-input
            v-model="editForm.rolenumber"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="roleCreapeo" label="创建人员" width="120">
          <el-input
            v-model="editForm.roleCreapeo"
            auto-complete="off"
          ></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import headpow from "../component/power";
import addrole from "./component/addrole";
import { getrole } from "../../network/H-role";
export default {
  components: { headpow, addrole },
  data() {
    return {
      rolevue: true,
      addrole: false,
      currentRow: [], //选中的值
      editFormVisible: false, //设置默认弹出框  为false
      editForm: {
        rolejobNum: "",
        rolenumber: "",
        roleName: "",
        roleCreapeo: "",
      },
      dormitory: [],
      search: "",
    };
  },
  created() {
    $.ajax({
      url: "http://bt1.wlqqlp.com:8082/api/part/authgroup",
      type: "get",
      dataType: "json",
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE1LCJpYXQiOjE2MDk5MTUwNDYsImp0aSI6ImE1Y2M1MTJjZTJhYmJkMjFiN2RmNzMxNzkyZGIyZTc5In0.gHTJUmJk0G0iaOKcQCJwDCk7nonBZ7QsDXKV6vIYYwU",
      },
      success(e) {
        console.log(e);
        this.dormitory = e.data.data;
        console.log(dormitory);
      },
    });
    // getrole().then((res) => {
    //   console.log(res);
    // });
  },
  computed: {
    // 搜索
    tables() {
      const search = this.search;
      if (search) {
        return this.dormitory.filter((data) => {
          return Object.keys(data).some((key) => {
            return String(data[key]).toLowerCase().indexOf(search) > -1;
          });
        });
      }
      return this.dormitory;
    },
  },
  methods: {
    // 新增
    fathpowadd() {
      this.rolevue = false;
      this.addrole = true;
    },
    // 子保存
    fathroleyes() {
      setTimeout(() => {
        this.addrole = false;
        this.rolevue = true;
      }, 3000);
    },
    // 子取消
    fathroleno() {
      this.addrole = false;
      this.rolevue = true;
    },
    // switch开关
    changeSwitch(val, row) {
      console.log(row.status);
      if (row.status == 1) {
        this.$message({
          type: "success",
          message: "员工启用成功",
        });
      } else {
        this.$message({
          type: "success",
          message: "员工停用成功",
        });
      }
    },
    // 编辑
    handleEdit(index, row) {
      this.editFormVisible = true;
      this.editForm = Object.assign({}, row); //重点
      console.log(this.editForm);
    },
    // 序号
    indexMethod(index) {
      return index * 1;
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
            delete: row.splice(index, 1),
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style>
@import "role.css";
</style>
