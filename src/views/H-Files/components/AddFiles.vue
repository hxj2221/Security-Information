<template>
  <div class="newly">
    <!-- 头部 -->
    <div class="head">
      <h4 class="title">编辑分类</h4>
      <div class="push_btn">
        <i class="fa fa-plus-circle fa-2" aria-hidden="true" @click="dialogFormVisible = true"><span>新建分类</span></i>
        <span class="back" @click="back()">返回文件列表</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="newlyContent">
      <div class="TableContent">
        <el-table :data="tableData" style="width:100%">
          <el-table-column prop="id" label="权重">
          </el-table-column>
          <el-table-column prop="filename" label="分类名称">
          </el-table-column>
          <el-table-column prop="num" label="文件数量">
          </el-table-column>
          <el-table-column prop="newdate" label="更新时间">
          </el-table-column>
          <el-table-column prop="state" label="状态">
            <el-switch v-model="tableData.value" active-color="#cccccc" inactive-color="#13ce66">
            </el-switch>
          </el-table-column>
          <el-table-column prop="name" label="修改人员">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button style="color:#666ee8" @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
              <el-button style="color: #1E1E1E;" @click.native.prevent="deleteRow(scope.$index, tableData)" type="text"
                size="small">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 分页 -->
      <div class="pagenum">
        <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
      <!-- 新增分类 -->
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <add-classify></add-classify>
      </el-dialog>
  </div>

</template>

<script>
import AddClassify from './AddClassify'
  export default {
    components: {
      AddClassify
    },
    props: {},
    data() {
      return {
        // 弹框显示
        dialogFormVisible: false,
        tableData: [{
          id: ' 5',
          filename: '调解书模板',
          num: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
          value:true
        }, {
          id: ' 0',
          filename: '第三方调查模板',
          num: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
          value:true
        }, {
          id: ' 5',
          filename: '内部调查模板',
          num: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
          value:true
        }, {
          id: ' 0',
          filename: '上报公安模板',
          num: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
          value:true
        }, {
          id: ' 5',
          filename: '会议记录模板',
          num: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
          value:true
        }],
      };
    },
    methods: {
      // 返回
      back() {
        this.$emit('newly')
      },
      // 删除
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      // 编辑
      handleClick(row) {
        console.log(row);
      },
    },
  }
</script>
<style>
</style>