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
        <div class="box_con">
          <p class="tit">患者姓名</p>
          <p class="con">薛小刚</p>
        </div>
        <div class="box_con">
          <p class="tit">性别/年龄</p>
          <p class="con">男/35</p>
        </div>
        <div class="box_con">
          <p class="tit">住院号</p>
          <p class="con">1018769</p>
        </div>
      </div>
      <div class="box">
        <div class="box_con">
          <span class="tit">入院日期：</span>
          <span class="con">2020-12-02</span>
        </div>
        <div class="box_con">
          <span class="tit">科室：</span>
          <span class="con">门诊室</span>
        </div>
        <div class="box_con">
          <span class="tit">床号：</span>
          <span class="con">08</span>
        </div>
      </div>
      <div class="box">
        <div class="box_con1">
          <span class="tit">不良发生时间</span>
          <span class="con">2020-12-02</span>
        </div>
      </div>
      <div class="box">
        <div class="box_con1">
          <span class="tit">不良报告时间</span>
          <span class="con">2020-12-02</span>
        </div>
      </div>
      <div class="box">
        <div class="box_con1">
          <span class="tit">主管医师</span>
          <span class="con"></span>
        </div>
      </div>
      <div class="box">
        <div class="box_con1">
          <span class="tit">主管护师</span>
          <span class="con"></span>
        </div>
      </div>
      <div class="box">
        <div class="box_con1">
          <span class="tit">在场相关人员</span>
          <span class="con"></span>
        </div>
      </div>
      <div class="box">
        <div class="box_con1">
          <span class="tit">入院诊断</span>
          <span class="con">肝恶性肿瘤</span>
        </div>
      </div>
      <div class="box">
        <div class="box_con1">
          <span class="tit">诊疗经过</span>
          <span class="con">患者术后7天出院，局部肿痛，复诊医生告知骨折部位错位需二次手术</span>
        </div>
      </div>
      <div class="box">
        <div class="box_con1">
          <span class="tit">患者目前情况</span>
          <span class="con">肝恶性肿瘤</span>
        </div>
      </div>
      <div class="box">
        <div class="box_con1">
          <span class="tit">不良事件描述</span>
          <span class="con">患者术后7天出院，局部肿痛，复诊医生告知骨折部位错位需二次手术。家属对此质疑，要求医院承担二次手术费用。1月22日6PM医患双方在场封存病历原件。</span>
        </div>
      </div>   
    </div>
    <!-- 关联患者信息 -->
    <div class="cent_info">
      <p>关联患者信息</p>
      <div class="box">
        <div class="box_con">
          <p class="tit">患者姓名</p>
          <p class="con">薛小刚</p>
        </div>
        <div class="box_con">
          <p class="tit">性别</p>
          <p class="con">男</p>
        </div>
        <div class="box_con">
          <p class="tit">年龄</p>
          <p class="con">65</p>
        </div>
      </div>
      <div class="box">
        <div class="box_con">
          <span class="tit">医保类型</span>
          <span class="con">社保</span>
        </div>
        <div class="box_con">
          <span class="tit">手机</span>
          <span class="con">13898761234</span>
        </div>
        <div class="box_con">
          <span class="tit">最新就诊日期</span>
          <span class="con">2020-11-15 10:34:56</span>
        </div>
      </div>
      <div class="box">
        <div class="box_con1">
          <span class="tit">所在病区</span>
          <span class="con">普通外科一病区</span>
        </div>
      </div>
      <div class="box">
        <div class="box_con1">
          <span class="tit">所在病房</span>
          <span class="con">306</span>
        </div>
      </div>
      <div class="box">
        <div class="box_con1">
          <span class="tit">诊断信息</span>
          <span class="con">患者后颈部疼痛伴四肢无力8小时急诊入院，5小时后接入手术室行手术治疗，现患者截瘫，家属认为要求办理转院手续</span>
        </div>
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