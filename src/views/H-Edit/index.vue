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
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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