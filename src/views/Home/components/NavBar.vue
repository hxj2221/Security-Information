<template>
  <!-- 导航栏 -->
  
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    @select="handleSelect"
    background-color="#001529"
    text-color="#CCCCCC"
    active-text-color="#0079fe"
    unique-opened
    @open="handleOpen" 
    @close="handleClose" 
    :collapse="isCollapse"
    router>
    <template v-for="(item, index) in menus">
      <!-- 二级菜单渲染 -->
      <el-submenu :index="index+''" v-if="!item.hidden && !item.leaf" :key="index" >
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <template v-for="child in item._child">
          <el-menu-item :index="child.url" :key="child.id" :class="{subMenu: true}">
            <i :class="child.icon"></i>
            <span slot="title">{{child.title}}</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <!-- 一级菜单渲染 -->
      <el-menu-item v-if="!item.hidden && item.leaf && item._child.length>0" :index="item._child[0].path" :key="item._child[0].path">
        <i :class="item.icon"></i>
        <span slot="title">{{item._child[0].name}}</span>
      </el-menu-item>
    </template>
    
  </el-menu>

</template>

<script>
import service from "@/service/index";
export default {
   inject: ["reload"],
  Component:{},
  data(){
    return{
      menus:[],
    }
  },
  
  props:{
    isCollapse:Boolean
  },
  methods:{
   handleSelect() {
    this.reload()  // 点击侧边栏页面重载
  },
   handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      }
  },
  created(){
    service.getmenus().then(res=>{
      this.menus=res.data
    })
  }
}
// @State(state => state.app.isFold) isFold!: boolean
</script>
  



<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 235px;
  min-width: 235px;
  min-height: 400px;
  text-align: left;
  background: #001529;
}

.el-menu--collapse {
  width: 64px;
  min-width: 64px;
}

.subMenu {
  background-color: #000c17 !important;
  &:hover {
     background-color: #024380 !important;
  }
}

// .el-menu-item {
//   // border-bottom: 2px solid rgba(	95,158,160, 0.5)
// }
</style>