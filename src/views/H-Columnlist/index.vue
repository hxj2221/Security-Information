<template>
  <div class="columnList_all">
    <!-- top -->
    <div class="columnList_top">
      <div class="columnList_top_left">
        <h5>文章分类</h5>
      </div>
      <div class="columnList_top_right">
        <el-button
          type="primary"
          size="medium"
          style="border: 3px solid #666ee8"
          icon="el-icon-circle-plus"
          @click="hhh"
          >新增记录</el-button
        >
        <el-button
          type="primary"
          size="medium"
          style="border: 1px solid #666ee8; padding: 11.5px"
          @click="articleList"
          >返回文章列表</el-button
        >
      </div>
    </div>
    <!-- 弹框 -->
    <el-dialog
      title="添加分类"
      :visible.sync="dialogVisible"
      style="width: 60%; margin: 0 auto"
    >
      <el-form :model="form">
        <el-form-item label="上级分类" :label-width="formLabelWidth">
          <el-cascader
            style="width: 80%"
            ref="unitAreacode"
            v-model="form.id"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-input
            style="width: 80%"
            v-model="form.title"
            placeholder="请输入分类标题"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="分类状态"
          style="text-align: left"
          :label-width="formLabelWidth"
        >
          <template>
            <el-switch
              style="margin-left: 35px"
              v-model="form.state"
              :active-value="1"
              :inactive-value="0"
              active-color="#13ce66"
              inactive-color="#ff4949"
            />
          </template>
        </el-form-item>
        <el-form-item label="分类权重" :label-width="formLabelWidth">
          <el-input
            style="width: 80%"
            v-model="form.order"
            placeholder="默认0，越大越靠前"
            type="number"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="AddList">确 定</el-button>
      </div>
    </el-dialog>
    <!-- table -->
    <div class="columnList_table">
      <el-table
        max-height="590"
        style="width: 94%; margin: 0 auto"
        :data="tableData"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: '_child', hasChildren: 'hasChildren' }"
      >
        <el-table-column type="index" label="编号" width="50">
        </el-table-column>

        <el-table-column prop="id" label="权重"> </el-table-column>
        <el-table-column prop="title" label="分类名称"> </el-table-column>
        <el-table-column prop="column_number" label="文章数量">
        </el-table-column>
        <el-table-column prop="update_time" label="更新时间"> </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.state"
              :active-value="1"
              :inactive-value="0"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="changeSwitch($event, scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column prop="update_uid" label="修改人员"> </el-table-column>
        <el-table-column label="操作" width="150" fixed="right">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="edit(scope.$index, scope.row, scope.row.id)"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="handDel(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 编辑弹框 -->
    <el-dialog
      title="编辑分类"
      :visible.sync="dialogVisibles"
      style="width: 60%; margin: 0 auto"
    >
      <el-form :model="forms">
        <el-form-item label="上级分类" :label-width="formLabelWidth">
          <el-cascader
            style="width: 80%"
            ref="unitAreacode"
            v-model="forms.id"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-input
            style="width: 80%"
            v-model="forms.title"
            placeholder="请输入分类标题"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="分类状态"
          style="text-align: left"
          :label-width="formLabelWidth"
        >
          <template>
            <el-switch
              style="margin-left: 35px"
              v-model="forms.state"
              :active-value="1"
              :inactive-value="0"
              active-color="#13ce66"
              inactive-color="#ff4949"
            />
          </template>
        </el-form-item>
        <el-form-item label="分类权重" :label-width="formLabelWidth">
          <el-input
            v-model="forms.order"
            style="width: 80%"
            placeholder="默认0，越大越靠前"
            type="number"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibles = false">取 消</el-button>
        <el-button type="primary" @click="AddEdit">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 分页 -->
    <!-- <div class="columnList_table_paging">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[8, 10, 20]"
        :page-size="8"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </div> -->
  </div>
</template>

<script>
// import AdminHead from './components/AdminHead'
import "@/views/H-Columnlist/css.css";
// 引入service
import service from "@/service/index";
import { duration } from "moment";
export default {
  components: {},
  inject: ["reload"],
  data() {
    return {
      id:'',
      tableData: [],
      dialogVisible: false, //添加
      dialogVisibles: false, //编辑
      //
      form: {
        id: "", //上级分类
        title: "", //活动区域
        state: 1, //分类状态
        order: "", //分类权重
      },
      forms: {},
      options: [],
      pid: "",
      currentPage: 1,
      formLabelWidth: "120px",
    };
  },

  methods: {
    // 新增
    hhh() {
      this.dialogVisible = true;
      service.Ariadd().then((res) => {
        console.log(res)
        let batchdata = res.data;
        //valueBatch
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

        this.options = dataValueBatch(batchdata);
        let one = {
          id: 0,
          value: 0,
          pid: 0,
          label: "默认为一级分类",
        };
        this.options.unshift(one);
      });
    },
    // 更改状态
    changeSwitch(val, row) {
      let data = {
        id: row.id,
      };
      service.AriStatus(data).then((res) => {
        if (res.code == 20010) {
          this.$message({
            message: res.msg,
            type: "success",
            duration: 1500,
          });
        }
      });
    },
    // 编辑
    edit(index, row, id) {
      this.id=id
      this.dialogVisibles = true;
      let params = {
        id: this.id,
      };
      service.AriEdit(params).then((res) => {
        console.log(res)
        this.forms = res.data.info;
        console.log(res);
        let batchdata = res.data.cate;
        //valueBatch
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

        this.options = dataValueBatch(batchdata);
        let one = {
          id: 0,
          value: 0,
          pid: 0,
          label: "默认为一级分类",
        };
        this.options.unshift(one);
      });
    },
    // 编辑确定
    AddEdit() {
      let data = {
        id:this.id,
        pid: this.pid,
        // pid: this.form.pid,
        title: this.forms.title,
        state: this.forms.state,
        order: this.forms.order,
      };
      service.Ariedit(data).then((res) => {
        console.log(res)
        if (res.code == 20010) {
          this.$message({
            message: res.msg,
            type: "success",
            duration: 1500,
          });
          this.dialogVisibles = false;
          this.reload();
        }
      });
    },
    // 添加中级选择器
    handleChange(val) {
      // console.log(this.$refs["unitAreacode"].getCheckedNodes()[0]);
      if (this.$refs["unitAreacode"].getCheckedNodes()[0].value == 0) {
        this.pid = 0;
      } else {
        this.pid = this.$refs["unitAreacode"].getCheckedNodes()[0].value.id;
      }
      console.log(this.pid);
      // if (this.$refs["unitAreacode"].getCheckedNodes()[0]) {
      //   // this.pid = 0;
      //   console.log(this.pid)

      // } else {
      //   this.pid = this.$refs["unitAreacode"].getCheckedNodes()[0].value.id;
      //   console.log(this.pid)
      // }
    },
    //添加
    AddList() {
      this.dialogVisible = true;
      let data = {
        pid: this.pid,
        title: this.form.title,
        state: this.form.state,
        order: this.form.order,
      };
      service.AriAdd(data).then((res) => {
        if (res.code == 20010) {
          this.$message({
            message: res.msg,
            type: "success",
            duration: 1500,
          });
          this.form = {};
          this.dialogVisible = false;
          this.reload();
        }
      });
    },
    articleList() {
      this.$router.push("/Articlelist");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    // 删除
    handDel(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let params = {
            id: row.id,
          };
          service.AriDel(params).then((res) => {
            this.$message({
              type: "success",
              message: "删除成功!",
              duration: 1500,
            });
            this.reload();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
            duration: 1500,
          });
        });
    },
  },
  created() {
    service.AriList().then((res) => {
      console.log(res);
      this.tableData = res.data;
    });
  },
};
</script>

<style lang="less" scoped></style>