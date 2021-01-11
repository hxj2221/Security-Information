<template>
  <div>
    <div class="H-edit">
      <div class="edit-top">
        <el-button type="primary" @click="add">添加权限</el-button>
      </div>
      <!-- <el-table :data="tableData" row-key="id" border default-expand-all> -->
      <div class="content">
        <div class="title">
          <el-checkbox v-model="checked" label="我的地盘"></el-checkbox>
        </div>
        <div class="power">
          <el-checkbox class="tit" v-model="checked" label="首页桌面插件"></el-checkbox>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="首页桌面插件"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="power">
          <el-checkbox class="tit" v-model="checked" label="首页桌面插件"></el-checkbox>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="首页桌面插件"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="power">
          <el-checkbox class="tit" v-model="checked" label="首页桌面插件"></el-checkbox>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="首页桌面插件"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>

      <!-- </el-table> -->
      <div>
        <el-dialog title="添加权限" :visible.sync="dialogVisible" width="width" :before-close="dialogBeforeClose">
          <div>
            <div>
              <span>权限名：</span>
              <el-input v-model="name" placeholder="请输入权限名" style="width:70%"></el-input>
            </div>

          </div>
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
  export default {
    data() {
      return {
        name: '', //权限名
        checked: false, //标题
        checkList: [],
        dialogVisible: false,
      };
    },
    methods: {
      // 添加权限
      add() {
        this.dialogVisible = true
      },
      dialogBeforeClose() {
        this.dialogVisible = false
      },
      handleClick() {},
    },

  };
</script>

<style scoped>
@import "edit.css";
</style>