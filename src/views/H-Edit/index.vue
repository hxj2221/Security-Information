<template>
  <div>
    <div class="H-edit">
      <div class="edit-top">
        <el-button type="primary" @click="add">添加权限</el-button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        :header-cell-style="getRowClass"
        row-key="id"
        border
        default-expand-all
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
        <el-table-column prop="icon" label="左侧图标">
          <!-- <template slot-scope="scope"> -->
          <!-- <i class="el-icon-s-help"></i> -->
          <!-- </template> -->
        </el-table-column>
        <el-table-column prop="name" label="接口地址"></el-table-column>
        <el-table-column prop="url" label="前端路由"> </el-table-column>
        <el-table-column label="角色状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              :active-value="1"
              :inactive-value="0"
              active-color="#02538C"
              inactive-color="#B9B9B9"
            />
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="400">
          <template slot-scope="scope">
            <!-- <el-button @click="handleClick(scope.row)" type="text" size="small"
              >添加子级</el-button
            > -->
            <el-button
              type="text"
              size="small"
              @click="handleEdit(scope.row.id)"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="delpow(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
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
                <el-option value="0">作为顶级 </el-option>
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
              <el-input v-model="powpx" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="状态" width="100">
              <el-input v-model="powstatu" auto-complete="off"></el-input>
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
              <el-input v-model="editpowstatu" auto-complete="off"></el-input>
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
import service from "@/service/index";
export default {
  data() {
    return {
      name: "", //权限名
      dialogVisible: false,
      dialogedit: false,
      tableData: [],
      seldata: [], //权限下拉框
      selvalue: "",
      powpx: "",
      powstatu: "",
      powlab: "",
      powicon: "",
      powaps: "",
      editseldata: [],
      editselvalue: 2,
      editpowpx: "",
      editpowstatu: "",
      editpowlab: "",
      editpowicon: "",
      editpowaps: "",
      editid: "",
    };
  },
  created() {
    service.rulelist().then((res) => {
      console.log(res);
      this.tableData = res.data;
    });
  },
  methods: {
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
      };
      service.savepower(data).then((res) => {
        //alert(res);
        console.log(res);
      });
      this.dialogVisible = false;
    },
    // 添加权限
    add() {
      this.dialogVisible = true;
      service.addpower().then((res) => {
        console.log(res);
        this.seldata = res.data;
      });
    },
    // 权限编辑
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
      };
      console.log(data);
      service.editsavepower(data).then((res) => {
        console.log(res);
      });
      this.dialogedit = false;
    },
    delpow(id) {
      console.log(id);
      let param = {
        id: id,
      };
      service.delpow(param).then((res) => {
        console.log(res);
      });
    },
    dialogeditright() {
      this.dialogVisible = false;
    },
    dialogBeforeCl() {
      this.dialogedit = false;
    },
    handleClick() {},
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