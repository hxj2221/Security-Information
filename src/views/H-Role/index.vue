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
          clearable
          @clear="delValue"
        ></el-input>
        <el-button
          class="roleNamesch"
          type="primary"
          icon="el-icon-search"
          @click="roleserch()"
        ></el-button>
      </div>
      <!-- 表格 -->
      <div class="roleTable">
        <el-table
          max-height="550"
          :data="tables"
          tooltip-effect="dark"
          :header-cell-style="{ background: '#C2C5F6', color: '#000' }"
          :cell-style="{ background: '#fff' }"
        >
          <el-table-column width="50px" label="序号" type="index">
          </el-table-column>
          <el-table-column prop="sort" label="角色排序"> </el-table-column>
          <el-table-column prop="title" label="角色名称"> </el-table-column>
          <el-table-column prop="number" label="员工数量"> </el-table-column>
          <el-table-column prop="user.name" label="修改人员"></el-table-column>

          <el-table-column
            width="240px"
            prop="create_time"
            label="修改时间"
          ></el-table-column>
          <el-table-column label="角色状态">
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

          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button
                class="roleEdit"
                type="text"
                size="small"
                @click="handleEdit(scope.row.id)"
                >编辑</el-button
              >
              <el-button
                class="roleDel"
                size="small"
                type="text"
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
  components: {
    headpow,
    addrole,
    editrole,
  },
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
        this.total = res.allNews;
      });
    },
    // switch开关
    changeSwitch(val, row, id) {
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
          service.rolestatus(data).then((res) => {
            this.$message({
              type: "success",
              message: res.msg,
              duration: 1500,
            });
            this.reload();
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
            duration: 1300,
          });
        });
    },
    // 编辑
    handleEdit(id) {
      this.rolevue = false;
      this.editshow = true;
      let param = {
        id: id,
      };
      service.roleedit(param).then((res) => {
        this.childedit = res;
      });
    },
    // 删除角色
    delrole(id) {
      this.$confirm("此操作将删除该角色, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let data = {
            id: id,
          };
          service.roledel(data).then((res) => {
            this.$message({
              type: "success",
              message: res.msg,
              duration: 1500,
            });
            setTimeout(() => {
              this.reload();
            }, 2000);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
            duration: 1300,
          });
        });
    },
    // 分页
    handleSizeChange(val) {
      this.num = val;
      let data = {
        pageSize: this.num,
        pageNum: this.currentPage,
        title: this.search,
      };
      service.rolelist(data).then((res) => {
        this.tables = res.data;
        this.total = res.allNews;
      });
    },
    handleCurrentChange(val) {
      //this.search = "";
      this.currentPage = val;
      let data = {
        pageSize: this.num,
        pageNum: this.currentPage,
        title: this.search,
      };
      service.rolelist(data).then((res) => {
        this.tables = res.data;
      });
    },
    //清空输入框时事件
    delValue() {
      let data = {
        title: this.search,
        pageSize: this.num,
        pageNum: this.currentPage,
      };
      service.roleserch(data).then((res) => {
        this.tables = this.tables1 = res.data;
        this.total = res.allNews;
      });
    },
  },
};
</script>

<style>
@import "role.css";
</style>