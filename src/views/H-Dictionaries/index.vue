<template>
  <div>
    <div class="allManage">
      <!-- 顶部导航 -->
      <div class="allManage_nav">
        <ul class="nav_list">
          <li class="list" v-for="(item,index) in Nav" :key="item.index" v-bind:class="{bgColor:index==nowIndex}"
            @click="change(index)">{{item.name}}</li>
        </ul>
        <el-button type="primary" icon="el-icon-circle-plus" @click="increase()">新增
        </el-button>
      </div>
      <!-- 内容 -->
      <Complain :tableData="complain" v-show="isShow"></Complain>
      <Ade :tableData="ade" v-show="isShow1"></Ade>
      <Connect v-show="isShow2"></Connect>
      <Other v-show="isShow3"></Other>
      <!-- 分页 -->
      <div class="block">
      </div>
      <!-- 新增 -->
      <el-dialog class="newly" title="新增字段" :visible.sync="dialogFormVisible">
        <el-form class="newly_con" :model="form">
          <el-form-item class="info" label="字段信息" required>
            <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="form.title">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="sure">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  // 引入css样式
  import './css/Dictionaries.css'

  import Complain from './components/Complain/content'
  import Ade from './components/Ade/content'
  import Connect from './components/Connect/content'
  import Other from './components/Other/content'

  import service from '@/service/index'

  export default {
    inject: ["reload"],
    components: {
      Complain,
      Ade,
      Connect,
      Other
    },
    data() {
      return {
        // 顶部导航
        Nav: [{
            name: '投诉纠纷'
          },
          {
            name: '不良信息'
          },
          {
            name: '患者信息'
          },
          {
            name: '其他'
          },
        ],
        nowIndex: 0,
        // 新增
        form: {
          title: '',
        },
        dialogFormVisible: false,
        isShow: true, //投诉纠纷
        isShow1: false, //不良信息
        isShow2: false, //患者信息
        isShow3: false, //其他
        complain: [], //投诉
        ade: [], //不良
      };
    },

    methods: {
      // 顶部导航
      change(index) {
        this.nowIndex = index;
        this[index]()
      },
      // 投诉纠纷
      0() {
        this.isShow = true
        this.isShow1 = false
        this.isShow2 = false
        this.isShow3 = false
      },
      // 不良信息
      1() {
        this.isShow = false
        this.isShow1 = true
        this.isShow2 = false
        this.isShow3 = false
        let param = {
          type: 6
        }
        service.DicList(param).then(res => {
          // console.log(res)
          this.ade = res.data
          if (res.code == 20401) {
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
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
          
        })
      },
      // 患者信息
      2() {
        this.isShow = false
        this.isShow1 = false
        this.isShow2 = true
        this.isShow3 = false
      },
      // 其他
      3() {
        this.isShow = false
        this.isShow1 = false
        this.isShow2 = false
        this.isShow3 = true
      },
      // 表格操作
      // 新增
      increase() {
        this.dialogFormVisible = !this.dialogFormVisible
      },
      // 确认新增
      sure() {
        let params = {
          title: this.form.title,
          type: 1
        }
        console.log(params)
        service.DicAdd(params).then(res => {
          console.log(res)
          if (res.code == 20010) {
            this.reload();
            this.$message({
              message: '添加成功',
              type: 'success',
              duration: 1000,
            });
            this.dialogFormVisible = false
          } else if (res.code == 20401) {
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
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
        })
      }
    },
  };
</script>

<style lang="less" scoped></style>