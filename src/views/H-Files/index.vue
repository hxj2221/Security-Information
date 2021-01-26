<template>
  <div>
    <div class="filelist" v-show="filesIsShow">
      <!-- 头部 -->
      <div class="head">
        <h4 class="title">文件列表</h4>
        <div class="push_btn">
          <el-button
            type="primary"
            icon="el-icon-circle-plus"
            @click="uploadclassify()"
            >上传文件
          </el-button>
          <el-button
            type="primary"
            class="newflie"
            icon="el-icon-circle-plus"
            @click="newclassify()"
            >新建分类
          </el-button>
        </div>
      </div>
      <!-- 搜索 -->
      <div class="search">
        <el-form class="search_form" ref="form" :model="form">
          <el-form-item class="classify" label="文件分类">
            <el-select v-model="form.region" placeholder="全部">
              <el-option
                v-for="item in form.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-input
            placeholder="请输入内容"
            v-model="form.input"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-form>
      </div>
      <!-- 表格内容 -->
      <div class="TableContent">
        <el-table
          :data="tableData"
          max-height="662"
          :header-cell-style="getRowClass"
        >
          <el-table-column prop="id" label="ID"> </el-table-column>
          <el-table-column prop="file_name" label="文件名"> </el-table-column>
          <el-table-column prop="file_describe" label="文件描述">
          </el-table-column>
          <el-table-column prop="file_size" label="文件大小"> </el-table-column>
          <el-table-column prop="create_time" label="更新时间" width="230">
          </el-table-column>
          <el-table-column prop="class_id" label="文件分类"> </el-table-column>
          <el-table-column prop="uid" label="上传人员"> </el-table-column>
          <el-table-column label="操作" fixed="right">
            <template slot-scope="scope">
              <el-button
                style="color: #666ee8"
                @click="handleClick(scope.row.id)"
                type="text"
                size="small"
                >下载</el-button
              >
              <el-button
                style="color: #ff0000"
                @click="deleteRow(scope.$index, scope.row.id)"
                type="text"
                size="small"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="staffpag">
        <div class="block">
          <el-pagination @size-change="handleSizeChange" @current-change="currentChage" :current-page="currentPage4"
          :page-sizes="pageNumList" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
          :total="pageCount">
        </el-pagination>
        </div>
      </div>
    </div>
    <!-- 新增分类 -->
    <add-files v-show="addIsShow" @newly="newclassify()"></add-files>
    <!-- 上传 -->
    <el-dialog title="上传文件" :visible.sync="dialogVisible">
      <el-form :model="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="文件标题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="文件分类" prop="region">
          <el-select
            @change="selchang"
            v-model="editselvalue"
            placeholder="请选择"
          >
            <el-option label="作为顶级" :value="0"></el-option>
            <template v-for="v in editseldata">
              <el-option
                :key="v.id"
                :label="v.class_name"
                :value="v.id"
              ></el-option>
              <template v-if="v._child">
                <el-option
                  v-for="vv in v._child"
                  :key="vv.id"
                  :label="'|——' + vv.class_name"
                  :value="vv.id"
                >
                </el-option>
              </template>
            </template>
          </el-select>
        </el-form-item>
        <form
          action="http://bt1.wlqqlp.com:8082/api/file/addfile"
          enctype="multipart/form-data"
          method="post"
        >
          <!-- 文件名称: <input type="text" name="file_name" /><br />
          文件描述:<input type="text" name="file_describe" /><br />
          文件分类:<input type="text" name="class_id" /><br /> -->
          <input type="file" name="file" />
          <!-- <input type="submit" value="上传" /> -->

          <el-form-item label="文件描述" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <input type="submit" value="上传" @click="submitForm" />
            <!-- <el-button type="primary" @click="submitForm">上传</el-button> -->
            <el-button @click="resetForm">取消</el-button>
          </el-form-item>
        </form>

        <form
          action="http://bt1.wlqqlp.com:8082/api/file/addfile"
          enctype="multipart/form-data"
          method="post"
        >
          文件名称: <input type="text" name="file_name" /><br />
          文件描述:<input type="text" name="file_describe" /><br />
          文件分类:<input type="text" name="class_id" /><br />
          <input type="file" name="file" />
          <input type="submit" value="上传" />
        </form>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import "./css/Files.css";
import AddFiles from "./components/AddFiles";
import service from "@/service/index";
export default {
  inject: ["reload"],
  components: {
    AddFiles,
  },
  props: {},
  data() {
    return {
      fileUrl: "",
      currentPage4: 1, //分页
      pageCount: 0, //总数量
      pageNumList: [8, 10, 20], //显示个数选择器
      pageSize: 8,
      dialogVisible: false, //文件上传弹框
      ruleForm: {}, //文件上传内容
      name: "",
      region: "",
      desc: "",
      editseldata: [],
      editselvalue: 0,
      fileList: [],
      persondata: [],
      form: {
        input: "",
        region: "",
      },
      tableData: [],
      filesIsShow: true,
      addIsShow: false,
    };
  },
  created() {
    service.filelist().then((res) => {
      console.log(res);
      this.tableData = res.data;
    });
    service.filetree().then((res) => {
      console.log(res);
      this.editseldata = res.data;
    });
  },
  methods: {
    // 设置表头颜色
    getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#c2c5f6;color:#000";
      } else {
        return "";
      }
    },
    submitForm() {
      let data = {
        file_name: this.name,
        file_describe: this.desc,
        class_id: this.editselvalue,
      };
      service.fileupload(data).then((res) => {
        console.log(res);
      });
    },
    resetForm() {},
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    selchang() {
      console.log(this.editselvalue);
    },
    // 删除
    deleteRow(id) {
      console.log(id);
      let data = {
        id: id,
      };
      service.filedel(data).then((res) => {
        console.log(res);
        this.$message({
          type: "success",
          message: res.msg,
          duration: 1200,
        });
        this.reload();
      });
    },
    // 下载
    handleClick(id) {
      console.log(id);
      let param = {
        id: id,
      };
      service.filedown(param).then((res) => {
        let a = document.createElement("a"); //创建a标签
        a.href = `http://bt1.wlqqlp.com:8082/api/file/download?id=` + id; //通过a与id去下载
        document.body.appendChild(a); //添加a
        a.click(); //下载
        URL.revokeObjectURL(a.href); // 释放URL 对象
        document.body.removeChild(a); // 删除 a 标签
        // const data = res; // 后端打回来的流文件
        // // 第一个参数是流文件 ，第二是格式， 这个在后端会提前声明的
        // console.log(data);
        // const url = window.URL.createObjectURL(
        //   new Blob([data], {
        //     type:
        //       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        //   })
        // );
        // const link = document.createElement("a");
        // link.style.display = "none";
        // link.href = url;
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
      });
    },
    // 上传文件
    uploadclassify() {
      this.dialogVisible = true;
    },
    // 新增分类
    newclassify() {
      this.filesIsShow = !this.filesIsShow;
      this.addIsShow = !this.addIsShow;
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    currentChage(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style>
</style>