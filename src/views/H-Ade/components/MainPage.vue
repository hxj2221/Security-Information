<template>
  <div class="mainBl">
    <!-- 头部按钮 -->
    <div class="header">
      <h4>不良事件</h4>
      <div class="btn">
        <i class="el-icon-circle-plus-outline" @click="Add()">&nbsp;<span>新增不良</span></i>
        <i class="fa fa-sign-in" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;<span>导出</span></i>
      </div>
    </div>
    <!-- 检索 -->
    <div class="searchAll">
      <el-form ref="form" :model="search" label-width="90px">
        <el-form-item label="患者姓名">
          <el-input v-model="search.name" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="发生地点">
          <el-select v-model="search.value" placeholder="请选择">
            <el-option v-for="item in search.options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="事发日期">
          <el-date-picker v-model="search.date" type="daterange" align="right" unlink-panels range-separator="至"
            start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="search">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="轻重程度">
          <el-select class="sel" v-model="search.value1" placeholder="请选择">
            <el-option v-for="item in search.options1" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-button class="search" type="primary" icon="el-icon-search"></el-button>
      </el-form>
    </div>
    <!-- 内容 -->
    <el-table class="elTable" :data="tableData">
      <el-table-column type="index" label="序号">
      </el-table-column>
      <el-table-column prop="serialNum" label="事件编码">
      </el-table-column>
      <el-table-column prop="name" label="患者姓名">
      </el-table-column>
      <el-table-column prop="sex" label="性别">
      </el-table-column>
      <el-table-column prop="age" label="年龄">
      </el-table-column>
      <el-table-column prop="date" label="事发日期">
      </el-table-column>
      <el-table-column prop="place" label="发生场所">
      </el-table-column>
      <el-table-column prop="level" label="轻重程度" width="80">
      </el-table-column>
      <el-table-column prop="date1" label="上报时间">
      </el-table-column>
      <el-table-column prop="depart" label="患者科室">
      </el-table-column>
      <el-table-column prop="person" label="上报人">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="page">
      <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
          // 检索
      search: {
        name: '',
        way: '',
        state: '',
        date: '',
        options: [{
          value: '选项1',
          label: '急诊'
        }, {
          value: '选项2',
          label: '门诊'
        }, {
          value: '选项3',
          label: '病房部'
        }, {
          value: '选项4',
          label: '手术室'
        }, {
          value: '选项5',
          label: '医技检查室'
        }, {
          value: '选项6',
          label: '后勤区域'
        }, {
          value: '选项7',
          label: '其他'
        }],
        value: '',
        options1: [{
          value: '选项1',
          label: 'A级：客观环境或条件可能引发不良事件（隐患）'
        }, {
          value: '选项2',
          label: 'B级：发生但未累及患者'
        }, {
          value: '选项3',
          label: 'C级：累及到患者，但没有造成伤害'
        }, {
          value: '选项4',
          label: 'D级：累及到患者，需要进行监测以确保患者不被伤害，或需通过干预阻止伤害发生'
        }, {
          value: '选项5',
          label: 'E级：造成患者暂时性伤害，并需要进行治疗或干预'
        }, {
          value: '选项6',
          label: 'F级：造成患者暂时性伤害，并需要住院或延长住院时间'
        }, {
          value: '选项7',
          label: 'G级：造成患者永久性伤害'
        }, {
          value: '选项8',
          label: 'H级：导致患者需要治疗挽救生命'
        }, {
          value: '选项9',
          label: 'I级：导致患者死亡'
        }, ],
        value1: ''
      },
      // 内容
      tableData: [{
          serialNum: '202011151036',
          name: '王小虎',
          sex: '男',
          age: '45',
          date: '2016-05-02 13:20:13',
          place: '外科',
          level: 'A',
          date1: '2019-11-12 12:08:12',
          depart: '外科',
          person: '王冕'
        }, {
          serialNum: '202011151036',
          name: '王小虎',
          sex: '男',
          age: '45',
          date: '2016-05-02 13:20:13',
          place: '外科',
          level: 'A',
          date1: '2019-11-12 12:08:12',
          depart: '外科',
          person: '王冕'
        }, {
          serialNum: '202011151036',
          name: '王小虎',
          sex: '男',
          age: '45',
          date: '2016-05-02 13:20:13',
          place: '外科',
          level: 'A',
          date1: '2019-11-12 12:08:12',
          depart: '外科',
          person: '王冕'
        }, {
          serialNum: '202011151036',
          name: '王小虎',
          sex: '男',
          age: '45',
          date: '2016-05-02 13:20:13',
          place: '外科',
          level: 'A',
          date1: '2019-11-12 12:08:12',
          depart: '外科',
          person: '王冕'
        }, {
          serialNum: '202011151036',
          name: '王小虎',
          sex: '男',
          age: '45',
          date: '2016-05-02 13:20:13',
          place: '外科',
          level: 'A',
          date1: '2019-11-12 12:08:12',
          depart: '外科',
          person: '王冕'
        }, {
          serialNum: '202011151036',
          name: '王小虎',
          sex: '男',
          age: '45',
          date: '2016-05-02 13:20:13',
          place: '外科',
          level: 'A',
          date1: '2019-11-12 12:08:12',
          depart: '外科',
          person: '王冕'
        }, {
          serialNum: '202011151036',
          name: '王小虎',
          sex: '男',
          age: '45',
          date: '2016-05-02 13:20:13',
          place: '外科',
          level: 'A',
          date1: '2019-11-12 12:08:12',
          depart: '外科',
          person: '王冕'
        }, {
          serialNum: '202011151036',
          name: '王小虎',
          sex: '男',
          age: '45',
          date: '2016-05-02 13:20:13',
          place: '外科',
          level: 'A',
          date1: '2019-11-12 12:08:12',
          depart: '外科',
          person: '王冕'
        }, {
          serialNum: '202011151036',
          name: '王小虎',
          sex: '男',
          age: '45',
          date: '2016-05-02 13:20:13',
          place: '外科',
          level: 'A',
          date1: '2019-11-12 12:08:12',
          depart: '外科',
          person: '王冕'
        }, {
          serialNum: '202011151036',
          name: '王小虎',
          sex: '男',
          age: '45',
          date: '2016-05-02 13:20:13',
          place: '外科',
          level: 'A',
          date1: '2019-11-12 12:08:12',
          depart: '外科',
          person: '王冕'
        }, ],
      };
    },
    methods: {
      // 新增
      Add(){
        this.$emit('pageAdd')
      },
      // 查看
      handleClick(row) {
        console.log(row);
        this.$emit('pageDetail')
      },
    },
  }
</script>
<style>
</style>