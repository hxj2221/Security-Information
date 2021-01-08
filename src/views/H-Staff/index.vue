<template>
  <div>
    <div class="staffalBg" v-if="staffvue">
      <headpow></headpow>
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
      <el-table
        :data="tables"
        style="width: 99%; margin-left: 1%"
        :header-cell-style="{ background: '#C2C5F6' }"
        :cell-style="{ background: '#fff' }"
      >
        <el-table-column label="序号" width="50" prop="id"> </el-table-column>
        <el-table-column prop="job_number" label="工号" width="100">
        </el-table-column>
        <el-table-column prop="name" label="员工姓名" width="120">
        </el-table-column>
        <el-table-column prop="sex" label="员工性别" width="100">
        </el-table-column>
        <el-table-column prop="age" label="员工年龄" width="100">
        </el-table-column>
        <el-table-column prop="phone" label="手机号码" width="150">
        </el-table-column>
        <el-table-column
          prop="department[0].title"
          label="所属科室"
          width="120"
        >
        </el-table-column>
        <el-table-column prop="auth_grouap[0].title" label="角色" width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="创建人员"
          width="120"
        ></el-table-column>

        <el-table-column
          prop="create_time"
          label="创建时间"
          width="150"
        ></el-table-column>
        <el-table-column label="员工状态" width="100">
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

        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              class="staffFotedit"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
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
      <el-pagination
        layout="total, prev, pager, next, jumper"
        :total="tables.length"
      >
      </el-pagination>
    </div>
    <!--新增-->
    <Staff v-show="add"></Staff>
    <!-- 编辑弹框 -->
    <el-dialog
      title="编辑"
      :visible.sync="editFormVisible"
      :close-on-click-modal="true"
      :append-to-body="true"
    >
      <!--editForm表单提交的数据-->
      <el-form :model="editForm" label-width="80px" ref="editForm">
        <el-form-item prop="job_number" label="工号" width="100">
          <el-input
            v-model="editForm.job_number"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="name" label="员工姓名" width="120">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="sex" label="员工性别" width="100">
          <el-input v-model="editForm.sex" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="age" label="员工年龄" width="100">
          <el-input v-model="editForm.age" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="phone" label="手机号码" width="150">
          <el-input v-model="editForm.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="staffKs" label="所属科室" width="120">
          <el-input
            v-model="editForm.department"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="staffJs" label="角色" width="120">
          <el-input
            v-model="editForm.auth_grouap"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="name" label="创建人员" width="120">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="create_time" label="创建时间" width="150">
          <el-input
            v-model="editForm.create_time"
            auto-complete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog_button">
          <el-button >返回</el-button>
        <el-button type="primary" style="background:#666ee8;border-color:#666ee8" >确定</el-button>
       
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Staff from "./component/add";
import headpow from "../component/power";

//接口
// import { stList } from "@/network/Sta.js";
import service from "@/service/index";
export default {
  components: { Staff, headpow },
  data() {
    return {
      add: false,
      currentPage: 0,
      total: 0, //总条数
      page: 1, //初始显示第几页
      pageSize: 5, //每页显示多少数据
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
    };
  },
  created() {
    // 获取员工列表
    service.staffList().then((res) => {
      this.tables = res.data;
      //  this.tables.department=res.data[].department[0].title
      for (let i = 1; i < res.data.length; i++) {
        this.id = res.data[i].id;
        console.log(this.id);
      }
    });
    // 员工搜索
    service.staffSeah().then((res) => {
      this.optionbeldepart = res.data;
    });
  },
  methods: {
    // 员工搜索
    seachAll() {
      let params = {
        name: this.search,
        department_id: this.staffbeldepart,
      };
      console.log(params);
      service.staffSea(params).then((res) => {
        // this.tables1
        this.tables = this.tables1 = res.data;
      });
    },
    // 新增
    fathpowadd() {
      this.staffvue = false;
      this.add = true;
    },
    // 子的
    fathstaffno() {
      this.add = false;
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
      console.log(val, row);
      // 员工状态
      let params = {
        id: row.id,
      };
      console.log(params);
      service.staffState(params).then((res) => {
        // console.log(res)
        if (row.state == 1) {
          this.$message({
            type: "success",
            message: "员工启用成功",
          });
        } else {
          if (row.state == 0) {
            this.$message({
              type: "warning",
              message: "员工停用",
            });
          }
        }
      });
    },
    // 编辑
    handleEdit(index, row) {
      console.log(index);
      this.editFormVisible = true;
      // this.editForm=this.tables
      this.editForm = Object.assign({}, row); //重点
      this.editForm.department = this.editForm.department[0].title;
      this.editForm.auth_grouap = this.editForm.auth_grouap[0].title;
      console.log(Object.assign({}, row));

      let params = {
        id: this.id,
      };
      service.staffedits(params).then((res) => {
        console.log(this.id);
      });
    },
    //删除：
    handleDelete(index, row) {
      // console.log(index, row);
      let params = {
        id: this.id,
      };
      service.staffDel(params).then((res) => {
        console.log(res.code);
        if (res.code == "20010") {
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
        }
      });
    },
  },
};
</script>

<style>
@import "staff.css";
</style>
