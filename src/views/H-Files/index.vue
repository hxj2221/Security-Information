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
        <el-form class="search_form" ref="form">
          <el-form-item class="classify" label="文件分类">
            <el-select
              @change="searchselchang"
              v-model="selregion"
              placeholder="请选择"
              clearable
              @clear="delValue"
            >
              <!-- <el-option label="请选择" value=""></el-option> -->
              <template v-for="v in options">
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
          <el-input
            placeholder="请输入内容"
            v-model="searchipt"
            class="input-with-select"
            clearable
            @clear="delValue"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="filesearch"
            ></el-button>
          </el-input>
        </el-form>
      </div>
      <!-- 表格内容 -->
      <div class="TableContent">
        <el-table
          :data="tableData"
          max-height="550"
          :header-cell-style="getRowClass"
        >
          <el-table-column width="50" label="序号" type="index">
          </el-table-column>
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
                @click="deleteRow(scope.row.id)"
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
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="nums"
            :page-size="num"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- 新增分类 -->
    <add-files
      v-show="addIsShow"
      :newly="newfilelist"
      @addfileback="newclassify()"
    ></add-files>
    <!-- 上传 -->
    <el-dialog title="上传文件" :visible.sync="dialogVisible">
      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="文件分类">
          <el-select
            style="float: left"
            class="newlyClassify"
            @change="selchang"
            v-model="editselvalue"
            placeholder="请选择"
          >
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
        <el-form-item label="文件标题">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="文件描述">
          <el-input
            type="textarea"
            v-model="filedescribe"
            maxlength="50"
            placeholder="请输入文件描述"
          ></el-input>
        </el-form-item>
        <el-form-item label="上传附件：" class="uploadfile">
          <el-upload
            style="float: left"
            action="http://bt1.wlqqlp.com:8082/api/file/event_base64_uploadfiles"
            :limit="1"
            :multiple="false"
            :file-list="listsss"
            :on-change="handleChange"
            :on-exceed="exceed"
            :auto-upload="false"
          >
            <el-button slot="trigger" size="small" type="primary"
              >选取文件</el-button
            >
            <div slot="tip">未知</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="Close">取 消</el-button>
        <el-button type="primary" @click="upfilesubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
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
      dialogVisible: false, //文件上传弹框
      ruleForm: {}, //文件上传内容
      name: "",
      selregion: "",
      listsss: [], //未上传文件列表
      filedescribe: "",
      desc: "",
      editseldata: [],
      editselvalue: "",
      fileList: [],
      tableData: [],
      filesIsShow: true,
      addIsShow: false,
      searchipt: "",
      options: [],
      tables1: [],
      currentPage: 1,
      total: 0, //总条数
      page: 1, //初始显示第几页
      pageSize: 1, //每页显示多少数据
      nums: [8, 10, 20],
      num: 8,
      newfilelist: [],
    };
  },
  created() {
    service.filelist().then((res) => {
      console.log(res);
      this.tableData = res.data;
      this.options = res.tree;
      this.total = res.allNews;
    });
    let token = sessionStorage.getItem("token");
    console.log(token);
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
    // 搜索
    filesearch() {
      let data = {
        file_name: this.searchipt,
        class_id: this.selregion,
      };
      console.log(data);
      service.filelist(data).then((res) => {
        console.log(res);
        this.tables1 = this.tableData = res.data;
        this.total = res.allNews;
      });
    },
    searchselchang() {
      console.log(this.selregion);
    },
    // 上传文件显示
    uploadclassify() {
      this.dialogVisible = true;
      service.filetree().then((res) => {
        console.log(res);
        this.editseldata = res.data;
      });
    },
    // 上传文件取消
    Close() {
      this.dialogVisible = false;
    },
    handleChange(file, fileList) {
      this.file = fileList[0];
    },
    //超出限制的上传文件提示
    exceed() {
      this.$message({
        message: "单次只能上传一个文件",
        type: "error",
        duration: 1000,
      });
    },
    // 上传
    upfilesubmit() {
      this.getBase64(this.file.raw).then((res) => {
        let data = {
          file_name: this.name,
          file_describe: this.filedescribe,
          class_id: this.editselvalue,
          base64_file: res,
        };
        console.log(data);
        service.fileupload(data).then((res) => {
          console.log(res);
          if (res.code == 20010) {
            this.$message({
              message: res.msg,
              type: "success",
              duration: 1300,
            });
            this.reload();
          }
        });
      });
    },
    //文件转换64
    getBase64(file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        let fileResult = "";
        reader.readAsDataURL(file); //开始转
        reader.onload = function () {
          fileResult = reader.result;
        }; //转 失败
        reader.onerror = function (error) {
          reject(error);
          console.log(reject);
        }; //转 结束  咱就 resolve 出去
        reader.onloadend = function () {
          resolve(fileResult);
          console.log(fileResult);
        };
      });
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
        console.log(res);
        // let url = window.URL.createObjectURL(new Blob([res]));
        // let link = document.createElement("a");
        // link.style.display = "none";
        // link.href = url;
        // link.setAttribute("download", "4545"); // 文件名
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link); // 下载完成移除元素
        // window.URL.revokeObjectURL(url); // 释放掉blob对象
        // let filename = res.data.file_name;
        let link = document.createElement("a"); //创建a标签
        // link.style.display = "none"; //使其隐藏
        link.href = "http://bt1.wlqqlp.com:8082/" + res.data.fileurl; //赋予文件下载地址
        link.setAttribute("download", "dsadsa"); //设置下载属性 以及文件名
        document.body.appendChild(link); //a标签插至页面中
        link.click(); //强制触发a标签事件
        // var filename = res.data.file_name;
        // console.log(filename);
        // const a = document.createElement("a"); //创建a标签
        // a.style.display = "none";
        // a.href = "http://bt1.wlqqlp.com:8082/" + res.data.fileurl; // 指定下载链接
        // a.setAttribute("download", this.filename);
        // document.body.appendChild(a); //a标签插至页面中;
        // a.click(); //触发下载

        // URL.revokeObjectURL(a.href); //释放URL对象
        // const link = document.createElement("a"); // 生成一个a标签。
        // link.download = "res.data.file_name"; // dowload属性指定文件名
        // link.href = "http://bt1.wlqqlp.com:8082/" + res.data.fileurl; // href属性指定下载链接
        // link.click(); // click()事件触发下载

        // var a = document.createElement("a");
        // a.href = "http://bt1.wlqqlp.com:8082/" + res.data.fileurl;
        // a.download = res.data.file_name;
        // a.click();
        // this.isDisabled = false;
        //   // 不安全，无法带token
        //   // let a = document.createElement("a"); //创建a标签
        //   // a.href = `http://bt1.wlqqlp.com:8082/api/file/download?id=` + id; //通过a与id去下载
        //   // document.body.appendChild(a); //添加a
        //   // a.click(); //下载
        //   // URL.revokeObjectURL(a.href); // 释放URL 对象
        //   // document.body.removeChild(a); // 删除 a 标签
      });
    },

    // 新增分类
    newclassify() {
      this.filesIsShow = !this.filesIsShow;
      this.addIsShow = !this.addIsShow;
      service.doclist().then((res) => {
        console.log(res);
        this.newfilelist = res.data;
      });
    },
    // 分页
    handleSizeChange(val) {
      // 如果值多，有分页需要把该值一并传
      //this.staffbeldepart = "";
      this.num = val;
      let data = {
        pageSize: this.num,
        pageNum: this.currentPage,
        file_name: this.searchipt,
        class_id: this.selregion,
      };
      console.log(data);
      service.filelist(data).then((res) => {
        console.log(res);
        this.tables1 = this.tableData = res.data;
        this.total = res.allNews;
      });
    },
    handleCurrentChange(val) {
      //this.staffbeldepart = "";
      this.currentPage = val;
      console.log(`当前页: ${val}`);
      let data = {
        pageSize: this.num,
        pageNum: this.currentPage,
        file_name: this.searchipt,
        class_id: this.selregion,
      };
      console.log(data);
      service.filelist(data).then((res) => {
        console.log(res);
        this.tables1 = this.tableData = res.data;
        this.total = res.allNews;
      });
    },
    // 清空
    delValue() {
      let data = {
        file_name: "",
        pageSize: this.num,
        pageNum: this.currentPage,
      };
      service.filelist(data).then((res) => {
        this.tables = this.tableData = res.data;
        console.log(res);
        this.total = res.allNews;
      });
    },
    indexMethod(index) {
      return index * 1;
    },
  },
};
</script>
<style>
@import "./css/Files.css";
</style>