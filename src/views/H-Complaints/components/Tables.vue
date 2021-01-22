<template>
  <div>
      <div class="Complaints-screen clearfix">
        <el-form  label-width="80px">
          <el-form-item label="投诉人">
            <el-input v-model="complaintname" placeholder="请输入投诉人姓名" type="input" :max="10" :maxlength="10" clearable></el-input>
          </el-form-item>
          <el-form-item label="投诉方式">
            <el-select v-model="complainttype" placeholder="请选择" clearable>
              <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.title"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="事件状态">
            <el-select v-model="complaintstatus" placeholder="请选择" clearable>
              <el-option
                v-for="item in option"
                :key="item.state_val"
                :label="item.title"
                :value="item.state_val"
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
          @click="search"
        ></el-button>
      </div>
    <div class="Complaints-content">
      <el-table
        max-height='662'
        :data="tableData"
        style="width: 94%; margin-left: 3%; text-align: center"
        :header-cell-style="getRowClass"
      >
        <el-table-column type="index"  label="序号"> </el-table-column>
        <el-table-column prop="event_number" width="150"  label="事件编码"></el-table-column>
        <el-table-column prop="complaint_name"  label="投诉人姓名"> </el-table-column>
        <el-table-column prop="sex" label="性别"> </el-table-column>
        <el-table-column prop="age"  label="年龄/岁"> </el-table-column>
        <el-table-column prop="complaint_phone" width="110" label="手机号码"> </el-table-column>
        <el-table-column prop="department" label="投诉科室"  :show-overflow-tooltip='true'></el-table-column>
        <el-table-column prop="complaint_type.title"  label="投诉方式"> </el-table-column>
        <el-table-column prop="create_time"  label="投诉时间"> </el-table-column>
        <el-table-column prop="pass_names" :show-overflow-tooltip='true' label="流转部门"> </el-table-column>
        <el-table-column prop="state.title" width="110" label="事件状态"> </el-table-column>
        <slot name="column">
          <el-table-column fixed="right" label="操作" width="150">
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
        :current-page="currentPage4"
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
import moment from 'moment'
export default {
  components: {},

  data() {
    return {
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
      ],
        pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
       complaintname: "",
      complainttype: "",
      complaintstatus: "",
      complaintsate: "",
      tableData: [],
      numberlist: [8, 10, 20],
      currentPage4:1,
      total: 100,
      number: 8,
    };
  },

  methods: {
    // 查询
    search(){
      console.log(this.number, this.currentPage4,this.complaintname,this.complainttype,this.complaintstatus,this.complaintsate)
      if((this.complaintsate!==''&&this.complaintsate!==null)||this.complaintname!==''||this.complainttype!==''||this.complaintstatus!==''){
      // 将标准时间转为时间戳
      if(this.complaintsate!==''&&this.complaintsate!==null){
      let starttime= new Date(this.complaintsate[0]).getTime()
      let endtiem= new Date(this.complaintsate[1]).getTime()
      service.search(this.number, this.currentPage4,this.complaintname,this.complainttype,this.complaintstatus,starttime,endtiem).then(res=>{
        console.log(res)
        if(res.code==20010){
          this.tableData = res.data[0];
          this.total = res.data[1].count;
          this.currentPage4 = res.data[1].current;
        }
        else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      })
       }
      else{
      service.search(this.number, this.currentPage4,this.complaintname,this.complainttype,this.complaintstatus,'','').then(res=>{
        console.log(res)
        if(res.code==20010){
          this.tableData = res.data[0];
          this.total = res.data[1].count;
          this.currentPage4 = res.data[1].current;
        }
         else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      })
     }
    }
    else{
       service.ComList(this.number, this.currentPage4).then((res) => {
        if (res.code == 20010) {
          this.tableData = res.data[0];
          this.total = res.data[1].count;
          this.currentPage4 = res.data[1].current;
        }  else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      });
    }
    
    },
    handleSizeChange(val) {
      this.number = val;
    if((this.complaintsate!==''&&this.complaintsate!==null)||this.complaintname!==''||this.complainttype!==''||this.complaintstatus!==''){
      // 将标准时间转为时间戳
      if(this.complaintsate!==''&&this.complaintsate!==null){
      let starttime= new Date(this.complaintsate[0]).getTime()
      let endtiem= new Date(this.complaintsate[1]).getTime()
      service.search(this.number, this.currentPage4,this.complaintname,this.complainttype,this.complaintstatus,starttime,endtiem).then(res=>{
        console.log(res)
        if(res.code==20010){
          this.tableData = res.data[0];
          this.total = res.data[1].count;
          this.currentPage4 = res.data[1].current;
        }
         else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      })
       }
      else{
      service.search(this.number, this.currentPage4,this.complaintname,this.complainttype,this.complaintstatus,'','').then(res=>{
        console.log(res)
        if(res.code==20010){
          this.tableData = res.data[0];
          this.total = res.data[1].count;
          this.currentPage4 = res.data[1].current;
        }
        else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      })
     }
    }
    else{
        service.ComList(this.number, this.currentPage4).then((res) => {
        if (res.code == 20010) {
          this.tableData = res.data[0];
          this.total = res.data[1].count;
          this.currentPage4 = res.data[1].current;
        } else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      });
    }
    
    },
    handleCurrentChange(val) {
      this.currentPage4 = val;
        if((this.complaintsate!==''&&this.complaintsate!==null)||this.complaintname!==''||this.complainttype!==''||this.complaintstatus!==''){
      // 将标准时间转为时间戳
      if(this.complaintsate!==''&&this.complaintsate!==null){
      let starttime= new Date(this.complaintsate[0]).getTime()
      let endtiem= new Date(this.complaintsate[1]).getTime()
      service.search(this.number, this.currentPage4,this.complaintname,this.complainttype,this.complaintstatus,starttime,endtiem).then(res=>{
        console.log(res)
        if(res.code==20010){
          this.tableData = res.data[0];
          this.total = res.data[1].count;
          this.currentPage4 = res.data[1].current;
        }
         else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      })
       }
      else{
      service.search(this.number, this.currentPage4,this.complaintname,this.complainttype,this.complaintstatus,'','').then(res=>{
        console.log(res)
        if(res.code=20010){
          this.tableData = res.data[0];
          this.total = res.data[1].count;
          this.currentPage4 = res.data[1].current;
        }
         else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      })
     }
    }
      else{
      service.ComList(this.number, this.currentPage4).then((res) => {
        console.log(res);
        if (res.code == 20010) {
          this.tableData = res.data[0];
          this.total = res.data[1].count;
          this.currentPage4 = res.data[1].current;
        }  else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      });
      }
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
    service.ComList(this.number, this.currentPage4).then((res) => {
      console.log(res)
      if (res.code == 20010) {
        this.tableData = res.data[0];
        this.total = res.data[1].count;
        this.currentPage4 = res.data[1].current;
        this.options=res.data[2].ComplaintType
        this.option=res.data[2].state
      }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
        else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
      
         else{
          this.$message({
            message: "请求错误",
            type: "error",
            duration: 1000,
          });
        }
    })
  },
};
</script>

<style scoped>
@import "../css/Table.css";
</style>
