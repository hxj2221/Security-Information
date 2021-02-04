<template>
  <div class="articleList_all">
    <!-- top -->
    <div class="articleList_top">
      <div class="articleList_top_left">
        <h5>文章列表</h5>
      </div>
      <div class="articleList_top_right">
        <el-button type="primary" size="medium" icon="el-icon-circle-plus" @click="myAdd"
          >添加文章</el-button
        >
      </div>
    </div>
    <!-- table -->
    <!-- <div class="articleList_table"> -->
    <!-- 搜索部门 -->
    <div class="articleList_table_search">
      <el-cascader
        v-model="value"
        :options="options"
        ref="unitAreacode"
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"
      ></el-cascader>
      <el-input placeholder="请输入文章名称" v-model="input3">
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="detailSeach"
        ></el-button>
      </el-input>
    </div>
    <!-- 表格部分 -->
    <div class="articleList_table_table">
      <div style="min-height: 590px">
        <!-- 表格 -->
        <el-table
          max-height="595"
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="编号" type="index"> </el-table-column>
          <el-table-column label="标题" prop="title"> </el-table-column>
          <el-table-column prop="classification.title" label="栏目">
          </el-table-column>
          <el-table-column
            prop="create_time"
            label="发布时间"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="user.name"
            label="发布人"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column label="操作" width="150" fixed="right">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button
                type="text"
                size="small"
                @click="myEdit(scope.row)"
                id="UserLogout"
                >编辑</el-button
              >
              <el-button
                type="text"
                size="small"
                style="color: red"
                @click="handleDelete(scope.row)"
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
          </el-select>
        </div>
      </div>

      <!-- 弹框 -->
      <div class="articleList_table_table_select">
        <el-dialog
          :title="dlog"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <div>
            <p v-if="isShow">确定删除所选文章</p>
            <div class="block" v-else>
              <el-cascader
                ref="cascaderDig"
                :options="optionsHover"
                :props="{ expandTrigger: 'hover' }"
                @change="handledig"
              ></el-cascader>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="istrue">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <!-- 分页 -->
      <div class="articleList_table_table_paging">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="numberlist"
          :page-size="num"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
// 引入css
import "@/views/H-Articlelist/component/articleList/css.css";
// 引入service
import service from "@/service/index";
export default {
  components: {},
  props: {},
  inject: ["reload"],
  data() {
    return {
      //弹框部分
      dialogVisible: false,
      ids: [],
      // 搜索部分
      // value: [],
      id: "",
      cid: "",
      options: [],
      value: "",
      input3: "",
      //   表格部分
      tableData: [],
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
      // 分页
      numberlist: [8, 10, 20],
      currentPage: 1,
      total: 0,
      num: 8,
      // 弹框
      dlog: "",
      valueHover: [],
      optionsHover: [],
      isShow: false,
    };
  },
  methods: {
    // 多选
    handleSelectionChange(val) {
      val.forEach((e) => {
        this.ids.push(e.id);
      });
    },
    // 搜索
    detailSeach() {
      let params = {
        cid: this.id,
        title: this.input3,
      };
      service.detailSeach(params).then((res) => {
        this.tableData = res.data.lists;
      });
    },
    // 分页
    handleSizeChange(val) {
      this.num = val;
      let params = {
        pNum: this.num,
        p: this.currentPage,
      };
      service.detailSeach(params).then((res) => {
        this.tableData = res.data.lists;
      });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      let params = {
        pNum: this.num,
        p: this.currentPage,
      };
      service.detailSeach(params).then((res) => {
        this.tableData = res.data.lists;
      });
    },
    // 删除
    handleDelete(e) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let params = {
            id: e.id,
          };
          service.detailDel(params).then((res) => {
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
    //级选择器
    handleChange(val) {
      this.id = this.$refs["unitAreacode"].getCheckedNodes()[0].value.id;
    },
    handledig(val) {
      this.cid = this.$refs["cascaderDig"].getCheckedNodes()[0].value.id;
    },
    //点击查看
    handleClick(e) {
      let params = {
        id: e.id,
      };
      service.detailinfo(params).then((res) => {
        if (res.code == 20010) {
          this.$emit("myRe");
          this.bus.$emit("info", res.data);
        }
      });
    },
    // 编辑
    myEdit(e) {
      let params = {
        id: e.id,
      };
      service.detailEdit(params).then((res) => {
        // this.$emit("abcClick");
        this.$parent.abcClick();
        this.bus.$emit("ariEdit", res.data);
      });
    },
    myAdd() {
      this.$router.push("/Addarticle");
    },
    // 分批    确定
    istrue() {
      this.dialogVisible = false;
      if (this.isShow == false) {
        let data = {
          cid: this.cid,
          ids: this.ids,
        };
        service.detailalls(data).then((res) => {
          if (res.code == 20010) {
            this.$message({
              type: "success",
              message: res.msg,
              duration: 1500,
            });
            this.reload();
          }
        });
      } else {
        let params = {
          ids: this.ids,
        };
        service.detailDels(params).then((res) => {
          this.$message({
            type: "success",
            message: res.msg,
            duration: 1500,
          });
          this.reload();
        });
      }
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
      if (this.ids.length !== 0) {
        this.dialogVisible = !this.dialogVisible;
        if (e == 1) {
          this.dialogVisible = !this.dialogVisible;
          this.dlog = this.name[0].label;
          this.isShow = false;
          service.detailAlls().then((res) => {
            this.dialogVisible = !this.dialogVisible;
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

            this.optionsHover = dataValueBatch(batchdata);
          });
        } else {
          this.dlog = this.name[1].label;
          this.isShow = true;
        }
      } else {
        this.$message({
          type: "error",
          message: "未选中内容",
          duration: 1500,
        });
        this.reload();
      }
    },
  },
  created() {
    let data = {
      pNum: 8,
      p: 1,
    };
    service.detailList(data).then((res) => {
      this.tableData = res.data.lists;
      this.total = res.data.page.count;
      // 搜索下拉框内容
      let batchdata = res.data.classification;
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
    });
  },
};
</script>
<style scoped>
</style>