<template>
  <div class="head">
      <div  class="headStart" v-if="isCollapse==false"> {{ name }} </div>
  
      <div  class="headStart" style="width:3.35%;" v-else><i style="font-size:40px;margin-top:10px" class="iconfont el-icon-hospital-passwordyiyuanguanli"></i></div>
   
    <slot name="fold"><div class="headStartFold" @click="handleFold"><i class="el-icon-s-unfold"></i></div></slot>
    <div @click="Refresh"> <a href="#"><i class="el-icon-refresh" style="margin-left:10px"></i></a> </div>

    <el-breadcrumb separator="/" style="margin-top:23px;margin-left:20px" >
  <el-breadcrumb-item :to="{ path: this.$route.matched[0].path}">{{$route.matched[0].name}}</el-breadcrumb-item>
  <el-breadcrumb-item > <a href="#">{{$route.matched[1].name}}</a></el-breadcrumb-item>
</el-breadcrumb>
    <div class="headEnd" style="background:#FFF;width:100px">
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#000" background-color="#FFF">
       <el-submenu index="2">
        <template slot="title" style="color:white" >{{ admin }}</template>
         <el-menu-item index="2-1" @click="toMine">个人信息</el-menu-item>
         <el-menu-item index="2-2" @click="edit">修改密码</el-menu-item>
         <el-menu-item index="2-3" @click="newaa">消息通知</el-menu-item>
         <el-menu-item index="2-4" @click="logOut">退出系统</el-menu-item>
      </el-submenu>
     </el-menu>
    </div>
</div>
</template>

<script >
import HeadEdit from "./HeadEdit/HeadEdit.vue";
export default {
  Component:{HeadEdit},
  props:{
    isCollapse:Boolean
  },
  data(){
    return{
       activeIndex: '1',
        activeIndex2: '1',
      name:'医疗安全管理系统',
      isFold:true,
      admin:sessionStorage.getItem('account')
    }
  },
  methods:{
    Refresh(){
      this.$router.go(0)
    },
     handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    handleFold(){
      this.isFold=!this.isFold;
    },
    logOut(){
      this.$router.push({ name: "login" });
    },
    toMine(){
      console.log(1)
      this.$router.push('Personal')
    },
    newaa(){
      this.$router.push('Notify')
    },
    edit(){
      console.log(1)
      this.$router.push('/Account')
    }
  }
}
</script>

<style scoped lang="less">
.head {
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  line-height: 60px;
  background: #ffffff;
//  color: #fdfeff;
  // background-image: linear-gradient(to right,rgba(0,128,128, 0.8), rgba(255,248,220, 1));
  // border-bottom: 10px solid rgb(168, 82, 82);

  &Start {
    width: 235px ;
    background: #001529;
    font-weight: bold;
    // border-right: 2px solid #002140;
    color: #fffefe;
    // background-clip: text;
    // -webkit-text-fill-color: transparent;
  }

  &StartFold {
    width: 62px;
    //  color: #646262;
    // border-right: 2px solid #2f4f4f;
  }

  &Middle {
    flex: 1 0 auto;

    i {
      float: left;
      line-height: 60px;
      margin-left: 10px;
    }
  }

  &End {
    //  background-color: #ffffff;
    // border-left: 2px solid black;
    position: absolute;
    right: 50px;
    &Ctx {
      display: flex;
    
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      font-weight: bold;
      width: 98%;

      // border: 1px solid yellow;

    
    }
    .subMenu {
  background-color: #000c1700 !important;
  &:hover {
     background-color: #02438000 !important;
     color: #666ee8 !important;
  }
  &:active {
     background-color: #02438000 !important;
     color: #666ee8 !important;
  }
}
  }
}
</style>
