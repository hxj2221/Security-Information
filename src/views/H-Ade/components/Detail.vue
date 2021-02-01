<template>
  <div class="AdeDetail">
    <div>
      <div class="top">
        <span class="left">投诉案件调查表</span>
        <div class="right">
          <el-button type="primary" size="medium" icon="iconfont el-icon-hospital-passworddayin" class="print">打印记录表</el-button>
          <el-button type="primary" size="medium" icon="iconfont el-icon-hospital-passwordai207" class="back" @click="back">返回
          </el-button>
        </div>
      </div>
    </div>
    <div>
      <div class="head-txt">
        <div class="txt">
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <span>
                  <span>医院名称：</span>第二人民医院
                </span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <span>
                  <span>事件编号：</span>{{event_num}}
                </span>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <span><span>事发时间：</span>{{occur_time |Date }}</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <span>
                  <span>事发地点：</span>{{occur_scene}}
                </span>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6">
              <div class="grid-content bg-purple"><span><span>不良类型：</span>{{event_type}}</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <span>
                  <span>上报人：</span>{{create_uid}}
                </span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 基本信息 -->
      <div class="cent_info">
        <div style="padding-bottom:10px;padding-left:57px">
          <el-row type="flex" class="row-bg">
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <span><b>基本信息</b></span>
            </div>
          </el-col>
        </el-row>
        </div>
        
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">患者姓名</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="con">{{patient_name}}</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">性别/年龄</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="con">{{sex}}/{{age}}{{specific_age}}</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">住院号</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="con">{{admission_id}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">入院日期</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="con">{{hospitalized_time |date}}</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">科室</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="con">{{department_id}}</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">床号</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="con">{{bed_number}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">不良发生时间</p>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <p class="con">{{occur_time | Date }}</p>

            </div>
          </el-col>
        </el-row>
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">不良报告时间</p>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <p class="con">{{create_time |formatDate}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">主管医师</p>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <p class="con">{{Indications_uid}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">主管护士</p>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <p class="con">{{nurse_uid}}</p>

            </div>
          </el-col>
        </el-row>
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">在场相关人员</p>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <p class="con">{{stakeholder}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">入院诊断</p>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <p class="con">{{admitting_diagnosis}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">诊疗经过</p>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <p class="con">{{diagnosis_process}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">患者目前情况</p>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <p class="con">{{patient_situation}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">不良事件描述</p>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <p class="con">{{event_describe}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 关联患者信息 -->
      <div class="cent_info">
        <div style="padding-bottom:10px;padding-left:57px">
          <el-row type="flex" class="row-bg">
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <span><b>关联患者信息</b></span>
            </div>
          </el-col>
        </el-row>
        </div>
        
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">患者姓名</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="con"></p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">性别</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="con"></p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">年龄</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="con"></p>
            </div>
          </el-col>
        </el-row>
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">医保类型</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="con"></p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">手机</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="con"></p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">最新就诊日期</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="con"></p>
            </div>
          </el-col>
        </el-row>
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">所在病区</p>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <p class="con"></p>

            </div>
          </el-col>
        </el-row>
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">所在病房</p>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <p class="con"></p>
            </div>
          </el-col>
        </el-row>
        <el-row class="tab">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p class="tit">诊断信息</p>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <p class="con"></p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        event_num: '', //事件编号
        patient_name: '', //患者姓名
        sex: '', //性别
        age: '', //年龄
        specific_age: '', //年龄类型
        event_describe: '', //不良事件描述
        diagnosis_process: '', //诊疗经过
        patient_situation: '', //患者目前状况
        admitting_diagnosis: '', //入院诊断
        bed_number: "", //床号
        hospitalized_time: "", //入院日期
        department_id: "", //科室
        stakeholder: '', //在场相关人员
        Indications_uid: "", //主管医师
        nurse_uid: "", //主管护士
        admission_id: '', //住院号
        create_time: '', //不良报告时间
        occur_time: '', //不良发生时间
        occur_scene: '', //事发地点
        event_type: "", //不良类型
        create_uid: "", //上报人
      };
    },
    methods: {
      // 返回列表页
      back() {
        this.$emit("pageDetail")
      },
    },
    // 时间过滤器
    filters: {
      formatDate: function (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + MM + '-' + d;
      },
      Date: function (cellValue) {
        let date = new Date(cellValue * 1000);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + MM + '-' + d;
      }
    },
    created() {
      let that = this;
      this.bus.$on('detail', function (item) {
        console.log(item)
        that.event_num = item.event_num //事件编号
        that.patient_name = item.patient_name; //患者姓名
        that.sex = item.sex; //性别
        that.age = item.age; //年龄
        that.specific_age = item.specific_age //年龄类别
        that.event_describe = item.event_describe; //不良事件描述
        that.diagnosis_process = item.diagnosis_process; //诊疗经过
        that.patient_situation = item.patient_situation; //患者目前状况
        that.admitting_diagnosis = item.admitting_diagnosis; //入院诊断
        that.bed_number = item.bed_number; //床号
        that.hospitalized_time = item.hospitalized_time; //入院日期
        that.department_id = item.department.title; //科室
        that.stakeholder = item.stakeholder; //在场相关人员
        that.Indications_uid = item.Indications_uid; //主管医师
        that.nurse_uid = item.nurse_uid; //主管护士
        that.admission_id = item.admission_id; //住院号
        that.create_time = item.create_time; //不良报告时间
        that.occur_time = item.occur_time; //不良发生时间
        that.occur_scene = item.occurscene.title; //事发地点
        that.event_type = item.eventtype.title; //不良类型
        that.create_uid = item.create_uid //上报人
      })
    }
  }
</script>
<style>
</style>