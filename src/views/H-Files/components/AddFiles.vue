import service from '@/service/index';
<template>
  <div class="newlyFiles">
    <!-- 头部 -->
    <div class="head">
      <h4 class="title">编辑分类</h4>
      <div class="push_btn">
        <el-button type="primary" class="newclassify" icon="el-icon-circle-plus" @click="dialogFormVisible = true" >新建分类
        </el-button>
        <el-button class="back" type="primary" size="default" @click="back">返回文件列表</el-button>
      </div>
    </div>
    <!-- 内容 -->
    <div class="newlyContent">
      <div class="TableContent">
        <el-table
          max-height="662"
          :data="tableData"
          row-key="id"
          default-expand-all
          :tree-props="{
            children: '_child',
            hasChildren: 'hasChildren',
          }"
        >
          <el-table-column prop="weight" label="权重"> </el-table-column>
          <el-table-column prop="class_name" label="分类名称" width="190">
          </el-table-column>
          <el-table-column prop="file_num" label="文件数量" width="190">
          </el-table-column>
          <el-table-column prop="update_time" label="更新时间" width="190">
          </el-table-column>
          <el-table-column label="状态" width="190">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                :active-value="1"
                :inactive-value="0"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="changeSwitch($event, scope.row, scope.row.id)"
              />
            </template>
          </el-table-column>

          <el-table-column prop="uid" label="修改人员" width="190">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                style="color: #666ee8"
                @click="handleClick(scope.row.id)"
                type="text"
                size="small"
                >编辑</el-button
              >
              <el-button
                style="color: #ff0000"
                @click="deleteRow(scope.row.id)"
                type="text"
                size="small"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 分页 -->
    <div class="pagenum">
     <el-pagination @size-change="handleSizeChange" @current-change="currentChage"
          :current-page="currentPage4" :page-sizes="pageNumList" :page-size="100"
          layout="total, sizes, prev, pager, next, jumper" :total="pageCount">
        </el-pagination>
    </div>
    <!-- 新增分类 -->
    <el-dialog
      class="newlyClassify"
      title="添加分类"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="上级分类" required :label-width="formLabelWidth">
          <el-select
            @change="selchang"
            v-model="editselvalue"
            placeholder="请选择"
          >
            <el-option label="作为顶级" :value="0"></el-option>
            <template v-for="v in editseldata">
              <el-option
                :key="v.id"
                :label="v.class_name"
                :value="v.id"
              ></el-option>
              <template v-if="v._child">
                <el-option
                  v-for="vv in v._child"
                  :key="vv.id"
                  :label="'|——' + vv.class_name"
                  :value="vv.id"
                >
                </el-option>
              </template>
            </template>
          </el-select>
          <span class="one_level">一级分类选择“无”</span>
        </el-form-item>
        <el-form-item label="分类标题" required :label-width="formLabelWidth">
          <el-input
            style="width: 360px"
            v-model="form.title"
            placeholder="请输入分类标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="分类权重" required :label-width="formLabelWidth">
          <el-input
            style="width: 360px"
            v-model="form.weight"
            placeholder="默认0，越大越靠前"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer foot">
        <el-button
          @click="dialogFormVisible = false"
          style="border-color: #0079fe; color: #0079fe"
          >取 消</el-button
        >
        <el-button
          type="primary"
          @click="dialogForm"
          style="background: #0079fe; color: #ffffff"
          >确 定
        </el-button>
      </div>
    </el-dialog>
    <!-- 编辑分类 -->
    <el-dialog
      class="newlyClassify"
      title="添加分类"
      :visible.sync="dialogVisible"
    >
      <el-form :model="form">
        <el-form-item label="上级分类" required :label-width="formLabelWidth">
          <el-select
            @change="selchang"
            v-model="editselvalue"
            placeholder="请选择"
          >
            <el-option label="作为顶级" :value="0"></el-option>
            <template v-for="v in editseldata">
              <el-option
                :key="v.id"
                :label="v.class_name"
                :value="v.id"
              ></el-option>
              <template v-if="v._child">
                <el-option
                  v-for="vv in v._child"
                  :key="vv.id"
                  :label="'|——' + vv.class_name"
                  :value="vv.id"
                >
                </el-option>
              </template>
            </template>
          </el-select>
          <span class="one_level">一级分类选择“无”</span>
        </el-form-item>
        <el-form-item label="分类标题" required :label-width="formLabelWidth">
          <el-input
            style="width: 360px"
            v-model="edittitle"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="分类权重" required :label-width="formLabelWidth">
          <el-input
            style="width: 360px"
            v-model="editweight"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer foot">
        <el-button
          @click="dialogVisible = false"
          style="border-color: #0079fe; color: #0079fe"
          >取 消</el-button
        >
        <el-button
          type="primary"
          @click="dialogeditsave"
          style="background: #0079fe; color: #ffffff"
          >确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import service from "@/service/index";
export default {
  inject: ["reload"],
  components: {},
  props: {},
  data() {
    return {
      // 新增弹框
      dialogFormVisible: false,
      form: {
        title: "",
        weight: "",
      },
      formLabelWidth: "120px",
      // 编辑弹框
      dialogVisible: false,
      tableData: [],
      editseldata: [],
      editselvalue: 0,
      edittitle: "",
      editweight: "",
      editid: "",
      currentPage4:1,//分页
      pageNumList:[8,10,20],//页数
      pageCount:0,//总数量
      pageSize:8,//默认条数
    };
    
  },
  created() {
    service.doclist().then((res) => {
      console.log(res);
      this.tableData = res.data;
    });
    service.docaddtree().then((res) => {
      console.log(res);
      if(res.code==20010){
        this.editseldata = res.data;
      }
       //else if (res.code == 20401) {
      //       this.$message({
      //         message: "请重新登陆",
      //         type: "error",
      //         duration: 1000,
      //       });
      //       this.$router.push('/login')
      //     } else if (res.code == 20403) {
      //       this.$message({
      //         message: res.msg,
      //         type: "error",
      //         duration: 1000,
      //       });
      //       this.$router.push('/dashboard')
      //     }
    });
  },
  methods: {
    // 分页
      // 每页显示条数
      handleSizeChange(val){
        console.log(val)
      },
      // 页面跳转
      currentChage(val){
        console.log(val)
      },
    selchang() {
      console.log(this.editselvalue);
    },
    dialogForm() {
      let data = {
        class_name: this.form.title,
        weight: this.form.weight,
        pid: this.editselvalue,
      };
      service.docadd(data).then((res) => {
        console.log(res);
        if (res.code == "20010") {
          this.reload();
        } else {
          alert(res.msg);
        }
      });
    },
    changeSwitch(val, row, id) {
      let data = {
        id: id,
        // status: row.status,
      };
      console.log(data);
      service.docstatu(data).then((res) => {
        console.log(res);
      });
      console.log(row.status);
      if (row.status == 1) {
        this.$message({
          type: "success",
          message: "文件启用成功",
        });
      } else {
        this.$message.error("文件停用成功");
      }
    },
    // 返回
    back() {
      this.$emit("newly");
    },
    // 删除
    deleteRow(id) {
      console.log(id);
      let data = {
        id: id,
      };
      console.log(data);
      service.docdel(data).then((res) => {
        console.log(res);
        this.reload();
      });
    },
    // 编辑
    handleClick(id) {
      console.log(id);
      this.dialogVisible = !this.dialogVisible;
      let param = {
        id: id,
      };
      service.docedit(param).then((res) => {
        console.log(res);
        this.edittitle = res.data[0].class_name;
        this.editweight = res.data[0].weight;
        this.editselvalue = res.data[0].pid;
        this.editid = res.data[0].id;
      });
    },
    dialogeditsave() {
      let data = {
        weight: this.editweight,
        pid: this.editselvalue,
        class_name: this.edittitle,
        id: this.editid,
      };
      service.doceditsave(data).then((res) => {
        console.log(res);
        if (res.code == "20010") {
          this.reload();
        }
      });
    },
  },
};
</script>
<style>
</style>