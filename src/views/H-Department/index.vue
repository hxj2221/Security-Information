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
        :data="dormitory"
        class="departtable"
        :header-cell-style="{ background: '#C2C5F6' }"
        :cell-style="{ background: '#fff' }"
      >
        <el-table-column label="序号" type="index" :index="indexMethod">
        </el-table-column>
        <el-table-column prop="id" label="科室编号"> </el-table-column>
        <el-table-column prop="title" label="科室名称"> </el-table-column>
        <el-table-column prop="usernumber" label="员工数量"> </el-table-column>
        <el-table-column prop="title" label="上级科室"> </el-table-column>
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
      <el-pagination
        layout="total, prev, pager, next, jumper"
        :total="dormitory.length"
      >
      </el-pagination>
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
export default {
  components: { headpow, adddep, editdep },
  inject: ["reload"],
  data() {
    return {
      departvue: true,
      adddep: false,
      editdep: false,
      currentRow: [], //选中的值
      dormitory: [],
      search: "",
      departchildedit: [],
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
    // 新增
    fathpowadd() {
      this.departvue = !this.departvue;
      this.adddep = !this.adddep;
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
        // console.log(this.departchildedit);
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
