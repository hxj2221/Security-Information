<template>
  <div class="head">
    <div v-if="!isFold" class="headStart">
      {{ name }}
    </div>
    <div v-else class="headStartFold">
      <i class="el-icon-platform-eleme"></i>
    </div>

    <div class="headMiddle">
      <i class="el-icon-s-fold" @click="handleFold" v-if="!isFold"></i>
      <i class="el-icon-s-unfold" @click="handleFold" v-else></i>
      <!-- 面包屑 -->
      <!-- <el-breadcrumb separator-class="el-icon-arrow-right" class="">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      </el-breadcrumb> -->
    </div>

    <div class="headEnd">
      <el-dropdown>
        <span>
          <p class="headEndCtx">
            <el-avatar :src="avatarUrl" :alt="'头像'"></el-avatar>
            <span v-html="admin">{{ admin }}</span>
          </p>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="dialogVisible = true"
            >个人信息</el-dropdown-item
          >
          <el-dropdown-item @click.native="logOut">修改密码</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">消息通知</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <head-edit
      :dialogVisible="dialogVisible"
      :avatarUrl="avatarUrl"
      @changeAvatar="changeAvatar"
      @closeDialog="closeDialog"
    ></head-edit>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { State, Getter, Action } from "vuex-class";
import HeadEdit from "./HeadEdit/HeadEdit.vue";

@Component({
  components: { HeadEdit },
})
export default class HeadBar extends Vue {
  name: string = "兰州大学第二医院";
  avatarUrl: string = require("@/assets/avatar/avatar.jpg");
  dialogVisible: boolean = false;

  // vuex数据
  @State((state) => state.app.isFold) isFold!: boolean;
  @Action("app/UpdateIsFold") UpdateIsFold!: Function;

  // 计算属性
  get admin() {
    return sessionStorage.getItem("name")
      ? sessionStorage.getItem("name") + "&nbsp&nbsp"
      : "admin";
  }

  // 与vue2中的methods部分中的function相似（该处这样实现）
  public logOut() {
    this.$router.push({ name: "login" });
  }

  public handleFold() {
    this.UpdateIsFold(!this.isFold);
  }

  // 修改头像（获得修改后头像地址）
  public changeAvatar(newAvatar) {
    this.avatarUrl = newAvatar;
  }

  // 关闭编辑对话框，用于同步父子组件状态
  public closeDialog(val) {
    this.dialogVisible = val;
  }
}
</script>

<style scoped lang="less">
.head {
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  line-height: 50px;
  background-color: #002140;
  // background-image: linear-gradient(to right,rgba(0,128,128, 0.8), rgba(255,248,220, 1));
  // border-bottom: 10px solid rgb(168, 82, 82);

  &Start {
    width: 198px;
    background: #fdfeff;
    font-weight: bold;
    border-right: 2px solid #002140;
    // background-image:-webkit-linear-gradient(left,	#ffffff,#ffffff);
    color: #000000;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &StartFold {
    width: 62px;
    border-right: 2px solid #2f4f4f;
  }

  &Middle {
    flex: 1 0 auto;

    i {
      float: left;
      line-height: 50px;
      margin-left: 10px;
    }
  }

  &End {
    width: 210px;
    border-left: 2px solid black;

    &Ctx {
      // color: ;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      font-weight: bold;
      width: 98%;

      // border: 1px solid yellow;

      img {
        width: 30px;
        height: 30px;
        border-radius: 15px;

        // background-image: linear-gradient(to right,#002140, #002140);
      }
    }
    span {
      // padding-left: 2px;
      color: #fdfeff;
    }
  }
}
</style>
