<template>
  <div>
    <div class="H-Department">

   
    <div class="departalBg" v-if="departvue">
      <!-- 头部 -->
      <headpow></headpow>
      <!-- 搜索部分 -->
      <div class="departIptsech">
        <div class="departIptsech_div">
          <el-input
            v-model="search"
            class="departNameipt"
            placeholder="请输入科室名称"
          ></el-input>
          <el-button
            class="departNamesch"
            type="primary"
            icon="el-icon-search"
            @click="departsearch()"
          ></el-button>
        </div>
      </div>
      <el-table
        :data="dormitory"
        class="departtable"
        max-height="560"
        row-key="id"
        :header-cell-style="{ background: '#c2c5f6', color: '#000' }"
        :cell-style="{ background: '#fff' }"
        :tree-props="{
          children: '_child',
          hasChildren: 'hasChildren',
        }"
      >
        <el-table-column width="50" label="序号" type="index">
        </el-table-column>
        <el-table-column prop="title" label="科室名称" width="160"> </el-table-column>
        <el-table-column prop="number" label="科室编号" width="150"> </el-table-column>
        <el-table-column prop="usernumber" label="员工数量"> </el-table-column>
        <el-table-column prop="head_department.name" label="负责人">
        </el-table-column>
        <el-table-column
          prop="createname.name"
          label="创建人员"
        ></el-table-column>

        <el-table-column
          width="200"
          prop="create_time"
          label="创建时间"
        ></el-table-column>
        <el-table-column label="科室状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              :active-value="1"
              :inactive-value="0"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="changeSwitch($event, scope.row, scope.row.id)"
            />
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button
              class="departEdit"
              type="text"
              size="small"
              @click="handleEdit(scope.row.id)"
              >编辑</el-button
            >
            <el-button
              class="departDel"
              size="small"
              type="text"
              @click="handleDelete(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 新增 -->
    <adddep v-show="adddep"></adddep>
    <!-- 编辑 -->
    <editdep v-show="editdep" :editchild="departchildedit"></editdep>
  </div>
 </div>
</template>

<script>
import headpow from "../component/power";
import adddep from "./component/departadd";
import editdep from "./component/departdit";
import service from "@/service/index";
import qs from "qs";
export default {
  components: {
    headpow,
    adddep,
    editdep,
  },
  inject: ["reload"],
  data() {
    return {
      departvue: true,
      currentPage: 1,
      nums: [8, 10, 20],
      num: 8,
      total: 0,
      adddep: false,
      editdep: false,
      currentRow: [], //选中的值
      dormitory: [],
      search: "",
      departchildedit: [],
      tables1: [],
    };
  },
  created() {
    service.departlist().then((res) => {
      console.log(res);
      if (res.code == 20403) {
        this.$message({
          type: "error",
          message: res.msg,
          duration: 1000,
        });
        this.$router.push("/dashboard");
      }
      this.dormitory = res.data;
    });
  },
  methods: {
    // 新增
    fathpowadd() {
      this.departvue = !this.departvue;
      this.adddep = !this.adddep;
    },
    // 搜索
    departsearch() {
      let param = {
        name: this.search,
      };
      service.departserc(param).then((res) => {
        this.dormitory = this.tables1 = res.data;
        console.log(res);
      });
    },
    // 子
    fathdepartyes() {
      setTimeout(() => {
        this.adddep = false;
        this.editdep = false;
        this.departvue = true;
      }, 3000);
    },
    fathdepartno() {
      this.adddep = false;
      this.editdep = false;
      this.departvue = true;
    },
    // switch开关
    changeSwitch(val, row) {
      console.log(row.status);
      this.$confirm("此操作将修改状态, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let data = {
            id: row.id,
            status: row.status,
          };
          console.log(data);
          service.departstatus(data).then((res) => {
            console.log(res);
            this.$message({
              type: "success",
              message: res.msg,
              duration: 1300,
            });
            setTimeout(() => {
              this.reload();
            }, 2000);
          });
        })
        .catch(() => {
          if (row.status == 1) {
            row.status = 0;
          } else {
            row.status = 1;
          }
          this.$message({
            type: "info",
            message: "已取消操作",
            duration: 1000,
          });
        });
    },

    // 序号
    indexMethod(index) {
      return index * 1;
    },
    // 编辑
    handleEdit(id) {
      this.editdep = true;
      this.departvue = false;
      // console.log(id);
      let param = {
        id: id,
      };
      service.departedit(param).then((res) => {
        // console.log(res);
        this.departchildedit = res;
        //this.departchildedit = res.user.sex;
      });
    },
    //删除：
    handleDelete(id) {
      this.$confirm("此操作将删除该科室, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let data = {
            id: id,
          };
          // console.log(data);
          service.departdel(data).then((res) => {
            // console.log(res);
            this.$message({
              type: "success",
              message: res.msg,
              duration: 1000,
            });
            this.reload();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
            duration: 1000,
          });
        });
    },
  },
};
</script>

<style>
@import "depart.css";
</style>