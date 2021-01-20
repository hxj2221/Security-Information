<template>
  <div>
    <!-- 主页面 -->
    <main-page v-show="MainShow" @pageAdd="add()" @pageDetail="Details()"></main-page>
    <!-- 增加 -->
    <add-ade @pageAdd="add()" v-show="adeAdd"></add-ade>
    <!-- 详情 -->
    <detail @pageDetail="Details()" v-show="detailShow"></detail>
  </div>
</template>

<script>
  // import AdminHead from './components/AdminHead'
  // 主页面样式
  import './css/MainPage.css'
  // 新增样式
  import './css/AddAde.css'
  // 详情样式
  import './css/Detail.css'
  import MainPage from './components/MainPage'
  import AddAde from './components/AddAde'
  import Detail from './components/Detail'
  import service from '@/service/index'
  export default {
    components: {
      MainPage,
      AddAde,
      Detail
    },

    data() {
      return {
        // 主页面
        MainShow: true,
        // 增加
        adeAdd: false,
        // 详情
        detailShow: false
      };
    },

    methods: {
      // 添加
      add() {
        this.MainShow = !this.MainShow
        this.adeAdd = !this.adeAdd
      },
      // 详情
      Details() {
        this.MainShow = !this.MainShow
        this.detailShow = !this.detailShow
      },
    },
    created() {
      service.AdeList().then(res => {
        console.log(res)
        if (res.cede == 20401) {
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        } else if (res.code == 20403) {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
      })
    }
  };
</script>

<style lang="less" scoped>
</style>