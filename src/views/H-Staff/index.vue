<template>
  <div>
    <div class="staffalBg" v-if="staffvue">
      <!-- 头部（公共） -->
      <headpow></headpow>
      <!-- 搜索部分 -->
      <div class="staffIptsech">
        <span class="staffBelong">所属科室</span>
        <el-select
          v-model="staffbeldepart"
          placeholder="请选择"
          class="staffSel"
        >
          <el-option label="请选择" value="请选择"></el-option>
          <el-option
            v-for="item in optionbeldepart"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          >
          </el-option>
        </el-select>
        <el-input
          v-model="search"
          class="staffNameipt"
          placeholder="请输入内容"
        ></el-input>
        <el-button class="staffNamesch" icon="el-icon-search" @click="seachAll"
          >搜索</el-button
        >
      </div>
      <!-- 表格部分 -->
      <div class="staffTable">
        <el-table
          :data="tables"
          :header-cell-style="{ background: '#C2C5F6' }"
          :cell-style="{ background: '#fff' }"
        >
          <el-table-column label="序号" type="index"> </el-table-column>
          <el-table-column prop="job_number" label="工号"> </el-table-column>
          <el-table-column prop="name" label="员工姓名"> </el-table-column>
          <el-table-column prop="sex.name" label="员工性别"> </el-table-column>
          <el-table-column prop="age" label="员工年龄"> </el-table-column>
          <el-table-column prop="phone" label="手机号码"> </el-table-column>
          <el-table-column prop="department[0].title" label="所属科室">
          </el-table-column>
          <el-table-column prop="auth_grouap[0].title" label="角色">
          </el-table-column>
          <el-table-column
            prop="user[0].name"
            label="创建人员"
          ></el-table-column>

          <el-table-column
            prop="create_time"
            label="创建时间"
          ></el-table-column>
          <el-table-column label="员工状态">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                :active-value="1"
                :inactive-value="2"
                active-color="#02538C"
                inactive-color="#B9B9B9"
                @change="changeSwitch($event, scope.row)"
              ></el-switch>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                class="staffFotedit"
                size="mini"
                @click="handleEdit(scope.$index, scope.row, scope.row.id)"
                >编辑</el-button
              >
              <el-button
                class="staffFotdel"
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, tables)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="staffpag">
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
    <!--新增-->
    <Staff v-show="add"></Staff>
    <!-- edit（编辑） -->
    <Edit v-show="edit" :childed="childedit"></Edit>
  </div>
</template>

<script>
import Staff from "./component/add";
import Edit from "./component/staffedit";
import headpow from "../component/power";

//接口
// import { stList } from "@/network/Sta.js";
import service from "@/service/index";
export default {
  components: { Staff, headpow, Edit },
  inject: ["reload"],
  data() {
    return {
      all: {},
      add: false,
      edit: false,
      currentPage: 1,
      total: 0, //总条数
      page: 1, //初始显示第几页
      pageSize: 1, //每页显示多少数据
      nums: [8, 10, 20],
      num: 8,
      staffbeldepart: "",
      dialogVisible: false,
      staffvue: true,
      currentRow: [], //选中的值
      editFormVisible: false, //设置默认弹出框  为false
      editForm: {},
      tables1: [],
      optionbeldepart: [],
      tables: [],
      search: "",
      id: "",
      childedit: [],
    };
  },
  created() {
    // 获取员工列表
    service.staffList().then((res) => {
      this.optionbeldepart = res.data;
    });

    service.stafflist().then((res) => {
      console.log(res);
      this.tables = res.data[0];
      this.total = res.data[1].count;
      for (let i = 1; i < res.data.length; i++) {
        this.id = res.data[i].id;
      }
    });
  },
  methods: {
    // 员工搜索
    seachAll() {
      let data = {
        name: this.search,
        department_id: this.staffbeldepart,
        pNum: this.num, //每页显示数量
        count: this.pageSize, //每页显示的数量
      };
      console.log(data);
      service.stafflist(data).then((res) => {
        console.log(res.data);
        this.tables1 = this.tables = res.data[0];
        this.total = res.data[1].count;
      });
    },
    // 新增
    fathpowadd() {
      this.staffvue = false;
      this.add = true;
      this.edit = false;
    },
    // 子的
    fathstaffno() {
      this.add = false;
      this.edit = false;
      this.staffvue = true;
    },
    fathstaffyes() {
      setTimeout(() => {
        this.add = false;
        this.staffvue = true;
      }, 3000);
    },
    //员工状态
    changeSwitch(val, row) {
      // 员工状态
      let params = {
        id: row.id,
      };
      service.staffState(params).then((res) => {
        if (row.status == 1) {
          this.$message({
            type: "success",
            message: "员工启用成功",
          });
        } else {
          this.$message({
            type: "error",
            message: "员工停用",
          });
        }
      });
    },
    // 编辑
    handleEdit(index, row, id) {
      this.edit = true;
      this.staffvue = false;
      let params = {
        id: id,
      };
      service.staffedits(params).then((res) => {
        console.log(res);
        this.childedit = res.data.user;
        if (res.data.user.sex.name == "女") {
          this.childedit.sex = "0";
        } else if (res.data.user.sex.name == "男") {
          this.childedit.sex = "1";
        } else {
          this.childedit.sex = "2";
        }
      });
      service.getrole().then((res) => {
        console.log(res);
        this.all = res.data;
        this.bus.$emit("ReceiveMessage", this.all);
        // this.$parent.fathpowadd();
      });
    },
    //删除：
    handleDelete(val, row) {
      let params = {
        id: row[val].id,
      };
      console.log(params);
      service.staffDel(params).then((res) => {
        // this.reload();

        console.log(res);
        if (res.code == 20010) {
          this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          })
            .then(() => {
              this.$message({
                type: "success",
                message: "删除成功!",
                delete: row.splice(val, 1),
              });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消删除",
              });
            });
        }
      });
    },
    // 分页
    handleSizeChange(val) {
      this.num = val;
      let data = {
        pNum: this.num,
        current: this.currentPage,
      };
      service.stafflist(data).then((res) => {
        console.log(res);
        this.tables = res.data[0];
      });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
      let data = {
        //  name: this.search,
        // department_id: this.staffbeldepart,
        pNum: this.num,
        current: this.currentPage,
      };
      service.stafflist(data).then((res) => {
        console.log(res);
        this.tables = res.data[0];
      });
    },
  },
};
</script>

<style>
@import "staff.css";
</style>
