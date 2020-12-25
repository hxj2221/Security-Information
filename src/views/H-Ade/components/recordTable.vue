<template>
  <div>
    <el-table class="elTable"  :data="tableData" style="width: 96%">
      <el-table-column type="index" label="序号" width="80">
      </el-table-column>
      <el-table-column prop="serialNum" label="事件编码" width="150">
      </el-table-column>
      <el-table-column prop="name" label="患者姓名" width="120">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="80">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="80">
      </el-table-column>
      <el-table-column prop="date" label="事发日期" width="180">
      </el-table-column>
      <el-table-column prop="place" label="发生场所" width="170">
      </el-table-column>
      <el-table-column prop="level" label="轻重程度" width="120">
      </el-table-column>
      <el-table-column prop="date1" label="上报时间" width="180">
      </el-table-column>
      <el-table-column prop="depart" label="患者科室" width="170">
      </el-table-column>
      <el-table-column prop="person" label="上报人" width="120">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 查看 -->
    <el-dialog :visible.sync="dialogVisible" width="50%" >
      <check-bad></check-bad>      
    </el-dialog>
  </div>
</template>

<script>
import CheckBad from './see'
  export default {
    components: {
      CheckBad
    },
    props: {
      data:Array
    },
    data() {
      return {
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
        dialogVisible:false
      };
    },
    methods: {
      // 查看
      handleClick(row) {
        console.log(row);
        this.dialogVisible=true
      },
    },
  }
</script>
<style>
  /*  表格 */
  .elTable {
    margin: 0 30px;
  }
</style>