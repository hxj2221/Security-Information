<template>
  <div class="AdeDetail">
    <div class="top">
      <span class="left">投诉案件调查表</span>
      <div class="right">
        <i class="el-icon-printer"><span>打印记录表</span></i>
        <i class="fa fa-reply fa-2" aria-hidden="true" @click="back()"><span>返回</span></i>
      </div>
    </div>
    <div class="head-txt">
      <div class="txt">
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <span class="tit">医院名称：</span>
              <span>第二人民医院</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div style="height:30px" class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <span class="tit">事件编号：</span>
              <span>{{event_num}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <span class="tit">事发时间：</span>
              <span>{{occur_time |Date }}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div style="height:30px" class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <span class="tit">事发地点：</span>
              <span>{{occur_scene}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <span class="tit">不良类型：</span>
              <span>{{event_type}}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div style="height:30px" class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <span class="tit">上报人：</span>
              <span>{{create_uid}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 基本信息 -->
    <div class="cent_info">
      <p>基本信息</p>
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
      <p>关联患者信息</p>
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
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        event_num: '',
        patient_name: '',
        sex: '',
        age: '',
        specific_age: '',
        event_describe: '',
        diagnosis_process: '',
        patient_situation: '',
        admitting_diagnosis: '',
        bed_number: "",
        hospitalized_time: "",
        department_id: "",
        stakeholder: '',
        Indications_uid: "",
        nurse_uid: "",
        admission_id: '',
        create_time: '',
        occur_time: '',
        occur_scene: '',
        event_type: "",
        create_uid: "",
      };
    },
    methods: {
      back() {
        this.$emit("pageDetail")

      },
    },
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
        that.event_num = item.event_num
        that.patient_name = item.patient_name;
        that.sex = item.sex;
        that.age = item.age;
        that.specific_age = item.specific_age
        that.event_describe = item.event_describe;
        that.diagnosis_process = item.diagnosis_process;
        that.patient_situation = item.patient_situation;
        that.admitting_diagnosis = item.admitting_diagnosis;
        that.bed_number = item.bed_number;
        that.hospitalized_time = item.hospitalized_time;
        that.department_id = item.department_id;
        that.stakeholder = item.stakeholder;
        that.Indications_uid = item.Indications_uid;
        that.nurse_uid = item.nurse_uid;
        that.admission_id = item.admission_id;
        that.create_time = item.create_time;
        that.occur_time = item.occur_time;
        that.occur_scene = item.department.title;
        that.event_type = item.eventtype.title;
        that.create_uid = item.create_uid
      })
    }
  }
</script>
<style>
</style>