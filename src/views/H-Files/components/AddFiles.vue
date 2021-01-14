import service from '@/service/index';
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
          <el-table-column prop="weight" label="权重">
          </el-table-column>
          <el-table-column prop="class_name" label="分类名称" width="190">
          </el-table-column>
          <el-table-column prop="file_num" label="文件数量" width="190">
          </el-table-column>
          <el-table-column prop="update_time" label="更新时间" width="190">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="190">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="2" active-color="#02538C"
                inactive-color="#B9B9B9" @change="changeSwitch($event, scope.row)"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="uid" label="修改人员" width="190">
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
          <el-input style="width:360px" v-model="form.title" placeholder="请输入分类标题"></el-input>
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
  import service from '@/service/index'
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
        dialogVisible: false,
        tableData: [],
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
        this.dialogVisible = !this.dialogVisible
      },
      // 状态
      changeSwitch(val, row) {
        
      }
    },
    created() {
      // 分类列表
      service.FileAddList().then(res => {
        // console.log(res)
        this.tableData = res.data
      })
    }
  }
</script>
<style>
</style>