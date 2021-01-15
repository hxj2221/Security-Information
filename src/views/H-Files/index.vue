<template>
  <div>
    <div class="filelist" v-show="filesIsShow">
      <!-- 头部 -->
      <div class="head">
        <h4 class="title">文件列表</h4>
        <div class="push_btn">
          <i
            class="fa fa-plus-circle fa-2"
            aria-hidden="true"
            @click="uploadclassify()"
            ><span>上传文件</span></i
          >
          <i
            class="fa fa-plus-circle fa-2"
            aria-hidden="true"
            @click="newclassify()"
            ><span>新建分类</span></i
          >
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
        <el-table :data="tableData">
          <el-table-column prop="id" label="ID" width="180"> </el-table-column>
          <el-table-column prop="file_name" label="文件名" width="180">
          </el-table-column>
          <el-table-column prop="file_describe" label="文件描述" width="260">
          </el-table-column>
          <el-table-column prop="file_size" label="文件大小" width="180">
          </el-table-column>
          <el-table-column prop="create_time" label="更新时间" width="180">
          </el-table-column>
          <el-table-column prop="class_id" label="文件分类" width="180">
          </el-table-column>
          <el-table-column prop="uid" label="上传人员" width="180">
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button
                style="color: #666ee8"
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >下载</el-button
              >
              <el-button
                style="color: #1e1e1e"
                @click.native.prevent="deleteRow(scope.$index, tableData)"
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
      <div class="pagenum">
        <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000"
        >
        </el-pagination>
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
        <el-upload
          class="upload-demo"
          action="http://bt1.wlqqlp.com:8082/api/file/addfile"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
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
        <el-form-item label="文件描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">上传</el-button>
          <el-button @click="resetForm">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import "./css/Files.css";
import AddFiles from "./components/AddFiles";
import service from "@/service/index";
export default {
  components: {
    AddFiles,
  },
  props: {},
  data() {
    return {
      dialogVisible: false,
      ruleForm: {
        name: "",
        region: "",
        desc: "",
      },
      editseldata: [],
      editselvalue: 0,
      fileList: [],
      rules: {
        name: [
          { required: true, message: "请输入文件标题", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur",
          },
        ],
        region: [{ required: true, message: "请选择分类", trigger: "change" }],
      },
      form: {
        input: "",
        region: "",
        options: [
          {
            value: "选项1",
            label: "分类1",
          },
          {
            value: "选项2",
            label: "分类2",
          },
          {
            value: "选项3",
            label: "分类3",
          },
          {
            value: "选项4",
            label: "分类4",
          },
        ],
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
    submitForm() {
      let data = {
        file_name: this.ruleForm.name,
        file_describe: this.ruleForm.desc,
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
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    // 下载
    handleClick(row) {
      console.log(row);
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
  },
};
</script>
<style>
</style>