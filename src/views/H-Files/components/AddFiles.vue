<template>
  <div class="newlyFiles">
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
        <el-table :data="tableData">
          <el-table-column prop="id" label="权重">
          </el-table-column>
          <el-table-column prop="filename" label="分类名称" width="190">
          </el-table-column>
          <el-table-column prop="num" label="文件数量" width="190">
          </el-table-column>
          <el-table-column prop="newdate" label="更新时间" width="190">
          </el-table-column>
          <el-table-column prop="state" label="状态" width="190">
            <el-switch v-model="tableData.value" active-color="#cccccc" inactive-color="#13ce66">
            </el-switch>
          </el-table-column>
          <el-table-column prop="name" label="修改人员" width="190">
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
    <el-dialog class="newlyClassify" title="添加分类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="上级分类" required :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="无" value="one"></el-option>
            <el-option label="分类1" value="two"></el-option>
            <el-option label="分类2" value="three"></el-option>
            <el-option label="分类3" value="four"></el-option>
          </el-select>
          <span class="one_level">一级分类选择“无”</span>
        </el-form-item>
        <el-form-item label="分类标题" required :label-width="formLabelWidth">
          <el-input style="width:360px" v-model="form.title" placeholder="请输入分类标题" ></el-input>
        </el-form-item>
        <el-form-item label="分类权重" required :label-width="formLabelWidth">
          <el-input style="width:360px" v-model="form.weight" placeholder="默认0，越大越靠前"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer foot">
        <el-button @click="dialogFormVisible=false" style="border-color:#0079fe;color:#0079fe">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible=false" style="background:#0079fe;color:#ffffff">确 定
        </el-button>
      </div>
    </el-dialog>
    <!-- 编辑分类 -->
    <el-dialog class="newlyClassify" title="添加分类" :visible.sync="dialogVisible">
      <el-form :model="form">
        <el-form-item label="上级分类" required :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="无" value="one"></el-option>
            <el-option label="分类1" value="two"></el-option>
            <el-option label="分类2" value="three"></el-option>
            <el-option label="分类3" value="four"></el-option>
          </el-select>
          <span class="one_level">一级分类选择“无”</span>
        </el-form-item>
        <el-form-item label="分类标题" required :label-width="formLabelWidth">
          <el-input style="width:360px" v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="分类权重" required :label-width="formLabelWidth">
          <el-input style="width:360px" v-model="form.weight" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer foot">
        <el-button @click="dialogVisible=false" style="border-color:#0079fe;color:#0079fe">取 消</el-button>
        <el-button type="primary" @click="dialogVisible=false" style="background:#0079fe;color:#ffffff">确 定
        </el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
  export default {
    components: {
     
    },
    props: {},
    data() {
      return {
        // 新增弹框
        dialogFormVisible: false,
        form: {
          region: '',
          title: '',
          weight: '',
        },
        formLabelWidth: '120px',
        // 编辑弹框
        dialogVisible:false,
        tableData: [{
          id: ' 5',
          filename: '调解书模板',
          num: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
          value: true
        }, {
          id: ' 0',
          filename: '第三方调查模板',
          num: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
          value: true
        }, {
          id: ' 5',
          filename: '内部调查模板',
          num: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
          value: true
        }, {
          id: ' 0',
          filename: '上报公安模板',
          num: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
          value: true
        }, {
          id: ' 5',
          filename: '会议记录模板',
          num: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
          value: true
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
        this.dialogVisible=!this.dialogVisible
      },
    },
  }
</script>
<style>
</style>