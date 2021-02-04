import service from '@/service/index';
<template>
  <div class="addAll">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <!-- 新增 -->
    <div class="formBasics">
      <h2>基本信息</h2>
      <el-form class="form_con" ref="addAde" :model="addAde">
        <el-row type="flex" class="row-bg info" justify="space-around">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="业务编号">
                <el-input v-model="addAde.event_num" :disabled="true" autocomplete="off">
                </el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-form-item label="不良类型" required>
                <el-select clearable v-model="addAde.event_type">
                  <el-option v-for="item in options" :key="item.id" :label="item.title" :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="不良发生地点" required>
                <el-select clearable v-model="addAde.occur_scene">
                  <el-option v-for="item in options1" :key="item.id" :label="item.title" :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg info" justify="space-around">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="患者姓名" required>
                <el-input clearable v-model="addAde.patient_name" autocomplete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-form-item label="性别" required>
                <el-select clearable v-model="addAde.sex" placeholder="请选择">
                  <el-option label="男" value="2"></el-option>
                  <el-option label="女" value="1"></el-option>
                  <el-option label="未知" value="3"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="年龄">
                <el-input placeholder="请输入内容" v-model="addAde.age" class="input-with-select inp">
                  <template slot="append">
                    <el-select slot="prepend" style="width: 60px" v-model="addAde.specific_age">
                      <el-option label="岁" value="1"></el-option>
                      <el-option label="月" value="2"></el-option>
                      <el-option label="天" value="3"></el-option>
                    </el-select>
                  </template>
                </el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg info" justify="space-around">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="入院日期" required>
                <el-date-picker v-model="addAde.hospitalized_time" type="datetime" placeholder="选择日期时间">
                </el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-form-item label="科室" required>
                <el-select clearable v-model="addAde.department_id" placeholder="请选择">
                  <el-option v-for="item in department" :key="item.id" :label="item.title" :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="床号" required>
                <el-input clearable v-model="addAde.bed_number" autocomplete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg info" justify="space-around">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="住院号" required>
                <el-input clearable v-model="addAde.admission_id" autocomplete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-form-item label="不良发生时间" required>
                <el-date-picker v-model="addAde.occur_time" type="datetime" placeholder="选择日期时间">
                </el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="报告时间" required>
                <el-date-picker v-model="addAde.create_time" type="datetime" placeholder="选择日期时间">
                </el-date-picker>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg info" justify="space-around">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="主管医师" required>
                <el-input clearable v-model="addAde.Indications_uid" autocomplete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-form-item label="主管护士" required>
                <el-input clearable v-model="addAde.nurse_uid" autocomplete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="在场相关人员" required>
                <el-input clearable v-model="addAde.stakeholder" autocomplete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg info info_last" justify="space-around">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="上报人" required>
                <el-input clearable v-model="addAde.create_uid" autocomplete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content last bg-purple">
              <el-form-item label="轻重程度" required label-width="180">
                <el-select clearable v-model="addAde.degree_weight_id" placeholder="请选择">
                  <el-option v-for="item in options4" :key="item.id" :label="item.title" :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="22" :push="1">
            <el-form-item label="入院诊断" required>
              <el-input clearable type="textarea" v-model="addAde.admitting_diagnosis"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="22" :push="1">
            <el-form-item label="诊疗经过" required>
              <el-input clearable type="textarea" v-model="addAde.diagnosis_process"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="22" :push="1">
            <el-form-item label="患者目前情况" required>
              <el-input clearable type="textarea" v-model="addAde.patient_situation"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="22" :push="1">
            <el-form-item style="width:100%" label="不良事件描述" required>
              <el-input clearable type="textarea" v-model="addAde.event_describe"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 关联 -->
    <div class="table_info">
      <h2>关联患者信息（调用HIS）</h2>
      <el-table class="info" :data="tableData" :header-cell-style="getRowClass">
        <el-table-column type="index" label="序号" width="100">
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
        <el-table-column label="操作" fixed="right">
          <template slot-scope="scope">
            <el-button style="color:#666ee8" @click="handleClick(scope.row)" type="text" size="small">取消关联</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="add">
        <i class="el-icon-circle-plus-outline"><span>添加患者信息</span></i>
      </div>
    </div>
      </div>
    </div>
    
    <!-- 底部按钮 -->
    <div class="root">
      <el-button type="primary" size="medium" class="AdeSure" icon="iconfont el-icon-hospital-passwordbaocun" @click="sure">提交
      </el-button>
      <el-button type="primary" size="medium" class="AdeBack" icon="iconfont el-icon-hospital-passwordai207" @click="back">返回
      </el-button>
    </div>
  </div>

</template>

<script>
  import service from '@/service/index'
  import qs from 'qs'
   import BScroll from 'better-scroll'
  export default {
    components: {},
    inject: ["reload"],
    props: {

    },
    data() {
      return {
        addAde: {
          event_num: '', //事件编号
          event_type: '', //不良类型
          occur_scene: '', //发生地点
          patient_name: '', //患者姓名
          sex: '', //性别
          age: '', //年龄
          specific_age: '1', //年龄类别
          hospitalized_time: '', //入院日期
          department_id: '', //科室
          bed_number: '', //床号
          admission_id: '', //住院号
          occur_time: '', //不良发生时间
          create_time: '', //报告时间
          Indications_uid: '', //主管医师
          nurse_uid: '', //主管护士
          stakeholder: '', //在场相关人员
          create_uid: '', //上报人
          degree_weight_id: '', //轻重程度
          admitting_diagnosis: '', //入院诊断
          diagnosis_process: '', //诊疗经过
          patient_situation: '', //患者目前情况
          event_describe: '', //不良事件描述
        },
        category: [{
            label: '月',
            id: 2
          },
          {
            label: '天',
            id: 3
          },
        ], //年龄类别
        options: [], //不良类型
        department: [], //科室
        options1: [], //发生场所
        options4: [], //轻重程度
        tableData: [{
          name: '王小虎',
          sex: '男',
          date: '1998-05-02 ',
          phone: '13612345656',
          address: '城中区人民大道188号9栋302',
          depart: '门诊/急诊',
          diagnosis: '高血压',
        }, ], //关联患者信息
      };
    },
    methods: {
      // 设置表头颜色
      getRowClass({
        rowIndex
      }) {
        if (rowIndex == 0) {
          return "background:#c2c5f6;color:#000";
        } else {
          return "";
        }
      },
      // 提交
      sure() {
        let params = this.addAde
        service.badAdd(params).then(res => {
          if (res.code == 20010) {
            this.$emit('pageAdd')
            this.reload();
            this.$message({
              message: '添加成功',
              type: 'success',
              duration: 1000,
            });
          } 
        });
      },
      // 返回列表页
      back() {
        this.$emit('pageAdd');
        this.addAde.event_num = ''; // 清空事件编号
        this.addAde.event_type = ''; // 清空不良类型
        this.addAde.occur_scene = ''; // 清空发生地点
        this.addAde.patient_name = ''; //清空患者姓名
        this.addAde.sex = ''; // 清空性别
        this.addAde.age = ''; // 清空年龄
        this.addAde.specific_age = ''; //清空年龄类别
        this.addAde.hospitalized_time = ''; // 清空入院日期
        this.addAde.department_id = ''; // 清空科室
        this.addAde.bed_number = ''; // 清空床号
        this.addAde.admission_id = ''; //清空 住院号
        this.addAde.occur_time = ''; // 清空不良发生时间
        this.addAde.create_time = ''; //清空 报告时间
        this.addAde.Indications_uid = ''; //清空 主管医师
        this.addAde.nurse_uid = ''; // 清空主管护士
        this.addAde.stakeholder = ''; //清空 在场相关人员
        this.addAde.create_uid = ''; // 清空上报人
        this.addAde.degree_weight_id = ''; // 清空轻重程度
        this.addAde.admitting_diagnosis = ''; // 清空入院诊断
        this.addAde.diagnosis_process = ''; // 清空诊疗经过
        this.addAde.patient_situation = ''; // 清空患者目前情况
        this.addAde.event_describe = ''; // 清空不良事件描述
      },
      // 取消关联
      // 查看
      handleClick(row) {
      },

    },
    created() {
      // 下拉框
      service.AdeSel().then(res => {
        if (res.cede == 20010) {
          this.options = res.choice_type //不良类型
          this.options1 = res.address //发生场所
          this.options4 = res.degree_weight //轻重程度
          this.department = res.department //科室
        } 

      })
      let that = this
      this.bus.$on('eventNum', function (item) {
        that.addAde.event_num = item
      })
    },
    mounted() {
      const bs = new BScroll('.wrapper', {
        // pullUpLoad: true,
        // pullDownRefresh: true,
        probeType:3,
        mouseWheel: true
        
      })
    }
  }
</script>
<style scoped>
.wrapper{
  height: 750px;
  overflow: hidden;
}
.content{
  padding-bottom: 100px;
}
</style>