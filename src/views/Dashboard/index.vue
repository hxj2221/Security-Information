<template>
  <div class="dash">
    <div class="box">
      <div class="left">
        <img class="img" src="../../assets/image/u388.png" alt="">
        <div class="title">
          <p>您好，{{name}}<span>{{department}}&nbsp; |&nbsp; {{authgrouap}}</span></p>
          <p>以我们的热心、关心、耐心，让病人舒心、放心、安心</p>
        </div>
      </div>
      <div class="right">
        <div class="right_con">
          <p>部门员工</p>
          <p>{{staff}}</p>
        </div>
        <div class="right_con">
          <p>需审批的事件</p>
          <p>{{examine}}</p>
        </div>
        <div class="right_con">
            <p>需调查的事件</p>
            <p>{{survey}}</p>
        </div>
        <div class="right_con">
            <p>进程中事件</p>
            <p>{{infor}}</p>
        </div>
      </div>
    </div>
    <div class="box1">
      <div class="dashRow">
        <el-card class="dashRowItem" shadow="always">
          {{todaynew}}
          <p class="dashRowItemKey">
            <img src="../../assets/image/u267.png" alt="">
          </p>
          <p class="dashRowItemTitle">今日新增投诉</p>
        </el-card>
        <el-card class="dashRowItem" shadow="always">
          {{isputes}}
          <p class="dashRowItemKey">
            <img src="../../assets/image/u274.png" alt="">
          </p>
          <p class="dashRowItemTitle">今日新增纠纷</p>
        </el-card>
        <el-card class="dashRowItem" shadow="always">
          {{bad}}
          <p class="dashRowItemKey">
            <img src="../../assets/image/u281.png" alt="">
          </p>
          <p class="dashRowItemTitle">今日新增不良</p>
        </el-card>
        <el-card class="dashRowItem" shadow="always">
          {{all_infor}}
          <p class="dashRowItemKey">
            <img src="../../assets/image/u285.png" alt="">
          </p>
          <p class="dashRowItemTitle">进程中事件</p>
        </el-card>
      </div>
    </div>
    <div class="box2">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="bg">
              <div class="tit">
                <span>进行中的事件</span>
                <span>全部事件</span>
              </div>
              <div class="con_info" v-for="item in Info" :key="item.id">
                <div class="info">
                  <p style="font-size:13px;color:#999">投诉人：{{item.complaint_name}}</p>
                  <p><span style="color:#52C1F5">●</span>{{item.son}}</p>
                </div>
                <div class="info">
                  <p>截止日期：{{item.reply_time}}</p>
                  <p style="font-size:28px;color:#ccc"><i class="fa fa-user-circle" aria-hidden="true"></i></p>
                </div>
                <div class="info">
                  <p>事件性质：{{item.character}}</p>
                  <p>患者：{{item.patients}}</p>
                </div>
              </div>
            </div>
        </el-col>
        <el-col :span="8">
          <div class="bg">
            <div class="tit">风险指数</div>
            <div class="dashRow">
              <div class="dashRowGraph">
                <radar-chart></radar-chart>
              </div>
              <div class="last dashRow">
                <el-card class="dashRowItem" shadow="always">
                  <p class="dashRowItemTitle"><span class="person">●</span>个人</p>
                  {{person}}
                </el-card>
                <el-card class="dashRowItem" shadow="always">
                  <p class="dashRowItemTitle"><span class="depart">●</span>部门</p>
                  {{depart}}
                </el-card>
                <el-card class="dashRowItem" shadow="always">
                  <p class="dashRowItemTitle"><span class="system">●</span>系统</p>
                  {{system}}
                </el-card>
              </div>

            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 空白占位，方便后续内容拓展，同时防止页面下方被hidden -->
    <div class="dashBlock"></div>
  </div>
</template>



<script>
  // 引入css
  import './css/index.css'
  import {
    Component,
    Prop,
    Vue
  } from 'vue-property-decorator'
  import LineChart from './components/LineChart.vue'
  import RadarChart from './components/RadarChart.vue'
  import PieChart from './components/PieChart.vue'
  import BarChart from './components/BarChart.vue'
  import SwiperImg from './components/SwiperImg.vue'
  // import TodoList from './components/TodoList.vue'
  import CoolClock from './components/CoolClock.vue'
  import service from '@/service/index';
  export default {
    components: {
      LineChart,
      RadarChart,
      PieChart,
      BarChart,
      SwiperImg,
      CoolClock
    },
    props: {},
    data() {
      return {
        name:'',//登录人姓名
        department:'',//科室
        authgrouap:'',//角色

        staff: '',//部门员工
        examine: '',//审批事件
        survey: '',//调查事件
        infor: '',//进行中

        todaynew: '',//今日新增投诉
        isputes: '',//今日新增纠纷
        bad: '',//今日新增不良
        all_infor: '',//进程中的事件

        person: '',//
        depart: '',//
        system: '',//
        Info:[],
      };
    },
    methods: {},
    created() {
      service.dashboard().then(res => {
        console.log(res)
        if(res.code==20403){
          this.$message({
            message:res.msg,
            type:"error",
            duration:1000,
          });
        }else{
          this.Info=res.data.data
          this.staff=res.data.staff
          this.examine=res.data.examine
          this.survey=res.data.survey
          this.infor=res.data.infor
          this.todaynew=res.data.todaynew
          this.isputes=res.data.isputes
          this.bad=res.data.bad
          this.all_infor=res.data.all_infor
          this.name=res.data.user[0].name
          this.department=res.data.user[0].department[0].title
          this.authgrouap=res.data.user[0].authgrouap.title
        }
        
      })
    },
  }
</script>



<style lang="less" scoped>
  .dash {
    // width: 95%;
    margin: 0 auto;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 5px;
    // border: 2px solid blue;
    // height: 100%;
    background: linear-gradient(#fff, #f9f9f9);
    /* 标准的语法 */
    // display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;
    margin: 10px auto;
    font-size: 1.5rem;
    padding: 20px 10px;

    &Row {
      width: 100%;
      margin-bottom: 40px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      // border: 2px solid red;

      &Item {
        width: 24%;
        text-align: left;
        line-height: 40px;
        border-radius: 10px;
        background-color: white;
        // box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
        // border-color: rgba(0, 0, 0, .05);

        &Title {
          color: rgb(113, 125, 126)
        }

        &Key {
          width: 60px;
          height: 60px;
          float: right;
          border-radius: 50px;
          background: #f0f1fd;
          text-align: center;
          line-height: 70px;
          // -webkit-transform: rotate(-30deg); 
          transition: width 0.2s, height 0.2s;
          -moz-transition: width 0.2s, height 0.2s, -moz-transform 0.2s;
          /* Firefox 4 */
          -webkit-transition: width 0.2s, height 0.2s, -webkit-transform 0.2s;
          /* Safari and Chrome */
          -o-transition: width 0.2s, height 0.2s, -o-transform 0.2s;
          /* Opera */
        }
      }

      &Swiper {
        width: 35%;
        margin: 20px 0;
      }

      &Todo {
        width: 30%;
        margin: 20px 0;
      }

      &Clock {
        width: 30%;
        margin: 20px 0;
      }

      &Middle {
        width: 100%;
        background-color: white;
        padding: 15px;
        // box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
        // border-color: rgba(0, 0, 0, .05);
      }

      &Graph {
        width: 100%;
        padding: 10px;
        // background-color: white;
        // box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
        border-color: rgba(0, 0, 0, .5);
        text-align: center;
      }

      @media screen and (max-width:1000px) {
        &Item {
          width: 100%;
          margin: 10px 0;
        }

        &Graph {
          width: 100%;
          margin: 5px;
        }

        &Swiper {
          width: 100%;
        }

        &Todo {
          width: 100%;
        }

        &Clock {
          width: 100%;
        }
      }
    }

    &Block {
      flex: 0 0 50px;
    }
  }
</style>