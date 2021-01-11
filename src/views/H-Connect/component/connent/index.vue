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
          <el-button type="primary" icon="el-icon-search" size="small"
            >搜索</el-button
          >
        </div>
      </div>
      <!-- 表单表格部分 -->
      <div class="connent_myTable">
        <!--  -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="序号">
            <template slot-scope="scope">
              <span>{{ scope.row.num }}</span>
            </template>
          </el-table-column>

          <el-table-column label="记录编号">
            <template slot-scope="scope">
              <span>{{ scope.row.jlbh }}</span>
            </template>
          </el-table-column>

          <el-table-column label="患者姓名">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>

          <el-table-column label="主持人">
            <template slot-scope="scope">
              <span>{{ scope.row.zcr }}</span>
            </template>
          </el-table-column>

          <el-table-column label="记录人">
            <template slot-scope="scope">
              <span>{{ scope.row.jlr }}</span>
            </template>
          </el-table-column>

          <el-table-column label="沟通日期">
            <template slot-scope="scope">
              <span>{{ scope.row.data }}</span>
            </template>
          </el-table-column>

          <el-table-column label="关联投诉编号">
            <template slot-scope="scope">
              <span>{{ scope.row.gltsbh }}</span>
            </template>
          </el-table-column>

          <el-table-column label="主要沟通事项">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>{{ scope.row.zygtsx }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">轻触查看</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template>
              <el-link type="primary" :underline="false" @click="details"
                >记录详情</el-link
              >
              <el-link type="primary" :underline="false" @click="complaint"
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
            :page-size="8"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AdminHead from './components/AdminHead'
import "@/views/H-Connect/component/connent/css.css";
export default {
  data() {
    return {
      tableData: [
        {
          num: "1",
          jlbh: "202011151036",
          name: "成武机型如",
          zcr: "hhh",
          jlr: "hhh",
          data: "2020-12-18",
          gltsbh: " TS20201115001",
          zygtsx: 200333,
        },
        {
          num: "2",
          jlbh: "202011151036",
          name: "王小虎",
          zcr: "hhh",
          jlr: "hhh",
          data: "2020-12-18",
          gltsbh: " TS20201115001",
          zygtsx: 200333,
        },
        {
          num: "3",
          jlbh: "202011151036",
          name: "王小虎",
          zcr: "hhh",
          jlr: "hhh",
          data: "2020-12-18",
          gltsbh: " TS20201115001",
          zygtsx: 200333,
        },
        {
          num: "4",
          jlbh: "202011151036",
          name: "王小虎",
          zcr: "hhh",
          jlr: "hhh",
          data: "2020-12-18",
          gltsbh: " TS20201115001",
          zygtsx: 200333,
        },
      ],
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
      seachTime: "", //选择时间
      input: "", //input内容
      // 分页
      currentPage: 1,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 新增记录
    addRecord() {
      this.$emit("abcClick");
    },
    // 记录详情
    details() {
      console.log(12);
      this.$emit("abClick");
    },
    //投诉详情
    complaint() {
      this.$router.push("/Complaints");
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleSee(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style lang="less" scoped></style>
