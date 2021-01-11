<template>
  <div class="articleList_all">
    <!-- top -->
    <div class="articleList_top">
      <div class="articleList_top_left">
        <h5>文章列表</h5>
      </div>
      <div class="articleList_top_right">
        <el-button type="primary" icon="el-icon-circle-plus" @click="myAdd"
          >添加文章</el-button
        >
      </div>
    </div>
    <!-- table -->
    <div class="articleList_table">
      <!-- 搜索部门 -->
      <div class="articleList_table_search">
        <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        ></el-cascader>
        <el-input placeholder="请输入文章名称" v-model="input3">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <!-- 表格部分 -->
      <div class="articleList_table_table">
        <!-- 表格 -->
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="标题">
            <template slot-scope="scope">{{ scope.row.title }}</template>
          </el-table-column>
          <el-table-column prop="column" label="栏目"> </el-table-column>
          <el-table-column prop="date" label="发布时间" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="name" label="发布人" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick" type="text" size="small"
                >查看</el-button
              >
              -<el-button type="text" size="small" @click="edit"
                >编辑</el-button
              >
              -
              <el-button
                type="text"
                size="small"
                style="color: red"
                @click="handleDelete(scope.$index, tableData)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- 选择器 -->
        <div class="articleList_table_table_select">
          <el-select v-model="value5" placeholder="请选择" @change="dilog">
            <el-option
              v-for="item in name"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
            <!-- <el-option
              label="移至栏目"

              value="移至栏目"
            ></el-option>
            <el-option label="删除" value="删除"></el-option> -->
          </el-select>
        </div>
        <!-- 弹框 -->
        <div class="articleList_table_table_select">
          <el-dialog
            :title="dlog"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <!-- <span>这是一段信息</span> -->
            <div>
              <p v-if="isShow">确定删除所选文章</p>
              <div class="block" v-else>
                <el-cascader
                  v-model="valueHover"
                  :options="optionsHover"
                  :props="{ expandTrigger: 'hover' }"
                ></el-cascader>
              </div>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false"
                >确 定</el-button
              >
            </span>
          </el-dialog>
        </div>

        <!-- 分页 -->
        <div class="articleList_table_table_paging">
        
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[8, 10, 20]"
      :page-size="8"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/views/H-Articlelist/component/articleList/css.css";

export default {
  components: {},
  props: {},
  data() {
    return {
      //弹框部分
      dialogVisible: false,
      // 搜索部分
      value: [],
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
      value: "",
      input3: "",
      //   表格部分
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          title: "文章标题",
          column: "一级栏目1",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          title: "文章标题",
          column: "一级栏目1",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          title: "文章标题",
          column: "一级栏目1",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          title: "文章标题",
          column: "一级栏目1",
        },
      ],
      multipleSelection: [],
      //处理
      value5: "",
      name: [
        {
          value: "1",
          label: "移至栏目",
        },
        {
          value: "2",
          label: "删除",
        },
      ],
      currentPage1: 5,
      // 弹框
      dlog: "",
      valueHover: [],
      optionsHover: [
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
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
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
              ],
            },
            {
              value: "others",
              label: "Others",
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
        },
      ],
      isShow: false,
    };
  },
  methods: {
    handleDelete(index, item) {
      item.splice(index,1)
       this.$message({
          showClose: true,
          message: '删除成功',
          type: 'success'
        });
    },
    //级选择器
    handleChange() {},
    //   点击查看
    handleClick() {
      this.$emit("myRe");
    },
    // 编辑
    edit() {
      this.$router.push("/Addarticle");
    },
    myAdd() {
      this.$router.push("/Addarticle");
    },

    // 弹框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    dilog(e) {
      this.dialogVisible = !this.dialogVisible;
      console.log(e);
      if (e == 1) {
        this.dlog = this.name[0].label;
        this.isShow = false;
      } else {
        this.dlog = this.name[1].label;
        this.isShow = true;
      }
    },
  },
};
</script>
<style scoped>
</style>