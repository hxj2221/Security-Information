<template>
  <div>
    <div class="Complaints-background clearfix">
      <div class="Complaints-header clearfix">
        <span>投诉事件</span>
        <el-button type="primary" icon="el-icon-circle-plus" class="addcomplaint"
          >新增</el-button
        >
        <el-button icon="iconfont el-icon-hospital-passwordexport" class="exportcomplaint"
          >导出</el-button
        >
      </div>
      <div class="Complaints-screen clearfix">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="投诉人">
            <el-input v-model="complaintname" placeholder="请输入投诉人姓名"></el-input>
          </el-form-item>
          <el-form-item label="投诉方式">
            <el-select v-model="complainttype" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="事件状态">
            <el-select v-model="complaintstatus" placeholder="请选择">
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="投诉日期">
            <el-date-picker
              v-model="complaintsate"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-form>
        <el-button type="primary" icon="el-icon-search" class="search" @click="clicks"
          >搜索</el-button
        >
      </div>
      <div class="Complaints-content">
        <el-table :data="tableData" style="width: 94%; margin-left: 3%" :header-cell-style="getRowClass">
          <el-table-column prop="date" label="序号" width="180"> </el-table-column>
          <el-table-column prop="D_I_Number" label="事件编码" width="180">
          </el-table-column>
          <el-table-column prop="C_I_Name" label="投诉人姓名"> </el-table-column>
          <el-table-column prop="C_I_Gender" label="性别"> </el-table-column>
          <el-table-column prop="C_I_Age" label="年龄"> </el-table-column>
          <el-table-column prop="C_I_Phone" label="手机号码"> </el-table-column>
          <el-table-column prop="D_Name" label="投诉科室"> </el-table-column>
          <el-table-column prop="Complaint_Mode" label="投诉方式"> </el-table-column>
          <el-table-column prop="Complaint_Time" label="投诉时间"> </el-table-column>
          <el-table-column prop="Deparment " label="流转部门"> </el-table-column>
          <el-table-column prop="Event_State" label="事件状态"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="150%" >
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">医患记录</el-button>
            <el-button type="text" size="small">操作</el-button>
          </el-table-column>
        </el-table>
      </div>
      <div class="">

      </div>
    </div>
  </div>
</template>

<script>
// import AdminHead from './components/AdminHead'

export default {
  components: {},

  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
      ],
      option: [
        {
          value: "选项1",
          label: "黄金糕",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "1",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "1 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "1 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "1 1516 弄",
        },
          {
          date: "2016-05-03",
          name: "王小虎",
          address: "1 1516 弄",
        },
          {
          date: "2016-05-03",
          name: "王小虎",
          address: "1 1516 弄",
        },
          {
          date: "2016-05-03",
          name: "王小虎",
          address: "1 1516 弄",
        },
          {
          date: "2016-05-03",
          name: "王小虎",
          address: "1 1516 弄",
        },
      ],
      complaintname: "",
      complainttype: "",
      complaintstatus: "",
      complaintsate: "",
      form: {},
    };
  },

  methods: {
    clicks() {
      console.log(this.complaintsate);
      var stime = new Date(this.complaintsate[0]);
      var StartTime =
        stime.getFullYear() + "-" + (stime.getMonth() + 1) + "-" + stime.getDate();
      console.log(StartTime);
      var etime = new Date(this.complaintsate[1]);
      var EndTime =
        etime.getFullYear() + "-" + (etime.getMonth() + 1) + "-" + etime.getDate();
      console.log(EndTime);
    },
    // 设置表头颜色
    getRowClass ({ rowIndex }) {
      if (rowIndex == 0) {
        return 'background:#c2c5f6'
      } else {
        return ''
      }
  }
  }
};
</script>

<style scoped>
@import "./css/index.css";
</style>
