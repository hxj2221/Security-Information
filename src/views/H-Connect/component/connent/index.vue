<template>
  <div class="connent_all">
    <!-- 头部内容 -->
    <div class="connent_top">
      <div class="connent_top_left">
        <h6>医患沟通记录</h6>
      </div>
      <div class="connent_top_right">
        <el-button
          type="primary"
          size="small"
          icon="el-icon-circle-plus-outline"
          @click="addRecord"
          >新增记录</el-button
        >
        <el-button size="small" icon="el-icon-d-arrow-right">导出</el-button>
      </div>
    </div>
    <hr class="connent_hr" />
    <!-- 表单部分 -->
    <div class="connent_Tableall">
      <!-- 表单搜素部分 -->
      <div class="seach">
        <p>沟通日期</p>
        <div class="block">
          <el-date-picker
            v-model="seachTime"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
          <el-input
            v-model="input"
            maxlength="10"
            placeholder="输入患者姓名"
          ></el-input>
          <el-button
            type="primary"
            icon="el-icon-search"
            size="small"
            @click="searchBtn"
            >搜索</el-button
          >
        </div>
      </div>
      <!-- 表单表格部分 -->
      <div class="connent_myTable">
        <!--  -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="序号" type="index"> </el-table-column>

          <el-table-column label="记录编号" prop="number"> </el-table-column>

          <el-table-column label="患者姓名" prop="patient_name">
          </el-table-column>

          <el-table-column label="主持人" prop="hosp_name"> </el-table-column>

          <el-table-column label="记录人" prop="note_taker"> </el-table-column>

          <el-table-column label="沟通日期" prop="communicate_time">
          </el-table-column>

          <el-table-column label="关联投诉编号" prop="event_number">
          </el-table-column>

          <el-table-column
            label="主要沟通事项"
            prop="record_of_communication"
            :show-overflow-tooltip="true"
          >
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-link
                type="primary"
                :underline="false"
                @click="details(scope.$index, scope.row)"
                >记录详情</el-link
              >
              <el-link
                type="primary"
                :underline="false"
                @click="complaint(scope.$index, scope.row)"
                >投诉详情</el-link
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="connent_paging">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[8, 10, 20]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引用css
import "@/views/H-Connect/component/connent/css.css";
// 引用service
import service from "@/service/index";
export default {
  data() {
    return {
      tableData: [],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      seachTime: [], //选择时间
      input: "", //input内容
      // 分页
      currentPage: 1,
      total: 0,
      tableDatas: [],
    };
  },
  watch: {
    seachTime: function (val, oldVal) {
      console.log(val, oldVal);
      if (val !== null) {
        this.beginDate = val[0];
        this.endDate = val[1];
      } else {
        this.beginDate = null;
        this.endDate = null;
      }
    },
  },
  methods: {
    // 搜索
    searchBtn() {
      let data = {
        starttime: this.seachTime.beginDate,
        endtime: this.seachTime.endDate,
        patient_name: this.input,
      };
      console.log(data);
      service.seachpag(data).then((res) => {
        console.log(res);
        this.tableData = this.tableDatas = res.data;
      });
    },
    // 分页
    handleCurrentChange(current) {
      console.log(current);
      let data = {
        pageNum: current,
        pageSize: 8,
      };
      service.seachpag(data).then((res) => {
        console.log(res);
        this.tableDatas = res.data;
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    // 新增记录
    addRecord() {
      service.selDep().then((res) => {
        console.log(res);
        this.bus.$emit("selDep", res);
        this.$emit("abcClick");
      });
      // this.$emit("abcClick");
    },
    // 记录详情
    details(val, row) {
      console.log(val, row.id);
      let data = {
        id: row.id,
      };
      service.details(data).then((res) => {
        console.log(res.data);
        this.bus.$emit("details", res);
        this.$emit("abClick");
      });
      // this.$emit("abClick");
    },
    //投诉详情
    complaint() {
      this.$router.push("/Complaints");
    },

    handleSee(index, row) {
      console.log(index, row);
    },
  },
  created() {
    let params = {
      pageNum: 1,
      pageSize: 8,
    };
    service.patientList(params).then((res) => {
      console.log(res);
      this.tableData = res.data;
    });

    service.patientList(8, "").then((res) => {
      // console.log(res);
      this.total = res.data.length;
    });
  },
};
</script>

<style lang="less" scoped></style>
