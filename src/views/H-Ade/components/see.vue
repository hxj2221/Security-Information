<template>
  <div>
    <div class="top">
      <span class="left">投诉案件调查表</span>
      <div class="right">
        <i class="el-icon-printer"><span>打印记录表</span></i>
        <i class="fa fa-reply fa-2" aria-hidden="true"><span>返回</span></i>
      </div>
    </div>
    <div class="head-txt">
      <div class="txt">
        <p>
          <span class="tit">医院名称：</span>
          <span>第二人民医院</span>
        </p>
        <p>
          <span class="tit">事件编号：</span>
          <span>TS202011150001</span>
        </p>
      </div>
      <div class="txt">
        <p>
          <span class="tit">事发时间：</span>
          <span>2020-12-02 20:56:37</span>
        </p>
        <p>
          <span class="tit">事发地点：</span>
          <span>门诊部</span>
        </p>
      </div>
      <div class="txt">
        <p>
          <span class="tit">不良类型：</span>
          <span>输血不良事件</span>
        </p>
        <p>
          <span class="tit">上报人：</span>
          <span>王丽</span>
        </p>
      </div>
    </div>
    <!-- 基本信息 -->
    <div class="cent_info">
      <p>基本信息</p>
      <div class="box">
        <el-row>
          <el-col :span="8">
            <p>患者姓名:<span>薛小刚</span></p>
          </el-col>
          <el-col :span="8">
            <p>性别/年龄：<span>男/35</span></p>
          </el-col>
          <el-col :span="8">
            <p>住院号:<span>1018769</span></p>
          </el-col>
        </el-row>
      </div>
      
    </div>

  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      model: Object
    },
    data() {
      return {


      };
    },
    methods: {


    },
  }
</script>
<style>
</style>