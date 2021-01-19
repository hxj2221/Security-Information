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
        <el-form-item label="文章标题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="文章栏目" prop="region">
          <el-cascader
            v-model="ruleForm.value"
            :options="rules.options"
            :props="{ expandTrigger: 'hover' }"
          ></el-cascader>
        </el-form-item>

        <el-form-item label="文章摘要" prop="desc">
          <el-input
            type="textarea"
            :rows="5"
            v-model="ruleForm.abstract"
          ></el-input>
        </el-form-item>
        <el-form-item label="文章详情" prop="desc">
          <!-- <el-input
            type="textarea"
            :rows="5"
            v-model="ruleForm.details"
          ></el-input> -->
          <Tinymce></Tinymce>
        </el-form-item>
        <el-form-item label="是否置顶" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
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
        </el-form-item>
        <el-form-item label="发布时间" required>
          <el-date-picker
            v-model="ruleForm.value1"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="附件下载" prop="name">
          <el-upload
            class="upload-demo"
            action=""
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="rules.fileList1"
          >
            <el-button size="small" type="primary">上传附件</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="是否可见" prop="delivery">
          <el-switch v-model="ruleForm.delivery" active-color="#13ce66"
  inactive-color="#ff4949"></el-switch>
        </el-form-item>
      </el-form>
    </div>
    <!-- 底部 -->
    <div class="addArticle_bottom">
      <div class="addArticle_bottom_stlye">
        <el-button icon="el-icon-back" @click="myreturn">返回</el-button>
        <el-button
          type="primary"
          icon="el-icon-document-checked"
          @click="mysubmit"
          >确定</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
// import AdminHead from './components/AdminHead'
import "@/views/H-Addarticle/css.css";
import Tinymce from "@/views/Tinymce/index.vue";
export default {
  components: {
    Tinymce,
  },

  data() {
    return {
      ruleForm: {
        name: "",
        value1: "",
        value: [],
        abstract: "",
        region: "",
        details: "",
        sort: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        fileList1: [
          {
            name: "food.jpeg",
            url: "",
          },
          {
            name: "food2.jpeg",
            url: "",
          },
        ],
        fileList: [
          {
            name: "food.jpeg",
            url:
              "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
          },
        ],
        options: [
          {
            value: "zhinan",
            label: "指南",
            children: [
              {
                value: "shejiyuanze",
                label: "设计原则",
                children: [
                  {
                    value: "yizhi",
                    label: "一致",
                  },
                  {
                    value: "fankui",
                    label: "反馈",
                  },
                  {
                    value: "xiaolv",
                    label: "效率",
                  },
                  {
                    value: "kekong",
                    label: "可控",
                  },
                ],
              },
              {
                value: "daohang",
                label: "导航",
                children: [
                  {
                    value: "cexiangdaohang",
                    label: "侧向导航",
                  },
                  {
                    value: "dingbudaohang",
                    label: "顶部导航",
                  },
                ],
              },
            ],
          },
          {
            value: "zujian",
            label: "组件",
            children: [
              {
                value: "basic",
                label: "Basic",
                children: [
                  {
                    value: "layout",
                    label: "Layout 布局",
                  },
                  {
                    value: "color",
                    label: "Color 色彩",
                  },
                  {
                    value: "typography",
                    label: "Typography 字体",
                  },
                  {
                    value: "icon",
                    label: "Icon 图标",
                  },
                  {
                    value: "button",
                    label: "Button 按钮",
                  },
                ],
              },
              {
                value: "form",
                label: "Form",
                children: [
                  {
                    value: "radio",
                    label: "Radio 单选框",
                  },
                  {
                    value: "checkbox",
                    label: "Checkbox 多选框",
                  },
                  {
                    value: "input",
                    label: "Input 输入框",
                  },
                  {
                    value: "input-number",
                    label: "InputNumber 计数器",
                  },
                  {
                    value: "select",
                    label: "Select 选择器",
                  },
                  {
                    value: "cascader",
                    label: "Cascader 级联选择器",
                  },
                  {
                    value: "switch",
                    label: "Switch 开关",
                  },
                  {
                    value: "slider",
                    label: "Slider 滑块",
                  },
                  {
                    value: "time-picker",
                    label: "TimePicker 时间选择器",
                  },
                  {
                    value: "date-picker",
                    label: "DatePicker 日期选择器",
                  },
                  {
                    value: "datetime-picker",
                    label: "DateTimePicker 日期时间选择器",
                  },
                  {
                    value: "upload",
                    label: "Upload 上传",
                  },
                  {
                    value: "rate",
                    label: "Rate 评分",
                  },
                  {
                    value: "form",
                    label: "Form 表单",
                  },
                ],
              },
              {
                value: "data",
                label: "Data",
                children: [
                  {
                    value: "table",
                    label: "Table 表格",
                  },
                  {
                    value: "tag",
                    label: "Tag 标签",
                  },
                  {
                    value: "progress",
                    label: "Progress 进度条",
                  },
                  {
                    value: "tree",
                    label: "Tree 树形控件",
                  },
                  {
                    value: "pagination",
                    label: "Pagination 分页",
                  },
                  {
                    value: "badge",
                    label: "Badge 标记",
                  },
                ],
              },
              {
                value: "notice",
                label: "Notice",
                children: [
                  {
                    value: "alert",
                    label: "Alert 警告",
                  },
                  {
                    value: "loading",
                    label: "Loading 加载",
                  },
                  {
                    value: "message",
                    label: "Message 消息提示",
                  },
                  {
                    value: "message-box",
                    label: "MessageBox 弹框",
                  },
                  {
                    value: "notification",
                    label: "Notification 通知",
                  },
                ],
              },
              {
                value: "navigation",
                label: "Navigation",
                children: [
                  {
                    value: "menu",
                    label: "NavMenu 导航菜单",
                  },
                  {
                    value: "tabs",
                    label: "Tabs 标签页",
                  },
                  {
                    value: "breadcrumb",
                    label: "Breadcrumb 面包屑",
                  },
                  {
                    value: "dropdown",
                    label: "Dropdown 下拉菜单",
                  },
                  {
                    value: "steps",
                    label: "Steps 步骤条",
                  },
                ],
              },
              {
                value: "others",
                label: "Others",
                children: [
                  {
                    value: "dialog",
                    label: "Dialog 对话框",
                  },
                  {
                    value: "tooltip",
                    label: "Tooltip 文字提示",
                  },
                  {
                    value: "popover",
                    label: "Popover 弹出框",
                  },
                  {
                    value: "card",
                    label: "Card 卡片",
                  },
                  {
                    value: "carousel",
                    label: "Carousel 走马灯",
                  },
                  {
                    value: "collapse",
                    label: "Collapse 折叠面板",
                  },
                ],
              },
            ],
          },
          {
            value: "ziyuan",
            label: "资源",
            children: [
              {
                value: "axure",
                label: "Axure Components",
              },
              {
                value: "sketch",
                label: "Sketch Templates",
              },
              {
                value: "jiaohu",
                label: "组件交互文档",
              },
            ],
          },
        ],
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
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
      this.$router.go(-1);
    },
    mysubmit() {},
  },
};
</script>

<style lang="less" scoped></style>
