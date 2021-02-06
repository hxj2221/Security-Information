<template>
  <div class="addArticle_all">
    <!--头部 -->
    <div class="addArticle_top">
      <div class="addArticle_top_div">
        <h5>编辑文章</h5>
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
            v-model="id"
            :options="rules.options"
            :props="{
              expandTrigger: 'hover',
              value: 'id',
              label: 'title',
              key: 'pid',
              children: '_child',
            }"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>

        <el-form-item label="文章摘要">
          <el-input type="textarea" :rows="5" v-model="ruleForm.abstract"></el-input>
        </el-form-item>
        <el-form-item label="文章详情">
          <!-- <Tinymce @onClick="onClick" :tochild='parentVal'></Tinymce> -->
          <tinymce-editor
           ref="editor"
           class="tinyEditor"
           style="width:80%"
           v-model="parentVal"
           :disabled="disabled"
           @onClick="onClick"
         >
        </tinymce-editor>
        </el-form-item>
        <el-form-item label="是否置顶" prop="resource">
          <el-radio-group v-model="ruleForm.is_top">
            <el-radio v-for="(item, index) in elRadio" :key="index" :label="item.value">{{
              item.label
            }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="排序" prop="name">
          <el-input
            v-model="ruleForm.sort"
            placeholder="数字越大越靠前，默认0"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="文章封面" prop="name">
          <el-upload
            class="upload-demo"
            action=""
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="rules.fileList"
            list-type="picture"
          >
            <el-button size="small" type="primary">上传封面</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item> -->

        <el-form-item label="是否可见" prop="delivery">
          <el-switch
            v-model="ruleForm.state"
            :active-value="1"
            :inactive-value="0"
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
import TinymceEditor from "@/components/TinymceEditor";

// 引入service
import service from "@/service/index";
export default {
  components: {
    Tinymce,
    TinymceEditor,
  },
  data() {
    return {
      disabled:false,
      detailesss:'',
      parentVal: "",
      unitAreacode: [],
      // radio
      elRadio: [
        { label: "是", value: 1 },
        { label: "否", value: 0 },
      ],
      id: "",
      ruleForm: {
        elRadio: 1,
        abstract:'',//文章摘要
        is_top:1,
        delivery:'',
        delivery:1,
        title:''
      },
      rules: {
        options: [],
        fileList: [],
      },
    };
  },
  methods: {
    // 获取到文章详情的内容
    onClick(e) {
      console.log(e)
      console.log(this.detailesss)
      // this.ruleForm.details = e;
    },
    handleChange(val) {
      console.log(this.id);
    },
    handleRemove(file, fileList) {},
    handlePreview(file) {},
    handleRemove(file, fileList) {},
    handlePreview(file) {},
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
      this.$emit("returnAdd");
    },
    mysubmit() {
      let cid=''
      if(this.id instanceof Array==true){
       cid = this.id.pop();
      console.log(cid);
      }else{
        cid = this.id
      }
      
      let data = {
        title: this.ruleForm.title, //标题
        cid: cid, //分类ID
        abstract: this.ruleForm.abstract, //摘要
        content: this.parentVal, //详情
        sort: this.ruleForm.sort, //排序
        is_top: this.ruleForm.is_top, //是否置顶
        state: this.ruleForm.state, //状态
        // img_url:this.ruleForm.img_url//封面
      };
      console.log(data)
      service.detailadd(data).then((res) => {
        if (res.code == 20010) {
          this.$message({
            type: "success",
            message: res.msg,
            duration: 1500,
          }).then(
            this.$router.go(0)
          )
           
        }
      });
    },
  },
  created() {
    this.bus.$on("ariEdit", (item) => {
      console.log(item);
      this.ruleForm = item.info;
      // this.ruleForm.elRadio = item.info.is_top;
      //  this.ruleForm.sort = item.info.sort;
      this.parentVal = item.info.content;
      this.id = item.info.cid;
      this.rules.options = item.cate;
    });
  },
};
</script>

<style lang="less" scoped></style>
