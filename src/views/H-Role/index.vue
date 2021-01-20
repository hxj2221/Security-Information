<template>
  <div>
    <div class="rolealBg" v-if="rolevue">
      <headpow></headpow>
      <!-- 搜索 -->
      <div class="roleIptsech">
        <el-input
          v-model="search"
          class="roleNameIpt"
          placeholder="请输入角色名称"
        ></el-input>
        <el-button class="staffNamesch" icon="el-icon-search" @click="roleserch"
          >搜索</el-button
        >
      </div>
      <!-- 表格 -->
      <div class="roleTable">
        <el-table
          :data="tables"
          style="width: 96%"
          tooltip-effect="dark"
          :header-cell-style="{ background: '#C2C5F6' }"
          :cell-style="{ background: '#fff' }"
        >
          <el-table-column
            width="150px"
            label="序号"
            type="index"
            :index="indexMethod"
          >
          </el-table-column>
          <el-table-column width="150px" prop="sort" label="角色排序">
          </el-table-column>
          <el-table-column width="180px" prop="title" label="角色名称">
          </el-table-column>
          <el-table-column width="150px" prop="number" label="员工数量">
          </el-table-column>
          <el-table-column
            width="150px"
            prop="user.name"
            label="创建人员"
          ></el-table-column>

          <el-table-column
            width="240px"
            prop="create_time"
            label="创建时间"
          ></el-table-column>
          <el-table-column width="200px" label="角色状态">
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
            ></el-table-column
          >

          <el-table-column width="300px" fixed="right" label="操作">
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
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="nums"
            :page-size="num"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- 新增-->
    <addrole v-show="addrole" :listaddchild="addchild"></addrole>
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
      currentPage: 1,
      total: 0, //总条数
      page: 1, //初始显示第几页
      pageSize: 5, //每页显示几条数据
      nums: [8, 10, 20],
      num: 8,
      tables1: [],
      addchild: [],
    };
  },
  created() {
    service.rolelist().then((res) => {
      console.log(res);
      this.tables = res.data;
      this.total = res.allNews;
    });
  },

  methods: {
    // 新增
    fathpowadd() {
      this.rolevue = false;
      this.addrole = true;
      service.rolepowlist().then((res) => {
        console.log(res);
        this.addchild = res;
      });
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
    // 角色搜索
    roleserch() {
      let data = {
        title: this.search,
        pageSize: this.num,
        pageNum: this.currentPage,
      };
      service.roleserch(data).then((res) => {
        this.tables = this.tables1 = res.data;
        //this.tables = this.tables1 = res.datas;
        console.log(res);
        this.total = res.allNews;
      });
    },
    // switch开关
    changeSwitch(val, row, id) {
      console.log(row.status);
      this.$confirm("此操作将修改状态, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let data = {
            id: id,
            status: row.status,
          };
          console.log(data);
          service.rolestatus(data).then((res) => {
            console.log(res);
            this.$message({
              type: "success",
              message: res.msg,
              duration: 1000,
            });
          });
        })
        .catch(() => {
          if (row.status == 1) {
            row.status = 0;
          } else {
            row.status = 1;
          }
          this.$message({
            type: "success",
            message: "已取消操作",
            duration: 1000,
          });
        });
    },
    // changeSwitch(val, row, id) {
    //   let data = {
    //     id: id,
    //     status: row.status,
    //   };
    //   console.log(data);
    //   service.rolestatus(data).then((res) => {
    //     console.log(res);
    //   });
    //   console.log(row.status);
    //   if (row.status == 1) {
    //     this.$message({
    //       type: "success",
    //       message: "员工启用成功",
    //     });
    //   } else {
    //     this.$message({
    //       type: "success",
    //       message: "员工停用成功",
    //     });
    //   }
    // },
    // 编辑
    handleEdit(id) {
      this.rolevue = false;
      this.editshow = true;
      console.log(id);
      let param = {
        id: id,
      };
      console.log(param);
      service.roleedit(param).then((res) => {
        console.log(res);
        this.childedit = res;
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
        console.log(index, row);
        this.$confirm("此操作将永久删除该角色, 是否继续?", "提示", {
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
        this.reload();
      });
    },
    // 序号
    indexMethod(index) {
      return index * 1 + 1;
    },

    // 删除
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该角色, 是否继续?", "提示", {
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
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val}条`);
      this.num = val;
      let data = {
        pageSize: this.num,
        pageNum: this.currentPage,
      };
      service.rolelist(data).then((res) => {
        console.log(res);
        this.tables = res.data;
      });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页:${val}`);
      let data = {
        pageSize: this.num,
        pageNum: this.currentPage,
      };
      console.log(data);
      service.rolelist(data).then((res) => {
        console.log(res);
        this.tables = res.data;
      });
    },
  },
};
</script>

<style>
@import "role.css";
</style>
