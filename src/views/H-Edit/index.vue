<template>
  <div>
    <div class="H-edit">
      <!-- 头部 -->
      <headpow></headpow>
      <el-table
        :data="tableData"
        style="width: 96%; margin-left: 2%"
        :header-cell-style="getRowClass"
        row-key="id"
        border
        :tree-props="{
          children: '_child',
          hasChildren: 'hasChildren',
          id: 'id',
          title: 'title',
          sort: 'sort',
          icon: 'icon',
          name: 'name',
          url: 'url',
        }"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column
          type=""
          width="55"
          prop="sort"
          label="排序"
        ></el-table-column>
        <el-table-column prop="title" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="level" label="等级" width="180">
        </el-table-column>
        <el-table-column prop="icon" label="左侧图标"> </el-table-column>
        <el-table-column prop="name" label="接口地址"></el-table-column>
        <el-table-column prop="url" label="前端路由"> </el-table-column>
        <el-table-column label="角色状态">
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
        <el-table-column fixed="right" label="操作" width="300">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleClick(scope.row.id)"
              >添加子级</el-button
            >
            <el-button size="mini" @click="handleEdit(scope.row.id)"
              >编辑</el-button
            >
            <el-button size="mini" type="danger" @click="delpow(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 添加权限 -->
      <div>
        <el-dialog
          title="添加权限"
          :visible.sync="dialogVisible"
          width="width"
          :before-close="dialogeditright"
        >
          <el-form label-width="80px" ref="editForm">
            <el-form-item prop="staffName" label="上级" width="120">
              <el-select
                v-model="selvalue"
                @change="selchang"
                placeholder="请选择"
              >
                <el-option label="作为顶级" value="0"> </el-option>
                <template v-for="v in seldata">
                  <el-option
                    :key="v.id"
                    :label="v.title"
                    :value="v.id"
                  ></el-option>
                  <template v-if="v._child">
                    <el-option
                      v-for="vv in v._child"
                      :key="vv.id"
                      :label="'|——' + vv.title"
                      :value="vv.id"
                    >
                    </el-option>
                  </template>
                </template>
              </el-select>
            </el-form-item>
            <el-form-item label="排序" width="100">
              <el-input
                v-model="powpx"
                placeholder="数字越大，排序越小"
                auto-complete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="状态" width="100">
              <template>
                <el-switch
                  v-model="powstatu"
                  :active-value="1"
                  :inactive-value="0"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </template>
            </el-form-item>
            <el-form-item label="标题" width="150">
              <el-input v-model="powlab" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="图标" width="120">
              <el-input v-model="powicon" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="后端接口" width="120">
              <el-input v-model="powaps" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="前端路由" width="120">
              <el-input v-model="powweb" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialog">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <!-- 编辑权限 -->
      <div>
        <el-dialog
          title="编辑权限"
          :visible.sync="dialogedit"
          width="width"
          :before-close="dialogBeforeCl"
        >
          <el-form label-width="80px" ref="editForm">
            <el-form-item label="上级" width="120">
              <el-select
                v-model="editselvalue"
                @change="selchang"
                placeholder="请选择"
              >
                <el-option label="作为顶级" :value="0"></el-option>
                <template v-for="v in editseldata">
                  <el-option
                    :key="v.id"
                    :label="v.title"
                    :value="v.id"
                  ></el-option>
                  <template v-if="v._child">
                    <el-option
                      v-for="vv in v._child"
                      :key="vv.id"
                      :label="'|——' + vv.title"
                      :value="vv.id"
                    >
                    </el-option>
                  </template>
                </template>
              </el-select>
            </el-form-item>
            <el-form-item label="排序" width="100">
              <el-input v-model="editpowpx" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="状态" width="100">
              <template>
                <el-switch
                  v-model="editpowstatu"
                  :active-value="1"
                  :inactive-value="0"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </template>
              <!-- <el-input v-model="editpowstatu" auto-complete="off"></el-input> -->
            </el-form-item>
            <el-form-item label="标题" width="150">
              <el-input v-model="editpowlab" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="图标" width="120">
              <el-input v-model="editpowicon" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="后端接口" width="120">
              <el-input v-model="editpowaps" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="前端路由" width="120">
              <el-input v-model="editpowweb" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer">
            <el-button @click="dialogedit = false">取 消</el-button>
            <el-button type="primary" @click="editdialog">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import headpow from "../component/power";
import service from "@/service/index";
export default {
  components: { headpow },
  inject: ["reload"],
  data() {
    return {
      name: "", //权限名
      dialogVisible: false,
      dialogedit: false,
      dialogaddson: false,
      tableData: [],
      seldata: [], //权限下拉框
      selvalue: "0",
      powpx: "",
      powstatu: 1,
      powlab: "",
      powicon: "",
      powaps: "",
      powweb: "",
      editseldata: [],
      editselvalue: 2,
      editpowpx: "",
      editpowstatu: "",
      editpowlab: "",
      editpowicon: "",
      editpowaps: "",
      editpowweb: "",
      editid: "",
      addsonseldata: [],
      addsonselvalue: 2,
      addsonpowpx: "",
      addsonpowstatu: "",
      addsonpowlab: "",
      addsonpowicon: "",
      addsonpowaps: "",
      addsonpowweb: "",
      addsonid: "",
    };
  },
  // 加载数据
  created() {
    service.rulelist().then((res) => {
      console.log(res);
      this.tableData = res.data;
    });
  },
  methods: {
    // 编辑/添加权限下拉值
    selchang() {
      console.log(this.editselvalue);
    },
    // 权限确认
    dialog() {
      let data = {
        sort: this.powpx,
        status: this.powstatu,
        title: this.powlab,
        icon: this.powicon,
        pid: this.selvalue,
        name: this.powaps,
        url: this.powweb,
      };
      service.savepower(data).then((res) => {
        if (res.code == 20010) {
          this.$message({
            message: res.msg,
            type: "success",
            duration: 1000,
          });
          this.reload();
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      });
      this.dialogVisible = false;
    },

    // 添加权限
    fathpowadd() {
      this.dialogVisible = true;
      this.selvalue = "0";
      service.addpower().then((res) => {
        console.log(res);
        this.seldata = res.data;
      });
    },
    // 添加权限的icon关闭
    dialogeditright() {
      this.dialogVisible = false;
    },
    // 添加下级
    handleClick(id) {
      this.dialogVisible = true;
      console.log(id);
      let param = {
        id: id,
      };
      service.addpower().then((res) => {
        console.log(res);
        this.seldata = res.data;
      });
      service.getpowid(param).then((res) => {
        console.log(res.data);
        this.addsonseldata = res.data.lists;
        this.addsonselvalue = res.data.info.pid;
        this.selvalue = res.data.info.id;
      });
    },
    // 添加下级确认
    addsondialog() {
      let data = {
        sort: this.addsonpowpx,
        status: this.addsonpowstatu,
        name: this.addsonpowaps,
        icon: this.addsonpowicon,
        title: this.addsonpowlab,
        pid: this.addsonselvalue,
        id: this.addsonid,
        url: this.addsonpowweb,
      };
      service.savepower(data).then((res) => {
        if (res.code == 20010) {
          this.$message({
            message: res.msg,
            type: "success",
            duration: 1000,
          });
          this.reload();
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.reload();
        }
        console.log(res);
      });
    },
    // 编辑权限
    dialogBeforeCl() {
      this.dialogedit = false;
    },
    // switch开关
    changeSwitch(val, row, id) {
      console.log(row.status);
      this.$confirm("此操作将修改状态, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let data = {
            id: id,
            status: row.status,
          };
          console.log(data);
          service.powstatus(data).then((res) => {
            console.log(res);
            this.$message({
              type: "success",
              message: res.msg,
              duration: 1000,
            });
          });
        })
        .catch(() => {
          if (row.status == 1) {
            row.status = 0;
          } else {
            row.status = 1;
          }
          this.$message({
            type: "success",
            message: "已取消操作",
            duration: 1000,
          });
        });
    },
    // 编辑
    handleEdit(id) {
      this.dialogedit = true;
      console.log(id);
      let param = {
        id: id,
      };
      service.getpowid(param).then((res) => {
        console.log(res.data);
        this.editseldata = res.data.lists;
        this.editselvalue = res.data.info.pid;
        this.editpowpx = res.data.info.sort;
        this.editpowstatu = res.data.info.status;
        this.editpowlab = res.data.info.title;
        this.editpowicon = res.data.info.icon;
        this.editpowaps = res.data.info.name;
        this.editid = res.data.info.id;
        this.editpowweb = res.data.info.url;
      });
    },
    // 编辑权限确认
    editdialog() {
      let data = {
        sort: this.editpowpx,
        status: this.editpowstatu,
        name: this.editpowaps,
        icon: this.editpowicon,
        title: this.editpowlab,
        pid: this.editselvalue,
        id: this.editid,
        url: this.editpowweb,
      };
      console.log(data);
      service.editsavepower(data).then((res) => {
        console.log(res);
        if ((res.code = "20010")) {
          this.reload();
        }
      });
      this.dialogedit = false;
    },
    // 删除
    delpow(id) {
      console.log(id);
      let param = {
        id: id,
      };
      service.delpow(param).then((res) => {
        console.log(res);
        if (res.code == "20010") {
          this.$message({
            message: res.msg,
            type: "success",
            duration: 1000,
          });
          this.reload();
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      });
    },

    getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#c2c5f6;color:#000";
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
@import "edit.css";
</style>