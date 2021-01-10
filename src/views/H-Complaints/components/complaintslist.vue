<template>
  <div>
    <div class="comlist">
      <div class="Complaints-header clearfix">
        <span>投诉事件</span>
        <slot name="buttom">
          <el-button type="primary" icon="el-icon-circle-plus" class="addcomplaint" 
          >新增</el-button
        >
        </slot>
         <slot name="export">
        <el-button icon="iconfont el-icon-hospital-passwordexport" class="exportcomplaint"
          >导出</el-button
        >
        </slot>
      </div>
      <div class="Complaints-screen clearfix">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="投诉人">
            <el-input v-model="complaintname" placeholder="请输入投诉人姓名" type="input" :max="10" :maxlength="10" clearable></el-input>
          </el-form-item>
          <el-form-item label="投诉方式">
            <el-select v-model="complainttype" placeholder="请选择" clearable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="事件状态">
            <el-select v-model="complaintstatus" placeholder="请选择" clearable>
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
            style="width:200%"
              v-model="complaintsate"
              :picker-options="pickerOptions"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-form>
        <el-button
          type="primary"
          icon="el-icon-search"
          class="search"
          @click="clicks"
        ></el-button>
      </div>
      <slot name="table">
     
      </slot>
    
      
    </div>
  </div>
</template>
<script>
import Tables from '../components/Tables'

export default {
  components: {Tables},

  data() {
    return {
       pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      complaintname: "",
      complainttype: "",
      complaintstatus: "",
      complaintsate: "",
      form: {},
      options:[
        {
          value:"1",
          label:"2"
        }
      ],
       option:[
        {
          value:"1",
          label:"2"
        }
      ]
    };
  },

  methods: {
    // 搜索事件
    clicks() {
      // 将标准时间转为年月日
      var stime = new Date(this.complaintsate[0]);
      var StartTime =
        stime.getFullYear() + "-" + (stime.getMonth() + 1) + "-" + stime.getDate();
      var etime = new Date(this.complaintsate[1]);
      var EndTime =
        etime.getFullYear() + "-" + (etime.getMonth() + 1) + "-" + etime.getDate();
    },
  },
};
</script>

<style scoped>
@import "../css/complaintslist.css";
</style>
