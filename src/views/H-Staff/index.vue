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
          <el-option
            v-for="item in optionbeldepart"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input
          v-model="search"
          class="staffNameipt"
          placeholder="请输入内容"
        ></el-input>
        <el-button class="staffNamesch" icon="el-icon-search">搜索</el-button>
      </div>
      <el-table
        :data="tables"
        style="width: 99%; margin-left: 1%"
        :header-cell-style="{ background: '#C2C5F6' }"
        :cell-style="{ background: '#fff' }"
      >
        <el-table-column
          label="序号"
          width="50"
          type="index"
          :index="indexMethod"
        >
        </el-table-column>
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
        <el-table-column prop="staffKs" label="所属科室" width="120">
        </el-table-column>
        <el-table-column prop="staffJs" label="角色" width="120">
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
          </el-table-column
        >

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
    <!-- 编辑 -->
    <el-dialog
      title="编辑"
      :visible.sync="editFormVisible"
      :close-on-click-modal="true"
      :append-to-body="true"
    >
      <!--editForm表单提交的数据-->
      <el-form :model="editForm" label-width="80px" ref="editForm">
        <el-form-item prop="staffjobNum" label="工号" width="100">
          <el-input
            v-model="editForm.staffjobNum"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="staffName" label="员工姓名" width="120">
          <el-input v-model="editForm.staffName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="staffGen" label="员工性别" width="100">
          <el-input v-model="editForm.staffGen" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="staffAge" label="员工年龄" width="100">
          <el-input v-model="editForm.staffAge" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="staffPhone" label="手机号码" width="150">
          <el-input
            v-model="editForm.staffPhone"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="staffKs" label="所属科室" width="120">
          <el-input v-model="editForm.staffKs" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="staffJs" label="角色" width="120">
          <el-input v-model="editForm.staffJs" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="staffCreapeo" label="创建人员" width="120">
          <el-input
            v-model="editForm.staffCreapeo"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="staffCreat" label="创建时间" width="150">
          <el-input
            v-model="editForm.staffCreat"
            auto-complete="off"
          ></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Staff from "./component/add";
import headpow from "../component/power";

//接口
import { stList } from "@/network/Sta.js";
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
      editForm: {
        staffjobNum: "",
        staffName: "",
        staffGen: "",
        staffAge: "",
        staffPhone: "",
        staffKs: "",
        staffJs: "",
        staffCreapeo: "",
        staffCreat: "",
      },

      optionbeldepart: [
        {
          value: "选项1",
          label: "全科",
        },
        {
          value: "选项2",
          label: "儿科",
        },
        {
          value: "选项3",
          label: "内科",
        },
      ],

      tables: [
        // {
        //   staffjobNum: "10001",
        //   staffGen: "男",
        //   staffAge: "45",
        //   staffPhone: "13412312345",
        //   staffName: "王小虎",
        //   staffKs: "内科",
        //   staffJs: "医生",
        //   staffCreapeo: "王a",
        //   staffCreat: "2020-12-20 16:13:16",
        //   status: "1",
        //   zip: 200333,
        // },
      ],

      search: "",
    };
  },
  created() {
    stList().then((res) => {
      console.log(res);
      this.tables = res.data.data;
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
    // 序号
    indexMethod(index) {
      return index * 1;
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
@import "staff.css";
</style>
