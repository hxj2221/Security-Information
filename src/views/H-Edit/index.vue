<template>
  <div>
    <div class="H-editAll">
      <!-- 头部 -->
      <headpow></headpow>
      <div class="jurisdiction">
        <el-table
         style="text-align: center "
          :data="tableData"
          :header-cell-style="getRowClass"
          max-height="625"
          row-key="id"
          border
          :tree-props="{
            children: '_child',
            hasChildren: 'hasChildren',
            id: 'id',
            title: 'title',
            sort: 'sort',
            icon: 'item.icon',
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
          <el-table-column prop="title" label="名称" width="180" class="aa" style="text-align: left!important;">
          </el-table-column>
          <el-table-column prop="level" label="等级" width="180" >
          </el-table-column>
          <el-table-column label="左侧图标">
            <template slot-scope="scope">
              <i :class="scope.row.icon"></i>
            </template>
          </el-table-column>
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
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                class="roleEdit"
                type="text"
                size="small"
                @click="handleClick(scope.row.id)"
                >添加子级</el-button
              >
              <el-button
                class="roleEdit"
                type="text"
                size="small"
                @click="handleEdit(scope.row.id)"
                >编辑</el-button
              >
              <el-button
                class="roleDel"
                size="small"
                type="text"
                @click="delpow(scope.row.id)"
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
            :close-on-click-modal="false"
          >
            <el-form label-width="80px" ref="editForm">
              <el-form-item style="text-align: left;" prop="staffName" label="上级" width="120">
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
                ></el-input>
              </el-form-item>
              <el-form-item style="text-align: left;" label="状态" width="100">
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
              <el-form-item label="图标" width="120" style="text-align:left">
                <el-input v-model="powicon" auto-complete="off" ></el-input>
                 <a href="https://element.eleme.cn/#/zh-CN/component/icon"  target="_blank" style="color: #666ee8;text-decoration: none;font-size:10px;">不了解？<span >点此查看图标库</span></a>
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
            :close-on-click-modal="false"
            width="width"
            :before-close="dialogBeforeCl"
          >
            <el-form label-width="80px" ref="editForm">
              <el-form-item style="text-align: left;" label="上级" width="120">
                <el-select
                  v-model="editselvalue"
                  @change="selchang"
                  placeholder="请选择"
                  required
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
              <el-form-item label="排序" width="100" required>
                <el-input v-model="editpowpx" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item style="text-align: left;" label="状态" width="100">
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
              <el-form-item label="标题" width="150" required>
                <el-input v-model="editpowlab" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="图标" width="120" required style="text-align:left">
                <el-input v-model="editpowicon" auto-complete="off" ></el-input>
                 <a href="https://element.eleme.cn/#/zh-CN/component/icon"  target="_blank" style="color: #666ee8;text-decoration: none;font-size:10px;">不了解？<span >点此查看图标库</span></a>
              </el-form-item>
              <el-form-item label="后端接口" width="120" required>
                <el-input v-model="editpowaps" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="前端路由" width="120" required>
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
      dialogaddson: false,
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
      tableData: [], //权限内容
      dialogVisible: false, //添加权限弹框
      selvalue: "0", //上级下拉框
      seldata: [], //顶级下拉框
      powpx: "", //排序
      powstatu: 1, //状态
      powlab: "", //标题
      powicon: "", //图标
      powaps: "", //后端接口
      powweb: "", //前端路由
      dialogedit: false, //编辑权限弹框
      editselvalue: 2, //上级下拉框
      editseldata: [], //顶级下拉框
      editpowpx: "", //排序
      editpowstatu: "", //状态
      editpowlab: "", //标题
      editpowicon: "", //图标
      editpowaps: "", //后端接口
      editpowweb: "", //前端路由
    };
  },
  // 加载数据
  created() {
    service.rulelist().then((res) => {
      this.tableData = res.data;
    });
  },
  methods: {
    // 编辑/添加权限下拉值
    selchang() {
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
         this.$router.go(0)
        }
      });
    },
    // 编辑权限
    dialogBeforeCl() {
      this.dialogedit = false;
    },
    // switch开关
    changeSwitch(val, row, id) {
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
          service.powstatus(data).then((res) => {
            this.$message({
              type: "success",
              message: res.msg,
              duration: 1000,
            });
            this.$router.go(0)
          });
        })
        .catch(() => {
          if (row.status == 1) {
            row.status = 0;
          } else {
            row.status = 1;
          }
          this.$message({
            type: "info",
            message: "已取消操作",
            duration: 1000,
          });
        });
    },
    // 编辑
    handleEdit(id) {
      this.dialogedit = true;
      let param = {
        id: id,
      };
      service.getpowid(param).then((res) => {
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
      service.editsavepower(data).then((res) => {
        if (res.code == 20010) {
          this.$message({
            message: "保存成功！",
            type: "success",
            duration: 2000,
          });
          setTimeout(() => {
            this.$router.go(0)
          }, 1000);
        }
      });
    },

    // 添加权限
    fathpowadd() {
      this.dialogVisible = true;
      this.selvalue = "0";
      service.addpower().then((res) => {
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
      let param = {
        id: id,
      };
      service.addpower().then((res) => {
        this.seldata = res.data;
      });
      service.getpowid(param).then((res) => {
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
           this.$router.go(0)
        }
      });
    },
    // 编辑
    handleEdit(id) {
      this.dialogedit = true;
      let param = {
        id: id,
      };
      service.getpowid(param).then((res) => {
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
      service.editsavepower(data).then((res) => {
        if (res.code == 20010) {
          this.$message({
            message: "保存成功！",
            type: "success",
            duration: 2000,
          });
          setTimeout(() => {
            this.$router.go(0)
          }, 1000);
        }
      });
    },
    // 删除
    delpow(id) {
      this.$confirm("此操作将删除该权限, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let data = {
            id: id,
          };
          service.delpow(data).then((res) => {
            this.$message({
              type: "success",
              message: res.msg,
              duration: 1500,
            });
            setTimeout(() => {
           this.$router.go(0)
            }, 2000);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
            duration: 1300,
          });
        });
    },
    // 表头颜色
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