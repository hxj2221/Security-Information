<template>
  <div>
    <div class="Complaints-content">
      <el-table
        :data="tableData"
        style="width: 94%; margin-left: 3%; text-align: center"
        :header-cell-style="getRowClass"
      >
        <el-table-column type="index" width="50" label="序号"> </el-table-column>
        <el-table-column prop="event_number" label="事件编码"></el-table-column>
        <el-table-column prop="complaint_name" label="投诉人姓名"> </el-table-column>
        <el-table-column prop="sex" label="性别"> </el-table-column>
        <el-table-column prop="age" label="年龄"> </el-table-column>
        <el-table-column prop="complaint_phone" label="手机号码"> </el-table-column>
        <el-table-column prop="department[0].title" label="投诉科室"> </el-table-column>
        <el-table-column prop="complaint_type.title" label="投诉方式"> </el-table-column>
        <el-table-column prop="create_time" label="投诉时间"> </el-table-column>
        <el-table-column prop="pass_department" label="流转部门"> </el-table-column>
        <el-table-column prop="state.title" label="事件状态"> </el-table-column>
        <slot name="column">
          <el-table-column fixed="right" label="操作" width="150%">
            <template slot-scope="scope">
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">医患记录</el-button>
              <el-button type="text" size="small">操作</el-button>
            </template>
          </el-table-column>
        </slot>
      </el-table>
    </div>
    <div class="Complaints-footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="Pagess"
        :page-sizes="numberlist"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import service from "@/service/index";

export default {
  components: {},

  data() {
    return {
      tableData: [],
      numberlist: [8, 10, 20],
      Pagess: 1,
      total: 100,
      number: 8,
    };
  },

  methods: {
    handleSizeChange(val) {
      this.number = val;
      service.ComList(this.number, this.Pagess).then((res) => {
        if (res.code === 20010) {
          this.tableData = res.data[0];
          this.total = res.data[1].count;
          this.Pagess = res.data[1].current;
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          // this.$router.push("/login");
        }
      });
    },
    handleCurrentChange(val) {
      this.Pagess = val;
      service.ComList(this.number, this.Pagess).then((res) => {
        console.log(res);
        if (res.code === 20010) {
          this.tableData = res.data[0];
          this.total = res.data[1].count;
          this.Pagess = res.data[1].current;
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          // this.$router.push("/login");
        }
      });
    },
    handle(row) {
      console.log(row);
    },
    // 设置表头颜色
    getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#c2c5f6;color:#000";
      } else {
        return "";
      }
    },
  },
  created() {
    service.ComList(this.number, this.Pagess).then((res) => {
      console.log(res);
      if (res.code === 20010) {
        this.tableData = res.data[0];
        this.total = res.data[1].count;
        this.Pagess = res.data[1].current;
      } else {
        this.$message({
          message: res.msg,
          type: "error",
          duration: 1000,
        });
        // this.$router.push("/login");
      }
    });
  },
};
</script>

<style scoped>
@import "../css/Table.css";
</style>
