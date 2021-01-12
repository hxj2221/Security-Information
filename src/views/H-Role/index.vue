<template>
  <div>
    <div class="rolealBg" v-if="rolevue">
      <headpow></headpow>
      <!-- 搜索 -->
      <div class="roleIptsech">
        <el-input
          v-model="search"
          class="roleNameIpt"
          placeholder="请输入内容"
        ></el-input>
        <el-button class="staffNamesch" icon="el-icon-search">搜索</el-button>
      </div>
      <!-- 表格 -->
      <div class="roleTable">
        <el-table
          :data="tables"
          tooltip-effect="dark"
          :header-cell-style="{ background: '#C2C5F6' }"
          :cell-style="{ background: '#fff' }"
        >
          <el-table-column label="序号" type="index" :index="indexMethod">
          </el-table-column>
          <el-table-column prop="number" label="角色编号"> </el-table-column>
          <el-table-column prop="title" label="角色名称"> </el-table-column>
          <el-table-column prop="number" label="员工数量"> </el-table-column>
          <el-table-column prop="user.name" label="创建人员"></el-table-column>

          <el-table-column
            prop="create_time"
            label="创建时间"
          ></el-table-column>
          <el-table-column label="角色状态">
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
            ></el-table-column
          >

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                class="roleEdit"
                size="mini"
                @click="handleEdit(scope.row.id)"
                >编辑</el-button
              >
              <el-button
                class="roleDel"
                size="mini"
                type="danger"
                @click="delrole(scope.row.id)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>

   <!-- 分页 -->
      <div class="rolepag">
        <div class="block">
          <el-pagination
            :current-page="currentPage"
            :page-sizes="[8, 10, 20]"
            :page-size="8"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tables.length"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- 新增-->
    <addrole v-show="addrole"></addrole>
    <!-- 编辑 -->
    <editrole v-show="editshow" :editchid="childedit"></editrole>
  </div>
</template>

<script>
import headpow from "../component/power";
import addrole from "./component/addrole";
import editrole from "./component/editrole";
import service from "@/service/index";
export default {
  components: { headpow, addrole, editrole },
  inject: ["reload"],
  data() {
    return {
      rolevue: true,
      addrole: false,
      editshow: false,
      tables: [],
      currentRow: [], //选中的值
      dormitory: [],
      search: "",
      childedit: [],
      currentPage:1
    };
  },
  created() {
    service.rolelist().then((res) => {
      console.log(res.data);
      this.tables = res.data;
    });
  },
  computed: {
    // 搜索
    // tables() {
    //   const search = this.search;
    //   if (search) {
    //     return this.dormitory.filter((data) => {
    //       return Object.keys(data).some((key) => {
    //         return String(data[key]).toLowerCase().indexOf(search) > -1;
    //       });
    //     });
    //   }
    //   return this.dormitory;
    // },
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
        this.editshow = false;
        this.rolevue = true;
      }, 3000);
    },
    // 子取消
    fathroleno() {
      this.addrole = false;
      this.editshow = false;
      this.rolevue = true;
    },
    // switch开关
    changeSwitch(val, row, id) {
      let data = {
        id: id,
        status: row.status,
      };
      console.log(data);
      service.rolestatus(data).then((res) => {
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
    // 编辑
    handleEdit(id) {
      // this.editFormVisible = true;
      // this.editForm = Object.assign({}, row); //重点
      this.rolevue = false;
      this.editshow = true;
      console.log(id);
      let param = {
        id: id,
      };
      console.log(param);
      service.roleedit(param).then((res) => {
        console.log(res.info);
        this.childedit = res.info;
        console.log(this.childedit);
      });
    },
    // 删除角色
    delrole(id) {
      console.log(id);
      let param = {
        id: id,
      };
      console.log(param);
      service.roledel(param).then((res) => {
        console.log(res);
        this.reload();
      });
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
