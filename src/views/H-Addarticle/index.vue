<template>
  <div class="addArticle_all">
    <!--头部 -->
    <div class="addArticle_top">
      <div class="addArticle_top_div">
        <h5>添加文章</h5>
      </div>
    </div>
    <!-- 内容 -->
    <div class="addArticle_content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="文章标题">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文章栏目">
          <el-cascader
            ref="unitAreacode"
            :options="rules.options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>

        <el-form-item label="文章摘要">
          <el-input
            type="textarea"
            :rows="5"
            v-model="ruleForm.abstract"
          ></el-input>
        </el-form-item>
        <el-form-item label="文章详情">
          <!-- <el-input
            type="textarea"
            :rows="5"
            v-model="ruleForm.details"
          ></el-input> -->
          <Tinymce @onClick="onClick"></Tinymce>
        </el-form-item>
        <el-form-item label="是否置顶" prop="resource">
          <el-radio-group v-model="ruleForm.elRadio">
            <el-radio
              v-for="(item, index) in elRadio"
              :key="index"
              :label="item.value"
              >{{ item.label }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item label="排序" prop="name">
          <el-input
            v-model="ruleForm.sort"
            placeholder="数字越大越靠前，默认0"
          ></el-input>
        </el-form-item>
        <el-form-item label="文章封面" prop="name">
          <el-upload
            class="upload-demo"
            action="imgUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-change="handleChange"
            :file-list="rules.fileList"
            list-type="picture"
          >
            <el-button size="small" type="primary">上传封面</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>

        <el-form-item label="是否可见" prop="delivery">
          <el-switch
            v-model="ruleForm.delivery"
            :active-value="0"
            :inactive-value="1"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </el-form-item>
      </el-form>
    </div>
    <!-- 底部 -->
    <div class="addArticle_bottom">
      <div class="addArticle_bottom_stlye">
        <el-button
          type="primary"
          icon="iconfont el-icon-hospital-passwordbaocun"
          @click="mysubmit"
          >确定
        </el-button>
        <el-button
          type="primary"
          icon="iconfont el-icon-hospital-passwordai207"
          @click="myreturn"
          >返回
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
// import AdminHead from './components/AdminHead'
import "@/views/H-Addarticle/css.css";
import Tinymce from "@/views/Tinymce/index.vue";
// 引入service
import service from "@/service/index";
export default {
  components: {
    Tinymce,
  },
  data() {
    return {
      imgUrl: "http://bt1.wlqqlp.com:8082/api/article/article_eit",
      // radio
      elRadio: [
        { label: "是", value: 1 },
        { label: "否", value: 0 },
      ],
      id: "",
      ruleForm: {
        elRadio: 1,
      },
      rules: {
        options: [],

        fileList: [],

        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleChange(e) {
      this.rules.fileList.push(e);
    },
    // 获取到文章详情的内容
    onClick(e) {
      this.ruleForm.details = e;
    },
    handleChange(val) {
      this.id = this.$refs["unitAreacode"].getCheckedNodes()[0].value.id;
    },
    handleRemove(file, fileList) {
    },
    handlePreview(file) {
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    myreturn() {
      this.$router.push("/Articlelist");
      // this.$router.go(-1);
    },
    mysubmit() {
      let data = {
        title: this.ruleForm.title, //标题
        cid: this.id, //分类ID
        abstract: this.ruleForm.abstract, //摘要
        content: this.ruleForm.details, //详情
        sort: this.ruleForm.sort, //排序
        is_top: this.ruleForm.elRadio, //是否置顶
        state: this.ruleForm.delivery, //状态
        img_url: this.rules.fileList, //封面
      };
      service.detailadd(data).then((res) => {
        if (res.code == 20010) {
          this.$message({
            type: "success",
            message: res.msg,
            duration: 1500,
          });
          this.$router.push('Articlelist')
        }
      });
    },
  },
  created() {
    service.detailAdd().then((res) => {
      let batchdata = res.data;
      let dataValueBatch = (batchdata) =>
        batchdata.map(({ id, title, pid, _child }) =>
          _child
            ? {
                value: {
                  id: id,
                  value: id,
                  pid: pid,
                },
                label: title,
                children: dataValueBatch(_child),
              }
            : {
                value: {
                  id: id,
                  value: id,
                  pid: pid,
                },
                label: title,
              }
        );

      this.rules.options = dataValueBatch(batchdata);
      
    });
  },
};
</script>

<style lang="less" scoped></style>
