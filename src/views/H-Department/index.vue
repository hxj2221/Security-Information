<template>
  <div>
    <div class="departalBg" v-if="departvue">
      <headpow></headpow>
      <div class="departIptsech">
        <el-input
          v-model="search"
          class="departNameipt"
          placeholder="请输入内容"
        ></el-input>
        <el-button class="departNamesch" icon="el-icon-search">搜索</el-button>
      </div>
      <el-table
        :data="tables"
        class="departtable"
        :header-cell-style="{ background: '#C2C5F6' }"
        :cell-style="{ background: '#fff' }"
      >
        <el-table-column label="序号" type="index" :index="indexMethod">
        </el-table-column>
        <el-table-column prop="departjobNum" label="科室编号">
        </el-table-column>
        <el-table-column prop="departName" label="科室名称"> </el-table-column>
        <el-table-column prop="departGen" label="员工数量"> </el-table-column>
        <el-table-column prop="departAge" label="上级科室"> </el-table-column>
        <el-table-column
          prop="departCreapeo"
          label="创建人员"
        ></el-table-column>

        <el-table-column prop="departCreat" label="创建时间"></el-table-column>
        <el-table-column label="科室状态">
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
              class="departEdit"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              class="departDel"
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, tables)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="total, prev, pager, next, jumper"
        :total="dormitory.length"
      >
      </el-pagination>
    </div>
    <!-- 新增 -->
    <adddep v-show="adddep"></adddep>
    <!-- 编辑 -->
    <el-dialog
      title="编辑"
      :visible.sync="editFormVisible"
      :close-on-click-modal="true"
      :append-to-body="true"
    >
      <!--editForm表单提交的数据-->
      <el-form :model="editForm" label-width="80px" ref="editForm">
        <el-form-item prop="departjobNum" label="工号" width="100">
          <el-input
            v-model="editForm.departjobNum"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="departName" label="员工姓名" width="120">
          <el-input
            v-model="editForm.departName"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="departGen" label="员工性别" width="100">
          <el-input v-model="editForm.departGen" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="departAge" label="员工年龄" width="100">
          <el-input v-model="editForm.departAge" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="departPhone" label="手机号码" width="150">
          <el-input
            v-model="editForm.departPhone"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="departKs" label="所属科室" width="120">
          <el-input v-model="editForm.departKs" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="departJs" label="角色" width="120">
          <el-input v-model="editForm.departJs" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="departCreapeo" label="创建人员" width="120">
          <el-input
            v-model="editForm.departCreapeo"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="departCreat" label="创建时间" width="150">
          <el-input
            v-model="editForm.departCreat"
            auto-complete="off"
          ></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import headpow from "../component/power";
import adddep from "./component/departadd";
export default {
  components: { headpow, adddep },
  data() {
    return {
      departvue: true,
      adddep: false,
      currentRow: [], //选中的值
      editFormVisible: false, //设置默认弹出框  为false
      editForm: {
        departjobNum: "",
        departName: "",
        departGen: "",
        departAge: "",
        departPhone: "",
        departKs: "",
        departJs: "",
        departCreapeo: "",
        departCreat: "",
      },
      dormitory: [
        {
          departjobNum: "10001",
          departGen: "男",
          departAge: "45",
          departPhone: "13412312345",
          departName: "王小虎",
          departKs: "内科",
          departJs: "医生",
          departCreapeo: "王a",
          departCreat: "2020-12-20 16:13:16",
          status: "1",
          zip: 200333,
        },
        {
          departjobNum: "10001",
          departGen: "男",
          departAge: "45",
          departPhone: "13412312345",
          departName: "王小虎",
          departKs: "内科",
          departJs: "医生",
          departCreapeo: "王a",
          departCreat: "2020-12-20 16:13:16",
          status: "1",
          zip: 200333,
        },
        {
          departjobNum: "10001",
          departGen: "男",
          departAge: "45",
          departPhone: "13412312345",
          departName: "王小虎",
          departKs: "内科",
          departJs: "医生",
          departCreapeo: "王a",
          departCreat: "2020-12-20 16:13:16",
          status: "1",
          zip: 200333,
        },
        {
          departjobNum: "10001",
          departGen: "男",
          departAge: "45",
          departPhone: "13412312345",
          departName: "王小虎",
          departKs: "内科",
          departJs: "医生",
          departCreapeo: "王a",
          departCreat: "2020-12-20 16:13:16",
          status: "1",
          zip: 200333,
        },
        {
          departjobNum: "10001",
          departGen: "男",
          departAge: "45",
          departPhone: "13412312345",
          departName: "王小虎",
          departKs: "内科",
          departJs: "医生",
          departCreapeo: "王a",
          departCreat: "2020-12-20 16:13:16",
          status: "1",
          zip: 200333,
        },
      ],
      search: "",
    };
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
      this.departvue = !this.departvue;
      this.adddep = !this.adddep;
    },
    // 子
    fathdepartyes() {
      setTimeout(() => {
        this.adddep = false;
        this.departvue = true;
      }, 3000);
    },
    fathdepartno() {
      this.adddep = false;
      this.departvue = true;
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
    // 序号
    indexMethod(index) {
      return index * 1;
    },
    // 编辑
    handleEdit(index, row) {
      this.editFormVisible = true;
      this.editForm = Object.assign({}, row); //重点
      console.log(this.editForm);
    },
    //删除：
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
@import "depart.css";
</style>
