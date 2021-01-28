<template>
  <div class="head">
    <div  class="headStart"> {{ name }} </div>
    <div class="headEnd">
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" style="border:none;background:none;height:20px;color:#fff">
       <el-submenu index="2">
        <template slot="title" style="color:white">{{ admin }}</template>
         <el-menu-item index="2-1" @click="toMine">个人信息</el-menu-item>
         <el-menu-item index="2-2" @click="edit">修改密码</el-menu-item>
         <el-menu-item index="2-1" @click="newaa">消息通知</el-menu-item>
         <el-menu-item index="2-3" @click="logOut">退出系统</el-menu-item>
      </el-submenu>
     </el-menu>
    </div>
</div>
</template>

<script >
import HeadEdit from "./HeadEdit/HeadEdit.vue";
export default {
  Component:{HeadEdit},
  data(){
    return{
       activeIndex: '1',
        activeIndex2: '1',
      name:'兰州大学第二医院',
      isFold:true,
      admin:sessionStorage.getItem('account')
    }
  },
  methods:{
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
   
    // border-left: 2px solid black;
      position: absolute;
    right: 0px;
    &Ctx {
      // color: ;
      display: flex;
    
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      font-weight: bold;
      width: 98%;

      // border: 1px solid yellow;

    
    }
    span {
   
      // padding-left: 2px;
      color: #fdfeff;
    }
   
  }
   .ul li div{
      max-height: 30px;
    }
}
</style>
