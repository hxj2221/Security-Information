<template>
  <div>
    <div class="departalBg" v-if="departvue">
      <!-- 头部 -->
      <headpow></headpow>
      <!-- 搜索部分 -->
      <div class="departIptsech">
        <div class="departIptsech_div">
          <el-input
            v-model="search"
            class="departNameipt"
            placeholder="请输入内容"
          ></el-input>
          <el-button
            class="departNamesch"
            icon="el-icon-search"
            @click="departsearch"
            >搜索</el-button
          >
        </div>
      </div>
      <el-table
        :data="dormitory"
        class="departtable"
        :header-cell-style="{ background: '#C2C5F6' }"
        :cell-style="{ background: '#fff' }"
        row-key="id"
        :tree-props="{
          children: '_child',
          hasChildren: 'hasChildren',
        }"
      >
        <el-table-column label="序号" type="index"> </el-table-column>
        <el-table-column prop="title" label="科室名称"> </el-table-column>
        <el-table-column prop="number" label="科室编号"> </el-table-column>
        <el-table-column prop="usernumber" label="员工数量"> </el-table-column>
        <el-table-column prop="head_department.name" label="负责人">
        </el-table-column>
        <el-table-column
          prop="createname.name"
          label="创建人员"
        ></el-table-column>

        <el-table-column prop="create_time" label="创建时间"></el-table-column>
        <el-table-column label="科室状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              :active-value="1"
              :inactive-value="0"
              active-color="#02538C"
              inactive-color="#B9B9B9"
              @change="changeSwitch($event, scope.row, scope.row.id)"
            />
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              class="departEdit"
              size="mini"
              @click="handleEdit(scope.row.id)"
              >编辑</el-button
            >
            <el-button
              class="departDel"
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <!-- 咱不需要 -->
      <!-- <div class="departpag">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[8, 10, 20]"
            :page-size="8"
            layout="total, sizes, prev, pager, next, jumper"
            :total="dormitory.length"
          >
          </el-pagination>
        </div>
      </div> -->
    </div>

    <!-- 新增 -->
    <adddep v-show="adddep"></adddep>
    <!-- 编辑 -->
    <editdep v-show="editdep" :editchild="departchildedit"></editdep>
  </div>
</template>

<script>
import headpow from "../component/power";
import adddep from "./component/departadd";
import editdep from "./component/departdit";
import service from "@/service/index";
import qs from "qs";
export default {
  components: { headpow, adddep, editdep },
  inject: ["reload"],
  data() {
    return {
      departvue: true,
      currentPage: 1,
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
      this.dormitory = res.data;
    });
  },
  computed: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
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
    changeSwitch(val, row, id) {
      let data = {
        id: id,
        status: row.status,
      };
      console.log(data);
      service.departstatus(data).then((res) => {
        console.log(res);
      });
      console.log(row.status);
      if (row.status == 1) {
        this.$message({
          type: "success",
          message: "科室启用成功",
        });
      } else {
        this.$message.error("科室停用成功");
      }
    },
    // 序号
    // indexMethod(index) {
    //   return index * 1;
    // },
    // 编辑
    handleEdit(id) {
      this.editdep = true;
      this.departvue = false;
      console.log(id);
      let param = {
        id: id,
      };
      service.departedit(param).then((res) => {
        console.log(res);
        this.departchildedit = res;
        //this.departchildedit = res.user.sex;
      });
    },
    //删除：
    handleDelete(id) {
      console.log(id);
      let data = {
        id: id,
      };
      console.log(data);
      service.departdel(data).then((res) => {
        console.log(res);
        this.reload();
      });
      // this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      //   confirmButtonText: "确定",
      //   cancelButtonText: "取消",
      //   type: "warning",
      // })
      //   .then(() => {
      //     this.$message({
      //       type: "success",
      //       message: "删除成功!",
      //       delete: row.splice(index, 1),
      //     });
      //   })
      //   .catch(() => {
      //     this.$message({
      //       type: "info",
      //       message: "已取消删除",
      //     });
      //   });
    },
  },
};
</script>

<style>
@import "depart.css";
</style>
