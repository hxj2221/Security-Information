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

          <el-table-column  width="180"     fixed="right"
 label="操作">
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
            :page-sizes="numberlist"
            :page-size="num"
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
      beginDate: "",
      endDate: "",
      // 分页
      numberlist: [8, 10, 20],
      currentPage: 1,
      total: 0,
      num: 8,
    };
  },
  watch: {
    seachTime: function (val, oldVal) {
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
        starttime: this.beginDate,
        endtime: this.endDate,
        patient_name: this.input,
        pageNum: this.currentPage,
        pageSize: this.number,
      };
      service.seachpag(data).then((res) => {
        this.tableData = this.tableDatas = res.data;
        this.total = res.allNews;
      });
    },
    //  分页
    handleSizeChange(val) {
      this.num = val;
      let data = {
        pageSize: val,//每页几条
        pageNum: this.currentPage,//第几页
      };
      service.patientList(data).then((res) => {
        this.tableData = res.data;
        this.total = res.allNews;
      });
    },
    //
    handleCurrentChange(val) {
      this.currentPage = val;
      let data = {
        pageSize: this.num,
        pageNum: this.currentPage,
      };
      service.patientList(data).then((res) => {
        this.tableData = res.data;
        this.total = res.allNews;
      });
    },

    // 新增记录
    addRecord() {
      service.selDep().then((res) => {
        this.bus.$emit("selDep", res);
        this.$emit("abcClick");
      });
      // this.$emit("abcClick");
    },
    // 记录详情
    details(val, row) {
      let data = {
        id: row.id,
      };
      service.details(data).then((res) => {
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
   let params={
       pageSize:this.num,
        pageNum:this.currentPage,
   }
    service.patientList(params).then((res) => {
      this.tableData = res.data;
      this.total = res.allNews;
    });
    
  },
};
</script>

<style lang="less" scoped></style>
