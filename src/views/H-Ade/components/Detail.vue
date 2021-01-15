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
        <p>
          <span class="tit">医院名称：</span>
          <span>第二人民医院</span>
        </p>
        <p>
          <span class="tit">事件编号：</span>
          <span>{{event_num}}</span>
        </p>
      </div>
      <div class="txt">
        <p>
          <span class="tit">事发时间：</span>
          <span>{{occur_time |formatDate }}</span>
        </p>
        <p>
          <span class="tit">事发地点：</span>
          <span>{{occur_scene}}</span>
        </p>
      </div>
      <div class="txt">
        <p>
          <span class="tit">不良类型：</span>
          <span>{{event_type}}</span>
        </p>
        <p>
          <span class="tit">上报人：</span>
          <span>{{create_uid}}</span>
        </p>
      </div>
    </div>
    <!-- 基本信息 -->
    <div class="cent_info">
      <p>基本信息</p>
      <table class="tab">
        <tr>
          <th>
            <p class="tit">患者姓名</p>
          </th>
          <td>
            <p class="con">{{patient_name}}</p>
          </td>
          <th>
            <p class="tit">性别/年龄</p>
          </th>
          <td>
            <p class="con">{{sex}}/{{age}}{{specific_age}}</p>
          </td>
          <th>
            <p class="tit">住院号</p>
          </th>
          <td>
            <p class="con">{{admission_id}}</p>
          </td>
        </tr>
        <tr>
          <th>
            <p class="tit">入院日期</p>
          </th>
          <td>
            <p class="con">{{hospitalized_time |date}}</p>
          </td>
          <th>
            <p class="tit">科室</p>
          </th>
          <td>
            <p class="con">{{department_id}}</p>
          </td>
          <th>
            <p class="tit">床号</p>
          </th>
          <td>
            <p class="con">{{bed_number}}</p>
          </td>
        </tr>
        <tr class="leng">
          <th>
            不良发生时间
          </th>
          <td colspan="5">{{occur_time |formatDate}}</td>
        </tr>
        <tr class="leng">
          <th>
            不良报告时间
          </th>
          <td colspan="5">{{create_time |formatDate}}</td>
        </tr>
        <tr class="leng">
          <th>
            主管医师
          </th>
          <td colspan="5">{{Indications_uid}}</td>
        </tr>
        <tr class="leng">
          <th>
            主管护士
          </th>
          <td colspan="5">{{nurse_uid}}</td>
        </tr>
        <tr class="leng">
          <th>
            在场相关人员
          </th>
          <td colspan="5">{{stakeholder}}</td>
        </tr>
        <tr class="leng">
          <th>
            入院诊断
          </th>
          <td colspan="5">{{admitting_diagnosis}}</td>
        </tr>
        <tr class="leng">
          <th>
            诊疗经过
          </th>
          <td colspan="5">{{diagnosis_process}}</td>
        </tr>
        <tr class="leng">
          <th>
            患者目前情况
          </th>
          <td colspan="5">{{patient_situation}}</td>
        </tr>
        <tr class="leng">
          <th>
            不良事件描述
          </th>
          <td colspan="5">{{event_describe}}</td>
        </tr>
      </table>
    </div>
    <!-- 关联患者信息 -->
    <div class="cent_info">
      <p>关联患者信息</p>
      <table class="tab">
        <tr>
          <th>
            <p class="tit">患者姓名</p>
          </th>
          <td>
            <p class="con"></p>
          </td>
          <th>
            <p class="tit">性别</p>
          </th>
          <td>
            <p class="con"></p>
          </td>
          <th>
            <p class="tit">年龄</p>
          </th>
          <td>
            <p class="con"></p>
          </td>
        </tr>
        <tr>
          <th>
            <p class="tit">医保类型</p>
          </th>
          <td>
            <p class="con"></p>
          </td>
          <th>
            <p class="tit">手机</p>
          </th>
          <td>
            <p class="con"></p>
          </td>
          <th>
            <p class="tit">最新就诊日期</p>
          </th>
          <td>
            <p class="con"></p>
          </td>
        </tr>
        <tr class="leng">
          <th>
            所在病区
          </th>
          <td colspan="5"></td>
        </tr>
        <tr class="leng">
          <th>
            所在病房
          </th>
          <td colspan="5"></td>
        </tr>
        <tr class="leng">
          <th>
            诊断信息
          </th>
          <td colspan="5"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        event_num:'',
        patient_name: '',
        sex: '',
        age: '',
        specific_age:'',
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
        occur_scene:'',
        event_type:"",
        create_uid:"",
      };
    },
    methods: {
      back() {
        this.$emit("pageDetail")

      },
      // 时间格式化
      getdate:function(row, column) { 
        var date = row[column.property]; 
     if (date == undefined) { 
       return ""; 
     } 
     return moment(date).format("YYYY-MM-DD HH:mm:ss"); 
      } 
    },
    filters: {
        formatDate: function (value) {
            let date = new Date(value);
            let y = date.getFullYear();
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            let h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            let m = date.getMinutes();
            m = m < 10 ? ('0' + m) : m;
            let s = date.getSeconds();
            s = s < 10 ? ('0' + s) : s;
            return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
        },
        Date: function (value) {
            let date = new Date(value);
            let y = date.getFullYear();
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            return y + '-' + MM + '-' + d ;
        }
    },
    created() {
      let that = this;
      this.bus.$on('detail', function (item) {
        that.event_num=item.event_num
        that.patient_name = item.patient_name;
        that.sex = item.sex;
        that.age = item.age;
        that.specific_age=item.specific_age
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
        that.occur_scene=item.department.title;
        that.event_type=item.eventtype.title;
        that.create_uid=item.create_uid
      })
    }
  }
</script>
<style>
</style>