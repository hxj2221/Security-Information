<template>
  <div class="columnList_all">
    <!-- top -->
    <div class="columnList_top">
      <div class="columnList_top_left">
        <h5>文章分类</h5>
      </div>
      <div class="columnList_top_right">
        <el-button type="primary" icon="el-icon-plus">新增记录</el-button>
        <el-button @click="articleList">返回文章列表</el-button>
      </div>
    </div>
    <hr />
    <!-- table -->
    <div class="columnList_table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="weight" label="权重"> </el-table-column>
        <el-table-column prop="classification" label="分类名称">
        </el-table-column>
        <el-table-column prop="num" label="文章数量"> </el-table-column>
        <el-table-column prop="date" label="更新时间"> </el-table-column>
        <el-table-column  label="状态">
          <el-switch
            v-model="tableData.value"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-table-column>
        <el-table-column prop="name" label="修改人员"> </el-table-column>
        <el-table-column label="操作">
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small" >删除</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// import AdminHead from './components/AdminHead'
import "@/views/H-Columnlist/css.css";
export default {
  components: {},

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          weight: "上海",
          classification: "普陀区",
          num: "12",
          value: false,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          weight: "上海",
          classification: "普陀区",
          num: "12",
           value: false,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          weight: "上海",
          classification: "普陀区",
          num: "12",
          value: true,
        },
      ],
    };
  },

  methods: {
    articleList(){
      this.$router.push('/Articlelist')
    }
  },
};
</script>

<style lang="less" scoped></style>
