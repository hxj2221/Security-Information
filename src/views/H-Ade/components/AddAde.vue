import service from '@/service/index';
<template>
  <div class="addAll">
    <!-- 新增 -->
    <div class="formBasics">
      <h2>基本信息</h2>
      <el-form class="form_con" ref="addAde" :model="addAde">
        <div class="info">
          <el-form-item label="业务编号">
            <el-input v-model="addAde.event_num" :disabled="true" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="不良类型" required>
              <el-select v-model="addAde.event_type" >   
                <el-option v-for="item in options"
                  :key="item.id" :label="item.title" :value="item.id">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="不良发生地点" required>
            <el-select v-model="addAde.occur_scene" >
                <el-option v-for="item in options1"
                  :key="item.id" :label="item.title" :value="item.id">
                </el-option>
              </el-select>
          </el-form-item>
        </div>
        <div class="info">
          <el-form-item label="患者姓名" required>
            <el-input v-model="addAde.patient_name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" required>
            <el-select v-model="addAde.sex" placeholder="男">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="2"></el-option>
              <el-option label="未知" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input placeholder="请输入内容" v-model="addAde.age" class="input-with-select inp">
              <template slot="append">
                <el-select v-model="addAde.specific_age" slot="prepend" placeholder="岁">
                  <el-option label="岁" value="1"></el-option>
                  <el-option label="月" value="2"></el-option>
                  <el-option label="天" value="3"></el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
        </div>
        <div class="info">
          <el-form-item label="入院日期" required>
            <el-date-picker v-model="addAde.hospitalized_time" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="科室" required>
            <el-input v-model="addAde.department_id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="床号" required>
            <el-input v-model="addAde.bed_number" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div class="info">
          <el-form-item label="住院号" required>
            <el-input v-model="addAde.admission_id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="不良发生时间" required>
            <el-date-picker v-model="addAde.occur_time" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="报告时间" required>
            <el-date-picker v-model="addAde.create_time" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="info">
          <el-form-item label="主管医师" required>
            <el-input v-model="addAde.Indications_uid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="主管护士" required>
            <el-input v-model="addAde.nurse_uid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="在场相关人员" required>
            <el-input v-model="addAde.stakeholder" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div class="info info_last">
          <el-form-item label="上报人" required>
            <el-input v-model="addAde.create_uid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="last" label="轻重程度" required label-width="180">
            <el-select v-model="addAde.degree_weight_id" placeholder="请选择">
              <el-option v-for="item in options4" :key="item.id" :label="item.title" :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <el-row>
          <el-col :span="24">
            <el-form-item style="width:90%" label="入院诊断" required>
              <el-input type="textarea" v-model="addAde.admitting_diagnosis"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item style="width:90%" label="诊疗经过" required>
              <el-input type="textarea" v-model="addAde.diagnosis_process"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item style="width:90%" label="患者目前情况" required>
              <el-input type="textarea" v-model="addAde.patient_situation"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item style="width:90%" label="不良事件描述" required>
              <el-input type="textarea" v-model="addAde.event_describe"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 关联 -->
    <div class="table_info">
      <h2>关联患者信息（调用HIS）</h2>
      <el-table class="info" :data="tableData">
        <el-table-column type="index" label="序号">
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="sex" label="性别">
        </el-table-column>
        <el-table-column prop="date" label="出生日期">
        </el-table-column>
        <el-table-column prop="phone" label="联系电话">
        </el-table-column>
        <el-table-column prop="address" label="联系方式" :show-overflow-tooltip='true' width="207">
        </el-table-column>
        <el-table-column prop="depart" label="科室">
        </el-table-column>
        <el-table-column prop="diagnosis" label="诊断">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">取消关联</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="add">
        <i class="el-icon-circle-plus-outline"><span>添加患者信息</span></i>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="root">
      <i class="fa fa-file-o fa-2" aria-hidden="true" @click="sure()"><span>提交</span></i>
      <i class="fa fa-reply fa-2" aria-hidden="true" @click="back()"><span>返回</span></i>
    </div>
  </div>

</template>

<script>
import service from '@/service/index'
import qs from 'qs'
  export default {
    components: {},
    props: {

    },
    data() {
      return {
        addAde:{
          event_num: 'BL202011150001',// 事件编号
          event_type: '',// 不良类型
          occur_scene: '',// 发生地点
          patient_name:'',//患者姓名
          sex: '',// 性别
          age: '', // 年龄
          specific_age: '',//年龄类别
          hospitalized_time: '',// 入院日期
          department_id: '',// 科室
          bed_number: '',// 床号
          admission_id: '',// 住院号
          occur_time: '',// 不良发生时间
          create_time: '',// 报告时间
          Indications_uid: '',// 主管医师
          nurse_uid: '',// 主管护士
          stakeholder: '',// 在场相关人员
          create_uid: '',// 上报人
          degree_weight_id: '',// 轻重程度
          admitting_diagnosis: '',// 入院诊断
          diagnosis_process: '',// 诊疗经过
          patient_situation: '',// 患者目前情况
          event_describe: '',// 不良事件描述
        },
        options: [],
        options1: [],
        options4: [],
        tableData: [{
          name: '王小虎',
          sex: '男',
          date: '1998-05-02 ',
          phone: '13612345656',
          address: '城中区人民大道188号9栋302',
          depart: '门诊/急诊',
          diagnosis: '高血压',
        }, ],
      };
    },
    methods: {
      // 提交
      sure() {
        let params=this.addAde
        service.badAdd(params).then(res=>{
          console.log(res)
          if(res.code==20010){
            this.$emit('pageAdd')
          }
        });
      },
      // 返回
      back() {
        this.$emit('pageAdd')
      },
      // 取消关联
      // 查看
      handleClick(row) {
        console.log(row);
      },

    },
    created(){
      service.badType().then(res=>{
        console.log(res)
        this.options=res.choice_type
        this.options1=res.address
        this.options4=res.degree_weight
      })
    },
    filters: {
        addAde: function (value) {
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
        }
    },
  }
</script>
<style>

</style>