<template>
  <div class="addRecord_all">
    <!-- top -->
    <div class="addRecord_top">
      <h4>基本信息</h4>
    </div>
    <!-- 表单 -->

    <div class="addRecord_myform">
      <el-form ref="form" :model="form">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="业务编号" disabled>
              <el-input
                disabled="disabled"
                placeholder="提交后自动生成"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="沟通日期" required>
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.communicate_time"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="沟通地点" required>
              <el-input v-model="form.communication"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="患者姓名" required>
              <el-input v-model="form.patient_name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="患者所在科室">
              <el-select v-model="form.department_id" placeholder="活动区域">
                <el-option
                  v-for="item in depList"
                  :key="item.id"
                  :label="item.title"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8"></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="主持人姓名" required>
              <el-input v-model="form.hosp_name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="记录人姓名" required>
              <el-input v-model="form.note_taker"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="主要沟通事项">
              <el-input
                type="textarea"
                v-model="form.record_of_communication"
                max="200"
                min="10"
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 表格  附件信息 -->
    <div class="addRecord_enclosure">
      <div class="addRecord_enclosure_top">
        <div class="addRecord_enclosure_top_left">
          <h5>附件信息</h5>
        </div>
        <div class="addRecord_enclosure_top_right">
          <el-button
            type="primary"
            size="small"
            icon="el-icon-circle-plus-outline"
            @click="upLode_define"
            >上传附件</el-button
          >
        </div>
      </div>
      <!-- 弹框 -->
      <div class="addRecord_enclosure_dialog">
        <el-dialog
          title="上传文件"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <div class="addRecord_enclosure_dialog_div">
            <el-form ref="form" :model="dialogForm">
              <el-form-item label="上传文件">
                <el-input
                  v-model="dialogForm.file_name"
                  placeholder="请输入文件标题"
                ></el-input>
              </el-form-item>
              <el-form-item label="文件描述">
                <el-input
                  type="textarea"
                  v-model="dialogForm.file_describe"
                  placeholder="请输入文件描述"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  :headers="myHeaders"
                  class="upload-demo"
                  :action="imgUrl"
                  :on-success="UploadSuccess"
                  multiple
                  :limit="3"
                  
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div>
                </el-upload>
                <!-- <el-upload
                  :action="UploadUrl()"
                  :on-success="UploadSuccess"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload> -->
              </el-form-item>
            </el-form>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="define">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <!--主要表格 -->
      <div class="addRecord_enclosure_content">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="ID">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column label="文件名">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.file }}</span>
            </template>
          </el-table-column>
          <el-table-column label="文件描述">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>{{ scope.row.filecontent }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.files }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="文件大小">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.filesize }}</span>
            </template>
          </el-table-column>
          <el-table-column label="更新时间">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="文件类型">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.filetype }}</span>
            </template>
          </el-table-column>
          <el-table-column label="上传人员">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-link
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
                >下载</el-link
              >
              <el-link
                type="danger"
                @click="handleDelete(scope.$index, tableData)"
                >删除</el-link
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="addRecord_enclosure_paging">
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
    <!-- 表格  关联投诉信息 -->
    <div class="addRecord_relation">
      <div class="addRecord_relation_top">
        <h5>关联投诉信息</h5>
      </div>
      <div class="addRecord_relation_content">
        <el-table :data="tableData1" style="width: 100%">
          <el-table-column label="序号" type="index"> </el-table-column>
          <el-table-column label="事件编码" prop="event_number">
          </el-table-column>

          <el-table-column label="投诉人姓名" prop="complaint_name">
          </el-table-column>
          <el-table-column label="姓别" prop="sex"> </el-table-column>
          <el-table-column label="年龄" prop="age"> </el-table-column>
          <el-table-column label="手机号码" prop="complaint_phone">
          </el-table-column>
          <el-table-column label="投诉科室" prop="pass_department">
          </el-table-column>
          <el-table-column label="信息来源" prop="pass_department">
          </el-table-column>
          <el-table-column label="投诉时间" prop="create_time">
          </el-table-column>
          <el-table-column label="流转部门" prop="pass_department">
          </el-table-column>
          <el-table-column label="事件状态" prop="state.state_val">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-link
                type="primary"
                @click="handleSee(scope.$index, scope.row)"
                >查看</el-link
              >
            </template>
          </el-table-column>
        </el-table>
        <el-button
          type="primary"
          size="small"
          icon="el-icon-circle-plus-outline"
          >添加投诉信息</el-button
        >
      </div>
    </div>
    <!-- 固定定位按钮 -->
    <div class="addRecord_button">
      <div class="button_stlye">
        <el-button icon="el-icon-back" @click="mySubmit">返回</el-button>
        <el-button
          type="primary"
          icon="el-icon-document-checked"
          @click="mysubmit"
          >提交</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
var token = sessionStorage.getItem("token"); // 要保证取到
// 引入css
import "@/views/H-Connect/component/addRecord/css.css";
// 引用service
import service from "@/service/index";
export default {
  components: {},
  inject: ["reload"],
  props: {},
  data() {
    return {
      imgUrl: "http://bt1.wlqqlp.com:8082/api/record/upload_attachment",
      myHeaders: { Authorization: token },
      // 表单
      form: {
        communicate_time: "",
        communication: "",
        department_id: "",
        patient_name: "",
        hosp_name: "",
        note_taker: "",
        record_of_communication: "",
      },
      // 科室
      depList: [],
      // 表格1  附件信息
      tableData: [
        {
          id: "1",
          file: "hhh",
          filecontent: "hauhuhhajkfd",
          files: "123",
          filesize: "120kb",
          date: "2016-05-02",
          filetype: "jpg",
          name: "王小虎",
        },
        {
          id: "2",
          file: "hhh",
          filecontent: "hauhuhhajkfd",
          files: "123",
          filesize: "120kb",
          date: "2016-05-02",
          filetype: "jpg",
          name: "王小虎",
        },
        {
          id: "3",
          file: "hhh",
          filecontent: "hauhuhhajkfd",
          files: "123",
          filesize: "120kb",
          date: "2016-05-02",
          filetype: "jpg",
          name: "王小虎",
        },
        {
          id: "4",
          file: "hhh",
          filecontent: "hauhuhhajkfd",
          files: "123",
          filesize: "120kb",
          date: "2016-05-02",
          filetype: "jpg",
          name: "王小虎",
        },
      ],
      currentPage: 4,
      // 表格2  关联信息
      tableData1: [],
      // 弹框
      dialogVisible: false,
      dialogForm: {},
      fileList: [],
      file: [],
    };
  },
  methods: {
    // 编辑
    handleEdit(index, row) {},
    handleDelete(index, row) {
      row.splice(index, 1);
      this.$message({
        showClose: true,
        message: "删除成功",
        type: "success",
      });
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
    // 返回
    mySubmit() {
      this.$emit("abcClick");
    },
    mysubmit() {
      let data = {
        event_number: this.tableData1[0].event_number,
        communicate_time: this.form.communicate_time,
        communication: this.form.communication,
        department_id: this.form.department_id,
        patient_name: this.form.patient_name,
        hosp_name: this.form.hosp_name,
        note_taker: this.form.note_taker,
        record_of_communication: this.form.record_of_communication,
      };
      service.patientAdd(data).then((res) => {
        console.log(res);
        if (res.code == 20010) {
          const loading = this.$loading({
            lock: true,
            text: "保存中",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)",
          });
          setTimeout(() => {
            loading.close();
            this.$emit("abcClick");
            this.reload();
          }, 2000);
        } else {
          this.$message.error(res.msg);
        }
      });
      // this.$emit("abcClick");
    },
    // 点击上传附件按钮
    upLode_define() {
      let params = {
        event_number: this.tableData1[0].event_number,
      };
      console.log(params);
      service.upLode(params).then((res) => {
        console.log(res);
        this.dialogVisible = true;
      });
      console.log(token);
    },
    UploadSuccess(response, file, index) {
      this.file = file;
      console.log(this.file);
    },
    //上传附件 确定
    define() {
      let data = {
        file_name: this.dialogForm.file_name,
        event_number: this.tableData1[0].event_number,
        file_describe: this.dialogForm.file_describe,
        file: this.file,
      };
      console.log(data);
      service.uplode(data).then((res) => {
        console.log(res);
        if (res.code == 20010) {
          this.$message({
            message: res.msg,
            type: "success",
          });
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    handleExceed() {},
    // 弹框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
  created() {
    this.bus.$on("selDep", (item) => {
      this.depList = item.data;
      this.tableData1 = item.event;
    });
  },
};
</script>
<style scoped>
</style>