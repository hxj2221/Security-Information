<template>
   <div>
      <div class="ConfigureAll">
         <!-- 邮箱配置 -->
         <div class="title">
            <ul>
               <li v-for="(item,index) in list" :key="item.index" @click="nav(index)" v-bind:class="{bgColor:index==nowIndex}">{{item}}</li>
            </ul>
         </div>
         <postbox v-show="emailIsShow"></postbox>
         <smsbox v-show="noteIsShow"></smsbox>
      </div>
   </div>
</template>

<script>
import postbox from './components/postbox'//邮箱配置
import smsbox from './components/smsbox'//短信配置

import service from '@/service/index'
   export default {
      components: {
         postbox,
         smsbox
      },
      props: {},
      data() {
         return {
            list:['邮箱配置','短信配置'],//导航
            emailIsShow:true,//邮箱配置
            noteIsShow:false,//短信配置
            nowIndex: 0,
         };
      },
      methods: {
         nav(index){
            this.nowIndex = index;
            this[index]()
         },
         0(){
            this.emailIsShow=!this.emailIsShow,
            this.noteIsShow=!this.noteIsShow
         },
         1(){
            this.emailIsShow=!this.emailIsShow,
            this.noteIsShow=!this.noteIsShow
         },
         
      },
   }
</script>
<style scoped>
   @import "./css/index.css";
</style>